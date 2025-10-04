import React, { useContext } from "react";
import { supabase } from "../supabaseClient";
import { AuthContext } from "../contexts/AuthContext";

const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Loading...</p>; // fallback if somehow null

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div>
      <h2>Welcome, {user.email}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
