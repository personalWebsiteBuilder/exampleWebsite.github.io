import React from 'react'
import Head from 'next/head'

import { NavBar } from '../components/NavBar'
import { Container } from '../components/Container'
import { NavigationButton } from '../components/NavigationButton'
import { BigTitle, H1, LittleTitle, BodyText } from '../common/textElements'

const Home = () => (
  <div className="container">
    <Head>
      <title>MeetMe</title>
    </Head>

    <main>
      <NavBar />
      <div className="topRow">
      <Container>
          <div className="column">
            <BigTitle marginTop={0} marginBottom={0} fontSize={50} mobileFontSize={25} color="white">professional sites in</BigTitle>
            <BigTitle marginTop={0} marginBottom={0} fontSize={138} mobileFontSize={60} color="white">three clicks.</BigTitle>
            <BigTitle marginTop={0} marginBottom={54} fontSize={35} mobileFontSize={17} color="white">(we'll handle the hard stuff)</BigTitle>
            <NavigationButton href="/get-started" width={244} height={58} borderRadius={5} mobileWidth={150}>
              <H1 color="black">Make My Site For Me</H1>
            </NavigationButton>
            <div className="subText">
              <LittleTitle color="white">(hey you! I’ll tell you more - just scroll down)</LittleTitle>
            </div>
          </div>
      </Container>
      </div>
      <div className="uploadContainer">
      <Container>
        <div className="Row">
          <div className="columnCentered">
            <div className="uploadTextContainer">
              <BigTitle>you want to impress. let us help you get there.</BigTitle>
              <LittleTitle>it’s time to show employers what you’re made of.</LittleTitle>
            </div>
            <div className="stepsRow">
              <div className="step">
                <div className="rectangle1"></div>
                <BodyText>upload your resume</BodyText>
              </div>
              <div className="step">
                <div className="rectangle2"></div>
                <BodyText>upload your headshot</BodyText>
              </div>
              <div className="step">
                <div className="rectangle3"></div>
                <BodyText>show off your site</BodyText>
              </div>
            </div>

          </div>
        </div>
        </Container>
      </div>
    </main>

    <style jsx>{`
      .topRow {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 300px;
        padding-bottom: 15px;
        background-color: blue;
      }
      @media (max-width: 768px) {
        .topRow {
          padding-top: 200px;
          padding-bottom: 15px;
          background-color: blue;
        }
      }
      .Row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .column,
      .columnCentered {
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      .columnCentered {
        align-items: center;
      }
      @media (max-width: 768px) {
        .column,
        .columnCentered {
          min-width: unset;
        }
      }
      .subText {
        display: flex;
        justify-content: flex-end;
        margin-top: 75px;
      }
      @media (max-width: 768px) {
        .subText {
          margin-top: 40px;
        }
      }
      .uploadContainer {
        padding-top: 30px;
        padding-bottom: 30px;
        background-color: #F6F7F9;
      }
      .uploadTextContainer {
        margin-bottom: 120px
      }
      @media (max-width: 768px) {
        .uploadTextContainer {
          margin-bottom: 40px
        }
      }
      .stepsRow {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      .step {
        margin-left: 90px;
        margin-right: 90px;
      }
      @media (max-width: 768px) {
        .step {
          margin-right: unset;
          margin-left: unset;
        }
      }
      .rectangle1,
      .rectangle2,
      .rectangle3 {
        width: 131px;
        height: 131px;
        background-color: lightBlue;
      }
      .rectangle1 {
        transform: rotate(-21deg);
      }
      .rectangle2 {
        transform: rotate(-80deg);
      }
      .rectangle3 {
        transform: rotate(-100deg);
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
