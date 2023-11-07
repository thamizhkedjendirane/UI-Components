import React from 'react'

function Footer() {
    const styles ={
        footerLink: {
         listStyle:" none",
         fontSize:"0.7rem",
         lineHeight:"40px",
         cursor: "pointer"
    }
}
  return (
    <div className="w-100  border">
    <div className="  py-3 container justify-content-center">
      <div className="row">
        <div className="col-md-4">
          <p
            className="Header_title  mb-0 "
            style={{ color: "#1F2D5C", fontSize: "1.2rem" }}
          >
            <b>EM-UI</b>
          </p>
          <p className="mt-2 " style={{ fontSize: ".7rem" }}>
            Enterprise Minds Inc. is one of the fastest growing tech
            companies with locations in San Francisco, Toronto, London, and
            India (Hyderabad, Pune, Puducherry, Tirupati ,Delhi & Bengaluru
            metros)
          </p>
        </div>
        <div className=" col-md-3 d-flex justify-content-between mt-2 ms-auto">
          <div className="">
            <a href="/" style={{textDecoration:"none"}}>
              <p style={{ color: "#1F2D5C", fontWeight: "600", }}>Company</p>
            </a>

            <li style={styles.footerLink}>About us</li>
            <li style={styles.footerLink}>Investment</li>
            <li style={styles.footerLink}>Blogs</li>
          </div>
          <div className="">
            <a href="/" style={{textDecoration:"none"}}>
              <p style={{ color: "#1F2D5C", fontWeight: "600" }}>
                Resources
              </p>
            </a>
            <li style={styles.footerLink}>About us</li>
            <li style={styles.footerLink}>Investment</li>
            <li style={styles.footerLink}>Blogs</li>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer