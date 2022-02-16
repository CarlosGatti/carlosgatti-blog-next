import * as React from 'react'
import Layout from '../../components/layouts/layout'
import styles from '../../styles/Home.module.css'
import ConfettiExplosion from 'react-confetti-explosion'


const source = {
  position: 'absolute',
  right: '50%',
  left: '50%',
  bottom: 50
}
const bigExplodeProps = {
  force: 0.6,
  duration: 5000,
  particleCount: 200,
  floorHeight: 1600,
  floorWidth: 1600
}

function Resume() {

  const [isExploding, setIsExploding] = React.useState(true);

  return (
    <>
       <div>
         <Layout>
       <div className={styles.container}>
          <main className={styles.main}>
        {isExploding && (
          <div style={source}>
            <ConfettiExplosion {...bigExplodeProps} action={setIsExploding}/>
          </div>
        )}
 </main>
</div>
</Layout>
    </div>
    </>
  );
}

export default Resume
