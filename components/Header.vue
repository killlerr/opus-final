<template>
  <div>
    <b-navbar toggleable="false" type="dark" variant="dark" class="header py-2">
      <b-navbar-brand href="homeUser"><img src="logo-opus-nav.jpg" class="logo-opus ml-4" alt="Responsive image"> </b-navbar-brand>
      
    
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
            <!-- <b-nav-item href="messageArea" class="p-0"><fa :icon="fas.faComments"  :style="{ color: '' }" class="fa-lg m-3"/></b-nav-item> -->

            <b-nav-item-dropdown right class="p-0">
              <!-- Using button-content slot -->
              <template slot="button-content">
                <!-- profile -->
                <div class="container d-flex justify-content-center d-none">
                  <b-nav-item href="profile" class="p-0">
                    <div class="row no-gutters">
                      <div class="col-6">
                        <img src="img-profile-picture.jpeg" class="img-circle img-profile-nav mr-4" alt="Cinque Terre">
                      </div>
                       <div class="col-6"> <!--col-6 flex-column name-box d-none d-sm-block -->
                        <div class="text-light mx-2 user-name">{{userName}}</div>
                        <div class="text-secondary mx-2 user-power">{{userPower}}</div>
                      </div>
                    </div>
                  </b-nav-item>         
                </div>
                <!-- profile -->
              </template>
              <b-dropdown-item href="profile">Profile</b-dropdown-item>
              <b-dropdown-item href="changePassword">Change Password</b-dropdown-item>
              <b-dropdown-item href="/">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default {
  data() {
    return {
      userName: "Iikai",
      userPower: "User"
    };
  },
  computed: {
    fas() {
      return fas;
    },
    faGithub() {
      return faGithub;
    }
  }
};
</script>


<style>
.header {
  padding: 0;
  padding-top: 0.1rem;
  background-color: #2a2e43 !important;
  width: 100%;
}

.logo-opus {
  height: 2.8rem;
  width: auto;
}

.img-profile-nav {
  height: 3rem;
  width: auto;
  align-content: center;
  border-radius: 50%;
  margin-bottom: 5px;
}



/* Display none carrot */
.dropdown-toggle::after {
    display:none;
}

/* Display none carrot */


/* Profile details */

.user-name{
  font-size: 16px;
  font-weight: bolder;
  text-align:top;
}

.user-power{
  font-size: 14px;
  font-weight: bold
}

.name-box{
  margin-bottom: 4px;
  vertical-align: top
}

.p-0 .nav-link{
  padding: 0 !important;
}

/* Profile details */


.navbar-dark .navbar-toggler {
    border-width: 0;
}

.header .navbar-nav{
  flex-direction: row; 
}

.header .dropdown-menu{
  position: absolute;
  background-color: #2a2e43;
  border: 0;
  border-radius: 0;
}


.header .dropdown-item{
  color: #a2a2ab;
}

.header .dropdown-item:hover{
  color: #2a2e43;
}


</style>
