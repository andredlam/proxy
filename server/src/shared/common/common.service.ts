import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';


@Injectable()
export class CommonService {

    async hashData(data: string): Promise<string> {
        const salt = await bcrypt.genSalt();
        return await bcrypt.hash(data, salt);
    }

    async hashCompare(key, hashed): Promise<boolean> {
        return await bcrypt.compare(key, hashed);
    }
    
}