using KinoBank.Infrastructure.Data;
using KinoBank.Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace KinoBank.Controllers.Api
{
    //TODO: Remove logic from controller
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class SeedController : Controller
    {
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly AppIdentityDbContext _context;

        public SeedController(
            RoleManager<IdentityRole> roleManager,
            UserManager<ApplicationUser> userManager,
            AppIdentityDbContext context)
        {
            _roleManager = roleManager;
            _userManager = userManager;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> CreateDefaultUsers()
        {
            string role_RegisteredUser = "RegisteredUser";
            string role_Administrator = "Administrator";

            if (await _roleManager.FindByNameAsync(role_RegisteredUser) ==
            null)
                await _roleManager.CreateAsync(new
                IdentityRole(role_RegisteredUser));

            if (await _roleManager.FindByNameAsync(role_Administrator) ==
            null)
                await _roleManager.CreateAsync(new
                IdentityRole(role_Administrator));

            var addedUserList = new List<ApplicationUser>();
            var email_Admin = "admin@email.com";
            if (await _userManager.FindByNameAsync(email_Admin) == null)
            {
                var user_Admin = new ApplicationUser()
                {
                    SecurityStamp = Guid.NewGuid().ToString(),
                    UserName = email_Admin,
                    Email = email_Admin,
                };
                await _userManager.CreateAsync(user_Admin, "Sampl3Pa$$");
                await _userManager.AddToRoleAsync(user_Admin,
                role_RegisteredUser);
                await _userManager.AddToRoleAsync(user_Admin,
                role_Administrator);
                user_Admin.EmailConfirmed = true;
                user_Admin.LockoutEnabled = false;
                addedUserList.Add(user_Admin);
            }
            var email_User = "user@gmail.com";
            if (await _userManager.FindByNameAsync(email_User) == null)
            {
                var user_User = new ApplicationUser()
                {
                    SecurityStamp = Guid.NewGuid().ToString(),
                    UserName = email_User,
                    Email = email_User
                };
                await _userManager.CreateAsync(user_User, "Sampl3Pa$$");
                await _userManager.AddToRoleAsync(user_User,
                role_RegisteredUser);
                user_User.EmailConfirmed = true;
                user_User.LockoutEnabled = false;
                addedUserList.Add(user_User);
            }
            if (addedUserList.Count > 0)
                await _context.SaveChangesAsync();
            return new JsonResult(new
            {
                Count = addedUserList.Count,
                Users = addedUserList
            });
        }
    }
}
