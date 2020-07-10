chrome.tabs.query({
    active: true,
    currentWindow: true
},
    (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "get_images" }, response => {
            console.log(response)
        })

    })