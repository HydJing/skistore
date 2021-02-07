using System.IO;
using System.Threading.Tasks;
using API.Errors;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Stripe;
using Order = Core.Entities.OrderAggregate.Order;

namespace API.Controllers
{
    public class PaymentsController : BaseApiController
    {
        private readonly IPaymentService _paymentService;
        private const string WhSecret = "";
        private readonly ILogger<IPaymentService> _logger;
        public PaymentsController(IPaymentService paymentService, ILogger<IPaymentService> logger)
        {
            _logger = logger;
            _paymentService = paymentService;
        }

    [Authorize]
    [HttpPost("{basketId}")]
    public async Task<ActionResult<CustomerBasket>> CreateOrUpdatePaymentIntent(string basketId)
    {
        var basket = await _paymentService.CreateOrUpdatePaymentIntent(basketId);

        if (basket == null)
        {
            return BadRequest(new ApiResponse(400, "Problem with your basket"));
        }

        return basket;
    }

    [HttpPost("webhook")]
    public async Task<ActionResult> StripeWebhook()
    {

        var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();

        var stripeEvent = EventUtility.ConstructEvent(json, Request.Headers["Stripe-Signature"], WhSecret);

        PaymentIntent intent;
        Order order;

        switch (stripeEvent.Type)
        {
            case "payment_intent.successded":
                intent = (PaymentIntent)stripeEvent.Data.Object;
                
                _logger.LogInformation("Payment Succeeded: ", intent.Id);
                // TO DO: update order ith new status
                break;

            case "payment_intent.payment_failed":
            intent = (PaymentIntent)stripeEvent.Data.Object;
            _logger.LogInformation("Payment Failed: ", intent.Id);
            // TO DO: update order status
            break;
        }

        return new EmptyResult();
    }

}
}