import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddUser from "../users/AddUser";
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUsers } from "../UserSlice";
import '../pages/Home.css'
const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  const dispatch = useDispatch();
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    loadUsers();
    const DeleteUsersId = Users.id;
    const action = DeleteUsers(DeleteUsersId);
    dispatch(action);
  };
  const Users = useSelector(state => state.Users);
  console.log('List2:', Users);
  return (
    <div className="container">
        <AddUser />
      <div className="py-4">
        <h5>Authors table</h5>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Họ tên</th>
              <th scope="col">MSSV</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Tuổi</th>
              <th scope="col">Mô tả</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.mssv}</td>
                <td>{user.diachi}</td>
                <td>{user.tuoi}</td>
                <td>{user.webiste}</td>
                <td className="btn__mod2">
                  <Link to="/#"
                    className="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="/#"
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;