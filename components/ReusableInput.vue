<template>
  <div class="input-field">
    <input
      :placeholder="placeholder"
      :value="value"
      class="input-reusable mt-4"
      @change="$emit('input', $event.target.value)">
  </div>
</template>


<script>
export default {
    props: {
        placeholder:{
            type: String,
            default: 'input'
        },
        value:{
            type: String,
            default: null
        }
    }
    // computed: {
    //     inputEvent:function(e) {
    //         this.$emit('inputEvent', e); 
    //     }
    // }
}
</script>

<style>

.input-reusable{

    width: 100%;
    font-family:sans-serif;
    /* text-transform: uppercase; */
    border-style: none;
    border-radius: 0;
    padding: 1.5rem;
    font-size: 11px;
    letter-spacing: 1px;
    border-left: 0 solid #ff5a4e;
    animation: opus-input-out 0.2s ease;


}

.input-reusable:focus,.input-reusable:hover {
    border-left: 0.4rem solid #ff5a4e;
    outline: 0;
    /* transition: border 0.2s ease-in-out; */
    animation: opus-input 0.2s ease;
}

@keyframes opus-input{
    0%{
        border-left-width: 0;
    }
    100%{
        border-left-width: 0.4rem;

    }
}

@keyframes opus-input-out{
    100%{
        border-left-width: 0;
    }
    0%{
        border-left-width: 0.4rem;

    }
}

</style>

