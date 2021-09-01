import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import '../users/AddUser.css';
import { AddUsers } from "../UserSlice";
import { useDispatch } from "react-redux";
// import { useSelector } from 'react-redux';
const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    mssv: "",
    diachi: "",  
    tuoi: "",
    webiste: ""
  });
  const dispatch = useDispatch();

  const { name, mssv, diachi, tuoi, webiste } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3000/users", user);
    history.push("/");
    window.location.reload();
    const action = AddUsers(user);
    // console.log({ action });
    dispatch(action);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Profile Information</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <span className="form__name">Họ tên</span>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Nhập tên vào đây"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <span className="form__name">MSSV</span>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Nhập MSSV của bạn..."
              name="mssv"
              value={mssv}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <span className="form__name">Địa chỉ</span>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Nhập địa chỉ của bạn..."
              name="diachi"
              value={diachi}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <span className="form__name">Tuổi</span>
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Nhập tuổi..."
              name="tuoi"
              value={tuoi}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <span className="form__name">Mô tả</span>
            <textarea
              type="text"
              className="form-control form-control-lg"
              placeholder="Giới thiệu bản thân"
              name="webiste"
              value={webiste}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;