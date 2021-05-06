import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { NewExampleInput } from './dto/new-example.input';
import { ExampleArgs } from './dto/example.args';
import { Example } from './models/example.model';
import { ExampleService } from './example.service';

const pubSub = new PubSub();

@Resolver(of => Example)
export class ExampleResolver {
  constructor(private readonly exampleService: ExampleService) {}

  @Query(returns => Example)
  async example(@Args('id') id: string): Promise<Example> {
    const example = await this.exampleService.findOneById(id);
    if (!example) {
      throw new NotFoundException(id);
    }
    return example;
  }

  @Query(returns => [Example])
  examples(@Args() exampleArgs: ExampleArgs): Promise<Example[]> {
    return this.exampleService.findAll(exampleArgs);
  }

  @Mutation(returns => Example)
  async addExample(
    @Args('newExampleData') newExampleData: NewExampleInput,
  ): Promise<Example> {
    const example = await this.exampleService.create(newExampleData);
    pubSub.publish('exampleAdded', { exampleAdded: example });
    return example;
  }

  @Mutation(returns => Boolean)
  async removeExample(@Args('id') id: string) {
    return this.exampleService.remove(id);
  }

  @Subscription(returns => Example)
  exampleAdded() {
    return pubSub.asyncIterator('exampleAdded');
  }
}
