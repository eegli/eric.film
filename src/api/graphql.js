import { GraphQLClient } from 'graphql-request';

export const api =
  'https://api-eu-central-1.graphcms.com/v2/ckawpprfa01ja01z62wiy22qi/master';

export const request = async query => {
  const gql = new GraphQLClient(api);

  const data = await gql.request(query);
  return data;
};
