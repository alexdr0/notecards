<template>
  <Header />
  <div class="home">
    <div class="header-area">
      <span class="header-text">Notecards</span><br>
      <span class="sub-text">An better alternative to other study applications.</span><br>

      <button class="button is-large mt-5 get-started" @click="login">Get Started</button>
    </div>
  </div>
</template>


<script lang="ts">
import Header from '@/components/Header.vue'
import { injectAuth } from 'vue-auth0-plugin'

export default {
  name: 'Home',
  components: {
    Header
  },
  setup(){
    const auth:any = injectAuth();

    const login = () => {
      auth.loginWithRedirect()
    }

    return {
      login
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/Home.scss';
</style>