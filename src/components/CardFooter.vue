<template>
    <div class="card__footer">
        <div class="footer__user">
            <img :src="imageSrc"/>
            <div class="date_started">12-14 Jul</div>
        </div>
        <div class="footer__other">
            2 <i class="fa-solid fa-code-merge"></i> <i class="fa-solid fa-play"></i>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CardFooter',
        data(){
            return {
                baseUrl: "https://i.pravatar.cc/150?img=",
            }
        },
        props: {
            personId: Number,
        },
        computed: {
            imageSrc (){
                return this.baseUrl + this.personId;
            }
        }
    }
</script>
<style lang="scss" scoped>
.card__footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ADADAD;
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: calc(100% - 40px);

    .footer__user {
    display: flex;
    justify-content: flex-start;
    align-items: center;

        img{
            width: 35px;
            height: 35px;
            border-radius: 50%;
            margin-right: 10px;
        }
    }

    .footer__other {
    // icon COlor: 676767
    
    }
}
</style>