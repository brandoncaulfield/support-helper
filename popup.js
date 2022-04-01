let basicResponseButton = document.querySelector("#basic-response-btn");
// let testButton = document.querySelector("#test-btn");
let buttons = document.querySelector("#test");

document.addEventListener(
  "DOMContentLoaded",
  function () {
    // basicResponseButton.addEventListener("click", copyToClipboard, false);
    // testButton.addEventListener("click", test, false);
    buttons.addEventListener("click", openCity(evt, "London"), false);
  },
  false
);

const copyToClipboard = () => {
  debugger;
  copyText = document.querySelector("#basic-response-txt");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Text Copied!");
};

// const getAllSnippets = () => {
// Reads all data out of storage.sync and exposes it via a promise.
//
// Note: Once the Storage API gains promise support, this function
// can be greatly simplified.
function getAllStorageSyncData() {
  // Immediately return a promise and start asynchronous work
  return new Promise((resolve, reject) => {
    // Asynchronously fetch all data from storage.sync.
    chrome.storage.sync.get(null, (items) => {
      // Pass any observed errors down the promise chain.
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      // Pass the data retrieved from storage down the promise chain.
      resolve(items);
    });
  });
}
// };

/**
 * Set
 * @param {*} item
 * @returns
 */
function setStorageSyncData(item) {
  // Immediately return a promise and start asynchronous work
  return new Promise((resolve, reject) => {
    // Asynchronously fetch all data from storage.sync.
    chrome.storage.sync.set(item, function () {
      // Pass any observed errors down the promise chain.
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve(items);
    });
  });
}

const test = () => {
  debugger;
  alert("Henlo");
  getAllStorageSyncData()
    .then((data) => {
      alert(JSON.stringify(data));
      const list = document.querySelector("#responses");
      for (i = 0; i <= 3; i++) {
        let listItem = document.createElement("li");
        listItem.value = i;
        list.appendChild(listItem);
      }
    })
    .catch((err) => alert(err));
};

const set = () => {
  debugger;
  const name = document.querySelector("#name");
  const text = document.querySelector("#text");
  let item = {};
  item[name] = text;
  alert("Setting new item to storage");

  setStorageSyncData(item)
    .then((data) => {
      alert(data);
    })
    .catch((err) => alert(err));
};

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
