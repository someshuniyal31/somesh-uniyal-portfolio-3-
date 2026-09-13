export const profile = {
    name: "Somesh Uniyal",
    subtitle: "Computer Science Engineering Student | Software Development",
    heroText:
        "Focused on software development, full-stack development, data structures & algorithms, and core computer science fundamentals. I build practical, well-engineered software — from real-time web applications to algorithmic optimization systems and machine learning tools.",
    aboutText: [
        "I am a Computer Science Engineering undergraduate at Graphic Era Hill University (B.Tech CSE, 2023 – present, GPA 8.2), focused on software development, full-stack development, and strong computer science fundamentals.",
        "My project work spans real-time full-stack systems, graph-based optimization, and machine learning — including a WebSocket-based chat application, a Maximum Flow algorithm-driven water distribution system, and a regression-based gold price prediction web app.",
        "Alongside coursework in Data Structures & Algorithms, OOP, DBMS, Operating Systems, and Networking, I have strengthened my profile through certifications from IBM, Deloitte, and Saylor Academy, participation in ISRO's YUVIKA programme, and national and university-level hackathons.",
    ],
    email: "someshuniyal50@gmail.com",
    mobile: "9760663476",
    github: "https://github.com/someshuniyal31",
    focusAreas: [
        "Software Development",
        "Full-Stack Development",
        "Data Structures & Algorithms",
        "Computer Science Fundamentals",
    ],
};

export const skillGroups = [
    {
        name: "Languages",
        testId: "languages",
        items: ["C", "C++", "JavaScript", "MySQL", "PgSQL"],
    },
    {
        name: "Frameworks / Technologies",
        testId: "frameworks",
        items: ["React.js", "Node.js", "REST API", "Tailwind CSS", "Git", "GitHub"],
    },
    {
        name: "Coursework",
        testId: "coursework",
        items: [
            "Data Structures and Algorithms",
            "Object-Oriented Programming",
            "DBMS",
            "Operating Systems",
            "Networking",
        ],
    },
];

export const projects = [
    {
        id: "real-time-chat",
        number: "01",
        title: "Real-Time Chat Application",
        category: "Full-Stack Development",
        description:
            "Built a full-stack real-time chat application using React.js, Node.js, Express.js, Socket.io, and MongoDB, enabling secure user authentication, instant message delivery, and real-time communication through WebSocket-based connectivity.",
        concept: "WebSocket-Based Real-Time Communication",
        tech: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "WebSocket"],
        accent: {
            chip: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/60",
            bar: "bg-emerald-500",
        },
    },
    {
        id: "water-distribution",
        number: "02",
        title: "Water Distribution Optimization System",
        category: "Algorithms & Graph Theory",
        description:
            "Developed a graph-based water distribution optimization system using Python, Flask, React.js, NetworkX, and D3.js, modeling tanks and pumps as nodes and pipelines as weighted-capacity edges to determine efficient water flow routes using the Maximum Flow algorithm.",
        concept: "Maximum Flow Algorithm",
        tech: ["Python", "Flask", "React.js", "NetworkX", "D3.js", "Maximum Flow"],
        accent: {
            chip: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800/60",
            bar: "bg-blue-500",
        },
    },
    {
        id: "gold-price-prediction",
        number: "03",
        title: "Gold Price Prediction Web App",
        category: "Machine Learning",
        description:
            "Developed a machine learning-based gold price prediction system using Python, Pandas, NumPy, Scikit-learn, Regression, and Streamlit, performing data preprocessing, feature analysis, and regression-based forecasting to predict future gold prices through an interactive web interface.",
        concept: "Regression-Based Forecasting",
        tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Regression", "Streamlit"],
        accent: {
            chip: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800/60",
            bar: "bg-amber-500",
        },
    },
];

export const education = [
    {
        id: "btech",
        degree: "B.Tech — Computer Science & Engineering",
        institution: "Graphic Era Hill University",
        period: "Aug 2023 — Present",
        score: "GPA 8.2",
    },
    {
        id: "senior-secondary",
        degree: "Senior Secondary (UK Board)",
        institution: "SVMIC Joshimath",
        period: "2023",
        score: "89.6%",
    },
    {
        id: "matriculation",
        degree: "Matriculation (UK Board)",
        institution: "SVMIC Joshimath",
        period: "2021",
        score: "92.8%",
    },
];

export const certifications = [
    {
        id: "ibm-encryption",
        name: "Fundamentals of Encryption & Quantum Safe Techniques",
        issuer: "IBM",
    },
    {
        id: "deloitte-cyber",
        name: "Cyber Job Simulation",
        issuer: "Deloitte",
    },
    {
        id: "saylor-os",
        name: "Operating System",
        issuer: "Saylor Academy",
    },
];

export const achievements = [
    {
        id: "isro-yuvika",
        title: "ISRO YUVIKA (Young Scientist Programme)",
        tag: "Indian Space Research Organisation",
        description:
            "Participated in ISRO's YUVIKA programme at Satish Dhawan Space Centre, Sriharikota, gaining hands-on exposure to space technology, space science, and satellite/launch-vehicle systems.",
    },
    {
        id: "hackathons",
        title: "Hackathons",
        tag: "National & University Level",
        description:
            "Participated in national and university-level hackathons, developing innovative, technology-driven solutions to real-world problems through collaborative teamwork.",
    },
];

export const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
];
