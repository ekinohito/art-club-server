import IRepository from "./IRepository";
import Quote from "../models/Quote";

class QuotesRepository implements IRepository<Quote>{
    constructor(props) {

    }


    Create(item: Quote): Promise<Quote> {
        return Promise.resolve(undefined);
    }

    Delete(id: number): Promise<Quote> {
        return Promise.resolve(undefined);
    }

    Get(id: number): Promise<Quote> {
        return Promise.resolve(undefined);
    }

    GetAll(): Promise<Quote[]> {
        return Promise.resolve([]);
    }

    Update(id: number, item: Quote): Promise<Quote> {
        return Promise.resolve(undefined);
    }

}