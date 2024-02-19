import React from 'react'

const Gallery = () => {

    const imageData = [
        {src:"https://images.unsplash.com/photo-1707962797688-fcefda2811b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://plus.unsplash.com/premium_photo-1706552626018-9d3caaa206d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1707696199186-d26b0f779f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1682687982107-14492010e05e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1706545512943-a7cc7623039a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1707696199186-d26b0f779f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1707962797688-fcefda2811b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://plus.unsplash.com/premium_photo-1706552626018-9d3caaa206d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1707696199186-d26b0f779f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1682687982107-14492010e05e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1706545512943-a7cc7623039a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1707696199186-d26b0f779f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1707962797688-fcefda2811b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://plus.unsplash.com/premium_photo-1706552626018-9d3caaa206d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1707696199186-d26b0f779f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1682687982107-14492010e05e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1706545512943-a7cc7623039a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1707696199186-d26b0f779f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1707962797688-fcefda2811b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://plus.unsplash.com/premium_photo-1706552626018-9d3caaa206d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1707696199186-d26b0f779f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1682687982107-14492010e05e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1706545512943-a7cc7623039a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1707696199186-d26b0f779f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"},
]
    const backgroundStyle = {
        backgroundImage: `url("https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`, // Replace with the actual path to your image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh', // Adjust to your layout requirements
    };
    const galleryImage = {
        maxWidth: "45%",
        maxHeight: "50vh",
        margin:"5px",
    }

    const backButtonStyle = {
        position: "sticky",
        top: "0",
        zIndex: "100",
        // background: "rgba(255, 255, 255, 0.9)",
        // padding: "10px",
    
      };
      const openImage = (evt) => {
        //  const imageData = document.getElementById(`img${evt}`);
        debugger
         window.open(evt,"_blank");
      }

    return (
        <div className="container-fluid " style={backgroundStyle}>
            <div className="col-sm-10 p-2" style={backButtonStyle}>
                <button className="btn btn-lg border btn-primary " onClick={() => { window.location.href = "/" }}>Back</button>
            </div>
            <div className="col-sm-12 d-flex justify-content-center" style={{maxHeight:"82vh",overflowX:"auto"}}>
      
                {/* <div className="col-sm-12 justify-content-center d-flex flex-wrap mt-2">

                    <img src="https://images.unsplash.com/photo-1707962797688-fcefda2811b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" id='img1' onClick={()=>openImage(1)} alt="" style={galleryImage} />


                    <img src="https://plus.unsplash.com/premium_photo-1706552626018-9d3caaa206d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" id='img2' onClick={()=>openImage(2)} alt="" style={galleryImage} />


                    <img src="https://images.unsplash.com/photo-1707696199186-d26b0f779f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D" id='img3'onClick={()=>openImage(3)} alt="" style={galleryImage} />


                    <img src="https://images.unsplash.com/photo-1682687982107-14492010e05e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D" id='img4'onClick={()=>openImage(4)} alt="" style={galleryImage} />


                    <img src="https://images.unsplash.com/photo-1706545512943-a7cc7623039a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" id='img5'onClick={()=>openImage(5)} alt="" style={galleryImage} />


                    <img src="https://images.unsplash.com/photo-1700937192759-2a86c88128cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D" id='img6'onClick={()=>openImage(6)} alt="" style={galleryImage} />

                </div> */}
                <div className="col-sm-12 justify-content-center d-flex flex-wrap mt-2">
                { imageData.map((e)=>(
                    <img src={e.src} id='img1' onClick={()=>openImage(e.src)} alt="" style={galleryImage} />

                ))}

                </div>
            </div>
        </div>
    )
}
export default Gallery