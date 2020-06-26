import Head from "next/head";

import { NavBar } from "../components/NavBar";
import { Container } from "../components/Container";
import { CircularPicture } from "../components/CircularPicture";
import { NavigationButton } from "../components/NavigationButton";

export default function getStarted({ user }) {
  return (
    <>
      <Head>
        <title>Get started</title>
      </Head>
      <main>
        <NavBar />
        <Container>
          <CircularPicture />
          <NavigationButton
            width={244}
            height={58}
            borderRadius={5}
            mobileWidth={150}
            href="/template1"
          />
        </Container>
      </main>
      <style>{`
        main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
    
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/templates");
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}
