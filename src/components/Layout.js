import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + WordPress" />
    <Navbar />
    <main>{children}</main>
    <aside><Sidebar /></aside>
  </div>
)

export default TemplateWrapper
