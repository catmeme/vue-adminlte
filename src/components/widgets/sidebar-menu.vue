<template>
  <!-- sidebar menu: : style can be found in sidebar.less -->
  <ul class="sidebar-menu">
    <li class="header">MAIN NAVIGATION</li>
    <li class="treeview" v-for="item in menu">
      <a v-link="{ path: item.link }">
        <i class="fa {{ item.icon }}"></i>
        <span>{{ item.name }}</span>
        <i v-show="item.child.length" class="fa fa-angle-left pull-right"></i>
      </a>

      <ul v-show="item.child.length" class="treeview-menu">
        <li v-link-active v-for="child in item.child">
          <a v-link="{ path: child.link }">
            <i class="fa {{ child.icon }}"></i> {{ child.name }}
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>

  module.exports = {
    data: function () {
      return {
        menu: this.$parent.$data.menu || []
      }
    }
  }

</script>
