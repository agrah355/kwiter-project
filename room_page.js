// firebase links //
var firebaseConfig = {
    apiKey: "AIzaSyABEks-Bx0VtRO48U6FNd5Ya-REMMe3c1g",
    authDomain: "letschat-d7bad.firebaseapp.com",
    databaseURL: "https://letschat-d7bad-default-rtdb.firebaseio.com",
    projectId: "letschat-d7bad",
    storageBucket: "letschat-d7bad.appspot.com",
    messagingSenderId: "422397004778",
    appId: "1:422397004778:web:d78960c3051d4d587c8093"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function send(){
    room_name=document.getElementById("room_name").value;
    user_name=document.getElementById("user_name").value;
    msg=document.getElementById("message").value;

    firebase.database().ref(room_name).push({
        like:0,
        message:msg,
        name:user_name,
    });

    document.getElementById("message").value="";
}



function logout(){
        window.location="index.html";
        localStorage.removeItem ("Room Name")
        localStorage.removeItem("name");
}