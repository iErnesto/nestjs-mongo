import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType('Lesson')
export class LessonType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  stardDate: string;

  @Field()
  endDate: string;
}
