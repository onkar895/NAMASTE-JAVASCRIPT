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
