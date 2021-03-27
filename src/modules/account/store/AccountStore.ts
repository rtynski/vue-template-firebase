import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { FirebaseUser, firebaseUserDefault } from '../models';

@Module({
  name: 'accountStore',
  namespaced: true,
  stateFactory: true,
})
export default class AccountStore extends VuexModule {
  private user = firebaseUserDefault;

  public get User(): FirebaseUser {
    return this.user;
  }

  @Mutation
  public setUser(user: FirebaseUser): void {
    this.user = user;
  }

  @Action
  public actionCheckLogin(): void {
    if (!this.User.isAnonymous) {
      console.log('Firebase check user');
    }
  }
}
