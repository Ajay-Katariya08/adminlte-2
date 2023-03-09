export const Foot = () => {
  return (
    <>
      {/* footer */}
      <section class="spacer-top ">
        <div class="main_footer p-5">
          <div class="container spacer-top d-flex">
            <div class="frist_div">
            <img src={require('./img/logo.png')} className="logo" alt="" />
              <p> We offers government approved computer training courses in vadodra.</p>
              <h3>FOLLOW US ON</h3>
            </div>
            <div class="second_div">
              <h4>FEATURE LINKS</h4><br></br>
              <p>About Us</p>
              <p>Blogs</p>
              <p>Join Us</p>
              <p>Company Login</p>
              <p>Certificate Verification</p>
            </div>
            <div class="second_div">
              <h4>TRENDY COURSES</h4><br></br>
              <p>Python course training</p>
              <p>Node JS course training</p>
              <p>Angular JS course<br></br> training</p>
              <p>React JS course training</p>
              <p>Unity 3D course training</p>
            
            </div>
            <div class="second_div_last">
              <h4>OUR BRANCHES</h4><br></br>
             
              <div>
                <b>BRANCH 1 - KATARGAM</b>
                <p>127-134, 1<sup>st</sup> Floor, Laxmi Enclave, Opp. Gajera School, Katargam, Surat</p>
                <h5>mo :<span> +91 92 3331 5609</span></h5>
              </div>
             
              <button>Get Virtual Tour</button>
            </div>
          </div>
        </div>
      </section>
      {/* copyright */}
      <section>
        <div class="copyright">
          <p class="container">© 2023 All Rights Reserved by Institute.</p>
        </div>
      </section>
    </>
  )
}