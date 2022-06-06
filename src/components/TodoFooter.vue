<template>
<div class="todo__footer">
    <div 
        class="footer__actions" 
        :class="{no__child: !hasTodos}"
    >
        <button class="button">
            <div class="button__prepend">
                <i class="fa-solid fa-circle-plus"></i>
            </div>
            Add Task
        </button>
    </div>
</div>
</template>
<script>
    export default {
        name: 'TodoFooter',
        props: {
            hasTodos: Boolean,
        },
    }
</script>
<style lang="scss" scoped>
.todo__footer {
    .footer__actions {
        .button {
            width: 100%;
            height: 45px;
            background: #F9F9F9;
            color: #191919;
            border: 1px dashed #adadad;
            border-radius: 12px;
            font-weight: 600;
            display: flex;
            align-items: center; 
            justify-content: center;
            cursor: pointer;

            .button__prepend {
                font-size: 18px;
                margin-right: 10px;
            }
        }
    }
}

.no__child{
      button {
         min-height: 183px;
         font-size: 18px;
         border: none !important;
      }
    }
</style>