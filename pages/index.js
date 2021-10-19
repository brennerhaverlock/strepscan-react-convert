import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";





function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Strepscan Webapp</title>
        <meta name="description"
    content="Web app powered by AI and camera to take images of different areas of the throat." />
        <link rel="icon" href="public/icons/favicon.ico" />


{/* ICONS */}
  <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
  <link rel="alternate icon" href="/icons/favicon.ico" />
  <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" sizes="180x180" />
  <link rel="mask-icon" href="/icons/favicon.svg" color="#ffffff" />
  <meta name="theme-color" content="#ffffff" />

  {/* CSS  */}
  <link rel="stylesheet" href="/src/css/bootstrap.min.css" type="text/css"/>
  <link rel="stylesheet" href="/src/css/style.css" />
      </Head>




      <div>
        <button id="installApp">Install</button>
      </div>

      
      </div>
  );
}

export default Home
