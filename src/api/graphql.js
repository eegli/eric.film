import { GraphQLClient } from 'graphql-request';

export const request = async query => {
  const gql = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/ckawpprfa01ja01z62wiy22qi/master'
  );

  const data = await gql.request(query);
  return data;
};
