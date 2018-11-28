<template>
  <p>test</p>
</template>
<template>
    <div>
        <div class="container-fluid py-3 px-3">
            <div class="row">
                <div class="col-lg-7">
                    <div class="pr-1">
                        <b-card>
                            <div class="row">
                                <div class="col-12">
                                  <div class="p-3">
                                  <blockquote class="blockquote text-left">
                                    <p class="mb-0">What happen Today Attendance</p>
                                    <footer class="blockquote-footer">Lorem ipsum dolor sit amet, consectetur</footer>
                                  </blockquote>
                                  </div>
                                </div>
                            </div>
                            <div class="container-fluid pl-3 pr-3">

                                <div class="row">
                                <div class="col-md-3">
                                    <div class="pb-1">
                                      <div class="pt-3">
                                        <TodayI></TodayI>
                                      </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="pb-3 pt-3">
                                        <b-form-select id="exampleInput3"
                                        :options="attendenceCatagory"
                                        required
                                        v-model="form.attendenceCatagory"
                                        class="attendence-slect">
                                        </b-form-select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="pb-3 pt-3">
                                        <Reusable-button label="Set" class="btn-login--padding" :onClick="doSomething" v-bind:style="{'background-color':btnBgColor, color:btnColor}"></Reusable-button>
                                    </div>
                                </div>
                                </div>

                            </div>
                        </b-card>                     
                    </div>
                    <div class="pt-5 pr-1">
                        <b-card>
                            <div class="p-3">
                                <blockquote class="blockquote text-left">
                                    <p class="mb-0">Urgent message</p>
                                    <footer class="blockquote-footer">Lorem ipsum dolor sit amet, consectetur</footer>
                                </blockquote>                              
                            </div>
                            <div class="p-3">
                                <div class="form-group">
                                    <textarea class="type-here form-control rounded-0" id="exampleFormControlTextarea1" rows="5" placeholder="Type here"></textarea>
                                </div>
                            </div>
                        </b-card>
                    </div>
                </div>
                <div class="col-lg-5">
                    <!-- <div class="pl-1 pr-5">
                        <div class="row">
                            <div class="col-6">
                                <div>
                                    <b-card class="p-3">
                                        <h2>{{ selectedDate }}</h2>
                                    </b-card>                                     
                                </div>
                            </div>
                            <div class="col-6">
                                <div>
                                    <b-card class="p-3">
                                        <h2>{{ selectedDate }}</h2>
                                    </b-card>                                     
                                </div>
                            </div>
                        </div>
                    
                    </div> -->
                    <div class="pl-1">
                        <!-- <b-card> -->
                            <div id="app">
                                <!-- <custom-datepicker 
                                /> -->
                                <!-- <EditedDatepicker></EditedDatepicker> -->
                            </div>    
                        <!-- </b-card> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import ReusableButton from "~/components/ReusableButton.vue";
import TodayI from "~/components/TodayI.vue"
// import EditedDatepicker from "~/components/EditedDatepicker"

// import CustomDatepicker from 'vue-custom-datepicker'
// import moment from 'moment'
export default {
    data() {
        return {
            btnBgColor: "#e74132",
            btnColor: "#fff",
            form:{
                attendenceCatagory: null
            },
            attendenceCatagory: [
                { text: 'Select an attendence catagory', value: null },
                'Present', 'Absent', 'Working from home'
            ],
      show: true,
    //   selectedDate: moment().format('YYYY-MM-DD'),
    //   wrapperStyles: { width: '325px' },
    //   primaryColor: "#0918bc",
    //   limits: {
    //     start: '2017-04-02',
    //     end: '2017-05-22'
    //   }
        };
    },
    components:{
        ReusableButton,
        TodayI,
        // 'custom-datepicker': CustomDatepicker,
        // EditedDatepicker
    },
    methods: {
        doSomething: function() {
            console.log("LogIn Clicked");
            this.$router.push("homeUser");
        },
        setDate(date) {
            this.selectedDate = date
        }        
    }
}
</script>


<style>

/* .drop-middle btn-group > .btn:first-child {
    width: 100%;
} */

.dropdown-top, .btn-group > .btn:first-child {
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    margin: 2px;
    border-radius: 0;
}

.attendence-slect, .custom-select{
    height: calc(2.25rem + 16px);
    border-radius: 0;
}

.btn-login--padding{
    padding: 17px;
}

.type-here{
    background-color: #ecedf3e0
 
}
</style>
