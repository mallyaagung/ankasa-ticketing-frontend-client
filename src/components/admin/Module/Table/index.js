/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const Table = ({ title }) => {
  return (
    <div>
      <div className="container-fluid">
        {/* Page Heading */}
        <h1 className="h3 mb-2 text-gray-800">{title}</h1>
        {/* DataTales Example */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing={0}
              >
                <thead>
                  <tr>
                    <th>Airlines</th>
                    <th>Departure City</th>
                    <th>Arrival city</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Airlines</th>
                    <th>Departure City</th>
                    <th>Arrival city</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>$320,800</td>
                    <td>
                      <button className="btn btn-success">
                        <span className="text">Detail</span>
                      </button>
                      <button className="mr-2 ml-2 btn btn-primary">
                        <span className="text">Edit</span>
                      </button>
                      <button className=" btn btn-danger">
                        <span className="text">Delete</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
