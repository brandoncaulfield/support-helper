// nothing here yet :)
// Set button colour depending on whether or not an API key is found
// Search for API key script in the background

let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});

var contextMenuItem = {
  id: "01",
  title: "My Chrome context menu 👆" /* what appears in the menu */,
  contexts: [
    "page",
  ] /* to make this appear only when user selects something on page */,
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((clickData) => {
  if (clickData.menuItemId == "tutorial02") {
    alert("clicked point in page 👏👏");
  }
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    console.log(
      `Storage key "${key}" in namespace "${namespace}" changed.`,
      `Old value was "${oldValue}", new value is "${newValue}".`
    );
  }
});
// chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
//   if (msg.action === "updateIcon") {
//     if (msg.value) {
//       chrome.browserAction.setIcon({ path: "/assets/tick.png" });
//     } else {
//       chrome.browserAction.setIcon({ path: "/assets/cross.png" });
//     }
//   }
// });

// chrome.browserAction.setIcon({ path: "/images/sad-32.png" });
