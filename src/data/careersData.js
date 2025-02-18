const careersData = [
    // Social Media Roles
    {
        title: 'Social Media Manager',
        location: 'Remote',
        type: 'Full Time',
        applyBy: '2025-12-31',
        description: 'Develop and execute social media strategies to grow brand presence, engagement, and conversions.',
        responsibilities: [
            'Manage and optimize company social media accounts (Facebook, Instagram, Twitter, LinkedIn, TikTok).',
            'Create and schedule high-quality posts, stories, and videos.',
            'Monitor engagement, analyze data, and optimize strategies for growth.',
            'Collaborate with designers and copywriters for creative content.',
            'Stay updated on social media trends and algorithms.'
        ],
        requirements: [
            '2+ years experience in social media marketing.',
            'Proficiency in social media tools like Hootsuite, Buffer, or Meta Business Suite.',
            'Strong communication and copywriting skills.',
            'Basic knowledge of analytics tools (Google Analytics, Facebook Insights).',
            'Experience with paid advertising is a plus.'
        ],
    },
    {
        title: 'Social Media Content Creator',
        location: 'Remote',
        type: 'Freelance',
        description: 'Create high-quality engaging content for social media platforms.',
        responsibilities: [
            'Shoot and edit engaging videos and images for social media.',
            'Write captions and create viral content strategies.',
            'Collaborate with influencers and brand ambassadors.',
            'Optimize posts for reach and engagement.'
        ],
        requirements: [
            'Experience in video editing tools (Adobe Premiere Pro, CapCut, or Final Cut Pro).',
            'Creative and up-to-date with social media trends.',
            'Strong understanding of different social media platforms.',
            'Portfolio of previous social media work.'
        ],
    },

    // Frontend Development Roles
    {
        title: 'Frontend Developer',
        location: 'Remote',
        type: 'Full Time',
        applyBy: '2025-12-31',
        description: 'Develop interactive and high-performance web applications.',
        responsibilities: [
            'Implement responsive and dynamic UI components.',
            'Ensure cross-browser compatibility and mobile optimization.',
            'Work with designers to create seamless user experiences.',
            'Optimize frontend performance for speed and efficiency.',
            'Integrate APIs and backend services into frontend applications.'
        ],
        requirements: [
            'Proficiency in React.js, Next.js, or Vue.js.',
            'Strong knowledge of HTML, CSS, JavaScript, and Tailwind CSS.',
            'Experience with RESTful APIs and GraphQL.',
            'Familiarity with Git and modern development workflows.',
            'Ability to convert Figma or Adobe XD designs into pixel-perfect UI.'
        ],
    },
    {
        title: 'Webflow Developer',
        location: 'Remote',
        type: 'Freelance',
        description: 'Build and maintain pixel-perfect websites using Webflow.',
        responsibilities: [
            'Develop interactive Webflow-based websites.',
            'Ensure responsiveness and SEO optimization.',
            'Manage Webflow CMS and custom animations.',
            'Collaborate with UI/UX designers on website development.'
        ],
        requirements: [
            'Proficiency in Webflow, HTML, and CSS.',
            'Experience with Webflow CMS and animations.',
            'Strong design eye for modern website layouts.',
            'Portfolio of Webflow projects.'
        ],
    },

    // Backend Development Roles
    {
        title: 'Backend Developer',
        location: 'Remote',
        type: 'Full Time',
        applyBy: '2025-12-31',
        description: 'Develop and maintain scalable backend services.',
        responsibilities: [
            'Design, develop, and optimize backend architecture.',
            'Implement secure authentication and authorization systems.',
            'Work with databases such as PostgreSQL, MongoDB, or Firebase.',
            'Develop RESTful APIs and integrate third-party services.',
            'Ensure high performance and scalability of backend systems.'
        ],
        requirements: [
            'Experience with Node.js, Express.js, Django, or Laravel.',
            'Proficiency in databases like PostgreSQL, MySQL, or MongoDB.',
            'Knowledge of API development and microservices architecture.',
            'Experience with serverless functions (AWS Lambda, Firebase Functions).',
            'Understanding of DevOps, Docker, and CI/CD pipelines is a plus.'
        ],
    },

    // Full-Stack Development Role
    {
        title: 'Full-Stack Developer',
        location: 'Remote',
        type: 'Full Time',
        applyBy: '2025-12-31',
        description: 'Work on both frontend and backend to develop complete web solutions.',
        responsibilities: [
            'Develop and integrate frontend and backend components.',
            'Optimize database queries and server-side logic.',
            'Ensure smooth communication between frontend and backend via APIs.',
            'Implement security best practices in authentication and user data management.',
            'Work on performance optimization and scaling.'
        ],
        requirements: [
            'Strong knowledge of JavaScript frameworks (React.js, Next.js, Node.js).',
            'Experience with backend technologies like Express.js, Django, or Laravel.',
            'Familiarity with database management (SQL & NoSQL).',
            'Proficiency in version control (Git, GitHub).',
            'Experience with cloud services like AWS, Firebase, or Vercel.'
        ],
    },

    // UI/UX & Graphic Design Roles
    {
        title: 'UI/UX Designer',
        location: 'Remote',
        type: 'Full Time',
        applyBy: '2025-12-31',
        description: 'Create intuitive and visually appealing user interfaces for web applications.',
        responsibilities: [
            'Design wireframes, mockups, and prototypes using Figma or Adobe XD.',
            'Conduct user research and usability testing.',
            'Collaborate with developers to ensure design feasibility.',
            'Optimize user flows and interactions for an intuitive experience.'
        ],
        requirements: [
            'Proficiency in Figma, Adobe XD, or Sketch.',
            'Strong understanding of UX principles and best practices.',
            'Experience with responsive and mobile-first design.',
            'Basic knowledge of HTML, CSS, and frontend frameworks is a plus.'
        ],
    },
    {
        title: 'Graphic Designer',
        location: 'Remote',
        type: 'Freelance',
        description: 'Design branding materials, logos, and marketing assets.',
        responsibilities: [
            'Create high-quality graphics for social media, websites, and ads.',
            'Develop brand identity guidelines and assets.',
            'Design custom icons, illustrations, and infographics.',
            'Collaborate with marketing teams on advertising creatives.'
        ],
        requirements: [
            'Expertise in Adobe Photoshop, Illustrator, and Canva.',
            'Creative portfolio with past work samples.',
            'Experience in designing social media visuals and ads.',
            'Understanding of color psychology and branding principles.'
        ],
    },

    // Project Management & Support Roles
    {
        title: 'Project Manager',
        location: 'Remote',
        type: 'Full Time',
        applyBy: '2025-12-31',
        description: 'Manage and coordinate web development projects from start to finish.',
        responsibilities: [
            'Plan and track project timelines and deliverables.',
            'Communicate with clients and team members effectively.',
            'Ensure projects are completed within scope and budget.',
            'Facilitate meetings and sprint planning sessions.',
            'Use project management tools like Trello, Asana, or Jira.'
        ],
        requirements: [
            'Experience managing software development projects.',
            'Strong organizational and leadership skills.',
            'Familiarity with Agile and Scrum methodologies.',
            'Excellent communication and problem-solving abilities.'
        ],
    },
    {
        title: 'Customer Support Specialist',
        location: 'Remote',
        type: 'Full Time',
        description: 'Provide excellent support for clients and customers via email and chat.',
        responsibilities: [
            'Respond to client inquiries and troubleshoot issues.',
            'Manage customer requests and escalate tickets when necessary.',
            'Create support documentation and FAQs.',
            'Ensure high customer satisfaction and timely responses.'
        ],
        requirements: [
            'Excellent communication and problem-solving skills.',
            'Experience with customer support tools (Zendesk, Intercom, Freshdesk).',
            'Ability to multitask and handle multiple inquiries simultaneously.',
            'Basic understanding of web development is a plus.'
        ],
    }
];

export default careersData;
