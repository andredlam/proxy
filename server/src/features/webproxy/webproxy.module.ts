import { Module } from '@nestjs/common';
import { WebproxyService } from './webproxy.service';
import { WebproxyController } from './webproxy.controller';

@Module({
  controllers: [WebproxyController],
  providers: [WebproxyService]
})
export class WebproxyModule {}
