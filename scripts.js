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
    
    var container = document.getElementById('container');
    
    for(note in notes){
        var obj = notes[note];
        var date = new Date(obj.dateModified);
        
        var txt = 
        "<a href='view.html?content=" + btoa(obj.contents) + "'><div class='note'>" + 
            
        "<div class='class'>" + obj.className +  "</div>" +
        "<div class='center'>" + 
            "<div class='name'>" + obj.filename +  "</div>" +
            "<div class='date'>Last Modified: <span>" + date.toRelativeTime() +  "</span></div>" +
        "</div>" +
        "<div class='right'><div class='arrow'></div></div>"+
        "</div></a>";
        
        container.innerHTML += txt;
    }
}