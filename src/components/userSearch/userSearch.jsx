import React from "react";
import "./userSearch.scss";
import { Link } from "react-router-dom";
import SampleTable from "./tables/sample-table/sample-table";
import {
  dataService,
  getDataService,
  getDataServiceWithBody,
} from "../../service/data.service";

export default class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attribute: "value",
      followingData: [],
      tweetsData: [],
      tweet: "",
      search: "",
      searchByName: [],
      searchByTweets: [],
      showSearchList: false,
    };
  }

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  handleChangeSearch = (event) => {
    this.setState({
      showSearchList: true,
    });
    const isCheckbox = event.target.type === "checkbox";
    this.setState(
      {
        [event.target.name]: isCheckbox
          ? event.target.checked
          : event.target.value,
      },
      () => {
        if (
          this.state.search !== "" &&
          this.state.search.substring(0, 1) == "#"
        ) {
          console.log("testttt", this.state.search);
          let followingArray = {
            key: this.state.search,
          };
          dataService("tweets/tweetFind", followingArray).then((result) => {
            let responseJSON = result;
            if (result.api.statusCode == 200) {
              console.log(responseJSON);
              this.setState({
                searchByTweets: responseJSON.response,
              });
            } else {
              this.setState({
                searchByName: [],
                searchByTweets: [],
              });
              //this.error(result.api.messaage)
            }
          });
        } else if (this.state.search !== "") {
          getDataService(
            "twitter_user/searchUser/" + this.state.search,
            this.state
          ).then((result) => {
            let responseJSON = result;
            if (result.api.statusCode == 200) {
              console.log("oppp=>", responseJSON);
              this.setState({
                searchByName: responseJSON.response,
              });
            } else {
              //this.error(result.api.messaage);
              this.setState({
                searchByName: [],
                searchByTweets: [],
              });
            }
          });
        } else {
          this.setState({
            searchByName: [],
            searchByTweets: [],
            showSearchList: false,
          });
        }
      }
    );
  };

  tweet = () => {
    let id = localStorage.getItem("id");
    if (this.state.tweet !== "") {
      let followingArray = {
        user_id: id,
        tweet: this.state.tweet,
      };
      dataService("tweets/tweet", followingArray).then((result) => {
        let responseJSON = result;
        if (result.api.statusCode == 200) {
          console.log(responseJSON);
          this.getUserData();
          this.setState({
            tweet: "",
          });
        } else {
          //this.error(result.api.messaage)
        }
      });
    }
  };

  componentDidMount = async () => {
    await this.getUserData();
  };

  onClickALert = () => {
    this.setState({
      showSearchList: false,
    });
  };

  arrayReverseObj = (obj) => {
    let newArray = [];

    Object.keys(obj)
      .sort()
      .reverse()
      .forEach((key) => {
        console.log(key);
        newArray.push({
          key: key,
          id: obj[key].id,
        });
      });

    console.log(newArray);
    return newArray;
  };

  getUserData = () => {
    let id = localStorage.getItem("id");
    getDataService("twitter_user/getUser/" + id, this.state).then((result) => {
      let responseJSON = result;
      if (result.api.statusCode == 200) {
        //alert(result.api.statusCode)
        console.log("oppp=>", responseJSON);
        let getFollow = !responseJSON.response.followers.includes(id)
          ? responseJSON.response.followers.push(id)
          : responseJSON.response.followers;
        this.setState(
          {
            followingData: responseJSON.response.followers,
          },
          () => {
            console.log("callback==>", this.state.followingData);
            this.findUserTweets(this.state.followingData);
          }
        );
      } else {
        this.error(result.api.messaage);
      }
    });
  };

  findUserTweets = (data) => {
    let followingArray = {
      multiTweetArray: data,
    };
    console.log("dataaa==>", followingArray);
    dataService("tweets/multiTweetFind", followingArray).then((result) => {
      let responseJSON = result;
      if (result.api.statusCode == 200) {
        console.log(responseJSON);
        let array1 = responseJSON.response.tweets;
        let array2 = responseJSON.response.match_user;

        array2.forEach((obj) => {
          array1.forEach((array1Obj) => {
            if (obj._id === array1Obj.user_id) {
              array1Obj.userData = obj;
            }
          });
        });

        this.setState(
          {
            tweetsData: array1,
          },
          () => {
            console.log("tweetsDataaaa==>", this.state.tweetsData);
          }
        );
      } else {
        //this.error(result.api.messaage)
      }
    });
  };

  render() {
    return (
      <div className="dashboard">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

        <div className="row main-container ">
          {this.state.showSearchList ? (
            <div className="search_container">
              <div className="hashtag">
                {this.state.searchByTweets.map((tweet) => (
                  <div class="tweet-box row ml-0 p-0 pb-3">
                    <div class="tweet-dp col-2 d-block">
                      <div class="dp-letter mt-3">
                        <div class="dp mt-2">{"S"}</div>
                      </div>
                    </div>
                    <div class="col-10 p-0">
                      <div class="tweet-text-div col-12 p-0 mt-3">
                        <div className="user_name">{tweet.tweet}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="people_search">
                {this.state.searchByName.map((tweet) => (
                  <div class="tweet-box row ml-0 p-0 pb-3">
                    <div class="tweet-dp col-2 d-block">
                      <div class="dp-letter mt-3">
                        <div class="dp mt-2">{"S"}</div>
                      </div>
                    </div>
                    <div class="col-10 p-0">
                      <div class="tweet-text-div col-12 p-0 mt-3">
                        <div className="user_name">
                          {tweet.first_name + "" + tweet.last_name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div
            className="col-3 position-relative p-0"
            onClick={this.onClickALert}
          >
            <header className="dashboard-header ">
              <div className="twitter_logo">
                <svg
                  viewBox="328 355 335 276"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 630, 425
    A 195, 195 0 0 1 331, 600
    A 142, 142 0 0 0 428, 570
    A  70,  70 0 0 1 370, 523
    A  70,  70 0 0 0 401, 521
    A  70,  70 0 0 1 344, 455
    A  70,  70 0 0 0 372, 460
    A  70,  70 0 0 1 354, 370
    A 195, 195 0 0 0 495, 442
    A  67,  67 0 0 1 611, 380
    A 117, 117 0 0 0 654, 363
    A  65,  65 0 0 1 623, 401
    A 117, 117 0 0 0 662, 390
    A  65,  65 0 0 1 630, 425
    Z"
                    style={{ fill: "#3BA9EE" }}
                  />
                </svg>
              </div>
            </header>
          </div>

          <div
            className="col-5 position-relative main-content p-0"
            onClick={this.onClickALert}
          >
            <header className="dashboard-header">
              <h5 className=" heading">Home</h5>
            </header>
            <div className="tweet-box row ml-0">
              <div className="tweet-dp col-2 d-block">
                <div className="dp-letter mt-3">
                  <div className="dp mt-2">
                    {localStorage.getItem("first_name").substring(0, 1)}
                  </div>
                </div>
              </div>
              <div className="col-10 p-0">
                <div className="tweet-text-div col-12 p-0">
                  <textarea
                    className="tweet-input"
                    name="tweet"
                    value={this.state.tweet}
                    onChange={this.handleChange}
                    placeholder="What's happening?"
                  />
                </div>
                <div className="tweet-button-div col-12 p-0">
                  <button
                    type="button"
                    onClick={this.tweet}
                    className="btn btn-primary ssp-reg-class fs-14 color-white mr-2"
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>

            <div className="tweet-container mt-1">
              <SampleTable data={this.state.tweetsData} />
            </div>
          </div>

          <div className="col-4 position-relative p-0">
            <header className="dashboard-header">
              <input
                type="text"
                className="search_box"
                name="search"
                value={this.state.search}
                onChange={this.handleChangeSearch}
                placeholder="Search twitter"
              />
            </header>
          </div>
        </div>

        {/* <div className="d-flex row width-table p-0">
<div className="col-12 mt-3 formWidth p-0"><SampleTable /></div>
</div> */}
      </div>
    );
  }
}
