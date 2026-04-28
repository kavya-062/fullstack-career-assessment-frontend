import { useState, useEffect } from "react";
import "./Assessment.css";

const questions = [
  { q: "Which activity do you enjoy the most?", o: ["Solving problems", "Creative design", "Helping people", "Leading teams"] },
  { q: "What subject do you like the most?", o: ["Math / Science", "Arts / Design", "Psychology", "Business"] },
  { q: "How do you approach a problem?", o: ["Logical thinking", "Creative ideas", "Discuss with others", "Take charge"] },
  { q: "Which skill are you strongest in?", o: ["Technical skills", "Creativity", "Communication", "Management"] },
  { q: "Preferred work environment?", o: ["Quiet", "Flexible", "Social", "Professional"] },
  { q: "How do you make decisions?", o: ["Facts & logic", "Ideas & intuition", "People’s feelings", "Goals & results"] },
  { q: "How do you handle pressure?", o: ["Stay calm", "Creative solutions", "Talk to others", "Take control"] },
  { q: "What motivates you?", o: ["Problem solving", "Innovation", "Helping others", "Leadership"] },
  { q: "Which role suits you best?", o: ["Technical expert", "Creative professional", "Support role", "Leader"] },
  { q: "How do you learn best?", o: ["Practice", "Exploration", "Discussion", "Planning"] },
  { q: "What describes you?", o: ["Analytical", "Creative", "Empathetic", "Confident"] },
  { q: "Which task do you prefer?", o: ["Data analysis", "Designing", "Teaching", "Managing"] },
  { q: "Comfort with technology?", o: ["Very comfortable", "Moderate", "Basic", "Minimal"] },
  { q: "Which career excites you?", o: ["Technology", "Design", "Social work", "Business"] },
  { q: "Future role you want?", o: ["Specialist", "Creator", "Guide", "Decision maker"] }
];

export default function Assessment({ setPage, addInterest }) {

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);

  const map = ["R", "A", "S", "E"];

  useEffect(()=>{
    localStorage.removeItem("assessmentUnlocked");
    localStorage.removeItem("skillAnalysis");
  },[]);

  const handleSelect = (index)=>{
    setSelected(index);
    addInterest(map[index],1);
  };

  const submitToBackend = async ()=>{
    try{
      await fetch("http://localhost:8080/api/assessment",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          completed:true,
          totalQuestions:questions.length
        })
      });
    }
    catch(error){
      console.error("Backend connection failed",error);
    }
  };

  const handleNext = async ()=>{
    setSelected(null);

    if(current < questions.length-1){
      setCurrent(current+1);
    }
    else{
      localStorage.setItem("assessmentUnlocked","true");
      await submitToBackend();
      setPage("results");
    }
  };

  return(

    <>

      {/* SAME GOLD HEADER */}
      <div className="top-header">

        <div className="nav-right">

          <button onClick={()=>setPage("home")}>
            Home
          </button>

          <button onClick={()=>setPage("home")}>
            About
          </button>

        </div>

        <div className="web-name">
          Career-Assessment
        </div>

      </div>


      <div className="assessment-page">

        <div className="assessment-container">

          <div className="header">

            <span className="icon">🧠</span>

            <h2>Career Assessment</h2>

          </div>


          <p className="progress-text">

            Question {current+1} of {questions.length}

          </p>


          <div className="step-indicator">

            {questions.map((_,i)=>(

              <div
                key={i}
                className={`step ${i<=current ? "active" : ""}`}
              />

            ))}

          </div>


          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width:`${((current+1)/questions.length)*100}%`
              }}
            />

          </div>


          <div className="question-card">

            <p className="question-text">

              {questions[current].q}

            </p>


            <div className="options-container">

              {questions[current].o.map((opt,i)=>(

                <button
                  key={i}

                  className={`option-btn ${
                    selected===i ? "selected" : ""
                  }`}

                  onClick={()=>handleSelect(i)}
                >

                  {opt}

                </button>

              ))}

            </div>

          </div>


          <div className="nav-buttons">

            <button
              className="skip-btn"
              onClick={handleNext}
            >

              Skip

            </button>


            <button
              className="next-btn"
              onClick={handleNext}
            >

              {current===questions.length-1
                ? "Submit Test"
                : "Next"}

            </button>

          </div>

        </div>

      </div>

    </>

  );

}