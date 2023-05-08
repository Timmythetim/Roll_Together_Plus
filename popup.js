const tab = await chrome.tabs.query({
    currentWindow : true, active : true
  });
const button = document.querySelector("button");
button.addEventListener("click", async () => {
        chrome.runtime.sendMessage({timestamp: tab});
})
  