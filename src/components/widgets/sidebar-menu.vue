<template>
  <!-- sidebar menu: : style can be found in sidebar.less -->
  <ul class="sidebar-menu">
    <li class="header">MAIN NAVIGATION</li>
    <template v-for="item in menu">
      <li v-if="item.child" class="treeview" v-link-active>
        <a v-link="{ path: item.link }">
          <i class="fa {{ item.icon }}"></i>
          <span>{{ item.name }}</span>
          <i v-if="item.child" class="fa fa-angle-left pull-right"></i>
        </a>

        <ul class="treeview-menu">
          <li v-link-active v-for="child in item.child">
            <a v-link="{ path: child.link }">
              <i class="fa {{ child.icon }}"></i> {{ child.name }}
            </a>
          </li>
        </ul>
      </li>
      <li v-else v-link-active>
        <a v-link="{ path: item.link, exact: true }">
          <i class="fa {{ item.icon }}"></i>
          <span>{{ item.name }}</span>
        </a>
      </li>
    </template>
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
