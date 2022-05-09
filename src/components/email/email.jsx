import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import {dataService} from '../../service/data.service'
import './email.scss';



const initialState = {
  emailId : "",
  emailIdError : "",
  redirect: false
}

export default class Email extends React.Component {
  state=initialState;

  handleChange = event =>{
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]:isCheckbox ? event.target.checked : event.target.value
    });
  }
  

  validate = () =>{
    let emailIdError ="";
    if (!this.state.emailId.includes('@')){
      emailIdError = 'Invalid email';
    }
    if(emailIdError)
    {
      this.setState({ emailIdError});
      return false;
    }
    return true;
  };

  emailSubmit = event =>{
    event.preventDefault();
    const isValid = this.validate();
/*     if(isValid){
      delete this.state.emailIdError;
      delete this.state.redirect;
      dataService('/user-email',this.state).then((result)=>{
        let responseJSON = result;
       if(result.statusCode==200){
        localStorage.setItem('X-Auth-Token', result['jwtToken']);
        this.setState({redirect:true});
        console.log(responseJSON)
       }
        
      })
    this.setState(initialState)
  } */
  };

  render() {   
    
    if(this.state.redirect || localStorage.getItem("X-Auth-Token"))
    {
      return (<Redirect to={'/dashboard'} />)
    }
    
    return (
        

<div className="email-page">
<div className="account-page">
  <div className="account-box">
    <div className="bg-img">
      <div className="kotak-logo"></div>
    </div>


    <div className="account-wrapper">
      <div className="container col-lg-7 ">
        <div className="email-logo">
          <h1 className="ssp-bold-class fs-27 color-theme-black">Email Id</h1>
         {/*  <p className="ssp-reg-class fs-14">Welcome back! Please email to your account.</p> */}
        </div>
        <form className="form-signin" onSubmit={this.emailSubmit} >
          <div className="form-group">
            <input type="text" className="form-control" name="emailId" value={this.state.emailId} onChange={this.handleChange}  placeholder="Email" />
            <span className="validateError">{this.state.emailIdError}</span>
          </div>
          <div className="form-group d-flex justify-content-center mt-5">
            <button type="submit"
              className="btn btn-primary btn-block account-btn ssp-reg-class fs-14 color-white bg-theme-red ml-0">
              Send OTP
            </button>
         {/*   <Link to="/signup" className="btn btn-primary btn-block account-btn ssp-reg-class fs-14 color-theme-black mr-0">
              Sign Up
            </Link> */}
          </div>
        </form>
      </div>
      <label className="tnc ssp-reg-class fs-10 color-theme-black">Term of use. Privacy policy</label>
    </div>
  </div>
</div>
</div>








    );
  }
}