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
exports.CalculateController = void 0;
const calculate_service_1 = require("./calculate.service");
const auth_guard_1 = require("../auth/auth.guard");
const numericDto_1 = require("./numericDto/numericDto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const exceptions_1 = require("@nestjs/common/exceptions");
let CalculateController = class CalculateController {
    constructor(calculateService) {
        this.calculateService = calculateService;
    }
    ;
    calculate(createNumericDto, operation) {
        const { x, y } = createNumericDto;
        const operation_header = operation;
        if (y === 0 && operation === 'divide')
            throw new exceptions_1.BadRequestException('Not Impossible to divide in 0');
        return this.calculateService.calculate(x, y, operation_header);
    }
};
exports.CalculateController = CalculateController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiHeader)({
        name: 'operation',
        example: 'add',
        enum: ['add', 'subtract', 'multiply', 'divide'],
        required: true
    }),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Execute the operation between 2 numeric numbers' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Successful calculation.', schema: { properties: { result: {} } } }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request', schema: { properties: { message: {}, error: {}, statusCode: {} } } }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized', schema: { properties: { message: {}, statusCode: {} } } }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Interval Server Error', schema: { properties: { message: {} } } }),
    (0, swagger_1.ApiBody)({ type: numericDto_1.numericDto, description: 'Json object of x and y are numeric numbers' }),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __param(1, (0, common_1.Headers)('operation')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [numericDto_1.numericDto, String]),
    __metadata("design:returntype", Object)
], CalculateController.prototype, "calculate", null);
exports.CalculateController = CalculateController = __decorate([
    (0, swagger_1.ApiTags)('calculate'),
    (0, common_1.Controller)('calculate'),
    __metadata("design:paramtypes", [calculate_service_1.CalculateService])
], CalculateController);
//# sourceMappingURL=calculate.controller.js.map