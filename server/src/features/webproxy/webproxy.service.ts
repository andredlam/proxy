import { Injectable } from '@nestjs/common';
import { CreateWebproxyDto } from './dto/create-webproxy.dto';
import { UpdateWebproxyDto } from './dto/update-webproxy.dto';

@Injectable()
export class WebproxyService {
  create(createWebproxyDto: CreateWebproxyDto) {
    return 'This action adds a new webproxy';
  }

  findAll() {
    return `This action returns all webproxy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webproxy`;
  }

  update(id: number, updateWebproxyDto: UpdateWebproxyDto) {
    return `This action updates a #${id} webproxy`;
  }

  remove(id: number) {
    return `This action removes a #${id} webproxy`;
  }
}
