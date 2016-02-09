<template>
  <app-header></app-header>
  <app-sidebar></app-sidebar>
  <app-content></app-content>
  <app-footer></app-footer>
</template>

<script>

  import Header from './components/layout/Header.vue'
  import Sidebar from './components/layout/Sidebar.vue'
  import Content from './components/layout/Content.vue'
  import Footer from './components/layout/Footer.vue'

  module.exports = {
    name: 'Container',
    data: function () {
      return {
        menu: require('./../config/menu.js') || []
      }
    },
    replace: false,
    components: {
      'app-header': Header,
      'app-sidebar': Sidebar,
      'app-content': Content,
      'app-footer': Footer
    }
  }
  
</script>