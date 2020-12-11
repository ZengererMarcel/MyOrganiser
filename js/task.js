function addElement  ( tasknumber) {

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
    checkbox.style.height = "20px";
    checkbox.style.width = "20px";
    checkbox.style.left = "2%";
    checkbox.style.top = "10px";
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

    const edit = document.createElement("img");
    edit.src = "img/pencil.png";
    edit.style.left = "75%";
    edit.style.top = "100px";
    edit.style.height = "25px";
    edit.style.position = "absolute";
    longInfo.appendChild(edit);

    const clear = document.createElement("img");
    clear.src = "img/trash.png";
    clear.style.left = "90%";
    clear.style.top = "100px";
    clear.style.height = "25px";
    clear.style.position = "absolute";
    clear.onclick = function () {
        document.getElementById(this.parentNode.parentNode.id).remove();
    }
    longInfo.appendChild(clear);

    element.appendChild(shortInfo);
    element.appendChild(longInfo);
    document.getElementById('tasks').appendChild(element);

}

function newElement(){
    localStorage["taskNumber"] = parseInt(localStorage["taskNumber"]) + 1;
}

if(location.pathname.split("/").slice(-1)[0] === "index.html") {
    window.addEventListener("load", function () {

        if (localStorage["taskNumber"] === undefined)
            localStorage["taskNumber"] = 5

        var localtasknumber = localStorage["taskNumber"];
        console.log(localStorage["taskNumber"]);

        for (var i = 0; i < localtasknumber; i++) {
            addElement(localtasknumber);
        }
    });
}

