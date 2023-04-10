import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { CommonService } from '../../shared/common/common.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {

    constructor(
        private readonly prisma: PrismaService,
        private readonly common: CommonService
    ) { }

    create(createUserDto: CreateUserDto) {
        return 'This action adds a new user';
    }

    findAll() {
        return `This action returns all user`;
    }

    findOne(where: Prisma.guacamole_userWhereUniqueInput): Promise<SongDto | undefined> { {
        try {
            const entity = await this.prisma.song.findUnique({
                where,
            });
            return SongDto.fromEntity(entity);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
