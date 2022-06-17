using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Entities
{
    [Table("MovieShowtime", Schema="movies")]
    public class MovieShowtime : IEntity<int>
    {
        public int Id { get; set; }

        public int TheatreId { get; set; }

        public int MovieId { get; set; }

        public string Auditorium { get; set; }

        public DateTime StartTime { get; set; }

        [ForeignKey("MovieId")]
        [InverseProperty("MovieShowtime")]
        public Movie Movie { get; set; }

        [ForeignKey("TheatreId")]
        [InverseProperty("MovieShowtime")]
        public Theatre Theatre { get; set; }
    }
}
