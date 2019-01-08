function getQuerystring(key, default_) {
    if (default_ == null) default_ = "";
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(window.location.href);
    if (qs == null)
        return default_;
    else
        return qs[1];
}


function resetFromCodeCookie() {
    setCookie('fromcode', '', 1);
}

function setFromCodeCookie() {
    var fromcode = getQuerystring('from');

    if (fromcode != '')
        setCookie('fromcode', fromcode, 1);
}

function setProfileCodeCookie() {
    var fromcode = getQuerystring('code');

    if (fromcode != '')
        setCookie('profilecode', fromcode, 1);
}
