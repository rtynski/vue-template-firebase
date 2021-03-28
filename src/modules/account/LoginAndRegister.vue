<template>
  <b-container class="h-100">
    <b-row class="h-100 justify-content-center align-items-center">
      <b-col cols="12" class="text-center">
        <h1>{{ $t('account.waiting') }}</h1>
        <br />
        <b-spinner variant="primary" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import { SpinnerPlugin } from 'bootstrap-vue';
import { Component, Vue } from 'vue-property-decorator';

Vue.use(SpinnerPlugin);

@Component
export default class LoginAndRegister extends Vue {}
</script>
