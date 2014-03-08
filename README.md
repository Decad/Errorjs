# ErrorJs

You can only fix what you know about and web applications are now being built with heavy javascript frontends Errorjs is a simple library to capture errors happening on the frontend and upload them to your backend to keep you in the know.

Errorjs will post any javascript errors that occur as json with the following structure:

    {
        msg: Error message,
        url: Url of the script that errored,
        linenumber: Linenumber of the error,
        column: The coloumn that the error is on,
        stacktrace: Chrome supports full stack traces but other browsers will only report the function that caused the error.
    }

# Install

open errorjs and change on the last line where it says: `})(window, /* Url to post logs to */ '/log/error')`, to be the correct url for your backend to log the errors. Then add errorjs script tag to your page as one of the first scripts to be run in order to capture any errors that occur when loading.

# Licence

MIT