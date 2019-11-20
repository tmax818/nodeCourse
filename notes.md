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

here is my [solution](section3/notes-app/challenge.js). Nice!

