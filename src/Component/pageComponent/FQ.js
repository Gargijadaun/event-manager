import React from 'react'

const FQ = () => {
  const backgroundStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`, // Replace with the actual path to your image
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',

  };
  return (
    <div className="container-fluid" style={backgroundStyle}>
      <div className="col-sm-12">
        <button className="btn btn-lg border btn-primary mt-2" onClick={() => { window.location.href = "/" }}>Back</button>
      </div>
      <div className='col-sm-12' style={{ height: "5vh", }}>
        
      </div>
      <div className='col-sm-12' style={{ height: "25vh", }}>
        <h1 className='text-primary' style={{ textAlign: "center", fontSize: "20vh" }}>
          Q&A
        </h1>
      </div>

      <div className="col-sm-12 d-flex justify-content-center">
        <div className="col-sm-8 border rounded bg-secondary  p-3">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1 "><h1 className=''>Ask Q & A?</h1></label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your questions" />
            </div>
            <div className="col-sm-8 d-flex justify-content-center">
              <button type="submit" class="btn btn-success mt-2">Submit</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FQ