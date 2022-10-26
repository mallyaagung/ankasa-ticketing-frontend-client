/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../../components/admin/Module/Navbar/index";
import Sidebar from "../../../components/admin/Module/Sidebar/index";
import { createAirlines } from "../../../redux/actions/airline";

const Create = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [pilot, setPilot] = useState("");
  const [phone, setPhone] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [error, setError] = useState(false);
  const { createAirline } = useSelector((state) => state);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      image.length == 0 ||
      name.length == 0 ||
      pilot.length == 0 ||
      phone.length == 0
    ) {
      setError(true);
    }
    if (name && image && pilot && phone) {
      const data = new FormData();
      data.append("name", name);
      data.append("image", image);
      data.append("pic", pilot);
      data.append("phone", phone);
      e.preventDefault();
      dispatch(createAirlines(data, navigate));
      Swal.fire({
        icon: "success",
        title: "Berhasil mengupload airlanes",
        text: `airlanes : ${name}`,
      });
    }
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div id="wrapper">
      <Sidebar activeairlanes="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div class="box-header with-border mb-3 ml-3">
          <h1 className="h3 mb-2 text-gray-800">Create Airlanes</h1>
        </div>
        <form action="" onSubmit={onSubmit}>
          <div>
            {" "}
            <div className="ml-3 mr-3 row">
              <div className="col-6 mt-2">
                <label htmlFor="text" className="form-label">
                  Name
                </label>
                <input
                  value={name}
                  placeholder="masukan nama"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="name"
                />
                {error && name.length <= 0 ? (
                  <label className="text-danger">Name can't be Empty</label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => onImageUpload(e)}
                  className="form-control"
                  id="image"
                  required
                />
                {error && image.length <= 0 ? (
                  <label>image can't be Empty</label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-6 mt-2">
                <label htmlFor="text" className="form-label">
                  Pilot
                </label>
                <input
                  value={pilot}
                  placeholder="masukan nama pilot"
                  onChange={(e) => setPilot(e.target.value)}
                  type="text"
                  className="form-control"
                  id="pic"
                />
                {error && pilot.length <= 0 ? (
                  <label className="text-danger">
                    Pilot Name can't be Empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-6 mt-2">
                <label htmlFor="text" className="form-label">
                  Phone
                </label>
                <input
                  value={phone}
                  placeholder="masukan no.hp"
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  className="form-control"
                  id="phone"
                />
                {error && phone.length <= 0 ? (
                  <label className="text-danger">Phone can't be Empty</label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <Link to="/airlanes">
              <button className="ml-4 mt-3 btn btn-warning" type="submit">
                Back To airlanes
              </button>
            </Link>
            <button className="ml-4 mt-3 btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>

        <div id="content"></div>
      </div>
    </div>
  );
};

export default Create;
