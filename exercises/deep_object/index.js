const deepObject = (myObject = null) => {
  if (!myObject) {
    return [];
  }

  return convertToString(myObject);
};

const convertToString = (myObject) => {
  const entries = Object.entries(myObject);
  const result = entries.map((entry) => {
    if (typeof entry[1] === "object") {
      entry = [entry[0], ...Object.entries(entry[1])[0]];
    }

    return entry.join();
  }, []);
  
  return result;
};

module.exports = deepObject;
