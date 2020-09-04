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
  RGBAHue: any;
  /** Raw JSON value */
  Json: any;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  Hex: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  RGBATransparency: any;
};

export type Version = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
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

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

/** A connection to a list of items. */
export type ImgCollectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ImgCollectionEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type ImgCollectionEdge = {
  /** The item at the end of the edge. */
  node: ImgCollection;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type BlogpostConnectInput = {
  /** Document to connect */
  where: BlogpostWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
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

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
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

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update',
}

export enum BlogType {
  Tech = 'tech',
  Varia = 'varia',
  Votw = 'votw',
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED',
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

/** References ImgCollection record uniquely */
export type ImgCollectionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  imageType?: Maybe<ImageType>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
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

export type ImgCollectionUpsertInput = {
  /** Create document if it didn't exist */
  create: ImgCollectionCreateInput;
  /** Update document if it exists */
  update: ImgCollectionUpdateInput;
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

/** An edge in a connection. */
export type AssetEdge = {
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

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

export type Aggregate = {
  count: Scalars['Int'];
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
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

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type ImgCollectionConnectInput = {
  /** Document to connect */
  where: ImgCollectionWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
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

export type ImgCollectionUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
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

export type BlogpostUpsertInput = {
  /** Create document if it didn't exist */
  create: BlogpostCreateInput;
  /** Update document if it exists */
  update: BlogpostUpdateInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
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

export type BlogpostUpdateInput = {
  type?: Maybe<BlogType>;
  title?: Maybe<Scalars['String']>;
  previewImage?: Maybe<AssetUpdateOneInlineInput>;
  excerpt?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  ytvideo?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
}

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type ImgCollectionUpdateInput = {
  collection?: Maybe<AssetUpdateManyInlineInput>;
  imageType?: Maybe<ImageType>;
};

export type BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** An edge in a connection. */
export type BlogpostEdge = {
  /** The item at the end of the edge. */
  node: Blogpost;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type BlogpostUpdateManyInput = {
  type: BlogType;
  title: Scalars['String'];
  excerpt: Scalars['String'];
  content: Scalars['String'];
  ytvideo?: Maybe<Scalars['String']>;
};

export type BlogpostCreateOneInlineInput = {
  /** Create and connect one Blogpost document */
  create?: Maybe<BlogpostCreateInput>;
  /** Connect one existing Blogpost document */
  connect?: Maybe<BlogpostWhereUniqueInput>;
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
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

export type ImgCollectionCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  collection: AssetCreateManyInlineInput;
  imageType: ImageType;
};

/** A connection to a list of items. */
export type AssetConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

export type BlogpostUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: BlogpostWhereUniqueInput;
  /** Upsert data */
  data: BlogpostUpsertInput;
};

export type Query = {
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

export enum ImageType {
  Home = 'home',
  Portfolio = 'portfolio',
}

export type ImgCollectionUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ImgCollectionWhereInput;
  /** Update many input */
  data: ImgCollectionUpdateManyInput;
};

export type Mutation = {
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

export type BlogpostCreateManyInlineInput = {
  /** Create and connect multiple existing Blogpost documents */
  create?: Maybe<Array<BlogpostCreateInput>>;
  /** Connect multiple existing Blogpost documents */
  connect?: Maybe<Array<BlogpostWhereUniqueInput>>;
};

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many',
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
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

export type BlogpostUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: BlogpostWhereUniqueInput;
  /** Document to update */
  data: BlogpostUpdateInput;
};

export type BlogpostUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: BlogpostWhereInput;
  /** Update many input */
  data: BlogpostUpdateManyInput;
};

/** Stage system enumeration */
export enum Stage {
  /** System Published Stage */
  Published = 'PUBLISHED',
  /** System Draft Stage */
  Draft = 'DRAFT',
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual',
}

/** Asset system model */
export type Asset = Node & {
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

/** References Blogpost record uniquely */
export type BlogpostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type DocumentVersion = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
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

/** A connection to a list of items. */
export type BlogpostConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<BlogpostEdge>;
  aggregate: Aggregate;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
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

export type ImgCollectionUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ImgCollectionWhereUniqueInput;
  /** Upsert data */
  data: ImgCollectionUpsertInput;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union',
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
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

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
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

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined',
}

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

export type ImgCollectionUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ImgCollectionWhereUniqueInput;
  /** Document to update */
  data: ImgCollectionUpdateInput;
};

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

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

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
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

export type ImgCollectionCreateOneInlineInput = {
  /** Create and connect one ImgCollection document */
  create?: Maybe<ImgCollectionCreateInput>;
  /** Connect one existing ImgCollection document */
  connect?: Maybe<ImgCollectionWhereUniqueInput>;
};

export type ImgCollection = Node & {
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

export type ImgCollectionCreateManyInlineInput = {
  /** Create and connect multiple existing ImgCollection documents */
  create?: Maybe<Array<ImgCollectionCreateInput>>;
  /** Connect multiple existing ImgCollection documents */
  connect?: Maybe<Array<ImgCollectionWhereUniqueInput>>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

export type Blogpost = Node & {
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

export type BlogpostsPreviewQueryVariables = Exact<{
  first: Scalars['Int'];
  skip: Scalars['Int'];
  orderBy: BlogpostOrderByInput;
}>;

export type BlogpostsPreviewQuery = {
  blogposts: Array<
    Pick<
      Blogpost,
      'id' | 'excerpt' | 'slug' | 'title' | 'type' | 'updatedAt' | 'createdAt'
    > & { previewImage: Pick<Asset, 'url'> }
  >;
  blogpostsConnection: { aggregate: Pick<Aggregate, 'count'> };
};

export type BlogpostQueryVariables = Exact<{
  slug: Scalars['String'];
}>;

export type BlogpostQuery = {
  blogpost?: Maybe<
    Pick<
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
    > & { previewImage: Pick<Asset, 'url'> }
  >;
};

export type ImgsPortfolioQueryVariables = Exact<{ [key: string]: never }>;

export type ImgsPortfolioQuery = {
  imgCollections: Array<
    Pick<ImgCollection, 'id' | 'imageType'> & {
      collection: Array<Pick<Asset, 'url'>>;
    }
  >;
};

export type ImgsHomeQueryVariables = Exact<{ [key: string]: never }>;

export type ImgsHomeQuery = {
  imgCollections: Array<
    Pick<ImgCollection, 'id' | 'imageType'> & {
      collection: Array<Pick<Asset, 'url'>>;
    }
  >;
};

export const BlogpostsPreviewDocument = gql`
  query BlogpostsPreview(
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
 * __useBlogpostsPreviewQuery__
 *
 * To run a query within a React component, call `useBlogpostsPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogpostsPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogpostsPreviewQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useBlogpostsPreviewQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BlogpostsPreviewQuery,
    BlogpostsPreviewQueryVariables
  >,
) {
  return Apollo.useQuery<BlogpostsPreviewQuery, BlogpostsPreviewQueryVariables>(
    BlogpostsPreviewDocument,
    baseOptions,
  );
}
export function useBlogpostsPreviewLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BlogpostsPreviewQuery,
    BlogpostsPreviewQueryVariables
  >,
) {
  return Apollo.useLazyQuery<
    BlogpostsPreviewQuery,
    BlogpostsPreviewQueryVariables
  >(BlogpostsPreviewDocument, baseOptions);
}
export type BlogpostsPreviewQueryHookResult = ReturnType<
  typeof useBlogpostsPreviewQuery
>;
export type BlogpostsPreviewLazyQueryHookResult = ReturnType<
  typeof useBlogpostsPreviewLazyQuery
>;
export type BlogpostsPreviewQueryResult = Apollo.QueryResult<
  BlogpostsPreviewQuery,
  BlogpostsPreviewQueryVariables
>;
export const BlogpostDocument = gql`
  query Blogpost($slug: String!) {
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
 * __useBlogpostQuery__
 *
 * To run a query within a React component, call `useBlogpostQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogpostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogpostQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useBlogpostQuery(
  baseOptions?: Apollo.QueryHookOptions<BlogpostQuery, BlogpostQueryVariables>,
) {
  return Apollo.useQuery<BlogpostQuery, BlogpostQueryVariables>(
    BlogpostDocument,
    baseOptions,
  );
}
export function useBlogpostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BlogpostQuery,
    BlogpostQueryVariables
  >,
) {
  return Apollo.useLazyQuery<BlogpostQuery, BlogpostQueryVariables>(
    BlogpostDocument,
    baseOptions,
  );
}
export type BlogpostQueryHookResult = ReturnType<typeof useBlogpostQuery>;
export type BlogpostLazyQueryHookResult = ReturnType<
  typeof useBlogpostLazyQuery
>;
export type BlogpostQueryResult = Apollo.QueryResult<
  BlogpostQuery,
  BlogpostQueryVariables
>;
export const ImgsPortfolioDocument = gql`
  query ImgsPortfolio {
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
 * __useImgsPortfolioQuery__
 *
 * To run a query within a React component, call `useImgsPortfolioQuery` and pass it any options that fit your needs.
 * When your component renders, `useImgsPortfolioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImgsPortfolioQuery({
 *   variables: {
 *   },
 * });
 */
export function useImgsPortfolioQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ImgsPortfolioQuery,
    ImgsPortfolioQueryVariables
  >,
) {
  return Apollo.useQuery<ImgsPortfolioQuery, ImgsPortfolioQueryVariables>(
    ImgsPortfolioDocument,
    baseOptions,
  );
}
export function useImgsPortfolioLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ImgsPortfolioQuery,
    ImgsPortfolioQueryVariables
  >,
) {
  return Apollo.useLazyQuery<ImgsPortfolioQuery, ImgsPortfolioQueryVariables>(
    ImgsPortfolioDocument,
    baseOptions,
  );
}
export type ImgsPortfolioQueryHookResult = ReturnType<
  typeof useImgsPortfolioQuery
>;
export type ImgsPortfolioLazyQueryHookResult = ReturnType<
  typeof useImgsPortfolioLazyQuery
>;
export type ImgsPortfolioQueryResult = Apollo.QueryResult<
  ImgsPortfolioQuery,
  ImgsPortfolioQueryVariables
>;
export const ImgsHomeDocument = gql`
  query ImgsHome {
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
 * __useImgsHomeQuery__
 *
 * To run a query within a React component, call `useImgsHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useImgsHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImgsHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useImgsHomeQuery(
  baseOptions?: Apollo.QueryHookOptions<ImgsHomeQuery, ImgsHomeQueryVariables>,
) {
  return Apollo.useQuery<ImgsHomeQuery, ImgsHomeQueryVariables>(
    ImgsHomeDocument,
    baseOptions,
  );
}
export function useImgsHomeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ImgsHomeQuery,
    ImgsHomeQueryVariables
  >,
) {
  return Apollo.useLazyQuery<ImgsHomeQuery, ImgsHomeQueryVariables>(
    ImgsHomeDocument,
    baseOptions,
  );
}
export type ImgsHomeQueryHookResult = ReturnType<typeof useImgsHomeQuery>;
export type ImgsHomeLazyQueryHookResult = ReturnType<
  typeof useImgsHomeLazyQuery
>;
export type ImgsHomeQueryResult = Apollo.QueryResult<
  ImgsHomeQuery,
  ImgsHomeQueryVariables
>;
