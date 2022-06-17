using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Entities
{
    [Table("Movie", Schema="movies")]
    public class Movie : IEntity<int>
    {
        public int Id { get; set; }

        public string Title { get; set; }   

        public int Duration { get; set; }

        public string Country { get; set; }

        public decimal Rating { get; set; }

        [InverseProperty("Movie")]
        public ICollection<MovieShowtime> MovieShowtime { get; set; }
    }
}
