
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDpJ6tFntF7B5CXva-z-TU17DIXQWYGxis",
      authDomain: "lets-chat-web-app-12e7d.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-12e7d-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-12e7d",
      storageBucket: "lets-chat-web-app-12e7d.appspot.com",
      messagingSenderId: "376683053282",
      appId: "1:376683053282:web:7a5fedc28050d74eca9ebb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function addUser()
    {
        user_name=document.getElementById("username").value;
        firebase.database().ref("/").child(user_name).update({
  city:"hyderabad"
        });
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
