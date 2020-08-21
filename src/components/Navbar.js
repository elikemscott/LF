import React from 'react'

 function Navbar() {
    return (
        <div>
            
<nav class="mb-1 navbar navbar-expand-lg navbar-dark blue-gradient">
  <a class="navbar-brand" href="#"></a> 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Practice Areas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contacts</a>
      </li>
      
    </ul>
    <ul class="navbar-nav ml-auto nav-flex-icons">
    <li class="nav-item">
        <a class="nav-link waves-effect waves-light">
          <i class="fab fa-facebook"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link waves-effect waves-light">
          <i class="fab fa-twitter"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link waves-effect waves-light">
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
     
     
    </ul>
  </div>
</nav>

        </div>
    )
}

export default Navbar;
