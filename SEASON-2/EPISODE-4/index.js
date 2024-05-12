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
  console.log("Namaste javascript is printing immediately because we are using .then here and after 5 sec promise will be resolved")
}

getData1()

// 📌 Till now we have been using Promise.then/.catch to handle promise.
// Now let's see how async await can help us and how it is different

// The rule is we have to use keyword await in front of promise.

const handlePromise = async () => {
  const val = await p;
  // `await` here is used inside an async function to pause the execution of the function until a promise is resolved.
  console.log("Namaste javascript and promise resolve will print after 5 sec after a promise is resolved and then go to tge next line")
  console.log(val)
}

handlePromise()


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value by p1!!");
    }, 5000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value by p2!!");
    }, 10000);
});

async function handlePromise1() {
    console.log("Hi");
    debugger;
    const val = await p;
    console.log("Hello There! 1");
    debugger;
    console.log(val);

    const val2 = await p2;
    console.log("Hello There! 2");
    debugger;
    console.log(val2);
}
handlePromise1();