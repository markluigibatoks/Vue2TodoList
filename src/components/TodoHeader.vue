<template>
    <div class="todo__header">
        <div class="header__title">{{group}}</div>
        <div class="header__actions">
        <button><i class="fa-solid fa-circle-plus"></i></button>
        <button><i class="fa-solid fa-ellipsis"></i></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TodoHeader',
        props: {
            group: String,
        }
    }
</script>

<style lang="scss" scoped>
.todo__header {
    display: flex; 
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    .header__title {
    font-weight: bold;
    font-size: 24px;
    }

    .header__actions{
    display: flex;
    justify-content: space-between;

        button {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        margin-left: 10px;
        }

        button:first-child{margin-left: 0;}
    }
}
</style>