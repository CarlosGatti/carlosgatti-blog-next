
import * as React from 'react'
import Layout from '../../components/layouts/blog-layout'
import Header from '../../components/header-blog'
import Container from '../../components/container'
import ResumeTimeline from '../../components/resume-timeline'

function Resume() {
  return (
    <>
      <div>
        <Layout>
          <Container>
            <Header/>
            <ResumeTimeline/>     
          </Container>
        </Layout>
      </div>
    </>
  );
}

export default Resume
