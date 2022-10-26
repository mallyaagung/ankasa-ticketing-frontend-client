import axios from "axios";
import Swal from "sweetalert2";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../../components/admin/Module/Navbar/index";
import Sidebar from "../../../components/admin/Module/Sidebar/index";
import { Link } from "react-router-dom";
// import { setAirlanes } from "../../configs/redux/actions/airlanesActions";
// import { deleteAirlanes } from "../../configs/redux/actions/airlanesActions";
import { deleteAirlines, getListAirline } from "../../../redux/actions/airline";

const AdminAirlanes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listAirline } = useSelector((state) => state);
  const urlParams = useParams();

  console.log(listAirline);

  useEffect(() => {
    dispatch(getListAirline(navigate));
  }, [dispatch, navigate]);

  const deleteAirline = async (id) => {
    Swal.fire({
      title: "Are you sure to delete this airline?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAirlines(id, urlParams.id)
          .then((response) => {
            Swal.fire({
              title: "Airline successfully canceled",
              icon: "success",
            });
            dispatch(getListAirline(navigate));
          })
          .catch((err) => {
            Swal.fire({
              title: "Delete failed",
              icon: "error",
            });
          });
      }
    });
  };
  return (
    <div id="wrapper">
      <Sidebar activeairlanes="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div>
          <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Kelola Airlanes</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Data Airlanes
                </h6>
              </div>
              <Link to="/admin/createAirlines">
                <button className="btn btn-warning ml-3 mt-2">
                  <span className="text"> + Create</span>
                </button>
              </Link>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Pilot</th>
                        <th>Phone</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listAirline.data.map((item, index) => (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>
                            {" "}
                            <img
                              width="100px"
                              height="100px"
                              src={item.image}
                              crossOrigin="anonymous"
                              alt="img"
                            />
                          </td>
                          <td>{item.pic}</td>
                          <td>{item.phone}</td>
                          <td>
                            <Link to={`/admin/detailAirlines/${item.id}`}>
                              <button className="btn btn-success">
                                <span className="text">Detail</span>
                              </button>
                            </Link>
                            <Link to={`/admin/editAirlines/${item.id}`}>
                              <button className="mr-2 ml-2 btn btn-primary">
                                <span className="text">Edit</span>
                              </button>
                            </Link>
                            <button
                              onClick={() => deleteAirline(item.id)}
                              className=" btn btn-danger"
                            >
                              <span className="text">Delete</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content"></div>
      </div>
    </div>
  );
};

export default AdminAirlanes;
