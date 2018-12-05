<template>
    <div class="bg-opus">
        <no-ssr>
            <Header></Header>
        </no-ssr>
        <div class="container">
            <div class="row profile-content py-5">
                <div class="col-md-6">
                    <b-card class="my-3 card--height">
                        <div class="card--header p-3">
                            <p class="blockquote text-left p--opus-heading-color">Profile</p>
                            <div class="profile-hl"></div>
                        </div>
                        <div class="center-justify-everything py-4">
                            <img :src="profileInfo.profile_pic" class="img-profile" alt="Cinque Terre">
                            <div class="camera-icon__background">
                            </div>
                            <!-- <fa :icon="fas.faCamera"  :style="{ color: '#a2a2ab' }" class="fa-lg m-3 camera-icon"/> -->
                        </div>
                    </b-card>
                </div>
                <div class="col-md-6">
                    <b-card class="my-3 card--height">
                        <div class="card--header p-3">
                            <p class="blockquote text-left p--opus-heading-color">Details</p>
                            <!-- <h5>Deatils</h5> -->
                            <div class="profile-hl"></div>
                        </div>
                        <div class="px-4">
                            <!-- <label>Name:</label> -->
                            <ReusableInput v-model="profile.name" placeholder="Enter your name" class="profile-input"></ReusableInput>
                            <!-- <label>Contact Number:</label> -->
                            <ReusableInput v-model="profile.contactNumber" placeholder="Your contact Number" class="profile-input"></ReusableInput>
                            <div class="pt-4">
                                <ReusableButton label="Save Changes" @click="onSave()"></ReusableButton>
                                <button @click="onSave()">button</button>
                            </div>
                        </div>
                    </b-card>
                </div>
            </div>                
        </div> 
    </div>
</template>

<script>
import ReusableInput from '~/components/ReusableInput.vue'
import ReusableButton from '~/components/ReusableButton.vue'
import Header from '~/components/Header.vue'
import {mapState} from 'vuex'
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default {
    data(){
        return{
            // params: this.$auth.user.user_id
            profile:{
                name: this.$auth.user.name,
                contactNumber: this.$auth.user.contact_no
            },
        }
    },
    components:{
        ReusableInput,
        ReusableButton,
        Header
    },
    methods:{
        async onSave(){
            console.log("Save Clicked")
            await this.$store.dispatch({
                type: 'saveProfileInfo', 
                name: 'Indika'
                
            //     profile);
            // this.profile = {
            //     name :  'Indika',
            //     contact_no : ''
            })
        }
    },
    async fetch({store}){
        await store.dispatch('fetchProfileInfo')
    },
    computed:{
        ...mapState({
            profileInfo : 'profileInfo'
        })
    }
}
</script>

<style>

.camera-icon__background{
    background-color: rgba(42,46,67,0.5);;
    height: 11.8rem;
    width: 11.7rem;
    z-index: 10;
    position: absolute;
    border-radius: 50%;
    /* clip: rect(146px,200px,200px,0px); */
    /* display: none; */
}

.camera-icon{
    position: absolute;
    right: 15.1rem;
    bottom: 4.5rem;
}
.card--height{
    height: 24rem;
}
.card--header .blockquote{
    margin-bottom: 0.5rem;
    color: #495057;
    font-weight: 600;
}

.img-profile {
  height: 12rem;
  width: 12rem;
  align-content: center;
  border-radius: 50%;
  margin-bottom: 5px;
  display: block;
  border: 0.2rem solid #a2a2ab8c;
}

.bg-opus{
    background-color: #e6ebf1;
    height: 100vh; 
}

.profile-input input{
    background-color: #e8e8e8;
}

.center-justify-everything{
    display: flex;
    justify-content: center;
    align-content: center;
}

.profile-hl{
    border-bottom: 0.1rem solid #2a2e43;
    width: 100%;
}

</style>
