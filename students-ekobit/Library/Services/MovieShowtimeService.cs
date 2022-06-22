using Entities = Data.Entities;
using Library.Models;
using Data.Context;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace Library.Services
{
    public class MovieShowtimeService : EntityService<Entities.MovieShowtime, MovieShowtime, int>
    {
        public MovieShowtimeService(
            IDatabaseScope database,
            IGenericRepository<Entities.MovieShowtime> repository,
            IMapper mapper)
            : base(database, repository, mapper)
        {

        }

        public override async Task<List<MovieShowtime>> GetAllAsync()
        {
            var showtimes = await _entityRepository.GetAll()
                .Include(e => e.Theatre)
                .Include(e => e.Movie)
                .ToListAsync();

            return _mapper.Map<List<Library.Models.MovieShowtime>>(showtimes);
        }

        protected override IQueryable<Entities.MovieShowtime> GetSingleEntityQuery(IQueryable<Entities.MovieShowtime> query, int id)
        {
            return GetAllEntities(query).Where(m => m.Id == id);
        }
    }
}
