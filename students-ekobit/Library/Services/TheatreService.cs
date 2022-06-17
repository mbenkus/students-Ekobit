using Entities = Data.Entities;
using Library.Models;
using Data.Context;
using AutoMapper;

namespace Library.Services
{
    public class TheatreService : EntityService<Entities.Theatre, Theatre, int>
    {
        public TheatreService(
            IDatabaseScope database,
            IGenericRepository<Entities.Theatre> repository,
            IMapper mapper)
            : base(database, repository, mapper)
        {

        }

        protected override IQueryable<Entities.Theatre> GetSingleEntityQuery(IQueryable<Entities.Theatre> query, int id)
        {
            return GetAllEntities(query).Where(m => m.Id == id);
        }
    }
}
