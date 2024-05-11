// ASYNC-AWAIT :

const getData = async () => {
  return "Namaste Javascript"
}

const result = getData()
console.log(result)

//❓How to extract data from above promise? One way is using promise .then
result.then((res) => console.log(res))

// Q: How we can use await along with async function?
// A: async and await combo is used to handle promises.

// But Question is how we used to handle promises earlier and why we even need async/await?

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value!!")
  }, 5000)
})

function getData1() {
  p.then(res => console.log(res))
  console.log("Namaste javascript is printing immediately because we are using .then here")
}

getData1()

// 📌 Till now we have been using Promise.then/.catch to handle promise.
// Now let's see how async await can help us and how it is different

// The rule is we have to use keyword await in front of promise.

const handlePromise = async () => {
  const val = await p;
  console.log("Namaste javascript and promise resolve after 10 sec because we are using await keyword here")
  console.log(val)
}

handlePromise()

