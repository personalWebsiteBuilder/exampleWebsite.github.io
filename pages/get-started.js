import Head from "next/head";
import fetch from "node-fetch";

import { NavBar } from "../components/NavBar";
import { Container } from "../components/Container";
import { CircularPicture } from "../components/CircularPicture";
import { LittleTitle } from "../common/textElements";

export default function getStarted({ user }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <Container>
          <CircularPicture />
          <LittleTitle>{user.skills[3]}</LittleTitle>
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
            background-color: lightBlue;
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
  console.log(user, "HI");
  return {
    props: {
      user,
    },
  };
}
