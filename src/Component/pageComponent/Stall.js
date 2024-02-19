import React from 'react'

const Stall = () => {

  const backgroundStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`, // Replace with the actual path to your image
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Adjust to your layout requirements
  };

  const backButtonStyle = {
    position: "sticky",
    top: "0",
    zIndex: "100",
    // background: "rgba(255, 255, 255, 0.9)",
    // padding: "10px",

  };


  const generateStalls = (count) => {
    const stalls = [];
    const stallStyle = {
      maxHeight: '20vh',
      overflowX:"true"
    };
  
    for (let i = 0; i < count; i++) {
      stalls.push(
        <div key={i} className="col-sm-11 border border-danger m-1 p-1 rounded" style={stallStyle}>
          stalls
        </div>
      );
    }
  
    return stalls;
  };

  return (
    <div className="container-fluid" style={backgroundStyle}>
      <div className="col-sm-12" style={backButtonStyle}>
        <button className="btn btn-lg border btn-primary mt-2"  onClick={() => { window.location.href = "/" }}>Back</button>
      </div>
      <div className="col-sm-12" style={{maxHeight:"82vh",overflowX:"auto"}}>
        {generateStalls(50)};
      </div>
    </div>
  )
}

export default Stall