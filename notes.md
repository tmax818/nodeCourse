# Node.js Course

## Section 1 Welcome


### 1. [Welcome to the Class](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728806?start=45#content)

- Node is great

- Ciriculum

4 parts

1. note taking app
2. weather app (web app)
3. task manager (biggest app)
4. chat app (socket io)

- How to get the most out of it

    - learn by writing code
    - monkey see monkey do
    - challenges for problem solving ability 

- How to get help

### 2. [Grab the PDF Guide](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13815720#content)

video is a poor reference tool. Exactly why I should be taking notes!!!

## Section 2 Installing and Exploring Node.js

### 3. [Section Intro:](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728812#content)

### 4. [Installing Node.js and VS code](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728814#content)

- Install node

-  We got command line tools with node, not a gui


```
$ node -v 
v12.13.0
```

different options for an editor VS code, atom, sublime or WebStorm

### 5. [What is Node.js?](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728820#content)

before node, js was just used in the browser.
JS can be used for server side, scripts, etc.

"Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine."

Chrome and Node.js are written in C++

[website](https://nodejs.org/en/)

Cool visualization: 

node methods are rnnning C++ code behind the scenes

uses the node repl.

```js
[nodeCourse]$ node
Welcome to Node.js v12.13.0.
Type ".help" for more information.
> 2 + 3
5
> 'Andrew'.toUpperCase()
'ANDREW'
> 
```


REVIEW!!!

### 6. [Why Should I Use Node.js?](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728822#content)

nodejs is very popular. 

"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package4 ecosystem, npm, is the largest ecosystem of open source libraries in the world."

from the old website...

we explore this sentence:

Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

I/O

non-blocking - 

- from the browser
- see video for demo...3:44

- all events take the same amount of time, cb's allow other things to be done while you wait.

then we look at this one:

Node.js' package4 ecosystem, npm, is the largest ecosystem of open source libraries in the world."

### 7. [Your First Node.js Script](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728824#content)

make this [file](hello.js)

Follow this link to the [docs](https://nodejs.org/en/docs/). He goes [here](https://nodejs.org/dist/latest-v13.x/docs/api/)



## Section 3 Node.js Module System (Notes App)

### 8. [Section Intro: Node.js Module System](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728836#content)

Start to build the note app.
read and write from the file sytem 
this is about how to load modules.

### 9. [Importing Node.js Core Modules](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728842#content)

module system - core node feature. 

some methods are available globally i.e. `console.log()` other have to be explicitly imported. 

We will explore the [file system](https://nodejs.org/dist/latest-v13.x/docs/api/fs.html) module.

Start with [this](https://nodejs.org/dist/latest-v13.x/docs/api/fs.html#fs_fs_writefilesync_file_data_options) one

```js
fs.writeFileSync(file, data[, options])
```

file- file you want to write
data - the data you want to write.

created this [file](section3/notes-app/app.js)

```js
const fs = require('fs')

fs.writeFileSync('notes.txt', 'This file was created by Node.js!')
```

Docs are your best friend. That is how you know what do load. Scroll down [here](https://nodejs.org/dist/latest-v13.x/docs/api/fs.html#fs_file_system)

Challenge: Append a message to [notes.txt](section3/notes-app/notes.txt)

1. Use the [appendFileSync](https://nodejs.org/dist/latest-v13.x/docs/api/fs.html#fs_fs_appendfilesync_path_data_options) to append to the file.

2. run the script

3. check you work my opening the [file](section3/notes-app/notes.txt)

here is my [solution](section3/challenge.js). Nice!

### 10. [Importing Your Own Files](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728846?start=15#content)

use multiple files for expansion and mantenence. 

[utils.js](section3/notes-app/utils.js):

```js
const add = function(a, b){
    return a + b
}

// each file has it's own scope so it must export
module.exports = add
```
What is exported is imported with the `require()` function

[app10.js](section3/notes-app/app10.js)

```js
const add = require('./utils.js')

const sum = add(4, -2)

console.log(sum)
```

Challenge:

1. create a new file `notes.js`
1. create getNotes function that returns "Your Notes ..."
1. export the getNotes function
1. From app.js, load in and call the function printing the message


### 11. [Importing npm modules](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728848#content "16:57")

endless amount of awesome npm packages: all kinds of shit!

must run `npm init` from the root of the project. creates a config file ie `package.json`

It manages dependencies!!

this is what we install:

- [validator](https://www.npmjs.com/package/validator)

```bash
npm i validator
```

look at docs for avaliable methods
good stuff

### 12. [Printing in color](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728850#content)

`node_modules` can be constructed from `package.json`. Delete the file and run:

```sh
npm install
```

[chalk](https://www.npmjs.com/package/chalk)

Challenge: use the chalk library in your project

1. isntall chalk
1. load chalk into app.js
1. print the string 'success' to the console in green
1. test it

bonus: play with the styles


### 13. [Global npm modules and nodemon](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728856#content "7:22")

check out the file bro...

End of the section. This was the foundation

## Section 4 File System and CL Args (Notes App)

### 14. [Section Intro: File System and CL args](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728862#content "0:55")

focus is on the file system and command line args..cool

### 15. [Getting input from the user](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728868#content "9:45")

```
[notes-app (master)]$ node app.js 
Your Notes ...
true
success
test error
[notes-app (master)]$ node app.js andrew
Your Notes ...
true
success
test error
[notes-app (master)]$ 
```

reference `process` global variable from [Section 2](#section-2-installing-and-exploring-nodejs) find actual section!!!

log `process.argv` to the [terminal](section4/notes-app/app.js)

argv stands for argument vector.


look for npm package to parse process.argv in the next section

### 16. []