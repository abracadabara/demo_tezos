import { useEffect, useState } from "react";
import { connectWallet, getAccount } from "../utils/wallet";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { auth, db, logout } from "../firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [account, setAccount] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    // if (!user) return navigate("/");
    (async () => {
      // TODO 5.b - Get the active account
      const account = await getAccount();
      setAccount(account);
    })();
  }, []);

  // TODO 4.a - Complete onConnectWallet function
  const onConnectWallet = async () => {
    await connectWallet();
    const account = await getAccount();
    setAccount(account);
  };

  const Logout = () =>{
    signOut(auth);
    navigate("/")
  }

  return (
    <div className="navbar navbar-dark bg-dark fixed-top">
      <div className="container py-2">
        <a href="/" className="navbar-brand">
          Tezos Lottery
        </a>
        <div className="d-flex">
          
          <button className="btn btn-outline-info" onClick={onConnectWallet}>
             
            Connect Wallet
          </button>
          {account ? <span className="navbar-text">{account}</span> : ""}

         
        </div>
        <span className="navbar-text"> {user?.email} </span>
        {/* <a href="/"  className="nav-link"  onClick={logout}>
          Logout
        </a> */}

        <button className="btn btn-outline-info my-2 my-sm-0" type="submit" onClick={Logout}>Logout</button>
       
      </div>  

    
    </div>
  );
};

export default Navbar;
