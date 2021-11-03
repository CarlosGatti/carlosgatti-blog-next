import Link from 'next/link'
import Container from '../../components/container'
import distanceToNow from '../../lib/dateRelative'
import Layout from '../../components/layouts/layout'
import { MdMonetizationOn } from "react-icons/md";

export default function NotePage({ allPosts }) {
  return (
    <Layout>
      <Container>
        {allPosts.length ? (
          allPosts.map((post) => (
            <div className="max-w-5xl m-auto flex flex-col mt-5" key={post.Id} >
              <div className="font-sans flex flex-row items-center px-20 py-10 rounded-lg border border-gray-300 bg-gray-200">
                <Link as={`/posts/${post.Id}`} href="/posts/[slug]">
                  <a className="flex flex-col items-center mt-1 mr-20">
                    <div className="w-12 pt-1 pb-1 text-sm font-bold text-center border border-gray-300 rounded-lg rounded-b-none">
                      <MdMonetizationOn className="inline-block w-4 h-4 text-yellow-400 " />
                    </div>
                    <div className="w-full pb-1 text-xs text-center pt-0.5 rounded-lg rounded-t-none bg-gray-300 text-gray-700">
                      {post.Id}
                    </div>
                  </a>
                </Link>
                <div className="flex-1 overflow-hidden">
                  <h1 className="text-3xl font-semibold text-gray-900">{post.Title}</h1>
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
  const res = await fetch(response.url + '/api/allposts/')
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
