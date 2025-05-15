import Header from '@/components/Header';
import { dummyCards } from '@/constants';
import React from 'react'
import VideoCard from '@/components/VideoCard';

const page = async({params}:ParamsWithSearch) => {

  const {id} = await params;
  return (
    <div className=' wrapper page'>
      <Header subHeader='vmb' title='vmb || Dev Mastery' userImg='/assets/images/dummy.jpg'></Header>

      <section className='video-grid'>

      {dummyCards.map((card) => (
        <VideoCard  {...card} id={card.id.toString()} key={card.id} />
      ))}
      </section>

    </div>
  )
}

export default page