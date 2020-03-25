import Head from 'next/head'
import { NavBar } from '../components/NavBar'
import { Container } from '../components/Container'
import { CircularPicture } from '../components/CircularPicture'
import { NavigationButton } from '../components/NavigationButton'

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <NavBar />
      <Container>
        <CircularPicture image={"/zeit.svg"} imageActive={"/zeit.svg"} radiusPercent={50}/>
        <NavigationButton href="/get-started" width={150} height={40}>Navigation Button</NavigationButton>
      </Container>
      {/* Everything below this is default stuff that is not part of the project.  */}
    </main>

    <footer>
    </footer>

    <style jsx>{`
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

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home
