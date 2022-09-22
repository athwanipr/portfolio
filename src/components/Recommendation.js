import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Recommendation() {
  const [recommendation, setRecommendation] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
        navigate('/')
    }  // eslint-disable-next-line
    else
        showRecommendation();
}, []);

const showRecommendation = async () => {
  const response = await axios.get('http://localhost:8080/api/recommendation/getrecommendation',
    {
      headers: {
        'auth-token': localStorage.getItem('token')
      },
    });
  //console.log(response);
  setRecommendation({ "refereeName": response.data.refereeName,"refereeCompany" :response.data.refereeCompany, "refereeJobtitle": response.data.refereeJobtitle, "referralDate":response.data.referralDate, "referralText":response.data.referralText});
 
  //console.log(recommendation);

}
  return (
    <div>
        <nav class="navbar navbar-light bg-light my-2">
  <div class="container-fluid">
    
    {/* <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"> */}
    
    <h5>Recommendations Received</h5>
   
  </div>
</nav>

<div class="container-fluid">
<h5>{recommendation.refereeName}</h5>
<h6>Working as {recommendation.refereeJobtitle} in {recommendation.refereeCompany} Company</h6>
<p>Harry is helping lakhs of learners through his easy teaching and web development skills</p>
<p><h6>Recommendation: </h6>{recommendation.referralText}</p>
<p><h6>Date: </h6>{recommendation.referralDate}</p>


</div>
        </div>
  )
}
