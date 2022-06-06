<template>
<div class="card__body">
    <div class="card__badges">
        <Badge 
            :title="badge" 
            v-for="(badge, index) in badges" 
            :keys="index"/>
    </div>
</div>
</template>

<script>
import Badge from './Badge.vue';

export default {
    name: 'CardBody',
    components: {
        Badge
    },
    props: {
        badges: [],
    }
}
</script>

<style lang="scss" scoped>
.card__body{
    display: block;
    
    .card__badges {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
}
</style>