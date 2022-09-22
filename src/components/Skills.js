import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Skills() {

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
        navigate('/')
    }  // eslint-disable-next-line
    // else
    //     showProfile();
}, [])
  return (

    <div>
         <nav class="navbar navbar-light bg-light my-2">
  <div class="container-fluid">
    
    {/* <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"> */}
    
    <h5>Skills acquired during the training session held at ETI, Lucknow</h5>
   
  </div>
</nav>
        <table className="table table-striped my-2 table-bordered">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Skills</th>
      <th scope="col">Description</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>HTML/CSS</td>
      <td>HTML and CSS are the basic building blocks of web development. While HTML defines the structure/skeleton of a webpage, CSS helpd in styling it. </td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>Javascript</td>
      <td>It is the most versatile language of web development. Initially it was used only for front end development but due to its capability and popularity its versions are being used in backend development also. This gives developer a wonderful opportunity to develop the entire project without switching from one language to another.  </td>
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>React JS</td>
      <td>It is one of the most popular Javascript Library developed by Facebook. It is used to design mainly single page websites which provides best user experience.  </td>
    </tr>

    <tr>
      <th scope="row">4</th>
      <td>Node JS</td>
      <td>It is event driven Javascript Runtime. It is used in the backend development in MERN stack along with Express JS which is used as nodejs web application framework  </td>
    </tr>

    <tr>
      <th scope="row">5</th>
      <td>MongoDB</td>
      <td> It is an open source, non schema based (NoSQL), document oriented database. It enables the developer to work in faster way without imposing too many restrictions unlike SQL. Mongoose provides an abstraction layer to Mongo DB to connect and work with database in easier way.</td>
    </tr>
    
      
  
   
    
    
  </tbody>
</table>
        </div>
  )
}
