<template>
  <b-button 
    :label="label" 
    class="btn-reusable" 
    @click="onClick">
    {{ label }}
  </b-button>
</template>

<script>
export default {

    props:{
        label: {
            type: String,
            default: 'Button'
        },
        onClick: {
            type:Function,
            default: null
        },
    }
}
</script>

<style>

.btn-reusable{
    box-sizing: border-box;
    width:100%;  
    border-radius: 0px;
    padding: 22px;
    text-transform: uppercase;
    font-family:sans-serif;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    border-style: none;
    background-color: #ff5a4e;
}

</style>

