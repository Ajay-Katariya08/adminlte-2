import { useEffect, useState } from "react";
import axios from "axios";
import { BsFillShareFill, BsHandThumbsUpFill, BsHandThumbsUp, BsFillBookFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import { Foot } from "./Foot";

const Alldata = () => {
   const [data, setdata] = useState([]);
   const [like, setlike] = useState([]);
   const [dateState, setDateState] = useState(new Date());
   useEffect(() => {
     setInterval(() => setDateState(new Date()), 30000);
   }, []);
   // const { id } = useParams();
   useEffect(() => {
      axios.post('http://localhost/php/php/adminform.php')
         .then(function (response) {
            console.log(response.data);
            setdata(response.data);
         })
         .catch(function (error) {
            console.log(error);

         });
   }, [])

   const btn_like = (id) => {
      axios.get('http://localhost/php/php/like.php?id=' + id)
         .then((fetch) => {
            console.log(fetch);
            window.location.reload()
         })
   }
   useEffect(() => {
      axios.get('http://localhost/php/php/getlike.php')
         .then((fetch) => {
            console.log(fetch.data);
            setlike([...fetch.data])
         })
   }, [])
   useEffect(() => {
      data.map((i, k) => {
         like.map((j) => {
            if (i.id === j.bid) {
               document.getElementById("l" + k).innerHTML = j.likes + "❤️";
            }
         })
      })
   })
   return (
      <>
         <div className="mainbody">
            <div className=" container d-flex flex-wrap p-2 ">
               {
                  data.map((i, j) => {

                     return (
                        <>
                           <div className="col-4 pt-5 p-2 d-flex">
                              <div className="subbody p-3">
                                 <Link to={`/${i.id}`}><img src={i.img} /></Link>
                                 <p>
                                    {' '}
                                    {dateState.toLocaleDateString('en-GB', {
                                       day: 'numeric',
                                       month: 'short',
                                       year: 'numeric',
                                    })}
                                    {dateState.toLocaleString('en-US', {
                                       hour: 'numeric',
                                       minute: 'numeric',
                                       hour12: true,
                                    })}
                                 </p>
                                 <div>
                                    <h5><b>{i.name}</b></h5>
                                    <p className="discription">{i.discription}</p>
                                 </div>
                                 <div>
                                    <BsFillShareFill className="icon" />
                                    <Link to={`/${i.id}`}><BsFillBookFill className="ms-5 icon" /></Link>
                                    <BsHandThumbsUpFill onClick={() => btn_like(i.id)} className="ms-5 icon" />
                                    <p id={"l" + j}></p>
                                 </div>
                              </div>
                           </div>

                        </>
                     )
                  })
               }

            </div>
         </div>

         <Foot />
      </>
   )
}
export default Alldata