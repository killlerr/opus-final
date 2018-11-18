<template>  
<div class="pb-4">
<b-card no-body class="img-cover">
  <b-tabs card>
    <b-tab title="Task" active class="bg-tab">
      <holder-tasks></holder-tasks>
    </b-tab>
    <b-tab title="Attendence" class="bg-tab">
      <holder-attendence></holder-attendence>
    </b-tab>
  </b-tabs>
</b-card>
</div>
</template>

<script>
import HolderTasks from '../components/HolderTasks'
import HolderAttendence from '../components/HolderAttendence'
export default {
    components:{
        HolderTasks,
        HolderAttendence
    }
}
</script>

<style>

.card-header{
    background-color: #ffffff;
    box-shadow: 0px 1px 3px #efeeee, 0px 1px 2px #bfbfbf;
    padding: 0.5rem;
    border: 0;
    height:auto;
}

.nav-link{
    color:#80818cfa;
    font-weight: bold;
    height: 3rem;
    text-align: center;
    font-size: 17px;   
}

.card-header-tabs {
    align-items: center;
    justify-content: center;
    margin-bottom: -0.45rem;
    border-bottom: 0;
}

.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
    border-width: 0;
    border-bottom: 5.5px solid #ff5a4e;
    color: #495057;
}

.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    color: #495057;
    background-color: #fff;
    border-width: 0;
    border-bottom: 5.5px solid #ff5a4e;
    
    
}

.bg-tab{
    background-color: rgba(229, 234, 239, 0.47059);
    height: calc(100vh - 127.8px);

}
</style>
