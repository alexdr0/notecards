<template>
    <div class="header">
        <img src="@/assets/Notecards.svg" class="logo" />
        <button class="button signin" @click="login" v-if="auth.loading == false && !auth.authenticated">Login</button>
        <button class="button signin" @click="login" v-else-if="auth.loading == true">Login</button>
        <button class="button signin" v-else-if="auth.loading == false && auth.authenticated">{{ auth.user.nickname }}</button>
    </div>
</template>

<style lang="scss" scoped>
    .header{
        height: 50pt;
        width: 100%;
        background: #e6e6e6;

        text-align: left;
    }

    .logo{
        height: 35pt;
        margin-top: 7.5pt;
        margin-bottom: 7.5pt;
        margin-left: 25pt;
    }

    .signin{
        height: 35pt;
       
       // align item to right
        margin-right: 10pt;
        margin-top: 7.5pt;
        margin-bottom: 7.5pt;
        float: right;

        font-family: inter;

        &:hover{
            // make background lighter grey
            background: #f2f2f2;
        }
    }
</style>

<script lang="ts">
import { injectAuth } from 'vue-auth0-plugin'

    export default {
        name: "Header",
        setup(){
            const auth:any = injectAuth();

            const login = () => {
                auth.loginWithRedirect()
            }

            console.log(auth)


            return {
                login,
                auth
            }
        }
    }
</script>