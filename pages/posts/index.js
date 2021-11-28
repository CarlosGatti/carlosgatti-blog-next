import Container from '../../components/container'
import Layout from '../../components/layouts/blog-layout'
import Image from 'next/image'
import NewsCard from '../../components/news-card'

export default function NotePage({ allPosts }) {
  return (
    <Layout>
      <Container>
        {allPosts.length ? (
          allPosts.map((post) => (
            <div className="max-w-5xl m-auto flex flex-col mt-5" key={post.Id} >
                 <NewsCard data={post} />
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
