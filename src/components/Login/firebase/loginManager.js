import firebase from "firebase/app";
import "firebase/auth";
export const firebaseConfig = {
  apiKey: "AIzaSyDQPC8zGXvGD1gTYtVoSJcEcuNDqlAV2N0",
  authDomain: "red-onion-bd71.firebaseapp.com",
  projectId: "red-onion-bd71",
  storageBucket: "red-onion-bd71.appspot.com",
  messagingSenderId: "5138782910",
  appId: "1:5138782910:web:44884434d1623b3ad69cef",
};

export const initializeLoginFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

const setUserToken = () => {
  firebase
    .auth()
    .currentUser.getIdToken(/* forceRefresh */ true)
    .then(function (idToken) {
      sessionStorage.setItem("token", idToken);
    })
    .catch(function (error) {
      // Handle error
    });
};

export const handleSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then((res) => {
      const signedOutUser = {
        isSignedIn: false,
        name: "",
        email: "",
        photo: "",
      };
      return signedOutUser;
    })
    .catch((err) => {
      // console.log(err);
      // console.log(err.message);
    });
};

export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      updateUserName(name);
      verifyEmail();
      sessionStorage.setItem("name", name);
      setUserToken();
      return newUserInfo;
    })

    .catch(function (error) {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log(errorCode, errorMessage);
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
};

export const signInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      sessionStorage.setItem("name", newUserInfo.displayName);
      sessionStorage.setItem("email", newUserInfo.email);
      setUserToken();
      return newUserInfo;
    })
    .catch(function (error) {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log(errorCode, errorMessage);
      const newUserInfo = {};
      newUserInfo.error = error.message;
      return newUserInfo;
    });
};

const updateUserName = (name) => {
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: name,
    })
    .then(function () {
      // console.log('user name updated successfully')
    })
    .catch(function (error) {
      // console.log(error)
    });
};

const verifyEmail = () => {
  var user = firebase.auth().currentUser;

  user
    .sendEmailVerification()
    .then(function () {
      // Email sent.
    })
    .catch(function (error) {
      // An error happened.
    });
};

export const resetPassword = (email) => {
  var auth = firebase.auth();

  auth
    .sendPasswordResetEmail(email)
    .then(function () {
      // Email sent.
    })
    .catch(function (error) {
      // An error happened.
    });
};
