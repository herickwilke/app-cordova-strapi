<template>
  <f7-page>
    <f7-navbar title="Lista de usuários" back-link="Back"></f7-navbar>

    <f7-list>
      <f7-list-item
        v-for="(usuario, id) in usuarios"
        :key="id"
        :title="usuario.nome"
      ></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
  import { f7Page, f7Navbar, f7List, f7ListItem } from 'framework7-vue';

  export default {
    components: { f7Page, f7Navbar, f7List, f7ListItem },
    data() {
      return {
        usuarios : []
      }
    },
    mounted() {
      let req = this.$f7.request;
      let self = this;


      setInterval(function() {
        req.json(
          'http://localhost:1337/alguems',
          function(data) {
            self.$data.usuarios = data;
          }
        );
      }, 3000)
    }
  }
</script>
