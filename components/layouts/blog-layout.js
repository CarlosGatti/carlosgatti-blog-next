import Header from '../../components/nav/nav2'
import Footer from '../../components/footer';
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}   