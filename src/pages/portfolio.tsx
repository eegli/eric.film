import React from 'react'
import Head from 'next/head'
import { Sh1 } from '@/shared/headings.styles'
import LayoutContainer from '@/shared/layout/layout.container'
import PortfolioCategories from '@/components/categories/portfolio-categories.component'
import { SEO_PORTFOLIO_META as meta } from '../../config'
import Footer from '@/components/footer/footer.component'

const PortfolioPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.og_title} />
        <meta property="og:image" content={meta.og_image} />
        <meta property="og:site_name" content={meta.og_site_name} />
        <meta property="og:description" content={meta.og_description} />
        <meta name="twitter:card" content={meta.twitter_card} />
        <meta name="twitter:title" content={meta.twitter_title} />
        <meta name="twitter:description" content={meta.twitter_description} />
        <meta name="twitter:image" content={meta.twitter_image} />
      </Head>
      <LayoutContainer>
        <Sh1>portfolio</Sh1>
        <PortfolioCategories />
        <Footer />
      </LayoutContainer>
    </>
  )
}

export default PortfolioPage
