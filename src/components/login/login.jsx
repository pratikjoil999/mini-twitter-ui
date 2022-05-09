import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import {dataService} from '../../service/data.service'
import './login.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const initialState = {
  email : "",
  password: "",
  emailIdError : "",
  passwordError : "",
  redirect: false
}

export default class Login extends React.Component {
  state=initialState;

  handleChange = event =>{
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]:isCheckbox ? event.target.checked : event.target.value
    });
  }
  

  validate = () =>{
    let emailIdError ="";
    let passwordError =""

    if (this.state.password==""){
      passwordError = 'Please Enter Password';
    }
    if (!this.state.email.includes('@')){
      emailIdError = 'Envalid emailId';
    }
    if(emailIdError || passwordError)
    {
      this.setState({ emailIdError,passwordError });
      return false;
    }
    return true;
  };

  
  notify = () => toast("Wow so easy!");

  error = (err) => {

    toast.error(err, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  loginSubmit = event =>{
    event.preventDefault();
    const isValid = this.validate();
    if(isValid){
      delete this.state.emailIdError;
      delete this.state.passwordError;
      delete this.state.redirect;
      dataService('twitter_user/login',this.state).then((result)=>{
        let responseJSON = result;
       if(result.api.statusCode==200){
        localStorage.setItem('X-Auth-Token', result.response.token);
        localStorage.setItem('id', result.response._id);
        localStorage.setItem('first_name', result.response.first_name);
        localStorage.setItem('last_name', result.response.last_name);
        localStorage.setItem('full_name', result.response.full_name);
        localStorage.setItem('user_name', result.response.user_name);
        localStorage.setItem('email', result.response.email);
        localStorage.setItem('mobile', result.response.mobile);
        this.setState({redirect:true});
        console.log(responseJSON)
       }
       else{
         this.error(result.api.messaage)
       }
        
      })
    this.setState(initialState)
  }
  };

  render() {   
    
    if(this.state.redirect || localStorage.getItem("X-Auth-Token"))
    {
      return (<Redirect to={'/dashboard'} />)
    }
    
    return (
        

<div className="login-page">
<div className="account-page">
  <div className="account-box">
    
    
    <div className="twitter_logo mt-4">
    <svg viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg">
    <path d="M 630, 425
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
    Z" style={{fill:"#3BA9EE"}} />
</svg>
   </div>
   


    <div className="account-wrapper">
      <div className="container col-lg-8 ">
        <div className="login-logo">
          <h1 className="ssp-bold-class">Sign in to Twitter</h1>
         {/*  <p className="ssp-reg-class fs-14">Welcome back! Please login to your account.</p> */}
        </div>
        <form className="form-signin" onSubmit={this.loginSubmit} >
          <div className="form-group">
            <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange}  placeholder="phone, email address, or username" />
            <span className="validateError">{this.state.emailIdError}</span>
          </div>
          <div className="form-group">
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}    className="form-control" 
              placeholder="Password"  />
           <span className="validateError">{this.state.passwordError}</span>
          </div>
          
          <div className="form-group d-flex justify-content-center mt-2">
            <button type="submit"
              className="btn btn-primary btn-block account-btn ssp-reg-class fs-14 color-white  ml-0">
              Sign in
            </button>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            
          </div>
          <div className="form-group d-flex mt-2 fs-14 signup-text">
          Don’t have an account? <Link to="/register" >
          <div className="fs-14 ml-1 color-theme-twitter-blue signup-text"> Sign Up</div>
            </Link>
          </div>
        </form>
      </div>
      </div>
  </div>
</div>
</div>








    );
  }
}