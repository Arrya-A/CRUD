import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";

const useAuth = () => {
  const [users, setUsers] = useState([]);

  //API to fetch all users from db.json
  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get("users");
      console.log(response.data);
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  //API to add new user
  const addUser = async (newUserData) => {
    try {
      const response = await axiosInstance.post("users", newUserData);
      setUsers((prevUsers) => [...prevUsers, response.data]); //Append the new user to the existing state
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, fetchUsers, addUser };
};

export default useAuth;
