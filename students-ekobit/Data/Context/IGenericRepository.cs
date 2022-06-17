namespace Data.Context
{
    public interface IGenericRepository<TEntity>
        where TEntity : class
    {
        IQueryable<TEntity> GetAll();

        TEntity Insert(TEntity entity);

        void Delete(TEntity entity);

        IQueryable<TEntity> AsReadOnly();
    }
}
