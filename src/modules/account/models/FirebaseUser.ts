interface FirebaseUser {
  displayName?: string;
  email?: string;
  isAnonymous: boolean;
}
const firebaseUserDefault: FirebaseUser = {
  isAnonymous: true,
};

export { firebaseUserDefault, FirebaseUser };
