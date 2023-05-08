chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    //This should eventually get information about creating a room, then send it to the python backend
    console.log(request.timestamp)

});