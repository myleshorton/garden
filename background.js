chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if( details.url == "https://www.amazon.com/" )
            return {redirectUrl: "https://www.amazon.com/?tag=gardencoopftw-20" };
    },
    {urls: ["https://www.amazon.com/*"]},
    ["blocking"]);
