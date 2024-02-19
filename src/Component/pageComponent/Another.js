import React from 'react'

const Another = () => {
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
      <div className="col-sm-12">
        <div className="col-sm-11 d-flex justify-content-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.428714001391!2d77.39507477428903!3d28.52683098887513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8bef840ce83%3A0xf4382f6973b52828!2sXS%20Worldwide!5e0!3m2!1sen!2sin!4v1708082833728!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" title='map' referrerpolicy="no-referrer-when-downgrade"/>
        </div>

      </div>
    </div>
      )
    }
    
export default Another