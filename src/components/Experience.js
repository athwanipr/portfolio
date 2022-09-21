import React from 'react'

export default function Experience() {
  return (
    <div>
        <nav class="navbar navbar-light bg-light my-2">
  <div class="container-fluid">
    
    {/* <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"> */}
    
    <h5>Some of the major projects done in UPPCL</h5>
   
  </div>
</nav>
        <table className="table table-striped my-2 table-bordered">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Project Name</th>
      <th scope="col">Description</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Jhatpat Connection Portal</td>
      <td>This portal is being used by all the applicants who want to aplly for new electricity connection across the state of Uttar Pradesh. Applicant can track her application at any point</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Whatsapp Business Project</td>
      <td>Discoms wise whatsapp business accounts have been established to provide 24*7 services to electricity consumers. They can receive their bill copy in pdf form and register complaint regarding any service through this platform </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Non RAPDRP Helpdesk</td>
      <td>A centralized Helpdesk is established in SLDC, Gomtinagar to cater the queries of UPPCL employees working in Non RAPDRP area. </td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>UIDAM</td>
      <td>This application intends to provide a unique identity to employees so that they can access all departmental application through single id and password</td>
    </tr>
    
    
  </tbody>
</table>
        </div>
  )
}
