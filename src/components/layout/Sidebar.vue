<template>

  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <sidebar-user-panel></sidebar-user-panel>
      <sidebar-search></sidebar-search>
      <sidebar-menu></sidebar-menu>
    </section>
    <!-- /.sidebar -->
  </aside>
  
</template>

<script>

  import SidebarSearch from './../widgets/sidebar-search.vue'
  import SidebarUserPanel from './../widgets/sidebar-user-panel.vue'
  import SidebarMenu from './../widgets/sidebar-menu.vue'

  module.exports = {
    data: function () {
      return {
        menu: this.$parent.$data.menu || []
      }
    },
    components: {
      'sidebar-search': SidebarSearch,
      'sidebar-user-panel': SidebarUserPanel,
      'sidebar-menu': SidebarMenu
    }
  }

</script>
