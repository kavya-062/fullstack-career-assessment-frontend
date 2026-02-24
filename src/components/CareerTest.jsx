import { useState } from "react";


const questions = [
  { text: "I enjoy repairing machines or technical equipment.", type: "R" },
  { text: "I prefer practical, hands-on activities over theory.", type: "R" },

  { text: "I enjoy solving complex logical problems.", type: "I" },
  { text: "I like researching and analyzing information.", type: "I" },

  { text: "I enjoy creative activities like writing or drawing.", type: "A" },
  { text: "I like expressing ideas creatively.", type: "A" },

  { text: "I enjoy helping others solve problems.", type: "S" },
  { text: "I like working closely with people.", type: "S" },

  { text: "I enjoy leading group activities.", type: "E" },
  { text: "I like persuading or influencing others.", type: "E" },

  { text: "I enjoy organizing data and schedules.", type: "C" },
  { text: "I prefer structured tasks.", type: "C" },
];

const options = [
  { label: "Strongly Disagree", score: 1 },
  { label: "Disagree", score: 2 },
  { label: "Agree", score: 3 },
  { label: "Strongly Agree", score: 4 },
];

export default function CareerTest({ setPage, addInterest }) {
  const [answers, setAnswers] = useState({});

  const next = () => {
    questions.forEach((q, i) => {
      addInterest(q.type, answers[i] || 0);
    });
    setPage("personalityTest");
  };

  return (
    <div className="test-page">
      <h2>Career Interest Assessment</h2>

      {questions.map((q, i) => (
        <div key={i} className="question-card">
          <p>{i + 1}. {q.text}</p>

          {options.map(o => (
            <label
              key={o.score}
              className={`option-box ${answers[i] === o.score ? "selected" : ""}`}
            >
              <input
                type="radio"
                name={`c${i}`}
                checked={answers[i] === o.score}
                onChange={() => setAnswers({ ...answers, [i]: o.score })}
              />
              {o.label}
            </label>
          ))}
        </div>
      ))}

      <button className="next-btn" onClick={next}>Next</button>
    </div>
  );
}