import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebproxyModule } from './features/webproxy/webproxy.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConnectionModule } from './features/connection/connection.module';
import { EntityModule } from './features/entity/entity.module';
import { UserModule } from './features/user/user.module';
import { CommonModule } from './shared/common/common.module';
import { CommonService } from './shared/common/common.service';

@Module({
    providers: [
        AppService,
        CommonService
    ],
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public'),
            exclude: ['/api*'],
        }),
        CommonModule,
        WebproxyModule,
        PrismaModule,
        ConnectionModule,
        EntityModule,
        UserModule
    ],
    controllers: [
        AppController
    ],
})
export class AppModule { }
