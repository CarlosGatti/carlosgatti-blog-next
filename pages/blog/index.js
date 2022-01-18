
import Layout from '../../components/layouts/blog-layout'
import Container from '../../components/container'
import NewsCard from '../../components/news-card'
import Header from '../../components/header-blog'
import markdownToHtml from '../../lib/markdownToHtml'
import styles from '../../styles/Blog.module.css'

function Blog({ latestPosts }) {

  return (
    <>
    <Layout>
      <Container>
        <Header/>
          <div  className="my-6">
            <h1 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Last things:</h1>
          </div>
  
            <section  className={styles.container_card}>
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

  var x = 0 

  for (;x < latestPosts.length; x++) {
    latestPosts[x].Content = await markdownToHtml(latestPosts[x].Text || '')
  }

  if (!latestPosts) {
    return {
      notFound: true,
    }
  }
  return {
    props: { latestPosts}, // will be passed to the page component as props
  }
}

