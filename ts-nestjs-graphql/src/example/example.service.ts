import { Injectable } from '@nestjs/common';
import { NewExampleInput } from './dto/new-example.input';
import { ExampleArgs } from './dto/example.args';
import { Example } from './models/example.model';

@Injectable()
export class ExampleService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewExampleInput): Promise<Example> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Example> {
    return {} as any;
  }

  async findAll(exampleArgs: ExampleArgs): Promise<Example[]> {
    return [] as Example[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
