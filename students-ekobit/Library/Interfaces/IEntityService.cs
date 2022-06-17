namespace Library.Interfaces
{
    public interface IEntityService<TModel, TKeyType>
    {
        Task<List<TModel>> GetAllAsync();

        Task<TModel> GetAsync(TKeyType id);

        Task<TModel> CreateAsync(TModel model);

        Task<TModel> UpdateAsync(TKeyType id, TModel model);

        Task DeleteAsync(TKeyType id);
    }
}
