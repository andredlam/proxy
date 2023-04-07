import { PartialType } from '@nestjs/mapped-types';
import { CreateWebproxyDto } from './create-webproxy.dto';

export class UpdateWebproxyDto extends PartialType(CreateWebproxyDto) {}
