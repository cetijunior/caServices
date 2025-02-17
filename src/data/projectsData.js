export const projects = [
    {
        id: "pok",
        title: "POK",
        image: "/assets/images/pok.svg",
        year: "2022",
        tags: ["Fintech", "UI/UX Design", "Web Dev"],
        description: "Revolutionary fintech solution transforming digital payments",
        bgColor: "bg-gradient-to-br from-blue-900 to-black",
        fullDescription: `POK is a groundbreaking fintech platform that revolutionizes how digital payments are processed and managed. The solution combines cutting-edge security features with an intuitive user interface to deliver a seamless payment experience.`,
        challenge: "Traditional payment systems often struggle with complex integration requirements, slow processing times, and poor user experience. Our challenge was to create a solution that addresses these pain points while maintaining the highest security standards.",
        solution: "We developed a modular architecture that allows for easy integration with existing systems while providing real-time payment processing capabilities. The system utilizes advanced encryption and blockchain technology to ensure secure transactions.",
        features: [
            "Real-time payment processing",
            "Multi-currency support",
            "Advanced fraud detection",
            "Automated reconciliation",
            "Interactive dashboard",
            "API-first architecture"
        ],
        techStack: {
            frontend: ["React", "TypeScript", "Tailwind CSS"],
            backend: ["Node.js", "Express", "PostgreSQL"],
            infrastructure: ["AWS", "Docker", "Kubernetes"]
        },
        metrics: {
            processedTransactions: "1M+",
            averageResponseTime: "0.3s",
            uptime: "99.99%",
            userSatisfaction: "4.8/5"
        },
        links: {
            live: "https://pok.example.com",
            documentation: "https://docs.pok.example.com"
        }
    },
    {
        id: "smip",
        title: "SMIP",
        image: "/assets/images/smip.svg",
        year: "2022",
        tags: ["App Dev", "Web Dev"],
        description: "Next-generation educational platform",
        bgColor: "bg-gradient-to-br from-teal-400 to-teal-900",
        fullDescription: `SMIP is an innovative educational platform that bridges the gap between traditional learning and modern digital experiences. It provides a comprehensive suite of tools for educators and students to facilitate engaging, interactive learning experiences.`,
        challenge: "Educational institutions needed a flexible, scalable platform that could support both in-person and remote learning while providing robust analytics and progress tracking.",
        solution: "We created a hybrid platform that seamlessly integrates various learning modalities with powerful analytics tools. The platform adapts to different learning styles and provides real-time feedback to both educators and students.",
        features: [
            "Interactive learning modules",
            "Real-time collaboration tools",
            "Progress tracking dashboard",
            "Custom curriculum builder",
            "Integrated assessment tools",
            "Mobile-first design"
        ],
        techStack: {
            frontend: ["React Native", "Next.js", "Material-UI"],
            backend: ["Python", "Django", "MongoDB"],
            infrastructure: ["GCP", "Firebase", "CloudFront"]
        },
        metrics: {
            activeUsers: "50K+",
            coursesCreated: "1000+",
            studentEngagement: "89%",
            teacherSatisfaction: "4.9/5"
        },
        links: {
            live: "https://smip.example.com",
            documentation: "https://docs.smip.example.com"
        }
    },
    {
        id: "one",
        title: "ONE",
        image: "/assets/images/one.svg",
        year: "2022",
        tags: ["App Dev", "Web Dev"],
        description: "Unified digital experience platform",
        bgColor: "bg-gradient-to-br from-purple-900 to-black",
        fullDescription: `ONE is a comprehensive digital experience platform that unifies various digital touchpoints into a cohesive, seamless experience. It enables organizations to create, manage, and optimize digital experiences across multiple channels and devices.`,
        challenge: "Organizations struggled with fragmented digital experiences across different platforms and devices, leading to inconsistent brand messaging and poor user engagement.",
        solution: "We developed a unified platform that centralizes content management, user experience design, and analytics while maintaining flexibility for different channels and use cases.",
        features: [
            "Omnichannel content management",
            "Personalization engine",
            "A/B testing capabilities",
            "Analytics dashboard",
            "Automated workflow tools",
            "Multi-site management"
        ],
        techStack: {
            frontend: ["Vue.js", "Nuxt.js", "TailwindCSS"],
            backend: ["Java", "Spring Boot", "Elasticsearch"],
            infrastructure: ["Azure", "Redis", "Nginx"]
        },
        metrics: {
            deployedSites: "500+",
            totalPageViews: "10M+",
            averageLoadTime: "0.8s",
            customerRetention: "95%"
        },
        links: {
            live: "https://one.example.com",
            documentation: "https://docs.one.example.com"
        }
    },
    {
        id: "kesh",
        title: "KESH",
        image: "/assets/images/kesh.svg",
        year: "2022",
        tags: ["App Dev", "Web Dev"],
        description: "Advanced payment processing system",
        bgColor: "bg-gradient-to-br from-zinc-800 to-black",
        fullDescription: `KESH is a sophisticated payment processing system designed for enterprise-level transactions. It combines robust security features with advanced processing capabilities to handle complex payment scenarios at scale.`,
        challenge: "Enterprise organizations needed a reliable, scalable payment processing system that could handle complex payment flows while maintaining compliance with international regulations.",
        solution: "We built a highly scalable payment processing system with built-in compliance checks, automated reconciliation, and support for multiple payment methods and currencies.",
        features: [
            "Multi-currency support",
            "Automated compliance checks",
            "Real-time transaction monitoring",
            "Customizable payment flows",
            "Advanced reporting tools",
            "Global payment gateway integration"
        ],
        techStack: {
            frontend: ["Angular", "RxJS", "SCSS"],
            backend: ["Go", "gRPC", "PostgreSQL"],
            infrastructure: ["AWS", "Terraform", "EKS"]
        },
        metrics: {
            transactionVolume: "$5B+",
            successRate: "99.99%",
            averageProcessingTime: "0.5s",
            complianceScore: "100%"
        },
        links: {
            live: "https://kesh.example.com",
            documentation: "https://docs.kesh.example.com"
        }
    }
];