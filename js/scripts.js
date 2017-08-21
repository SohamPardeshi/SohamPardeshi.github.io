// Initialize Firebase
var config = {
    apiKey: "AIzaSyC1nbQ_QMFHAposHeZVJyfNjBT8F53cPss",
    authDomain: "markdownnotes-b88c1.firebaseapp.com",
    databaseURL: "https://markdownnotes-b88c1.firebaseio.com",
    projectId: "markdownnotes-b88c1",
    storageBucket: "markdownnotes-b88c1.appspot.com",
    messagingSenderId: "491819736828"
};
firebase.initializeApp(config);


var db = firebase.database();
var ref = db.ref("files");
var notes = []


ref.once('value').then(function(snap){
    for(var key in snap.val()){
        notes.push(snap.val()[key])
    }
    sortNotes();
    display();
});


function sortNotes(){
    function compare(a, b) {
      if (a.dateModified > b.dateModified)
        return -1;
      if (a.dateModified < b.dateModified)
        return 1;
      return 0;
    }
    notes.sort(compare);
}


function display() {
    if(notes.length == 0) alert("No notes found...");
    
    var container = document.getElementById('contain');
    document.getElementById('myspinner').remove();
    
    for(note in notes){
        var obj = notes[note];
        var date = new Date(obj.dateModified);
        var str = "view.html?content=" + btoa(obj.contents) + "&title=" + obj.filename;
        
        var txt = 
        "" +
        "        <div class='col s12 m3'>"+
        "            <div class='card darken-1'>"+
        "                <div class='card-content black-text'>"+
        "                    <span class='myclass'>" + obj.className +  "</span>"+
        "                    <span class='card-title'>" + obj.filename +  "</span>"+
        "                </div>"+
        "                <div class='card-action'>"+
        "                       <span class='mydate'>" + date.toRelativeTime() + "</span>" +
        "                       <a class='waves-effect waves-light btn ' style='margin-left: 40px;' href='" + str + "' >View</a>" +
        "                </div>"+
        "            </div>"+
        "        </div>"+
        ""
        
        container.innerHTML += txt;
    }
}