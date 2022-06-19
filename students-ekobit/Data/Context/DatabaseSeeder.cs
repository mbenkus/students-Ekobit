using Data.Entities;

namespace Data.Context
{
    public static class DatabaseSeeder
    {
        public static void Seed(this AppDbContext context)
        {
            #region Movies

            var movies = new List<Movie>()
            {
                new Movie() { Title = "Fast&Furious", Duration = 120, Country = "USA", Rating = 8.4M},
                new Movie() { Title = "Amelie", Duration = 143, Country = "France", Rating = 7.4M},
                new Movie() { Title = "Inception", Duration = 180, Country = "USA", Rating = 8.9M},
                new Movie() { Title = "Silence of the Lambs", Duration = 167, Country = "USA", Rating = 9.4M}
            };

            foreach(var movie in movies)
            {
                var existingMovie = context.Movies.FirstOrDefault(x => x.Title == movie.Title && x.Duration == movie.Duration &&
                                                                    x.Country == movie.Country && x.Rating == movie.Rating);
                if (existingMovie == null)
                    context.Add(movie);
            }

            context.SaveChanges();

            #endregion

            #region Theatre

            var theatres = new List<Theatre>()
            {
                new Theatre() { Name = "Cinemax", Telephone = "000-000", Address = "Test address1", City = "Zagreb", State="Croatia", ZipCode=10000},
                new Theatre() { Name = "Cinestar", Telephone = "000-000", Address = "Test address2", City = "Zagreb", State="Croatia", ZipCode=10000},
                new Theatre() { Name = "Gaj", Telephone = "000-000", Address = "Test address3", City = "Varazdin", State="Croatia", ZipCode=42000},
                new Theatre() { Name = "Cinestar", Telephone = "000-000", Address = "Test address4", City = "Varazdin", State="Croatia", ZipCode=42000}
            };

            foreach (var theatre in theatres)
            {
                var existingTheatre = context.Theatres.FirstOrDefault(x => x.Name == theatre.Name && x.Telephone == theatre.Telephone &&
                                                                        x.City == theatre.City && x.State == theatre.State);
                if (existingTheatre == null)
                    context.Add(theatre);
            }

            context.SaveChanges();

            #endregion

            #region MovieShowtime

            var movieShowtimes = new List<MovieShowtime>()
            {
                new MovieShowtime() { TheatreId = 1, MovieId = 1, Auditorium = "Auditorium1", StartTime = DateTime.Now},
                new MovieShowtime() { TheatreId = 2, MovieId = 2, Auditorium = "Auditorium11", StartTime = DateTime.Now},
                new MovieShowtime() { TheatreId = 3, MovieId = 3, Auditorium = "AuditoriumA", StartTime = DateTime.Now},
                new MovieShowtime() { TheatreId = 4, MovieId = 4, Auditorium = "A4", StartTime = DateTime.Now},
                new MovieShowtime() { TheatreId = 1, MovieId = 1, Auditorium = "Auditorium - 000", StartTime = DateTime.Now},
                new MovieShowtime() { TheatreId = 2, MovieId = 2, Auditorium = "B2", StartTime = DateTime.Now},
                new MovieShowtime() { TheatreId = 3, MovieId = 3, Auditorium = "Auditorium 0", StartTime = DateTime.Now},
                new MovieShowtime() { TheatreId = 4, MovieId = 4, Auditorium = "Auditorium 201", StartTime = DateTime.Now},
            };

            foreach (var movieShowtime in movieShowtimes)
            {
                var existingMovieShowtime = context.MoviesShowtime.FirstOrDefault(x => x.TheatreId == movieShowtime.TheatreId && x.MovieId == movieShowtime.MovieId &&
                                                                                    x.Auditorium == movieShowtime.Auditorium && x.StartTime == movieShowtime.StartTime);
                if (existingMovieShowtime == null)
                    context.Add(movieShowtime);
            }

            context.SaveChanges();
            #endregion
        }
    }
}
