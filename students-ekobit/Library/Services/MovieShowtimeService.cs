using Entities = Data.Entities;
using Library.Models;
using Data.Context;
using AutoMapper;

namespace Library.Services
{
    public class MovieShowTimeService : EntityService<Entities.MovieShowtime, MovieShowtime, int>
    {
        public MovieShowTimeService(
            IDatabaseScope database,
            IGenericRepository<Entities.MovieShowtime> repository,
            IMapper mapper)
            : base(database, repository, mapper)
        {

        }

        protected override IQueryable<Entities.MovieShowtime> GetSingleEntityQuery(IQueryable<Entities.MovieShowtime> query, int id)
        {
            return GetAllEntities(query).Where(m => m.Id == id);
        }
    }
}
