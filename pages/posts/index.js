import Link from 'next/link'
import Container from '../../components/container'
import distanceToNow from '../../lib/dateRelative'
import Layout from '../../components/layouts/layout'

export default function NotePage({ allPosts }) {
  return (
    <Layout>
      <Container>
        {allPosts.length ? (
          allPosts.map((post) => (
            <div className="max-w-5xl m-auto flex flex-col mt-5" key={post.Id} >
              <div className="font-sans flex flex-row items-center px-8 py-3 rounded-lg border border-gray-300 bg-gray-200">

                <div className="flex-1 overflow-hidden">
                  <Link as={`/posts/${post.Id}`} href="/posts/[slug]">   
                    <h1 className="text-3xl font-semibold text-gray-500 cursor-pointer text-gray-400 hover:text-blue-500">{post.Id} - {post.Title}</h1>
                  </Link>
                  <div className="text-xs text-gray-400 truncate mt-2">
                    <span className="font-semibold">{post.Email}</span> | <time>{distanceToNow(new Date(post.Date))}</time>
                  </div>
                  <p className="mt-4 text-gray-700">{post.Text}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No blog posted yet :/</p>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await fetch(process.env.API);
  const res = await fetch(response.url + 'api/allposts/')
  const allPosts = await res.json()

  if (!allPosts) {
    return {
      notFound: true,
    }
  }
  return {
    props: { allPosts }, // will be passed to the page component as props
  }
}
