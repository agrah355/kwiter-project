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

var room_name=document.getElementById("room_name").value;
function logout(){
    window.location="index.html";
    localStorage.removeItem("name");
}
function add_room(){
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room"
  });

  localStorage.setItem("Room Name", room_name);
  window.location="room_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  room_names = childKey;

  row="<div id="+room_names+" class='room_name' onclick='redirectToRoomPage(this.id)'>#"+room_names+"</div>";
  document.getElementById("output").innerHTML +=row;
 });});}
getData();

function redirectToRoomName(room){
  console.log(room);
  localStorage.setItem("Room Name", room);
  window.location="room_page.html";
}