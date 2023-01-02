import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson-input';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  @Query((returns) => LessonType)
  getLesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Mutation((returns) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Query((returns) => [LessonType])
  getLessons() {
    return this.lessonService.getLessons();
  }

  @Mutation((returns) => [LessonType])
  assignStudentsToLesson(
    @Args('assignStudentsToLessonInput')
    assignStudentsToLesson: AssignStudentsToLessonInput,
  ) {
    const { lessonId, studentIds } = assignStudentsToLesson;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }
}
