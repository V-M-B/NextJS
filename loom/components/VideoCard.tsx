'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const VideoCard = ({
    id,
    title,
    thumbnail,
    createdAt,
    username,
    views,
    visibility,
    duration,
    userImg
}:VideoCardProps) => {
  return (
    <Link href={`/video/${id}`} className='video-card'>
        <Image src={thumbnail} alt="Thumbnail" width={290} height={160} className='thumbnail'/>
        <article>
            <div className="">
                <figure>
                    <Image
                        src={userImg || "/assets/images/dummy.jpg"}
                        alt="User"
                        width={34}
                        height={34}
                        className="rounded-full aspect-square"
                    />
                    <figcaption>
                        <h3>{username}</h3>
                        <p>{visibility}</p>
                    </figcaption>
                </figure>
                <aside>
                    <Image
                    src="/Assets/icons/eye.svg"
                    alt="Views"
                    width={16}
                    height={16}
                    />
                    <span>
                        {views}
                    </span>
                </aside>
            </div>
            <h2>
                {title} -{" "}
                {new Date(createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                })}
            </h2>
        </article>
        <button onClick={()=>{}} className='copy-btn'>
            <Image
                src="/assets/icons/link.svg"
                alt="link"
                width={18}
                height={18}
            />
            <span>Copy</span>
        </button>
        {duration && (
            <div className="duration">
                {Math.ceil(duration / 60)}min:
                </div>)}
     </Link>   
  )
}

export default VideoCard