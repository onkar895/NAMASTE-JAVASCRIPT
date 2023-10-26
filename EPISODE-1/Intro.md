JAVASCRIPT :

1. Javascript is a most popular interpreted compiled as well as case sensitive programming language.
2. It can be used for both client-side as well as server-side developments.
3. It is simply a synchronous single-threaded language.
    1. Single-threaded means that javascript can only execute one command at a time.
    2. And Synchronous single-threaded means that javascript can only execute one command at a time and in a specific order.
    3. So that means it can only go to the next line once the current line has been finished executing.
    4. Evolution of javascript: Created in 1995 by brendan Eich while he was working on Netscape.

HOW JAVASCRIPT ACTUALLY WORKS :

1. "Everything in Javascript happens inside an EXECUTION CONTEXT". The execution context is like a big box or container where the JavaScript code is executed.
2. When a Javascript code is executed, an Execution Context is created and it is called as Global Execution Context.
3. A javascript program is executed in 2 phases inside the Execution Context.
    1. MEMORY ALLOCATION PHASE :
        1. The browser initially scans the JS code and allocates memory for variables and functions defined in the program.
           The memory component is also known as the variable environment.
        2. So it is a sort of environment in which all these variables and functions are stored as key-value pairs.
    2. CODE EXECUTION PHASE :
        1. This is the place where code is executed one line by line at a time. It is also known as the thread of execution.
        2. Javascript is interpreted line by line and the code is executed.
