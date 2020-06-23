import { GraphQLClient } from 'graphql-request';

const api = process.env.graphql_url;
export const fetcher = async query => {
  const gql = new GraphQLClient(api);

  const data = await gql.request(query);
  return data;
};
