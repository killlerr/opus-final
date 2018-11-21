<template>
    <div>
        <no-ssr>
            <Header></Header>
        </no-ssr>
        <no-ssr>
            <tabs class="no-padding"></tabs>
        </no-ssr>
    </div>

</template>

<script>
import Header from '~/components/Header.vue'
import Tabs from '~/components/Tabs.vue'

export default {
        components: {
        Header,
        Tabs
    }
}
</script>

<style>

.bg{
    background-color: aquamarine;
}

.bg-test{
    background-color:red;
}

.no-padding{
    padding: 0 !important;
}
</style>
