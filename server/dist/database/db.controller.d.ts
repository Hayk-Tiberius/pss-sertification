import { DatabaseService } from "./db.service";
export declare class DatabaseController {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    getTables(): Promise<any>;
    getColumns(tableName: string): Promise<any>;
}
