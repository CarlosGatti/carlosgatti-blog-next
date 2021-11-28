
import Layout from '../../components/layouts/blog-layout'
import styles from '../../styles/Home.module.css'
import NewsCard from '../../components/news-card'

export default function NotePage({ allPosts }) {
  return (
    <Layout>
      <div className={styles.container}>
        <div  className="my-6">
          <h1 className="text-2xl font-bold">List of everything:</h1>
        </div>
          <section>
                {allPosts.map((item) => (
                  <div key={item.Id}>
                    <NewsCard data={item} />
                  </div>
                ))}
          </section>  
        </div>
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
