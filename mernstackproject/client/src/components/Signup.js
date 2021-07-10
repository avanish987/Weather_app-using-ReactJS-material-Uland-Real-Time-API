import React from 'react'
import { NavLink } from 'react-router-dom';

const Signup = () =>{
    return(
        <>
            <section className="signup">
               <div className="container mt-5">
                   <div className="signup-content">
                       <div className="signup-form">
                          <h2 className="form-title">Sign up</h2>
                          <form className="register-form" id="register-form">
                              <div className="form-group">
                                <label htmlFor="name">
                                   <i className="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <input type="text" name="name" id="name" autoComplete="off"
                                    placeholder="Your Name"
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="email">
                                   <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <input type="text" name="email" id="name" autoComplete="off"
                                    placeholder="Your email"
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="mobile no">
                                   <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                </label>
                                <input type="text" name="mobile no" id="name" autoComplete="off"
                                    placeholder="Your mobile no"
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="password">
                                   <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type="text" name="password" id="name" autoComplete="off"
                                    placeholder="Your password"
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="confrim password">
                                   <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type="text" name="confirm password" id="name" autoComplete="off"
                                    placeholder="Your confrim password"
                                />
                              </div>
                              <div className="form-group form-button">
                                   <input type="submit" name="signup" id="signup" className="form-submit" value="register"></input>
                              </div>
                          </form>
                        </div>
                          <div>
                              <NavLink to="/Login" className="signup-image-link">I am Already Register</NavLink>
                          </div>

                

                   </div>
               </div>

            </section>

        </>
    );
}

export default Signup;