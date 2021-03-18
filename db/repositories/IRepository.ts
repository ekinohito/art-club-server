export default interface IRepository<T> {
    GetAll(): Promise<T[]>;
    Get(id: number): Promise<T>;
    Create(item: T): Promise<T>;
    Update(id: number, item: T): Promise<T>;
    Delete(id: number): Promise<T>;
}