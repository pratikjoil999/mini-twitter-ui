import React, { Component } from "react";
import './contractTable.scss'
export default class ContractTable extends Component {
  render() {
    return (
      <>
        <div className="container sampleTable">
          <div className="row  px-xs-1 px-sm-0">
            <div className="container p-0 tableContainer">
              <table
                className="table table-bordered table-striped mon-reg-className  table-hover mt-2 rt  mt-sm-0 "
                id="rt1"
              >
                <thead>
                  <tr className="tableRow mon-bold-className">
                    <th scope="col" className="color-white w-25">
                      CONTRACT NAME
                    </th>
                    <th scope="col" className="color-white width-10">
                      ID
                    </th>
                    <th scope="col" className="color-white">
                      CONTRACT TYPE
                    </th>
                    <th scope="col" className="color-white">
                      SUPPLIER TYPE
                    </th>
                    <th scope="col" className="color-white">
                      CONTRACT BUGDET
                    </th>
                    <th scope="col" className="color-white">
                      TERM TYPE
                    </th>
                    <th scope="col" className="color-white">
                      STATUS
                    </th>
                  </tr>
                  <tr className="thead-row-2">
                    <th scope="col">
                      <input
                        type="text"
                        className="border-none"
                        placeholder="Search..."
                      />
                    </th>
                    <th scope="col">
                      <input
                        type="text"
                        className="border-none"
                        placeholder="Search..."
                      />
                    </th>
                    <th scope="col">
                      <input
                        type="text"
                        className="border-none"
                        placeholder="Search..."
                      />
                    </th>
                    <th scope="col">
                      <div className="form-group mb-0 select-dropdown">
                        <select
                          className="form-control table-drop-menu"
                          id="supplierType"
                        >
                          <option>Choose..</option>
                          <option></option>
                        </select>
                      </div>
                    </th>
                    <th scope="col">
                      <input
                        type="text"
                        className="border-none"
                        placeholder="Search..."
                      />
                    </th>
                    <th scope="col">
                      <input
                        type="text"
                        className="border-none"
                        placeholder="Search..."
                      />
                    </th>
                    <th scope="col">
                      <div className="form-group mb-0 select-dropdown">
                        <select
                          className="form-control table-drop-menu"
                          id="supplierType"
                        >
                          <option>Choose..</option>
                          <option></option>
                        </select>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="fs-16">
                  <tr className="mon-reg-className">
                    <td className="border-data-none"></td>
                    <td className="border-data-none"></td>
                    <td className="border-data-none"></td>
                    <td className="border-data-none"></td>
                    <td className="border-data-none"></td>
                    <td className="border-data-none"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
