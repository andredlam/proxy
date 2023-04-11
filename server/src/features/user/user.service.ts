import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { UserDto, CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UserService {

    constructor(
        private readonly prisma: PrismaService,
    ) { }

    create(createUserDto: CreateUserDto) {
        return 'This action adds a new user';
    }

    findAll() {
        return `This action returns all user`;
    }

    // findOne(where: Prisma.guacamole_userWhereUniqueInput): Promise<UserDto | undefined> { {
    //     try {
    //         const entity = await this.prisma.guacamole_user.findUnique({
    //             where,
    //         });
    //         return UserDto.fromEntity(entity);
    //     } catch (error) {
    //         throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    //     }

    //     // return `This action returns a #${id} user`;
    // }

    // update(id: number, updateUserDto: UpdateUserDto) {
    //     return `This action updates a #${id} user`;
    // }

    // remove(id: number) {
    //     return `This action removes a #${id} user`;
    // }
}
