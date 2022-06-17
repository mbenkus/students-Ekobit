using Microsoft.EntityFrameworkCore;

namespace Data.Context
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity>
        where TEntity : class
    {

        private AppDbContext _appDbContext;

        public GenericRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public IQueryable<TEntity> AsReadOnly()
        {
            return _appDbContext.Set<TEntity>().AsNoTracking();
        }

        public void Delete(TEntity entity)
        {
            _appDbContext.Set<TEntity>().Remove(entity);
        }

        public IQueryable<TEntity> GetAll()
        {
            return _appDbContext.Set<TEntity>();
        }

        public TEntity Insert(TEntity entity)
        {
            _appDbContext.Set<TEntity>().Add(entity);
            return entity;
        }
    }
}
