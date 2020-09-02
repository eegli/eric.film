import { Blogpost, BlogType } from '@/src/generated/graphql';
import Markdown from './MARKDOWN';

export const BLOGPOST: Partial<Blogpost> = {
  title: 'Test Blogpost',
  content: Markdown,
  ytvideo: 'pasApdHn6Sw',
  createdAt: '2020-06-01T16:41:26.625709+00:00',
  updatedAt: '2020-06-15T08:54:07.080286+00:00',
  id: 'ckawpzunk216t0150l9lpizcg',
  type: BlogType.Tech,
  excerpt:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  slug: 'post',
};
