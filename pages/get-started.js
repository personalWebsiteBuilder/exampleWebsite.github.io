import Head from 'next/head'
import { NavBar } from '../components/NavBar'
import { Container } from '../components/Container'
import { CircularPicture } from '../components/CircularPicture'

const getStarted = () => (
    <>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <NavBar />
            <Container>
                <CircularPicture />
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

export default getStarted;