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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const utills = require('../Utills/utills');
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async logIn(name, password) {
        const users = await utills.read_from_file('C:\\Users\\אלעד\\Desktop\\numeric-operation-api\\Arithmetic-Operation-API\\arithmetic-operation\\src\\users\\users.txt');
        const userIsExist = await users.find(element => element.name === name && element.password === password);
        if (typeof userIsExist === 'undefined') {
            throw new common_1.BadRequestException("User is not exist");
        }
        const payload = { userName: userIsExist.name, userPassword: userIsExist.password };
        return {
            access_token: this.jwtService.sign(payload, { secret: "jwt_token" })
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map