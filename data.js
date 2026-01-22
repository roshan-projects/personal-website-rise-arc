// RISE ARC - Data Configuration
// Premium Digital Marketing & Web Development Agency

const siteData = {
  brand: {
    name: "RISE ARC",
    tagline: "Elevating Brands to Their Peak",
    phone: "7981634286",
    email: "hello@risearc.com",
    location: "Hyderabad, India"
  },

  founder: {
    title: "Meet the Founder",
    credentials: [
      "B.Tech Graduate in Computer Science & Engineering",
      "Specialization in Frontend Development & UI/UX Design",
      "Expert in Digital Branding & Marketing Strategy",
      "Passionate about helping businesses scale through technology",
      "Hands-on experience with Instagram management & client solutions"
    ]
  },

  services: [
    {
      id: 1,
      icon: "📱",
      title: "Instagram Page Handling",
      description: "Strategic content curation, engagement optimization, and growth management for your brand's Instagram presence."
    },
    {
      id: 2,
      icon: "📊",
      title: "Social Media Content Strategy",
      description: "Data-driven content planning and execution that resonates with your target audience and drives measurable results."
    },
    {
      id: 3,
      icon: "💻",
      title: "Frontend Development",
      description: "Pixel-perfect, responsive interfaces built with HTML, CSS, and JavaScript that deliver exceptional user experiences."
    },
    {
      id: 4,
      icon: "🌐",
      title: "Website Development",
      description: "Custom business websites, portfolios, and landing pages designed to convert visitors into loyal customers."
    },
    {
      id: 5,
      icon: "✨",
      title: "Website Redesign & Optimization",
      description: "Transform outdated websites into modern, high-performing digital assets that elevate your brand presence."
    },
    {
      id: 6,
      icon: "🔍",
      title: "Basic SEO Setup",
      description: "Foundation-level search engine optimization to improve your visibility and organic reach online."
    }
  ],

  clients: [
    {
    name: 'V1 Facility Services',
    website: 'https://v1fs.in/',
    instagram: '@v1_facility_services',
    icon: '🏢'
  },
  {
    name: 'Asian Security & Facility Services',
    website: 'https://v1fs.in/',
    instagram: '@asian_facility_services',
    icon: '🔒'
  },
  {
    name: 'Grasshopper Preschool Hyderabad',
    website: 'https://grasshopperschool.com/',
    instagram: null,
    icon: '🦗'
  },
  {
    name: 'V1 Hospitality',
    website: 'https://www.v1hospitality.com/',
    instagram: '@v1hospitality',
    icon: '🏨'
  },
  {
    name: 'Creek Valley',
    website: null,
    instagram: '@creekvalleybyv1',
    icon: '🏞️'
  },
  {
    name: 'Dream Land Farmstay',
    website: null,
    instagram: '@dreamlandfarmstaybyv1',
    icon: '🌾'
  },
  {
    name: 'Santorini Farmhouse',
    website: null,
    instagram: '@santorini_farmhousebyv1',
    icon: '🏡'
  },
  {
    name: 'Le Ceilo',
    website: null,
    instagram: '@_leceilobyv1',
    icon: '🌟'
  },
  {
    name: 'And Many More',
    website: null,
    instagram: null,
    icon: '✨'
  }
  ],

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" }
  ]
};


const services = [
  "Website Development",
  "Digital Marketing",
  "SEO Optimization",
  "Brand Strategy",
  "Social Media Management"
];

const serviceSelect = document.getElementById("service");

services.forEach(service => {
  const option = document.createElement("option");
  option.value = service;
  option.textContent = service;
  serviceSelect.appendChild(option);
});

