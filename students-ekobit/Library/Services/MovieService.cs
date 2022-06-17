using Entities = Data.Entities;
using Library.Models;
using Data.Context;
using AutoMapper;

namespace Library.Services
{
    public class MovieService : EntityService<Entities.Movie, Movie, int>
    {
        public MovieService(
            IDatabaseScope database, 
            IGenericRepository<Entities.Movie> repository, 
            IMapper mapper)
            : base(database, repository, mapper)
        {

        }

        protected override IQueryable<Entities.Movie> GetSingleEntityQuery(IQueryable<Entities.Movie> query, int id)
        {
            return GetAllEntities(query).Where(m => m.Id == id);
        }
    }
}
