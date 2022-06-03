
<!-- 

  Todo

    Icon
    name
    Peep
    date Doing
    date Done


 -->

<template>
  <div class="home">
    <AddButton/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddButton from '../components/AddButton.vue'

export default {
  name: 'HomeView',
  components: {
    AddButton
}
}
</script>
