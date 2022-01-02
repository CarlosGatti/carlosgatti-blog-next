import cn from 'classnames'
import Image from 'next/image'

export default function CoverImage() {
  return (
    <div className="sm:mx-0">
        <Image
        width={1500}
        height={500}
        alt={`Cover Image fora`}
        src="/desk.jpg"
        className={cn('shadow-small', {
            'hover:shadow-medium transition-shadow duration-200': 0,
          })}
      />
    </div>
  )
}
