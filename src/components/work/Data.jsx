import  Work1  from "../../assets/work1.png";
import  Work3  from "../../assets/work3.png";
import Work7 from '../../assets/MonaLisaPage.png';
import Work8 from '../../assets/bingo.png';
import Work9 from '../../assets/number prediction.png';
import Work10 from '../../assets/academika.png';
import e710labs from '../../assets/e710labs.PNG';
import debtsentinel from '../../assets/debtsentinel.PNG';
import excelsior from '../../assets/excelsior.PNG';

export const projectsData = [
    {
        id: 4,
        image: excelsior,
        title: "Excelsior Unlimited",
        description: "Plataforma empresarial de gestión de recursos con dashboard analytics en tiempo real. Sistema de reportes avanzados con exportación a múltiples formatos.",
        technologies: ["React", "Vite", "Tailwind CSS"],
        category: "web",
        liveLink: "https://excelsiorunlimited.digital",
        githubLink: "https://github.com/JoseCarmona17/Data-Academy",
    },
    {
        id: 5,
        image: e710labs,
        title: "E710LABS",
        description: "Desarrollé una plataforma web enfocada en la compra y refinanciación de créditos, creando una experiencia moderna e intuitiva para la gestión de soluciones financieras y captación de clientes.",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
        category: "web",
        liveLink: "https://www.e710labs.com",
        githubLink: "https://github.com/JoseCarmona17/E710LABS",
    },
    {
        id: 6,
        image: debtsentinel,
        title: "Debt Sentinel",
        description: "Desarrollé una plataforma web enfocada en gestión, consolidación y resolución de deudas, creando una experiencia intuitiva para que los usuarios pudieran acceder a soluciones financieras y optimizar el manejo de sus créditos.",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase", "PostgreSQL"],
        category: "web",
        liveLink: "https://debtsentinels.com/",
        githubLink: "https://github.com/JoseCarmona17/Debt-Sentinel",
    },
    {
        id: 7,
        image: Work7,
        title: "MonaLisa EAC",
        description: "Desarrollé una landing page moderna y responsive para la presentación de servicios y marca digital, enfocada en ofrecer una experiencia visual atractiva, navegación intuitiva y una identidad visual profesional.",
        technologies: ["React", "emailjs", "Tailwind CSS", "Vite", "Swiper"],
        category: "web",
        liveLink: "https://monalisac.netlify.app/",
        githubLink: "https://github.com/JoseCarmona17/MonaLisa",
    },
    {
        id: 8,
        image: Work8,
        title: "Bingo Website",
        description: "Aplicación de bingo en línea multijugador con soporte para salas privadas. Sistema de puntuación en tiempo real con WebSocket.",
        technologies: ["React", "Node.js", "WebSocket", "Vite", "mongoDB"],
        category: "web",
        githubLink: "https://github.com/JoseCarmona17/Bingo-Buda",
    },
    {
        id: 10,
        image: Work10,
        title: "Academika",
        description: "Plataforma de aprendizaje colaborativo con gestión de estudiantes y calificaciones. Integración con calendario académico y notificaciones.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vite", "storybook", "Prisma", "NestJS", "MySQL", "vitest"],
        category: "web",
        liveLink: "https://academika.vercel.app/",
        githubLink: "https://github.com/pilytrianar/academika",
    },
    {
        id: 9,
        image: Work9,
        title: "Number Prediction",
        description: "Modelo de machine learning para predicción de series numéricas. Análisis predictivo con visualización interactiva de resultados.",
        technologies: ["Python", "Pandas", "TensorFlow", "Matplotlib"],
        category: "data",
        liveLink: "https://numeros-prediccion.netlify.app/",
    },
    {
        id: 1,
        image: Work1,
        title: "E-commerce Nike",
        description: "Tienda en línea completa con catálogo de productos, carrito de compra y sistema de pagos integrado. Filtros avanzados y búsqueda optimizada.",
        technologies: ["React", "Redux", "Stripe API", "Tailwind CSS"],
        category: "web",
        liveLink: "https://ecomerce-nike.netlify.app/",
        githubLink: "https://github.com/JoseCarmona17/Nike-Ecommerce",
    },
    {
        id: 3,
        image: Work3,
        title: "Cripto App",
        description: "Aplicación de seguimiento de criptomonedas en tiempo real. Gráficos interactivos, alertas de precios y análisis técnico integrado.",
        technologies: ["React", "Chart.js",],
        category: "web",
        liveLink: "https://criptom-babka-96742f.netlify.app/",
        githubLink: "https://github.com/JoseCarmona17/Cripto-Movile",
    },
];


export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'data',
    },
];