document.addEventListener("DOMContentLoaded",event =>{
  const app = firebase.app();
  console.log(app)
  });
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
}
