function fetchData() {
  let flag = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) {
        resolve("peanut butter");
      } else {
        reject("error");
      }
    }, 1000);
  });
}

async function jsonPlaceHolderFun(endpoint) {
  const data = await fetch(endpoint);
  const finaldata = await data.json();
  return finaldata;
}

module.exports = { fetchData, jsonPlaceHolderFun };
