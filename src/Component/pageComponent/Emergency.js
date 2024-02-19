import React from 'react'

const Emergency = () => {
    const backgroundStyle = {
        backgroundImage: `url("https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`, // Replace with the actual path to your image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh', // Adjust to your layout requirements
      };
    
      return (
        <div className="container-fluid" style={backgroundStyle}>
        <div className="col-sm-12">
          <button className="btn btn-lg border btn-primary mt-2" onClick={()=>{window.location.href="/"}}>Back</button>
        </div>
      </div>
      )
    }
    

export default Emergency