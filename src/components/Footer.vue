<template>
    <footer class="fancy-footer">
      <div class="container">
        <div class="row">
          <div class="col">
            <p class="copyright">&copy; {{ currentYear }} Millennium Industries. All rights reserved.</p>
          </div>
          <div class="col footer-links">
            <p><SPAN><i class="fas fa-star" @mouseover="iconHover = 'star'" @mouseleave="iconHover = ''"></i></SPAN> Did you know? Drawing cards is key in Yu-Gi-Oh! Keep your deck balanced!</p>
            <p><span><i class="fas fa-magic" @mouseover="iconHover = 'magic'" @mouseleave="iconHover = ''"></i></span> Tip: Set your Trap cards strategically to surprise your opponent!</p>
            <p><span><i class="fas fa-shield-alt" @mouseover="iconHover = 'shield-alt'" @mouseleave="iconHover = ''"></i></span> Protect your Life Points! Use monsters with high DEF to defend!</p>
            <p><span><i class="fas fa-fire" @mouseover="iconHover = 'fire'" @mouseleave="iconHover = ''"></i></span> Attack with powerful monsters! Make sure to check their ATK stats!</p>
          </div>
          <div class="col">
            <div class="col">
              <h2>Contact Us</h2>
              <p>We'd love to hear from you!</p>
            </div>
            <div class="col">
              <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-f" @mouseover="iconHover = 'facebook-f'" @mouseleave="iconHover = ''"></i></a>
                <a href="#"><i class="fab fa-twitter" @mouseover="iconHover = 'twitter'" @mouseleave="iconHover = ''"></i></a>
                <a href="#"><i class="fab fa-instagram" @mouseover="iconHover = 'instagram'" @mouseleave="iconHover = ''"></i></a>
                <a href="#"><i class="fab fa-linkedin-in" @mouseover="iconHover = 'linkedin-in'" @mouseleave="iconHover = ''"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterVue",
    data() {
      return {
        currentYear: new Date().getFullYear(),
        iconHover: ''
      };
    }
  }
  </script>
  
  <style scoped>
  .fancy-footer {
    background-color: #ffffff;
    color: #000000;
    padding: 10px 0;
    text-align: center;
  }
  
  .fancy-footer .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .fancy-footer .row {
    justify-content: space-between;
  }
  
  .fancy-footer .col {
    margin: 10px;
  }
  
  .fancy-footer p {
    margin-bottom: 10px;
  }
  
  .fancy-footer .footer-links p {
    color: #000000;
    margin: 0 10px;
    display: flex;
    align-items: center;
  }
  
  .fancy-footer .footer-links i:hover {
    color: #36cac0;
  }
  
  .fancy-footer .social-icons a {
    color: #000000;
    text-decoration: none;
    margin: 0 10px;
    font-size: 24px;
  }
  
  .fancy-footer .social-icons a:hover {
    color: #ca3679;
  }
  </style>
  
  
  
  
  
  