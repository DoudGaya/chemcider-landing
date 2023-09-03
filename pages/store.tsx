import { StoreBanner } from '@/components/store/StoreBanner'
import { StoreContact } from '@/components/store/StoreContact'
import { StoreContents } from '@/components/store/StoreContents'
import React from 'react'

const Store = () => {
  return (
    <div className="">
      <StoreBanner />
      <StoreContact />
      <StoreContents />
   </div>
  )
}

export default Store