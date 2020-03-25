import Head from 'next/head'
import { Navbar } from '../components/NavBar'
import { Container } from '../components/Container'
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
            </Container>
        </main>
        <style>{`
        `}</style>
    </>
);

export default getStarted;