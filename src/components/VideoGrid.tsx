import { VideoHTMLAttributes, useEffect, useRef, useState } from 'react'
import { formatDuration } from '../utils/formatDuration'
import { formatTimeAgo } from '../utils/formatTimeago'

type VideoGridProps = {
  id: string
  title: string
  channel: {
    id: string
    name: string
    profileUrl: string
  }
  views: number
  postedAt: Date
  duration: number
  thumbnailUrl: string
  videoUrl: string
}

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, { notation: 'compact' })

export default function VideoGrid({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoGridProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current == null) return
    if (isVideoPlaying) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }, [isVideoPlaying])
  return (
    <div
      className='flex flex-col gap-3'
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => {
        setIsVideoPlaying(false)
      }}
    >
      <a href={`/watch?v=${id}`} className='relative aspect-video'>
        <img
          src={thumbnailUrl}
          className='block w-full h-full object-cover rounded-xl'
          alt=''
        />
        <div className='absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-.5 rounded'>
          {formatDuration(duration)}
        </div>
        <video className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${isVideoPlaying ? 'opacity-100' : 'opacity-0'} `} ref={videoRef} src={videoUrl} muted playsInline />
      </a>
      <div className='flex gap-1'>
        <a href={`/@${channel.id}`} className='flex-shrink-0'>
          <img
            className='w-12 h-12 rounded-full'
            src={channel.profileUrl}
            alt=''
          />
        </a>
        <div className='flex flex-col'>
          <a href={`/watch?v=${id}`}>
            <h2 className='text-base font-[600]'>{title}</h2>
            <h3 className='text-sm font-semibold text-gray-500 pt-2'>
              {channel.name}
            </h3>
          </a>
          <div className='flex text-secondary-text text-sm gap-2 pt-1'>
            {VIEW_FORMATTER.format(views)} Views • {formatTimeAgo(postedAt)}
          </div>
        </div>
      </div>
    </div>
  )
}
