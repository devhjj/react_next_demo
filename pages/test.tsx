import styles from '../styles/test.module.css'

export default function App() {

    const icon = () => {
        <div className={styles.moveCircle}>
          <div className={styles.blobs}>
            <div className={styles.blob}>SAT</div>
            <div className={styles.blob}>AP</div>
            <div className={styles.blob}>IGCSE</div>
            <div className={styles.blob}>IB</div>
            <div className={styles.blob}>Academic tutoring</div>
            <div className={styles.blob}>ACT</div>
            <div className={styles.blob}>A-levels</div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
        </div>
      }
    
    return (
    <>
    {icon()}
    </>
  );
}