namespace Data.Entities
{
    public interface IEntity<TKeyType>
    {
        TKeyType Id { get; set; }   
    }
}
