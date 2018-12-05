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
            <CardFlip v-for="incompleteTask in incompleteTasks" :key="incompleteTask.task_id" :task="incompleteTask" class="mb-4"></CardFlip>
        </div>
                 
</div>

</template>

<script>
import ReusableButton from '~/components/ReusableButton.vue'
import CardFlip from '~/components/CardFlip.vue'
import ModalTaskCardAdd from '~/components/ModalTaskCardAdd.vue'
import { mapState, mapGetters } from 'vuex'


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
        // ...mapState({
        //     incompleteTasks: 'incompleteTasks'
        // }),
        ...mapGetters({
            incompleteTasks: 'availableTasks'
        }),
        // incompleteTasks(){
        //     return this.$store.getters.availableTasks
        // }
        // incompleteTasks(){
        //     return this.$store.state.incompleteTasks
        // }
        
    },
    // created() {
    //     store.getNewTasks(incompleteTasks => {
    //         store.commit('setNewTasks', incompleteTasks)
    //     })
    // },

    methods: {
        doSomething: function () {
            console.log("Added New Card")
        }
    },
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
