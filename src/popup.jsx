import React from "react";
import { render } from "react-dom";

const Popup = () => {
  return (
    <div>
      <h1>Henlo World</h1>
    </div>
  );
};

render(<Popup />, document.querySelector("#react-target"));

let basicResponseButton = document.querySelector("#basic-response-btn");
// let testButton = document.querySelector("#test-btn");
let buttons = document.querySelector("#test");
const saveBtn = document.querySelector("#save-btn");
testBtn = document.querySelector("#test-btn");
const form = document.querySelector("#new-form");

document.addEventListener("DOMContentLoaded", function () {
  // basicResponseButton.addEventListener("click", copyToClipboard, false);

  saveBtn.addEventListener("click", set, false);
  testBtn.addEventListener("click", test, false);
});

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
      resolve(item);
    });
  });
}

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

const test = () => {
  getAllStorageSyncData()
    .then((data) => {
      console.log(JSON.stringify(data));
      debugger;
      const div = document.querySelector("#test");
      let p = document.createElement("p");
      const textnode = document.createTextNode(JSON.stringify(data));
      p.appendChild(textnode);
      div.appendChild(p);
    })
    .catch((err) => console.log(err));
};

const set = () => {
  const name = document.querySelector("#name").value;
  const text = document.querySelector("#text").value;
  if (name === "" || text === "") {
    alert("Please fill in all fields");
    throw new Error("Please fill in all fields");
  }
  let item = {};
  item[name] = text;
  alert("Setting new item to storage");

  setStorageSyncData(item)
    .then((data) => {
      alert(JSON.stringify(data));
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
