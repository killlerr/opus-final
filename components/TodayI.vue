<template>
    <div class="border-today">
        <div class="container-fluid">
            <div class="row no-gutters">
                <div class="col-3">
                    <div class="everything-center">
                        <font-awesome-icon icon="map-pin" v-bind:style="{color:bgColor}" class="fa-lg" />
                    </div>                    
                </div>
                <div class="col-9 border-today-right">
                    <div class="everything-center">
                        <p>Today I'm</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            bgColor:'#80818cfa'
        }
    },
}
</script>

<style>
.border-today{
    border-style: solid;
    border-color: rgba(128, 129, 140, 0.32);
    border-width: 1px;
}

.border-today-right{
    border-left-style: solid;
    border-color: rgba(128, 129, 140, 0.32);
    border-left-width: 2px;
}

.everything-center{
  height: 38px;
    margin-top: 11px;
  display: flex;
  align-items: center;
  justify-content: center  

}

</style>
