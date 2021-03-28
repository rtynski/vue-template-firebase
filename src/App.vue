<template>
  <LoginAndRegister v-if="!isFirstRun" />
  <b-container v-else :class="ClassContainer" fluid>
    <template v-if="!isAnonymousPage">
      <div id="nav">
        <router-link to="">Menu 1</router-link> |
        <router-link to="">Menu 2</router-link>
      </div>
    </template>
    <router-view />
  </b-container>
</template>
<script lang="ts">
import { LayoutPlugin } from 'bootstrap-vue';
import { getModule } from 'vuex-module-decorators';
import { Component, Vue } from 'vue-property-decorator';
import AccountStore from './modules/account/store/AccountStore';
import { FirebaseUser } from './modules/account/models';
import LoginAndRegister from '@/modules/account/LoginAndRegister.vue';

Vue.use(LayoutPlugin);

type ClassContractor = { 'h-100': boolean; 'gray-400': boolean };

@Component({
  components: {
    LoginAndRegister,
  },
})
export default class App extends Vue {
  public get accountStore(): AccountStore {
    return getModule(AccountStore, this.$store);
  }

  public get user(): FirebaseUser {
    return this.accountStore.User;
  }

  public isFirstRun = false;

  public isAnonymousPage = true;

  public get Fluid(): boolean {
    return !!this.$route.meta?.fluid;
  }
  public get ClassContainer(): ClassContractor {
    return {
      'h-100': !!this.$route.meta?.h100,
      'gray-400': !!this.$route.meta?.gray400,
    };
  }

  public created(): void {
    if (this.user.isAnonymous && !this.isFirstRun) {
      this.accountStore.actionCheckLogin();
      this.isFirstRun = true;
    }
    console.log('Start new App');
  }
}
</script>

<style>
body,
html {
  height: 100%;
}
:root {
  --gray-400: #ced4da;
  --white: #fff;
}
.gray-400 {
  background-color: var(--gray-400);
}
.white {
  background-color: var(--white);
}
</style>
