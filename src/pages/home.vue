<template>
  <f7-page>
    <f7-navbar title="Aula CRUD">
      <f7-nav-right><f7-link icon-f7="gear_fill" panel-open="right"></f7-link></f7-nav-right>
    </f7-navbar>

    <f7-list>
      <f7-list-item
        v-for="(route, index) in $f7router.routes"
        v-if="route.title"
        :title="route.title"
        :key="index"
        :link="route.path"
      ></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
  import { f7Page, f7Navbar, f7NavRight, f7Link, f7List, f7ListItem } from 'framework7-vue';

  export default {
    components: { f7Page, f7Navbar, f7NavRight, f7Link, f7List, f7ListItem },
  };
</script>
