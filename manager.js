let currentUrl;
let cookiesArray=[];
let cookieName=document.getElementById("cookieName");
cookieName.addEventListener('mouseover',function() {
    console.log("first");
    chrome.tabs.query({'active':true,'windowId':chrome.windows.WINDOW_ID_CURRENT},function(tabs){
        currentUrl=tabs[0].url;
    });
});
cookieName.addEventListener('click',function(){
    console.log("second");
    chrome.cookies.getAll({"url":currentUrl},function(cookieArray) {
        for (let i=0;i<cookieArray.length;i++) {
            chrome.cookies.remove({url:currentUrl,name:cookieArray[i].name},function(coke) {
                console.log("Deleted Cookie"+coke);
            })
        }
    })
});