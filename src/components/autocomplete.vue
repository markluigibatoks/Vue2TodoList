<template>
  <div
    class="autocomplete"
    tabindex="0"
    @blur="showList = false"
    @click="$event.target.focus()"
    @focus="showList = true"
  >
    <label for="input__text">Select</label>
    <div class="selections">
      <span class="chip">
        Chip 1
        <div
          class="close-button"
          @click="remove({})"
        >
          <i class="fa-regular fa-circle-xmark"></i>
        </div>
      </span>
      <span class="chip">
        Chip 2
        <div
          class="close-button"
          @click="remove({})"
        >
          <i class="fa-regular fa-circle-xmark"></i>
        </div>
      </span>

      <input
        type="text"
        autocomplete="off"
        @focus="showList = true"
        @blur="showList = false"
      >
    </div>

    <ul
      v-show="showList"
      class="list"
    >
      <li
        class="list__item"
        @click="itemClick()"
      >
        Chip 3
      </li>
      <li>Chip 4</li>
      <li>Chip 5</li>
      <li>Chip 6</li>
      <li>Chip 7</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AutoComplete',

  data () {
    return {
      showList: false
    }
  },

  methods: {
    remove (item) {
      const index = this.friends.indexOf(item.name)
      if (index >= 0) this.friends.splice(index, 1)
    },

    itemClick () {
      console.log('click registered')
    }
  }
}
</script>

<style lang="scss" scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .autocomplete{
    width: 100%;
    background: skyblue;
    cursor: pointer;

    label {
      font-size: 16px;
      opacity: 0.7;
    }

    .selections {
      span.chip {
        border-radius: 30px;
        background: skyblue;
        opacity: 0.7;
        border: 1px solid #000;
        padding: 4px 15px;

        .close-button{
          display: inline;
          margin-left: 10px;
        }

        .close-button:hover{
          color: #000;
        }
      }

      input {
        outline: none;
        border: none;
      }
    }

    .list{
      list-style: none;
      background: #fff;

      li{
        padding: 15px 10px;
        cursor: pointer;
      }

      li:nth-child(odd){
        background: #fff;
      }

      li:nth-child(even){
        background: #ddd;
      }

      li:hover{
        background: skyblue;
      }
    }
  }
</style>
