## JAVASCRIPT :

-   **Javascript** is a most popular interpreted **compiled** as well as **case sensitive** programming language.
-   It can be used for both **client-side** as well as **server-side** developments.
-   It is simply a **synchronous single-threaded** language.
-   **Single-threaded** means that javascript can only execute **one command at a time**.
-   And **Synchronous single-threaded** means that javascript can **only execute one command at a time and in a specific order**.
-   So that means it can only go to the next line once the current line has been finished executing.
-   **Evolution of javascript**: Created in **1995 by brendan Eich** while he was working on **Netscape** and became an **ECMA standard** in 1997.
-   **ECMA-262** is the official name of the standard. **ECMAScript** is the official name of the language.

## HOW JAVASCRIPT ACTUALLY WORKS :

-   "Everything in Javascript happens inside an **EXECUTION CONTEXT**". The execution context is like a **big box or container** where the JavaScript code is executed.
    <br/>
    ![Execution Context](https://alok722.github.io/namaste-javascript-notes/assets/execution-context.jpg)
    <br/>
-   When a Javascript code is executed, an Execution Context is created and it is called as **Global Execution Context**.
-   A javascript program is executed in **2 phases** inside the Execution Context.

    -   **MEMORY ALLOCATION PHASE** :
        -   The browser initially scans the JS code and allocates memory for **variables and functions** defined in the program.
        -   The memory component is also known as the **variable environment**.
        -   So it is a sort of environment in which all these variables and functions are stored as **key-value pairs**.
    -   **CODE EXECUTION PHASE** :
        -   This is the place where code is executed **one line by line at a time**. It is also known as the **thread of execution**.
        -   Javascript is interpreted **line by line** and the code is executed.
