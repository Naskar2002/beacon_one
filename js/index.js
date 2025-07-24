// Aos js cdn
AOS.init();
//   Testimonial
const testimonialData = [
    {
        img: "../Assets/Ellipse8.png",
        text: "I was planning on doing a DIY project at home since i had more time now adays and didn't want people visiting my home for health concerns. C-Line experts ordered the materials, walked my step by step on what to do. whenever i got stuck, i just did the Quick call and an expert helped me solve that issue in minutes! I saved $2400 on my project and learned a new skill!",
        author: "Anna Ray",
        role: "Designer at Paperline",
    },
    {
        img: "../Assets/Ellipse 7.png",
        text: "I was planning on doing a DIY project at home since i had more time now adays and didn't want people visiting my home for health concerns. C-Line experts ordered the materials, walked my step by step on what to do. whenever i got stuck, i just did the Quick call and an expert helped me solve that issue in minutes! I saved $2400 on my project and learned a new skill!",
        author: "John Miller",
        role: "Freelancer",
    },
    {
        img: "../assets/test-3.png",
        text: "I was planning on doing a DIY project at home since i had more time now adays and didn't want people visiting my home for health concerns. C-Line experts ordered the materials, walked my step by step on what to do. whenever i got stuck, i just did the Quick call and an expert helped me solve that issue in minutes! I saved $2400 on my project and learned a new skill!",
        author: "Rita Brown",
        role: "VP Marketing at Bowl",
    },
    {
        img: "../assets/Ellipse9.png",
        text: "I was planning on doing a DIY project at home since i had more time now adays and didn't want people visiting my home for health concerns. C-Line experts ordered the materials, walked my step by step on what to do. whenever i got stuck, i just did the Quick call and an expert helped me solve that issue in minutes! I saved $2400 on my project and learned a new skill!",
        author: "Emily Chen",
        role: "Content Creator",
    },
    {
        img: "../Assets/Ellipse10.png",
        text: "I was planning on doing a DIY project at home since i had more time now adays and didn't want people visiting my home for health concerns. C-Line experts ordered the materials, walked my step by step on what to do. whenever i got stuck, i just did the Quick call and an expert helped me solve that issue in minutes! I saved $2400 on my project and learned a new skill!",
        author: "Dave Scott",
        role: "Startup Founder",
    },
    {
        img: "../Assets/eclipse6.png",
        text: "I was planning on doing a DIY project at home since i had more time now adays and didn't want people visiting my home for health concerns. C-Line experts ordered the materials, walked my step by step on what to do. whenever i got stuck, i just did the Quick call and an expert helped me solve that issue in minutes! I saved $2400 on my project and learned a new skill!",
        author: "Zack James",
        role: "Photographer",
    },
];

let current = 2;

function renderTestimonials() {
    const container = document.getElementById("testimonialCarousel");
    container.innerHTML = "";

    for (let i = -2; i <= 2; i++) {
        const index =
            (current + i + testimonialData.length) % testimonialData.length;
        const div = document.createElement("div");
        div.className = "testimonial-slide";
        if (i === 0) div.classList.add("active");
        div.innerHTML = `<img src="${testimonialData[index].img}" alt="Testimonial Image" />`;
        div.onclick = () => {
            current = index;
            renderTestimonials();
            updateTestimonialText(current);
        };
        container.appendChild(div);
    }
}

function updateTestimonialText(index) {
    document.getElementById("testimonialText").textContent =
        testimonialData[index].text;
    document.getElementById("testimonialAuthor").textContent =
        testimonialData[index].author;
    document.getElementById("testimonialRole").textContent =
        testimonialData[index].role;
}

function goToPreviousTestimonial() {
    current =
        (current - 1 + testimonialData.length) % testimonialData.length;
    renderTestimonials();
    updateTestimonialText(current);
}

function goToNextTestimonial() {
    current = (current + 1) % testimonialData.length;
    renderTestimonials();
    updateTestimonialText(current);
}

// Init
renderTestimonials();
updateTestimonialText(current);