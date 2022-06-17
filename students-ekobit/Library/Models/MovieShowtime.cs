namespace Library.Models
{
    public class MovieShowtime
    {
        public int Id { get; set; }

        public int TheatreId { get; set; }

        public int MovieId { get; set; }

        public string Auditorium { get; set; }

        public DateTime StartTime { get; set; }

        public Movie Movie { get; set; }

        public Theatre Theatre { get; set; }
    }
}
