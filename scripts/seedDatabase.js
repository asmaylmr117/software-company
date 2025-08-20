const mongoose = require('mongoose');
require('dotenv').config();

// Import models
const Blog = require('../models/Blog');
const Project = require('../models/project');
const Service = require('../models/service');
const Team = require('../models/team');

// Sample data with updated image paths
const blogsData = [
    {
        id: '1',
        title: 'Leveraging Analytics for Business Growth Modernizing...',
        slug:'Leveraging-Analytics-for-Business-Growth-Modernizing',
        screens: '/images/blog/blog_post_image_1.webp',
        bSingle: '/images/blog/blog_post_image_1.webp',
        description: 'Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly...',
        author: 'farugia',
        authorTitle:'Senior Consultant',
        create_at: '11/12/2024',
        comment:'35',
        thumb:'Branding',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'How Emerging Technologies are Shaping the Future...',
        slug:'How-Emerging-Technologies-are-Shaping-the-Future',
        screens: '/images/blog/blog_post_image_2.webp',
        bSingle: '/images/blog/blog_post_image_2.webp',
        description: 'Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly...',
        author: 'Andrew',
        authorTitle:'Creative Director',
        create_at: '11/02/2024',
        comment:'80',
        thumb:'Mobile App',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'Creating Engaging Digital for Your Audience Software...',
        slug: 'Creating-Engaging-Digital-for-Your-Audience-Software',
        screens: '/images/blog/blog_post_image_3.webp',
        bSingle: '/images/blog/blog_post_image_3.webp',
        description: 'Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly...',
        author: 'Kurtz',
        authorTitle:'Art Director',
        create_at: '21/08/2024',
        comment:'95',
        thumb:'Technology',
        blClass:'format-video',
    },
    {
        id: '4',
        title: 'How Our Software Solutions Drive Insights.',
        slug: 'How-Our-Software-Solutions-Drive-Insights',
        screens: '/images/blog/blog_post_image_10.webp',
        bSingle: '/images/blog/blog_post_image_1.webp',
        description: 'Student visa consulting agencies are equipped with professionals who specialize in the intricacies of visa applications.',
        author: 'Alex',
        authorTitle:'Art Director',
        create_at: '18/08/2024',
        comment:'95',
        thumb:'Consulting',
    },
    {
        id: '5',
        title: 'Exploring Emerging Trends in Software Development.',
        slug: 'Exploring-Emerging-Trends-in-Software-Development',
        screens: '/images/blog/blog_post_image_11.webp',
        bSingle: '/images/blog/blog_post_image_1.webp',
        description: 'The realm of visa applications is a and ever-changing landscape...',
        author: 'Aliza',
        authorTitle:'Art Director',
        create_at: '25/08/2024',
        comment:'95',
        thumb:'Consulting',
    },
    {
        id: '6',
        title: 'How Software Integration Can Improve Workflow.',
        slug: 'How-Software-Integration-Can-Improve-Workflow',
        screens: '/images/blog/blog_post_image_9.webp',
        bSingle: '/images/blog/blog_post_image_1.webp',
        description: 'Embarking on a journey to study abroad is an aspiration many students..',
        author: 'Tika',
        authorTitle:'Art Director',
        create_at: '17/08/2024',
        comment:'95',
        thumb:'Consulting',
    },
    {
        id: '7',
        title: '5 ways to relieve stress during the holidays',
        slug: '5-ways-to-relieve-stress-during-the-holidays',
        screens: '/images/blog/blog_post_image_1.webp',
        bSingle: '/images/blog/blog_post_image_1.webp',
        description: 'Embarking on a journey to study abroad is an aspiration many students..',
        author: 'Riley Steinmetz',
        authorTitle:'Art Director',
        create_at: 'April 20, 2024',
        comment:'95',
        thumb:'Live Well',
    },
    {
        id: '8',
        title: 'Baby flat head pillow - why its important',
        slug: 'Baby-flat-head-pillow-why-its-important',
        screens: '/images/blog/blog_post_image_2.webp',
        bSingle: '/images/blog/blog_post_image_1.webp',
        description: 'Embarking on a journey to study abroad is an aspiration many students..',
        author: 'Ken William',
        authorTitle:'Art Director',
        create_at: 'April 24, 2024',
        comment:'95',
        thumb:'Get Well',
    },
];

const projectsData = [
    {
        Id: '1',
        pImg: '/images/portfolio/portfolio_item_image_1.webp',
        title: 'Mobile App Design',
        slug: 'Mobile-App-Design',
        sub: 'App Design',
        description: 'Our all-encompassing IELTS Coaching curriculum encompasses every aspect...',
    },
    {
        Id: '2',
        pImg: '/images/portfolio/portfolio_item_image_2.webp',
        title: 'TOEFL Coaching',
        slug: 'TOEFL-Coaching',
        sub: '',
        description: 'Our experienced coaches are not just educators; they are partners in your journey..',
    },
    {
        Id: '3',
        pImg: '/images/portfolio/portfolio_item_image_3.webp',
        title: 'Dashboard Design',
        slug: 'Dashboard-Design',
        sub: 'Web Design',
        description: 'The contents of the citizenship test typically cover a range of subjects ...',
    },
    {
        Id: '7',
        pImg: '/images/case/case_image_1.webp',
        title: 'Astarte Medical',
        slug: 'Astarte-Medical',
        sub: 'Computer Software',
        Industry: 'Computer software',
        Country: 'Germany, Issum',
        Technologies1: '/images/case/icon_angular.svg',
        Technologies2: '/images/case/icon_elephent.svg',
        description: 'Creating software for Astarte Medical involves a meticulous process aimed at addressing their specific needs and objectives.',
        category: 'technology'
    },
    {
        Id: '8',
        pImg: '/images/case/case_image_1.webp',
        title: 'CAE Blue Phantom',
        slug: 'CAE-Blue-Phantom',
        sub: 'Healthcare',
        Industry: 'Wellness & Fitness',
        Country: 'Canada, Alberta',
        Technologies1: '/images/case/icon_angular.svg',
        Technologies2: '/images/case/icon_netcore.svg',
        description: 'CAE Blue Phantom is a cutting-edge simulation technology designed to revolutionize medical training and education.',
        category: 'healthcare'
    },
    {
        Id: '9',
        pImg: '/images/case/case_image_1.webp',
        title: 'Liberkeys',
        slug: 'Liberkeys',
        sub: 'Real Estate',
        Industry: 'Real estate',
        Country: 'France, Paris',
        Technologies1: '/images/case/vuejs.svg',
        Technologies2: '/images/case/icon_python.svg',
        description: 'Liberkeys is a modern real estate platform that is revolutionizing the way people buy, sell, and rent properties.',
        category: 'real-estate'
    }
];

const servicesData = [
    {
        Id: '1',
        sImg: '/images/portfolio/portfolio_item_image_5.webp',
        title: 'IT Management Services',
        slug: 'IT-Management-Services',
        thumb1: 'Strategy',
        thumb2: 'Consultation',
        col: 'col-lg-6',
        description: 'Visit new places to discover with a Tourist Visa. We deliver your documents ...',
    },
    {
        Id: '2',
        sImg: '/images/services/service_image_2.webp',
        title: 'Data Tracking and Security',
        slug: 'Data-Tracking-and-Security',
        thumb1: 'Management',
        thumb2: 'Transfer',
        col: 'col-lg-6',
        description: 'Developing your trade, setting up new sales channels Your visa is ready...',
    },
    {
        Id: '6',
        sImg: '/images/icons/icon_code.svg',
        title: 'Custom Software Development',
        slug: 'Custom-Software-Development',
        features: ['Software architecture design', 'System integration services', 'Data migration services', 'Legacy app modernization']
    },
    {
        Id: '7',
        sImg: '/images/icons/icon_programming_tree.svg',
        title: 'Audit & IT Consulting Services',
        slug: 'Audit-IT-Consulting-Services',
        features: ['TechGuard Audit', 'CyberSafe Audit & IT Consulting', 'AssuranceEdge & IT Consulting', 'IT Sentry Audit & IT Consulting']
    },
    {
        Id: '8',
        sImg: '/images/icons/icon_monitor_2.svg',
        title: 'Web Application Design and Development',
        slug: 'Web-Application-Design-and-Development',
        features: ['Web app development services', 'Web portal development services', 'Website development services', 'Offshore web development']
    }
];

const teamsData = [
    {
        Id: '1',
        tImg: '/images/team/team_member_image_1.webp',
        name: 'Atticus Sterling',
        slug: 'Atticus-Sterling',
        title: 'Systems Engineer',
    },
    {
        Id: '2',
        tImg: '/images/team/team_member_image_2.webp',
        name: 'Orion Jasper',
        slug: 'Orion-Jasper',
        title: 'IT Consultant',
    },
    {
        Id: '3',
        tImg: '/images/team/team_member_image_3.webp',
        name: 'August Everest',
        slug: 'August-Everest',
        title: 'Systems Engineer',
    },
    {
        Id: '4',
        tImg: '/images/team/team_member_image_4.webp',
        name: 'Maverick Phoenix',
        slug: 'Maverick-Phoenix',
        title: 'Data Analyst',
    },
    {
        Id: '5',
        tImg: '/images/team/team_member_image_5.webp',
        name: 'Daxton Atlas',
        slug: 'Daxton-Atlas',
        title: 'Project Manager',
    }
];

async function seedDatabase() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio-db');
        console.log('Connected to MongoDB');

        // Clear existing data
        await Blog.deleteMany({});
        await Project.deleteMany({});
        await Service.deleteMany({});
        await Team.deleteMany({});
        console.log('Cleared existing data');

        // Insert new data
        await Blog.insertMany(blogsData);
        console.log('Blogs inserted');

        await Project.insertMany(projectsData);
        console.log('Projects inserted');

        await Service.insertMany(servicesData);
        console.log('Services inserted');

        await Team.insertMany(teamsData);
        console.log('Teams inserted');

        console.log('Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seedDatabase();