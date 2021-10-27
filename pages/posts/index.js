import Link from 'next/link'
import Container from '../../components/container'
import distanceToNow from '../../lib/dateRelative'

export default function NotePage({ allPosts }) {
  return (
    <Container>
      {allPosts.length ? (
        allPosts.map((post) => (
          <article key={post.Id} className="mb-10">
            <Link as={`/posts/${post.Id}`} href="/posts/[slug]">
              <a className="text-lg leading-6 font-bold">{post.Title}</a>
            </Link>
            <p>{post.Text}</p>
            <div className="text-gray-400">
              <time>{distanceToNow(new Date(post.Date))}</time>
            </div>
          </article>
        ))
      ) : (
        <p>No blog posted yet :/</p>
      )}
    </Container>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3001/api/allposts/`)
  const allPosts = await res.json()
  console.log(allPosts)
  if (!allPosts) {
    return {
      notFound: true,
    }
  }
  return {
    props: { allPosts }, // will be passed to the page component as props
  }
}
