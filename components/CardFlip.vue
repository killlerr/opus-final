<template>
    <div>
        <div class="flip-card mb-4">
            <div class="flip-card-inner">
                <!-- Card-front -->
                <div class="flip-card-front">
                    <div class="">
                        <b-card class="card-front fit-content" @click="onAnswer">
                            <div class="card-content">
                            <div class="row card-header no-gutters">
                                <div class="col-2 text-right">
                                <div class="pr-3 pt-3">
                                    <!-- <p><fa :icon="fas.faCommentAlt" v-bind:style="{color:bgColor}" class="fa-lg"/></p> -->
                                </div>
                                </div>
                            <div class="col-10 text-left">
                                <div class="pl-3 pr-3 pb-3 pt-2">
                                <div class="row no-gutters task-name">
                                    {{task.task_name}}
                                </div>
                                <div class="row no-gutters project-name">
                                    {{projectName}} 
                                </div>                   
                                </div>                  
                            </div>
                            </div>
                            <div class="row card-footer no-gutters" v-bind:style="{'background-color':bgColor}">
                                <div class="col-6 text-left">
                                <div class="d-flex fex-column">
                                <div class="pt-1 pr-2">
                                <!-- <fa :icon="fas.faExclamationTriangle" style="{color: #ffffff}" class="fa-sm" /> -->
                                </div>

                                <div class="pl-2 days-left pt-1">{{daysLeft}}</div>
                                </div>
                                </div>
                                <div class="col-6 text-right due-date pt-2">
                                {{dueDate}}
                                </div>
                            </div>
                            </div>
                        </b-card>
                    </div>
                </div>
                <!-- Card-back -->
                <div class="flip-card-back">
                    <div>
                        <div class="">
                            <b-card class="card-back" v-bind:style="{'background-color':bgColor}" @click="onNextQuestion">
                                <div class="col">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="pt-4 pl-1 txt-complete">
                                            <h4>Completed Card</h4>
                                            <p class="info-complete">Project Number Two Lorem ip sumdolor sit amet,Project Number Two Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="center-switch">
                                            <no-ssr>
                                                <switches v-model="enabled"></switches>
                                            </no-ssr>
                                        </div>                  
                                    </div>
                                </div>
                                </div>
                            </b-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Switches from 'vue-switches';
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default {
    props:{
        task:{
            type: Object,
            default: { task_name: 'test'}
        }
    },
    data(){
        return{
            bgColor: '#ff5a4e',
            isToggled: false,
            enabled: false,
            taskName: 'Task default‑ Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            projectName: 'default Lorem ipsum dolor sit amet',
            dueDate: 'June 15th 2016',
            daysLeft: '2 days left'
        }
    },
    methods: {
            onNextQuestion() {
                this.$emit('confirmed');
            },
            onAnswer(){
            this.$emit('answered');
            }
        },
    // computed: {
    //   fas () {
    //      return fas
    //   },
    //   faGithub () {
    //      return faGithub
    //   }
    // }
}
</script>


<style>

.flip-card {
  background-color: transparent;
  width: 100%;
  height: 9.99rem;
  perspective: 1000px;
  border-radius: 0.25rem;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  /* height: 100%; */
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 0.25rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  z-index: 2;
}

.flip-card-back {
  transform: rotateY(180deg);
  z-index: 1;
}

/* Card-back */

.card-body {
    width: 100%;
    height: 100%;
    padding: 0px;
}

.card-back{

    width: 100%;
    border-radius: 0.25rem;
    box-shadow: 0 0.05rem 0.2rem 0 rgba(0, 0, 0, 0.2);
    word-wrap: break-word;
    height: 9.99rem;
}

.txt-complete{
    color: #ffffff;
}

.info-complete{
    font-size: 10px;
    color: #ffffffa8;
    word-wrap: break-word;
}

.center-switch{
    display: flex;
    margin: 50px;
    justify-content: center;
}

/* Switch */
  .vue-switcher-theme--default.vue-switcher-color--default div {
    background-color: #fff; }
    .vue-switcher-theme--default.vue-switcher-color--default div:after {
      background-color: #ff5a4e; }
  .vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div {
    background-color: #fff; }
    .vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div:after {
      background-color: #ff5a4e;
      left: 1rem;}

  .vue-switcher div {
    height: 2.8rem;
    width: 10rem;
    box-shadow: 0 0.05rem 0.2rem 0 rgba(0, 0, 0, 0.2); }
    .vue-switcher div:after {
      height: 2.4rem;
      width: 6.6rem;
      top: 0.2rem;
      left: 4rem;
      margin-left: -0.8rem;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1); }
/* Switch */
/* Card-back */


/* Card-front */
.card-body {
    width: 100%;
    height: 100%;

    padding: 0px;
}

.card-front{

    width: 100%;
    border-radius: 0.25rem;
    box-shadow: 0 0.05rem 0.2rem 0 rgba(0, 0, 0, 0.2);
    word-wrap: break-word;
    border: 0;
}

.card-header{
    color: #80818cfa;
    height: 6.66rem;
}

.card-footer{
    color: #ffffff;
    height: 3.5rem;
}

/*Text styling*/

.task-name{
    /* font-weight: 600; */
    font-size: 0.938em;
    line-height: normal;

}

.project-name{
  font-weight: bold;
  margin-top: 1em;
  color: #b8b8bb;
  font-size: 0.688em;
}

.days-left{
  font-size: 1.125em;
}

.due-date{
  font-size: 10px;
  font-weight: lighter;
}

/*Text styling*/
/* Card-front */
</style>

