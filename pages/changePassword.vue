<template>
    <div class="bg-opus">
        <Header></Header>
        <div class="container center-justify-everything mt-5">
            <b-card class="my-3 card--width">
                <div class="p-4">
                    <p class="blockquote text-left p--opus-heading-color">Change Password</p>
                    <div class="profile-hl"></div>
                </div>
                <div class="px-4">
                    <!-- <label>Name:</label> -->
                    <ReusableInput v-model="profile.name" placeholder="Current password" class="profile-input"></ReusableInput>
                    <!-- <label>Contact Number:</label> -->
                    <ReusableInput v-model="profile.contactNumber" placeholder="New password" class="profile-input"></ReusableInput>
                    <ReusableInput v-model="profile.contactNumber" placeholder="New password" class="profile-input"></ReusableInput>
                    <div class="pt-4">
                        <ReusableButton label="Save" @click="onSave"></ReusableButton>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>

<script>
import ReusableInput from '~/components/ReusableInput.vue'
import ReusableButton from '~/components/ReusableButton.vue'
import Header from '~/components/Header.vue'
export default {
    data(){
        return{
            profile:{
                name:"",
                contactNumber:""
            }
        }
    },
    components:{
        ReusableInput,
        ReusableButton,
        Header
    },
    methods:{
        onSave(){
            console.log("Save Clicked")
        }
    }
}
</script>

<style>

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

.card--width{
    width: 24em;
}
</style>
