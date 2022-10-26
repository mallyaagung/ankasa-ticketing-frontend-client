/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../../components/admin/Module/Navbar/index";
import Sidebar from "../../../components/admin/Module/Sidebar/index";
import { getDetailAirline } from "../../../redux/actions/airline";

const Detail = () => {
  const dispatch = useDispatch();
  const urlParams = useParams();

  const detailAirline = useSelector((state) => {
    return state.detailAirline;
  });

  console.log(detailAirline);

  useEffect(() => {
    dispatch(getDetailAirline(urlParams.id));
  }, [dispatch]);
  return (
    <div id="wrapper">
      <Sidebar activeairlanes="active" />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div className="box-header with-border mb-3 ml-3">
          <h1 className="h3 mb-2 text-gray-800">
            Detail Airlanes {detailAirline.data.name}
          </h1>
        </div>
        <div className="box-header with-border mb-3 ml-3">
          <Link to="/admin/airlines">
            <a href="" className="btn btn-success">
              Kembali
            </a>
          </Link>
        </div>
        <div className="ml-1 row">
          <div className="col-md-6">
            <div className="box">
              <div className="box-body">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td width="30%" classname="text-primary">
                        <h6 className="text-primary">Name</h6>
                      </td>
                      <td width="5%">:</td>
                      <td>{detailAirline.data.name}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        <h6 className="text-primary">Pilots</h6>
                      </td>
                      <td>:</td>
                      <td>{detailAirline.data.pic}</td>
                    </tr>
                    <tr>
                      <td classname="text-primary">
                        <h6 className="text-primary">Phone</h6>
                      </td>
                      <td>:</td>
                      <td>{detailAirline.data.phone}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box">
              <div className="box-header with-border " />
              <div className="box-body">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td classname="text-primary">
                        {" "}
                        <h6 className="text-primary">Image</h6>
                      </td>
                      <td>:</td>
                      <td>
                        <img
                          width="150px"
                          height="150px"
                          src={detailAirline.data.image}
                          crossorigin="anonymous"
                          alt="img"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div id="content"></div>
      </div>
    </div>
  );
};

export default Detail;
