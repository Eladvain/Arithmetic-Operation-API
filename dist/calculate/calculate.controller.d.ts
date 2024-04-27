import { CalculateService } from "./calculate.service";
import { numericDto } from "./numericDto/numericDto";
export declare class CalculateController {
    private calculateService;
    constructor(calculateService: CalculateService);
    calculate(createNumericDto: numericDto, operation: string): Object;
}
