import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    logIn(name: string, password: string): Promise<any>;
}
