<template>
  <b-row class="h-100 justify-content-center align-items-center">
    <form class="col-md-6 col-offset-md-3 white py-3 mx-3 max-width">
      <span class="text-center d-block h2"> Welcome </span>
      <label for="email">Email:</label>
      <b-form-input name="email" id="name" placeholder="Enter email" autocomplete="email" />
      <label for="password">Password:</label>
      <b-form-input
        name="password"
        id="password"
        placeholder="Enter password"
        type="password"
        autocomplete="current-password"
      />
      <div class="p-2 text-center">
        <b-button variant="primary" class="px-3" @click.prevent="login">Login</b-button>
      </div>
      <div class="p-2 text-center">
        <span> Don’t have an account? </span><a :href="urls.authSignUp" @click.prevent="navigationSignUp"> Sign Up </a>
      </div>
    </form>
  </b-row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FormInputPlugin, ButtonPlugin } from 'bootstrap-vue';
import { locationsName, urls } from '@/router';

Vue.use(FormInputPlugin);
Vue.use(ButtonPlugin);

@Component
export default class SignIn extends Vue {
  public get urls(): { authSignUp: string } {
    return urls;
  }

  public navigationSignUp(): void {
    this.$router.push({ name: locationsName.authSignUp });
  }

  public login(): void {
    console.log('Login for new session');
  }
}
</script>
<style scoped>
.max-width {
  max-width: 600px;
}
</style>
