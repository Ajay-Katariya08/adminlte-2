import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
const Footer = () => {
  // const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [discription, setdiscription] = useState();
  const [data, setdata] = useState([]);
  const { id } = useParams();

  const submitbton = () => {
    axios.post('http://localhost/php/php/comment.php', { name: name, email: email, discription: discription, id: id })
      .then(function (response) {
        console.log(response);

      })
      .catch(function (error) {
        console.log(error);
      });

  }

  useEffect(() => {
    axios.get(`http://localhost/jenu_php/adminlte/comment.php?id=` + id)
      .then(function (response) {
        console.log(response.data);
        setdata(response.data);
      })
      .catch(function (error) {
        console.log(error);

      });
  }, [])
  const handlechangeName = (e) => {
    setname(e.target.value);
  }

  const handlechangeemail = (e) => {
    setemail(e.target.value);
  }

  const handlechangediscription = (e) => {
    setdiscription(e.target.value);
  }
  const comment = () => {
    document.getElementById("formdata").style.display = "block";
  }
  return (
    <>
      <div>
        <div className="container">

          {/* <form id="formdata" style={{ display: "none" }} className="form">
            <table cellPadding="10px">
              <tr>
                <th>Name:</th>
                <th><input type="text" onChange={(e) => { handlechangeName(e); }}></input></th>
              </tr>
              <tr>
                <th>Email :</th>
                <th><input type="text" onChange={(e) => { handlechangeemail(e); }}></input></th>
              </tr>
              <tr>
                <th>Discription :</th>
                <th><input type="text" onChange={(e) => { handlechangediscription(e); }}></input></th>
              </tr>
              <tr>
                <td colSpan="2">
                  <input type="submit" onClick={submitbton} className=" border-0  rounded btonsubmit" value="submit"></input>
                </td>
              </tr>
            </table>
          </form> */}



          <div className="main">
            <div className="submain">

              {
                data.map((g, m) => {
                  return (
                    <>
                      <div key={m}>
                        <div>
                          <div>
                            <h4 className="deta"><BsPersonCircle /><span className="deta">{g.name} </span>

                            </h4>
                          </div>
                          <div>
                            <p className="deta">{g.email}</p>
                          </div>
                          <div>
                            <p className="deta">{g.discription}</p>
                          </div>

                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
          <input type="button" className="bg-dark text-light border-0 p-2 rounded comment_btn" value="Leave a comment" />
         
          <form className="form-block pb-5 pt-4">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="form-group fl_icon">
                  <div className="icon"><i className="fa fa-user" /></div>
                  <input className="form-input border-dark" type="text" onChange={(e) => { handlechangeName(e); }} placeholder="Your name" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 fl_icon">
                <div className="form-group fl_icon">
                  <div className="icon"><i className="fa fa-envelope-o" /></div>
                  <input className="form-input border-dark" type="text" onChange={(e) => { handlechangeemail(e); }} placeholder="Your email" />
                </div>
              </div>
              <div className="col-xs-12 pt-4">
                <div className="form-group">
                  <textarea className="form-input border-dark" onChange={(e) => { handlechangediscription(e); }} required placeholder="Your text" defaultValue={""} />
                </div>
              </div>
              <input type="submit" onClick={submitbton} className=" border-0  rounded btonsubmit" value="submit"></input>
            </div>
          </form>
        </div>

      </div>

    </>
  )
}
export default Footer

