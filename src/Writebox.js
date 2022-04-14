// import React, { useState } from "react";

// function Writebox() {
//   function voice(msg) {
//      setBody(msg);

//   }
//   const sirormam2 = document.getElementById("sirormam2");
//   const sirormam1 = document.getElementById("sirormam1");
//   const sub = document.getElementById("sub");
//   const [subject,setsubject] = useState("");
//   // voice
//   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   const recognition = new SpeechRecognition();
//   const scndtext = document.getElementById("scndtext");
//   const scndeditbox = document.getElementById("scndeditbox");
//   const txtvoice = document.getElementById("txtvoice");
//   const micicontext = document.getElementById ("micicontext");
//   const [Body, setBody] = useState("type your letter Body");

//   const box = document.getElementById("box");
//   const copyto = document.getElementById("copyto");
//   const editbox = document.getElementById("editbox");

//   const [name, setname] = useState("");
//   const [SchoolName, setSchoolName] = useState("");
//   const [TodaysDate, setTodaysDate] = useState("");
//   const [Rollno, setRollno] = useState("");
//   const [Clgadd, setClgadd] = useState("");
//   const [Yourclass, setYourclass] = useState("");
//   // ---------------
//   // letter own 1 states
//   const [sirormam, setsirormam] = useState("");
//   const [Duration, setDuration] = useState("");
//   const [Where, setWhere] = useState("");
//   const [Whene, setWhene] = useState("");

//   return (

//     <div >

//       <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Navbar</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Link</a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Dropdown
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li><a className="dropdown-item" href="#">Action</a></li>
//                   <li><a className="dropdown-item" href="#">Another action</a></li>
//                   <li><hr className="dropdown-divider" /></li>
//                   <li><a className="dropdown-item" href="#">Something else here</a></li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link disabled">Disabled</a>
//               </li>
//             </ul>
//             <form className="d-flex">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//       </nav>
//       <h1 className="container bg-info ">Letter Box</h1>
//       <div className=" bg-light border p-5   d-grid gap-3">
//         <h1>Inputs</h1>
        // <input
        //   onChange={(e) => {
        //     setname(e.currentTarget.value);
        //   }}
        //   placeholder="Enter your name"
        //   value={name}
        //   type="text"
        // />{" "}
        // <br />
        // <input
        //     onChange={(e) => {
        //       setsirormam(e.currentTarget.value);
        //       sirormam2.value=e.currentTarget.value;
        //       sirormam1.value = e.currentTarget.value;
        //     }}
        //     placeholder=" Writing The letter to Sir/Mam"
        //     type="text"
        //   />
        // <input
        //   onChange={(e) => {
        //     setSchoolName(e.currentTarget.value);
        //   }}
        //   placeholder="Enter your School name"
        //   value={SchoolName}
        //   type="text"
        // />
        // <input
        //   onChange={(e) => {
        //     setTodaysDate(e.currentTarget.value);
        //   }}
        //   placeholder="Enter Todays Date "
        //   value={TodaysDate}
        //   type="text"
        // />
        // <input
        //   onChange={(e) => {
        //     setClgadd(e.currentTarget.value);
        //   }}
        //   placeholder="inter your college address "
        //   value={Clgadd}
        //   type="text"
        // />
        // <input
        //   onChange={(e) => {
        //     setYourclass(e.currentTarget.value);
        //   }}
        //   placeholder="Which class "
        //   value={Yourclass}
        //   type="text"
        // />
        // <input
        //   onChange={(e) => {
        //     setRollno(e.currentTarget.value);
        //   }}
        //   placeholder="inter your Roll no"
        //   value={Rollno}
        //   type="text"
        // />
//       </div>
//       {/*

//     */}

//       <h4 className=" shadow-lg p-3 mb-5 bg-body rounded bg-light border border-warning  p-5" id="box">
        // <div
        //   value={sirormam}
        //   onChange={(e) => {}}
        //   className=" d-flex justify-content-end "
        // >
        //   <input className=" border border-info shadow-lg p-1 mb-1  rounded"
        //   id="sirormam1"
        //     onChange={(e) => {
        //       setsirormam(e.currentTarget.value);

        //     }}
        //     placeholder=" Sir/Mam"
        //     type="text"
        //   />
        // </div>
        // <div className=" d-flex justify-content-end ">
        //   <input  className=" shadow-lg p-1 mb-1  rounded border border-info"
        //     value={Whene}
        //     onChange={(e) => {
        //       setWhene(e.currentTarget.value);
        //     }}
        //     placeholder=" Whene you Have the Event(date)"
        //     type="text"
        //   />
        // </div>
        // <div className=" d-flex justify-content-end ">
        //   <input  className=" border border-info shadow-lg p-1 mb-1  rounded"
        //     value={Where}
        //     onChange={(e) => {
        //       setWhere(e.currentTarget.value);
        //     }}
        //     placeholder=" Where is the Event"
        //     type="text"
        //   />
        // </div>
        // <div className=" d-flex justify-content-end ">
        //   <input  className=" border border-info shadow-lg p-1 mb-1  rounded"
        //     value={Duration}
        //     onChange={(e) => {

        //       setDuration(e.currentTarget.value);
        //     }}
        //     placeholder=" duration of leave"
        //     type="text"
        //   />
        // </div>
      //   The Headmistress
      //   <br />
      //   {SchoolName}
      //   <br />
      //   {Clgadd} <br />
      //   {TodaysDate} <br />
      //   <br />
      //   <br />
      //  <h4>Subject: Seeking Permission to Attend a Family Function </h4>  <br />
      //   <br />
      //   Respected {sirormam} , <br />
      //   <br />I am writing to seek your permission for me to attend a family
      //   function on the {Whene} at {Where}. I would
      //   <br /> require a leave from {Duration} . I have taken permission from my
      //   Class Teacher, <br />
      //   and I will ensure that I keep myself informed about the daily lessons
      //   and complete everything up-to-date when I am back.
      //   <br /> Kindly consider my request and grant me permission.
      //   <br />
      //   <br />
      //   <br />
      //   Thanking you
      //   <br />
      //   Yours sincerely,
      //   <br />
      //   {name}
      //   <br />
      //   Class {Yourclass}
      //   <br />
      //   Roll No. {Rollno}
      //   <br />
      //   <button
      //   className="bg-success  text-dark bg-opacity-10 shadow-lg p-2 mb-5  rounded "
      //   onClick={() => {
      //     copyto.innerText = " Edit in Edit Box ";
      //     editbox.value = box.textContent;
      //     box.select();
      //   }}
      //   id="copyto"
      // >
      //   Edit
      // </button>
//       </h4>

      // <h3>Edit BOX</h3>
      // <textarea   cols="90" rows="10" id="editbox" className=" border border-info p-4 " placeholder=" Edit box" />
      // <button className="  btn btn-primary mt-2 mb-5"> Copy </button>
      // <div className="row">
      //   <div   className=" col-4" id="voiceimg">

      //     <img  onClick={()=> {

      //        recognition.start();

      //        recognition.onstart = function () {
      //         micicontext.innerText = "Recording...";
      //          console.log("voice is activated");
      //        };
      //        recognition.onresult = function (event) {
      //          const current = event.resultIndex;
      //          const transcript = event.results[current][0].transcript;

      //          voice(transcript);
      //          micicontext.innerText = "Mic";

      //        };

      //      }}

      //        src=" /Images/voice-search.png"
      //     />
      //     <h5 id="micicontext">Mic</h5>
      //     <input className="  border border-primary d-flex-inline p-3 m-2 "
      //      onChange={(e)=>{
      //        setBody(e.currentTarget.value);
      //      }}
      //       id="txtvoice"
      //       value={Body} type= "text"
      //       placeholder=" Your Voice"
      //     />

      //   </div>

//         <div className=" shadow-lg p-3 mb-5 bg-body rounded bg-light border border-warning p-5  col-12">
        // <h4  id="scndtext">

        // <input className=" d-md-flex border border-info  m-3 p-2 bd-highlight"
        //     value={subject}
        //     onChange={(e) => {
        //       setsubject(e.currentTarget.value);
        //     }}
        //     placeholder=" Subject"
        //     type="text"
        //   />
        //    <input id="sirormam2" className=" border border-info p-2 m-3  bd-highlight"
        //     onChange={(e) => {
        //       setsirormam(e.currentTarget.value);
        //     }}
        //     placeholder=" Sir/Mam"
        //     type="text"
        //   >

        //      </input>
        //   <br/>
        //   The Headmistress <br/> {SchoolName} <br />
        //   {Clgadd}
        //   <br />
        //  {TodaysDate}
        //   <br />
        //   <br />
        //  <h4 id="sub"> Subject: {subject} </h4>
        //   <br />
        //   <br />
        //   Respected {sirormam},
        //   <br /> <br />
        //   {Body}
        //   <br /> <br />
        //   Thank you <br />
        //   Yours sincerely,
        //   <br />
        //   {name}<br />
        //   Class {Yourclass}

        //   <br />
        //   <div className="col-1">
        //   <button  onClick={()=>{
        //    scndeditbox.value = scndtext.textContent;
        //   }} className=" shadow-lg p-3 mb-5  rounded btn btn-info mt-4">
        //          Edit
        //   </button>

        // </div>
        // </h4>
//         </div>

//         <div className=" col-4 mt-4">
        // <textarea name="" id="scndeditbox" cols="90" rows="10"> Edit Box  </textarea>

        // <button className="btn btn-info  ">Copy</button>
//         </div>
//       </div>
//     </div>
//   );

// }

// export default Writebox;

import React, { useState } from "react";
import "./style.css";
function Writebox() {
  function voice(msg) {
    setBody(msg);
  }
  const sirormam2 = document.getElementById("sirormam2");
  const sirormam1 = document.getElementById("sirormam1");
  const sub = document.getElementById("sub");
  const [subject, setsubject] = useState("");
  // voice
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  const scndtext = document.getElementById("scndtext");
  const scndeditbox = document.getElementById("scndeditbox");
  const txtvoice = document.getElementById("txtvoice");
  const micicontext = document.getElementById("micicontext");
  const [Body, setBody] = useState("type your letter Body");
  const letter3 = document.getElementById("letter3");
  const box = document.getElementById("box");
  const copyto = document.getElementById("copyto");
  const editbox = document.getElementById("editbox");
  const editbox3 = document.getElementById("editbox3");


  const [name, setname] = useState("");
  const [SchoolName, setSchoolName] = useState("");
  const [TodaysDate, setTodaysDate] = useState("");
  const [Rollno, setRollno] = useState("");
  const [Clgadd, setClgadd] = useState("");
  const [Yourclass, setYourclass] = useState("");
  const [reason1,setreason1] = useState("");
  const [howmanyday,sethowmanyday] = useState("");
  // ---------------
  // letter own 1 states
  const [sirormam, setsirormam] = useState("");
  const [Duration, setDuration] = useState("");
  const [Where, setWhere] = useState("");
  const [Whene, setWhene] = useState("");

  return (
    <div>
      
      <nav className="  navbar navbar-expand-lg navbar-dark bg-primary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Your Letter Box
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>





            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div id="carouselExampleCaptions" className="  carousel slide " data-bs-ride="carousel" >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/4.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className="fs-1 text-dark m-4">Inputs</div>
              <h5><div className="row shadow-lg gap-2  justify-content-center ">
            <input className=" col-3 shadow-lg p-2 mb-5  rounded"
          onChange={(e) => {
            setname(e.currentTarget.value);
          }}
          placeholder="Enter your name"
          value={name}
          type="text"
        />{" "}
        <br />
        <input  className=" col-3 shadow-lg p-2 mb-5  rounded"
            onChange={(e) => {
              setsirormam(e.currentTarget.value);
              sirormam2.value=e.currentTarget.value;
              sirormam1.value = e.currentTarget.value;
            }}
            placeholder=" Writing The letter to Sir/Mam"
            type="text"
          />
        <input   className=" col-3 shadow-lg p-2 mb-5  rounded"
          onChange={(e) => {
            setSchoolName(e.currentTarget.value);
          }}
          placeholder="Enter your School name"
          value={SchoolName}
          type="text"
        />
        <input  className=" col-3 shadow-lg p-2 mb-5  rounded"
          onChange={(e) => {
            setTodaysDate(e.currentTarget.value);
          }}
          placeholder="Enter Todays Date "
          value={TodaysDate}
          type="text"
        />
        <input  className=" col-3 shadow-lg p-2 mb-5  rounded"
          onChange={(e) => {
            setClgadd(e.currentTarget.value);
          }}
          placeholder="inter your college address "
          value={Clgadd}
          type="text"
        />
        <input  className=" col-2 shadow-lg p-2 mb-5  rounded"
          onChange={(e) => {
            setYourclass(e.currentTarget.value);
          }}
          placeholder="Which class "
          value={Yourclass}
          type="text"
        />
        <input  className=" col-3 shadow-lg p-2 mb-5  rounded"
          onChange={(e) => {
            setRollno(e.currentTarget.value);
          }}
          placeholder="inter your Roll no"
          value={Rollno}
          type="text"
        /> </div></h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/6.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>     <div className="row shadow-lg gap-2  justify-content-center ">
            <input className=" col-3 shadow-lg p-2 mb-5  rounded"
          onChange={(e) => {
            setname(e.currentTarget.value);
          }}
          placeholder="Enter your name"
          value={name}
          type="text"
        />{" "}
        <br />
        <input  className=" col-3 shadow-lg p-2 mb-5  rounded"
            onChange={(e) => {
              setsirormam(e.currentTarget.value);
              sirormam2.value=e.currentTarget.value;
              sirormam1.value = e.currentTarget.value;
            }}
            placeholder=" Writing The letter to Sir/Mam"
            type="text"
          />
        <input   className=" col-3 shadow-lg p-2 mb-5  rounded"
          onChange={(e) => {
            setSchoolName(e.currentTarget.value);
          }}
          placeholder="Enter your School name"
          value={SchoolName}
          type="text"
        />
        <input  className=" col-3 shadow-lg p-2 mb-5  rounded"
          onChange={(e) => {
            setTodaysDate(e.currentTarget.value);
          }}
          placeholder="Enter Todays Date "
          value={TodaysDate}
          type="text"
        />
        <input  className=" col-3 shadow-lg p-2 mb-5  rounded"
          onChange={(e) => {
            setClgadd(e.currentTarget.value);
          }}
          placeholder="inter your college address "
          value={Clgadd}
          type="text"
        />
        <input  className=" col-2 shadow-lg p-2 mb-5  rounded"
          onChange={(e) => {
            setYourclass(e.currentTarget.value);
          }}
          placeholder="Which class "
          value={Yourclass}
          type="text"
        />
        <input  className=" col-3 shadow-lg p-2 mb-5  rounded"
          onChange={(e) => {
            setRollno(e.currentTarget.value);
          }}
          placeholder="inter your Roll no"
          value={Rollno}
          type="text"
        /> </div></h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/7.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5><div className="row shadow-lg gap-2  justify-content-center ">
            <input className=" col-3 shadow-lg p-2 mb-5  rounded"
          onChange={(e) => {
            setname(e.currentTarget.value);
          }}
          placeholder="Enter your name"
          value={name}
          type="text"
        />{" "}
        <br />
        <input  className=" col-3 shadow-lg p-2 mb-5  rounded"
            onChange={(e) => {
              setsirormam(e.currentTarget.value);
              sirormam2.value=e.currentTarget.value;
              sirormam1.value = e.currentTarget.value;
            }}
            placeholder=" Writing The letter to Sir/Mam"
            type="text"
          />
        <input   className=" col-3 shadow-lg p-2 mb-5  rounded"
          onChange={(e) => {
            setSchoolName(e.currentTarget.value);
          }}
          placeholder="Enter your School name"
          value={SchoolName}
          type="text"
        />
        <input  className=" col-3 shadow-lg p-2 mb-5  rounded"
          onChange={(e) => {
            setTodaysDate(e.currentTarget.value);
          }}
          placeholder="Enter Todays Date "
          value={TodaysDate}
          type="text"
        />
        <input  className=" col-3 shadow-lg p-2 mb-5  rounded"
          onChange={(e) => {
            setClgadd(e.currentTarget.value);
          }}
          placeholder="inter your college address "
          value={Clgadd}
          type="text"
        />
        <input  className=" col-2 shadow-lg p-2 mb-5  rounded"
          onChange={(e) => {
            setYourclass(e.currentTarget.value);
          }}
          placeholder="Which class "
          value={Yourclass}
          type="text"
        />
        <input  className=" col-3 shadow-lg p-2 mb-5  rounded"
          onChange={(e) => {
            setRollno(e.currentTarget.value);
          }}
          placeholder="inter your Roll no"
          value={Rollno}
          type="text"
        /> </div></h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      
      <h1 className="  text-center mt-3 fonts1 "> <p className="">Your personalise letterBox</p> </h1>
      <p className=" fs-2  text-center mt-3"> Fill all the inputs and it will customise all the letters according to your inputs</p>
      

      {/* main */}

      <div className=" container-fluid pt-3 row gap-3">
      
        <p className="px-5 col-5 fs-1 "> It will helps you to type your letter faster and easier</p>
         
      </div>

      <p className =" fonts1 mx-4 container-fluid pt-3"> Letters:</p>
      <p className="px-5 col-12 fs-3 text-centers ">Here we have all the letter formats</p>
      
        
     

      <div  className=" d-flex justify-content-center  row mt-3 gap-5 p-4" >
        <h1 className="fs-3 p-4">Format 1</h1>
        <p className="fs-1">Subject: <h1 className="fonts2">Seeking Permission to Attend a Family Function</h1> </p>
        <div className="shadow-lg col-5 card text-white bg-primary mb-3">
          <div className="card-header">Letter</div>
          <div className="card-body">
            <h5 className="card-title"> <div
          value={sirormam}
          onChange={(e) => {}}
          className=" d-flex justify-content-end "
        >
          <input className=" border border-info shadow-lg p-1 mb-1  rounded"
          id="sirormam1"
            onChange={(e) => {
              setsirormam(e.currentTarget.value);

            }}
            placeholder=" Sir/Mam"
            type="text"
          />
        </div>
        <div className=" d-flex justify-content-end ">
          <input  className=" shadow-lg p-1 mb-1  rounded border border-info"
            value={Whene}
            onChange={(e) => {
              setWhene(e.currentTarget.value);
            }}
            placeholder=" When you Have the Event(date)"
            type="text"
          />
        </div>
        <div className=" d-flex justify-content-end ">
          <input  className=" border border-info shadow-lg p-1 mb-1  rounded"
            value={Where}
            onChange={(e) => {
              setWhere(e.currentTarget.value);
            }}
            placeholder=" Where is the Event"
            type="text"
          />
        </div>
        <div className=" d-flex justify-content-end ">
          <input  className=" border border-info shadow-lg p-1 mb-1  rounded"
            value={Duration}
            onChange={(e) => {

              setDuration(e.currentTarget.value);
            }}
            placeholder=" duration of leave"
            type="text"
          />
        </div>
           
              <div id="box">
            The Headmistress
        <br />
        {SchoolName}
        <br />
        {Clgadd} <br />
        {TodaysDate} <br />
        <br />
        <br />
       <h4>Subject: Seeking Permission to Attend a Family Function </h4>  <br />
        <br />
        Respected {sirormam} , <br />
        <br />I am writing to seek your permission for me to attend a family
        function on the {Whene} at {Where}. I would
        <br /> require a leave from {Duration} . I have taken permission from my
        Class Teacher, <br />
        and I will ensure that I keep myself informed about the daily lessons
        and complete everything up-to-date when I am back.
        <br /> Kindly consider my request and grant me permission.  
        <br />
        <br />
        <br />
         Thanking you
        <br />
         Yours sincerely,
        <br />
        {name}
        <br />
         Class {Yourclass}
        <br />
         Roll No. {Rollno}
        <br />
        </div>
        <button
        className=" btn btn-outline-dark text-light shadow-lg p-2 mb-5  rounded "
        onClick={() => {
          copyto.innerText = " Edit in Edit Box ";
          editbox.value = box.textContent;
          box.select();   
        }}
        id="copyto"
      >
        Edit
      </button></h5> <p>
           
            </p>
          </div>
        </div>
        <div className=" col-5  card text-white bg-secondary mb-3">
          <div className="card-header">Edit</div>
          <div className="card-body">
            <h5 className="card-title">

            <h3>Edit BOX</h3>
       <textarea   cols="50" rows="30" id="editbox" className=" fs-4 border border-info p-4 " placeholder=" Edit box" />
              <button className=" btn btn-outline-warning  mt-2 mb-5"> Copy </button>
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>



        <div className=" col-5 card text-white bg-success mb-3">
          <div className="card-header">Letter</div>
          <div className="card-body">
            <h5 className="card-title"> <div className="row">
        <div   className=" " id="voiceimg">

          <img  onClick={()=> {

             recognition.start();

             recognition.onstart = function () {
              micicontext.innerText = "Recording...";
               console.log("voice is activated");
             };
             recognition.onresult = function (event) {
               const current = event.resultIndex;
               const transcript = event.results[current][0].transcript;

               voice(transcript);
               micicontext.innerText = "Mic";

             };

           }}

             src=" /Images/voice-search.png"
          />
          <h5 id="micicontext">Mic</h5>
          <input className="  border border-primary d-flex-inline p-3 m-2 "
           onChange={(e)=>{
             setBody(e.currentTarget.value);
           }}
            id="txtvoice"
            value={Body} type= "text"
            placeholder=" Your Voice"
          />

<h4  id="scndtext">

<input className=" d-md-flex border border-info  m-3 p-2 bd-highlight"
    value={subject}
    onChange={(e) => {
      setsubject(e.currentTarget.value);
    }}
    placeholder=" Subject"
    type="text"
  />
   <input id="sirormam2" className=" border border-info p-2 m-3  bd-highlight"
    onChange={(e) => {
      setsirormam(e.currentTarget.value);
    }}
    placeholder=" Sir/Mam"
    type="text"
  >

     </input>
  <br/>
  The Headmistress <br/> {SchoolName} <br />
  {Clgadd}
  <br />
 {TodaysDate}
  <br />
  <br />
 <h4 id="sub"> Subject: {subject} </h4>
  <br />
  <br />
  Respected {sirormam},
  <br /> <br />
  {Body}
  <br /> <br />
  Thank you <br />
  Yours sincerely,
  <br />
  {name}<br />
  Class {Yourclass}

  <br />
  <div className="col-1">
  <button  onClick={()=>{
   scndeditbox.value = scndtext.textContent;
  }} className=" shadow-lg p-3 mb-5  rounded btn btn-info mt-4">
         Edit
  </button>

</div>
</h4>

        </div> 
        </div></h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="col-5 card text-white bg-danger mb-3">
          <div className="card-header">Edit</div>
          <div className="card-body">
            <h5 className="card-title">
              <textarea name="" className="fs-4" id="scndeditbox" cols="50" rows="30"> Edit Box  </textarea>

<button className="btn btn-outline-warning  mt-2 mb-5  ">Copy</button></h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="col-5 card text-dark bg-warning mb-3">
          <div className="card-header">Letter</div>
          <div className="card-body">
            <h5 className="card-title">
            <div className=" d-flex justify-content-end ">
          <input  className=" border border-info shadow-lg p-1 mb-1  rounded"
            value={reason1}
            onChange={(e) => {

              setreason1(e.currentTarget.value);
            }}
            placeholder="write You reason"
            type="text"
          />
        </div >
        <div className=" d-flex justify-content-end ">
          <input  className=" border border-info shadow-lg p-1 mb-1  rounded"
            value={howmanyday}
            onChange={(e) => {

              sethowmanyday(e.currentTarget.value);
            }}
            placeholder="Number of Leaves "
            type="text"
          />
        </div>
        
        <div id="letter3">
  {name}<br/>
  {SchoolName},<br/>
  {Clgadd},<br/>


{TodaysDate},<br/>

The Class Teacher,<br/>
 {Yourclass},<br/>
 {SchoolName}<br/>
   {Clgadd}<br/> <br/>

<h4>Subject: Application for Sick Leave </h4><br/><br/>

Respected {sirormam},<br/>
I am {name} studying in {Yourclass} at {SchoolName}. I am writing this letter to inform you that<br/> I took leave on 21st and 22nd January 2021 because of a {reason1}.<br/>

Since I was suffering from a {reason1}, the doctor advised me to take bed rest for {howmanyday} days.<br/> So, I was unable to attend school for {howmanyday} days.<br/>

So, I kindly request you to grant me a leave of absence for {howmanyday} days and allow <br/> me to attend the classes from today {TodaysDate}. The medical reports are attached for inspection.<br/><br/>

Thanking you.<br/>
Yours Sincerely,<br/>
{name}<br/>
<button
        className=" btn btn-outline-dark text-light shadow-lg p-2 mb-5  rounded "
        onClick={() => {
          // copyto.innerText = " Edit in Edit Box ";
          editbox3.value = letter3.textContent;
          letter3.select();   
        }}
        
      >
        Edit
      </button>
      </div>
</h5><br/><br/>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>


        <div className=" col-5 card text-dark bg-info mb-3">
          <div className="card-header">Edit</div>
          <div className="card-body">
            <h5 className="card-title">
            <textarea   cols="50" rows="30" id="editbox3" className=" fs-4 border border-info p-4 " placeholder=" Edit box" />
              <button className=" btn btn-outline-warning  mt-2 mb-5"> Copy </button>

            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className=" col-5 card text-dark bg-light mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Light card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className=" col-5 card text-white bg-dark mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Dark card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
       
     
       
                </div>
               
      </div>
    
  );
 
} 

export default Writebox;
