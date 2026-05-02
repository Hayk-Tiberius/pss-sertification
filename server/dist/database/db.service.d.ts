import { DataSource } from "typeorm";
export declare class DatabaseService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    getTables(): Promise<any>;
    getColumns(tableName: string): Promise<any>;
}
