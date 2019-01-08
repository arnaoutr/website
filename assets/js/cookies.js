function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + '; Path=/;';
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";

}

function delete_cookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function CreateGuidCookie() {
    var cookie = '';
    cookie = getGuid();
       if (cookie != '')
            setCookie('gGuid', cookie, 1);

    //cookie = getCookie('gGuid');
    //if (cookie == '' || cookie == 'false') {
    //    cookie = getGuid();
    //    if (cookie != '')
    //        setCookie('gGuid', cookie, 1);
    //}
}

function getGuid() {

    var cookie = '';
    var url = "/api/apisignup/getguid";
    jQuery.ajax({
        async: false,
        type: "GET",
        url: url,
        data: '',
        dataType: "json",
        context: document.body,
        contentType: 'application/json; charset=utf-8'
    }).success(function (data) {
        cookie = data;
    })

    return cookie;

}