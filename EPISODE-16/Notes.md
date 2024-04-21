## JS Engine Exposed, Google's V8 Architecture

-   JS runs literally everywhere from smart watch to robots to browsers because of Javascript Runtime Environment (JRE).

-   JRE is like a big container which has everything which are required to run Javascript code.

-   JRE consists of a JS Engine (❤️ of JRE), set of APIs to connect with outside environment, event loop, Callback queue, Microtask queue etc.

-   Browser can execute javascript code because it has the Javascript Runtime Environment.

-   ECMAScript is a governing body of JS. It has set of rules which are followed by all JS engines like Chakra(Edge), Spidermonkey(Firefox)(first javascript engine created by JS creator himself), v8(Chrome)

-   Javascript Engine is not a machine. Its software written in low level languages (eg. C++) that takes in hi-level code in JS and spits out low level machine code.

-   Code inside Javascript Engine passes through 3 steps : Parsing, Compilation and Execution

    -   **Parsing** - Code is broken down into tokens. In "let a = 7" -> let, a, =, 7 are all tokens. Also we have a syntax parser that takes code and converts it into an AST (Abstract Syntax Tree) which is a JSON with all key values like type, start, end, body etc (looks like package.json but for a line of code in JS. Kinda unimportant)(Check out astexplorer.net -> converts line of code into AST).

    -   **Compilation**

        -   JS has something called Just-in-time(JIT) Compilation which uses both interpreter & compiler. Also compilation and execution both go hand in hand.
        -   V8 uses a JIT compilation technique to translate JavaScript code into machine code just before execution. This approach improves performance by compiling frequently executed JavaScript code into efficient machine code, reducing interpretation overhead.
        -   The AST from previous step goes to interpreter which converts hi-level code to byte code and moves to execeution.
        -   While interpreting, compiler also works hand in hand to compile and form optimized code during runtime. **Does JavaScript really Compiles?**
        -   The answer is a loud YES. More info at: [Link 1](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md#whats-in-an-interpretation), [Link 2](https://web.stanford.edu/class/cs98si/slides/overview.html), [Link 3](https://blog.greenroots.info/javascript-interpreted-or-compiled-the-debate-is-over).
        -   JS used to be only interpreter in old times, but now has both to compile and interpreter code and this make JS a JIT compiled language, its like best of both world.

    -   **Execution**
        -   Needs 2 components ie. Memory heap(place where all memory is stored) and Call Stack(same call stack from prev episodes).
        -   There is also a garbage collector. It uses an algo called **Mark and Sweep.**

    ![jsengine](https://github.com/alok722/namaste-javascript-notes/blob/master/assets/jsengine.jpg)
    <br/>

### More Detailed Explaination :

-   In JavaScript, the source code typically goes through the following phases before it is executed,

    -   **Tokenizing:** Breaking up a source code string into meaningful chunks called, Tokens. For example, the source code var age = 7; can be tokenize as, var, age, =, 7 and, ;.

    -   **Parsing:** Parsing is a methodology to take the array of Tokens as input and turn it into a tree of nested elements understood by the grammar of the programming language. This tree is called Abstract Syntax Tree(AST).

    -   **Code Generation:** In this phase, the AST is used as input, and an executable byte-code is generated that is understood by the environment(or platform) where the executable code will be running. The executable byte-code is then refined/converted even further by the optimizing JIT (Just-In-Time) compiler.

    -   "A Picture worth thousand words". Here is a pictorial representation of how these three phases take place:

    GIF DEMO :
    ![jsengine](https://github.com/alok722/namaste-javascript-notes/blob/master/assets/jsenginegif.gif)

    -   You can use the [AST Explorer](https://astexplorer.net/) tool to see how code written by you gets parsed into an Abstract Syntax Tree(AST).

### Working of JS Engine proper Explaination :

-   JavaScript engine is a program that executes JavaScript code. Here's a simplified explanation of how it works:

    -   Parsing: The engine takes the JavaScript code and parses it into a data structure called the Abstract Syntax Tree (AST). This step involves breaking down the code into meaningful elements such as statements, expressions, and operators.

    -   Compilation: The engine then compiles the AST into executable code. This involves various optimizations to improve the performance of the code. Some engines use Just-In-Time (JIT) compilation, which compiles parts of the code on-the-fly as it's needed for execution.

    -   Execution: Once the code is compiled, the engine executes it. This involves interpreting the code and generating machine code instructions that the processor can execute directly. During execution, the engine manages things like memory allocation, variable access, function calls, and error handling.

    -   Memory Management: JavaScript engines have garbage collectors that automatically manage memory by reclaiming memory that is no longer in use. This helps prevent memory leaks and ensures efficient memory usage.

    -   Optimizations: Modern JavaScript engines use various optimizations to improve performance. These optimizations include techniques like inline caching, function inlining, and loop optimization. Engines also utilize profiling data to identify hot paths in the code and apply optimizations accordingly.

    -   Event Loop (for asynchronous operations): In environments like web browsers and Node.js, JavaScript is often used for asynchronous programming. Engines provide an event loop mechanism to handle asynchronous operations such as timers, network requests, and I/O operations. This ensures that JavaScript remains responsive even when performing tasks that may take some time to complete.

    -   Overall, JavaScript engines are complex pieces of software designed to efficiently execute JavaScript code and provide a seamless experience for developers and end-users alike. Different engines, like V8 in Chrome and Node.js, SpiderMonkey in Firefox, and ChakraCore in Microsoft Edge, have their own unique optimizations and features, but they all follow similar principles.

-   Companies use different JS engines and each try to make theirs the best.

    -   v8 of Google has Interpreter called Ignition, a compiler called Turbo Fan and garbage collector called Orinoco

    -   V8 Architecture :
        ![jsengine](https://github.com/alok722/namaste-javascript-notes/blob/master/assets/jsengine.png)
        <br/>

        ### Explaination :

        -   The **JavaScript Source Code** goes through the Parser and generates **AST (Abstract Syntax Tree)**.
        -   and this AST has an **Interpreter Ignition** and it convers the code into **Bytecode** which is then executed.
        -   and along with the interpreter works the **TurboFan Compiler.**
        -   This **TurboFan Compiler** constantly working on Optimizing the code and it produces this optimized code and generates this Bytecode which is then later executed.
