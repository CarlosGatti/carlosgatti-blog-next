
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




        <div class="sm:text-center lg:text-left mb-20">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Consider joining our telegram </span>
            <span class="block text-gray-600 xl:inline">financial market</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          There I share content about the financial market and some economic tips.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
             
             



            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="https://t.me/gatti_trading" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-300 md:py-4 md:text-lg md:px-10">
              Join us
              </a>
            </div>
          </div>
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

