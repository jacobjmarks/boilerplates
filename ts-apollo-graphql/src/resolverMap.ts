import { IResolvers } from '@graphql-tools/utils';

const resolverMap: IResolvers = {
  Query: {
    helloWorld(): string {
      return `👋 Hello world! 👋`;
    },
  },
};

export default resolverMap;
