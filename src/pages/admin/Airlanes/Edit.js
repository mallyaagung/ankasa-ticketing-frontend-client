/* eslint-disable eqeqeq */
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../../components/admin/Module/Navbar/index";
import Sidebar from "../../../components/admin/Module/Sidebar/index";
import { editAirlines } from "../../../redux/actions/airline";
const Edit = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [pilot, setPilot] = useState("");
  const [phone, setPhone] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const { id } = useParams();

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
      data.append("pic", pilot);
      data.append("phone", phone);
      data.append("image", image);
      e.preventDefault();
      dispatch(editAirlines(id, data, navigate));
      Swal.fire({
        icon: "success",
        title: "Berhasil mengupdate airlines",
        text: `airlines : ${name}`,
      });
    }
  };
  useEffect(() => {
    getAirlineById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
    console.log(URL.createObjectURL(file));
  };
  const getAirlineById = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/airlines/${id}`
    );
    setImagePreview(response.data.data.image);
    // setImage(response.data.data.image)
    setName(response.data.data.name);
    setPilot(response.data.data.pic);
    setPhone(response.data.data.phone);
  };

  return (
    <div id="wrapper">
      <Sidebar activeairlanes="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div class="box-header with-border mb-3 ml-3">
          <h1 className="h3 mb-2 text-gray-800">Edit Airlanes</h1>
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
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Input Airport Name"
                />
                {error && name.length <= 0 ? (
                  <label className="text-danger">Name can't be Empty</label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-6 mt-2">
                <label htmlFor="text" className="form-label">
                  Pilots
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pic"
                  value={pilot}
                  onChange={(e) => setPilot(e.target.value)}
                  placeholder="Input Pilot Name"
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
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Input Phone Number"
                />
                {error && phone.length <= 0 ? (
                  <label className="text-danger">
                    Phone Number can't be Empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <br />
                <img
                  src={imagePreview}
                  alt="Bootstrap"
                  height="200"
                  crossorigin="anonymous"
                />
                <input
                  type="file"
                  onChange={(e) => onImageUpload(e)}
                  className="form-control"
                  id="image"
                />
              </div>
            </div>
            <Link to="/admin/airlines/">
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
export default Edit;
