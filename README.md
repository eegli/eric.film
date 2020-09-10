<br />
<p align="center">
  <a href="https://github.com/eegli/eric.film">
    <img src="https://eric.film/static/img/og/schema_logo.png" alt="Logo" height="80">
  </a>
  <h3 align="center">portfolio | blog | @eegli</h3>
   <p align="center">
    My personal website and blog, created with Next.js
    <br />
    <a href="https://eric.film"><strong>Live website »</strong></a>
    <br />

  </p>
</p>

![coverage](https://img.shields.io/github/languages/top/eegli/eric.film) ![David](https://img.shields.io/david/eegli/eric.film) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/eegli/eric.film) ![GitHub last commit](https://img.shields.io/github/last-commit/eegli/eric.film) ![Website](https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online&url=https%3A%2F%2Feric.film)

# eric.film

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Feel free to copy/paste stuff from this repository and use it in your own project! Also, feedback is greatly appreciated.

## Roadmap

- SEO improvements
- Search posts
- Browser push
- Display warning for unsupported browsers
- Nginx proxy to bypass adblockers for Google Analytics
- Add more tests 👻

## FAQ

> Your Google Analytics tracking id, Sentry DSN and GraphQL endpoint are all public. Would it make sense to put them into `env.local`?

Not really. GA tracking ids are public anyway since they can be found when checking out any webpage's source code.
With Sentury - or more specifically `@sentry/browser` - it is the same. It cannot be hidden in the frontend.

This is why it is good practice to filter requests by hostname / allowed domains - something that is possible for both Sentury and Google Analytics.

My GraphQL endpoint needs to be public since the frontend has the possibility to fetch more blog posts directly from my backend. Thus, requests to GraphCMS can also be inspected in any browser's dev tools. Mutations, however, are disabled ¯\\_(ツ)_/¯

## Links

> Style guides

- [Style guide Material design](https://material.io/design)
- [Style guide dark mode UI](https://uxdesign.cc/dark-mode-ui-design-the-definitive-guide-part-1-color-53dcfaea5129)
- [My base gray palette](https://coolors.co/121212-222222-3b3b3b-8f8f8f-e0e0e0-f7f7f7)
- [My base accent palette for dark/bright mode](https://coolors.co/034363-53272d-365952)

> All Next templates

- [next.js/examples](https://github.com/vercel/next.js/tree/canary/examples)
