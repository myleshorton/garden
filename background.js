chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
	console.log('in extension')
        if( details.url == "https://www.amazon.com/" )
            return {redirectUrl: "https://www.amazon.com/?tag=thegarcoopenu-20" };
    },
    {urls: ["https://www.amazon.com/*"]},
    ["blocking"]);
