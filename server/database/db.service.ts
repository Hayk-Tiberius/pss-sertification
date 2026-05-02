import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class DatabaseService {
  constructor(private readonly dataSource: DataSource) {}

  async getTables() {
    return this.dataSource.query("SHOW TABLES");
  }

  async getColumns(tableName: string) {
    return this.dataSource.query(`SHOW COLUMNS FROM \`${tableName}\``);
  }
}
