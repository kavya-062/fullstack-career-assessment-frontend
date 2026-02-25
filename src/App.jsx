import { useState } from "react";
import "./App.css";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Assessment from "./components/Assessment";
import Results from "./components/Results";
import CareerLibrary from "./components/CareerLibrary";

import SkillAnalysis from "./components/SkillAnalysis";
import AssessmentHistory from "./components/AssessmentHistory";

// Admin pages
import AdminDashboard from "./components/admin/AdminDashboard";
import ManageQuestions from "./components/admin/ManageQuestions";
import CareerRecommendations from "./components/admin/CareerRecommendations";
import AdminAnalytics from "./components/admin/AdminAnalytics";

// ✅ Home import (already added)
import Home from "./components/Home";

export default function App() {
  // 🔴 ONLY CHANGE MADE HERE (login → home)
  const [page, setPage] = useState("home");
  const [role, setRole] = useState(null);

  const [interest, setInterest] = useState({
    R: 0,
    I: 0,
    A: 0,
    S: 0,
    E: 0,
    C: 0,
  });

  const addInterest = (type, score) => {
    setInterest((prev) => ({
      ...prev,
      [type]: prev[type] + score,
    }));
  };

  return (
    <>
      {/* HOME / ABOUT US */}
      {page === "home" && <Home setPage={setPage} />}

      {/* LOGIN */}
      {page === "login" && (
        <Login setPage={setPage} setRole={setRole} />
      )}

      {/* SIGNUP */}
      {page === "signup" && <Signup setPage={setPage} />}

      {/* STUDENT FLOW */}
      {role === "student" && page === "dashboard" && (
        <Dashboard setPage={setPage} />
      )}

      {role === "student" && page === "assessment" && (
        <Assessment setPage={setPage} addInterest={addInterest} />
      )}

      {role === "student" && page === "results" && (
        <Results setPage={setPage} interest={interest} />
      )}

      {role === "student" && page === "library" && (
        <CareerLibrary setPage={setPage} />
      )}

      {role === "student" && page === "skills" && (
        <SkillAnalysis setPage={setPage} />
      )}

      {role === "student" && page === "history" && (
        <AssessmentHistory setPage={setPage} />
      )}

      {/* ADMIN FLOW */}
      {role === "admin" && page === "admin" && (
        <AdminDashboard setPage={setPage} />
      )}

      {role === "admin" && page === "admin-questions" && (
        <ManageQuestions setPage={setPage} />
      )}

      {role === "admin" && page === "admin-careers" && (
        <CareerRecommendations setPage={setPage} />
      )}

      {role === "admin" && page === "admin-analytics" && (
        <AdminAnalytics setPage={setPage} />
      )}
    </>
  );
}