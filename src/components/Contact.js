import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


export default function Contact() {

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
        navigate('/')
    }  // eslint-disable-next-line
    // else
    //     showProfile();
}, [])
  return (
    <div className="card text-bg-light mb-3 my-3" style={{width: "30rem"}}>
  <div className="card-header"><h5>Contact Me</h5></div>
  <div className="card-body">
    <h5 className="card-title">Address</h5>
    <p className="card-text">Room no 514, RAPDRP-A/IT Unit, Shakti Bhawan Extension, Ashok Marg, Lucknow (UP) - 226001</p>
    <h5 className="card-title">Mobile No</h5>
    <p className="card-text">9453234077</p>
    <h5 className="card-title">Email Address</h5>
    <p className="card-text">ae.athwani@gmail.com</p>
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
