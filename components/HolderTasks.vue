<template>
    <div class="container-fluid cf-p-0">
    <div class="row mx-1">
        <div class="col-lg-4 col-s-12 justify-content-center">
           <Column-tasks></Column-tasks>
        </div>        
        <div class="col-lg-4 col-s-12 justify-content-center">
           <Column-overdue></Column-overdue>
        </div>
        <div class="col-lg-4 col-s-12 justify-content-center">
           <Column-completed></Column-completed>
        </div>
    </div>
    </div>
</template>

<script>
import ColumnCompleted from "~/components/ColumnCompleted.vue"
import ColumnOverdue from "~/components/ColumnOverdue.vue"
import ColumnTasks from "~/components/ColumnTasks.vue"

export default {
    components:
    {
        ColumnCompleted,
        ColumnOverdue,
        ColumnTasks
    }
    
}
</script>

<style>

.cf-p-0, .container-fluid{
    padding-left: 0;
    padding-right: 0;
}

</style>
