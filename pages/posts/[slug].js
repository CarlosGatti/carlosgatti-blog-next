import { useRouter } from 'next/router'
import Link from "next/link"
import { MdMonetizationOn } from "react-icons/md"
import ErrorPage from 'next/error'
//import Comment from '../../components/comment'
import distanceToNow from '../../lib/dateRelative'
import Head from 'next/head'
import { IoChatbox } from "react-icons/io5"
import Layout from '../../components/layouts/blog-layout'
import styles from '../../styles/Home.module.css'
import markdownToHtml from '../../lib/markdownToHtml'
import PostBody from '../../components/post-body'
import Header from '../../components/header-blog'

import Container from '../../components/container'
import PostHeader from '../../components/post-header'
import PostTitle from '../../components/post-title'

import {
  FiPlay,
  FiStopCircle, 
  FiPauseCircle
} from "react-icons/fi";

export default function PostPage( { post, content } ) {
  const router = useRouter()
  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

//speak post
  const speechStart = (post) => {
    const lang = 'en-US'
    const voiceIndex = 2
    const speak = async text => {
      if (!speechSynthesis) {
        return
      }
      const message = new SpeechSynthesisUtterance(text)
      message.voice = await chooseVoice()
      speechSynthesis.speak(message)
    }
    
    const getVoices = () => {
      return new Promise(resolve => {
        let voices = speechSynthesis.getVoices()
        if (voices.length) {
          resolve(voices)
          return
        }
        speechSynthesis.onvoiceschanged = () => {
          voices = speechSynthesis.getVoices()
          resolve(voices)
        }
      })
    }
    
    const chooseVoice = async () => {
      const voices = (await getVoices()).filter(voice => voice.lang == lang)   
      return new Promise(resolve => {
        resolve(voices[voiceIndex])
      })
    }
    //revert html
    var temp = document.createElement('div');
    temp.innerHTML = post;
    speak(temp.textContent)
  };

  const speechCancel = () => {
    var synth = window.speechSynthesis;
    synth.cancel();
  };

  const speechPause = () => {
    var synth = window.speechSynthesis;
    synth.pause();
    var amIPaused = synth.paused; 
    if(amIPaused == true){
      synth.speak();
    }
  };
  
  return (
    <Layout>
      <Container>
          <Header/>
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <div>
              <article className="mb-32">
                <PostHeader
                  title={post[0].Title}
                  coverImage={post[0].Img}
                  date={post[0].Date}
                  author={post[0].Email}
                  avatar={post[0].AvatarImg}
                />
                <PostBody content={content} />
              </article>
              <div className="max-w-4xl m-auto">
                <div className="player bg-gray-50 p-6 flex flex-col items-center rounded-md">
                  <div className="flex justify-center items-center h-24">
                    <h3 className="text-xl font-bold text-center">
                      {post[0].Title}
                    </h3>
                  </div>
                  <div className="mt-6">
                    <div className="w-full h-2 bg-gray-200 rounded-md mb-4">
                      <div className="w-3/5 h-2 bg-purple-600 rounded-md mb-4" />
                    </div>
                    <div className="flex gap-4">
                      <button className="rounded-full p-3 hover:bg-warmGray-200" onClick={(e) => speechCancel()}>
                        <FiStopCircle size={22} />
                      </button>
                      <button className="bg-purple-500 rounded-full p-3 hover:bg-purple-600" onClick={(e) => speechStart(post[0].Text)}>
                        <FiPlay size={22} color="#fff" />
                      </button>
                      <button className="rounded-full p-3 hover:bg-warmGray-200" onClick={(e) => speechPause()}>
                        <FiPauseCircle size={22} />
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="mt-8 mb-8 border-t-2 border-gray-200 border-dotted ml-14" />
                <div className="flex items-center mt-2 text-xs font-semibold text-gray-700 ml-14">
                  <IoChatbox className="w-4 h-4 mr-1 text-yellow-400" /> Comentar
                </div>
                {/* <Comment /> */}
              </div>
          </div>
          )}
      </Container>
    </Layout>    
  )
}

export async function getStaticProps(context) {
  const id = context.params.slug;
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  const response = await fetch(process.env.API);
  const res = await fetch(response.url + 'api/post/' + id)
  const post = await res.json()

  const content = await markdownToHtml(post[0].Text || '')
  // Pass post data to the page via props

  console.log("Mark", content)
  return { 
    props: { post,
             content
            } }
}

export async function getStaticPaths() {  
  // Call an external API endpoint to get posts
  const response = await fetch(process.env.API);
  const res = await fetch(response.url + 'api/allslugs')
  const posts = await res.json()
 
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.Id.toString() },
  }))
  return { paths, fallback: false }
}

