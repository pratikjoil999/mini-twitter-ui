import React from "react";
import "./sample-table.scss";
import { Link } from "react-router-dom";
import { getDataService } from "../../../../service/data.service";

export default class SampleTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      patent: [],
    };
  }

  componentDidMount() {
    this.getPaitent();
  }

  getPaitent = () => {
    getDataService("/patient-details-find-all").then((result) => {
      let responseJSON = result;
      this.setState({ patent: responseJSON.patientDetailsList });
      console.log(this.state.patent);
    });
  };
  render() {
    return (
      <div className="sampleTable">
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-0">

            { this.props.data.map((tweet =>
              <div class="tweet-box row ml-0 p-0 pb-3">
                <div class="tweet-dp col-2 d-block">
                  <div class="dp-letter mt-3">
                    <div class="dp mt-2">
                      {tweet.userData.full_name.substring(0, 1)}
                    </div>
                  </div>
                </div>
                <div class="col-10 p-0">
                  <div class="tweet-text-div col-12 p-0 mt-3">
                    <div className="user_name">{tweet.userData.first_name + " " + tweet.userData.last_name} { tweet.userData.user_name}</div>
                  </div>
                  <div class="w80">
                    <div class="tweet-button-div col-12 p-0">
                      {tweet.tweet}
                    </div>
                  </div>
                </div>
              </div>
              ))}
              
              {/* <table className="table table-bordered table-striped  table-hover rt" id="rt1">
        <thead>
          <tr className="tableRow ssp-bold-class">
            <th scope="col" className="color-blue">NAME</th>
            <th scope="col" className="color-blue">GENDER</th>
            <th scope="col" className="color-blue">CONTACT NUMBER</th>
            <th scope="col" className="color-blue">BIRTH DATE</th>
          </tr>
          <tr className="thead-row-2 bg-white{">
            <th scope="col">
              <input type="text" className="border-none" placeholder="Search..." />
            </th>
            <th scope="col">
              <input type="text" className="border-none" placeholder="Search..." />
            </th>
            <th scope="col">
              <input type="text" className="border-none" placeholder="Search..." />
            </th>
            <th scope="col">
              <input type="text" className="border-none" placeholder="Search..." />
            </th>
          </tr>
        </thead>
        <tbody className="fs-16">
      
         { this.state.patent.map((patent =>

           <tr>
            <td className="border-data-none">{patent.name}</td>
         <td className="border-data-none">{patent.sex}</td>
            <td className="border-data-none">{patent.phone}</td>
            <td className="border-data-none">{(patent.birthDate)}</td>
          </tr>
           
            
         ))}

        </tbody>
      </table> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
