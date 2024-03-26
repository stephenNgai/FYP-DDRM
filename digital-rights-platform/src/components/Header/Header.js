import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(true);

  const goToHome = () => navigate("/");
  const goToCreate = () => navigate("/create");
  const goToMyCollection = () => navigate("/my-collection");
  const goToTransactions = () => navigate("/transactions");

  //TO-DO
  const loginUser = () => setIsLogged(true);
  const logoutUser = () => setIsLogged(false);

  return (
    <div className="header">
      <button onClick={goToHome}>Home</button>
      <button onClick={goToCreate}>Create</button>
      {isLogged ? (
        // Dropdown logic here
        <div>
          <button onClick={goToMyCollection}>MyCollection</button>
          <button onClick={goToTransactions}>Transactions</button>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <button onClick={loginUser}>Login</button>
      )}
    </div>
  );
};

export default Header;
