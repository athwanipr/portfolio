import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Recommendation() {

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
    
    <h5>Recommendations Received</h5>
   
  </div>
</nav>

<div class="container-fluid">
<h5>Harry</h5>
<h6>Famous as Code With Harry</h6>
<p>Harry is helping lakhs of learners through his easy teaching and web development skills</p>
<p><h6>Recommendation: </h6>He recommends to start coding with basic learning first. He asks to follow each step with him on our own</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa illo officiis vitae, ut reiciendis minus eum ipsa aliquam magni, numquam sequi facilis obcaecati consequatur cumque a esse dolorem, aspernatur consequuntur? Quisquam porro labore ea, iusto iure vero? Aspernatur molestiae unde doloremque! Beatae possimus mollitia neque eligendi perspiciatis voluptate debitis quis quae commodi, delectus rem iure, dicta et. Ex exercitationem ea ipsa asperiores molestias quia voluptatem minus doloribus adipisci, quod sit possimus unde nesciunt corporis nihil eligendi quibusdam mollitia libero aspernatur vero voluptate repudiandae aperiam vel! Nulla laudantium eos, amet eveniet nisi doloremque sit beatae, hic exercitationem voluptatibus, sint itaque.</p>

</div>
        </div>
  )
}
