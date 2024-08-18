import { useEffect, useState } from "react";

const User = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const data = await fetch("https://reqres.in/api/users?page=1");
    const json = await data.json();
    setUserData(json.data);
  };
  return (
    <div className="user-container">
      {userData.map((user) => (
        <div className="user-card">
          <img
            className="user-avatar"
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
          />
          <h3>{`${user.first_name} ${user.last_name}`}</h3>
          <p>{`E-mail: ${user.email}`}</p>
        </div>
      ))}
    </div>
  );
};

export default User;
