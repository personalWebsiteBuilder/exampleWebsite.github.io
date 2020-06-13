import React from "react";
import Head from "next/head";

import { NavBar } from "../components/NavBar";
import { Container } from "../components/Container";
import { NavigationButton } from "../components/NavigationButton";
import { BubbleBars } from "../components/BubbleBars";
import { BubbleStars } from "../components/BubbleStars";
import { BigTitle, H1, LittleTitle, BodyText } from "../common/textElements";

const Home = () => (
  <div className="container">
    <Head>
      <title>MeetMe</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <NavBar />
      <div className="topRow">
        <Container>
          <div className="column">
            <BigTitle
              marginTop={0}
              marginBottom={0}
              fontSize={50}
              mobileFontSize={25}
              color="white"
            >
              professional sites in
            </BigTitle>
            <BigTitle
              marginTop={0}
              marginBottom={0}
              fontSize={138}
              mobileFontSize={60}
              color="white"
            >
              three clicks.
            </BigTitle>
            <BigTitle
              marginTop={0}
              marginBottom={54}
              fontSize={35}
              mobileFontSize={17}
              color="white"
            >
              (we'll handle the hard stuff)
            </BigTitle>
            <NavigationButton
              href="/get-started"
              width={244}
              height={58}
              borderRadius={5}
              mobileWidth={150}
            >
              <H1 color="black">Make My Site For Me</H1>
            </NavigationButton>
            <div className="subText">
              <LittleTitle color="white">
                (hey you! I’ll tell you more - just scroll down)
              </LittleTitle>
            </div>
          </div>
        </Container>
      </div>
      <div className="uploadContainer">
        <Container>
          <div className="topBubbles">
            <BubbleBars spaceBetween={10} />
          </div>
          <div className="row">
            <div className="columnCentered">
              <div className="uploadTextContainer">
                <BigTitle>
                  you want to impress. let us help you get there.
                </BigTitle>
                <LittleTitle>
                  it’s time to show employers what you’re made of.
                </LittleTitle>
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
          <div className="getStartedRow">
            <div className="bubbleStars">
              <div className="largeStar">
                <BubbleStars />
              </div>
              <div className="smallStar">
                <BubbleStars thickness={11} length={21} spacing={5} />
              </div>
            </div>
            <NavigationButton
              href="/get-started"
              width={244}
              height={58}
              borderRadius={5}
              mobileWidth={150}
            >
              <BigTitle>Get Started ></BigTitle>
            </NavigationButton>
            <div className="bottomBubbles">
              <BubbleBars spaceBetween={10} />
            </div>
          </div>
        </Container>
      </div>
      <div className="empowerRow">
        <Container>
          <div className="column">
            <BigTitle marginBottom={73} color="white">
              we want to empower the talented with the tools to succeed.
            </BigTitle>
            <div className="disciplineList">
              <BigTitle color="white" marginBottom={56}>
                Designers
              </BigTitle>
              <BigTitle color="white" marginBottom={56}>
                Engineers
              </BigTitle>
              <BigTitle color="white" marginBottom={56}>
                Actors
              </BigTitle>
              <BigTitle color="white" marginBottom={56}>
                Journalists
              </BigTitle>
              <BigTitle color="white" marginBottom={56}>
                You
              </BigTitle>
              <NavigationButton
                href="/example-websites"
                width={177}
                height={58}
                borderRadius={5}
                mobileWidth={150}
              >
                <H1 color="black">Templates</H1>
              </NavigationButton>
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
        background-color: #20578a;
      }
      @media (max-width: 768px) {
        .topRow {
          padding-top: 200px;
          padding-bottom: 15px;
        }
      }
      .row,
      .getStartedRow,
      .empowerRow {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .getStartedRow {
        padding-top: 75px;
        padding-bottom: 60px;
        align-items: center;
      }
      .empowerRow {
        padding-top: 114px;
        padding-bottom: 129px;
        background-color: #2a356d;
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
      .topBubbles {
        display: flex;
        margin-bottom: 62px;
      }
      .bottomBubbles {
        align-self: flex-start;
      }
      .uploadContainer {
        padding-top: 84px;
      }
      .uploadTextContainer {
        margin-bottom: 120px;
      }
      @media (max-width: 768px) {
        .uploadTextContainer {
          margin-bottom: 40px;
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
      .bubbleStars {
        display: flex;
        flex-direction: column;
        padding-top: 20px;
      }
      .largeStar {
        transform: rotate(-19deg);
        align-self: flex-start;
      }
      .smallStar {
        transform: rotate(6.6deg);
        align-self: flex-end;
        padding-left: 100px;
      }
      @media (max-width: 768px) {
        .smallStar {
          padding-left: 60px;
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

export default Home;
