<template>
    <div class="card">

        <CardHeader :title="todo.title"/>

        <CardBody :badges="todo.badges"/>

        <CardFooter :personId="todo.person"/>
    </div> 
</template>

<script>
import CardHeader from "./CardHeader.vue";
import CardBody from "./CardBody.vue";
import CardFooter from "./CardFooter.vue";


export default {
    components: {
    CardHeader,
    CardBody,
    CardFooter,
    },
    props: {
        todo: {},
    },
}

</script>

<style lang="scss" scoped>
    .card {
        padding: 20px;
        border-radius: 12px;
        border: 1px solid #dadada;
        width: 100%;
        min-height: 183px;
        margin-bottom: 20px;
        padding-bottom: 40px;
        position: relative;
      }
</style>

