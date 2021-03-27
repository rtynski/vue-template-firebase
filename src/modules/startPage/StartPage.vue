<template>
  <h1>Start Page</h1>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { locationsName } from '@/router';

@Component
export default class StartPage extends Vue {
  public created(): void {
    this.$router.push({ name: locationsName.authSignIn });
  }
}
</script>
