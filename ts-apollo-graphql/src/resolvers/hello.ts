import { Arg, Ctx, Query, Resolver } from 'type-graphql';
import { MyContext } from '../types';

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello(@Ctx() ctx: MyContext) {
    return 'Hey 👋';
  }

  @Query(() => String)
  relay(@Arg('msg', () => String) msg: string, @Ctx() ctx: MyContext) {
    return msg;
  }
}
