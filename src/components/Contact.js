import React from 'react'

function Contact() {
    return (
        <div>


<div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">
 
  
  
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <div class="view">
        <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
          alt="First slide" height="400px"/>
        <div class="mask rgba-black-light"></div>
      </div>
      <div class="carousel-caption contact-mask">
        <h3 class="h3-responsive ">Contact Us</h3>
        <p>We are here to provide you with more information, answer any question you may have a nd create an effective solution to you legal problems</p>
      </div>
    </div>
    
   
  </div>
  
  
  
</div>

<div className="container get_in_touch">
    <div className="row">
        <div className="col-8">
            <h4>GET IN TOUCH</h4>
            <p>Please fill this form to get in touch</p>

           
<form class="text-center border border-light p-5" action="#!">

    <p class="h4 mb-4">Contact us</p>

    
    <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Name"/>

    
    <input type="email" id="defaultContactFormEmail" class="form-control mb-4" placeholder="E-mail"/>

    
    <label>Subject</label>
    <select class="browser-default custom-select mb-4">
        <option value="" disabled>Choose option</option>
        <option value="1" selected>Feedback</option>
        <option value="2">Report a bug</option>
        <option value="3">Feature request</option>
        <option value="4">Feature request</option>
    </select>

    
    <div class="form-group">
        <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message"></textarea>
    </div>

   
    

    
    <button class="btn btn-info btn-block" type="submit">Send</button>

</form>

        </div>
        <div className="col-4"><h5>Connect with us:</h5>
        <p>For support or any questions: <br/>
        Email us at richard@mail.com</p> <br/> <br/>
        <p> <span className="address">Richard Chapman, ESQ USA</span> <br/> 20 Commerce Dr <br/>
         Cranford, NJ 07016 <br/> USA</p> <br/> <br/>
         <p><span className="call_us">Call us </span><br/> 4848393939393 <br/>
         0948444646472 </p>
         
        
        </div>

       
        
    </div>
</div>

            
        </div>
    )
}

export default Contact;
