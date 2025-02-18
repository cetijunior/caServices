export const projects = [
    {
        id: "garage-mt",
        title: "Garage MT",
        image: "/assets/projects/GMTPhone.png",
        image2: "/assets/projects/GMTLaptop.png",
        year: "2024",
        tags: ["Auto Services", "Web Dev", "Business"],
        description: "A modern and efficient garage management system designed for Malta.",
        bgColor: "bg-gradient-to-br from-red-800 to-black",
        fullDescription: `Garage MT is a state-of-the-art garage website tailored for the Maltese market. It simplifies the booking process, enhances customer experience, and helps garage owners manage operations seamlessly.`,
        challenge: "Many garages in Malta struggle with outdated booking systems, making it difficult for customers to schedule services efficiently.",
        solution: "We developed a sleek, responsive website with real-time booking, service descriptions, and customer management tools, ensuring a seamless experience for both clients and business owners.",
        features: [
            "Online appointment booking",
            "Automated reminders",
            "Service price estimation",
            "User-friendly dashboard",
            "SEO-optimized pages",
            "Mobile-responsive design"
        ],
        techStack: {
            frontend: ["React", "Tailwind CSS", "Framer Motion"],
            backend: ["Node.js", "Express", "MongoDB"],
            infrastructure: ["Vercel", "Cloudflare", "Docker"]
        },
        metrics: {
            activeUsers: "5K+",
            bookingsProcessed: "10K+",
            customerSatisfaction: "4.9/5",
            averageLoadTime: "1.2s"
        },
        links: {
            live: "https://garage-mt.vercel.app/",
            documentation: "https://garage-mt.vercel.app/docs"
        }
    },
    {
        id: "bf-netzbau",
        title: "BF-Netzbau",
        image: "/assets/projects/BFNPhone.png",
        image2: "/assets/projects/BFNLaptop.png",
        year: "2023",
        tags: ["Telecom", "Infrastructure", "Web Dev"],
        description: "High-speed internet infrastructure solutions for residential and commercial properties.",
        bgColor: "bg-gradient-to-br from-yellow-500 to-black",
        fullDescription: `BF-Netzbau provides cutting-edge internet solutions, ensuring high-speed connectivity for homes and businesses. Their tailored solutions improve efficiency and reliability for modern digital needs.`,
        challenge: "Slow and unreliable internet infrastructure was a major concern for users and businesses in the region.",
        solution: "We created a robust business website that highlights BF-Netzbau’s services, making it easy for customers to understand packages, request installations, and contact support.",
        features: [
            "Custom plan selection",
            "Installation booking system",
            "Service area coverage map",
            "Customer testimonials",
            "Live chat support",
            "SEO-optimized content"
        ],
        techStack: {
            frontend: ["Next.js", "Tailwind CSS", "GSAP"],
            backend: ["Node.js", "PostgreSQL"],
            infrastructure: ["AWS", "Docker", "Cloudflare"]
        },
        metrics: {
            installationsCompleted: "1K+",
            websiteTraffic: "50K+ monthly visitors",
            customerSatisfaction: "4.8/5",
            averageLoadTime: "1.0s"
        },
        links: {
            live: "https://bf-netzbau.vercel.app/",
            documentation: "https://bf-netzbau.vercel.app/docs"
        }
    },
    {
        id: "bf-wartungsservices",
        title: "BF-Wartungsservices",
        image: "/assets/projects/BFWPhone.png",
        image2: "/assets/projects/BFWLaptop.png",
        year: "2023",
        tags: ["Maintenance", "Home Services", "Business"],
        description: "Reliable maintenance services for residential and commercial properties.",
        bgColor: "bg-gradient-to-br from-green-500 to-black",
        fullDescription: `BF-Wartungsservices provides top-quality property maintenance, ensuring that businesses and homeowners receive expert repairs, installations, and servicing at any time of the day.`,
        challenge: "Customers needed a seamless way to book maintenance services without long waiting times and inconsistent availability.",
        solution: "We developed a user-friendly website with a service catalog, easy scheduling, and a maintenance subscription model for regular upkeep.",
        features: [
            "24/7 emergency support",
            "Online service booking",
            "Custom maintenance packages",
            "Live customer chat",
            "Detailed service descriptions",
            "Mobile-friendly interface"
        ],
        techStack: {
            frontend: ["React", "Tailwind CSS", "Framer Motion"],
            backend: ["Django", "PostgreSQL"],
            infrastructure: ["GCP", "Docker", "Firebase"]
        },
        metrics: {
            serviceRequestsHandled: "2K+",
            "recurring customers": "75%",
            customerSatisfaction: "4.7/5",
            "response time": "<30 minutes"
        },
        links: {
            live: "https://bf-wartungsservices.vercel.app/",
            documentation: "https://bf-wartungsservices.vercel.app/docs"
        }
    },
    {
        id: "zgjidhje-ai",
        title: "Zgjidhje AI",
        image: "/assets/projects/ZAPhone.png",
        image2: "/assets/projects/ZALaptop.png",
        year: "2024",
        tags: ["AI", "Education", "Web Dev"],
        description: "AI-powered platform for students, offering tutoring, study tools, and interactive learning.",
        bgColor: "bg-gradient-to-br from-purple-600 to-black",
        lineColor: "purple-600",
        fullDescription: `Zgjidhje AI is an advanced learning assistant built by students for students. It provides AI-driven tutoring, personalized study plans, and real-time academic assistance, revolutionizing the way students learn.`,
        challenge: "Students often struggle with understanding complex subjects due to lack of accessible and affordable tutoring.",
        solution: "We developed an AI-powered platform that offers personalized learning paths, real-time tutoring, and a knowledge-sharing community for students.",
        features: [
            "AI-driven tutoring",
            "Personalized study plans",
            "Interactive quizzes",
            "Collaborative learning tools",
            "Live chat with mentors",
            "Mobile-friendly design"
        ],
        techStack: {
            frontend: ["Next.js", "Chakra UI", "Framer Motion"],
            backend: ["FastAPI", "MongoDB", "OpenAI API"],
            infrastructure: ["Azure", "Redis", "Cloudflare"]
        },
        metrics: {
            activeUsers: "10K+",
            "tutoring sessions completed": "50K+",
            "knowledge base size": "100K+ resources",
            "student satisfaction": "4.9/5"
        },
        links: {
            live: "https://zgjidhje-ai-web.vercel.app/",
            documentation: "https://zgjidhje-ai-web.vercel.app/docs"
        }
    }
];
