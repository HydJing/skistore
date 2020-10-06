using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public string GetProducts()
        {
            return "this will be products string";
        }

        [HttpGet("{id}")]
        public string GetProduct()
        {
            return "this will be a product string";
        }
    }
}