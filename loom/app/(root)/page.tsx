import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import React from 'react'

function page() {
  return (
    <main className=' wrapper page'>
      <Header subHeader='Public Library' title='All Videos' />
      <h1 className='text-2xl font-karla '>
        Welcome to SnapCast
      </h1>

      <VideoCard
      id="1"
      title="SnapCast Message "
      thumbnail="/assets/samples/thumbnail (1).png"
      createdAt={new Date("2023-06-30:00:00")}
      username="Alice"
      views={10}
      visibility="public"
      duration={149}
      userImg="/assets/images/jason.png"
      />

    </main>
  )
}

export default page