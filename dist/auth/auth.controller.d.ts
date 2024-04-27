import { AuthService } from "./auth.service";
import { UserDto } from "./userDto/userDto";
export declare class AuthController {
    private authSercive;
    constructor(authSercive: AuthService);
    login(user: UserDto): Promise<any>;
}
