import { useState } from "react";
import "./CareerLibrary.css";

const careers = [
  {
    title: "Software Engineer",
    img: "/images/software-engineer.jpg",
    about: "Software Engineers design, develop, test, and maintain software systems.",
    responsibilities: ["Write code", "Debug applications", "Team collaboration"],
    skills: ["Programming", "DSA", "Problem Solving"],
    education: "B.Tech / B.Sc Computer Science",
    tools: ["Java", "Python", "Git"],
    growth: "Senior Engineer → Architect",
    salary: "₹5 – 20 LPA",
    environment: "Office / Remote",
  },
  {
    title: "Web Developer",
    img: "/images/web-developer.jpg",
    about: "Web Developers create responsive and dynamic websites.",
    responsibilities: ["Frontend", "Backend", "Website optimization"],
    skills: ["HTML", "CSS", "JavaScript"],
    education: "B.Tech / BCA",
    tools: ["React", "Node.js"],
    growth: "Full Stack Developer",
    salary: "₹4 – 15 LPA",
    environment: "Office / Freelance",
  },
  {
    title: "AI Engineer",
    img: "/images/ai-engineer.jpg",
    about: "AI Engineers build intelligent systems using machine learning.",
    responsibilities: ["Model building", "Data analysis", "AI deployment"],
    skills: ["Python", "ML", "Statistics"],
    education: "B.Tech / M.Tech",
    tools: ["TensorFlow", "PyTorch"],
    growth: "AI Architect",
    salary: "₹8 – 30 LPA",
    environment: "Research / Corporate",
  },
  {
    title: "Teacher",
    img: "/images/teacher.jpg",
    about: "Teachers educate students and guide learning.",
    responsibilities: ["Teaching", "Lesson planning"],
    skills: ["Communication", "Patience"],
    education: "B.Ed / M.Ed",
    tools: ["Teaching aids"],
    growth: "Principal",
    salary: "₹3 – 10 LPA",
    environment: "Schools",
  },
  {
    title: "Civil Services",
    img: "/images/civil-services.jpg",
    about: "Civil servants manage government administration.",
    responsibilities: ["Public service", "Policy execution"],
    skills: ["Leadership"],
    education: "Any Degree + UPSC",
    tools: ["Government systems"],
    growth: "District Collector",
    salary: "₹10 – 25 LPA",
    environment: "Government offices",
  },
  {
    title: "Defense Services",
    img: "/images/defense-services.jpg",
    about: "Defense personnel protect the nation.",
    responsibilities: ["National security", "Operations"],
    skills: ["Discipline", "Fitness"],
    education: "NDA / CDS",
    tools: ["Defense equipment"],
    growth: "Senior Officer",
    salary: "₹6 – 18 LPA",
    environment: "Field / Base",
  },
  {
    title: "Lawyer",
    img: "/images/lawyer.jpg",
    about: "Lawyers represent and advise clients legally.",
    responsibilities: ["Court cases", "Legal advice"],
    skills: ["Law knowledge"],
    education: "LLB",
    tools: ["Legal databases"],
    growth: "Senior Advocate",
    salary: "₹5 – 25 LPA",
    environment: "Courts / Firms",
  },
  {
    title: "Doctor",
    img: "/images/doctor.jpg",
    about: "Doctors diagnose and treat patients.",
    responsibilities: ["Patient care", "Diagnosis"],
    skills: ["Medical expertise"],
    education: "MBBS / MD",
    tools: ["Medical equipment"],
    growth: "Consultant",
    salary: "₹8 – 30 LPA",
    environment: "Hospitals",
  },
  {
    title: "Psychologist",
    img: "/images/psychologist.jpg",
    about: "Psychologists support mental health.",
    responsibilities: ["Counseling", "Therapy"],
    skills: ["Empathy", "Analysis"],
    education: "BA / MSc Psychology",
    tools: ["Assessment tools"],
    growth: "Clinical Psychologist",
    salary: "₹4 – 12 LPA",
    environment: "Clinics",
  },
  {
    title: "UI/UX Designer",
    img: "/images/ui-ux-designer.jpg",
    about: "Designers create user-friendly digital experiences.",
    responsibilities: ["UI design", "User research"],
    skills: ["Creativity", "Design thinking"],
    education: "Design degree",
    tools: ["Figma", "Adobe XD"],
    growth: "Product Designer",
    salary: "₹5 – 18 LPA",
    environment: "Tech companies",
  },

  /* ---- ADDITIONAL 20 CAREERS ---- */

  {
    title: "Data Scientist",
    img: "/images/data-scientist.jpg",
    about: "Data Scientists analyze data to extract insights.",
    responsibilities: ["Data analysis", "Model building"],
    skills: ["Python", "Statistics"],
    education: "B.Tech / MSc",
    tools: ["Python", "SQL"],
    growth: "Senior Data Scientist",
    salary: "₹6 – 25 LPA",
    environment: "Corporate",
  },
  {
    title: "Cloud Engineer",
    img: "/images/cloud-engineer.jpg",
    about: "Cloud Engineers manage cloud infrastructure.",
    responsibilities: ["Cloud deployment", "Maintenance"],
    skills: ["AWS", "Azure"],
    education: "B.Tech",
    tools: ["AWS", "Docker"],
    growth: "Cloud Architect",
    salary: "₹6 – 22 LPA",
    environment: "Remote / Office",
  },
  {
    title: "Cyber Security Analyst",
    img: "/images/cyber-security.jpg",
    about: "Cyber experts protect systems from attacks.",
    responsibilities: ["Security monitoring", "Threat prevention"],
    skills: ["Networking", "Security"],
    education: "B.Tech / Certification",
    tools: ["Firewalls", "SIEM"],
    growth: "Security Architect",
    salary: "₹5 – 20 LPA",
    environment: "Corporate",
  },
  {
    title: "Mobile App Developer",
    img: "/images/mobile-app-developer.jpg",
    about: "Developers build mobile applications.",
    responsibilities: ["App development", "Testing"],
    skills: ["Flutter", "Java"],
    education: "B.Tech / BCA",
    tools: ["Android Studio"],
    growth: "Senior Developer",
    salary: "₹5 – 18 LPA",
    environment: "Tech companies",
  },
  {
    title: "Graphic Designer",
    img: "/images/graphic-designer.jpg",
    about: "Designers create visual content.",
    responsibilities: ["Design graphics", "Brand visuals"],
    skills: ["Creativity"],
    education: "Design degree",
    tools: ["Photoshop"],
    growth: "Creative Director",
    salary: "₹3 – 12 LPA",
    environment: "Media",
  },
  {
    title: "Digital Marketer",
    img: "/images/digital-marketer.jpg",
    about: "Digital marketers promote products online.",
    responsibilities: ["SEO", "Social media marketing"],
    skills: ["Marketing", "Analytics"],
    education: "Any degree",
    tools: ["Google Ads"],
    growth: "Marketing Manager",
    salary: "₹4 – 15 LPA",
    environment: "Agency / Corporate",
  },
  {
    title: "Business Analyst",
    img: "/images/business-analyst.jpg",
    about: "Business analysts improve processes.",
    responsibilities: ["Requirement analysis", "Reporting"],
    skills: ["Analysis"],
    education: "MBA / B.Tech",
    tools: ["Excel", "Power BI"],
    growth: "Product Manager",
    salary: "₹6 – 18 LPA",
    environment: "Corporate",
  },
  {
    title: "Architect",
    img: "/images/architect.jpg",
    about: "Architects design buildings.",
    responsibilities: ["Design plans", "Site supervision"],
    skills: ["Design", "Planning"],
    education: "B.Arch",
    tools: ["AutoCAD"],
    growth: "Senior Architect",
    salary: "₹5 – 20 LPA",
    environment: "Field / Office",
  },
  {
    title: "Civil Engineer",
    img: "/images/civil-engineer.jpg",
    about: "Civil engineers build infrastructure.",
    responsibilities: ["Construction", "Project management"],
    skills: ["Engineering"],
    education: "B.Tech Civil",
    tools: ["AutoCAD"],
    growth: "Project Manager",
    salary: "₹4 – 15 LPA",
    environment: "Field",
  },
  {
    title: "Mechanical Engineer",
    img: "/images/mechanical-engineer.jpg",
    about: "Mechanical engineers design machines.",
    responsibilities: ["Design", "Maintenance"],
    skills: ["Mechanics"],
    education: "B.Tech Mechanical",
    tools: ["CAD"],
    growth: "Plant Manager",
    salary: "₹4 – 14 LPA",
    environment: "Industries",
  },

  {
    title: "Electrical Engineer",
    img: "/images/electrical-engineer.jpg",
    about: "Electrical engineers manage power systems.",
    responsibilities: ["Electrical systems", "Maintenance"],
    skills: ["Circuits"],
    education: "B.Tech Electrical",
    tools: ["MATLAB"],
    growth: "Senior Engineer",
    salary: "₹4 – 15 LPA",
    environment: "Industries",
  },
  {
    title: "Environmental Engineer",
    img: "/images/environmental-engineer.jpg",
    about: "Environmental engineers protect the environment.",
    responsibilities: ["Waste management", "Sustainability"],
    skills: ["Environmental science"],
    education: "B.Tech",
    tools: ["Monitoring tools"],
    growth: "Consultant",
    salary: "₹4 – 12 LPA",
    environment: "Field / Office",
  },
  {
    title: "Journalist",
    img: "/images/journalist.jpg",
    about: "Journalists report news.",
    responsibilities: ["News reporting", "Writing"],
    skills: ["Communication"],
    education: "Journalism degree",
    tools: ["Media tools"],
    growth: "Editor",
    salary: "₹3 – 10 LPA",
    environment: "Media",
  },
  {
    title: "Lab Technician",
    img: "/images/lab-technician.jpg",
    about: "Lab technicians assist scientific research.",
    responsibilities: ["Testing", "Equipment handling"],
    skills: ["Accuracy"],
    education: "Diploma / Degree",
    tools: ["Lab equipment"],
    growth: "Senior Technician",
    salary: "₹2 – 6 LPA",
    environment: "Labs",
  },
  {
    title: "Nurse",
    img: "/images/nurse.jpg",
    about: "Nurses care for patients.",
    responsibilities: ["Patient care", "Monitoring"],
    skills: ["Compassion"],
    education: "B.Sc Nursing",
    tools: ["Medical tools"],
    growth: "Head Nurse",
    salary: "₹3 – 8 LPA",
    environment: "Hospitals",
  },
  {
    title: "Pharmacist",
    img: "/images/pharmacist.jpg",
    about: "Pharmacists dispense medicines.",
    responsibilities: ["Medicine distribution", "Guidance"],
    skills: ["Pharmacy knowledge"],
    education: "B.Pharm",
    tools: ["Pharmacy software"],
    growth: "Hospital Pharmacist",
    salary: "₹3 – 10 LPA",
    environment: "Hospitals",
  },
  {
    title: "Professor",
    img: "/images/professor.jpg",
    about: "Professors teach at higher education level.",
    responsibilities: ["Teaching", "Research"],
    skills: ["Subject expertise"],
    education: "PhD",
    tools: ["Academic tools"],
    growth: "Dean",
    salary: "₹6 – 20 LPA",
    environment: "Universities",
  },
];

export default function CareerLibrary({ setPage }) {
  const [selected, setSelected] = useState(null);

  if (selected) {
    return (
      <div className="career-detail">
        <button className="back-btn" onClick={() => setSelected(null)}>← Back</button>
        <h2>{selected.title}</h2>
        <img src={selected.img} alt={selected.title} />
        <p><b>About:</b> {selected.about}</p>
        <p><b>Responsibilities:</b></p>
        <ul>
          {selected.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
        <p><b>Skills:</b> {selected.skills.join(", ")}</p>
        <p><b>Education:</b> {selected.education}</p>
        <p><b>Tools:</b> {selected.tools.join(", ")}</p>
        <p><b>Career Growth:</b> {selected.growth}</p>
        <p><b>Salary:</b> {selected.salary}</p>
        <p><b>Work Environment:</b> {selected.environment}</p>
      </div>
    );
  }

  return (
    <div className="library-page">
      <h2>Career Library</h2>
      <div className="career-grid">
        {careers.map((c, i) => (
          <div key={i} className="career-card" onClick={() => setSelected(c)}>
            <img src={c.img} alt={c.title} />
            <h4>{c.title}</h4>
            <p>Click to explore</p>
          </div>
        ))}
      </div>
      <button className="back-btn" onClick={() => setPage("dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}