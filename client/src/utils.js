import $ from 'jquery';

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

var createCookie = function(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCSRF() {
    var csrftoken = readCookie('csrftoken')
    if (csrftoken == null) {
        csrftoken = $('#csrf_token').val()
    }
    return csrftoken;
}

function isToday(date) {
    var currentDate = new Date();
    if (date.getFullYear() !== currentDate.getFullYear()) {
        return false;
    }
    if (date.getMonth() !== currentDate.getMonth()) {
        return false;
    }
    if (date.getDate() !== currentDate.getDate()) {
        return false;
    }
    return true;
}

function getItemsCostSum(items) {
    var sum = 0;
    var currentDate = new Date();
    for (var i = 0; i < items.length; i++) {
        var date = new Date(items[i].date);
        if (isToday(date)) {
            sum += parseInt(items[i].cost);
        }
    }
    return sum;
}

export {readCookie, createCookie, getCSRF, isToday, getItemsCostSum};