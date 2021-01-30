import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';
import { HelloResolver } from './resolvers/hello';
import { MyContext } from './types';
import { buildSchema } from 'type-graphql';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';
import depthLimit from 'graphql-depth-limit';
import express from 'express';

const main = async () => {
  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
    }),
    context: (): MyContext => {
      return {};
    },
    validationRules: [depthLimit(7)],
    playground: true,
  });

  app.use('*', cors());
  app.use(compression());

  server.applyMiddleware({ app, path: '/graphql' });

  const httpServer = createServer(app);

  httpServer.listen({ port: 3000 }, () => {
    console.log(`🚀  GraphQL is now running on http://localhost:3000/graphql`);
  });
};

main().catch((error) => console.error(error));
