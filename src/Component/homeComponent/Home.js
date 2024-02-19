import React from 'react'

const Home = () => {
    const backgroundStyle = {
        backgroundImage: `url("https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`, // Replace with the actual path to your image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh', // Adjust to your layout requirements
    };
    const logoStyle = {
        maxHeight: "200px",
        maxWidth: "90%",
    }
    const btnStyle = {
        minHeight: "20vh",
    }

  
    return (
        <div className="container-fluid border border-primary" style={backgroundStyle}>
            <div className="container">
                <div className="col-sm-12 d-flex justify-content-center text-lg">
                    <div className="col-sm-3 d-flex justify-content-center " >
                        <img src="https://xs-worldwide.com/wp-content/uploads/2022/09/xs-nxt-light.png" style={logoStyle} alt="not loaded" />
                    </div>
                </div>
                <div className='col-sm-12' style={{height:"4vh"}}></div>
                <div className="col-sm-12 d-flex justify-content-center">
                    <div className="col-md-12 border d-flex flex-wrap border-primary justify-content-center" >
                        <button class="btn btn-success btn-lg col-5 m-1 text-uppercase" onClick={()=>{window.location.href = "/layout1"}} style={btnStyle}>Ist Layout</button>
                        <button type="button" class="btn btn-primary btn-lg col-5 m-2" onClick={()=>{window.location.href = "/fq"}} style={btnStyle}>F&Q</button>
                        <button type="button" class="btn btn-success btn-lg col-5 m-2" onClick={()=>{window.location.href = "/gallery"}} style={btnStyle}>Gallery</button>
                        <button type="button" class="btn btn-primary btn-lg col-5 m-2" onClick={()=>{window.location.href = "/emergency"}} style={btnStyle}>Emergency</button>
                        <button type="button" class="btn btn-success btn-lg col-5 m-2" onClick={()=>{window.location.href = "/stall"}} style={btnStyle}>Stall</button>
                        <button type="button" class="btn btn-primary btn-lg col-5 m-2" onClick={()=>{window.location.href = "/another"}} style={btnStyle}>Current Location</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;