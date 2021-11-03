import { useRouter } from 'next/router'
import Link from "next/link";
import { MdMonetizationOn } from "react-icons/md";
import ErrorPage from 'next/error'
import Comment from '../../components/comment'
import Container from '../../components/container'
import distanceToNow from '../../lib/dateRelative'
import Head from 'next/head'
import { IoChatbox } from "react-icons/io5";
import Layout from '../../components/layouts/layout'


import {
  FiSkipForward,
  FiSkipBack,
  FiPlay,
} from "react-icons/fi";


export default function PostPage( { post } ) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Container>

        <Head>
          <title>{post[0].Title} | Carlos Gatti :: Blog</title>
        </Head>

        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <div>
            <div className="max-w-4xl m-auto">
              <div className="flex font-sans">
                <Link href="#">
                  <a className="flex flex-col items-center self-start mt-1 mr-2 ">
                    <div className="w-12 pt-1 pb-1 text-sm font-bold text-center border border-gray-300 rounded-lg rounded-b-none">
                      <MdMonetizationOn className="inline-block w-4 h-4 text-yellow-400 " />
                    </div>
                    <div className="w-full pb-1 text-xs text-center pt-0.5 rounded-lg rounded-t-none bg-gray-300 text-gray-700">
                      {post[0].Id}
                    </div>
                  </a>
                </Link>
                <div className="flex-1 overflow-hidden">
                  <h1 className="text-3xl font-semibold text-gray-900">
                    {post[0].Title}
                  </h1>
                  <div className="text-xs text-gray-400 truncate">
                    <span className="font-semibold">{post[0].Email}</span> | <time>{distanceToNow(new Date(post[0].Date))}</time>
                  </div>

                  <p className="mt-4 text-gray-700">
                    {post[0].Text}
                  </p>
                </div>
              </div>


              <div className="player bg-gray-50 p-6 flex flex-col items-center rounded-md">
                <div className="flex justify-center items-center h-24">
                  <h3 className="text-xl font-bold text-center">
                    {post[0].Title}
                  </h3>
                </div>

                <div className="mt-6">
                  <div className="w-full h-2 bg-gray-200 rounded-md mb-4">
                    <div className="w-3/5 h-2 bg-purple-600 rounded-md mb-4" />
                  </div>
                  <div className="flex gap-4">
                    <button className="rounded-full p-3 hover:bg-warmGray-200">
                      <FiSkipBack size={22} />
                    </button>
                    <button className="bg-purple-500 rounded-full p-3 hover:bg-purple-600">
                      <FiPlay size={22} color="#fff" />
                    </button>
                    <button className="rounded-full p-3 hover:bg-warmGray-200">
                      <FiSkipForward size={22} />
                    </button>
                  </div>
                </div>
              </div>

              <hr className="mt-8 mb-8 border-t-2 border-gray-200 border-dotted ml-14" />
              <div className="flex items-center mt-2 text-xs font-semibold text-gray-700 ml-14">
                <IoChatbox className="w-4 h-4 mr-1 text-yellow-400" /> Comentar
              </div>
              <Comment />
            </div>
        </div>
        )}
      </Container>
    </Layout>    
  )
}


export async function getStaticProps(context) {
  const id = context.params.slug;
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  const response = await fetch(process.env.API);
  const res = await fetch(response.url + '/api/post/' + id)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}

export async function getStaticPaths() {  
  // Call an external API endpoint to get posts
  const response = await fetch(process.env.API);
  const res = await fetch(response.url + 'api/allslugs')
  const posts = await res.json()
 
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.Id.toString() },
  }))

  return { paths, fallback: false }
}
