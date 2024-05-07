// Promises :

// `A Promise is an object representing the eventual(finally or in the course of time, or later) completion or failure of an asynchronous operation.`

// `Essentially, promise is a returned object to which you can attach callbacks, instead of passing the callbacks into a function`

// `A Promise is used to handle asynchronous operations, which are some tasks that may take some time to complete, such as fetching data from a server or reading a file.`

// Example :

// fetch is a web-api which is utilized to make api call and it returns a promise.
// We will be calling public github api to fetch data https://api.github.com/users/alok722

const URL = 'https://api.github.com/users/alok722'
const user = fetch(URL)
// User above will be a promise and once the line finished the execution the fetch returns the promise and at that particular time promise is in the pending state. 
// But JavaScript does not wait for anything so, it just quickly goes to the next line and logs the user which is in pending state. and thats why after executing the line number 10 you will see pending in the console.
console.log(user); // Promise {<Pending>}
// But what is google chrome does is , after some point of time the data comes into the "user promise object".
// so if you expand the promise which shows pending in the console then it will show you the current state of the promise and you will see that iw ill be fullfilled.
// Now after getting the data we can attach the callback to get the response?
user.then(function (data) {
  console.log(data)
})
