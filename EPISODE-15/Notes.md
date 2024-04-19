## Asynchronous JavaScript & EVENT LOOP from scratch

Note: Call stack will execeute any execeution context which enters it. Time, tide and JS waits for none. TLDR; Call stack has no timer.

-   Browser has JS Engine which has Call Stack which has Global execution context, local execution context etc.
    -   But browser has many other superpowers - Local storage space, Timer, place to enter URL, Bluetooth access, Geolocation access and so on.
    -   Now JS needs some way to connect the callstack with all these superpowers. This is done using Web APIs.
        ![Eventloop1](https://github.com/alok722/namaste-javascript-notes/blob/master/assets/eventloop1.jpg)

### WebAPIs

-   None of the below are part of Javascript! These are extra superpowers that browser has. Browser gives access to JS callstack to use these powers.
    ![Eventloop2](https://github.com/alok722/namaste-javascript-notes/blob/master/assets/eventloop2.jpg)

-   setTimeout(), DOM APIs, fetch(), localstorage, console (yes, even console.log is not JS!!), location and so many more.

    -   setTimeout() : Timer function
    -   DOM APIs : eg.Document.xxxx ; Used to access HTML DOM tree. (Document Object Manipulation)
    -   fetch() : Used to make connection with external servers eg. Netflix servers etc.

-   We get all these inside call stack through global object ie. window

    -   Use window keyword like : window.setTimeout(), window.localstorage, window.console.log() to log something inside console.
    -   As window is global obj, and all the above functions are present in global object, we don't explicity write window but it is implied.

-   Let's undertand the below code image and its explaination:
    ![Eventloop3](https://github.com/alok722/namaste-javascript-notes/blob/master/assets/eventloop3.jpg)

### Code :

```js
console.log("start");
setTimeout(function cb() {
    console.log("timer");
}, 5000);
console.log("end");
// start end timer
```

### Explaination :

-   First a GEC is created and put inside call stack.
-   console.log("Start"); // this calls the console web api (through window) which in turn actually modifies values in console.
-   setTimeout(function cb() { //this calls the setTimeout web api which gives access to timer feature. It stores the callback cb() and starts timer. console.log("Callback");}, 5000);
-   console.log("End"); // calls console api and logs in console window. After this GEC pops from call stack.
-   While all this is happening, the timer is constantly ticking. After it becomes 0, the callback cb() has to run.
-   Now we need this cb to go into call stack. Only then will it be executed. For this we need event loop and Callback queue

### Event Loops and Callback Queue

Q: How after 5 secs timer is console?

-   cb() cannot simply directly go to callstack to be execeuted. It goes through the callback queue when timer expires.
-   Event loop keep checking the callback queue, and see if it has any element to puts it into call stack. It is like a gate keeper.
-   Once cb() is in callback queue, eventloop pushes it to callstack to run. Console API is used and log printed.

![Eventloop4](https://github.com/alok722/namaste-javascript-notes/blob/master/assets/eventloop4.jpg)

Q: Another example to understand Eventloop & Callback Queue.

See the below Image and code and try to understand the reason:
![Eventloop5](https://github.com/alok722/namaste-javascript-notes/blob/master/assets/eventloop5.jpg)

### Explaination :

```js
console.log("Start");
document.getElementById("btn").addEventListener("click", function cb() {
    // cb() registered inside webapi environment and event(click) attached to it. i.e. REGISTERING CALLBACK AND ATTACHING EVENT TO IT.
    console.log("Callback");
});
console.log("End"); // calls console api and logs in console window. After this GEC get removed from call stack.
```

-   In the above code, even after console prints "Start" and "End" and pops GEC out, the eventListener stays in webapi env(with hope that user may click it some day) until explicitly removed, or the browser is closed.
-   **Eventloop has just one job to keep checking callback queue and if found something push it to call stack and delete from callback queue.**
