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
var ref = db.ref("meta");
var notes = []


ref.once('value').then(function(snap){
    for(var key in snap.val()){
        notes.push(snap.val()[key])
    }
    sortNotes();
    filterNotes();
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

function filterNotes() {
    var urlParams;
    // Thank you Stack Overflow's Andy E!
    (window.onpopstate = function () {
        var match,
            pl     = /\+/g,  // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
            query  = window.location.search.substring(1);

        urlParams = {};
        while (match = search.exec(query))
           urlParams[decode(match[1])] = decode(match[2]);
    })();
    
    if(urlParams.search == undefined) return;
    var search = urlParams.search.toLowerCase();
    notes = notes.filter(function(obj){
        console.log(obj);
        return obj.className.toLowerCase().includes(search) || obj.contents.toLowerCase().includes(search) || obj.filename.toLowerCase().includes(search);
    });
    
}


function display() {
    if(notes.length == 0) alert("No notes found...");
    
    var container = document.getElementById('contain');
    document.getElementById('myspinner').remove();
    
    for(note in notes){
        var obj = notes[note];
        var date = new Date(obj.dateModified);
        
        var str = "view?content=" + btoa(encodeURIComponent(obj.className + " - " + obj.filename));
        
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
        "        </div>";
        
        container.innerHTML += txt;
    }
}