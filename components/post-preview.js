import Avatar from '../components/avatar'
import distanceToNow from '../lib/dateRelative'
import CoverImage from './cover-image'
import Link from 'next/link'


export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
})
 {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={"/post-img/rig.jpg"}
          height={278}
          width={556}
          priority
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <time className="text-sm">{distanceToNow(new Date(date))}</time>
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author} picture={"/gatti-foto.png"} />
    </div>
  )
}