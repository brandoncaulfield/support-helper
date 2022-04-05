import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

/**
 * Set
 * @param {*} item
 * @returns
 */
function setStorageSyncData(item: any) {
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

export default function ValidationTextFields() {
  const [newData, setNewData] = React.useState<{
    name: String;
    category: String;
    text: string;
  }>();

  const set = () => {
    if (newData.name === "" || newData.text === "") {
      alert("Please fill in all fields");
      throw new Error("Please fill in all fields");
    }
    let item: any = {};
    item[`${newData.name}`] = newData.text;

    setStorageSyncData(item)
      .then((data) => {
        alert(JSON.stringify(data));
      })
      .catch((err) => alert(err));
  };

  const onFormFieldChange = (evt: any) => {
    setNewData((newData: any) => ({
      ...newData,
      [evt.target.id]: evt.target.value,
    }));
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="name" label="name" onChange={onFormFieldChange} />
        <TextField
          id="text"
          label="Text"
          onChange={onFormFieldChange}
          multiline
        />
        <Button
          variant="outlined"
          onClick={() => {
            console.log(newData);
            set();
          }}
        >
          Submit
        </Button>
      </div>
    </Box>
  );
}
