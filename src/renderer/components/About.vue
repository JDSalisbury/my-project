<template>
  <div id="wrapper">
    <Navigation/>
    <v-app dark>
      <v-toolbar app dark color="primary">
        <v-toolbar-title>About</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-content></v-content>
      <v-footer app>
        <v-spacer></v-spacer>
        <span class="surface--text">
          Footer Message ⏱
          <div id="txt"></div>
        </span>
        <v-spacer></v-spacer>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Navigation from './Navigation/Navigation';

export default {
  components: { Navigation },
  methods: {
    checkTime(i) {
      if (i < 10) {
        i = `0 + ${i}`;
      } // add zero in front of numbers < 10
      return i;
    },
    startTime() {
      const today = new Date();
      const h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      m = this.checkTime(m);
      s = this.checkTime(s);
      document.getElementById('txt').innerHTML = `${h}:${m}:${s}`;
      setTimeout(this.startTime, 500);
    },
  },
  created() {
    this.startTime();
  },
};
</script>

<style>
</style>
