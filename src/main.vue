<template>
  <f7-app :params="f7params">
    <f7-statusbar></f7-statusbar>
    <f7-panel right cover><f7-view url="/configuration/" :push-state="false"></f7-view></f7-panel>
    <f7-view url="/" :main="true" :pushState="true" :pushStateSeparator="''" class="ios-edges"></f7-view>
  </f7-app>
</template>


<script>
  import { f7App, f7Panel, f7View, f7Statusbar } from 'framework7-vue';
  import routes from './routes.js'

  export default {
    components: { f7App, f7Panel, f7View, f7Statusbar },
    data() {
      return {
        f7params: {
          theme: window.localStorage.getItem('platformTheme') || 'aurora',
          routes: routes,
          id: 'mobile.de.aula',
          // view: {
          //     pushState: 'true',
          //     // pushStateSeparator: '',
          //     // pushStateRoot: ''
          // }
        }
      }
    },
  }
</script>
