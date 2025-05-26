import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <div>
      <h1 className='text-2xl underline'>
       Popular Companions
      </h1>
    <section className='home-section'>
      <CompanionCard
      id='1'
      name='Companion One'
      topic='Topic One'
      subject='Mathematics'
      duration={30}
      color='#2196F3'
      />
      <CompanionCard
      id='2'
      name='Companion Two'
      topic='Topic Two'
      subject='Science'
      duration={15}
      color='#FF9800'
      />
      <CompanionCard
      id='3'
      name='Companion Three'
      topic='Topic Three'
      subject='History'
      duration={36}
      color='#4CAF50'
      />

    </section>
    <section className='home-section'>
      <CompanionList/>
      <CTA/>
    </section>
    </div>
  )
}

export default Page