<template>
  <f7-page>
    <f7-navbar title="Aparência">
      <f7-nav-right>
        <f7-link icon-f7="close" panel-close="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-list accordion-list>
      <f7-list-item>
        <span>Dark Mode</span>
        <f7-toggle @toggle:change="setLayoutTheme" :checked="theme.dark"></f7-toggle>
      </f7-list-item>

      <f7-list-item accordion-item title="Tema">
        <f7-accordion-content>
          <f7-list>
            <f7-list-item
              v-for="platform in platforms"
              :key="platform.slug"
              :value="platform.slug"
              :title="platform.title"
              :checked="theme.platform == platform.slug"
              @click="setPlatformTheme(platform.slug)"
              radio
              name="platformTheme"
              ><f7-icon :slot="'inner' + (theme.platform == 'ios'?'-start':'')" :f7="platform.icon"></f7-icon>
            </f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-list-item>

      <f7-list-item accordion-item title="Cores">
        <f7-accordion-content>
          <f7-list>
            <f7-list-item
              v-for="color in colors"
              v-if="color.dark == theme.dark"
              :key="color.slug"
              :value="color.slug"
              :title="color.title"
              :checked="theme.color == color.slug"
              @click="setColorTheme(color.slug)"
              radio
              name="colorTheme"
              ><f7-icon :slot="'inner' + (theme.platform == 'ios'?'-start':'')" :color="color.slug" f7="circle_fill"></f7-icon>
            </f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
  import { f7Page, f7Navbar, f7NavRight, f7Link, f7BlockTitle, f7AccordionContent, f7List, f7ListItem, f7ListButton, f7Toggle, f7Icon } from "framework7-vue";

  export default {
    nane: 'configuration',
    components: { f7Page, f7Navbar, f7NavRight, f7Link, f7BlockTitle, f7AccordionContent, f7List, f7ListItem, f7ListButton, f7Toggle, f7Icon },
    data() {
      return {
        colors: [
          {dark: false, slug: 'red',         title: 'Red' },
          {dark: true,  slug: 'green',       title: 'Green' },
          {dark: true,  slug: 'blue',        title: 'Blue' },
          {dark: false, slug: 'pink',        title: 'Pink' },
          {dark: true,  slug: 'yellow',      title: 'Yellow' },
          {dark: true,  slug: 'orange',      title: 'Orange' },
          {dark: false, slug: 'purple',      title: 'Purple' },
          {dark: false, slug: 'deeppurple',  title: 'Deep Purple' },
          {dark: true,  slug: 'lightblue',   title: 'Light Blue' },
          {dark: true,  slug: 'teal',        title: 'Teal' },
          {dark: true,  slug: 'lime',        title: 'Lime' },
          {dark: true,  slug: 'deeporange',  title: 'Deep Orange' },
          {dark: true,  slug: 'gray',        title: 'Gray' },
          {dark: true,  slug: 'white',       title: 'White' },
          {dark: false, slug: 'black',       title: 'Black' },
        ],
        platforms: [
          {slug: 'ios',     title: 'iOS',     icon: 'logo_apple' },
          {slug: 'md',      title: 'Android', icon: 'logo_android' },
          {slug: 'aurora',  title: 'PC',      icon: 'device_desktop' },
        ],
        theme: {
          platform : this.$f7.theme,
          dark     : false,
          color    : false
        }
      };
    },
    mounted() {
      this.setLayoutTheme( !!JSON.parse(window.localStorage.getItem('darkTheme')) );
      this.setColorTheme( window.localStorage.getItem('colorTheme') );
    },
    methods: {
      setPlatformTheme(platform) {
        window.localStorage.setItem('platformTheme', platform);
        window.location.reload(true);
      },
      setLayoutTheme(dark) {
        this.theme.dark = dark;
        let theme = dark?'dark':'light'

        window.localStorage.setItem('darkTheme', dark);

        this.$f7.root
          .removeClass('theme-dark theme-light')
          .addClass(`theme-${theme}`);
      },
      setColorTheme(color) {
        if ( !color ) return;
        this.theme.color = color;

        window.localStorage.setItem('colorTheme', color);

        const currentColorClass = this.$f7.root[0].className.match(/color-theme-([a-z]*)/);
        if (currentColorClass) this.$f7.root.removeClass(currentColorClass[0]);
        this.$f7.root.addClass(`color-theme-${color}`);
      },
    },
  };
</script>
