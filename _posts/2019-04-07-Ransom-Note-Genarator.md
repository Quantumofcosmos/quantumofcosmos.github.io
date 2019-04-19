---
layout: post
title: The Ransom note generator
---
This post walks you through my Ransom note generator application written in python using pillow for image handling and flask for exposing it as webapp

# Intro
In typography, the **ransom note effect** is the result of using an excessive number of juxtaposed typefaces, with the message formed from words or letters cut randomly from a magazine or newspaper in order to avoid using recognizable handwriting.

![Example](https://16sparrows.typepad.com/.a/6a00d834515a1f69e2017d424ea9a3970c-800wi)

****

# Behind the screen:

All of the projects that I saw which were trying to replicate it were handling it in javascript with which they were manipulating the font styles.

I wanted to take a rather different approach to the same problem. Firstly I wanted to handle the process in python. Next I wanted the letter to be in image format that facilitates download option instead of HTML format which is the result of handling it in JS.

# Under the hood:

Basic premise of the project was a web application that takes in the input as text from the user, creates an image from scratch using that text and sends the image to the front end for it to be displayed and downloaded.

**Front end** is written using Materializecss framework. Ajax is used to facilitate the change of image and the **Server** is written using Flask module of Python.

For creating, handling **images** and text arrangement pillow module is used.

# On the screen:

## How to run this application locally:
**Requirements:**  Python should be installed in your local machine

**Steps to run:**
* Clone the [git repository](https://github.com/Quantumofcosmos/ransom_note_generator) to your local file system.
* Open terminal inside the project folder.
* run command `pip install requirements.txt`
* After the requirements are installed run `python server.py`
* The application can be accessed via any web browser in your system at *http://127.0.0.1:5000/*

## Demo:
You will see the following screen on accessing the above URL. Give the text you want in your letter as input and submit to get the adjacent image refreshed with the text that you entered.  

![GUI of application](/img/ransom.gif)

The image can be downloaded by right clicking on it. The dimentions of the image are that of an A4 sized paper.

## Features Implemented:
* Randomized
  * Background color
  * Font size(Between 22 and 32)
  * Alphabet rotation
  * Font styles(currently selection between Comic, Comic Bold, FreeSans, Times New Roman, Trebuchet Bold, Vera MoBI and Verdana Italic, Can be extended to more fonts)

## Features ToDo:
* Add a download image button(can be downloaded with right click menu as of now)
* Extensible font styles
* Play with alphabet case
* Word wrapping(Current line break is based on the space available on page not based on the word being processed)
* Take user inputs to randomize above features.
* (May be) Non stranded shaped for alphabet background
* (May be) Live loading of image(Currently reloads after you submit)
* (May be) randomize font color which is currently fixed to black.

You can find the Github Repo **[here](https://github.com/Quantumofcosmos/ransom_note_generator)**

# Disclaimer:
This project was undertaken to improve my understanding of python and it should not be misused in anyway.
