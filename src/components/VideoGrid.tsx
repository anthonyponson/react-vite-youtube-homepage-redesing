import { formatDuration } from '../utils/formatDuration'

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
  return (
    <div className='flex flex-col gap-3'>
      <a href={`/watch?v=${id}`} className='relative aspect-video'>
        <img
          src={thumbnailUrl}
          className='block w-full h-full object-cover rounded-xl'
          alt=''
        />
        <div className='absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-.5 rounded'>
          {formatDuration(duration)}
        </div>
      </a>
      <div className='flex gap-3'>
        <a href={`/@${channel.id}`} className='flex-shrink-0'>
          <img
            className='w-12 h-12 rounded-full'
            src={channel.profileUrl}
            alt=''
          />
        </a>

        <div>
          <h2 className='text-base font-semibold'>{title}</h2>
          <h3 className='text-sm font-bold'>{channel.name}</h3>
        </div>

        <div>
            <h2>{views}</h2>
            {/* <h2>{postedAt}</h2> */}
        </div>
      </div>
    </div>
  )
}
