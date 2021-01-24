import 'graphql-import-node';

import * as typeDefs from './schema/schema.graphql';

import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolverMap';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
