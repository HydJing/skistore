using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                var path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

                if (!context.ProductBrands.Any())
                {
                    var brandsData = File.ReadAllText(path + @"/Data/SeedData/brands.json");

                    var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);

                    foreach (var brandItem in brands)
                    {
                        context.ProductBrands.Add(brandItem);
                    }

                    await context.SaveChangesAsync();
                };

                if (!context.ProductTypes.Any())
                {
                    var typesData = File.ReadAllText(path + @"/Data/SeedData/brands.json");

                    var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);

                    foreach (var typeItem in types)
                    {
                        context.ProductTypes.Add(typeItem);
                    }

                    await context.SaveChangesAsync();
                };

                if (!context.Products.Any())
                {
                    var ProductsData = File.ReadAllText(path + @"/Data/SeedData/brands.json");

                    var products = JsonSerializer.Deserialize<List<Product>>(ProductsData);

                    foreach (var productItem in products)
                    {
                        context.Products.Add(productItem);
                    }

                    await context.SaveChangesAsync();
                };

                if (!context.DeliveryMethods.Any())
                {
                    var dmData = File.ReadAllText(path + @"/Data/SeedData/brands.json");

                    var methods = JsonSerializer.Deserialize<List<DeliveryMethod>>(dmData);

                    foreach (var item in methods)
                    {
                        context.DeliveryMethods.Add(item);
                    }

                    await context.SaveChangesAsync();
                };
            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<StoreContext>();
                logger.LogError(ex.Message);
            }
        }
    }
}