import Vue from 'vue';
import anime from 'animejs';

function install(Vue){
    Vue.prototype.$anime = anime;
}
  
export default install; 