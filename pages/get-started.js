import Head from 'next/head'
import { Navbar } from '../components/NavBar'
import { Container } from '../components/Container'
import { CircularPicture } from '../components/CircularPicture'
import { render } from 'react-dom'

const getStarted = () => (
    <>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Navbar />
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