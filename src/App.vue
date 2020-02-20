<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { State } from "vuex-class";
import AuthMixin from "@/mixins/AuthMixin";
import Navbar from "@/components/Navbar/component";

@Component({
  mixins: [AuthMixin, Navbar]
})
export default class App extends Vue {}
</script>

<style>
html, body{
  height: 100%;
  background-color: #eaeaea;
  /* background-color: white; */
}
#app{
  height: 100%;
}
.mt-navbar{
  margin-top: 64px!important;
}
</style>