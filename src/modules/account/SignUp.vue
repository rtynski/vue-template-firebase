<template>
  <b-row class="h-100 justify-content-center align-items-center">
    <form class="col-md-6 col-offset-md-3 white py-3 mx-3 max-width">
      <span class="text-center d-block h2">{{ $t('account.createNewAccount') }}</span>
      <label for="email">{{ $t('account.email') }}:</label>
      <b-form-input name="email" id="name" :placeholder="$t('account.enterEmail')" autocomplete="none" />
      <label for="password">{{ $t('account.password') }}:</label>
      <b-form-input
        name="password"
        id="password"
        :placeholder="$t('account.enterPassword')"
        type="password"
        autocomplete="none"
      />
      <label for="confirm-password">{{ $t('account.confirmPassword') }}:</label>
      <b-form-input
        name="confirm-password"
        id="confirm-password"
        :placeholder="$t('account.enterConfirmPassword')"
        type="password"
        autocomplete="none"
      />
      <div class="p-2 text-center">
        <b-button variant="primary" class="px-3" @click.prevent="register">{{ $t('account.register') }}</b-button>
      </div>
      <div class="p-2 text-center">
        <span> {{ $t('account.ifYouHaveAccount') }}.</span
        ><a :href="urls.authSignIn" @click.prevent="navigationSignIn"> {{ $t('account.signIn') }} </a>
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
export default class SignUp extends Vue {
  public get urls(): { authSignIn: string } {
    return urls;
  }
  public navigationSignIn(): void {
    this.$router.push({ name: locationsName.authSignIn });
  }
  public register(): void {
    console.log('Register new user');
  }
}
</script>
<style scoped>
.max-width {
  max-width: 600px;
}
</style>
