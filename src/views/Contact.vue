<template>
  <main class="container-fluid">
      <div class="container">
        <h2 class="d-flex justify-content-center text-light" id="reachme">Reach Me</h2>
      </div>
      <div class="row align-content-center">
        <div class="col">
          <div class="box d-flex justify-content-center">
            <div class="text">
              <h2 id="link"><i class="fab fa-github"></i> Links</h2>
              <span class="text-black">GitHub: </span>
              <a href="https://github.com/Muakhir" target="_blank"><i class="fab fa-github"></i></a><br>
              <span class="text-black">Twitter/X: </span>
              <a href="https://twitter.com/unbarredbow6173" target="_blank"><i class="fab fa-twitter"></i></a><br>
          </div>
          </div>
          <div class="col ">

            <div class="box">
              <div class="text">

                <h2><i class="bi bi-phone"></i> Via Cell</h2>
                <p class="text-black">0792543014</p>
              </div>
              </div>
              <div class="box">
                <div class="text">

                  <h2><i class="bi bi-envelope-at"></i> Via Email</h2>
                  <a href="mailto:almuakhirjones@gmail.com?" target="_blank" class="text-black">almuakhirjones@gmail.com</a>
                </div>
              </div>
          </div>
          </div>
              <div class="col d-flex justify-content-end">
              <div class="contactform">
                <form @submit.prevent="submitform" action="https://formspree.io/f/xrgnaaaa" method="post" ref="form">
                    <h2 id="ch2">Contact</h2>
                    <div class="inputbox"> 
                      <h6>Name</h6>
                          <input v-model="name" type="text" name="Name" placeholder="Enter Firstname">
                         
                    </div>
                    <div class="inputbox">
                      <h6>Surname</h6>
                      <input v-model="surname" type="text" name="Surname" placeholder="Enter Lastname">
                      
                </div>
                <div class="inputbox">
                  <h6>Email</h6>
                  <input v-model="email" type="text" name="Email" placeholder="Email@gmail.com">
                  
                </div>
                <div class="inputbox">
                  <h6  id="type">Type your Message...</h6>
                  <textarea v-model="message" placeholder="Don't BE SHY 🙄 "></textarea>
                </div>
                <div class="inputbox">
                  <button @click="submit" class="btn" >Submit</button>
                </div>
                </form>
              </div>
              </div>
          </div>
    </main>
</template>

<script>
import Swal from 'sweetalert2';

export default {
name: 'contatVue',
data() {
  return {
    name: '',
    surname: '',
    email: '',
    message: ''
  };
},
methods: {
  async submitform() {
    if (!this.name.trim() || !this.surname.trim() || !this.email.trim() || !this.message.trim()) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your info!',
      });
      return;
    }
    this.$refs.form.submit();
  }
}
};
</script>


<style scoped>
main{
  background-image: url('https://iili.io/JX8snxS.png');
  color: rgb(255, 255, 255);
}
.box {
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: #635d5d90;
  padding: 5px;
  border-radius: 10px;
  margin-bottom: 10px;
}
.contactform {
  background-color: #635d5d90;
  border-radius: 10px;
  width: 300px;
  margin-bottom: 50px;
}
.inputbox {
  padding: 10px;
}
input, textarea {
  padding: 5px;
  border:1px solid #fff;
  border-radius: 15px;
  color: #F6B342;
  text-align: center;
}
input:hover{
  background-color: #635d5d90;
}
input:hover::placeholder{
  background-color: #635d5d90;
  color: #F6B342;
}
.btn:hover{
  background-color: #635d5d90;
  color: #F6B342;
}
.btn{
  background-color: #fff;
}
textarea:hover{
  background-color: #545454ac;
}
textarea:hover::placeholder{
  color: #F6B342;
}
::placeholder{
  color:#080808;
}
i{
  color: black;
}
</style>
