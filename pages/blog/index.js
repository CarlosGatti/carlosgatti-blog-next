
import Layout from '../../components/layouts/blog-layout'
import Container from '../../components/container'
import NewsCard from '../../components/news-card'
import Header from '../../components/header-blog'
import markdownToHtml from '../../lib/markdownToHtml'
import styles from '../../styles/Blog.module.css'
import Intro from '../../components/intro'
import IntroTelegram from '../../components/intro-telegram'

function Blog({ latestPosts, responseAPI }) {

  return (

    <>
    <Layout>
      <Container>
          <Header/>
          <Intro/>
          <IntroTelegram/>

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
  const res = await fetch(`${process.env.API}/api/latestposts/`)
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
    props: { latestPosts }, // will be passed to the page component as props
  }
}

