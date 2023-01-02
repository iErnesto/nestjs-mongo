import { Field, InputType, ID } from '@nestjs/graphql';
import { IsDateString, IsUUID, MinLength } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @Field()
  @MinLength(1)
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;

  @IsUUID('4', { each: true })
  @Field(() => [ID], { defaultValue: [] })
  students: string[];
}
