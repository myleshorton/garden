chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if( details.url == "https://www.amazon.com/" )
            return {redirectUrl: "https://smile.amazon.com/ch/95-4816207" };
    },
    {urls: ["https://www.amazon.com/*"]},
    ["blocking"]);
