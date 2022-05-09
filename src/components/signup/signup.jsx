import React from 'react';
import './signup.scss'
export default class Signup extends React.Component {
  render() {    
    return (
      

    <div className="signup-page">
    <div className="account-page">
    <div className="account-box">
        <div className="bg-img"></div>
        <div className="account-wrapper">
            <div className="container signup">
                <div className="login-logo">
                    <h1 className="ssp-bold-class fs-27 color-theme-black">IMPEKABLE</h1>
                    <p className="ssp-reg-class fs-14">Please complete to create your account.</p>
                </div>
                <form className="form-signin">

                    <div className="row form-group ">
                        <div className="name-class  col-xs-1 col-sm-6 pl-0">
                            <input type="text" className="form-control" formControlName="firstName" 
                                placeholder="First name" />
                            <div className="invalid-feedback">
                                <div >First Name is required</div>
                            </div>
                        </div>
                        <div className=" col-xs-1 col-sm-6 p-0 ">
                            <input type="text" className="form-control" formControlName="lastName" 
                                placeholder="Last name"  />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" formControlName="userName"
                            placeholder="Username" />
                        
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" formControlName="email" 
                            placeholder="Email"  />
                    </div>

                    <div className="form-group">
                        <input type="password" formControlName="password" className="form-control" 
                            placeholder="Password" />
                    </div>

                    <div className="form-group">
                        <input type="password" formControlName="confirmPassword" className="form-control"  placeholder="Confirm Password" />
                    </div>

                    <div className="form-group radio-class">
                        <p>Gender</p>
                        <mat-radio-group aria-label="Select an option" formControlName="gender" className="radio-group">
                            <mat-radio-button value="Male" className="ssp-reg-class fs-14 color-theme-black col-4">
                                    Male
                            </mat-radio-button>
                            <mat-radio-button value="Female" className="ssp-reg-class fs-14 color-theme-black col-4">
                                Female
                            </mat-radio-button>
                            <mat-radio-button value="Other" className="ssp-reg-class fs-14 color-theme-black col-4">
                                Other
                            </mat-radio-button>
                        </mat-radio-group>

                    </div>

                    <div className="form-group checkBorder">
                        <mat-checkbox className="form-control"  formControlName="terms" 
                            value="1" >
                            <label className="ssp-reg-class fs-14 color-theme-black" >
                                I agree with terms and conditions
                            </label>
                        </mat-checkbox>
                        <div className="invalid-feedback">Accept Ts & Cs is required
                        </div>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <button className="btn btn-primary btn-block account-btn ssp-reg-class fs-14 bg-theme-black">
                            Sign up
                        </button>
                    </div>
                </form>

                <div className="login-footer">
                    <h1 className="fs-16 color-theme-black" >Already have an account? Sign in.</h1>
                    <p className="fs-12 color-theme-black mb-0">Terms of use. Privacy policy</p>
                </div>

            </div>
        </div>
    </div>
</div>
</div>




    );
  }
}