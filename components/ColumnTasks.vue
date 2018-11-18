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
            <CardFlip v-for="task in tasks" :key="task.task_id" :task="task"></CardFlip>
        </div>
                 
</div>

</template>

<script>
import ReusableButton from '~/components/ReusableButton.vue'
import CardFlip from '~/components/CardFlip.vue'
import ModalTaskCardAdd from '~/components/ModalTaskCardAdd.vue'

export default {
    data(){
        return{
            btnBgColor: '#fff',
            btnColor: '#000',
            bgColor: '#34c0dd',
            modalShow: false,
            tasks:
                [
                    {
                        "completed": true,
                        "deadline": "2018-10-12",
                        "project_name": "govi_mithuru",
                        "remain_days": -37,
                        "task_id": 2,
                        "task_name": "Pigu Task 1",
                        "user_id": 6
                    },
                    {
                        "completed": true,
                        "deadline": "2018-10-12",
                        "project_name": "export_to_excel",
                        "remain_days": -37,
                        "task_id": 6,
                        "task_name": "prepare the end point",
                        "user_id": 17
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-28",
                        "project_name": "send2Doc",
                        "remain_days": 10,
                        "task_id": 9,
                        "task_name": "my second task",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-12",
                        "project_name": "testProject_01",
                        "remain_days": -6,
                        "task_id": 11,
                        "task_name": "test task_01",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-12",
                        "project_name": "time_line",
                        "remain_days": -6,
                        "task_id": 13,
                        "task_name": "test task_02",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-12",
                        "project_name": "time_line",
                        "remain_days": -6,
                        "task_id": 15,
                        "task_name": "test task_02",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-12",
                        "project_name": "time_line",
                        "remain_days": -6,
                        "task_id": 16,
                        "task_name": "test task_02",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-16",
                        "project_name": "export_to_excel",
                        "remain_days": -2,
                        "task_id": 17,
                        "task_name": "Test 3",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2019-03-12",
                        "project_name": "export_to_excel",
                        "remain_days": 114,
                        "task_id": 18,
                        "task_name": "Test 4",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-08",
                        "project_name": "Select Project",
                        "remain_days": -10,
                        "task_id": 19,
                        "task_name": "",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-08",
                        "project_name": "Select Project",
                        "remain_days": -10,
                        "task_id": 20,
                        "task_name": "",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-11",
                        "project_name": "time_line",
                        "remain_days": -7,
                        "task_id": 21,
                        "task_name": "Task 4",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2019-01-08",
                        "project_name": "time_line",
                        "remain_days": 51,
                        "task_id": 22,
                        "task_name": "Task 5",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2019-01-08",
                        "project_name": "time_line",
                        "remain_days": 51,
                        "task_id": 23,
                        "task_name": "Task 5",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-11",
                        "project_name": "time_line",
                        "remain_days": -7,
                        "task_id": 25,
                        "task_name": "Task 7",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-11",
                        "project_name": "export_to_excel",
                        "remain_days": -7,
                        "task_id": 27,
                        "task_name": "Task 7",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-08",
                        "project_name": "export_to_excel",
                        "remain_days": -10,
                        "task_id": 29,
                        "task_name": "Task 9",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-08",
                        "project_name": "export_to_excel",
                        "remain_days": -10,
                        "task_id": 30,
                        "task_name": "Task9",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-12",
                        "project_name": "export_to_excel",
                        "remain_days": -6,
                        "task_id": 32,
                        "task_name": "Test 1",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-11",
                        "project_name": "export_to_excel",
                        "remain_days": -7,
                        "task_id": 35,
                        "task_name": "Adfg",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-08",
                        "project_name": "export_to_excel",
                        "remain_days": -10,
                        "task_id": 36,
                        "task_name": "Test 4",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-12",
                        "project_name": "time_line",
                        "remain_days": -6,
                        "task_id": 37,
                        "task_name": "Fgdr",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2019-03-12",
                        "project_name": "time_line",
                        "remain_days": 114,
                        "task_id": 38,
                        "task_name": "Test5",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-11",
                        "project_name": "export_to_excel",
                        "remain_days": -7,
                        "task_id": 40,
                        "task_name": "Task 11",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-08",
                        "project_name": "time_line",
                        "remain_days": -10,
                        "task_id": 41,
                        "task_name": "Task12",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-12",
                        "project_name": "time_line",
                        "remain_days": -6,
                        "task_id": 42,
                        "task_name": "Task 13",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-08",
                        "project_name": "time_line",
                        "remain_days": -10,
                        "task_id": 43,
                        "task_name": "Task14",
                        "user_id": 1
                    },
                    {
                        "completed": true,
                        "deadline": "2018-11-15",
                        "project_name": "new_1",
                        "remain_days": -3,
                        "task_id": 44,
                        "task_name": "New task 01",
                        "user_id": 1
                    }
                ]
        }
    },

    components: {
        CardFlip,
        ReusableButton,
        ModalTaskCardAdd

    },
    methods: {
        doSomething: function () {
            console.log("Added New Card")
        }
    },
    // created(){
    //     this.$axios.get('http://opus-api.devops.arimac.xyz/webapi/tasks')
    //         .then(res => console.log(res))
    //         .catch(error => console.log(error))
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

.task-color{

}
</style>
