# summer-chores
# summer-chores
These are the Exercise Instructions:

Someone has a list of summer chores they have to do every Saturday. There are a lot of chores for them to do and naturally get more tired throughout completing their tasks. If they get too tired, they may have to take a break and go to sleep before completing their chores.

They have a strict routine, which follows in order:

Mowing the yard
Weedeating the edges of the house and fence line
Trimming the hedges
Collect fallen wood for summer night fires
Water the garden
If they manage not to get tired and fall asleep while doing their chores, they have successfully completed their chores. Also, there's never a chance of the person falling asleep before mowing the yard.



Here is my explanation of how I wrote my code using Callbacks:
1. Each chore function will simulate an arbitrary completion time - setTimeout()
2. The person gets increasingly tired and each task has a chance of failure - Math.random()
3. All the functions are nested and this forms the Callback sequence.
4. This Callback sequence is also known as CallBack Hell.
5. If the person falls asleep the chores stop.



Here is my explanation of how I wrote my code using Promises:
1. Each function now returns a Promise instead of a Callback.
2. If the chore succeds, the Promise resloves.
3. If the chore fails, the Promise rejects.
4. The doSummerChores function chains each Promise using .then().
5. If any promise rejects, .catch() makes sure the error is handled correctly.
6. Using Promises makes the code easier to read and manage.



Here is my explanation of how I wrote my code using Async and Await:
1. Each function now uses Async/Await instead of Promises.
2. Each chore prints a success message after completion.
3. A try...catch block is used to handle errors.
4. If a chore fails, the function doesn't stop.
5. This way 'Jill' can continue do ing the next chore.
6. This ensures clear output and handles failures.
7. This keeps the flow sequential.
8. When using Async/Await there is less nesting and .then() chains are avoided making the code cleaner.




To run the code:
1. Open Visual Studio
2. Make sure the profile of the open terminal is set to powershell
3. In the terminal of VSC TYPE: node callbackVersion.js
4. In the terminal of VSC TYPE: node promiseVersion.js
5. In the termianl of VSC TYPE: node asyncAwaitVersion.js

