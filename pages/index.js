import React from 'react'
import Head from 'next/head'

import { NavBar } from '../components/NavBar'
import { Container } from '../components/Container'
import { NavigationButton } from '../components/NavigationButton'
import { BigTitle, H1, LittleTitle } from '../common/textElements'

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <NavBar />
      <div className="TopRow">
      <Container>
        <div className="Row">
          <div className="Column">
            <BigTitle marginTop={0}>Get ahead of the game.</BigTitle>
            <BigTitle marginTop={0}>Step up your professional identity.</BigTitle>
            <BigTitle marginTop={0}>It's time to show employers what you are made of.</BigTitle>
          </div>
          <div className="ColumnCentered">
            <NavigationButton href="/get-started" width={300} height={50} borderRadius={25}>
              <H1 color="white">Make my website for me</H1></NavigationButton>
          </div>
        </div>
      </Container>
      </div>
      <div className="UploadContainer">
      <Container>
        <div className="Row">
          <div className="resumeProfileBlastoff">
            <img src="/homeGenericResume.jpg" height="120" width="120" />
            <BigTitle>+</BigTitle>
            <img src="/homeGenericProfilePic.png" height="120" width="120" />
            <BigTitle>=</BigTitle>
            <img src="/homeComputerRocket.jpg" height="200" width="200" />
          </div>
          <div className="Column">
            <div className="UploadText">
            <LittleTitle >
              Upload your resume and a profile picture and boom, you've got your personal website fully filled out.
              Three clicks and done!<br /><br />You've looked into or heard about generic 
              website builders but still haven't made one so build your professional identity here; quick, easy, and constantly 
              coming out with new features tailored to your desires.
              </LittleTitle>
            </div>
          </div>
        </div>
        </Container>
      </div>
    </main>

    <style jsx>{`
      .TopRow {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 130px;
        padding-bottom: 40px;
      }
      .Row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .Column,
      .ColumnCentered {
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      .ColumnCentered {
        align-items: center;
      }
      @media (max-width: 768px) {
        .Column,
        .ColumnCentered {
          min-width: unset;
        }
      }
      .UploadContainer {
        padding-top: 30px;
        padding-bottom: 30px;
        background-color: #F6F7F9;
      }
      .resumeProfileBlastoff {
        width: 450px;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      @media (max-width: 768px) {
        .resumeProfileBlastoff {
          flex-direction: column;
        }
      }
      .UploadText {
        min-width: 400px;
      }
      @media (max-width: 768px) {
        .UploadText {
          min-width: unset;
        }
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
