

function textNode() {
    const node = document.createElement("TEXTAREA");
    node.rows = 3;
    node.style.width = "94%";
    node.style.left = "3%";
    node.style.right = "3%";
    node.style.top = "40px";
    node.style.position = "absolute";
    node.style.marginLeft = "5%";
}

function prio() {
    const lPrio = document.createElement("p");
    lPrio.innerHTML = "Priorität:";
    lPrio.style.left = "2%";
    lPrio.style.top = "85px";
    lPrio.style.position = "absolute";
    longInfo.appendChild(lPrio);

    const selectPrio = document.createElement("select");
    selectPrio.style.left = "25%";
    selectPrio.style.marginTop = "16px";
    selectPrio.style.top = "85px";
    selectPrio.style.position = "absolute";

    const prioNull = document.createElement("option");
    prioNull.innerHTML = "0";
    prioNull.value = "0";
    selectPrio.appendChild(prioNull);

    const prioOne = document.createElement("option");
    prioOne.innerHTML = "1";
    prioOne.value = "1";
    selectPrio.appendChild(prioOne);

    const prioTwo = document.createElement("option");
    prioTwo.innerHTML = "2";
    prioTwo.value = "2";
    selectPrio.appendChild(prioTwo);


    longInfo.appendChild(selectPrio);
}