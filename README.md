# FE Hiring Assignment - Directory Tree

## Overview

While traversing a directory, we frequently encounter the use-case of a tree with the ability to select files/folders. Here, we want to develop an interface to achieve the same.
Using ReactJS, develop a single-page application which renders a directory tree as described further in the document. This component will render all the folders and files in a directory, including all the nested folders and files and will also support multi-select over files and folders.
There will be a button, say Submit, which upon clicking, will return all the paths to selected files in an array; you may render the list of paths to files below the tree on the screen. The path can be connected with a slash (/).

## Features

- Each checkbox item should support three states: unchecked, checked and indeterminate. The definition for each state follows in subsequent bullets.
Checking a folder should select all its files, including all the nested files and folders, and mark them checked.
- If all the files and folders inside a folder are selected, the parent folder should be in a checked state.
- If no files or folders inside a folder are selected, then the parent folder should be in an unchecked state.
- If some files or folders inside a folder are selected, the parent folder should be in an indeterminate state.
- There should be a visual distinction between files and folders.
- There should be a visual distinction between folders of each nesting level.

## Getting Started

### Prerequisites

To run this application, you need to have the following software installed on your machine:

- Node.js (version v18.15.0)

### Setup

- download or clone the [repository](https://github.com/ShravanMeena/ping-safe-task.git)
- `npm install`
- run `npm start`

### Previews
Preview 01           |  Preview 02
:-------------------------:|:-------------------------:
![](https://github.com/ShravanMeena/ping-safe-task/blob/main/src/assets/1.png?raw=true)  |  ![](https://github.com/ShravanMeena/ping-safe-task/blob/main/src/assets/3.png?raw=true)

# Note

- For any doubts ,feel free to connect on mail `shravanmeena47@gmail.com`.
