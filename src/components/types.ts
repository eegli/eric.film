import { BlogpostOrderByInput } from '@/src/generated/graphql';
// IMAGES
export interface ImageUrl {
  url: string;
}

export type ImageUrlArray = Array<ImageUrl>;

export interface ImageCollection {
  collection: ImageUrlArray;
  id: string;
  imageType: 'home' | 'portfolio';
}
export interface ImageData {
  imgCollections: Array<ImageCollection>;
}

// QUERIES
export interface PreviewVars {
  skip: number;
  first: number;
  orderBy: BlogpostOrderByInput;
}

// NEW Utility
// Constructs a type with common properties from two types
export type Common<A, B> = {
  [P in keyof A & keyof B]: A[P] | B[P];
};

// NEW
export enum BlogTypeAll {
  All = 'all',
}
