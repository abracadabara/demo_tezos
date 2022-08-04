import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
// import "./css/Dashboard.css";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import Navbar from "./Navbar";
import {
  startVotingOperation,
  voteCandidateOperation,
  endVotingOperation,
  resetVotingOperation,
} from "../utils/operation";
import { fetchStorage } from "../utils/tzkt";

function Dashboard() {
    const [user, error] = useAuthState(auth);
  //   const [name, setName] = useState("");
    const navigate = useNavigate();

  // Players holding lottery tickets
  const [status, setStatus] = useState("");
  const [voteCountA, setVoteCountA] = useState(0);
  const [voteCountB, setVoteCountB] = useState(0);
  const [loading, setLoading] = useState(false);

  // Set players and tickets remaining
  useEffect(() => {
    if (!user) return navigate("/");
    // TODO 9 - Fetch players and tickets remaining from storage
    (async () => {
      const storage = await fetchStorage();
      // console.log(storage);
      setStatus(Object.values(storage.status));
      setVoteCountA(Object.values(storage.candidate_A_votes));
      setVoteCountB(Object.values(storage.candidate_B_votes));
    })();
  }, []);

  //   const fetchUserName = async () => {
  //     try {
  //       const q = query(collection(db, "users"), where("uid", "==", user?.uid));
  //       const doc = await getDocs(q);
  //       const data = doc.docs[0].data();

  //       setName(data.name);
  //     } catch (err) {
  //       console.error(err);
  //       alert("An error occured while fetching user data");
  //     }
  //   };

  //   useEffect(() => {
  //     if (loading) return;
  //     if (!user) return navigate("/");

  //     fetchUserName();
  //   }, [user, loading]);

  // TODO 7.a - Complete onBuyTicket function
  const startVoting = async () => {
    try {
      setLoading(true);
      await startVotingOperation();
      alert("transaction successful");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  const voteFor = async (candidate) => {
    try {
      setLoading(true);
      await voteCandidateOperation(candidate);
      alert("transaction successful");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  const endVoting = async () => {
    try {
      setLoading(true);
      await endVotingOperation();
      alert("transaction successful");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  const resetVoting = async () => {
    try {
      setLoading(true);
      await resetVotingOperation();
      alert("transaction successful");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="h-100">
      <Navbar />
      <div className="container">
        <p className="m-5 p-5">Status = {status}</p>
        <p>Vote Count A = {voteCountA}</p>
        <p>Vote Count B = {voteCountB}</p>
        <br />
        <button onClick={startVoting}>
          {loading ? "Loading..." : "Start Voting"}
        </button>
        <br />
        <button onClick={() => voteFor("A")}>
          {loading ? "Loading..." : "Vote For A"}
        </button>
        <button onClick={() => voteFor("B")}>
          {loading ? "Loading..." : "Vote For B"}
        </button>
        <br />
        <button onClick={endVoting}>
          {loading ? "Loading..." : "End Voting"}
        </button>
        <br />
        <button onClick={resetVoting}>
          {loading ? "Loading..." : "Reset Voting"}
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
