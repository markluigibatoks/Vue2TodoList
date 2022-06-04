<template>
    <img :src="{source}" :style="{height: size + 'px', width: size + 'px'}"/>
</template>

<script>
    export default{
        props: {
            source: String,
            size: Number,
        }
    }
</script>

<style scoped>
    img {
        border-radius: 50%;
    }
</style>