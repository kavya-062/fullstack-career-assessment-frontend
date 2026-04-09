import "./AssessmentHistory.css";

export default function AssessmentHistory({ setPage }) {

  const attempts = localStorage.getItem("assessmentAttempts") || 1;

  const date =
    localStorage.getItem("assessmentDate") ||
    new Date().toLocaleDateString();

  const profile =
    localStorage.getItem("interestProfile") || "Not available";


  return (

    <>
    
      {/* TOP BANNER */}

      <div className="top-header">

        <div className="web-name">

          🎓 Career-Assessment

        </div>

      </div>



      {/* PAGE */}

      <div className="history-page">

        <div className="history-card">

          <h2 className="history-title">

            Assessment History

          </h2>



          <div className="history-row">

            <span className="emoji">📅</span>

            <div>

              <b>Last Attempt</b>

              <p>{date}</p>

            </div>

          </div>



          <div className="history-row">

            <span className="emoji">🔁</span>

            <div>

              <b>Total Attempts</b>

              <p>{attempts}</p>

            </div>

          </div>



          <div className="history-row">

            <span className="emoji">🧠</span>

            <div>

              <b>Latest Profile</b>

              <p>{profile}</p>

            </div>

          </div>



          <button

            className="history-btn"

            onClick={()=>setPage("dashboard")}

          >

            Back to Dashboard

          </button>

        </div>

      </div>

    </>

  );

}