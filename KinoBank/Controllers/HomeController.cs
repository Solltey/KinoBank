using Microsoft.AspNetCore.Mvc;

namespace KinoBank.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
