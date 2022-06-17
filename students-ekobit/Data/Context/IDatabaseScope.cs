namespace Data.Context
{
    public interface IDatabaseScope
    {
        AppDbContext DbContext { get; set; }

        Task<int> SaveAsync();

        int Save();
    }
}
