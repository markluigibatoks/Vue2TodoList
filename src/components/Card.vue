<template>
    <div class="card">

			<div class="card__header">
				<div class="card__title">
						<div class="card__title__prepend">
						<i class="fa-regular fa-circle-check"></i>
						<!-- <i class="fa-regular fa-hourglass"></i> -->
						</div>
						<span v-show="!showField('title')" @click="focusField('title')">{{title}}</span>
						<input v-show="showField('title')" type="text" v-model="title" @focus="focusField('title')" @blur="blurField">
				</div>
			</div>

			<div class="card__body">
				<div class="card__badges">
					<Badge 
							:title="badge" 
							v-for="(badge, index) in todo.badges" 
							:keys="index"/>
				</div>
			</div>

			<div class="card__footer">
				<div class="footer__user">
						<img :src="imageSrc"/>
						<div class="date_started">12-14 Jul</div>
				</div>
				<div class="footer__actions">
					<button 
						class="deleteTodoButton" 
						title="Delete Card"
						@click="onDeleteTodo"
					>
							<div class="button__body">
								<i class="fa-solid fa-trash"></i>
							</div>
					</button>
				</div>
			</div>
    </div> 
</template>

<script>
import Badge from './Badge.vue';
import {mapActions} from "vuex";

export default {
	components: {
		Badge
	},

	data(){
		return {
			title: '',
			editField: '',
			typingTimer: '',
			doneTypingInterval: 2500,
			baseUrl: "https://i.pravatar.cc/150?img=",
		}
	},

	props: {
			todo: {},
	},

	created(){
		this.title = this.todo.title
	},

	computed: {
		imageSrc (){
			return this.baseUrl + this.todo.person;
		}
	},

	methods: {
		focusField(name){//name of input field
			this.editField = name
		},

		blurField(){
			this.editField = ''
		},

		showField(name){
			return this.editField == name || this.title == ''
		},

		doneTyping(){
			console.log('User done typing!!!')
			this.updateTodo({
				...this.todo, title: this.title
			})
		},

		onDeleteTodo(){
			if(confirm('Continue deleting the todo?')){
				this.deleteTodo(this.todo)
			}
		},

		...mapActions(['updateTodo', 'deleteTodo'])
	},

	watch: {
		title(newValue, oldValue){
			clearTimeout(this.typingTimer)

			if(this.title != this.todo.title) //if input title has changes
			{
				this.typingTimer = setTimeout(this.doneTyping, this.doneTypingInterval)
			}
		}
	}
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

	.card__body{
    display: block;
    
    .card__badges {
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
    }
	}

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

    .footer__actions {
			button {
				background: none;
				border: none;
				cursor: pointer;
				font-size: 18px;
				color: red;
			}

			button:hover{
				opacity: 0.7
			}
    }
	}
</style>

