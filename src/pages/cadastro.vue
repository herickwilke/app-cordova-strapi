<template>
  <f7-page>
    <f7-navbar title="Cadastro" back-link="Back"></f7-navbar>

    <f7-list id="cadastro">
      <f7-list-input
        label="Nome"
        type="text"
        :value="usuario.nome"
        @input  ="usuario.nome = $event.target.value"
        placeholder="Seu nome completo"
        clear-button
      />
      <f7-list-input
        label="E-mail"
        type="email"
        :value="usuario.email"
        @input  ="usuario.email = $event.target.value"
        placeholder="Seu e-mail"
        clear-button
      />
      <f7-list-input
        label="Senha"
        type="password"
        :value="usuario.senha"
        @input  ="usuario.senha = $event.target.value"
        placeholder="Seu senha"
        clear-button
      />
      <f7-list-item><f7-button @click="cadastrar">Cadastrar</f7-button></f7-list-item>
    </f7-list>
  </f7-page>
</template>



<script>
  import { f7Navbar, f7Page, f7List, f7ListInput, f7ListItem, f7Button } from 'framework7-vue';

  export default {
    components: { f7Navbar, f7Page, f7List, f7ListInput, f7ListItem, f7Button },
    data() {
      return {
        usuario: {
          nome: '',
          email: '',
          senha: ''
        }
      }
    },
    methods: {
      cadastrar: function() {
        let F7 = this.$f7;
        let usuario = this.usuario;

        F7.request.post(
          'http://localhost:1337/alguems',
          // 'http://172.16.128.97:14175/users',
          usuario,
          function deuCerto( retorno ) {
              window.history.back();
          },
          function deuErro( erros ) {
            console.log( erros );
            alert('deu caquinha');
          },
          'json');
      }
    }
  };
</script>
