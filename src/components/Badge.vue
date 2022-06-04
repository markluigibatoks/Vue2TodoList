<template>
    <span class="badges" :class="[getClass]">{{title}}</span>
</template>

<script>
    export default {
        name: 'Badge',
        props: {
            title: String,
        },
        computed: {
            getClass(){
                console.log(this.title.trim().toLowerCase().replace(' ', '__'));
                return this.title.trim().toLowerCase().replace(' ', '__');
            }
        }
    }
</script>

<style scoped>
.badges {
    padding: 5px 10px;
    border-radius: 8px;
    font-size: 16px;
}

.low {
    background: #50D5F6;
}

.medium {
    background: #FCA821;
}

.high{
    background: #9F45E2;
}

.at__risk{
    background: #FED02C;
}

.on__track{
    background: #1FCEC2;
}

.off__track{
    background: #F95878;
}

.low, .medium, .at__risk, .on__track{color: #191919;}
.high, .off__track{color: #fff;}

</style>