import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (user) {
    return <div>Welcome: {user.username}</div>;
  } else {
    return <div>Please login</div>;
  }
}

export default Profile;
