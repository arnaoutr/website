
# how to modify this website

Hello! This document explains the website repository and outlines how to make changes to each page on the website. If you have any questions, please email Nura Kawa (nkawa@berkeley.edu). 

This website uses the minimal mistakes Jekyll theme. Documentation for this theme is found here: https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/. This guide is useful if you wish to change the layout and structure of the website. If you wish to simply change the content of the website, here is what you need to know:


## home (Welcome to the Arnaout Lab)
* the current website image can be found here: assets/image/
* the homepage can be edited directly as an html page: index.html. This includes the website image, title, and "Recent News" segment

## research
* this page can be directly modified here: _pages/research.md

## publications
* to add, remove, or change information about a publication, modify _data/publications.md
* publication images are found in static/img/pub. 


## members  
* to add, remove, or change information about a member, modify _data/members.yml
* to add, remove, or change information about an alumni, modify _data/alumni.yml
* to change information about the PI, modify _data/pi.yml
* member images are found in static/img/
* to edit the layout of the page, modify _pages/members.md

## news
* to add, remove or modify a post, you can find each individual post saved as a file in the _posts/ directory.
* to modify the layout of this page, make changes on _pages/news.md


## contact
* this page can be directly modified here: _pages/contact.md


# general information about the repository folders

assets: this directory contains css, images, and some javascript files and plugins. The only subdirectory that you would modify is assets/image

_data: this folder contains the .yml data files that provide data for some of the webpages (.md files), such as publications and members. You can add and modify files in this folder.

_includes: this folder contains improtant files for the structure and layout of the website. You only modify contents of this folder for structural changes to the website. 

_layouts: this folder contains page layouts that come with the minimal mistakes theme. 

_pages: this directory contains the pages that make up this website, all as .md files. **you should modify the .md files** if you want to change anything on the pages. these files are rendered into .html when the website is generated.

_posts: this directory contains all of the news posts of this website. **to add a news post, create a .md file that follows the naming convention of the other posts.** this is important in order for the file to be added to the News page.


_sass: this directory is from the minimal mistakes theme, and it contains the .scss files of the site. Generally you do not modify this file unless you want to change the look of the website

_site: this is regenerated every time the site is rendered. **do not modify files in this folder** 

static: this directory contains the images of the members and can be used to store any static files

test: this folder can be ignored; it comes with the minimal mistakes theme.



 
