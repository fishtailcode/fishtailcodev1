export interface CourseModule {
  title: string;
  content: string[];
}

export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  mode: string;
  level: string;
  image: string;
  overview: string;
  curriculum: CourseModule[];
  skills: string[];
  benefits: string[];
  upcomingClasses: {
    date: string;
    time: string;
  }[];
}

export const courses: Course[] = [
  {
    slug: 'python',
    title: 'Python Programming',
    subtitle: 'Master Python from Scratch to Advanced',
    description:
      'Learn Python programming language from basics to advanced concepts. Build real-world applications and start your career as a Python Developer.',
    duration: '2.5 Months',
    mode: 'Physical & Online',
    level: 'Beginner to Advanced',
    image: '~/assets/images/courses/python.jpg', // Placeholder, will need to handle images
    overview: `
      Python is one of the most popular and versatile programming languages in the world today. Known for its simplicity and readability, it is widely used in web development, data science, artificial intelligence, automation, and more.
      
      Our Python Programming course is designed to take you from a complete beginner to a proficient Python developer. You will learn the core concepts of programming, data structures, algorithms, and object-oriented programming.
      
      By the end of this course, you will be able to write efficient Python code, build robust applications, and have a strong foundation for specialized fields like Django web development or Data Science.
    `,
    curriculum: [
      {
        title: 'Introduction to Python',
        content: [
          'What is Python?',
          'Setting up the Environment',
          'Python Syntax and Variables',
          'Data Types and Operators',
        ],
      },
      {
        title: 'Control Flow',
        content: ['Conditional Statements (if, else, elif)', 'Loops (for, while)', 'Break and Continue statements'],
      },
      {
        title: 'Data Structures',
        content: ['Lists, Tuples, and Sets', 'Dictionaries', 'List Comprehensions', 'String Manipulation'],
      },
      {
        title: 'Functions and Modules',
        content: ['Defining Functions', 'Arguments and Return Values', 'Lambda Functions', 'Modules and Packages'],
      },
      {
        title: 'Object-Oriented Programming (OOP)',
        content: [
          'Classes and Objects',
          'Inheritance and Polymorphism',
          'Encapsulation and Abstraction',
          'Method Overriding',
        ],
      },
      {
        title: 'File Handling and Exceptions',
        content: ['Reading and Writing Files', 'Exception Handling (try, except, finally)', 'Context Managers'],
      },
    ],
    skills: [
      'Python Syntax & Semantics',
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'File Handling',
      'Error Handling & Debugging',
      'Basic Database Interaction',
    ],
    benefits: [
      'High demand for Python developers in Nepal and globally',
      'Versatile language for Web, Data, and AI',
      'Easy to learn syntax',
      'Strong community support',
      'Build a portfolio of projects',
    ],
    upcomingClasses: [
      { date: '30 Nov 2025', time: '07:00 AM - 08:30 AM' },
      { date: '05 Dec 2025', time: '05:30 PM - 07:00 PM' },
      { date: '10 Dec 2025', time: '11:00 AM - 12:30 PM' },
    ],
  },
  {
    slug: 'java',
    title: 'Java Development',
    subtitle: 'Build Enterprise-Grade Applications with Java',
    description:
      'Comprehensive Java training covering Core Java, Advanced Java, and Spring Boot. Become an enterprise-ready Java developer.',
    duration: '3 Months',
    mode: 'Physical & Online',
    level: 'Intermediate',
    image: '~/assets/images/courses/java.jpg',
    overview: `
      Java remains one of the most widely used programming languages for enterprise applications. Its "write once, run anywhere" capability makes it a top choice for large-scale systems.
      
      This course covers the complete Java ecosystem, starting from Core Java fundamentals to Advanced Java concepts like Multithreading and JDBC. You will also get an introduction to the Spring Boot framework for building modern web applications.
    `,
    curriculum: [
      {
        title: 'Core Java',
        content: ['Java Basics', 'OOP Concepts', 'Exception Handling', 'Collections Framework'],
      },
      {
        title: 'Advanced Java',
        content: ['Multithreading', 'JDBC (Database Connectivity)', 'Servlets and JSP', 'File I/O'],
      },
      {
        title: 'Spring Framework',
        content: ['Introduction to Spring', 'Dependency Injection', 'Spring Boot Basics', 'Building REST APIs'],
      },
    ],
    skills: ['Core Java', 'OOP', 'Spring Boot', 'Hibernate', 'RESTful APIs', 'MySQL'],
    benefits: [
      'Standard for enterprise applications',
      'High job stability',
      'Strong foundation for Android development',
      'Scalable and secure applications',
    ],
    upcomingClasses: [
      { date: '01 Dec 2025', time: '07:00 AM - 08:30 AM' },
      { date: '15 Dec 2025', time: '04:00 PM - 05:30 PM' },
    ],
  },
  {
    slug: 'web-development',
    title: 'Full Stack Web Development',
    subtitle: 'Become a Full Stack Developer (MERN/Python)',
    description:
      'Learn to build complete web applications using modern technologies. Choose between MERN Stack or Python/Django path.',
    duration: '3.5 Months',
    mode: 'Physical & Online',
    level: 'Beginner to Advanced',
    image: '~/assets/images/courses/web-dev.jpg',
    overview: `
      Web Development is one of the most sought-after skills in the tech industry. This course is designed to turn you into a Full Stack Developer capable of handling both frontend and backend development.
      
      You will learn HTML, CSS, JavaScript, React for the frontend, and Node.js/Express or Python/Django for the backend, along with database management.
    `,
    curriculum: [
      {
        title: 'Frontend Fundamentals',
        content: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'Responsive Design', 'Tailwind CSS'],
      },
      {
        title: 'Frontend Framework (React)',
        content: ['Components & Props', 'State Management', 'Hooks', 'Routing'],
      },
      {
        title: 'Backend Development',
        content: ['Node.js & Express / Python & Django', 'REST API Design', 'Authentication & Authorization'],
      },
      {
        title: 'Database',
        content: ['MongoDB / PostgreSQL', 'Data Modeling', 'CRUD Operations'],
      },
    ],
    skills: ['HTML/CSS/JS', 'React.js', 'Node.js/Django', 'Database Management', 'Git/GitHub', 'Deployment'],
    benefits: [
      'Build complete web applications',
      'High earning potential',
      'Freelancing opportunities',
      'Work on real-world projects',
    ],
    upcomingClasses: [
      { date: '02 Dec 2025', time: '10:00 AM - 11:30 AM' },
      { date: '08 Dec 2025', time: '06:00 PM - 07:30 PM' },
    ],
  },
  {
    slug: 'data-science',
    title: 'Data Science & Machine Learning',
    subtitle: 'Unlock the Power of Data',
    description:
      'Master data analysis, visualization, and machine learning algorithms using Python. Start your journey into AI.',
    duration: '3 Months',
    mode: 'Physical & Online',
    level: 'Intermediate',
    image: '~/assets/images/courses/data-science.jpg',
    overview: `
      Data Science is the art of extracting insights from data. In this course, you will learn how to manipulate, analyze, and visualize data using Python libraries like Pandas, NumPy, and Matplotlib.
      
      You will also dive into Machine Learning, learning how to build predictive models using Scikit-Learn.
    `,
    curriculum: [
      {
        title: 'Data Analysis Libraries',
        content: ['NumPy', 'Pandas', 'Data Cleaning', 'Exploratory Data Analysis'],
      },
      {
        title: 'Data Visualization',
        content: ['Matplotlib', 'Seaborn', 'Plotly'],
      },
      {
        title: 'Machine Learning Basics',
        content: ['Supervised vs Unsupervised Learning', 'Regression & Classification', 'Model Evaluation'],
      },
    ],
    skills: ['Python', 'Data Analysis', 'Data Visualization', 'Machine Learning', 'Statistics', 'SQL'],
    benefits: [
      'Fastest growing career field',
      'High salary potential',
      'Work in diverse industries',
      'Foundation for AI',
    ],
    upcomingClasses: [{ date: '10 Dec 2025', time: '07:00 AM - 08:30 AM' }],
  },
  {
    slug: 'cloud-computing',
    title: 'Cloud Computing (AWS)',
    subtitle: 'Master Cloud Infrastructure with AWS',
    description:
      'Learn to design, deploy, and manage scalable applications on Amazon Web Services (AWS). Prepare for AWS certification.',
    duration: '2 Months',
    mode: 'Online',
    level: 'Intermediate',
    image: '~/assets/images/courses/cloud.jpg',
    overview: `
      Cloud Computing is the backbone of modern IT infrastructure. This course focuses on AWS, the leading cloud provider. You will learn about EC2, S3, RDS, Lambda, and other core services.
      
      This training is practical and hands-on, preparing you for real-world cloud architecture tasks.
    `,
    curriculum: [
      {
        title: 'Cloud Concepts',
        content: ['Introduction to Cloud Computing', 'AWS Global Infrastructure', 'Identity Access Management (IAM)'],
      },
      {
        title: 'Core Services',
        content: ['EC2 (Compute)', 'S3 (Storage)', 'RDS (Database)', 'VPC (Networking)'],
      },
      {
        title: 'Serverless & DevOps',
        content: ['AWS Lambda', 'API Gateway', 'CloudFormation', 'CI/CD on AWS'],
      },
    ],
    skills: ['AWS Services', 'Cloud Architecture', 'Serverless Computing', 'DevOps Basics', 'Security'],
    benefits: [
      'High demand for Cloud Engineers',
      'Global career opportunities',
      'Prepare for AWS Certification',
      'Scalable infrastructure skills',
    ],
    upcomingClasses: [{ date: '12 Dec 2025', time: '06:30 PM - 08:00 PM' }],
  },
  {
    slug: 'cyber-security',
    title: 'Cyber Security & Ethical Hacking',
    subtitle: 'Protect Systems and Networks',
    description:
      'Learn the fundamentals of cyber security, ethical hacking, and penetration testing. Secure networks and applications.',
    duration: '2.5 Months',
    mode: 'Physical & Online',
    level: 'Beginner to Intermediate',
    image: '~/assets/images/courses/security.jpg',
    overview: `
      With the rise of cyber threats, Cyber Security professionals are in high demand. This course covers the basics of information security, network security, and ethical hacking techniques.
      
      You will learn how to identify vulnerabilities and secure systems against attacks.
    `,
    curriculum: [
      {
        title: 'Security Fundamentals',
        content: ['CIA Triad', 'Network Security Basics', 'Cryptography'],
      },
      {
        title: 'Ethical Hacking',
        content: ['Footprinting & Reconnaissance', 'Scanning Networks', 'System Hacking'],
      },
      {
        title: 'Web App Security',
        content: ['OWASP Top 10', 'SQL Injection', 'XSS', 'Security Auditing'],
      },
    ],
    skills: ['Network Security', 'Ethical Hacking', 'Penetration Testing', 'Linux', 'Security Tools'],
    benefits: [
      'Critical role in any organization',
      'High job security',
      'Challenging and rewarding work',
      'Protect digital assets',
    ],
    upcomingClasses: [{ date: '15 Dec 2025', time: '05:00 PM - 06:30 PM' }],
  },
];
