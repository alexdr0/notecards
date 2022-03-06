<template>
  <Header />
  <div class="home">
    <div class="header-area">
      <span class="header-text">Notecards</span><br>
      <span class="sub-text">An better alternative to other study applications.</span><br>

      <button class="button is-large mt-5 get-started" @click="login" v-if="auth.loading == false && auth.authenticated == false"
          >Get Started</button>
      <button class="button is-large mt-5 get-started" @click="login" v-else-if="auth.loading"
          >Get Started</button>
      <button class="button is-large mt-5 get-started continue" @click="login" v-else-if="auth.loading == false && auth.authenticated"
        >Continue as {{ auth.user.nickname }}  <i class="fas fa-arrow-right ml-2"></i>
      </button>
      <br><br>
      <button class="button is-small" v-if="auth.loading == false && auth.authenticated" @click="auth.logout()"
      >Logout</button>
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
      login,
      auth
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/Home.scss';
</style>