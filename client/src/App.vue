<template>
   <div id="app">
    <v-app>
      <v-main>
        <app-header></app-header>
        <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
 name: 'app', 
 components: {
   'app-header': Header,
 }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
