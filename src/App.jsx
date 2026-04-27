import { useState, useEffect } from "react";
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

// Home
import Home from "./components/Home";

export default function App() {
  const [page, setPage] = useState("home");



  const [role, setRole] = useState(
    localStorage.getItem("role") || null
  );

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

  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);

  useEffect(() => {
    if(role){
      localStorage.setItem("role", role);
    }
  }, [role]);

  // Session timeout logic
  useEffect(() => {
    if (!role) return;

    let timeout;
    const INACTIVITY_LIMIT = 2 * 60 * 1000; // 2 minutes

    const resetTimeout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        localStorage.removeItem("role");
        localStorage.removeItem("page");
        setRole(null);
        setPage("login");
        alert("Session expired due to inactivity. Please log in again.");
      }, INACTIVITY_LIMIT);
    };

    resetTimeout();

    const events = ["mousemove", "keydown", "mousedown", "scroll", "touchstart"];
    events.forEach(event => window.addEventListener(event, resetTimeout));

    return () => {
      clearTimeout(timeout);
      events.forEach(event => window.removeEventListener(event, resetTimeout));
    };
  }, [role]);

  return (
    <>

      {page === "home" && <Home setPage={setPage} />}

      {page === "login" && (
        <Login setPage={setPage} setRole={setRole} />
      )}

      {page === "signup" && <Signup setPage={setPage} />}

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

      {/* fallback UI */}
      {!page && <h2>Loading...</h2>}

    </>
  );
}