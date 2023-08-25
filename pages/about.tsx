import React from 'react'
import { AboutBanner } from '@/components/about/AboutBanner'
import { Showcase } from '@/components/about/Showcase'
import { Company } from '@/components/about/Company'
import { Authors } from '@/components/about/Authors'
import { WhatWeDo } from '@/components/about/WhatWeDo'
 const About = () => {
  return (
    <div className=''>
      <AboutBanner />
      <WhatWeDo />
      <Company />
      <Showcase />
      <Authors />
    </div>
  )
}
export default About
