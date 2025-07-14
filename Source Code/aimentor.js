const courses = {
  webdev: {
    title: "Web Development",
    description2: "You will learn how to create contemporary, responsive websites and online applications from scratch with this all-inclusive online Development course. The three main web technologies—HTML, CSS, and JavaScript—and how they cooperate to produce interesting, intuitive user experiences will be covered. After completing this course, you will be capable of creating, coding, and launching your own completely working websites.",
    description3: "Duration: 12 weeks",
    description4: "Actions involved: ~ Complete the provided lerning modules ~ Take the assessment ~ Complete the tasks ~ Submit the project",
    description5: "Future Scope: Web development has a strong future as more businesses and services move online. Websites and web apps are needed in almost every industry. Learning web development can lead to jobs in frontend, backend, or full-stack development. With web development skills, you can also work as a freelancer or start your own projects."
  },
  python: {
    title: "Python Programming",
    description1: "Become proficient in one of the most popular and adaptable programming languages!",
    description2:"This course on Python programming aims to transform you from a beginner to a proficient coder.  Python is a great starting point for learning the fundamentals of programming, whether your goal is web development, automation, data analysis, or something else entirely. Real-world examples and practical exercises will help you develop your ability to write clear, effective Python code.",
    description3: "Duration: 6 weeks",
    description4: "Actions involved: ~ Complete the provided lerning modules ~ Take the assessment ~ Complete the tasks ~ Submit the project",
    description5: "Future Scope: Python is one of the most popular and useful programming languages today. It is used in many areas like web development, data science, automation, and artificial intelligence. Python is simple to learn and has a lot of tools and libraries that help you build powerful applications. Knowing Python can lead to jobs in software development, data analysis, AI, and more."
  },
  animation: {
    title: "Animation",
    description1: "Use motion and imagination to make your dreams a reality!",
    description2: "You will learn the basics of both 2D and 3D animation in this course on animation design.  Discover how to use industry-standard tools to produce captivating images, characters, and motion graphics.  This course gives you the artistic and technical skills to animation like a pro, regardless of your career goals—whether they be in digital media, gaming, film, or advertising.",
    description3: "Duration: 8 weeks",
    description4: "Actions involved: ~ Complete the provided lerning modules ~ Take the assessment ~ Complete the tasks ~ Submit the project",
    description5: "Future Scope: Animation is becoming more important in entertainment, education, gaming, and advertising. With the rise of digital media and platforms like YouTube and Instagram, animated content is in high demand. New technologies like 3D animation, AR/VR, and motion graphics are opening up more job opportunities. If you enjoy creativity and storytelling, animation can offer a rewarding career."
  },
  java: {
    title: "JAVA",
    description2: "Java is one of the most powerful and popular programming languages in the world. Use it to create scalable, reliable applications. Beginners and intermediate students who wish to learn object-oriented programming and backend development will find this Java programming course ideal. You'll discover how to develop clear, effective Java code and how Java runs everything from enterprise software to Android apps.",
    description3: "Duration: 12 weeks",
    description4: "Actions involved: ~ Complete the provided lerning modules ~ Take the assessment ~ Complete the tasks ~ Submit the project",
    description5: "Future Scope: Java has been a reliable programming language for many years and is still widely used in large companies. It is especially strong in building web applications, Android apps, and systems for banking and business. Java developers are needed for both new projects and maintaining existing systems. Learning Java can lead to stable job opportunities in many fields."
  },
  dataAn: {
    title: "Data Analysis",
    description1: "Create useful insights from raw data!",
    description2: "To help you make informed decisions, this data analysis course will teach you how to gather, clean, analyze, and visualize data.  Regardless of your background in research, business analytics, or data science, this course teaches you how to work with data with confidence using robust tools like SQL, Python, and Excel.  Discover how to create reports, identify trends, and effectively convey your results.",
    description3: "Duration: 10 weeks",
    description4: "Actions involved: ~ Complete the provided lerning modules ~ Take the assessment ~ Complete the tasks ~ Submit the project",
    description5: "Future Scope: Data analysis is a growing field as companies want to make smart decisions using data. It involves collecting, organizing, and understanding data to find useful information. Skills in Excel, Python, SQL, and visualization tools are very useful here. Data analysts are needed in business, healthcare, finance, and almost every other field. This area has great career potential now and in the future."
  }
};

const params = new URLSearchParams(window.location.search);
const courseName = params.get("name");

if (courseName && courses[courseName]) {
  document.getElementById("course_title").textContent = courses[courseName].title;
  document.getElementById("course_description1").textContent = courses[courseName].description1;
  document.getElementById("course_description2").textContent = courses[courseName].description2;
  document.getElementById("course_description3").textContent = courses[courseName].description3;
  document.getElementById("course_description4").textContent = courses[courseName].description4;
  document.getElementById("course_description5").textContent = courses[courseName].description5;
}
