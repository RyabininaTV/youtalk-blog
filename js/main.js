const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.querySelector('.site-header__nav');

if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('site-header__nav--open');
        const expanded = navMenu.classList.contains('site-header__nav--open');
        burgerBtn.setAttribute('aria-expanded', expanded);
    });
}

const loadMoreBtn = document.getElementById('loadMoreBtn');
const articlesGrid = document.getElementById('articlesGrid');

if (loadMoreBtn && articlesGrid) {
    const additionalArticles = [
        { 
            tag: "Самооценка", 
            title: "Как полюбить себя: практические советы", 
            author: "Автор: Елена Соколова", 
            description: "Любовь к себе начинается с принятия своих сильных и слабых сторон...", 
            date: "18.08.2021", 
            image: "figmaAssets/image-1.png"
        },
        { 
            tag: "Тревога", 
            title: "Как справиться с паническими атаками", 
            author: "Автор: Дмитрий Волков", 
            description: "Панические атаки могут быть пугающими, но с ними можно справиться...", 
            date: "01.09.2021", 
            image: "figmaAssets/image-2.png"
        },
        { 
            tag: "Self", 
            title: "Медитация для начинающих: первые шаги", 
            author: "Автор: Анна Иванова", 
            description: "Медитация помогает успокоить ум и снизить уровень стресса...", 
            date: "25.08.2021", 
            image: "figmaAssets/image-3.png"
        }
    ];
    
    let loaded = false;
    loadMoreBtn.addEventListener('click', () => {
        if (!loaded) {
            additionalArticles.forEach(article => {
                const card = document.createElement('article');
                card.className = 'card';
                card.innerHTML = `
                    <a href="#" class="card__link">
                        <div class="card__image-wrapper">
                            <img class="card__image" src="${article.image}" alt="${article.title}" loading="lazy">
                        </div>
                        <div class="card__content">
                            <span class="card__tag">${article.tag}</span>
                            <h2 class="card__title">${article.title}</h2>
                            <div class="card__author">${article.author}</div>
                            <p class="card__description">${article.description}</p>
                            <time class="card__date">${article.date}</time>
                        </div>
                    </a>
                `;
                articlesGrid.appendChild(card);
            });
            loaded = true;
            loadMoreBtn.style.display = 'none';
        }
    });
}

document.querySelectorAll('.site-footer__newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('.site-footer__newsletter-input');
        if (input && input.value.trim()) {
            alert(`Спасибо за подписку, ${input.value}!`);
            input.value = '';
        }
    });
});

document.querySelectorAll('.tags__btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tags__btn').forEach(b => b.classList.remove('tags__btn--active'));
        btn.classList.add('tags__btn--active');
    });
});