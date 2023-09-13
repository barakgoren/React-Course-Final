import React from 'react'
import HeaderComp from './headerComp'
import BodyComp from './bodyComp'
import FooterComp from './footerComp'

export default function ExchangeApp() {
  return (
    <div className='main-container'>
        <HeaderComp/>
        <BodyComp/>
        <FooterComp/>
    </div>
  )
}
