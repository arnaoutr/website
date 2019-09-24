## For Add/Remove/Change News

Add/Remove/Change News in '\_posts' Folder and graphic/image in 'assets/image/news' Folder

## For Add pictures and entries for lab Members. Here I folows all of your old structure

Add/Remove/Change entries in \_data/members.yml file or Upload/Remove/Change members image in assets/image/members folder

## For Add/Remove/Change pictures and entries for Publications. Here I folows all of your old structure

Add/Remove/Change entries in \_data/publications.yml file or Add/Remove/Change publication image in assets/image/pub folder

## For Add/Remove/Change Affiliated Organizations.

Add/Remove/Change entries in \_data/affiliated_organizations.yml file.

## For Add/Remove/Change Job Posts.

Add/Remove/Change Job Post in \_job_posts folder.

## For Add/Remove/Change Job Posts on Contact Page.

Add/Remove/Change Job Post in \_join_us folder or Add/Remove/Change title and text.

## For add additional pages to the website for these job postings, e.g. when someone goes to the Contact page, clicks on 'Data Scientist,' it goes to a new page where the job description is.

When you create new job post in \_job_posts folder then it will automatically generates & displays in contact page.

## For change the favicon

Replace 'favicon.ico' with new updated favicon icon in home directory of the site.

## For change color

update color.yml data file and change as per your requirement.

## For update the grouped logo

This logo is well hard coded but I'll give instruction
Grouped logo are depend on two certain things row and coloums
Currentally I have set it up for 4 columns and you want to 4 column you don't need to update css file
Go to index.html file and I have make the comment grouped logo and raw
Add here or update column here each column are individual logo

But if you want to 5 column in a raw then you need to update css also and for that
GO to \_sass/partials/general.scss file and find .logo-item (in my cse it located in line no 410)

and update the width 24.5% to 18%
after that set 5 column in each and every row in index.html file

## For update Affiliated Organizations and Join Us boxes font size
Go to the color.yml file I have added option for update font sizeWe're HirinI'hv added  g button rest fill color

## For We're Hiring button rest fill color
I'hv added  join-us-btn-rest-bg-color variable for that

## For update contact info and name in contact page
Go to pages/contact.html and update it