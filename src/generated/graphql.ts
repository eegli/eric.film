import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  Hex: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED',
}

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union',
}

/** An edge in a connection. */
export type BlogpostEdge = {
  __typename?: 'BlogpostEdge';
  /** The item at the end of the edge. */
  node: Blogpost;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type BlogpostUpdateOneInlineInput = {
  /** Create and connect one Blogpost document */
  create?: Maybe<BlogpostCreateInput>;
  /** Update single Blogpost document */
  update?: Maybe<BlogpostUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Blogpost document */
  upsert?: Maybe<BlogpostUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Blogpost document */
  connect?: Maybe<BlogpostWhereUniqueInput>;
  /** Disconnect currently connected Blogpost document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Blogpost document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ImgCollectionConnectInput = {
  /** Document to connect */
  where: ImgCollectionWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  collectionImgCollection_every?: Maybe<ImgCollectionWhereInput>;
  collectionImgCollection_some?: Maybe<ImgCollectionWhereInput>;
  collectionImgCollection_none?: Maybe<ImgCollectionWhereInput>;
  blogpostPreviewImage_every?: Maybe<BlogpostWhereInput>;
  blogpostPreviewImage_some?: Maybe<BlogpostWhereInput>;
  blogpostPreviewImage_none?: Maybe<BlogpostWhereInput>;
};

/** References Blogpost record uniquely */
export type BlogpostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

/** Stage system enumeration */
export enum Stage {
  /** System Published Stage */
  Published = 'PUBLISHED',
  /** System Draft Stage */
  Draft = 'DRAFT',
}

export type ImgCollectionUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ImgCollectionWhereUniqueInput;
  /** Upsert data */
  data: ImgCollectionUpsertInput;
};

export type ImgCollectionCreateManyInlineInput = {
  /** Create and connect multiple existing ImgCollection documents */
  create?: Maybe<Array<ImgCollectionCreateInput>>;
  /** Connect multiple existing ImgCollection documents */
  connect?: Maybe<Array<ImgCollectionWhereUniqueInput>>;
};

export enum BlogType {
  Tech = 'tech',
  Varia = 'varia',
  Votw = 'votw',
}

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export enum ImgCollectionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ImageTypeAsc = 'imageType_ASC',
  ImageTypeDesc = 'imageType_DESC',
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany',
}

export enum BlogpostOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  YtvideoAsc = 'ytvideo_ASC',
  YtvideoDesc = 'ytvideo_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
}

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple blogposts */
  blogposts: Array<Blogpost>;
  /** Retrieve a single blogpost */
  blogpost?: Maybe<Blogpost>;
  /** Retrieve multiple blogposts using the Relay connection interface */
  blogpostsConnection: BlogpostConnection;
  /** Retrieve document version */
  blogpostVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple imgCollections */
  imgCollections: Array<ImgCollection>;
  /** Retrieve a single imgCollection */
  imgCollection?: Maybe<ImgCollection>;
  /** Retrieve multiple imgCollections using the Relay connection interface */
  imgCollectionsConnection: ImgCollectionConnection;
  /** Retrieve document version */
  imgCollectionVersion?: Maybe<DocumentVersion>;
};

export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};

export type QueryBlogpostsArgs = {
  where?: Maybe<BlogpostWhereInput>;
  orderBy?: Maybe<BlogpostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};

export type QueryBlogpostArgs = {
  where: BlogpostWhereUniqueInput;
  stage?: Stage;
};

export type QueryBlogpostsConnectionArgs = {
  where?: Maybe<BlogpostWhereInput>;
  orderBy?: Maybe<BlogpostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};

export type QueryBlogpostVersionArgs = {
  where: VersionWhereInput;
};

export type QueryImgCollectionsArgs = {
  where?: Maybe<ImgCollectionWhereInput>;
  orderBy?: Maybe<ImgCollectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};

export type QueryImgCollectionArgs = {
  where: ImgCollectionWhereUniqueInput;
  stage?: Stage;
};

export type QueryImgCollectionsConnectionArgs = {
  where?: Maybe<ImgCollectionWhereInput>;
  orderBy?: Maybe<ImgCollectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};

export type QueryImgCollectionVersionArgs = {
  where: VersionWhereInput;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  collectionImgCollection_every?: Maybe<ImgCollectionWhereInput>;
  collectionImgCollection_some?: Maybe<ImgCollectionWhereInput>;
  collectionImgCollection_none?: Maybe<ImgCollectionWhereInput>;
  blogpostPreviewImage_every?: Maybe<BlogpostWhereInput>;
  blogpostPreviewImage_some?: Maybe<BlogpostWhereInput>;
  blogpostPreviewImage_none?: Maybe<BlogpostWhereInput>;
};

export type AssetUpdateManyInput = {
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

/** A connection to a list of items. */
export type ImgCollectionConnection = {
  __typename?: 'ImgCollectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ImgCollectionEdge>;
  aggregate: Aggregate;
};

export type ImgCollectionUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ImgCollectionWhereInput;
  /** Update many input */
  data: ImgCollectionUpdateManyInput;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
}

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  collectionImgCollection?: Maybe<ImgCollectionUpdateManyInlineInput>;
  blogpostPreviewImage?: Maybe<BlogpostUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

/** References ImgCollection record uniquely */
export type ImgCollectionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  imageType?: Maybe<ImageType>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

export type ImgCollection = Node & {
  __typename?: 'ImgCollection';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<ImgCollection>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  collection: Array<Asset>;
  imageType: ImageType;
  /** List of ImgCollection versions */
  history: Array<Version>;
};

export type ImgCollectionDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type ImgCollectionCollectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ImgCollectionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined',
}

export enum ImageType {
  Home = 'home',
  Portfolio = 'portfolio',
}

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

/** A connection to a list of items. */
export type BlogpostConnection = {
  __typename?: 'BlogpostConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<BlogpostEdge>;
  aggregate: Aggregate;
};

export type ImgCollectionCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  collection: AssetCreateManyInlineInput;
  imageType: ImageType;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};

export type ImgCollectionUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type BlogpostUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: BlogpostWhereUniqueInput;
  /** Upsert data */
  data: BlogpostUpsertInput;
};

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type ImgCollectionWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ImgCollectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ImgCollectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ImgCollectionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  collection_every?: Maybe<AssetWhereInput>;
  collection_some?: Maybe<AssetWhereInput>;
  collection_none?: Maybe<AssetWhereInput>;
  imageType?: Maybe<ImageType>;
  /** All values that are not equal to given value. */
  imageType_not?: Maybe<ImageType>;
  /** All values that are contained in given list. */
  imageType_in?: Maybe<Array<ImageType>>;
  /** All values that are not contained in given list. */
  imageType_not_in?: Maybe<Array<ImageType>>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type BlogpostCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  type: BlogType;
  title: Scalars['String'];
  previewImage: AssetCreateOneInlineInput;
  excerpt: Scalars['String'];
  content: Scalars['String'];
  ytvideo?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
};

export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt',
}

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
}

export type BlogpostUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: BlogpostWhereUniqueInput;
  /** Document to update */
  data: BlogpostUpdateInput;
};

export type ImgCollectionUpdateInput = {
  collection?: Maybe<AssetUpdateManyInlineInput>;
  imageType?: Maybe<ImageType>;
};

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update',
}

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  collectionImgCollection: Array<ImgCollection>;
  blogpostPreviewImage: Array<Blogpost>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};

/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCollectionImgCollectionArgs = {
  where?: Maybe<ImgCollectionWhereInput>;
  orderBy?: Maybe<ImgCollectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Asset system model */
export type AssetBlogpostPreviewImageArgs = {
  where?: Maybe<BlogpostWhereInput>;
  orderBy?: Maybe<BlogpostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

/** Identifies documents */
export type BlogpostWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlogpostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlogpostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlogpostWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  type?: Maybe<BlogType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<BlogType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<BlogType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<BlogType>>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  previewImage?: Maybe<AssetWhereInput>;
  excerpt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  excerpt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  excerpt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  excerpt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  excerpt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  excerpt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  excerpt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  excerpt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  excerpt_not_ends_with?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  content_not_ends_with?: Maybe<Scalars['String']>;
  ytvideo?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  ytvideo_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ytvideo_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  ytvideo_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  ytvideo_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  ytvideo_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  ytvideo_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  ytvideo_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  ytvideo_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  ytvideo_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Identifies documents */
export type BlogpostManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlogpostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlogpostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlogpostWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  type?: Maybe<BlogType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<BlogType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<BlogType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<BlogType>>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  previewImage?: Maybe<AssetWhereInput>;
  excerpt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  excerpt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  excerpt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  excerpt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  excerpt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  excerpt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  excerpt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  excerpt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  excerpt_not_ends_with?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  content_not_ends_with?: Maybe<Scalars['String']>;
  ytvideo?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  ytvideo_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ytvideo_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  ytvideo_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  ytvideo_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  ytvideo_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  ytvideo_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  ytvideo_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  ytvideo_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  ytvideo_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
};

export type BlogpostCreateOneInlineInput = {
  /** Create and connect one Blogpost document */
  create?: Maybe<BlogpostCreateInput>;
  /** Connect one existing Blogpost document */
  connect?: Maybe<BlogpostWhereUniqueInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one blogpost */
  createBlogpost?: Maybe<Blogpost>;
  /** Update one blogpost */
  updateBlogpost?: Maybe<Blogpost>;
  /** Delete one blogpost from _all_ existing stages. Returns deleted document. */
  deleteBlogpost?: Maybe<Blogpost>;
  /** Upsert one blogpost */
  upsertBlogpost?: Maybe<Blogpost>;
  /** Publish one blogpost */
  publishBlogpost?: Maybe<Blogpost>;
  /** Unpublish one blogpost from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBlogpost?: Maybe<Blogpost>;
  /** Update many Blogpost documents */
  updateManyBlogpostsConnection: BlogpostConnection;
  /** Delete many Blogpost documents, return deleted documents */
  deleteManyBlogpostsConnection: BlogpostConnection;
  /** Publish many Blogpost documents */
  publishManyBlogpostsConnection: BlogpostConnection;
  /** Find many Blogpost documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBlogpostsConnection: BlogpostConnection;
  /**
   * Update many blogposts
   * @deprecated Please use the new paginated many mutation (updateManyBlogpostsConnection)
   */
  updateManyBlogposts: BatchPayload;
  /**
   * Delete many Blogpost documents
   * @deprecated Please use the new paginated many mutation (deleteManyBlogpostsConnection)
   */
  deleteManyBlogposts: BatchPayload;
  /**
   * Publish many Blogpost documents
   * @deprecated Please use the new paginated many mutation (publishManyBlogpostsConnection)
   */
  publishManyBlogposts: BatchPayload;
  /**
   * Unpublish many Blogpost documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBlogpostsConnection)
   */
  unpublishManyBlogposts: BatchPayload;
  /** Create one imgCollection */
  createImgCollection?: Maybe<ImgCollection>;
  /** Update one imgCollection */
  updateImgCollection?: Maybe<ImgCollection>;
  /** Delete one imgCollection from _all_ existing stages. Returns deleted document. */
  deleteImgCollection?: Maybe<ImgCollection>;
  /** Upsert one imgCollection */
  upsertImgCollection?: Maybe<ImgCollection>;
  /** Publish one imgCollection */
  publishImgCollection?: Maybe<ImgCollection>;
  /** Unpublish one imgCollection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishImgCollection?: Maybe<ImgCollection>;
  /** Update many ImgCollection documents */
  updateManyImgCollectionsConnection: ImgCollectionConnection;
  /** Delete many ImgCollection documents, return deleted documents */
  deleteManyImgCollectionsConnection: ImgCollectionConnection;
  /** Publish many ImgCollection documents */
  publishManyImgCollectionsConnection: ImgCollectionConnection;
  /** Find many ImgCollection documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyImgCollectionsConnection: ImgCollectionConnection;
  /**
   * Update many imgCollections
   * @deprecated Please use the new paginated many mutation (updateManyImgCollectionsConnection)
   */
  updateManyImgCollections: BatchPayload;
  /**
   * Delete many ImgCollection documents
   * @deprecated Please use the new paginated many mutation (deleteManyImgCollectionsConnection)
   */
  deleteManyImgCollections: BatchPayload;
  /**
   * Publish many ImgCollection documents
   * @deprecated Please use the new paginated many mutation (publishManyImgCollectionsConnection)
   */
  publishManyImgCollections: BatchPayload;
  /**
   * Unpublish many ImgCollection documents
   * @deprecated Please use the new paginated many mutation (unpublishManyImgCollectionsConnection)
   */
  unpublishManyImgCollections: BatchPayload;
};

export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};

export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};

export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};

export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};

export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};

export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};

export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
};

export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateBlogpostArgs = {
  data: BlogpostCreateInput;
};

export type MutationUpdateBlogpostArgs = {
  where: BlogpostWhereUniqueInput;
  data: BlogpostUpdateInput;
};

export type MutationDeleteBlogpostArgs = {
  where: BlogpostWhereUniqueInput;
};

export type MutationUpsertBlogpostArgs = {
  where: BlogpostWhereUniqueInput;
  upsert: BlogpostUpsertInput;
};

export type MutationPublishBlogpostArgs = {
  where: BlogpostWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishBlogpostArgs = {
  where: BlogpostWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManyBlogpostsConnectionArgs = {
  where?: Maybe<BlogpostManyWhereInput>;
  data: BlogpostUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationDeleteManyBlogpostsConnectionArgs = {
  where?: Maybe<BlogpostManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationPublishManyBlogpostsConnectionArgs = {
  where?: Maybe<BlogpostManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUnpublishManyBlogpostsConnectionArgs = {
  where?: Maybe<BlogpostManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUpdateManyBlogpostsArgs = {
  where?: Maybe<BlogpostManyWhereInput>;
  data: BlogpostUpdateManyInput;
};

export type MutationDeleteManyBlogpostsArgs = {
  where?: Maybe<BlogpostManyWhereInput>;
};

export type MutationPublishManyBlogpostsArgs = {
  where?: Maybe<BlogpostManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManyBlogpostsArgs = {
  where?: Maybe<BlogpostManyWhereInput>;
  from?: Array<Stage>;
};

export type MutationCreateImgCollectionArgs = {
  data: ImgCollectionCreateInput;
};

export type MutationUpdateImgCollectionArgs = {
  where: ImgCollectionWhereUniqueInput;
  data: ImgCollectionUpdateInput;
};

export type MutationDeleteImgCollectionArgs = {
  where: ImgCollectionWhereUniqueInput;
};

export type MutationUpsertImgCollectionArgs = {
  where: ImgCollectionWhereUniqueInput;
  upsert: ImgCollectionUpsertInput;
};

export type MutationPublishImgCollectionArgs = {
  where: ImgCollectionWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishImgCollectionArgs = {
  where: ImgCollectionWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManyImgCollectionsConnectionArgs = {
  where?: Maybe<ImgCollectionManyWhereInput>;
  data: ImgCollectionUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationDeleteManyImgCollectionsConnectionArgs = {
  where?: Maybe<ImgCollectionManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationPublishManyImgCollectionsConnectionArgs = {
  where?: Maybe<ImgCollectionManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUnpublishManyImgCollectionsConnectionArgs = {
  where?: Maybe<ImgCollectionManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUpdateManyImgCollectionsArgs = {
  where?: Maybe<ImgCollectionManyWhereInput>;
  data: ImgCollectionUpdateManyInput;
};

export type MutationDeleteManyImgCollectionsArgs = {
  where?: Maybe<ImgCollectionManyWhereInput>;
};

export type MutationPublishManyImgCollectionsArgs = {
  where?: Maybe<ImgCollectionManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManyImgCollectionsArgs = {
  where?: Maybe<ImgCollectionManyWhereInput>;
  from?: Array<Stage>;
};

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type Blogpost = Node & {
  __typename?: 'Blogpost';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Blogpost>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  type: BlogType;
  title: Scalars['String'];
  previewImage: Asset;
  excerpt: Scalars['String'];
  content: Scalars['String'];
  ytvideo?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  /** List of Blogpost versions */
  history: Array<Version>;
};

export type BlogpostDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type BlogpostHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type BlogpostUpdateManyInlineInput = {
  /** Create and connect multiple Blogpost documents */
  create?: Maybe<Array<BlogpostCreateInput>>;
  /** Connect multiple existing Blogpost documents */
  connect?: Maybe<Array<BlogpostConnectInput>>;
  /** Override currently-connected documents with multiple existing Blogpost documents */
  set?: Maybe<Array<BlogpostWhereUniqueInput>>;
  /** Update multiple Blogpost documents */
  update?: Maybe<Array<BlogpostUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Blogpost documents */
  upsert?: Maybe<Array<BlogpostUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Blogpost documents */
  disconnect?: Maybe<Array<BlogpostWhereUniqueInput>>;
  /** Delete multiple Blogpost documents */
  delete?: Maybe<Array<BlogpostWhereUniqueInput>>;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};

export type BlogpostUpdateInput = {
  type?: Maybe<BlogType>;
  title?: Maybe<Scalars['String']>;
  previewImage?: Maybe<AssetUpdateOneInlineInput>;
  excerpt?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  ytvideo?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type ImgCollectionCreateOneInlineInput = {
  /** Create and connect one ImgCollection document */
  create?: Maybe<ImgCollectionCreateInput>;
  /** Connect one existing ImgCollection document */
  connect?: Maybe<ImgCollectionWhereUniqueInput>;
};

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual',
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

export type ImgCollectionUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ImgCollectionWhereUniqueInput;
  /** Document to update */
  data: ImgCollectionUpdateInput;
};

export type ImgCollectionUpdateOneInlineInput = {
  /** Create and connect one ImgCollection document */
  create?: Maybe<ImgCollectionCreateInput>;
  /** Update single ImgCollection document */
  update?: Maybe<ImgCollectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ImgCollection document */
  upsert?: Maybe<ImgCollectionUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ImgCollection document */
  connect?: Maybe<ImgCollectionWhereUniqueInput>;
  /** Disconnect currently connected ImgCollection document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ImgCollection document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type BlogpostUpdateManyInput = {
  type: BlogType;
  title: Scalars['String'];
  excerpt: Scalars['String'];
  content: Scalars['String'];
  ytvideo?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type ImgCollectionManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ImgCollectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ImgCollectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ImgCollectionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  collection_every?: Maybe<AssetWhereInput>;
  collection_some?: Maybe<AssetWhereInput>;
  collection_none?: Maybe<AssetWhereInput>;
  imageType?: Maybe<ImageType>;
  /** All values that are not equal to given value. */
  imageType_not?: Maybe<ImageType>;
  /** All values that are contained in given list. */
  imageType_in?: Maybe<Array<ImageType>>;
  /** All values that are not contained in given list. */
  imageType_not_in?: Maybe<Array<ImageType>>;
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none',
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  collectionImgCollection?: Maybe<ImgCollectionCreateManyInlineInput>;
  blogpostPreviewImage?: Maybe<BlogpostCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

/** An edge in a connection. */
export type ImgCollectionEdge = {
  __typename?: 'ImgCollectionEdge';
  /** The item at the end of the edge. */
  node: ImgCollection;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type BlogpostConnectInput = {
  /** Document to connect */
  where: BlogpostWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type ImgCollectionUpsertInput = {
  /** Create document if it didn't exist */
  create: ImgCollectionCreateInput;
  /** Update document if it exists */
  update: ImgCollectionUpdateInput;
};

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many',
}

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type BlogpostUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: BlogpostWhereInput;
  /** Update many input */
  data: BlogpostUpdateManyInput;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type ImgCollectionUpdateManyInlineInput = {
  /** Create and connect multiple ImgCollection documents */
  create?: Maybe<Array<ImgCollectionCreateInput>>;
  /** Connect multiple existing ImgCollection documents */
  connect?: Maybe<Array<ImgCollectionConnectInput>>;
  /** Override currently-connected documents with multiple existing ImgCollection documents */
  set?: Maybe<Array<ImgCollectionWhereUniqueInput>>;
  /** Update multiple ImgCollection documents */
  update?: Maybe<Array<ImgCollectionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ImgCollection documents */
  upsert?: Maybe<Array<ImgCollectionUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ImgCollection documents */
  disconnect?: Maybe<Array<ImgCollectionWhereUniqueInput>>;
  /** Delete multiple ImgCollection documents */
  delete?: Maybe<Array<ImgCollectionWhereUniqueInput>>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
}

export type BlogpostUpsertInput = {
  /** Create document if it didn't exist */
  create: BlogpostCreateInput;
  /** Update document if it exists */
  update: BlogpostUpdateInput;
};

export type BlogpostCreateManyInlineInput = {
  /** Create and connect multiple existing Blogpost documents */
  create?: Maybe<Array<BlogpostCreateInput>>;
  /** Connect multiple existing Blogpost documents */
  connect?: Maybe<Array<BlogpostWhereUniqueInput>>;
};

export type All_Blogposts_PreviewQueryVariables = Exact<{
  first: Scalars['Int'];
  skip: Scalars['Int'];
  orderBy: BlogpostOrderByInput;
}>;

export type All_Blogposts_PreviewQuery = { __typename?: 'Query' } & {
  blogposts: Array<
    { __typename?: 'Blogpost' } & Pick<
      Blogpost,
      'id' | 'excerpt' | 'slug' | 'title' | 'type' | 'updatedAt' | 'createdAt'
    > & { previewImage: { __typename?: 'Asset' } & Pick<Asset, 'url'> }
  >;
  blogpostsConnection: { __typename?: 'BlogpostConnection' } & {
    aggregate: { __typename?: 'Aggregate' } & Pick<Aggregate, 'count'>;
  };
};

export type Single_BlogpostQueryVariables = Exact<{
  slug: Scalars['String'];
}>;

export type Single_BlogpostQuery = { __typename?: 'Query' } & {
  blogpost?: Maybe<
    { __typename?: 'Blogpost' } & Pick<
      Blogpost,
      | 'id'
      | 'excerpt'
      | 'slug'
      | 'title'
      | 'type'
      | 'content'
      | 'ytvideo'
      | 'updatedAt'
      | 'createdAt'
    > & { previewImage: { __typename?: 'Asset' } & Pick<Asset, 'url'> }
  >;
};

export type Imgs_PortfolioQueryVariables = Exact<{ [key: string]: never }>;

export type Imgs_PortfolioQuery = { __typename?: 'Query' } & {
  imgCollections: Array<
    { __typename?: 'ImgCollection' } & Pick<
      ImgCollection,
      'id' | 'imageType'
    > & { collection: Array<{ __typename?: 'Asset' } & Pick<Asset, 'url'>> }
  >;
};

export type Imgs_HomeQueryVariables = Exact<{ [key: string]: never }>;

export type Imgs_HomeQuery = { __typename?: 'Query' } & {
  imgCollections: Array<
    { __typename?: 'ImgCollection' } & Pick<
      ImgCollection,
      'id' | 'imageType'
    > & { collection: Array<{ __typename?: 'Asset' } & Pick<Asset, 'url'>> }
  >;
};

export const All_Blogposts_PreviewDocument = gql`
  query ALL_BLOGPOSTS_PREVIEW(
    $first: Int!
    $skip: Int!
    $orderBy: BlogpostOrderByInput!
  ) {
    blogposts(first: $first, skip: $skip, orderBy: $orderBy) {
      id
      excerpt
      slug
      title
      type
      updatedAt
      createdAt
      previewImage {
        url
      }
    }
    blogpostsConnection {
      aggregate {
        count
      }
    }
  }
`;

/**
 * __useAll_Blogposts_PreviewQuery__
 *
 * To run a query within a React component, call `useAll_Blogposts_PreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useAll_Blogposts_PreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAll_Blogposts_PreviewQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useAll_Blogposts_PreviewQuery(
  baseOptions?: Apollo.QueryHookOptions<
    All_Blogposts_PreviewQuery,
    All_Blogposts_PreviewQueryVariables
  >,
) {
  return Apollo.useQuery<
    All_Blogposts_PreviewQuery,
    All_Blogposts_PreviewQueryVariables
  >(All_Blogposts_PreviewDocument, baseOptions);
}
export function useAll_Blogposts_PreviewLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    All_Blogposts_PreviewQuery,
    All_Blogposts_PreviewQueryVariables
  >,
) {
  return Apollo.useLazyQuery<
    All_Blogposts_PreviewQuery,
    All_Blogposts_PreviewQueryVariables
  >(All_Blogposts_PreviewDocument, baseOptions);
}
export type All_Blogposts_PreviewQueryHookResult = ReturnType<
  typeof useAll_Blogposts_PreviewQuery
>;
export type All_Blogposts_PreviewLazyQueryHookResult = ReturnType<
  typeof useAll_Blogposts_PreviewLazyQuery
>;
export type All_Blogposts_PreviewQueryResult = Apollo.QueryResult<
  All_Blogposts_PreviewQuery,
  All_Blogposts_PreviewQueryVariables
>;
export const Single_BlogpostDocument = gql`
  query SINGLE_BLOGPOST($slug: String!) {
    blogpost(where: { slug: $slug }) {
      id
      excerpt
      slug
      title
      type
      content
      ytvideo
      updatedAt
      createdAt
      previewImage {
        url
      }
    }
  }
`;

/**
 * __useSingle_BlogpostQuery__
 *
 * To run a query within a React component, call `useSingle_BlogpostQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingle_BlogpostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingle_BlogpostQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useSingle_BlogpostQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Single_BlogpostQuery,
    Single_BlogpostQueryVariables
  >,
) {
  return Apollo.useQuery<Single_BlogpostQuery, Single_BlogpostQueryVariables>(
    Single_BlogpostDocument,
    baseOptions,
  );
}
export function useSingle_BlogpostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Single_BlogpostQuery,
    Single_BlogpostQueryVariables
  >,
) {
  return Apollo.useLazyQuery<
    Single_BlogpostQuery,
    Single_BlogpostQueryVariables
  >(Single_BlogpostDocument, baseOptions);
}
export type Single_BlogpostQueryHookResult = ReturnType<
  typeof useSingle_BlogpostQuery
>;
export type Single_BlogpostLazyQueryHookResult = ReturnType<
  typeof useSingle_BlogpostLazyQuery
>;
export type Single_BlogpostQueryResult = Apollo.QueryResult<
  Single_BlogpostQuery,
  Single_BlogpostQueryVariables
>;
export const Imgs_PortfolioDocument = gql`
  query IMGS_PORTFOLIO {
    imgCollections(where: { imageType: portfolio }) {
      id
      imageType
      collection {
        url
      }
    }
  }
`;

/**
 * __useImgs_PortfolioQuery__
 *
 * To run a query within a React component, call `useImgs_PortfolioQuery` and pass it any options that fit your needs.
 * When your component renders, `useImgs_PortfolioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImgs_PortfolioQuery({
 *   variables: {
 *   },
 * });
 */
export function useImgs_PortfolioQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Imgs_PortfolioQuery,
    Imgs_PortfolioQueryVariables
  >,
) {
  return Apollo.useQuery<Imgs_PortfolioQuery, Imgs_PortfolioQueryVariables>(
    Imgs_PortfolioDocument,
    baseOptions,
  );
}
export function useImgs_PortfolioLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Imgs_PortfolioQuery,
    Imgs_PortfolioQueryVariables
  >,
) {
  return Apollo.useLazyQuery<Imgs_PortfolioQuery, Imgs_PortfolioQueryVariables>(
    Imgs_PortfolioDocument,
    baseOptions,
  );
}
export type Imgs_PortfolioQueryHookResult = ReturnType<
  typeof useImgs_PortfolioQuery
>;
export type Imgs_PortfolioLazyQueryHookResult = ReturnType<
  typeof useImgs_PortfolioLazyQuery
>;
export type Imgs_PortfolioQueryResult = Apollo.QueryResult<
  Imgs_PortfolioQuery,
  Imgs_PortfolioQueryVariables
>;
export const Imgs_HomeDocument = gql`
  query IMGS_HOME {
    imgCollections(where: { imageType: home }) {
      id
      imageType
      collection {
        url
      }
    }
  }
`;

/**
 * __useImgs_HomeQuery__
 *
 * To run a query within a React component, call `useImgs_HomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useImgs_HomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImgs_HomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useImgs_HomeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Imgs_HomeQuery,
    Imgs_HomeQueryVariables
  >,
) {
  return Apollo.useQuery<Imgs_HomeQuery, Imgs_HomeQueryVariables>(
    Imgs_HomeDocument,
    baseOptions,
  );
}
export function useImgs_HomeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Imgs_HomeQuery,
    Imgs_HomeQueryVariables
  >,
) {
  return Apollo.useLazyQuery<Imgs_HomeQuery, Imgs_HomeQueryVariables>(
    Imgs_HomeDocument,
    baseOptions,
  );
}
export type Imgs_HomeQueryHookResult = ReturnType<typeof useImgs_HomeQuery>;
export type Imgs_HomeLazyQueryHookResult = ReturnType<
  typeof useImgs_HomeLazyQuery
>;
export type Imgs_HomeQueryResult = Apollo.QueryResult<
  Imgs_HomeQuery,
  Imgs_HomeQueryVariables
>;
