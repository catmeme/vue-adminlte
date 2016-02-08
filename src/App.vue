<template>
  <app-header></app-header>
  <app-menu></app-menu>
  <app-content></app-content>
  <app-footer></app-footer>
</template>

<script>

  import Header from './components/layout/Header.vue'
  import Menu from './components/layout/Menu.vue'
  import Content from './components/layout/Content.vue'
  import Footer from './components/layout/Footer.vue'
  
  module.exports = {
    name: 'Container',
    data: function () {
      return {
        menus: require('./../config/menus.js') || []
      }
    },
    replace: false,
    components: {
      'app-header': Header,
      'app-menu': Menu,
      'app-content': Content,
      'app-footer': Footer
    }
  }
  
</script>
