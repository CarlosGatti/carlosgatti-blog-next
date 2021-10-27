import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Comment from '../../components/comment'
import Container from '../../components/container'
import distanceToNow from '../../lib/dateRelative'
import Head from 'next/head'

export default function PostPage( props ) {
  const router = useRouter()
  
  if (!router.isFallback && !props.post[0]?.Id) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Container>
      <Head>
        <title>{props.post.Title} | Carlos Gatti :: Blog</title>
      </Head>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <div>
          <article>
            <header>
              <h1 className="text-4xl font-bold">{props.post[0].Title}</h1>
              {props.post[0].Text ? (
                <p className="mt-2 text-xl">{props.post[0].Text}</p>
              ) : null}
              <time className="flex mt-2 text-gray-400">
              <time>{distanceToNow(new Date(props.post[0].Date))}</time>
              </time>
            </header>
          </article>
          <Comment />
        </div>
      )}
    </Container>
  )
}

export async function getServerSideProps(context){
  const slug  = context.query.slug;
  const res = await fetch(`http://localhost:3001/api/post/`+ slug)
  const post = await res.json()
  if (!post) {
    return {
      notFound: true, 
    }
  }
  return {
    props: {
      post
    },
  }
}
