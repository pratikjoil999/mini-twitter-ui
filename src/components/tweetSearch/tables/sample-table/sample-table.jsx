import React from "react";
import "./sample-table.scss";
import { Link } from "react-router-dom";
import { getDataService } from "../../../../service/data.service";
import Hashtags from "react-highlight-hashtags";

export default class SampleTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      patent: [],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="sampleTable">
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-0">
              {this.props.data.map((tweet) => (
                <div class="tweet-box row ml-0 p-0 pb-3">
                  <div class="tweet-dp col-2 d-block">
                    <div class="dp-letter mt-3">
                      <div class="dp mt-2">
                        { tweet.userData.full_name.toUpperCase().substring(0, 1)}
                      </div>
                    </div>
                  </div>
                  <div class="col-10 p-0">
                    <div class="tweet-text-div col-12 p-0 mt-3">
                      <div className="user_name d-flex">
                        <div className="profile_name">
                          {tweet.userData.first_name +
                            " " +
                            tweet.userData.last_name}
                        </div>{" "}
                        <div className="user_name_text ml-2">
                          {"@" + tweet.userData.user_name}
                        </div>
                      </div>
                    </div>
                    <div class="w80 mt-2">
                      <div class="tweet-button-div col-12 p-0">
                        <Hashtags>{tweet.tweet}</Hashtags>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
