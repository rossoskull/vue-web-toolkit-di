<template>
  <button class='btn' v-bind:class="[ type ? `btn-${type}` : '' ]"  @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    msg: String,
    type: String
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

/*
button {
  background-color: white;
  display: block;
  padding: 5px;
  border-radius: 5px;
  color: black;
  border: 1px solid grey;
}

button:hover {
  cursor: pointer;
}
*/