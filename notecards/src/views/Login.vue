<template>
    <div>
        You should be redirected soon.
    </div>
</template>

<script lang="ts">
import { injectAuth } from 'vue-auth0-plugin'

    export default {
        name: "Header",
        setup(){
            const auth:any = injectAuth();

            auth.handleRedirectCallback()
        }
    }
</script>