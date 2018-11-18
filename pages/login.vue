<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 col-md-5 col-sm-12 d-none d-md-block bg-left">
          <div class="row justify-content-md-center txt-copyright">
            <p class="text-muted copyright"><strong>Copyright © 2018 Arimac Lanka. All rights reserved.</strong></p>
          </div>
        </div>
        <div class="col-lg-4 col-md-7 col-sm-12 bg-right ">
          <div class="row justify-content-md-center">
            <div class="col-lg-9 col-md-8 col-sm-7 col-xs-6 box-container">
              <div class="row justify-content-md-center my-5">
                <b-img 
                  src="/logo-opus.jpg" 
                  fluid 
                  alt="OPUS" />
              </div>
              <div class="row justify-content-md-center my-4">
                <div class="form-group">
                  <ReusableInput 
                    v-model="login.email" 
                    active 
                    type="text" 
                    placeholder="email" 
                    @inputEvent="inputEvent"/>
                  <ReusableInput 
                    v-model="login.password" 
                    type="password" 
                    placeholder="password" 
                    @inputEvent="inputEvent"/>
                </div>
              </div>
              <div class="row justify-content-md-center">
                <Reusable-button 
                  :on-click="onLogin" 
                  :style="{'background-color':btnBgColor, color:btnColor}" 
                  label="Login" 
                  class="btn-login"/>
              </div>
              <div class="d-flex justify-content-center align-items-center d-block d-md-none fixed-bottom">
                <p class="text-muted copyright mx-3">Copyright © 2018 Arimac Lanka. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> 
</template>

<script>
import ReusableButton from "~/components/ReusableButton.vue";
import ReusableInput from "~/components/ReusableInput.vue";

export default {
  components: {
    ReusableButton,
    ReusableInput
  },
  data() {
    return {
      btnBgColor: "#e74132",
      btnColor: "#fff",
      login:{
        email:'',
        password:''  
      }
    };
  },
  methods: {

    onLogin: function() {
      this.$auth.loginWith('local',{
        data:{
          email: 'indika@arimaclanka.com',
          password: '123'
        }
      })
    },
    inputEvent(e) {
            // console.log(e);
    }
  }
};
</script>


<style>
* {
  /* outline: 0; */
  font-family: Montserrat, sans-serif;
}


body {
  /* overflow-y: hidden; */
}

.bg-left, .bg-right{
  height: 100vh;
}


.bg-left {
    background: url("/img-login.jpg");
    background-size: cover;
}

.txt-copyright{
  box-sizing: border-box;
  margin: 95vh 5vh 0 5vh;
}

.copyright{
    font-size: 0.8em;
    text-align: center;
    overflow: hidden;
}

.bg-right {
  background-color: #e6ebf1;
}

.box-container {
  margin: 50px;
  justify-content: center;
}


.form-group{
  width: 100%;
}


@media (max-width: 768px) {
  * {
    justify-content: center;
  }

}

@media (max-width: 480px) {
  * {
    justify-content: center;
  }


}
</style>
