
import Layout from '../../components/layouts/blog-layout'
import Container from '../../components/container'
import NewsCard from '../../components/news-card'
import MoreStories from '../../components/post-more'
import Header from '../../components/header'

function Blog({ latestPosts }) {

  return (
    <>
    <Layout>
      <Container>
        <Header/>

          <div  className="my-6">
            <h1 className="text-2xl font-bold">Last things:</h1>
          </div>
            <section  class="flex flex-wrap gap-5">
                  {latestPosts.map((item) => (
                    <div key={item.Id}>
                      <NewsCard data={item} />
                    </div>
                  ))}
            </section> 

            {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}

        </Container>
    </Layout>
    </> 
  )
}
export default Blog


export async function getStaticProps() {
  const response = await fetch(process.env.API);
  const res = await fetch(response.url + 'api/latestposts/')
  const latestPosts = await res.json()

  if (!latestPosts) {
    return {
      notFound: true,
    }
  }
  return {
    props: { latestPosts }, // will be passed to the page component as props
  }
}

