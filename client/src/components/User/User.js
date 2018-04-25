import React from "react";

class User extends React.Component {
  render() {
    return (
      <div className="container-fluid">
         <div class="sidebar-header">
            <img src="https://res.cloudinary.com/teepublic/image/private/s--Tm_-OgRz--/t_Preview/b_rgb:0f7b47,c_limit,f_jpg,h_630,q_90,w_630/v1446161353/production/designs/71233_0.jpg" class="img-circle" alt="Cinque Terre"/>
        </div>
        <h2>User Name</h2>
        <div>Points <span class="badge badge-warning">3</span></div>
        <div>Rank <span class="badge badge-warning">3</span></div>
      </div>
    )
  }
}

export default User;
