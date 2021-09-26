import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import Particles from 'react-particles-js';
import { particlesOptions } from '../../static/configs/particles-config';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* <title>{title}</title> */}
        <title>Eye on ICON</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#171717" />

        {/* <meta property="og:title" content={title} /> */}
        <meta property="og:title" content='Eye on ICON' />
        <meta property="og:description" content='Latest stories from ICON ecosystem.' />
        <meta property="og:image:width" content='1200'/>
        <meta property="og:image:height" content='630'/>
        <meta property="og:image" content={`/static/img/ogimg.png`}/>
        
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@EyeonIcon1"/>
        <meta name="twitter:title" content="Eye on ICON"/>
        <meta name="twitter:description" content="Latest stories from ICON ecosystem."/>
        <meta name="twitter:image:src" content={`/static/img/ogimg.png`} />
        <meta name="twitter:image:alt" content="Eye on ICON"/>
      </Helmet>

      <Particles params={particlesOptions}/>
      <div className={`wrap`}>
        <Navbar />
        <main>{children}</main>
      </div>
      
    </>
  )
}

export default TemplateWrapper
