chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if( details.url == "https://www.amazon.com/" )
            return {redirectUrl: "https://goo.gl/1iSMnm" };
    },
    {urls: ["https://www.amazon.com/*"]},
    ["blocking"]);
