using Data.Context;
using AutoMapper;
using Data.Entities;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// database
builder.Services.AddDbContext<AppDbContext>();
builder.Services.AddScoped<IDatabaseScope, DatabaseScope>();
builder.Services.AddScoped<IGenericRepository<Movie>, GenericRepository<Movie>>();
builder.Services.AddScoped<IGenericRepository<Theatre>, GenericRepository<Theatre>>();
builder.Services.AddScoped<IGenericRepository<MovieShowtime>, GenericRepository<MovieShowtime>>();

// automapper
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

// services
builder.Services.AddScoped<Library.Services.MovieService>();
builder.Services.AddScoped<Library.Services.TheatreService>();
builder.Services.AddScoped<Library.Services.MovieShowtimeService>();

var app = builder.Build();
SeedDatabase();    

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

void SeedDatabase()
{
    using (var scope = app.Services.CreateScope())
    {
        try
        {
            var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            dbContext.Database.Migrate();
            dbContext.Seed();
        }
        catch (Exception ex)
        {

        }
    }
}
