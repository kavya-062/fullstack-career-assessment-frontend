import "./Admin.css";

export default function CareerRecommendations({ setPage }) {
  return (
    <div className="admin-page">
      <div
        className="admin-content"
        style={{ maxHeight: "80vh", overflowY: "auto", paddingRight: "12px" }}
      >
        {/* Header */}
        <div className="admin-header">
          <h1 style={{ fontSize: "34px" }}>Career Recommendations</h1>
          <span style={{ fontSize: "32px" }}>🎯</span>
        </div>

        {/* REALISTIC */}
        <section style={sectionStyle}>
          <div style={rowStyle}>
            <div style={textStyle}>
              <h2 style={headingStyle}>🛠️ Realistic</h2>
              <p style={lineStyle}>• Software Engineer – Develop and maintain software systems</p>
              <p style={lineStyle}>• Web Developer – Build and manage websites</p>
              <p style={lineStyle}>• Data Scientist – Analyze data and extract insights</p>
              <p style={lineStyle}>• Mechanical Engineer – Design and maintain machines</p>
            </div>
            <img src="/images/realistic.png" alt="Realistic careers" style={imgStyle} />
          </div>
        </section>

        {/* INVESTIGATIVE */}
        <section style={sectionStyle}>
          <div style={rowStyle}>
            <div style={textStyle}>
              <h2 style={headingStyle}>🔬 Investigative</h2>
              <p style={lineStyle}>• AI Engineer – Build intelligent systems</p>
              <p style={lineStyle}>• Data Analyst – Interpret complex datasets</p>
              <p style={lineStyle}>• Cyber Security Analyst – Protect systems from attacks</p>
              <p style={lineStyle}>• Biotechnologist – Research biological processes</p>
            </div>
            <img src="/images/investigative.png" alt="Investigative careers" style={imgStyle} />
          </div>
        </section>

        {/* ARTISTIC */}
        <section style={sectionStyle}>
          <div style={rowStyle}>
            <div style={textStyle}>
              <h2 style={headingStyle}>🎨 Artistic</h2>
              <p style={lineStyle}>• UI/UX Designer – Design user-friendly interfaces</p>
              <p style={lineStyle}>• Graphic Designer – Create visual content</p>
              <p style={lineStyle}>• Content Writer – Write creative content</p>
              <p style={lineStyle}>• Journalist – Research and report news</p>
            </div>
            <img src="/images/artistic.png" alt="Artistic careers" style={imgStyle} />
          </div>
        </section>

        {/* SOCIAL */}
        <section style={sectionStyle}>
          <div style={rowStyle}>
            <div style={textStyle}>
              <h2 style={headingStyle}>🤝 Social</h2>
              <p style={lineStyle}>• Teacher – Educate and guide students</p>
              <p style={lineStyle}>• Professor – Teach and research</p>
              <p style={lineStyle}>• Psychologist – Support mental health</p>
              <p style={lineStyle}>• Nurse – Patient care and monitoring</p>
            </div>
            <img src="/images/social.png" alt="Social careers" style={imgStyle} />
          </div>
        </section>

        {/* ENTERPRISING */}
        <section style={sectionStyle}>
          <div style={rowStyle}>
            <div style={textStyle}>
              <h2 style={headingStyle}>🚀 Enterprising</h2>
              <p style={lineStyle}>• Entrepreneur – Build and scale businesses</p>
              <p style={lineStyle}>• Business Analyst – Improve business processes</p>
              <p style={lineStyle}>• Manager – Lead teams and operations</p>
              <p style={lineStyle}>• Digital Marketer – Online promotions</p>
            </div>
            <img src="/images/enterprising.png" alt="Enterprising careers" style={imgStyle} />
          </div>
        </section>

        {/* CONVENTIONAL */}
        <section style={sectionStyle}>
          <div style={rowStyle}>
            <div style={textStyle}>
              <h2 style={headingStyle}>📁 Conventional</h2>
              <p style={lineStyle}>• Accountant – Financial records</p>
              <p style={lineStyle}>• Banker – Financial services</p>
              <p style={lineStyle}>• Pharmacist – Dispense medicines</p>
              <p style={lineStyle}>• Administrative Officer – Office management</p>
            </div>
            <img src="/images/conventional.png" alt="Conventional careers" style={imgStyle} />
          </div>
        </section>

        {/* Footer */}
        <div className="admin-footer">
          <button className="skip-btn" onClick={() => setPage("admin")}>
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===== INLINE STYLES ===== */
const sectionStyle = {
  background: "#ffffff",
  padding: "22px",
  borderRadius: "14px",
  marginBottom: "22px",
  boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
};

const textStyle = {
  flex: 1,
};

const headingStyle = {
  fontSize: "26px",
  marginBottom: "14px",
  color: "#1f2937",
};

const lineStyle = {
  fontSize: "18px",
  margin: "8px 0",
  lineHeight: "1.6",
};

const imgStyle = {
  width: "120px",
  height: "120px",
  objectFit: "contain",
  opacity: 0.9,
};