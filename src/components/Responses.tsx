import * as React from "react";

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

export function Responses() {
  const [responses, setResponses] = React.useState<{}>();

  const test = () => {
    getAllStorageSyncData()
      .then((data) => {
        setResponses(data);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    test();
  }, [test]);

  return (
    <div>
      <h1>Responses</h1>
      <p>{JSON.stringify(responses)}</p>
    </div>
  );
}
