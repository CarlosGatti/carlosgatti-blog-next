import Link from 'next/link'
import Container from '../../components/container'
import distanceToNow from '../../lib/dateRelative'
import Layout from '../../components/layouts/layout'
import Image from 'next/image'


export default function NotePage({ allPosts }) {
  return (
    <Layout>
      <Container>
        {allPosts.length ? (
          allPosts.map((post) => (
            <div className="max-w-5xl m-auto flex flex-col mt-5" key={post.Id} >
     
                <Link as={`/posts/${post.Id}`} href="/posts/[slug]">   
                  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0">

                        <Image className="h-48 w-full object-cover md:h-full md:w-48" src={'/post-img/' + post.Img} width={250} height={250}/> 
      
                      </div>
                      <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{post.Theme}</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{post.Id} - {post.Title}</a>


                        <div className="text-xs text-gray-400 truncate mt-2">
                          
                        <span className="font-semibold">{post.Email}</span> | <time>{distanceToNow(new Date(post.Date))}</time>
                        </div>

                        <p className="mt-2 text-gray-500">{post.Text}</p>
                      </div>
                    </div>
                  </div>
                </Link>
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
