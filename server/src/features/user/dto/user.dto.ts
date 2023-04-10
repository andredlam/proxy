import { guacamole_user } from '@prisma/client';
import { IsUUID, IsString } from 'class-validator';

export class UserDto implements Readonly<UserDto> {

    @IsUUID()
    user_id: number;

    @IsString()
    entity_id: number;

    @IsString()
    songAlias: string;

    @IsString()
    isActive: boolean;

    public static fromEntity(entity: guacamole_user): UserDto {
        return {
            user_id: entity.user_id,
            entity_id: entity.entity_id,
            songAlias: entity.songAlias,
            visible: entity.visible,
            isActive: entity.isActive
        };
    }

    public static fromEntities(entities: guacamole_user[]): UserDto[] {
        const data: SongDto[] = [];
        for (const entity of entities) {
            data.push(SongDto.fromEntity(entity));
        }
        return data;
    }
}
