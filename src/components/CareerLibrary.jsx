import { useState } from "react";
import "./CareerLibrary.css";
const careers = [

  /* IT FIELD */

  {
    title: "Software Engineer",
    img: "/images/software-engineer.jpg",
    about: "Designs, develops and maintains software.",
    responsibilities: ["Write code","Debug","Collaborate"],
    skills: ["Programming","DSA"],
    education: "B.Tech CS",
    tools: ["Java","Python"],
    growth: "Architect",
    salary: "5-20 LPA",
    environment: "Office/Remote"
  },

  {
    title: "Web Developer",
    img: "/images/web-developer.jpg",
    about: "Builds websites and web apps.",
    responsibilities: ["Frontend","Backend"],
    skills: ["HTML","CSS","JS"],
    education: "B.Tech/BCA",
    tools: ["React","Node"],
    growth: "Full Stack",
    salary: "4-15 LPA",
    environment: "Remote"
  },

  {
    title: "AI Engineer",
    img: "/images/ai-engineer.jpg",
    about: "Builds AI models.",
    responsibilities: ["ML models","Data"],
    skills: ["Python","ML"],
    education: "B.Tech",
    tools: ["TensorFlow"],
    growth: "AI Architect",
    salary: "8-30 LPA",
    environment: "Tech"
  },

  {
    title: "Data Scientist",
    img: "/images/data-scientist.jpg",
    about: "Analyzes data insights.",
    responsibilities: ["Analysis","Prediction"],
    skills: ["Python","Stats"],
    education: "B.Tech/MSc",
    tools: ["Python"],
    growth: "Senior DS",
    salary: "6-25 LPA",
    environment: "Corporate"
  },

  {
    title: "Cyber Security Analyst",
    img: "/images/cyber-security.jpg",
    about: "Protects systems from hacking.",
    responsibilities: ["Security monitoring"],
    skills: ["Networking"],
    education: "B.Tech",
    tools: ["Firewalls"],
    growth: "Security Architect",
    salary: "5-20 LPA",
    environment: "IT"
  },

  {
    title: "Cloud Engineer",
    img: "/images/cloud-engineer.jpg",
    about: "Manages cloud systems.",
    responsibilities: ["Deploy cloud"],
    skills: ["AWS"],
    education: "B.Tech",
    tools: ["AWS"],
    growth: "Cloud Architect",
    salary: "6-22 LPA",
    environment: "Remote"
  },

  {
    title: "Mobile App Developer",
    img: "/images/mobile-app-developer.jpg",
    about: "Creates mobile apps.",
    responsibilities: ["App coding"],
    skills: ["Flutter"],
    education: "B.Tech",
    tools: ["Android Studio"],
    growth: "Senior Dev",
    salary: "5-18 LPA",
    environment: "Tech"
  },


  /* DESIGN FIELD */

  {
    title: "UI UX Designer",
    img: "/images/ui-ux-designer.jpg",
    about: "Designs user interfaces.",
    responsibilities: ["Design UI"],
    skills: ["Creativity"],
    education: "Design degree",
    tools: ["Figma"],
    growth: "Product Designer",
    salary: "5-18 LPA",
    environment: "IT"
  },

  {
    title: "Graphic Designer",
    img: "/images/graphic-designer.jpg",
    about: "Creates graphics.",
    responsibilities: ["Design logos"],
    skills: ["Creativity"],
    education: "Design course",
    tools: ["Photoshop"],
    growth: "Creative Director",
    salary: "3-12 LPA",
    environment: "Media"
  },


  /* MANAGEMENT */

  {
    title: "Business Analyst",
    img: "/images/business-analyst.jpg",
    about: "Improves business process.",
    responsibilities: ["Analysis"],
    skills: ["Analytics"],
    education: "MBA",
    tools: ["Excel"],
    growth: "Manager",
    salary: "6-18 LPA",
    environment: "Corporate"
  },

  {
    title: "Digital Marketer",
    img: "/images/digital-marketer.jpg",
    about: "Promotes online.",
    responsibilities: ["SEO"],
    skills: ["Marketing"],
    education: "Any degree",
    tools: ["Google Ads"],
    growth: "Manager",
    salary: "4-15 LPA",
    environment: "Agency"
  },


  /* ENGINEERING */

  {
    title: "Civil Engineer",
    img: "/images/civil-engineer.jpg",
    about: "Builds infrastructure.",
    responsibilities: ["Construction"],
    skills: ["Engineering"],
    education: "B.Tech Civil",
    tools: ["AutoCAD"],
    growth: "Manager",
    salary: "4-15 LPA",
    environment: "Field"
  },

  {
    title: "Mechanical Engineer",
    img: "/images/mechanical-engineer.jpg",
    about: "Design machines.",
    responsibilities: ["Maintenance"],
    skills: ["Mechanics"],
    education: "B.Tech",
    tools: ["CAD"],
    growth: "Plant Head",
    salary: "4-14 LPA",
    environment: "Industry"
  },

  {
    title: "Electrical Engineer",
    img: "/images/electrical-engineer.jpg",
    about: "Handles electrical systems.",
    responsibilities: ["Circuits"],
    skills: ["Electrical"],
    education: "B.Tech",
    tools: ["MATLAB"],
    growth: "Senior Engineer",
    salary: "4-15 LPA",
    environment: "Industry"
  },

  {
    title: "Architect",
    img: "/images/architect.jpg",
    about: "Design buildings.",
    responsibilities: ["Design"],
    skills: ["Planning"],
    education: "B.Arch",
    tools: ["AutoCAD"],
    growth: "Senior Architect",
    salary: "5-20 LPA",
    environment: "Office"
  },

  {
    title: "Environmental Engineer",
    img: "/images/environmental-engineer.jpg",
    about: "Protect environment.",
    responsibilities: ["Waste mgmt"],
    skills: ["Env science"],
    education: "B.Tech",
    tools: ["Monitoring tools"],
    growth: "Consultant",
    salary: "4-12 LPA",
    environment: "Field"
  },


  /* MEDICAL */

  {
    title: "Doctor",
    img: "/images/doctor.jpg",
    about: "Treats patients.",
    responsibilities: ["Diagnosis"],
    skills: ["Medical"],
    education: "MBBS",
    tools: ["Medical tools"],
    growth: "Consultant",
    salary: "8-30 LPA",
    environment: "Hospital"
  },

  {
    title: "Nurse",
    img: "/images/nurse.jpg",
    about: "Patient care.",
    responsibilities: ["Care"],
    skills: ["Compassion"],
    education: "BSc Nursing",
    tools: ["Medical"],
    growth: "Head nurse",
    salary: "3-8 LPA",
    environment: "Hospital"
  },

  {
    title: "Pharmacist",
    img: "/images/pharmacist.jpg",
    about: "Dispenses medicines.",
    responsibilities: ["Medicine"],
    skills: ["Pharmacy"],
    education: "B.Pharm",
    tools: ["Pharma tools"],
    growth: "Senior pharmacist",
    salary: "3-10 LPA",
    environment: "Hospital"
  },

  {
    title: "Psychologist",
    img: "/images/psychologist.jpg",
    about: "Supports mental health.",
    responsibilities: ["Counselling"],
    skills: ["Empathy"],
    education: "MSc Psychology",
    tools: ["Assessment"],
    growth: "Clinical psychologist",
    salary: "4-12 LPA",
    environment: "Clinic"
  },


  /* EDUCATION */

  {
    title: "Teacher",
    img: "/images/teacher.jpg",
    about: "Educates students.",
    responsibilities: ["Teaching"],
    skills: ["Communication"],
    education: "B.Ed",
    tools: ["Teaching aids"],
    growth: "Principal",
    salary: "3-10 LPA",
    environment: "School"
  },

  {
    title: "Professor",
    img: "/images/professor.jpg",
    about: "Teaches college.",
    responsibilities: ["Research"],
    skills: ["Subject expertise"],
    education: "PhD",
    tools: ["Academic tools"],
    growth: "Dean",
    salary: "6-20 LPA",
    environment: "University"
  },


  /* GOVERNMENT */

  {
    title: "Civil Services",
    img: "/images/civil-services.jpg",
    about: "Government administration.",
    responsibilities: ["Public service"],
    skills: ["Leadership"],
    education: "UPSC",
    tools: ["Gov systems"],
    growth: "Collector",
    salary: "10-25 LPA",
    environment: "Gov"
  },

  {
    title: "Defense Services",
    img: "/images/defense-services.jpg",
    about: "Protect nation.",
    responsibilities: ["Security"],
    skills: ["Discipline"],
    education: "NDA",
    tools: ["Defense tools"],
    growth: "Officer",
    salary: "6-18 LPA",
    environment: "Field"
  },

  {
    title: "Lawyer",
    img: "/images/lawyer.jpg",
    about: "Legal advisor.",
    responsibilities: ["Court"],
    skills: ["Law"],
    education: "LLB",
    tools: ["Legal DB"],
    growth: "Senior Advocate",
    salary: "5-25 LPA",
    environment: "Court"
  },

  {
    title: "Journalist",
    img: "/images/journalist.jpg",
    about: "Reports news.",
    responsibilities: ["Writing"],
    skills: ["Communication"],
    education: "Journalism",
    tools: ["Media tools"],
    growth: "Editor",
    salary: "3-10 LPA",
    environment: "Media"
  }

];

export default function CareerLibrary({ setPage }) {

  const [selected,setSelected] = useState(null);


  /* ================= DETAIL PAGE ================= */

  if(selected){

    return(

      <div className="career-detail-page">


        <div className="top-banner">

          🎓 Career Assessment

        </div>


        <div className="career-detail-container">


          <h2 className="career-title">

            {selected.title}

          </h2>


          <img
            src={selected.img}
            alt={selected.title}
            className="career-image"
          />


          <table className="career-table">

            <tbody>


              <tr>

                <th>About</th>

                <td>{selected.about}</td>

              </tr>



              <tr>

                <th>Responsibilities</th>

                <td>

                  <ul>

                    {selected.responsibilities.map((r,i)=>(
                      <li key={i}>{r}</li>
                    ))}

                  </ul>

                </td>

              </tr>



              <tr>

                <th>Skills</th>

                <td>

                  {selected.skills.join(", ")}

                </td>

              </tr>



              <tr>

                <th>Education</th>

                <td>

                  {selected.education}

                </td>

              </tr>



              <tr>

                <th>Tools</th>

                <td>

                  {selected.tools.join(", ")}

                </td>

              </tr>



              <tr>

                <th>Career Growth</th>

                <td>

                  {selected.growth}

                </td>

              </tr>



              <tr>

                <th>Salary</th>

                <td>

                  {selected.salary}

                </td>

              </tr>



              <tr>

                <th>Work Environment</th>

                <td>

                  {selected.environment}

                </td>

              </tr>


            </tbody>

          </table>



          {/* BACK BUTTON AFTER TABLE */}

          <button

            className="gold-btn"

            onClick={()=>setSelected(null)}

          >

            ← Back

          </button>


        </div>


      </div>

    );

  }



  /* ================= GRID PAGE ================= */

  return(

    <div className="library-page">


      <div className="top-banner">

        🎓 Career Assessment

      </div>


      <h2 className="page-title">

        Career Library

      </h2>


      <div className="career-grid">


        {careers.map((c,i)=>(

          <div

            key={i}

            className="career-card"

            onClick={()=>setSelected(c)}

          >

            <img src={c.img}/>

            <h4>{c.title}</h4>

            <p>Click to explore</p>

          </div>

        ))}


      </div>



      <button

        className="gold-btn"

        onClick={()=>setPage("dashboard")}

      >

        Back to Dashboard

      </button>


    </div>

  );

}