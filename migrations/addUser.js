require("dotenv").config();
const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URI;

const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("test");
    const col = db.collection("users");

    const user = {
      name: {
        first: "Heather",
        last: "Gerstley",
      },
      email: "gerstley.h@northeastern.edu",
      dateStarted: new Date(),
      profilePicture: null,
      resume: null,
      greeting: "Hi! Welcome to my personal website!",
      bio:
        "I'm a Bio-Engineering student. I am also pursuing a master's in Project Management Engineering.",
      sections: [
        {
          title: "education",
          subsections: [
            {
              title: "Northeastern University Class of 2022, BS/MS Program",
              subtitle:
                "BS in Biomedical Engineering, MS in Engineering Project Management",
              description: [
                "Relevant Coursework: Engineering Project Management, Quantitative Physiology, Bioelectricity, Organic Chemistry, Biomechanics, Biomedical Experimental Statistics, Conservation Principles of Engineering, Calculus I-III, Differential Equations, Physics I-II, Chemistry, Biology, Cornerstone of Engineering.",
                "Awards: Dean’s Scholarship, Dean’s list 2017-all semesters.",
              ],
              attribute: ["GPA: 3.76", "Boston, MA"],
            },
            {
              title: "Bergen County Academies Class of 2017",
              subtitle: "Academy for the Advancement of Science and Technology",
              attribute: ["Hackensack, NJ", "2013-2017"],
            },
          ],
        },
        {
          title: "work experience",
          subsections: [
            {
              title: "HH Technology Co-op",
              subtitle: "Process Engineer",
              description: [
                "Interfaced with clients and an internal team of engineers to design commercial grade, loop reactor chemical plants.",
                "Utilized AutoCAD and Navisworks Plant 3D for design work.",
                "Worked side-by-side with project manager to schedule and communicate long term and short-term goals with our team using Microsoft Project.",
              ],
              attribute: ["Beverly, MA", "Jan. 2019- June 2019"],
            },
            {
              title: "Lustig Biomaterials Laboratory",
              subtitle: "Research Assistant",
              description: [
                "Contributed to developing a porous and conductive polymer to be incorporated into a biofuel cell, which will ultimately use bacteria to generate clean water and electricity for impoverished communities.",
              ],
              attribute: ["Boston, MA", "Sept. 2018- Present"],
            },
            {
              title: "Reckitt Benckiser (RB)",
              subtitle: "Research Intern",
              description: [
                "Developed and tested body wash formulations in product development center.",
                "Improved production scalability by altering formulas and manufacturing methods.",
                "Developed new pearlization process for formula which decreased necessary heat and energy consumption tremendously",
              ],
              attribute: ["Montvale, NJ", "2016-2017"],
            },
            {
              title: "Additional Work Summary",
              description: [
                "Administrative assistant at law firm (Summer 2018); Event Host at SkyZone (2017); Lifeguard/Swim Instructor (Summer 2016, Summer 2015).",
              ],
            },
          ],
        },
        {
          title: "skills",
          subsections: [
            {
              description: [
                "Technical Skills: AutoCAD, SOLIDWORKS, C++, Matlab, Navisworks Plant 3D",
              ],
            },
            {
              description: [
                "Administrative Skills: Microsoft Project and Excel",
              ],
            },
          ],
        },
        {
          title: "extracurriculars",
          subsections: [
            {
              title: "ASME (American Society of Mechanical Engineers)",
              description: [
                "Currently enrolled in a SOLIDWORKS certification course.",
              ],
              attribute: ["2019-Present"],
            },
            {
              title:
                "Northeastern Society of Women Engineers (Elected assistant treasurer, Fall 2018)",
              attribute: ["2017- Present"],
            },
            {
              title: "Alpha Epsilon Phi Sorority",
              attribute: ["2018-Present"],
            },
            {
              title: "Northeastern Lead360 Leadership Program",
              description: [
                "Participated in weekly workshops to improve public speaking and leadership skills.",
              ],
              attribute: ["2018- 2019"],
            },
          ],
        },
        {
          title: "community service",
          subsections: [
            {
              title: "St. Stephens Youth Program, Roxbury, MA",
              description: [
                "Mentored at-risk youth through educational activities.",
              ],
              attribute: ["Summer 2018"],
            },
            {
              title: "YMath, Bergen County, NJ",
              description: [
                "Tutored math to students aged 7-17 every Sunday for four years.",
              ],
              attribute: ["2013-2017"],
            },
            {
              title: "NicaWorks, Managua, Nicaragua",
              description: [
                "Taught children fundamental math skills in an impoverished community.",
                "Distributed medicine to patients at health clinics.",
              ],
              attribute: ["Summer 2015"],
            },
          ],
        },
      ],
      contact: ["Gerstley.h@husky.neu.edu", "(201)-655-0548"],
    };

    // const f1 = await col.findOneAndDelete({
    //   email: "gerstley.h@northeastern.edu",
    // });
    const p1 = await col.insertOne(user);
    // Find one document
    const myDoc = await col.find();
    // Print to the console
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
