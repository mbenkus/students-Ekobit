using Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace Data.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) 
            : base(options)
        {

        }

        public virtual DbSet<Theatre> Theatres { get; set; }

        public virtual DbSet<Movie> Movies { get; set; }

        public virtual DbSet<MovieShowtime> MoviesShowtime { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=localhost;Database=movie_db;Trusted_Connection=True;MultipleActiveResultSets=true;";
            optionsBuilder.UseSqlServer(connectionString);
        }

    }
}
