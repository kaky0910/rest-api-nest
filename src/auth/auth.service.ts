import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthUserDto } from 'src/user/dto/auth-user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(userId: string, pass: string): Promise<any> {
    const user = await this.userService.findByAuthentication(
      new AuthUserDto(userId, pass),
    );
    if (user && user[0]) {
      const { user_pwd, ...result } = user[0];
      return result;
    }
    return null;
  }
}
