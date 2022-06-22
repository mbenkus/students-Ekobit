using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Entities
{
    [Table("Theatre", Schema = "movies")]
    public class Theatre : IEntity<int>
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Telephone { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public int ZipCode { get; set; }
    }
}