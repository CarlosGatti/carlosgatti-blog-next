
import Layout from '../../components/layouts/blog-layout'
import styles from '../../styles/Home.module.css'
import NewsCard from '../../components/news-card'

function Blog({ latestPosts }) {
  return (
    <>
    <Layout>
      <div className={styles.container}>
        <div  className="my-6">
          <h1 className="text-2xl font-bold">Last things:</h1>
        </div>
          <section>
                {latestPosts.map((item) => (
                  <div key={item.Id}>
                    <NewsCard data={item} />
                  </div>
                ))}
          </section>  
        </div>
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
