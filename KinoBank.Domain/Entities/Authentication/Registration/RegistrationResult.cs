using System;
using System.Collections.Generic;
using System.Text;

namespace KinoBank.Domain.Entities.Authentication.Registration
{
    public class RegistrationResult
    {
        public bool Success { get; set; }
        public string Message { get; set; } = null;
    }
}
