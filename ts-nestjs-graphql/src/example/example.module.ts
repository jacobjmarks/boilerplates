import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { ExampleResolver } from './example.resolver';
import { ExampleService } from './example.service';

@Module({
  providers: [ExampleResolver, ExampleService, DateScalar],
})
export class ExamplesModule {}
