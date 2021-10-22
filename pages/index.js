import Container from '../components/container'
import Image from 'next/image'
 
function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            I am a full stack developer with a passion for building and designing creative, responsive, web applications and tecnology. 
          </h1>
          <p>
            Here I will gather information about all these subjects, and I intend to entice you to learn more about me and my projects at the moment.
          </p>

          <p>Consider taking a few minutes to watch, read, and get involved.</p>

          <p>My name is <code><b>Carlos Gatti</b></code> and I'm happy to have you here, and now you just have to choose where you want to start.</p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/desk.jpg"
          alt="my desk"
          width={1920 / 2}
          height={1280 / 2}
        />
      </div>
    </> 
  )
}

export default HomePage





