# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: rails c to create foreign key, the name of the foreign key is cohort, and the foreign key would be on the Cohort model

Researched answer: Rails create to make foreign key, and the name of the foreign key would be that of a class, and the foreign key would belong cohort model

2. Which RESTful routes must always be passed params? Why?

Your answer: Get, and Index. Get is needed for the HTMl to work properly and index is needed because it calls on the method.

Researched answer: get- the http verb, /photos- for the url request, photos#- the controller name, index-name of the controller method.

3. Name three rails generator commands. What is created by each?

Your answer: rails server- a live and viewable app, rails db:create- creates a database, rails generate- creates folders

Researched answer: rails server- a live and viewable app server on a local host, rails db:create- creates a database , rails generate- runs a list of available generators

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students  
students#index, shows a list of all students

action: "POST" location: /students  
students#create, creates a new student

action: "GET" location: /students/new
students#new, returns a new photo and HTML form

action: "GET" location: /students/2  
students#show, shows specifically student 2

action: "GET" location: /students/2/edit
students#edit, returns form allowing you to edit a student

action: "PATCH" location: /students/2  
students#update, updates a photo of student 2

action: "DELETE" location: /students/2  
students#delete, deletes a specific photo

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I can see all the to do items listed on the apps homepage
1. As a user, I can click on a to do item and be sent to a page where I can see the to do item that I selected.
1. As a user, I can go from the list page back to the home page.
1. As a user, I see a place where I can a new tasks to the to do list.
1. As a user, I can click a button that takes me from the home page to a page where I can add a new task item
1. As a user, I can go from the and new task page back to the home page.
1. As a user, I can click a button that will submit my new task item to my to do list
1. As a user, when I submit new task to add, I am redirected to the home page.
1. As a user, I can delete my task from the to do list if I want to
1. As a user, I can edit my to do items list
