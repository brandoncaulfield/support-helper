const onSave = () => {
  const title = document.querySelector("#title").value;
  const category = document.querySelector("#category").value;
  const text = document.querySelector("#text").value;

  chrome.storage.sync.set(
    { title: { category: category, text: text } },
    function () {
      alert(
        `Value is set to title: ${title}, category: ${category} with text: ${text}`
      );
    }
  );
  debugger;
  // chrome.storage.sync.get(["test"], function (result) {
  //   alert("Value currently is " + JSON.stringify(result.test));
  // });
};

// Saves options to chrome.storage
function save_options() {
  var color = document.getElementById("color").value;
  var likesColor = document.getElementById("like").checked;
  chrome.storage.sync.set(
    {
      favoriteColor: color,
      likesColor: likesColor,
    },
    function () {
      // Update status to let user know options were saved.
      var status = document.getElementById("status");
      status.textContent = "Options saved.";
      setTimeout(function () {
        status.textContent = "";
      }, 750);
    }
  );
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get(
    {
      favoriteColor: "red",
      likesColor: true,
    },
    function (items) {
      document.getElementById("color").value = items.favoriteColor;
      // document.getElementById("like").checked = items.likesColor;
    }
  );
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", onSave);
