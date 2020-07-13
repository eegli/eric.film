<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/eegli/eric.film">
    <img src="https://img-og.eric.film/public/github_logo.png" alt="Logo" height="80">
  </a>
  <h3 align="center">portfolio | blog | @eegli</h3>
   <p align="center">
    My personal website and blog, created with Next.js
    <br />
    <a href="https://beta.eric.film"><strong>Live website »</strong></a>
    <br />

  </p>
</p>

![coverage](https://img.shields.io/github/languages/top/eegli/eric.film) ![David](https://img.shields.io/david/eegli/eric.film) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/eegli/eric.film) ![GitHub last commit](https://img.shields.io/github/last-commit/eegli/eric.film) ![GitHub commit activity](https://img.shields.io/github/commit-activity/w/eegli/eric.film) ![Website](https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online&url=https%3A%2F%2Fbeta.eric.film)



# eric.film

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Todos before release

- Safari getStaticProps
- Blog Slug
- Husky

---

## Roadmap

- SEO Improvements
- Search Posts
- Browser Push
- Measuring performance
- Dynamic imports
- Add browser check
- Google Analytics bypass
- Sentry fix

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

---

## FAQ

> Your Google Analytics tracking id, Sentry DSN and GraphQL endpoint are all public. Would it make sense to put them into `env.local`?

Not really. GA tracking ids are public anyway since they can be found when checking out any webpage's source code.
With Sentury - or more specifically `@sentry/browser` - it is the same. It cannot be hidden in the frontend.

This is why it is good practice to filter requests by hostname / allowed domains - something that is possible for both Sentury and Google Analytics.

My GraphQL endpoint needs to be public since the frontend has the possibility to fetch more blog posts directly from my backend. Thus, requests to GraphCMS can also be inspected any browser's dev tools.

---

## License

The MIT License (MIT)

Copyright (c) 2020 Eric Egli
