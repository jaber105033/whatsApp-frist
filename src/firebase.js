// import firebase from 'firebase';
// const firebaseConfig = {
//     apiKey: "AIzaSyADotuD4J16cr6WT5X_eMxHp8jRPVHjUmQ",
//     authDomain: "data-msg.firebaseapp.com",
//     projectId: "data-msg",
//     storageBucket: "data-msg.appspot.com",
//     messagingSenderId: "362191315932",
//     appId: "1:362191315932:web:716f3934d898089007e519",
//     measurementId: "G-371P20X5FK"
//   };
//   const firebaseApp=firebase.initializeApp(firebaseConfig);
//   const db=firebaseApp.firestore()
//   const auth=firebase.auth()
//   const provider=new firebase.auth.GoogleAuthProvider()
//   export { auth , provider}
//   export default db

let data=[
  {
    id:"1", 
    name:"ali", 
    messeges:[
    {messgerText:'hi milad'},
    {messgerText:'how you doing?'},

  ],
},
  {
    id:"2", 
    name:"reza",
    messeges:[
    {messgerText:'hi jaber'},
    {messgerText:'Thanks milad?'},
  ],
},
];
export default data;