using KinoBank.Infrastructure.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace KinoBank.Infrastructure.Services
{
    public class JWTService
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public JWTService(
            UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<string> GetTokenAsync(ApplicationUser user,
            string issuer,
            string audiance,
            string expTime,
            string securityKey)
        {
            var jwtOptions = new JwtSecurityToken(
                    issuer: issuer,
                    audience: audiance,
                    claims: await GetClaimsAsync(user),
                    expires: DateTime.Now.AddMinutes(
                        Convert.ToDouble(expTime)),
                    signingCredentials: GetSigningCredentials(securityKey)
                );
            var accessToken = new JwtSecurityTokenHandler().WriteToken(jwtOptions);
            return accessToken;
        }

        private SigningCredentials GetSigningCredentials(string securityKey)
        {
            var key = Encoding.UTF8.GetBytes(securityKey);
            var secret = new SymmetricSecurityKey(key);
            return new SigningCredentials(secret,
            SecurityAlgorithms.HmacSha256);
        }

        private async Task<List<Claim>> GetClaimsAsync(ApplicationUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Email)
            };

            foreach (var role in await _userManager.GetRolesAsync(user))
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            return claims;
        }
    }
}
