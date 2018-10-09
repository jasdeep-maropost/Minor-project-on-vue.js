<template>
  <div id="app">
    <!-- routes will be rendered here -->
    <Header/>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  name: 'app',
  components: {Header}
}
</script>
<style>
  a:hover {
    text-decoration: none;
  }
</style>
