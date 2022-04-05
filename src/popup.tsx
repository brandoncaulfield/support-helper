import * as React from "react";
import { render } from "react-dom";

// Mui
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Components
import NewForm from "./components/NewForm";
import { Responses } from "./components/Responses";
import { CodeSnippets } from "./components/CodeSnippets";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Popup = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Responses" {...a11yProps(0)} />
          <Tab label="Code Snippets" {...a11yProps(1)} />
          <Tab label="New" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Responses />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CodeSnippets />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NewForm />
      </TabPanel>
    </Box>
  );
};

render(<Popup />, document.querySelector("#react-target"));

// let basicResponseButton = document.querySelector("#basic-response-btn");
// // let testButton = document.querySelector("#test-btn");
// let buttons = document.querySelector("#test");
// const saveBtn = document.querySelector("#save-btn");
// testBtn = document.querySelector("#test-btn");
// const form = document.querySelector("#new-form");

// document.addEventListener("DOMContentLoaded", function () {
//   // basicResponseButton.addEventListener("click", copyToClipboard, false);

//   saveBtn.addEventListener("click", set, false);
//   testBtn.addEventListener("click", test, false);
// });

// const copyToClipboard = () => {
//   debugger;
//   copyText = document.querySelector("#basic-response-txt");

//   /* Select the text field */
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); /* For mobile devices */

//   /* Copy the text inside the text field */
//   document.execCommand("copy");

//   /* Alert the copied text */
//   alert("Text Copied!");
// };

// /**
//  * Set
//  * @param {*} item
//  * @returns
//  */
// function setStorageSyncData(item: any) {
//   // Immediately return a promise and start asynchronous work
//   return new Promise((resolve, reject) => {
//     // Asynchronously fetch all data from storage.sync.
//     chrome.storage.sync.set(item, function () {
//       // Pass any observed errors down the promise chain.
//       if (chrome.runtime.lastError) {
//         return reject(chrome.runtime.lastError);
//       }
//       resolve(item);
//     });
//   });
// }

// // const getAllSnippets = () => {
// // Reads all data out of storage.sync and exposes it via a promise.
// //
// // Note: Once the Storage API gains promise support, this function
// // can be greatly simplified.
// function getAllStorageSyncData() {
//   // Immediately return a promise and start asynchronous work
//   return new Promise((resolve, reject) => {
//     // Asynchronously fetch all data from storage.sync.
//     chrome.storage.sync.get(null, (items) => {
//       // Pass any observed errors down the promise chain.
//       if (chrome.runtime.lastError) {
//         return reject(chrome.runtime.lastError);
//       }
//       // Pass the data retrieved from storage down the promise chain.
//       resolve(items);
//     });
//   });
// }
// // };

// const test = () => {
//   getAllStorageSyncData()
//     .then((data) => {
//       console.log(JSON.stringify(data));
//       debugger;
//       const div = document.querySelector("#test");
//       let p = document.createElement("p");
//       const textnode = document.createTextNode(JSON.stringify(data));
//       p.appendChild(textnode);
//       div.appendChild(p);
//     })
//     .catch((err) => console.log(err));
// };

// const set = () => {
//   const name = document.querySelector("#name").value;
//   const text = document.querySelector("#text").value;
//   if (name === "" || text === "") {
//     alert("Please fill in all fields");
//     throw new Error("Please fill in all fields");
//   }
//   let item = {};
//   item[name] = text;
//   alert("Setting new item to storage");

//   setStorageSyncData(item)
//     .then((data) => {
//       alert(JSON.stringify(data));
//     })
//     .catch((err) => alert(err));
// };

// function openCity(evt, cityName) {
//   // Declare all variables
//   var i, tabcontent, tablinks;

//   // Get all elements with class="tabcontent" and hide them
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   // Get all elements with class="tablinks" and remove the class "active"
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   // Show the current tab, and add an "active" class to the link that opened the tab
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }
