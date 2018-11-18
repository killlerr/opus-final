<template>
    
    <div class="row">
        <div class="container">
        <b-card class="card-btn">
        <div>

             <b-button class="fit-into-card btn">
                <div class="row">
                    <div class="btn-icon">
                        <!-- <fa :icon="fas.faPlusCircle"  :style="{ color: '#34c0dd' }" class="fa-size" /> -->
                    </div>
                    <div class="btn-txt">
                    <strong>ADD NEW TASK CARD</strong>
                    </div>
                </div>                 
            </b-button>

        </div>
        </b-card>
        </div>
    </div>

</template>

<script>
export default {
    
}
</script>

<style>

.fit-into-card{
    display: block;
    width: 100%;
    
}

.btn{
    border: none;
    background-color: #ffffff;
    color: #80818cfa;

}

.card-btn{
    position: relative;
    display: block;
    align-items: center;
    justify-content: center;
    height: 4rem;
    max-height: 14rem;
    min-width: 0;
    width: 100%;
    border-radius: 0.25rem;
    box-shadow: 0 0.05rem 0.2rem 0 rgba(0, 0, 0, 0.2);
    word-wrap: break-word;
    margin: 2rem;
}

</style>
