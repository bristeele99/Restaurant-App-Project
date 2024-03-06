//pages/AdminDash/AdminDash

import React, {useState, useEffect} from "react";
import * as adminAPI from '../../utilities/admin-api'
import styles from './AdminDash.module.css'

function AdminDash() {

  const [users, setUsers] = useState([]);

  useEffect(function () {
    // Load previous orders (paid)
    async function fetchUsers() {
      const users = await adminAPI.getAll();
      setUsers(users);
      // If no orders, activeOrder will be set to null below
      
    }
    fetchUsers();
  }, []);
  

  return (
    <div className={styles.AdminDash}>
      <h1>Admin Dashboard</h1>
      <div>
          {users.map(user => (
            <ul key={user._id}>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.role}</li>
              <br/>
            </ul>
          ))}
          </div>
    </div>
  );
};

export default AdminDash;
