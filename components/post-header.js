import Avatar from '../components/avatar'
import distanceToNow from '../lib/dateRelative'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author, avatar }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author} picture={"/gatti-foto.png"} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author} picture={avatar} />
        </div>
        <div className="mb-6 text-lg">
          <distanceToNow dateString={date} />
        </div>
      </div>
    </>
  )
}