"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseController = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("./db.service");
let DatabaseController = class DatabaseController {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    getTables() {
        return this.databaseService.getTables();
    }
    getColumns(tableName) {
        return this.databaseService.getColumns(tableName);
    }
};
exports.DatabaseController = DatabaseController;
__decorate([
    (0, common_1.Get)("tables"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DatabaseController.prototype, "getTables", null);
__decorate([
    (0, common_1.Get)("columns/:tableName"),
    __param(0, (0, common_1.Param)("tableName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DatabaseController.prototype, "getColumns", null);
exports.DatabaseController = DatabaseController = __decorate([
    (0, common_1.Controller)("database"),
    __metadata("design:paramtypes", [db_service_1.DatabaseService])
], DatabaseController);
//# sourceMappingURL=db.controller.js.map