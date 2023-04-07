import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

declare const module: any;

async function getServerIp(): Promise<string> {
    const interfaces = os.networkInterfaces();
    let container = null;
    for (const ifname in interfaces) {
        if (!ifname.includes('lo0')) {
            container = interfaces[ifname];
            for (const item of container) {
                if (item.family === 'IPv4' && item.address !== '127.0.0.1' && !item.internal) {
                    return item.address;
                }
            }
        }
    }
    return '0.0.0.0';
}

async function bootstrap() {

    const serverIP = await getServerIp();

    const httpsOptions = {
        key: fs.readFileSync(path.join(__dirname, '../secrets/key.pem'), 'utf8'),
        cert: fs.readFileSync(path.join(__dirname, '../secrets/cert.pem'), 'utf8'),
    };

    const app = await NestFactory.create(AppModule, {
        httpsOptions,
        logger: ['log', 'error', 'warn']
    });

    await app.listen(process.env.PORT || 443);
    console.log(`Application is running on: ${await app.getUrl()}`);
    console.log(`Detecting server IP is ${serverIP}`);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();
