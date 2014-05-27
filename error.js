//
// Errorjs
//
// Upload javascript errors for logging, Include stack traces when possible.
//
// Author: Declan Cook
// Licence: MIT
//
(function(w, url){
    //save the previously bound handler.
    var _onerror = w.onerror;

    w.onerror = function(errMsg, url, linenumber, column, errObj){
        var err = {
            msg: errMsg,
            url: url,
            linenumber: linenumber,
            column: column,
            stacktrace: errObj ? errObj.stack : arguments.callee.caller
        }

        var xhr;
        //IE <8 support
        if (window.XMLHttpRequest) {
            xhr = new w.XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new w.ActiveXObject("Microsoft.XMLHTTP");
        }

        //Fire and forget
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(err));

        //Call the previously bound handler
        if(typeof _onerror === "function")
            _onerror.apply(this, arguments)
    }

})(window, /* Url to post logs to */ '/log/error')
