import React from "react";

class User extends React.Component {
  render() {
    return (
      <div className="container-fluid">
         <div class="sidebar-header p-4">
            <img src="https://res.cloudinary.com/teepublic/image/private/s--Tm_-OgRz--/t_Preview/b_rgb:0f7b47,c_limit,f_jpg,h_630,q_90,w_630/v1446161353/production/designs/71233_0.jpg" class="rounded-circle img-fluid mx-auto" alt="Patrick Star"/>
        </div>
        <h2 class = "text-center">User Name</h2>
        <div class= "pl-3">Points <span class="badge badge-warning">3</span></div>
        <div class= "pl-3">Rank <span class="badge badge-warning">3</span></div>
      </div>
    )
  }
}

export default User;
