import React, { useEffect, useState } from 'react'
import myphoto from '../image/myphoto.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function About() {
  const [profile, setProfile] = useState("");
  const [job, setJob] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/')
    } // eslint-disable-next-line
    else
        showProfile();
        showJob();
  }, [])

  const showProfile = async () => {
    const response = await axios.get('http://localhost:8080/api/user/getuser',
      {
        headers: {
          'auth-token': localStorage.getItem('token')
        },
      });
    //console.log(response);
    setProfile({ "name": response.data.name, "age": response.data.age, "mobileno": response.data.mobileno, "email": response.data.email, "about": response.data.about   });
  }

  const showJob = async () => {
    const response = await axios.get('http://localhost:8080/api/job/getjobdetails',
      {
        headers: {
          'auth-token': localStorage.getItem('token')
        },
      });
    //console.log(response);
    setJob({ "company": response.data.company , "jobtitle":response.data.jobtitle, "jobduration":response.data.jobduration });
  }

  return (
    <div className="container mx-2">

      <nav class="navbar navbar-light bg-light my-2">
        <div class="container-fluid">

          {/* <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"> */}

          <h5>Here is brief introduction about me</h5>

        </div>
      </nav>
      <div className="card my-2" style={{ width: "60rem" }}>
        <img src={myphoto} className="card-img-top" alt="myphoto" style={{ width: "20vw", height: "40vh" }} />
        <div className="card-body">
          <p className="card-text">
           {profile.about}
          </p>
        <h5>My Job Details are as below-</h5>
          <table class="table table-striped table-bordered">
            <thead>
              <tr>

                <th scope="col">Name</th>
                <th scope="col">{profile.name}</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Company</th>
                <td>{job.company}</td>
              </tr>

              <tr>
                <th scope="row">Designation</th>
                <td>{job.jobtitle}</td>
              </tr>

              <tr>
                <th scope="row">Duration</th>
                <td>{job.jobduration}</td>
              </tr>


            </tbody>
          </table>

          <p className="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae inventore ut pariatur laboriosam expedita accusamus accusantium, dolor aperiam minima atque commodi eius quasi similique, error porro illum nostrum facere. Quisquam accusantium id distinctio suscipit similique asperiores vitae dolores, perferendis, rerum autem quidem ab, debitis enim dolore. Adipisci voluptatem voluptas vel pariatur explicabo inventore suscipit voluptatum corrupti, officiis reprehenderit, sequi maiores delectus sunt minus ab aperiam at tenetur fugiat quis quas excepturi eos. Laborum illo voluptatum consequuntur nam possimus quisquam quae ipsam animi ex, nisi ullam culpa cumque, quaerat, odio quo dicta eos necessitatibus.
          </p>

          <p className="card-text"> A ipsam porro quas nemo sed fugit illo nulla doloremque dolorem deleniti sit quia odio soluta alias, quisquam, veniam repellat consectetur inventore. Deserunt ab maxime magnam ducimus minus architecto. Exercitationem cumque odio rerum maxime voluptatibus porro eveniet suscipit! Eum, atque? </p>
        </div>
      </div>
    </div>
  )
}
