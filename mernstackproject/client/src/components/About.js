import React from 'react'

const About = () =>{
    return(
        <>
           <div className="container emp_profile">
               <form method="">
                   <div className="row">
                       <div className="col md-4">

                       </div>
                       <div className="col md-6">
                           <div className="profile_head">
                               <h5>Avanish Yadav</h5>
                               <h6>MERN developer</h6>
                               <p className="profile-rating mt-3 mb-5">
                                   Ranking: <span>1/10</span>
                               </p>
                                

                               <ul class="nav nav-tabs">
                                    <li class="nav-item">
                                        <a class="nav-link active"  id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                                     </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                                    </li>
                                </ul>
                           </div>
                      </div>

                      <div className="col-md-2">
                               <input type="submit" classname="profile-edit-btn" name="btnAddMore" value="edit_proifle" />
                       </div>
                   </div>
               </form>
           </div>
        </>
    );
}

export default About;