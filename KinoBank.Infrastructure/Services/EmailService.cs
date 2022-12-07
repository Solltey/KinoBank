using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Mail;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using KinoBank.Infrastructure.Data;
using Microsoft.AspNetCore.Hosting;

namespace KinoBank.Infrastructure.Services
{
    public class EmailService
    {
        private readonly IWebHostEnvironment _hostingEnvironment;

        public EmailService(IWebHostEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        public async Task SendEmailByGmailAsync(ApplicationUser user, string fromEmail, string fromFullName, string smtpUser, string smtpPassword, string smtpHost,
            int smtpPort, bool smtpSSL, string confirmationLink)
        {
            try
            {
                var body = BuildConfirmationEmailBody(user.UserName, user.Email, confirmationLink);
                var message = new MailMessage();
                message.To.Add(new MailAddress(user.Email, user.UserName));
                message.From = new MailAddress(fromEmail, fromFullName);
                message.Subject = "Email Confirmation";
                message.Body = body;
                message.IsBodyHtml = true;

                using var smtp = new SmtpClient();
                var credential = new NetworkCredential
                {
                    UserName = smtpUser,
                    Password = smtpPassword
                };
                smtp.Credentials = credential;
                smtp.Host = smtpHost;
                smtp.Port = smtpPort;
                smtp.EnableSsl = smtpSSL;
                await smtp.SendMailAsync(message);
            }
            catch (Exception ex)
            {
                //TODO: Logger
                Console.WriteLine(ex.Message);
            }

        }

        public string BuildConfirmationEmailBody(string username, string email, string confirmationLink)
        {
            var emailBody = "";

            try
            {
                var strTemplateFilePath = _hostingEnvironment.ContentRootPath + "/wwwroot/lib/EmailTemplates/ConfirmationEmailTemplate.txt";
                var reader = new StreamReader(strTemplateFilePath);
                emailBody = reader.ReadToEnd();
                reader.Close();
            }
            catch (Exception ex)
            {
                //TODO: Logger
                Console.WriteLine(ex.Message);
            }

            emailBody = emailBody.Replace("{dateTime}", DateTime.Now.ToString("mm/dd/yyyy"));
            emailBody = emailBody.Replace("{username}", username);
            emailBody = emailBody.Replace("{email}", email);
            emailBody = emailBody.Replace("{confirmationLink}", confirmationLink);

            return emailBody;
        }
    }
}
