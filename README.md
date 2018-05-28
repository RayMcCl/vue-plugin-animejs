# Vue Plugin AnimeJS

<a href="https://vuejs.org">
    <img alt="" src="https://img.shields.io/badge/vue.js-2.x-green.svg?style=flat-square">
</a>
<a href="https://animejs.com">
    <img alt="" src="https://img.shields.io/badge/animejs-2.x-green.svg?style=flat-square">
</a>

A simple Vue plugin for using the AnimeJS package with Vue.

Find it on NPM: https://www.npmjs.com/package/vue-plugin-animejs

## Install

The package can be installed from NPM by running either of the below:

```
npm install --save vue-plugin-animejs

OR

yarn add vue-plugin-animejs
```

## Usage 

### Initialization
Within your Vue initialization file, simply add the AnimeJS plugin:

```javascript
import Vue from 'vue';
import AnimeJS from 'vue-plugin-animejs';

Vue.use(AnimeJS);

new Vue({
    render: h => h(App)
}).$mount('#app');
```

### Use
Once the plugin has been added, AnimeJS can be called from each component within a method using this.$anime as below:
```html
// Example taken from AnimeJS documentation
// http://animejs.com/documentation/

<template>
    <svg width="128" height="128" viewBox="0 0 128 128">
        <polygon points="64 68.86319782520879 8.574 99.98495971528243 63.23967737424433 67.54584066031926 64 3.984959715282427 64.76032262575568 67.54584066031926 119.426 99.98495971528243 " fill="currentColor"></polygon>
    </svg>
</template>

<script>
export default {
    name: 'v-polygon',
    mounted: function () {
        
        // Once the component is mounted, begin animating
        this.$anime({
            targets: this.$el.querySelector('polygon'),
            points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
            easing: 'easeInOutExpo',
            direction: 'alternate',
            loop: true
        });
    }
};
</script>

<style></style>
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details