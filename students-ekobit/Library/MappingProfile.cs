using AutoMapper;
using Entities = Data.Entities;
using Library.Models;

namespace Library
{
    public class MappingProfile : Profile
    {

        public MappingProfile()
        {
            CreateMap<Entities.Movie, Movie>();
            CreateMap<Entities.Theatre, Theatre>();
            CreateMap<Entities.MovieShowtime, MovieShowtime>();
            CreateMap<Movie, Entities.Movie>();
            CreateMap<Theatre, Entities.Theatre>();
            CreateMap<MovieShowtime, Entities.MovieShowtime>();
        }

    }
}
