// 1. Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// 2. Dynamic Blog Generation
const blogData = [
    { title: "The Rise of Fortified Rice", category: "Nutrition", desc: "How Bangladesh is fighting hidden hunger." },
    { title: "BSTI New Regulations 2026", category: "Safety", desc: "Updated safety benchmarks for exporters." },
    { title: "Drying Technology in Haor Areas", category: "Research", desc: "Mechanical drying for sustainable harvest." }
];

const blogContainer = document.getElementById('blog-posts');

blogData.forEach(post => {
    const postHTML = `
        <div class="card glass fade-in">
            <span class="badge">${post.category}</span>
            <h3 style="margin: 15px 0">${post.title}</h3>
            <p>${post.desc}</p>
            <a href="#" style="color: var(--primary); font-weight: 700; display: block; margin-top: 15px">Read More →</a>
        </div>
    `;
    blogContainer.innerHTML += postHTML;
});

// 3. Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

