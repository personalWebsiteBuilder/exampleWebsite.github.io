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

    let userDocument1 = {
      name: { first: "Brandon", last: "Nilsen" },
      email: "nilsen.b@northeastern.edu",
      dateStarted: new Date(2020, 4, 27),
      profilePicture: ":)",
      greeting:
        "Hi I'm Brandon Nilsen and welcome to my professional, yet personal website!",
      resume: null,
      bio:
        "While my project experience may suggest I am very detail oriented, I also love to make a mess in the kitchen creating new dishes in my free time.",
      sections: [
        {
          education: [
            {
              name: "Northeastern University",
              graduation: 2022,
              description:
                "Candidate for Bachelors in Computer Science and Design",
              classes: ["Fundies I", "Fundies II"],
              gpa: null,
            },
          ],
        },
        { skills: ["Figma", "GraphQL"] },
        {
          experience: [
            {
              title: "RockBush",
              subtitle: "Software Engineering Intern",
              duration: "June-Aug. 2018",
              description: "Optimized back end response time.",
              image: null,
            },
            {
              title: "Boston Seltzer Co.",
              subtitle: "Graphic Design Intern",
              duration: "June-Aug. 2017",
              description:
                "Designed graphics for winter edition of truly cans.",
              image: null,
            },
          ],
        },
        {
          projects: [
            {
              title: "MeetMe",
              duration: "April 2020-Present",
              description: "co-founded a personal website builder",
              image: null,
            },
          ],
        },
        {
          interests: [
            {
              title: "Cooking!",
              description:
                "I have been taking cooking classes for years and have amassed a cooking collection of my favorite meals",
              link: "cooking.com/brandonnilsen",
              image: null,
            },
          ],
        },
      ],
      contact: ["brandonNilsen@meetme.io", "github.com/brandonnilsen"],
    };

    let userDocument2 = {
      name: { first: "Jelly", last: "Doughnut" },
      email: "dougnut.j@northeastern.edu",
      dateStarted: new Date(2020, 4, 28),
      profilePicture: ":D",
      greeting:
        "Hi I'm Jelly and welcome to my professional, yet personal website!",
      resume: null,
      bio:
        "I am a Junior at Northeastern University studying Engineering and Computer Science. I love anything and everything related to cars.",
      sections: [
        {
          education: [
            {
              name: "Northeastern University",
              graduation: 2022,
              description:
                "Candidate for Bachelors in Computer Science and Engineering",
              classes: [
                "Object Oriented Design",
                "Computer Systems",
                "Algorithms & Data Structures",
                "Discrete Structures",
                "Introduction to Python",
                "Fundamentals of Computer Science I & II",
                "Thermodynamics",
                "Dynamics",
                "Vibrations",
                "Statics",
                "Computation and Design",
                "Mechanics of Materials",
                "Material Science",
              ],
              gpa: null,
            },
          ],
        },
        {
          skills: [
            "Proficient in Java, C, and C++",
            "Familiar with Python, MATLAB, Assembly, LaTeX, and Soar",
            "Modeling / Finite Element Analysis Software: SolidWorks, CATIA V6, and ANSYS/Mechanical APDL",
            "Proficient in 3D Printing (Assembled printer, circuit board, and programmed in C++)",
            "Proficient in German Language",
          ],
        },
        {
          experience: [
            {
              title:
                "United Airlines, Inc. – Technical Operations Engineering, San Francisco",
              subtitle:
                "Maintenance Base, Component Support Engineering Department, Engineering Intern",
              duration: "June-Aug. 2018",
              description:
                "Reverse-engineered Boeing Rib in SolidWorks and CATIA, decreasing price per part by 3000%.\nDeveloped Maintenance, Repair, and Overhaul procedures for damaged aircraft components.\nAssessed strength and corrosion resistant properties of Aircraft Nacelle Hardware Substitutions.\nVerified Part interchangeability by confirming fit, form, and function of Thrust Reverser Blocker Doors.",
              image: null,
            },
            {
              title: "Chemical Engineering Laboratory, Stanford University",
              subtitle:
                "Fluid Dynamics Laboratory, Lab Assistant for Professor Gerald Fuller",
              duration: "May-Aug. 2015-2017",
              description:
                "Alongside Ph.D. candidates, measured thickness of thin films using color interferometry, assisted in color interferometry code instruction manual, and developed new methods of cleaning silicon wafers.\nDesigned a more efficient and precise apparatus using SolidWorks to measure surface tension. Stanford utilized the design and it is now used for demonstrations in professor-led lectures.\nCoordinated the internship program while also conducting research.",
              image: null,
            },
          ],
          research: [
            {
              title:
                "Artificial Intelligence Computer Coding Automation, Northeastern University",
              subtitle:
                "Khoury College of Computer Sciences, Dr. Nate Derbinsky, Director of Teaching",
              duration: "Dec. 2018-May 2019",
              description:
                "Programmed in Soar to implement fundamental Cognitive Architecture techniques and learned about graph design.",
            },
          ],
          projects: [
            {
              title:
                "Personal Programming Project — Thermodynamics Simulator, Java",
              subtitle: null,
              duration: "July 2019-Present",
              description:
                "Integrating mechanical engineering skills with programming ability to design a drag-and-drop thermodynamics simulator.",
              image: null,
            },
            {
              title:
                "Personal Programming Project — Weather Warner, Shell Script",
              subtitle: null,
              duration: "Sept. 2019",
              description:
                "Connects to weather website API and recommends outfits for the day given various projected weather conditions.",
            },
            {
              title:
                "Mechanics of Materials Class Competition, Rose-Hulman Institute of Technology",
              subtitle: null,
              duration: "Feb. 2018",
              description:
                "Received first place for designing nylon link for helicopter blade simulation with the best strength-to- weight ratio.",
            },
            {
              title:
                "Operation Catapult Engineering Competition, Rose-Hulman Institute of Technology",
              subtitle: null,
              duration: "July 2016",
              description:
                "Received First Place for “Best Project” out of 40+ groups consisting of 170 students.\nBuilt device with SolidWorks that converts kinetic energy into light using pulleys, a falling weight and a circuit with LEDs, resistors, and capacitors.",
            },
            {
              title: "SCCA Auto Racing",
              subtitle: null,
              duration: "Dec. 2016-Present",
              description:
                "Perform race car maintenance (hydraulics, cooling system, and other typical wear) for SCCA Track Racing Team.",
            },
          ],
          clubs: [
            {
              title: "Student Government Association",
              subtitle: null,
              duration: "Fall 2017-Spring 2018",
              description:
                "Elected by student body to represent 300+ students’ issues of any type to the College of Engineering.",
            },
          ],
        },
      ],
      contact: ["doughnut.j@meetme.io", "github.com/jellydoughnut"],
    };

    // Insert a single document, wait for promise so we can read it back
    const f1 = await col.findOneAndDelete({
      email: "nilsen.b@northeastern.edu",
    });
    const f2 = await col.findOneAndDelete({
      email: "dougnut.j@northeastern.edu",
    });
    const p1 = await col.insertOne(userDocument1);
    const p2 = await col.insertOne(userDocument2);
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
