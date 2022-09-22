import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Contact() {
  const [profile, setProfile] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
        navigate('/')
    }  // eslint-disable-next-line
    else
        showProfile();
}, [])

const showProfile = async () => {
  const response = await axios.get('http://localhost:8080/api/user/getuser',
    {
      headers: {
        'auth-token': localStorage.getItem('token')
      },
    });
  //console.log(response);
  setProfile({ "name": response.data.name, "age": response.data.age, "mobileno": response.data.mobileno, "email": response.data.email, "address": response.data.address,"about": response.data.about   });


}
  return (
    <div className="card text-bg-light mb-3 my-3" style={{width: "30rem"}}>
  <div className="card-header"><h5>Contact Me</h5></div>
  <div className="card-body">
  <h5 className="card-title">Name</h5>
    <p className="card-text">{profile.name}</p>
    <h5 className="card-title">Address</h5>
    <p className="card-text">{profile.address}</p>
    <h5 className="card-title">Mobile No</h5>
    <p className="card-text">{profile.mobileno}</p>
    <h5 className="card-title">Email Address</h5>
    <p className="card-text">{profile.email}</p>
    <h5 className="card-title">Resume</h5>
    <p className="card-text">For more details you can download my resume</p>
    <p className="card-text"><a
        href="https://shriresume.com/sample-corporate-resume.pdf"
        download
      >
        Click to download resume
      </a></p>
  </div>
  </div>
  )
}
