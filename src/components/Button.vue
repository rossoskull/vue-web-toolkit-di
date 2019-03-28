<template>
  <button class='btn' v-bind:class="[className, color ? (outline ? `btn-outline-${color}` : `btn-${color}`) : 'btn-primary' ]"  @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    msg: String,
    color: String,
    className: String,
    outline: Boolean
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
