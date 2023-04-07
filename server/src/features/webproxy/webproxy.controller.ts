import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebproxyService } from './webproxy.service';
import { CreateWebproxyDto } from './dto/create-webproxy.dto';
import { UpdateWebproxyDto } from './dto/update-webproxy.dto';

@Controller('webproxy')
export class WebproxyController {
  constructor(private readonly webproxyService: WebproxyService) {}

  @Post()
  create(@Body() createWebproxyDto: CreateWebproxyDto) {
    return this.webproxyService.create(createWebproxyDto);
  }

  @Get()
  findAll() {
    return this.webproxyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webproxyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebproxyDto: UpdateWebproxyDto) {
    return this.webproxyService.update(+id, updateWebproxyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webproxyService.remove(+id);
  }
}
