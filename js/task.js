var tasknumber = 1;

function addElement () {

    var element = document.createElement("div");
    element.id = 't' + tasknumber;
    element.style.backgroundColor = "#93de80";
    element.style.borderRadius = "20px";
    element.style.border
    element.style.left = "5%";
    element.style.right = "5%";
    element.style.border = "thin solid black";
    element.style.height = "175px";
    element.style.margin = "10px";

    var shortInfo = document.createElement("div");
    shortInfo.style.width = "90%";
    shortInfo.style.left = "5%";
    shortInfo.style.right = "5%";
    shortInfo.id = "short"
    shortInfo.style.position = "relative";

    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    checkbox.style.position = "absolute";
    checkbox.style.float = "left";
    checkbox.style.height = "15px";
    checkbox.style.width = "15px";
    checkbox.style.left = "2%";
    checkbox.style.top = "15px";
    shortInfo.appendChild(checkbox);

    var timespan = document.createElement("p");
    timespan.innerHTML = "15:00\n15:30";
    timespan.style.whiteSpace = "pre-wrap";
    timespan.style.position = "absolute";
    timespan.style.left = "20%";
    timespan.style.float = "left";
    timespan.style.height = "center";
    timespan.style.margin = "7px";
    shortInfo.appendChild(timespan);

    var activity = document.createElement("p");
    activity.innerHTML = "Sport";
    activity.style.position = "absolute";
    activity.style.float = "left";
    activity.style.left = "40%";
    activity.style.margin = "5px";
    activity.style.fontSize = "30px";
    shortInfo.appendChild(activity);

    var onclose = document.createElement("img");
    onclose.src = "img/down-arrow.png";
    onclose.style.position = "absolute";
    onclose.style.right = "0%";
    onclose.style.height = "center";
    onclose.style.width = "30px";
    onclose.style.margin = "10px";
    onclose.className = "show";
    onclose.style.zIndex = "1";
    shortInfo.appendChild(onclose);

    var longInfo = document.createElement("div");
    longInfo.className = "hidden";
    longInfo.style.position = "relative";
    longInfo.style.width = "90%";
    longInfo.style.left = "5%";
    longInfo.style.right = "5%";
    longInfo.style.top = "20%";
    //longInfo.id = "0";
    //longInfo.style.display = "none";

    var lNote = document.createElement("p");
    lNote.innerHTML = "Notiz:";
    lNote.style.left = "2%";
    lNote.style.position = "absolute";
    longInfo.appendChild(lNote);

    var tNote = document.createElement("textarea");
    tNote.rows = 3;
    tNote.style.width = "94%";
    tNote.style.left = "3%";
    tNote.style.right = "3%";
    tNote.style.top = "40px";
    tNote.style.position = "absolute";
    longInfo.appendChild(tNote);

    var lPrio = document.createElement("p");
    lPrio.innerHTML = "Priorität:";
    lPrio.style.left = "2%";
    lPrio.style.top = "85px";
    lPrio.style.position = "absolute";
    longInfo.appendChild(lPrio);

    var selectPrio = document.createElement("select");
    selectPrio.style.left = "25%";
    selectPrio.style.marginTop = "16px";
    selectPrio.style.top = "85px";
    selectPrio.style.position = "absolute";

    var prioNull = document.createElement("option")
    prioNull.innerHTML = "0";
    prioNull.value = "0";
    selectPrio.appendChild(prioNull);

    var prioOne = document.createElement("option")
    prioOne.innerHTML = "1";
    prioOne.value = "1";
    selectPrio.appendChild(prioOne);

    var prioTwo = document.createElement("option")
    prioTwo.innerHTML = "2";
    prioTwo.value = "2";
    selectPrio.appendChild(prioTwo);


    longInfo.appendChild(selectPrio);


    var edit = document.createElement("p");
    edit.innerHTML = "B";
    edit.style.left = "75%";
    edit.style.top = "85px";
    edit.style.position = "absolute";
    longInfo.appendChild(edit);

    var clear = document.createElement("p");
    clear.innerHTML = "L";
    clear.style.left = "90%";
    clear.style.top = "85px";
    clear.style.position = "absolute";
    clear.onclick = function () {
        document.getElementById(this.parentNode.parentNode.id).remove();
    }
    longInfo.appendChild(clear);

    element.appendChild(shortInfo);
    element.appendChild(longInfo);
    document.getElementById('tasks').appendChild(element);

    tasknumber++;

}

function loadTasks(){

}

window.addEventListener("load", function() {
    addElement();
    addElement();
    loadTasks();
});

