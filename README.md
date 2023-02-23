<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <img src="./assets/logo.png" alt="Logo" width="80" height="80">
  <h1 align="center">BrainBoost: An E-Learning App</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#technologies">Technologies</a></li>
    <li><a href="#how-to-install-and-run">How To Install And Run</a></li>
    <li><a href="#app-requirements">App Requirements</a></li>
    <li>
      <a href="#ui-ux">UI UX</a>
      <ul>
        <li><a href="#target-audience">Target Audience</a></li>
        <li><a href="#sitemap">Sitemap</a></li>
        <li><a href="#user-personas">User Personas</a></li>
        <li><a href="#user-scenarios">User Scenarios</a></li>
        <li><a href="#empathy-maps">Empathy Maps</a></li>
        <li><a href="#color-palette">Color Palette</a></li>
        <li><a href="#typography">Typography</a></li>
      </ul>
    </li>
    <li>
      <a href="#app">App</a>
      <ul>
        <li><a href="#database-structure">Database Structure</a></li>
        <li><a href="#api-documentation">API Documentation</a></li>
        <li><a href="#api-testing">API Testing</a></li>
        <li><a href="#web-pages">Web Pages</a></li>
        <li><a href="#web-testing">Web Testing</a></li>
        <li><a href="#mobile-screens">Mobile Screens</a></li>
      </ul>
    </li>
  </ol>
</details>

<br>

# Overview

One of the biggest challenges facing education today is the lack of engagement and motivation among students. This problem is compounded by the fact that students are often bogged down by a huge amount of material that they need to study, making it difficult to stay focused and motivated. With the rise of technology, there is now a great opportunity to create a learning app that addresses these challenges and makes learning more engaging and effective.

The e-learning app aims to provide users with an interactive platform for learning various subjects and skills through online courses. The app will cater to users of all age groups, from students to working professionals, who are looking to expand their knowledge base and improve their skills.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Technologies

**Design**

- Logo Design: ![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)
- UI Design: ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

**Backend**

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

**Frontend**

![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)

**Mobile**

![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

**Testing**

- Backend: ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
- Frontend: ![Selenium](https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# How To Install And Run

**Backend**
- Create env file
- Insert into database default values from assets/db.sql
- Run the following commands on terminal:

```npm
cd server
npm install
npm run dev | npm run start
```

**Frontend**

**Mobile**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


# App Requirements

**General**

- [ ] Responsive Design: The app should be designed to work on various screen sizes and resolutions
- [ ] Cross-Platform Compatibility: The app should be developed to work on both web and mobile platforms
- [ ] Scalability: The app should be scalable to handle a growing number of users and courses
- [ ] Content Management System: The app should have a content management system (CMS) to manage course content and updates
- [ ] Security: The app should save an encrypted password
- [ ] Testing and Quality Assurance: The app should be tested thoroughly for functionality, performance, and usability

**Users**

- [ ] Register
- [ ] Login
- [ ] Reset Password
- [ ] See Profile Data
- [ ] See Other User's Profile With Courses
- [ ] Update Profile Data
- [ ] Delete Profile

Note: Register and Forgot Password should provide security questions

**Courses**

- [ ] See All Courses By Category Selected
- [ ] Filter Courses By Rating, Topic, Language and/or Level
- [ ] See Course's Details (Name, Description, Topic, Language, Level, Instructor, Content and Reviews)
  * Reviews can be filtered by rating
- [ ] Enroll In A Course
- [ ] Add Course Review
- [ ] Update Own Course (data and course content)
- [ ] Update Course Progress
- [ ] Delete Own Course
- [ ] Delete Enrolled Course
- [ ] Interactive Learning With Exercises
- [ ] Personalized Course Recommendations (based on their previous selections and learning progress)

**Course's Bookmarks**

- [ ] See All Bookmarks
- [ ] Add Bookmark
- [ ] Delete Bookmark

**Forums / Discussion Board**

- [ ] Search For Questions
- [ ] See Question
- [ ] Reply To Question

**Document Reviews**

- [ ] Submit Document For Review
- [ ] Review Document
- [ ] Check Submitted Document Reviews

**Notifications**

- [ ] Notify about course updates, forum replies and code reviews.
- [ ] Delete All Notifications
- [ ] Delete One Notification

**Extra Gamification**

- [ ] Badges Upon Submitting Courses, Completing Courses, Submitting To Forum, Replying To Forum And Reviewing Code
- [ ] Boss Fight Upon Finishing Course

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# UI UX

## Target Audience

The target audience is a wide range of users including students, professionals, and lifelong learners. The app will be designed for users who want to learn new skills, improve existing ones, or simply explore new subjects.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Sitemap

- Landing Page
  * Login
  * Register
- Home Page
  * Current Courses
  * Recommended Courses
  * Popular Courses
  * New Courses
- Course Catalog
  * Category
    - Topic
- Library
  - Course Details
    * Title
    * Description
    * Category/Topic
    * Language
    * Level
    * Enroll
    * Instructor Information
    * Content
    * Reviews
- Forum
  - Discussion
- Document Review
  - Sharable Link
- User Profile
  * Personal Information
  * Courses Created
  * Achievements

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## User Personas

A lot of user personas can use this application, here's every possible persona brainstormed:

- **The High School Student**: This persona represents individuals who are currently in high school and are seeking additional educational opportunities to supplement their coursework. They may prefer online courses that offer flexibility and convenience.

- **The College Student**: This persona represents individuals who are currently enrolled in college or university and are seeking to supplement their education with additional courses in various subjects. They may prefer online courses that offer flexibility and convenience.

- **The Professional**: A working professional who wants to improve their skills or learn new ones to advance their career. They may be looking for specific courses related to their industry or career goals.

- **The Busy Professional**: This persona represents individuals who are working full-time and may not have the time or flexibility to attend traditional in-person classes. They value flexibility and convenience and may prefer to learn at their own pace.

- **The Hobbyist**: A user who wants to learn new skills or knowledge related to their hobbies or interests. They may be interested in courses related to art, cooking or other leisure activities.

- **The Retiree**: A retiree who wants to continue learning and exploring new topics. They may be interested in courses related to their hobbies or to learn more about a subject they have always been interested in. They may have limited experience with online learning but are motivated to learn and try new things.

- **The Educator**: This persona type includes users who are teachers or educators, and are looking for a platform to create and share their own courses and learning materials.

- **The Parent**: This persona type includes users who are looking for resources to supplement their child's education, either as a supplement to homeschooling or to help with their child's homework and studying.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### The High School Student

**Name:** Lily

**Age:** 16

**Occupation:** High School Student

**Background:** Lily is a sophomore in high school and has always been an avid learner. She is interested in a variety of subjects, including English, Math and Science. She is a member of the school's debate team and enjoys participating in community service projects. However, due to her busy schedule, she has struggled to find time to pursue her academic interests outside of school.

**Goals**: Lily wants to expand her knowledge and skills beyond what is offered in her high school classes. She hopes to take additional courses in subjects that interest her, such as creative writing and psychology.

**Challenges**: Lily has a busy schedule and limited resources to pursue her academic interests. She needs an e-learning app that is flexible and easy to use, allowing her to access courses and materials from anywhere and at any time. She also needs to find courses that fit her schedule.

**Personality and Behaviors**: Lily is an enthusiastic and dedicated learner who is eager to explore new topics and ideas. She is a hard worker and is willing to put in the time and effort required to achieve her goals. She is also tech-savvy and comfortable using online platforms and resources.

- - -

### The College Student

**Name:** John

**Age:** 20

**Occupation:** College Student

**Background:** John is majoring in Computer Science at State University. He is originally from a small town in the Midwest and is the first in his family to attend college. John is a dedicated student who is always looking for opportunities to improve his academic performance and supplement his coursework.

**Goals**: John's primary goal is to excel academically and graduate with honors. He is also interested in gaining practical skills and experience in his field through internships or part-time jobs. He would like to use the app to supplement his coursework and gain additional knowledge and skills in computer science.

**Challenges**: John is a busy student who is juggling coursework, extracurricular activities and a part-time job. He is also dealing with financial constraints and has limited resources to spend on educational materials or courses. He is also a bit shy and may feel intimidated by asking questions or engaging with instructors or peers.

**Personality and Behaviors**: John is a conscientious and detail-oriented individual who takes his studies seriously. He is self-motivated and disciplined, but also values flexibility and convenience. He is a bit introverted and may need some encouragement to engage with instructors and peers.

- - -

### The Professional

**Name:** Emily

**Age:** 28

**Occupation:** Marketing Manager

**Background:** Emily grew up in a middle-class family in a suburban area. She was an academically strong student and excelled in her high school and college courses. She received a bachelor's degree in Marketing from a reputable university and landed her first marketing job soon after graduation. She has been in the marketing industry for four years now and is currently working as a marketing manager for a mid-sized company.

**Goals**: Emily is looking to improve her marketing skills to advance her career and take on more responsibilities in her current job. She is specifically interested in courses related to digital marketing and social media.

**Challenges**: Emily has a busy schedule and often works long hours. She wants to find a learning app that is flexible and easy to use, with courses that fit into her schedule. She also wants to ensure that the courses are high quality and will provide her with the skills and knowledge she needs to succeed in her career.

**Personality and Behaviors**: Emily is a driven, ambitious, and goal-oriented individual. She is always looking for ways to improve herself and take on new challenges. She is a natural problem solver and is not afraid to take risks to achieve her goals. She is also a team player and enjoys collaborating with others to achieve common goals. She is very focused on her career and is always looking for ways to improve her skills and knowledge.

- - -

### The Busy Professional

**Name:** James

**Age:** 35

**Occupation:** Senior Project Manager

**Background:** James has been working in the technology industry for over a decade. He holds a Bachelor's degree in Computer Science and a Master's degree in Business Administration. James has a busy schedule, often working long hours and travelling frequently for work. He is married and has two young children.

**Goals**: James is looking to enhance his skill set in order to advance his career and take on more senior-level roles. He is particularly interested in project management, leadership and data analysis. He wants to be able to take courses at his own pace and on his own schedule to fit his busy lifestyle.

**Challenges**: James has limited time to attend traditional in-person courses and he often finds it challenging to balance his work and family responsibilities. He needs a flexible and convenient way to learn that does not require him to sacrifice his personal and professional commitments.

**Personality and Behaviors**: James is a self-motivated individual who is dedicated to his work and his family. He is detail-oriented and enjoys solving complex problems. He is a quick learner and enjoys staying up-to-date with the latest trends and developments in his field. He values quality and efficiency in his work and expects the same from the products and services he uses.

- - -

### The Hobbyist

**Name:** Rachel

**Age:** 30

**Occupation:** Graphic Designer

**Background:** Rachel is a graphic designer who works for a design agency in New York City. In her free time, she enjoys cooking, gardening, and tackling various DIY projects around her apartment. She is always looking for new skills to learn that she can apply to her hobbies.

**Goals**: Rachel wants to learn new cooking techniques and recipes to impress her friends and family and improve her gardening skills and knowledge of plant care to take care of her garden. She also intends to find a community of like-minded hobbyists to share tips and inspiration with.

**Challenges**: Rachel has a limited time to pursue hobbies due to her demanding job and a big difficulty finding high-quality and reliable resources for learning new skills since a lot of courses out there don't teach something new to her or lie in the course description. Also in her daily life she lacks of confidence in her abilities to tackle more advanced projects.

**Personality and Behaviors**: Rachel is a graphic designer, so she has a creative mindset and is likely to enjoy exploring new ways to express herself through her hobbies. Emily has an eye for detail and appreciates thorough and accurate information. Sje is interested in finding a community of like-minded hobbyists to share tips and inspiration with, which means she values social connections and enjoys interacting with others who share her interests. She is always looking for new skills to learn and is willing to invest time and effort into improving her abilities.

- - -

### The Retiree

**Name:** Susan

**Age:** 60

**Occupation:** Retired

**Background:** Susan retired from her job as a nurse a few years ago and has been looking for ways to stay active and engaged. She enjoys learning new things and wants to keep her mind sharp. Susan is interested in a variety of subjects, including history, literature, and gardening. She lives in a retirement community and has access to a computer and smartphone, but is not particularly tech-savvy.

**Goals**: Susan wants to expand her knowledge and skills, stay engaged in the world around her and maintain mental sharpness. She is interested in taking courses on topics such as history, literature and languages.

**Challenges**: Susan is not very comfortable with technology and may struggle to navigate the e-learning app. She also may have difficulty hearing or seeing the course content clearly.

**Personality and Behaviors**: Susan is a friendly and outgoing person who enjoys spending time with her friends and family. She is open-minded and enjoys trying new things. She is motivated to learn and grow, but may be hesitant to ask for help or admit when she doesn't understand something.

- - -

### The Educator

**Name:** Sarah

**Age:** 35

**Occupation:** High school English Teacher

**Background:** Sarah has been teaching high school English for the past 8 years. She has a Bachelor's degree in English and a Master's degree in Education. Sarah is passionate about teaching and loves to see her students succeed. She has been using e-learning tools in her classroom for the past few years and is always on the lookout for new tools that can help her engage her students and improve their learning outcomes.

**Goals**: Sarah's primary goal is to help her students succeed academically and prepare them for college. She wants to use e-learning tools to create a more engaging and personalized learning experience for her students. She is also interested in tools that can help her monitor her students' progress and identify areas where they need extra help.

**Challenges**: Sarah faces a number of challenges in her teaching role. She often has large class sizes and limited time to devote to individual students. Additionally, she has noticed that her students are becoming more distracted and disengaged from traditional teaching methods, so she is looking for new ways to keep them engaged and motivated.

**Personality and Behaviors**: Sarah is a passionate and dedicated teacher who is always looking for ways to improve her teaching practice. She is organized and detail-oriented, but can also be flexible and creative when it comes to trying new things. She is comfortable using technology and is always eager to learn new tools and platforms. She is patient and understanding with her students, but also has high expectations for their performance.

- - -

### The Parent

**Name:** Maria

**Age:** 39

**Occupation:** Full-time working parent, software engineer

**Background:** Maria is a busy mother of two children, ages 6 and 8. She and her husband work full-time and their kids attend a local public school. Maria is passionate about her work as a software engineer and enjoys learning new things both for her career and personal growth. However, she often struggles to balance her work, family and personal interests and feels guilty when she can't give her children the attention they need.

**Goals**: Maria's primary goal is to find a way to support her children's education and help them succeed in school, while still being able to pursue her own interests and career. She is interested in finding an e-learning app that provides high-quality, age-appropriate educational resources that her kids can access on their own. She also wants the app to be easy to use and fit seamlessly into her family's busy schedule.

**Challenges**: Maria's biggest challenge is finding time to dedicate to her children's education while juggling her work and personal interests. She wants to be involved in her children's learning, but often feels too tired or overwhelmed to take on additional tasks. Additionally, she is concerned about finding an app that is safe and appropriate for her children to use on their own, without constant supervision.

**Personality and Behaviors**: Maria is a dedicated and hardworking person who takes her responsibilities seriously. She is curious and enjoys learning new things and is eager to find ways to support her children's education. However, she can be perfectionistic and hard on herself and struggles to find a balance between her various obligations.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## User Scenarios

### The High School Student

After hearing about BrainBoost from a friend, Lily downloads the app and signs up for an account. She browses the course catalog and selects a creative writing course that fits her interests.

She completes the first few modules and finds the course materials engaging and informative. She also participates in the course discussion board, where she interacts with other students and receives feedback from the instructor.

She feels a sense of accomplishment and is excited to continue her learning journey with BrainBoost.

### The College Student

John has just started his sophomore year and is looking for ways to supplement his coursework and gain additional knowledge and skills in computer science. He has heard about the BrainBoost app from a classmate and decides to sign up for an account.

John uses the app to browse the course catalog and selects a course on web development. He starts working through the course modules and finds the content engaging and informative.

John also discovers the discussion board and decides to post a question about a coding problem he is having trouble with. A fellow learner responds with a helpful suggestion and John feels more confident in his abilities.

Even after completing the course, John continues to use the BrainBoost app throughout his academic career, supplementing his coursework and gaining practical skills that help his stand out in the job market.

### The Professional

Emily is a busy marketing manager who works long hours and has a demanding job. She wants to improve her skills and take on more responsibilities, but she doesn't have a lot of time to attend in-person classes or workshops. She decides to download a learning app to help her achieve her goals.

Once she downloads the app, Emily creates an account and sets up her profile. After looking through the catalog, Emily chooses a course on social media marketing and begins working through the modules. The course includes interactive content, such as quizzes and videos, that keep her engaged and help her learn the material. She can also take the course at her own pace, fitting it into her busy schedule.

As Emily progresses through the course, she can track her progress and see how she is improving. She earns more motivation as she completes each module. She also has the option to connect with other learners and collaborate with them on projects.

By the end of the course, Emily has gained valuable skills and knowledge that she can apply to her job. She feels more confident in her abilities and is ready to take on more responsibilities at work. She continues to use the e-learning app to take more courses and improve her skills over time.

### The Busy Professional

James has recently been promoted to a senior-level position at his company, which requires him to have a more in-depth understanding of data analysis and project management. He has limited time to attend traditional in-person courses and his work schedule is often unpredictable.

He downloads the BrainBoost app and creates an account. He browses the course catalog and finds several courses that align with his goals. He enrolls in a course on data analysis and begins watching the video lectures during his daily commute. He takes the quizzes and completes the assignments during his lunch breaks or after his children go to bed.

He appreciates the flexibility and convenience of being able to learn on his own schedule and at his own pace. As he progresses through the course, he engages with the instructor and other learners through the discussion board, providing and receiving feedback on his work.

By the end of the course, he has gained a deeper understanding of data analysis and is able to apply his new knowledge to his work. James is pleased with his experience using the BrainBoost app and recommends it to his colleagues and friends.

### The Hobbyist

Rachel wants to learn how to make her own sourdough bread. She has always been interested in bread-making, but has never attempted it before. She searches online for courses or tutorials on sourdough bread-making, but is overwhelmed by the amount of information available.

She decides to download the learning app and searches for courses related to baking. The app suggests a course on bread-making that includes a section on sourdough. Rachel enrolls in the course and starts watching the videos and following the recipes. She finds the videos to be engaging and informative and appreciates the interactive quizzes that help her test her understanding of the material

After completing the course, Rachel feels confident enough to try making her own sourdough bread. She documents the process on the sharing feature with the community of hobbyists she has connected with through the learning app. Rachel is motivated to continue learning and exploring new skills and hobbies with the help of the app.

### The Retiree

Susan is at home on a rainy day and is looking for a new learning opportunity. She opens the learning app on her tablet and browses the course library. She sees a course on the history of art that catches her eye and clicks on it to read more. The course description includes a sample video and quiz, which Susan completes to get a better sense of the course content. She likes what she sees and decides to enroll in the course.

Throughout the course, Susan is able to watch video lectures, complete interactive quizzes and participate in a discussion forum with other learners. She enjoys the social aspect of the app and is able to connect with other retirees who share her interests.

At the end of the course, she feels a sense of accomplishment and is excited to continue her learning journey with the app.

### The Educator

Sarah is preparing for a new school year and is looking for new tools to use in her classroom. She has heard about the BrainBoost e-learning app and decides to try it out. She creates an account and starts exploring the app's features.

She is impressed by the personalized learning plan and the gamification features, which she thinks will help keep her students engaged. She also likes the progress tracking feature, which will help her monitor her students' performance and identify areas where they need extra help.

Sarah decides to use BrainBoost in her classroom and finds that her students are more engaged and motivated than they were before. She is able to monitor their progress more effectively and provide targeted support where needed. Overall, Sarah is very happy with the app and plans to continue using it in her teaching practice.

### The Parent

Maria's children are struggling with Math and she wants to find a way to help them improve their skills without adding more to her already busy schedule. She downloads an e-learning app that offers interactive math lessons for kids and sets up profiles for each of her children.

She shows them how to use the app and encourages them to work on the math lessons during their free time. Over the next few weeks, she sees a noticeable improvement in their math skills and feels proud of herself for finding a solution that works for her family's needs. She continues to use the app to support her children's education and recommends it to other parents in her community.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Empathy Maps

### The High School Student

**Say:**
- "I want to learn new things outside of school."
- "I want to connect with other people who are interested in the same subjects."
- "I don't want to fall behind my classmates."

**Think:**
- "I'm not sure which courses to take."
- "I hope the course material is engaging and interesting."
- "I want to make sure the course will help me with my future career goals."

**Do:**
- Searches for online courses related to their interests and academic goals.
- Reads reviews and ratings of courses to make an informed decision.
- Watches lectures, reads materials, and completes assignments.
- Engages with other students through discussion boards and other interactive features.

**Feel:**
- Excited to learn new things and expand their knowledge.
- Anxious about the workload and the difficulty of the course.
- Hopeful that the course will help them in their future career or academic pursuits.

### The College Student

**Say:**
- "I'm struggling to keep up with my coursework and need additional resources to help me study."
- "I want to learn more about specific topics or subjects that are not covered in my courses."
- "I'm looking for a platform that is easy to use and navigate."

**Think:**
- "I want to get good grades and do well in my classes."
- "I need to learn this material in order to succeed in my future career."
- "I want to learn from an experienced instructor who can provide valuable insights and feedback."

**Do:**
- Searches for online courses related to their subject area of interest.
- Participates in online discussions with other students and the instructor.
- Take quizzes and assessments to test their knowledge

**Feel:**
- Excited about the opportunity to learn and expand their knowledge.
- Grateful for the opportunity to learn from an experienced instructor and connect with other students who share their interests.
- Frustrated with difficult coursework

### The Professional

**Say:**
- "I don't have a lot of free time, so I need courses that are efficient."
- "I need courses that are relevant to my industry and career goals."
- "I want to be able to apply what I learn to my job right away."

**Think:**
- "I need to stay up-to-date with the latest trends and technologies in my industry."
- "I want to be more competitive in the job market."
- "I want to take my career to the next level."

**Do:**
- Attend courses to network and learn about the latest industry trends.
- Take courses to improve their skills and advance their careers.
- Apply what they learn to their jobs and seek out opportunities to demonstrate their expertise.

**Feel:**
- Anxious about falling behind in their industry.
- Motivated to stay competitive and advance their career.
- Frustrated by a lack of time to pursue additional learning opportunities.
- Confident in their ability to apply what they learn to their jobs.

### The Busy Professional

**Say:**
- "I need to find a way to learn new skills while still maintaining my busy work schedule."
- "I want to find an e-learning platform that is easy to use and fits into my lifestyle."
- "I don't have time to attend in-person classes, so I need an online solution that is flexible and accessible."

**Think:**
- "I want to learn new skills to advance in my career or switch to a new field."
- "I don't want to waste my time on irrelevant or low-quality courses."
- "I need an e-learning platform that will help me achieve my goals and provide me with valuable knowledge and skills."

**Do:**
- Research different e-learning platforms and read reviews to find the best option.
- Prioritize courses and learning modules that align with career goals and interests.
- Set aside dedicated time for learning and stick to a schedule.

**Feel:**
- Frustrated by the lack of time and resources to pursue additional education.
- Motivated to learn and grow professionally.
- Skeptical about the effectiveness and quality of online learning platforms.

### The Hobbyist

**Say:**
- "I love learning new things related to my hobbies and interests!"
- "I wish I had more time to dedicate to learning and practicing my hobby."
- "I like to share my knowledge and skills with others who have similar interests."

**Think:**
- "I want to learn new skills to improve my craft and expand my knowledge."
- "I want to feel a sense of accomplishment when I learn something new or complete a project."
- "I want to find courses or resources that are specifically tailored to my hobby and skill level."

**Do:**
- Research online for courses, tutorials, and resources related to their hobby.
- Practice and experiment with new techniques and skills they learn.
- Share their work and knowledge with others through social media, online forums or in-person meetups.

**Feel:**
- Excited and curious when discovering new techniques and skills.
- Frustrated when they encounter challenges or obstacles in their learning.
- Satisfied and proud when they complete a project or master a new skill.

### The Retiree

**Say:**
- “I want to keep my mind active and learn new things.”
- “I have more free time now, so I want to use it productively.”
- “I don't want to feel isolated or disconnected from the world.”

**Think:**
- “Learning new things will help me stay sharp and engaged with the world.”
- “I want to find courses that are interesting and relevant to me.”
- “I'm worried that I might not be able to keep up with the technology and tools needed for online learning.”

**Do:**
- Research courses and learning platforms online.
- Sign up for courses that are interesting and relevant to their goals.
- Dedicate time each day or week to learning.

**Feel:**
- Excited to learn new things and expand their knowledge.
- Proud of their accomplishments and achievements.
- A sense of community and connection with other learners.
- Some anxiety or fear about keeping up with technology and online learning.

### The Educator

**Say:**
- "I need an e-learning platform that's easy to use and navigate, with a clear and intuitive interface."
- "I want to be able to create and share my own courses and materials with my students."
- "I'm always looking for new ways to engage my students and keep them interested in learning."

**Think:**
- "I want to ensure that my students are engaged and motivated to learn."
- "I need to provide my students with the knowledge and skills they need to succeed in their academic and professional lives."
- "I want to stay up-to-date on the latest teaching methods and technologies to improve my own teaching skills."

**Do:**
- Create and share course materials with students
- Monitor student progress and performance
- Engage in ongoing professional development and training

**Feel:**
- Frustration with outdated or difficult-to-use e-learning platforms
- Motivation to provide the best possible education for students
- Passion for teaching and helping students learn and succeed

### The Parent

**Say:**
- "I want my child to succeed in their studies and have a good education."
- "I'm always looking for new ways to support my child's learning."
- "I'm worried my child will fall behind in school if they don't have access to additional learning materials."

**Think:**
- "I need to find resources that are both educational and engaging for my child."
- "I want to make sure I'm doing everything I can to help my child succeed."
- "I want to track my child's progress and see how they're doing in their courses."

**Do:**
- Encourages their child to use the app and complete courses on a regular basis.
- Create a schedule or routine for studying at home.
- Monitor my child's progress and provide feedback and support.

**Feel:**
- Frustrated by the high cost of private tutors and after-school programs.
- Concerned about my child's education and future.
- Hopeful that the e-learning app will provide their child with the resources they need to succeed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Color Palette

<br>

![#463BCE](https://placehold.co/30x30/463BCE/463BCE.png) `#463BCE`
![#665BE6](https://placehold.co/30x30/665BE6/665BE6.png) `#665BE6`
![#157D6F](https://placehold.co/30x30/157D6F/157D6F.png) `#157D6F`
![#202244](https://placehold.co/30x30/202244/202244.png) `#202244`
![#F1F1F1](https://placehold.co/30x30/F1F1F1/F1F1F1.png) `#F1F1F1`
![#212121](https://placehold.co/30x30/212121/212121.png) `#212121`


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Typography

- Work Sans Light
- Work Sans Regular
- Work Sans SemiBold
- Work Sans Bold

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# App

## User Types

After the personas previously settled, it was easy to include 4 + 1 type of users for this app. Even though 3 of them can all see courses, it was important to set a particular feature for most of them.

- Learner: the main function of a Learner type is to interact with the app only for the common parts for regular users.
- Instructor: even though the instructor can see other courses, the particular feature of this user is to create new courses.
- Parent: even though the parent can see other courses, the unique feature of this user is to manage children courses progress.
- Moderator: the moderator just controlls a part of Administrator user only to help him manage the app.
- Administrator: an admin user has almost all the privileges for the CRUD operations inside the app.

## Database Tables

After setting up all the project features and sorting by tables, the final app has a total of 22 tables:

- Categories
- Courses
- DiscussionBoardReplies
- DiscussionBoards
- DocumentSubmissionFeedbacks
- DocumentSubmissions
- Exercises
- ExerciseTypes
- Languages
- LessonAssignments
- LessonFiles
- Lessons
- Logs
- Notifications
- SecurityQuestions
- Topics
- UserPermissions
- Users
- Users_Assignments
- Users_Exercises
- Users_Progress
- User_Courses

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## API Documentation

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## API Testing

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Web Pages

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Web Testing

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Mobile Screens

<p align="right">(<a href="#readme-top">back to top</a>)</p>