import Head from "next/head";
import { userInfo } from "./api/templates/index";

import { Container } from "../components/Container";
import { CircularPicture } from "../components/CircularPicture";
import { LittleTitle, BigTitle, BodyText } from "../common/textElements";

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
                  <BigTitle marginTop={170} marginBottom={0} fontSize={75}>
                    {user.name.first} {user.name.last}
                  </BigTitle>
                  <LittleTitle fontSize={25}>SOFTWARE DEVELOPER</LittleTitle>
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
          <div className="bio">
            <LittleTitle fontSize={25}>{user.bio}</LittleTitle>
          </div>
          {getSections(user.sections)}
        </div>
      </main>
      <style>{`
          .fullPage {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #E5E5E5;
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

          .bio {
            display: flex;
            justify-content: center;
            width: 100%;
            background-color: #B45353;
          }

          .sectionTitle {
            width: 1000px;
          }

          .subsection {
            display: flex;
            justify-content: space-between;
            width: 1000px
          }
    
          .redBar {
            background-color: #B45353;
            width: 10px;
            // margin-left: 10px;
            // margin-right: 10px;
          }

          .sectionText {
            width: 960px;
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
  Object.keys(user).forEach((key) => {
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
      <BigTitle fontSize={100}>{sectionItem.title}</BigTitle>
      {getSubsections(sectionItem)}
    </div>
  ));
}

function getSubsections(sectionItem) {
  return sectionItem.subsections.map((subsection) => (
    <div>
      <BigTitle fontSize={30}>{subsection.title}</BigTitle>
      <div className="subsection">
        <div className="redBar"></div>
        <div className="sectionText" key={subsection}>
          <LittleTitle fontSize={30}>{subsection.subtitle}</LittleTitle>
          {subsection.description && getDescription(subsection.description)}
          {subsection.list && getList(subsection.list)}
          {subsection.attribute && getAttribute(subsection.attribute)}
        </div>
      </div>
    </div>
  ));
}

function getDescription(descriptions) {
  return descriptions.map((description) => (
    <div key={description}>
      <BodyText fontSize={30}>{description}</BodyText>
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
      <BodyText fontSize={30}>{attribute}</BodyText>
    </div>
  ));
}
