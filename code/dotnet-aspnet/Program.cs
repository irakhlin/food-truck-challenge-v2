using FoodTruck.API;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

Api.MapRoutes(app);
app.MapControllers();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.RoutePrefix = "docs";
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Food Truck Challenge API");
});

app.Run();

public partial class Program { }
