import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    mssv: "",
    diachi: "",
    tuoi: "",
    webiste: ""
  });

  const { name, mssv, diachi, tuoi, webiste } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3000/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Profile Information</h2>
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
              type="text"
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
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;