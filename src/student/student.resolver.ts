import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { create } from 'domain';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation((returns) => StudentType)
  async createStudent(@Args() createStudentInput: CreateStudentInput) {
    return this.studentService.createStudent(createStudentInput);
  }
}