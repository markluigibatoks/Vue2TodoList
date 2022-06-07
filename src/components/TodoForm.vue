<template>
  <form @submit.prevent="newTodo">

    <div class="title-group">
      <div class="title-group__prepend">
        <i class="fa-solid fa-circle-check"></i>
      </div>
      <div class="title-group__input">
        <input 
          autofocus
          type="text" 
          v-model="title" 
          placeholder="Title here..."
          required
          id="titleTxt"
          >
      </div>
    </div>

    <div class="selected-badges" v-show="filterBadges.length > 0">
        <Badge 
        v-for="badge in filterBadges" 
        :key="badge.name" 
        :title="badge.name" 
        :deletable="true"
        @on-remove="onRemove(badge)"/>
    </div>

    <div class="autocomplete">
        <div class="badge-group">
            <div class="badge-group__input">
              <input 
              id="searchTxt"
              type="text" 
              v-model="searchTxt"
              placeholder="Search for a badge..."
              @focus="toggleShow"
              @click="toggleShow"
              />
            </div>
        </div>
        <ul 
          class="badge-list"
          v-show="show">
            <li class="badge-list__item"
              @click="selectBadge(badge)"
              v-for="badge in searchResults">{{badge.name}}
             </li>
        </ul>
    </div>

    <div class="form__actions">
      <button 
        type="button"
        @click="$emit('on-close')"
        >
          <span class="button__prepend">
            <i class="fa-solid fa-ban"></i>
          </span>
          <span class="button__body">Close</span>
      </button>

      <button type="submit" >
          <span class="button__prepend">
            <i class="fa-solid fa-circle-plus"></i>
          </span>
          <span class="button__body">Add Todo</span>
      </button>
    </div>

  </form>  
</template>

<script>
import Badge from './Badge.vue';
  export default {
    name: "TodoForm",

    props: {
      group: {
        type: String,
        default: 'untitled'
      }
    },

    emits: ['on-close'],

    data() {
        return {
            title: "",
            searchTxt: "",
            badges: [
                { name: "Low", selected: false, },
                { name: "Medium", selected: false, },
                { name: "High", selected: false, },
                { name: "On Track", selected: false, },
                { name: "Off Track", selected: false, },
                { name: "At Risk", selected: false, },
            ],
            show: false,
            searchResults: [],
        };
    },
    mounted() {
      this.searchResults.push(...this.badges)
      
    },
    computed: {
        filterResults() {
          this.searchResults = this.badges.filter(badge => !badge.selected);
        },

        filterBadges() {
          return this.badges.filter(badge => badge.selected)
        }
    },

    methods: {

      newTodo(){
        if(this.title.trim() === '') {
          console.log('This field is required')
          this.title = ''
          document.getElementById('titleTxt').focus()
          return;
        }

        const newTodo = {
          title: this.title,
          person: Math.floor((Math.random() + 1) + 60),
          badges: this.filterBadges.map(badge => badge.name),
          order: 3,
          group: this.group,
        }

        this.$emit('new-todo', newTodo)

        // simple validation
        // in the near future. i will be using vuelidate 
      },

        selectBadge(badge) {
          document.getElementById("searchTxt").focus();

            this.badges = this.badges.map(b => b == badge ? { ...b, selected: true } : b);
            this.filterResults;

            this.searchTxt = "";
            this.show = false;
        },

        onRemove(badge){
          this.badges = this.badges.map(b => b == badge ? { ...b, selected: false } : b);
        },

        toggleShow(){
          this.show = true;
        }
    },

    watch: {
        searchTxt(newValue, oldValue) {
          this.show = true;
          this.searchResults = this.badges.filter(badge => badge.name.toLowerCase().includes(newValue.trim().toLowerCase()) && !badge.selected);
        },

        badges(newValue, oldValue) {
          this.filterResults
          this.filterBadges
        }
    },

    components: { 
      Badge 
    }
}
</script>

<style lang="scss" scoped>

  form {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 400px;
    width: 100%;
    background: #ddd;
    height: 100vh;
    text-align: center;
    color: #000;
    padding: 40px;

    .form__actions {
      display: flex; 
      align-items: center;
      width: 100%;

      button {
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
        margin-top: 42px;
        width: 40%;
        margin-right: 10px;
        .button__prepend{
          margin-right: 10px;
        }
      }

      button:last-child{margin-right: 0;}

    }

    .autocomplete {
      position: relative;
    }
  }

  .title-group{
    display: flex;
    margin-bottom: 20px;
    align-items: center;

    .title-group__prepend {
      margin-right: 10px;
    }

    .title-group__input {
      input {
        border: none !important;
        background: none;
        font-size: inherit;
        padding: 10px;
      }
    }
  }

  .badge-group {

    .badge-group__input {
      input {
        width: 100%;
        font-size: inherit;
        border: none;
        border-bottom: 1px solid #000;
        background: none;
        padding: 10px;
      }
    }
  }



  .badge-list {
    list-style: none;
    text-align: left;
    background: #fff;
    padding: 0;
    margin-top: 0;
    width: 100%;
    position: absolute;
    top: 40px;
    left: 0;

    li {
      padding: 10px;
      border-bottom: 1px solid #ddd;
      cursor: pointer;
    }

    li:hover {
      background: #000;
      color: #fff;
    }

    li:last-child {
      border-bottom: none;
    }
  }

  .selected-badges {
    padding: 0 0 30px;
  }



</style>