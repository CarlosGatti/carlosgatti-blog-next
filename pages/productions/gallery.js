
import Layout from '../../components/layouts/layout'
import Container from '../../components/container'
import Header from '../../components/header-blog'
import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


function GalleryImg() {

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };


  const photos = [
    {
      src: '../gallery-douglas1.jpg',   
      width: 3,
      height: 4
    },
    {
      src: '../gallery-ny1-bw.jpg',   
      width: 3,
      height: 4
    },
    {
      src: '../gallery-ny3.jpg',   
      width: 3,
      height: 4
    },
 
  ];

  return (

    <>
    <Layout>
      <Container>
      <Header/>
 
      <div class="flex flex-col text-center w-full mb-20">
      <h2 class="text-xs text-gray-500 tracking-widest font-medium title-font mb-1">SOME PHOTOS I LIKE</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">I have recorded many nice moments in my life.</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">I will share here some of the most recent images.</p>
    </div>

    <div>


      <Gallery photos={photos} onClick={openLightbox} />


      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>

        </Container>
    </Layout>
    </> 
  )
}
export default GalleryImg

