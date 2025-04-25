//1) Fetch Data from these two sources and return the faster response: https://dummyjson.com/users and https://jsonplaceholder.typicode.com/users .
// /Use either fetch or axios.

const fetchFasterData = async () => {
  const url1 = "https://dummyjson.com/users";
  const url2 = "https://jsonplaceholder.typicode.com/users";

  const fetchRequest1 = fetch(url1).then((response) => response.json());
  const fetchRequest2 = fetch(url2).then((response) => response.json());

  const response = await Promise.race([fetchRequest1, fetchRequest2]);
  return console.log(response);
};

fetchFasterData();

///2) Write three promises that return arrays after different time intervals:
//Two should be resolve successfully.
///One should be reject.
//Merge the only fulfilled promises/

const myPromise1 = new Promise((res) =>
  setTimeout(() => {
    res(2);
  }, 1000)
);
const myPromise2 = new Promise((res) =>
  setTimeout(() => {
    res(2);
  }, 3000)
);
const myPromise3 = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve(3);
    }, 4000);
  } else {
    reject("error");
  }
});

async function main() {
  const array1 = await Promise.allSettled([myPromise1, myPromise2, myPromise3]);

  const filtered = array1.filter((el) => el.status === "fulfilled");
  //ak yvelaze metad is gamisworda ro chveulebrivad shevdzeli uproblemod am filtris
  //dawera arc searchi araferi :))
  console.log(filtered);
}

main();
