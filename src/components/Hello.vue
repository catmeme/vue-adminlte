<template>
  <div class="row">
    <div class="col-sm-12 col-md-12">
      <h3>{{ msg }}</h3>
      <p>
        Lorem ipsum Ad non ut aliquip Duis minim sit ex esse eiusmod anim minim
        esse qui mollit.
      </p>
      <p>
        Lorem ipsum Ad non ut aliquip Duis minim sit ex esse eiusmod anim minim
        esse qui mollit elit do pariatur deserunt eu eiusmod tempor tempor sunt
        fugiat ad dolore reprehenderit do labore ex.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
      }
    }
  }
</script>
