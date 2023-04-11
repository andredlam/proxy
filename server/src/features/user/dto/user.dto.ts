import { guacamole_user } from '@prisma/client';
import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class UserDto implements Readonly<UserDto> {

    @IsNumber()
    user_id: number;

    @IsNumber()
    entity_id: number;

    password_hash: any;
    password_salt?: any;
    password_date: any;

    @IsBoolean()
    disabled: boolean;

    @IsBoolean()
    expired: boolean;

    @IsDate()
    access_window_start?: Date;

    @IsDate()
    access_window_end?: Date;

    @IsDate()
    valid_from?: Date;
    
    @IsDate()
    valid_until?: Date;

    @IsString()
    timezone?: string;
    
    @IsString()
    full_name?: string;

    @IsString()
    email_address?: string;

    @IsString()
    organization?: string;

    @IsString()
    organizational_role?: string;     

    public static fromEntity(entity: guacamole_user): UserDto {
        return {
            user_id: entity.user_id,
            entity_id: entity.user_id,
            password_hash: entity.password_hash,
            password_salt: entity.password_salt,
            password_date: entity.password_date,
            disabled: entity.disabled,
            expired: entity.expired,
            access_window_start: entity.access_window_start,
            access_window_end: entity.access_window_end,
            valid_from: entity.valid_from,
            valid_until: entity.valid_until,
            timezone: entity.timezone,
            full_name: entity.full_name,
            email_address: entity.email_address,
            organization: entity.organization,
            organizational_role: entity.organizational_role
        };
    }

    public static fromEntities(entities: guacamole_user[]): UserDto[] {
        const data: UserDto[] = [];
        for (const entity of entities) {
            data.push(UserDto.fromEntity(entity));
        }
        return data;
    }
}
