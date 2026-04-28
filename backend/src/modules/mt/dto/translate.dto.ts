import { IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum MtProvider {
  DEEPL = 'deepl',
  GOOGLE = 'google',
}

export class TranslateDto {
  @ApiProperty()
  @IsString()
  text: string;

  @ApiProperty()
  @IsString()
  sourceLanguage: string;

  @ApiProperty()
  @IsString()
  targetLanguage: string;

  @ApiProperty({ enum: MtProvider, default: MtProvider.DEEPL })
  @IsEnum(MtProvider)
  provider: MtProvider;
}
