import * as React from 'react'
import Layout from '../../components/layouts/blog-layout'
import Header from '../../components/header-blog'
import Container from '../../components/container'
import styles from '../../styles/Home.module.css'
import ConfettiExplosion from 'react-confetti-explosion'
import ResumeTimeline from '../../components/resume-timeline'
const source = {
  position: 'absolute',
  right: '50%',
  left: '50%',
  bottom: 50
}

const bigExplodeProps = {
  force: 0.6,
  duration: 4000,
  particleCount: 200,
  floorHeight: 1600,
  floorWidth: 1600,
  
}

function Resume() {

  const [isExploding, setIsExploding] = React.useState(true);

  return (
    <>
      <div>
        <Layout>
          <Container>
          <Header/>
            <main className={styles.main}>
              <ResumeTimeline/>
              {isExploding && (               
                <div style={source}>
                  <ConfettiExplosion {...bigExplodeProps} action={setIsExploding}/>
                </div>
              )}
            </main>
          </Container>
        </Layout>
      </div>
    </>
  );
}

export default Resume
