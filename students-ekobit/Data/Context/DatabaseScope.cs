namespace Data.Context
{
    public class DatabaseScope : IDatabaseScope
    {
        public AppDbContext DbContext { get; set; }

        public DatabaseScope(AppDbContext dbContext)
        {
            DbContext = dbContext;
        }

        public Task<int> SaveAsync()
        {
            return DbContext.SaveChangesAsync();
        }

        public int Save()
        {
            return DbContext.SaveChanges();
        }
    }
}
