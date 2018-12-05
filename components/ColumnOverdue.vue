<template>
<div>
    <div class="py-3">
    <blockquote class="blockquote text-left bq">Overdue</blockquote>
    <footer class="blockquote-footer bqf">Lorem ipsum dolor sit amet consectetur</footer>
    </div>
    <div>
            <CardFlip v-for="incompleteTask in incompleteTasks" :key="incompleteTask.task_id" :task="incompleteTask" class="mb-4"></CardFlip>
    </div>
    
</div>
</template>

<script>
import CardFlip from '~/components/CardFlip.vue'
import { mapState, mapGetters } from 'vuex'

export default {
    components:{
        CardFlip
    },
    computed:{
        ...mapGetters({
            incompleteTasks: 'overdueTasks'
        }),
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
