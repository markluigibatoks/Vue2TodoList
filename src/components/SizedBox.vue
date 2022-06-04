<template>
    <div :style="{height: height + 'px'}" style="width: 100%; display: block;"></div>
</template>
<script>
    export default {
        name: 'SizedBox',
        props: {
            height: Number,
        },
    }
</script>