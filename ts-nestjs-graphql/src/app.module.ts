import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ExamplesModule } from './example/example.module';

@Module({
  imports: [
    ExamplesModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
})
export class AppModule {}
