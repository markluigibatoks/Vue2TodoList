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

        <CardBody :badges="todo.badges"/>

        <CardFooter :personId="todo.person"/>
    </div> 
</template>

<script>
import CardBody from "./CardBody.vue";
import CardFooter from "./CardFooter.vue";
import {mapActions} from "vuex";

export default {
	components: {
		CardBody,
		CardFooter,
	},

	data(){
		return {
			title: '',
			editField: '',
			typingTimer: '',
			doneTypingInterval: 2500,
		}
	},

	props: {
			todo: {},
	},

	created(){
		this.title = this.todo.title
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

		...mapActions(['updateTodo'])
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

