<template>
    <div class="card__header">
        <div class="card__title">
            <div class="card__title__prepend">
            <i class="fa-regular fa-circle-check"></i>
            <!-- <i class="fa-regular fa-hourglass"></i> -->
            </div>
            <span>{{title}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardHeader',
        props: {
            title: String,
        }
    }
</script>

<style lang="scss" scoped>
.card__header {

    .card__title {
    display: flex; 
    align-items: center;
    font-weight: bold;
    color: #191919;
    margin-bottom: 10px;

    .card__title__prepend {
        font-size: 24px;
        margin-right: 10px;
    }

        span {
            display: inline-block;
            width: 241px;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: left;
            font-size: 20px;
            white-space: nowrap;
        }
    }
}
</style>