import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { Foot } from "./Foot";

export const Know_more = () => {
  const [get, setget] = useState([]);
  const { id } = useParams();

  useEffect((id) => {
    axios.post('http://localhost/php/php/adminform.php')
      .then(function (response) {
        console.log(response.data);
        setget(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return (
    <>
      <div className="bg-light">
        <div className="container pt-4 ">
          {
            get.map((k) => {
              if (k.id == id) {
                return (
                  <>
                    <div className="know_more">
                      <div className="d-flex">
                        <div >
                          <img className="img_know" src={k.img} />
                          <h1 className="name_know">{k.name}</h1>
                        </div>

                        <div>

                          <p className=" discription_know">{k.discription}</p>
                        </div>

                      </div>
                    </div>
                  </>
                )
              }
            })

          }
        </div>
      </div>


      <Footer />
      <Foot />

    </>
  )
}
