/* Url query params are of type ParsedUrlQuery, which is an interface in the
form of <string> | Array<string>.

We only want the first parameter when passing the query param as a variable into
our blogpost query. Why? At a later stage, this project might have more dynamic
routing - e.g. [slug][comment-id].

In this case, we'd get a query param object like this: { slug: 'new-post',
comment-id: '123' }. Right now, it's only [slug], which returns a param object {
slug: 'new-post' }.

TL;DR: This utility is used to get the right slug for a blogpost from the url
query params.

Takes an argument of type T which is either an array or not. If it is, we return
the first element by default, but an optional index can be provided. */

export const getElementFromArray = <T>(arg: T | T[], index = 0): T =>
  Array.isArray(arg) ? arg[index] : arg;
