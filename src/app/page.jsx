import Image from 'next/image';
import styles from './home.module.css'
const Home = () => {
  // throw new Error('error in home page');
  return <div className={styles.container}>
    <div className={styles.textcontainer}>
      <h1 className={styles.heading}>Create Thoughts Agency.</h1>
      <p className={styles.desc}>These fruits will make you feel alive. This is an example page. It’s different from a blog post because it will stay in one place</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image className={styles.brandimage} src="/brands.png" alt='' fill />
      </div>

    </div>
    <div className={styles.imagecontainer}>
      <Image className={styles.heroimage} src="/hero.gif" alt='' fill />
    </div>
  </div>;
};

export default Home;