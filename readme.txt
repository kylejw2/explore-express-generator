1. What type of resources can you host with Express?
    From the research I've done, I've recognized a similar pattern amongst professionals talking about this subject: static resources. I found the term "static" interesting because a web application built using Node (but more specifically, Express) seems dynamic, given that we can run CRUD methods. In terms of what we're displaying, one might say that we are displaying static resources, such as HTML files, JavaScript files, or even pictures.

2. What are the benefits of using a View Engine overusing Vanilla technologies?
    Certain technologies, such as View Engine, were built to make our lives easier. Had I not used a View Engine in this project, but rather had I used vanilla technologies, I would have been scrambling to connect JavaScript and HTML. Thankfully, the view engine does this for me after a simple request.

3. Why does the Express Generator split up the functionality into so many files?
    A good programming skill is the ability to separate functionality into multiple files. It's possible to create one file that holds all of what we're doing but that would likely be cluttered and makes locating a bug MUCH more difficult. Separating functionality into multiple files not only organizes our code, it also helps us locate bugs quicker.