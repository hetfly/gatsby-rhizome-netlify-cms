import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import './all.sass'
import { withPrefix } from 'gatsby'
import Particles from 'react-particles-js';
import { particlesOptions } from '../../static/configs/particles-config';

const TemplateWrapper = ({ children }) => {
  // const { title, description } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* <title>{title}</title> */}
        <title>Eye on ICON</title>
        <meta name="description" content='Latest stories from ICON ecosystem.' />
        <link rel="apple-touch-icon" sizes="57x57" href={`${withPrefix('/')}favicon/apple-icon-57x57.png`} />
        <link rel="apple-touch-icon" sizes="60x60" href={`${withPrefix('/')}favicon/apple-icon-60x60.png`} />
        <link rel="apple-touch-icon" sizes="72x72" href={`${withPrefix('/')}favicon/apple-icon-72x72.png`} />
        <link rel="apple-touch-icon" sizes="76x76" href={`${withPrefix('/')}favicon/apple-icon-76x76.png`} />
        <link rel="apple-touch-icon" sizes="114x114" href={`${withPrefix('/')}favicon/apple-icon-114x114.png`} />
        <link rel="apple-touch-icon" sizes="120x120" href={`${withPrefix('/')}favicon/apple-icon-120x120.png`} />
        <link rel="apple-touch-icon" sizes="144x144" href={`${withPrefix('/')}favicon/apple-icon-144x144.png`} />
        <link rel="apple-touch-icon" sizes="152x152" href={`${withPrefix('/')}favicon/apple-icon-152x152.png`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}favicon/apple-icon-180x180.png`} />
        <link rel="icon" type="image/png" sizes="192x192"  href={`${withPrefix('/')}favicon/android-icon-192x192.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${withPrefix('/')}favicon/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="96x96" href={`${withPrefix('/')}favicon/favicon-96x96.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${withPrefix('/')}favicon/favicon-16x16.png`} />
        <meta name="theme-color" content="#171717" />

        {/* <meta property="og:title" content={title} /> */}
        <meta property="og:title" content='Eye on ICON' />
        <meta property="og:description" content='Latest stories from ICON ecosystem.' />
        <meta property="og:image:width" content='1200'/>
        <meta property="og:image:height" content='630'/>
        <meta property="og:image" content={`${withPrefix('/')}img/ogimg.png`}/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@EyeonIcon1"/>
        <meta name="twitter:title" content="Eye on ICON"/>
        <meta name="twitter:description" content="Latest stories from ICON ecosystem."/>
        <meta name="twitter:image:src" content={`${withPrefix('/')}img/ogimg.png`} />
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
