import React from 'react'

export default function Hero() {
  return (
    <>
       <div className="container py-5">
        <div className="row mb-4 align-items-center flex-lg-row-reverse">
          <div className="col-md-6 col-xl-7 mb-4 mb-lg-0 " style={{}}>
            {/* requires glightbox, please flag the option in the picostrap customizer panel*/}
            <div className="lc-block position-relative"><img className="img-fluid rounded shadow" src='https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' sizes="(max-width: 3840px) 100vw, 3840px" width={3840} height alt="Photo by Richard Horvath" />
              <a className="position-absolute top-50 start-50 translate-middle glightbox d-flex justify-content-center align-items-center" href="https://www.youtube.com/watch?v=BKgpLOUYZJ4">
                
              </a>
            </div>
          </div>{/* /col */}
          <div className="col-md-6 col-xl-5">
            <div className="lc-block mb-3">
              <div editable="rich">
                <h1 className="fw-bolder display-2">Kababjeez  coming soon</h1>
              </div>
            </div>{/* /lc-block */}
            {/* /lc-block */}
            <div className="lc-block mb-4">
              <div editable="rich">
                <p className="lead"> sit tight and have a patient ,  our website is under development process. We are launching it very soon.</p>
              </div>
            </div>
            <div className="lc-block">
              <a className="btn btn-lg btn-warning" href="#" role="button">Get to connect</a>
            </div>{/* /lc-block */}
          </div>{/* /col */}
        </div>
      </div>
    </>
  )
}
