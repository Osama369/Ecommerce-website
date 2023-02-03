import React from 'react'
 
export default function Navbar() {
  return (
   <>

     <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
        <div className="container-fluid bg-dark text-white" style={{height:'100px'}}>

          <a className="navbar-brand text-warning pl=10" href="#"> <span>   <img src="./src/assets/react.svg"  alt=""  width={'56px'} height={'56px'}  />
            </span>  
          
            KababJeez Goat Farm</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">About Us</a>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-warning" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
   </>
  )
}
