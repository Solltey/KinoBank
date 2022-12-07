using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace KinoBank.Domain.Entities.Authentication.Registration
{
    public class RegistrationRequest
    {
        [Required(ErrorMessage = "Username is required")]
        public string Username { get; set; } = null;
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; } = null;
        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; } = null;
    }
}
