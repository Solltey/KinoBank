using KinoBank.Domain.Entities.Authentication.Login;
using KinoBank.Domain.Entities.Authentication.Registration;
using KinoBank.Infrastructure.Data;
using KinoBank.Infrastructure.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Threading.Tasks;

namespace KinoBank.Controllers.Api
{
    //TODO: Remove logic from controller
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly AppIdentityDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly JWTService _jwtService;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly EmailService _emailService;
        private readonly IConfiguration _configuration;

        public AccountController(
            AppIdentityDbContext context,
            UserManager<ApplicationUser> userManager,
            JWTService jwtHandler,
            SignInManager<ApplicationUser> signInManager,
            EmailService emailService,
            IConfiguration configuration)
        {
            _context = context;
            _userManager = userManager;
            _jwtService = jwtHandler;
            _signInManager = signInManager;
            _emailService = emailService;
            _configuration = configuration;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginRequest loginRequest)
        {
            var user = await _userManager.FindByEmailAsync(loginRequest.Email);

            if (user == null || !await _userManager.CheckPasswordAsync(user, loginRequest.Password))
            {
                return Unauthorized(new LoginResult()
                {
                    Success = false,
                    Message = "Invalid email or password"
                });
            }

            var canSignIn = await _signInManager.CanSignInAsync(user);

            if (!canSignIn)
            {
                return Unauthorized(new LoginResult()
                {
                    Success = false,
                    Message = "Confirm your email"
                });
            }

            var jwt = await _jwtService.GetTokenAsync(user, 
                _configuration["JwtSettings:Issuer"],
                _configuration["JwtSettings:Audiance"],
                _configuration["JwtSettings:ExpirationTimeInMinutes"],
                _configuration["JwtSettings:SecurityKey"]);
            return Ok(new LoginResult()
            {
                Success = true,
                Message = "Login successful",
                Token = jwt
            });
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register(RegistrationRequest registrationRequest)
        {
            if (await _userManager.FindByNameAsync(registrationRequest.Username) != null)
            {
                return Unauthorized(new RegistrationResult()
                {
                    Success = false,
                    Message = "Username is already taken"
                });
            }

            if (await _userManager.FindByEmailAsync(registrationRequest.Email) != null)
            {
                return Unauthorized(new RegistrationResult()
                {
                    Success = false,
                    Message = "User with this email already exists"
                });
            }

            var newUser = new ApplicationUser()
            {
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = registrationRequest.Username,
                Email = registrationRequest.Email,
            };

            await _userManager.CreateAsync(newUser,
                registrationRequest.Password);

            newUser.LockoutEnabled = false;

            await _context.SaveChangesAsync();

            var user = await _userManager.FindByNameAsync(registrationRequest.Username);

            var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);

            var link = Url.Link("Api", new { controller = "Account", action = "ConfirmEmail", userId = user.Id, code });

            await _emailService.SendEmailByGmailAsync(user, "kinobanknoreply@gmail.com",
                "KinoBank", "kinobanknoreply@gmail.com", "phnzomfdelwlgsgd",
                "smtp.gmail.com", 587, true, link);

            return Ok(new RegistrationResult()
            {
                Success = true,
                Message = "Please confirm your email"
            });
        }

        [HttpGet("ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail(string userId, string code)
        {
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null) return BadRequest();

            var result = await _userManager.ConfirmEmailAsync(user, code);
            if (result.Succeeded)
            {
                return Redirect(Url.Action("Index", "Home"));
            }

            return BadRequest();
        }
    }
}
