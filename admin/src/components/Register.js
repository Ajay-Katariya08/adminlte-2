import { Link } from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react"

const Register = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [retypepassword, setretypepassword] = useState();
  const btnhandaler = () => {
    if (name=="" || email=="" || password=="") {
                    
      alert('Please, Enter your data...!')
  }
  else
  {
      axios.post('http://localhost/php/php/register.php',{name,email,password,retypepassword})
      .then(function (response) {
          console.log(response);
          // setId(response.data.id)
          // alert("ID == " + response.data.id)
  
          if(response){
              alert('Your data is Submited...!')
              // window.localStorage.setItem('id', response.data.id)
              window.location.href = '/';
          }
      })
      .catch(function (error) {
          console.log(error)
      })
      axios
      .get("http://localhost/php/php/register.php")
      .then(function (response) {
        // handle success
        console.log(response);
      //   setdata(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
}
  }
  const handlechangeName = (e) => {
    setname(e.target.value);
  }

  const handlechangeEmail = (e) => {
    setemail(e.target.value);
  }

  const handlechangePassword = (e) => {
    setpassword(e.target.value);
  }
  const handlechangeretypePassword = (e) => {
    setretypepassword(e.target.value);
  }
  return (
    <>
      <div className="register-box mx-auto">
        <div className="register-logo">
          <Link to="/Dasboard">Admin</Link>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Register a new membership</p>
            <form  method="post">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Full name" onChange={(e) => { handlechangeName(e); }} />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" onChange={(e) => { handlechangeEmail(e); }} />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" onChange={(e) => { handlechangePassword(e); }} />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Retype password" onChange={(e) => { handlechangeretypePassword(e); }} />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                    <label htmlFor="agreeTerms">
                      I agree to the <a href="#">terms</a>
                    </label>
                  </div>
                </div>
                {/* /.col */}
                {/* <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block" onClick={btnhandaler}>Register</button>
                </div> */}
                {
                  // <Link to="/"  className="nav-link active" >
                    <button className="border p-1 border-primary" onClick={btnhandaler} disabled={!name || !email || !password || !password}>Register</button>
                  // </Link>
                }
                
                {/* /.col */}
              </div>
            </form>
            <div className="social-auth-links text-center">
              <p>- OR -</p>
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2" />
                Sign up using Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2" />
                Sign up using Google+
              </a>
            </div>
            <Link to="/">I already have a membership</Link>

          </div>
          {/* /.form-box */}
        </div>{/* /.card */}
      </div>
      {/* /.register-box */}
      {/* APRROV STATUS 0 DELETE ADITE */}

    </>
  )
}
export default Register