import React, { useEffect, useState } from "react";

const UserProfiles = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating API call
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
      </div>
    );
  }

  return
};

export default UserProfiles;
