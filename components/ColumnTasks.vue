<template>

<div>
    <div class="py-3">
    <blockquote class="blockquote text-left bq">Tasks</blockquote>
    <footer class="blockquote-footer bqf">Lorem ipsum dolor sit amet consectetur</footer>
    </div>

    
        <div class="pb-4 pt-2">
            <ModalTaskCardAdd></ModalTaskCardAdd>
        </div>
        <div class="margin-top-from-btn">
            <CardFlip v-for="task in tasks" :key="task.task_id" :task="task" class="mb-4"></CardFlip>
        </div>
        <b-button>Button</b-button>
                 
</div>

</template>

<script>
import ReusableButton from '~/components/ReusableButton.vue'
import CardFlip from '~/components/CardFlip.vue'
import ModalTaskCardAdd from '~/components/ModalTaskCardAdd.vue'
import { mapState } from 'vuex'

export default {
    data(){
        return{
            btnBgColor: '#fff',
            btnColor: '#000',
            bgColor: '#34c0dd',
            modalShow: false,
        }
    },
    components: {
        CardFlip,
        ReusableButton,
        ModalTaskCardAdd

    },

    computed: {
        ...mapState({
            tasks: 'incompleteTasks'
        })
    },

    methods: {
        doSomething: function () {
            console.log("Added New Card")
        }
    },
    // async task(){
    //     let { data: tasks } = await this.$axios.$get( 'webapi/tasks/completed' )
    //     return tasks
    // },
    // created(){
    //     // this.$axios.get('http://opus-api.devops.arimac.xyz/webapi/tasks')
    //     data:{
    //     let tasks =  this.$axios.$get( 'http://opus-api.devops.arimac.xyz/webapi/tasks' )

    //     }
    // }
}


</script>

<style scoped>

.blockquote {
    margin-bottom: 0rem;
    font-size: 1.3rem;
    font-weight: bold;
}


.bqf{
    font-size: 19px;
}

/* .btn-add-new-task{
    border-radius: 0.25rem;
    box-shadow: 0 0.05rem 0.2rem 0 rgba(0, 0, 0, 0.2);
    width: 100%;
    background-color: #ffffff;
    color:#80818cfa;
} */

</style>
