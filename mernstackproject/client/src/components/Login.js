import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () =>{
    return(
        <>
            <section className="sign-in">
               <div className="container mt-5">
                   <div className="signin-content">
                        <div>
                          <NavLink to="/signup" className="signin-image-link">Create an Account</NavLink>
                        </div>
                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                          <form className="register-form" id="register-form">
                              <div className="form-group">
                                <label htmlFor="email">
                                   <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <input type="text" name="email" id="name" autoComplete="off"
                                    placeholder="Your email"
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

                              <div className="form-group form-button">
                                   <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"></input>
                              </div>
                            </form>
                     </div>

                   </div>
               </div>

            </section>
        </>
    );
}

export default Login;