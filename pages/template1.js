import Head from "next/head";
import { userInfo } from "./api/templates/index"

import { Container } from "../components/Container";
import { CircularPicture } from "../components/CircularPicture";
import { LittleTitle, BigTitle, BodyText } from "../common/textElements";
import {
  capitalizeAllFirstLetters,
  capitalizeAllLetters,
} from "../misc/helpers";

export default function template1({ user }) {
  return (
    <>
      <Head>
        <title>Template 1</title>
      </Head>
      <main>
        <div className="fullPage">
          <div className="topColor">
            <Container>
              <div className="nameAndProfile">
                <div className="profilePic">
                  <CircularPicture marginRight={20} src={user.profilePicture} />
                </div>
                <div>
                  <BigTitle
                    marginTop={160}
                    marginBottom={0}
                    fontSize={75}
                    color="white"
                  >
                    {user.name.first} {user.name.last}
                  </BigTitle>
                  <LittleTitle fontSize={25}>
                    {capitalizeAllLetters("software developer")}
                  </LittleTitle>
                  <BodyText fontSize={25}>{user.greeting}</BodyText>
                </div>
              </div>
            </Container>
          </div>
          <Container>
            <div className="resume">
              <img src={user.resume} />
            </div>
          </Container>
          <div className="coloredContainer">
            <LittleTitle fontSize={25} color="white">
              {user.bio}
            </LittleTitle>
          </div>
          {getSections(user.sections)}
          <div className="coloredContainer">
            <div className="centeredContainer">
              <BigTitle fontSize={100} color="white" maxWidth={366}>
                {capitalizeAllLetters("Get in touch")}
              </BigTitle>
            </div>
            <div className="whiteBar"></div>
            <div className="centeredContainer">
              {user.contact.map((info) => (
                <BodyText color="white" marginTop={10}>
                  {info}
                </BodyText>
              ))}
            </div>
          </div>
        </div>
      </main>
      <style>{`
          .fullPage {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #FFFCF4;
          }

          .topColor {
            width: 100%;
            height: 270px;
            background-color: #B45353;
          }

          .nameAndProfile {
            display: flex;
            align-items: center;
          }

          .profilePic {
            margin-top: 170px;
          }

          .resume {
            margin-top: 150px;
            margin-bottom: 10px;
          }

          .coloredContainer {
            display: flex;
            justify-content: center;
            margin-top: 40px;
            padding-top: 40px;
            padding-bottom: 40px;
            width: 100%;
            background-color: #B45353;
          }
          
          .sectionTitle {
            width: 1100px;
          }
          
          .subsectionGroup {
            display: flex;
            justify-content: space-between;
          }
          
          .subsectionContainer {
            display: flex;
            flex-direction: column;
          }
          
          .subsection {
            display: flex;
            justify-content: space-between;
            width: 1000px
          }
          
          .redBar {
            background-color: #B45353;
            width: 10px;
            margin-top: 50px;
          }

          .whiteBar {
            background-color: #FFFCF4;
            width: 10px;
            margin-right: 50px;
            margin-left: 50px;
          }
          
          .subsectionHeader {
            display: flex;
            justify-content: space-between;
            margin-top: 50px;
          }
          
          .subsectionTitleAndSubtitle {
            display: flex;
            flex-direction: column;
          }
          
          .sectionText {
            width: 960px;
          }
          
          .descriptionGroup {
            margin-top: 12px;
          }
          
          .description {
            margin-top: 5px;
          }
          
          .centeredContainer {
            display: flex;
            justify-content: center;
            flex-direction: column;
          }

          footer {
            // width: 100%;
            // height: 100px;
            // border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const user = await userInfo();
  Object.keys(user).forEach(key => {
    let value = user[key];
    if (key === "_id" || key === "dateStarted") {
      value = value.toString();
    }
    user[key] = value;
  });
  return {
    props: {
      user,
    },
  };
}

function getSections(sections) {
  return sections.map((sectionItem) => (
    <div className="sectionTitle" key={sectionItem}>
      <BigTitle
        fontSize={100}
        color="#B45353"
        fontWeight="900"
        marginBottom={-20}
        marginTop={80}
      >
        {capitalizeAllFirstLetters(sectionItem.title)}
      </BigTitle>
      <div className="subsectionGroup">
        <div className="redBar"></div>
        <div className="subsectionContainer">{getSubsections(sectionItem)}</div>
      </div>
    </div>
  ));
}

function getSubsections(sectionItem) {
  return sectionItem.subsections.map((subsection) => (
    <div className="subsection" key={subsection}>
      <div className="sectionText">
        <div className="subsectionHeader">
          <div className="subsectionTitleAndSubtitle">
            <BigTitle
              fontSize={30}
              fontWeight="bold"
              marginTop={0}
              marginBottom={0}
            >
              {subsection.title}
            </BigTitle>
            <LittleTitle fontSize={30} marginTop={0} marginBottom={0}>
              {subsection.subtitle}
            </LittleTitle>
          </div>
          <div className="attributes">
            {subsection.attribute && getAttribute(subsection.attribute)}
          </div>
        </div>
        <div className="descriptionGroup">
          {subsection.description && getDescription(subsection.description)}
          {subsection.list && getList(subsection.list)}
        </div>
      </div>
    </div>
  ));
}

function getDescription(descriptions) {
  return descriptions.map((description) => (
    <div className="description" key={description}>
      <BodyText fontSize={25} fontWeight="400" marginTop={0} marginBottom={0}>
        {description}
      </BodyText>
    </div>
  ));
}
function getList(list) {
  return list.map((item) => (
    <div key={item}>
      <BodyText fontSize={30}>{item}</BodyText>
    </div>
  ));
}
function getAttribute(attributes) {
  return attributes.map((attribute) => (
    <div key={attribute}>
      <BodyText fontSize={30} marginTop={0} marginBottom={0}>
        {attribute}
      </BodyText>
    </div>
  ));
}
