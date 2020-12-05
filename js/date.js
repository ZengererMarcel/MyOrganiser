document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchend', handleTouchEnd, false);

var xDown = null;
var yDown = null;
var xDiff = null;
var yDiff = null;

var today = new Date();

var weekday = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag' ];

var diffDay = 0;
var actDay = today.getDay()
var day = weekday[actDay];
var year = today.getFullYear();
var dd = today.getDate();
var mm = today.getMonth() + 1;

var thirtyone = [1, 3, 5, 7, 8, 10, 12];
var thirty = [4, 6, 9, 11];

function getTouches(evt) {
    return evt.touches ||
        evt.originalEvent.touches;
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    xDiff = xDown - xUp;
    yDiff = yDown - yUp;

}

function handleTouchEnd(evt) {
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 60 ) {
            dd++;
            diffDay++;
        } else if( xDiff < -60){
            dd--;
            diffDay--;
        }
        refreshDate();
    }

    xDown = null;
    yDown = null;
    xDiff = null;
    yDiff = null;
}

function refreshDate(){

    if(dd===0){
        if(mm===1){
            mm=12;
        }
        else{
            mm--;
        }

        if(thirtyone.includes(mm)){
            dd = 31;
        }
        else if(thirty.includes(mm)){
            dd = 30;
        }
        else{
            dd = 28;
        }
    }
    else if((dd===29&&mm===2) || (dd===31&&thirty.includes(mm)) || (dd===32&&thirtyone.includes(mm))){
        dd=1;
        if(mm===12){
            mm=1
        }
        else {
            mm++;
        }
    }

    if (dd.length < 2) {
        dd = '0' + dd;
    }
    if (mm.length < 2) {
        mm = '0' + mm;
    }

    var newDay = actDay + diffDay
    while(newDay < 0) {
        newDay+=7;
    }

    while(newDay > 6) {
        newDay-=7;
    }

    day = weekday[newDay];
    today = day + ', ' + dd + '.' + mm + '.' + year;
    document.getElementById("date").innerHTML = today;
}

window.addEventListener("load", function() {
    refreshDate();
});