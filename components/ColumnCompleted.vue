<template>
<div>
    <div class="py-3">
    <blockquote class="blockquote text-left bq">Completed</blockquote>
    <footer class="blockquote-footer bqf">Lorem ipsum dolor sit amet consectetur</footer>
    </div>
    <div>
        <CardFlip v-for="completedTask in completedTasks" :key="completedTask.task_id" :task="completedTask"></CardFlip>
    </div>
    
 
</div>
</template>

<script>
import CardFlip from '~/components/CardFlip.vue'
import { mapState } from 'vuex'

export default {

    components:{
        CardFlip,
    },
    computed:{
        ...mapState({
            completedTasks: 'completedTasks'
        })
    }
    
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

</style>
