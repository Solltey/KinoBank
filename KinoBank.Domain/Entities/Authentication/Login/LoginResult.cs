using System;
using System.Collections.Generic;
using System.Text;

namespace KinoBank.Domain.Entities.Authentication.Login
{
    public class LoginResult
    {
        public bool Success { get; set; }
        public string Message { get; set; } = null;
        #nullable enable
        public string? Token { get; set; }
    }
}
