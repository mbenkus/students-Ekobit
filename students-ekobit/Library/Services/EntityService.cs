using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Data.Entities;
using Library.Interfaces;
using Data.Context;

namespace Library.Services
{
    public abstract class EntityService<TEntity, TModel, TKeyType> : IEntityService<TModel, TKeyType>
        where TEntity : class, IEntity<TKeyType>, new()
        where TModel : class
    {
        protected readonly IDatabaseScope _database;
        protected readonly IGenericRepository<TEntity> _entityRepository;
        private readonly IMapper _mapper;

        public IGenericRepository<TEntity> EntityRepository
        {
            get
            {
                return _entityRepository;
            }
        }

        protected EntityService(IDatabaseScope database, IGenericRepository<TEntity> entityRepository, IMapper mapper)
        {
            _database = database;
            _entityRepository = entityRepository;
            _mapper = mapper;
        }

        public async virtual Task<List<TModel>> GetAllAsync()
        {
            var list = new List<TModel>();

            await GetAllEntities(_entityRepository.AsReadOnly())
                .ForEachAsync(e => list.Add(_mapper.Map<TModel>(e)));

            return list;
        }

        public async virtual Task<TModel> GetAsync(TKeyType id)
        {
            return await _mapper.ProjectTo<TModel>(GetSingleEntityQuery(_entityRepository.AsReadOnly(), id))
                .FirstAsync();
        }        

        public async virtual Task<TModel> CreateAsync(TModel model)
        {
            var entity = new TEntity();
            UpdateEntity(entity, model);

            _entityRepository.Insert(entity);
            await _database.SaveAsync();

            return _mapper.Map<TModel>(entity);
        }

        public async virtual Task<TModel> UpdateAsync(TKeyType id, TModel model)
        {
            var entity = await GetEntityByIdAsync(_entityRepository.GetAll(), id);

            UpdateEntity(entity, model);

            await _database.SaveAsync();

            return _mapper.Map<TModel>(entity);
        }

        public async virtual Task DeleteAsync(TKeyType id)
        {
            var entity = await GetEntityByIdAsync(_entityRepository.GetAll(), id);

            _entityRepository.Delete(entity);
            await _database.SaveAsync();
        }

        protected virtual Task<TEntity> GetEntityByIdAsync(IQueryable<TEntity> query, TKeyType id)
        {
            return GetSingleEntityQuery(query, id).FirstOrDefaultAsync();
        }

        public virtual Task<TEntity> GetReadonlyEntityByIdAsync(TKeyType id)
        {
            return GetSingleEntityQuery(_entityRepository.AsReadOnly(), id).FirstOrDefaultAsync();
        }                    

        protected abstract IQueryable<TEntity> GetSingleEntityQuery(IQueryable<TEntity> query, TKeyType id);

        public virtual IQueryable<TEntity> GetAllEntities(IQueryable<TEntity> query)
        {
            return query;
        }

        protected virtual void UpdateEntity(TEntity entity, TModel model)
        {
            _mapper.Map(model, entity);
        }
    }
}



