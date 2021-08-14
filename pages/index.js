import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import React from 'react';
import { Button } from '@chakra-ui/react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer
} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const imageUrl =
  'https://images.unsplash.com/photo-1628887391400-0c8cc8f3fac1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80';

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        {/* <Image src={imageUrl}/> */}
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

const MyPdf = () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
);

// 3508 x 2480

const a4Width = 2480;
const a4Height = 3508;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Button>Connect</Button>
        <p>Hello</p>
        <div />
        <PrintFrame />

        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.jssss</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by kast_productions
        </a>
      </footer>
    </div>
  );
}

// function PrintFrame({ size, type, images = [{}] }) {
//   const [image, setImage] = React.useState();

//   return (
//     <div>
//       <img
//         style={{
//           objectFit: 'cover',
//           border: '10px solid blue',
//           height: a4Height * 0.1,
//           width: a4Width * 0.1
//         }}
//         src="https://images.unsplash.com/photo-1628815870764-c903fd82f4d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
//       />
//     </div>
//   );
// }
