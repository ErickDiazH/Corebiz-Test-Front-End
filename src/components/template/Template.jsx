import React from 'react'
import TemplateHeader from './header/Header.jsx'
import TemplateBanner from './banner/Banner.jsx'
import TemplateProducts from './products/Products.jsx'
import TemplateNewsletter from './newsletter/Newsletter.jsx'
import TemplateFooter from './footer/Footer.jsx'

function Template() {
  return (
    <div>
        <TemplateHeader />
        <TemplateBanner />
        <TemplateProducts />
        <TemplateNewsletter />
        <TemplateFooter />
    </div>
  )
}

export default Template