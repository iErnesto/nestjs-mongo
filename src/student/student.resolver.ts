import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { create } from 'domain';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation((returns) => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }

  @Query((retuns) => [StudentType])
  getStudents() {
    return this.studentService.getStudents();
  }

  @Query((returns) => StudentType)
  getStudent(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }
}
