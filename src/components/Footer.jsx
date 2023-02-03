import React from 'react'

export default function Footer() {
  return (
    <>
     {/* Footer */}
     <footer className="text-center text-lg-start bg-dark  text-white">
        {/* Section: Social media */}
        
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className>
          <div className="container text-center text-md-start mt-5  p-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />Company Vision
                </h6>
                <p>
                Kababjeez is a Goat Farming project providing best quality of Trading and Farming Management
Services. Kababjeez Team facilitate Goats lovers or for those who are willing to rear goats. 
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset">Goats Trading</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Goats Breeding</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Goats Boarding</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Goats kids Feeding</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3" /> Office No # 14 Mukhtar Centre Opposite To Bait-ul-Mukarram Masjid University Road Karachi</p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  contact@kababjeezgoatfarm.com
                </p>
                <p><i className="fas fa-phone me-3" /> 0343-2525084 </p>
                <p><i className="fas fa-print me-3" /> 0330-8153959</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="#"> Kababjeez.com</a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  )
}
