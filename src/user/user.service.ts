import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { SearchUserDto } from './dto/search-user.dto';
import { AuthUserDto } from './dto/auth-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    let user = CreateUserDto.toEntity(createUserDto);
    return this.userRepository.insert(user);
  }

  async findAll() {
    return this.userRepository.find({
      relations: {
        group: true,
      },
    });
  }

  async findOne(id: number) {
    return this.userRepository.findBy({
      id,
    });
  }

  async findBy(searchUserDto: SearchUserDto) {
    return this.userRepository.findBy(SearchUserDto.toEntity(searchUserDto));
  }

  async findByAuthentication(authUserDto: AuthUserDto) {
    return this.userRepository.findBy(AuthUserDto.toEntity(authUserDto));
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(
      { id },
      UpdateUserDto.toEntity(updateUserDto),
    );
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
