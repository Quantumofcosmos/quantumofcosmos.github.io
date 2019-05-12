---
layout: post
title: Excel Pixel art
---
We usually store images in traditional formats like jpeg, png, etc. and then import them into the spreadsheet but why not turn the spreadsheet itself into an image?.

So that is what I am going to attempt to do in this project.

# Behind the screen:

**ACT 1:**

Modern days digital images are usually stored as a series of pixels which are filled with colors in combination of Red, Blue and Green. This arrangement when looked at from a distance is interpreted by our eyes and brain as an image.

Take this flower for example

![Example](/img/flowers.jpg)
![](./)

This is the same picture zoomed in:
![Example](/img/flowers-pixels.png)

**ACT 2:**

Spreadsheets have option to format the cells with a specific background color this can be achieved by setting an RGB value or picking the color from the color palette.

If only I could format cells in spreadsheet like pixels.

**The Reveal:**

Yes I can...!

# Under the hood:

Basic premise of the application is to take an image as command line input and format a spreadsheet such that it reveals the image when the sheet is zoomed out.

The image supplied as command line argument is  processed in pillow and skimage frameworks. pygame module is used to help user resize the image. xlsxwriter module is used to format the spreadsheet.


# On the screen:

## How to run this application locally:
**Requirements:**  Python should be installed in your local machine.

**Steps to run:**
* Clone the [git repository](https://github.com/Quantumofcosmos/excel_pixel_art) to your local file system.
* Open terminal inside the project folder.
* run command `pip install requirements.txt`
* After the requirements are installed run `python excel_pixel_art.py <image file name>` If an image file is not supplied as argument, default image of **Taj mahal** will be selected for processing (Supplied image file has to be in the project folder).
* When a dialog to resize the image appears click on Top-left of your region of interest and click again on Bottom-right. **Click and drag is currently not working. Application requires two separate clicks**

Like so:
![crop for ROI](/img/excelcrop.gif)

* Wait for the processing to complete and *voilà!* you have your formatted spreadsheet ready in the same directory.

Cropped image after writing into a spreadsheet:
![Image in spreadsheet](/img/excelzoom.gif)

## Todo:

* Tweak pygame dialogue to accept click and drag as input for cropping the image.

You can find the Github Repo [here](https://github.com/Quantumofcosmos/excel_pixel_art)
