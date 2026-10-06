import { artist, works, articles, articleBody } from './content.js';

const $ = (selector, root = document) => root.querySelector(selector);
const icon = (name) => ({
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8 14.4 9.6 21.2 12l-6.8 2.4-2.4 6.8-2.4-6.8L2.8 12l6.8-2.4L12 2.8Z"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5c-9.6.1-15.2 3-15.2 9.4a5.9 5.9 0 0 0 6 6c6.3 0 9.1-5.8 9.2-15.4ZM4 21c2.8-5.2 6.4-8.8 12-12"/></svg>',
  lines: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16M4 12h16M4 19h16M8 3 6 7m12 3-2 4M9 17l-2 4"/></svg>',
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.2-8.8 11-8.8 11s-8.8-5.8-8.8-11a4.7 4.7 0 0 1 8.8-2.2 4.7 4.7 0 0 1 8.8 2.2Z"/></svg>',
})[name] || '';

const navItems = [['Home', 'index.html'], ['Services', 'services.html'], ['About Me', 'about.html'], ['Blog', 'blog.html'], ['Contact', 'contact.html']];
const path = location.pathname.toLowerCase();
const page = path.endsWith('services.html') ? 'services' : path.endsWith('about.html') ? 'about' : path.endsWith('blog.html') ? 'blog' : path.endsWith('article.html') ? 'article' : path.endsWith('contact.html') ? 'contact' : 'home';

function header() {
  return `<header class="site-header"><div class="header-inner wrap">
    <a class="brand" href="index.html" aria-label="${artist.name}, home"><img class="brand-logo" src="/assets/inkkraft-logo.png" alt=""><span class="brand-name">${artist.name}<small>PERSONAL TATTOO ARTIST</small></span></a>
    <nav class="desktop-nav" aria-label="Main navigation">${navItems.map(([label, href]) => `<a href="${href}" ${href.startsWith(page === 'home' ? 'index' : page) ? 'aria-current="page"' : ''}>${label}</a>`).join('')}</nav>
    <a class="button button-small header-cta" href="services.html#booking">Book a Free Consultation ${icon('arrow')}</a>
    <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button>
  </div><div id="mobile-menu" class="mobile-menu" role="dialog" aria-modal="true" aria-label="Site navigation" hidden><nav aria-label="Mobile navigation">${navItems.map(([label, href]) => `<a href="${href}" ${href.startsWith(page === 'home' ? 'index' : page) ? 'aria-current="page"' : ''}>${label}<span>↗</span></a>`).join('')}<a class="button mobile-booking" href="services.html#booking">Book a Free Consultation ${icon('arrow')}</a><p class="menu-note">A thoughtful first step, at no cost.</p></nav></div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="wrap"><div class="footer-top"><div class="footer-brand"><a class="brand" href="index.html" aria-label="${artist.name}, home"><img class="brand-logo" src="/assets/inkkraft-logo.png" alt=""><span class="brand-name">${artist.name}<small>PERSONAL TATTOO ARTIST</small></span></a><p>Personalized tattoos created through thoughtful consultation and quality craftsmanship.</p><a href="services.html#booking" class="text-link">Start with a conversation ${icon('arrow')}</a></div><div class="footer-links"><h2>Explore</h2>${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}</div><div class="footer-links"><h2>Say hello</h2><a href="mailto:${artist.email}">${artist.email}</a><a href="tel:${artist.phone}">${artist.phone}</a><span>${artist.studio}</span><div class="socials"><a href="${artist.social.instagram}" aria-label="Instagram">IG</a><a href="${artist.social.facebook}" aria-label="Facebook">FB</a><a href="${artist.social.tiktok}" aria-label="TikTok">TK</a></div></div><div class="footer-cta"><p>Good tattoos start with a good conversation.</p><a class="button button-light" href="services.html#booking">Book a Free Consultation ${icon('arrow')}</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} ${artist.name}. All Rights Reserved.</span><span>Made with intention <i>✳</i></span></div></div></footer>`;
}

const sectionHeading = (eyebrow, title, text = '') => `<div class="section-heading reveal"><p class="eyebrow">${eyebrow}</p><h2>${title}</h2>${text ? `<p class="section-intro">${text}</p>` : ''}</div>`;
const button = (label, href, style = '') => `<a class="button ${style}" href="${href}">${label} ${icon('arrow')}</a>`;
const workCard = (work, i) => `<a class="work-card reveal" data-category="${work.category}" href="services.html#booking" aria-label="${work.category} tattoo${work.placeholder === false ? '' : ' placeholder'}: ${work.title}. Start a consultation."><div class="work-image ${i % 3 === 1 ? 'work-tall' : ''}"><img src="${work.image}" alt="${work.alt || `Illustrative placeholder representing ${work.category.toLowerCase()} tattoo artwork`}" loading="lazy" width="900" height="${i % 3 === 1 ? 1100 : 800}" onerror="this.closest('.work-image').classList.add('image-fallback');this.remove()">${work.placeholder === false ? '' : '<span class="image-label">ILLUSTRATIVE IMAGE · REPLACE WITH YOUR WORK</span>'}<span class="work-hover"><span>${work.category}<strong>${work.title}</strong></span><span class="round-arrow">↗</span></span></div></a>`;
const blogCard = (article, i = 0) => `<article class="blog-card reveal"><a href="article.html?slug=${article.slug}" class="blog-image"><img src="${article.image}" alt="Illustrative image for ${article.title}" loading="lazy" width="900" height="620" onerror="this.closest('.blog-image').classList.add('image-fallback');this.remove()"><span class="image-label">EDITORIAL PLACEHOLDER</span><span class="blog-image-arrow">↗</span></a><div class="blog-meta"><span>${article.category}</span><span>${article.date}</span></div><h3><a href="article.html?slug=${article.slug}">${article.title}</a></h3><p>${article.excerpt}</p><a class="text-link" href="article.html?slug=${article.slug}">Read article ${icon('arrow')}</a></article>`;

function home() {
  const features = [['sparkle', 'Personalized Consultation', 'Your tattoo starts with your idea. We discuss your vision, style, placement, and details before getting started.'], ['leaf', 'Thoughtful Design', 'Every concept is discussed carefully so the final tattoo feels personal and intentional.'], ['lines', 'Quality Service', 'A professional approach focused on providing a considered tattoo experience.'], ['heart', 'Your Satisfaction Matters', 'The goal is for you to feel confident about your tattoo before you get inked.']];
  return `<section class="hero"><div class="hero-backdrop"><img src="/assets/homepage-red-realism-background.jpg" alt="Red-accented realism tattoo by Sawon Dyola" fetchpriority="high" width="1440" height="2048" onerror="this.remove()"></div><div class="hero-shade"></div><div class="hero-content wrap"><p class="eyebrow eyebrow-light"><span></span> A PERSONAL APPROACH TO TATTOOING</p><h1>Your story.<br><em>Your ink.</em></h1><p class="hero-copy">Every tattoo has a story. I help turn your ideas, memories, and inspirations into personalized ink through thoughtful consultation and quality tattoo work.</p><div class="hero-actions">${button('Book a Free Consultation', 'services.html#booking', 'button-light')}${button('Explore My Work', '#work', 'button-ghost')}</div></div><a class="scroll-cue" href="#intro"><span>SCROLL TO EXPLORE</span><i></i></a><div class="hero-side-note">THOUGHTFUL BY NATURE · PERSONAL BY DESIGN</div></section>
  <section id="intro" class="intro-section section-space"><div class="wrap"><div class="intro-top"><p class="eyebrow reveal">A LITTLE MORE MEANING</p><div class="intro-statement reveal"><h2>More than<br>just a <em>tattoo.</em></h2><p>The best place to begin is with a conversation. Tell me what your idea means to you, and we can explore the style, placement, and details together—one thoughtful decision at a time.</p>${button('How the process works', 'services.html#process', 'button-outline')}</div></div><div class="feature-grid">${features.map(([ico, title, text], i) => `<article class="feature-card reveal"><div class="feature-icon">${icon(ico)}</div><span class="feature-index">0${i + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></div></section>
  <section id="work" class="work-section section-space"><div class="wrap">${sectionHeading('SAWON DYOLA · TATTOO PORTFOLIO', 'Tattoo gallery', 'A collection of tattoo work, including the photos you shared and placeholders for future pieces.')}
  <div class="filter-row" role="group" aria-label="Filter tattoo portfolio">${['All', 'Fine Line', 'Blackwork', 'Realism', 'Minimal', 'Custom'].map((x, i) => `<button type="button" class="filter-button ${i === 0 ? 'active' : ''}" data-filter="${x}" aria-pressed="${i === 0}">${x}</button>`).join('')}</div><div class="work-grid">${works.map(workCard).join('')}</div><div class="centered-link">${button('Bring your idea to me', 'services.html#booking', 'button-outline')}</div></div></section>
  <section id="process" class="process-section section-space"><div class="wrap process-wrap">${sectionHeading('A CLEAR, COMFORTABLE PROCESS', 'From idea to ink', 'No need to have it all figured out. We’ll work through the details together.')}
  <div class="steps-grid">${[['Share your idea', 'Tell me what you have in mind—a personal story, a symbol, a reference, or a completely new concept.'], ['Free consultation', 'We talk through the idea, style, placement, size, and the details that matter to you.'], ['Plan your tattoo', 'Together, we refine the concept and find a clear, considered direction.'], ['Get inked', 'When everything feels right, it’s time to bring your tattoo to life.']].map(([t, d], i) => `<article class="step-card reveal"><span class="step-no">0${i + 1}</span><span class="step-rule"></span><h3>${t}</h3><p>${d}</p></article>`).join('')}</div><div class="process-cta">${button('Book a Free Consultation', 'services.html#booking', 'button-light')}</div></div></section>
  <section class="about-preview section-space"><div class="wrap about-split"><div class="about-image reveal"><img src="${artist.portrait}" alt="Sawon Dyola, tattoo artist" loading="lazy" width="1000" height="1200" onerror="this.closest('.about-image').classList.add('image-fallback');this.remove()"><span class="about-image-caption">SAWON DYOLA<br>A PERSONAL PRACTICE<br>BUILT AROUND YOUR STORY</span></div><div class="about-copy reveal"><p class="eyebrow">A PERSON BEHIND THE PROCESS</p><h2>The artist<br>behind the <em>ink.</em></h2><p>Tattooing is more than putting ink on skin. It’s about listening, understanding what you want to carry with you, and shaping a design that feels personal.</p><p>I believe a considered process makes a better experience. Your ideas, questions, and comfort are part of every conversation from the start.</p>${button('More about me', 'about.html', 'button-outline')}</div></div></section>
  <section class="journal-preview section-space"><div class="wrap">${sectionHeading('NOTES FROM THE STUDIO', 'From the studio', 'A few starting points for your next tattoo conversation.')}
  <div class="blog-grid">${articles.slice(0, 3).map(blogCard).join('')}</div><div class="centered-link">${button('View all articles', 'blog.html', 'button-outline')}</div></div></section>
  ${ctaSection()}`;
}

function ctaSection() { return `<section class="cta-section"><div class="cta-art" aria-hidden="true">✳</div><div class="wrap cta-content reveal"><p class="eyebrow eyebrow-light">YOUR IDEA HAS A PLACE HERE</p><h2>Ready to turn your<br>idea into <em>ink?</em></h2><p>Have an idea for your next tattoo? Let’s talk about it first.</p><div class="hero-actions">${button('Book a Free Consultation', 'services.html#booking', 'button-light')}${button('Get Inked', 'services.html#booking', 'button-ghost')}</div></div></section>`; }

function consultationForm() { return `<form class="form-card" data-form="consultation" novalidate><div class="form-row"><label>Full name <b>*</b><input name="name" autocomplete="name" required placeholder="Your name"></label><label>Email address <b>*</b><input name="email" type="email" autocomplete="email" required placeholder="you@example.com"></label></div><div class="form-row"><label>Phone number<input name="phone" type="tel" autocomplete="tel" placeholder="Optional"></label><label>Preferred date<input name="date" type="date"></label></div><div class="form-row"><label>Preferred contact method<select name="contact"><option value="">Choose one</option><option>Email</option><option>Phone</option><option>Text message</option></select></label><label>Tattoo placement<input name="placement" placeholder="Where are you imagining it?"></label></div><div class="form-row"><label>Approximate size<input name="size" placeholder="A rough idea is fine"></label><label>Preferred style<select name="style"><option value="">Choose a style</option><option>Fine Line</option><option>Blackwork</option><option>Realism</option><option>Minimal</option><option>Custom / Not sure yet</option></select></label></div><label>Tell me about your idea <b>*</b><textarea name="idea" required rows="4" placeholder="What are you thinking about? What does it mean to you?"></textarea></label><label>Reference links or extra notes<textarea name="notes" rows="3" placeholder="Share any references, questions, or other details"></textarea></label><label class="check-label"><input type="checkbox" name="consent" required><span>I agree to be contacted about this consultation request. <b>*</b></span></label><p class="form-error" role="alert" aria-live="polite"></p><button class="button" type="submit">Book My Free Consultation ${icon('arrow')}</button><p class="form-fineprint">* Required. Demo form only: no information is sent or stored. Connect a form service in <code>src/main.js</code> before publishing.</p><div class="form-success" role="status" tabindex="-1" hidden><span class="success-mark">✓</span><h3>Thank you!</h3><p>Your consultation request is ready. In a live site, I’ll get back to you soon.</p><small>Preview only — your information was not sent. Please use the contact placeholders after they are replaced.</small><button type="button" class="text-link reset-form">Send another request ${icon('arrow')}</button></div></form>`; }

function services() {
  const topics = [['01','Tattoo concept','Talk through the idea, its meaning, your references and the inspiration behind it.'],['02','Style','Explore possible tattoo styles and visual directions together.'],['03','Placement','Discuss where your tattoo could work based on your preferences and concept.'],['04','Size','Consider proportions, detail and how the design might fit.'],['05','Design direction','Start shaping the concept into a clear tattoo direction.'],['06','Your questions','Make space for questions before you decide whether to move forward.']];
  const faqs = [['Is the consultation really free?','Yes. The initial consultation is intended to discuss your tattoo idea and planning. There is no charge for that first conversation.'],['What should I bring to my consultation?','Anything that helps you describe the idea: reference images, saved inspiration, notes, or a list of questions. It is completely fine to come with only a rough thought.'],['Can I bring a reference image?','Absolutely. Reference images can help communicate a mood, style, or detail you have in mind. They are a starting point for an original conversation about your tattoo.'],['Can you help me choose the placement?','Yes. We can talk through placement based on the concept, size, and what feels comfortable for you.'],['What happens after the consultation?','If the direction feels right and you are comfortable moving forward, we can discuss the next planning steps together.']];
  return `<section class="page-hero services-hero"><div class="page-hero-image"><img src="${works[0].image}&w=1800" alt="Tattoo artwork detail" fetchpriority="high"></div><div class="page-hero-overlay"></div><div class="wrap page-hero-content"><p class="eyebrow eyebrow-light">A GOOD PLACE TO BEGIN</p><h1>Free tattoo<br><em>consultation.</em></h1><p>Before you get inked, let’s talk about your idea. A relaxed first conversation to explore what you’re imagining and what feels right to you.</p>${button('Book Your Free Consultation', '#booking', 'button-light')}</div></section>
  <section class="section-space"><div class="wrap">${sectionHeading('A FIRST CONVERSATION', 'What we’ll discuss', 'A consultation gives us time to explore your idea before you decide about a tattoo session.')}
  <div class="topic-grid">${topics.map(([n,t,d])=>`<article class="topic-card reveal"><span>${n}</span><h3>${t}</h3><p>${d}</p></article>`).join('')}</div></div></section>
  <section id="process" class="process-section section-space"><div class="wrap">${sectionHeading('A FEW SIMPLE STEPS', 'From idea to ink')}</div><div class="wrap steps-grid">${[['Share your idea','Tell me about the story, symbol, reference, or concept you have in mind.'],['Free consultation','Explore style, placement, scale and questions at your pace.'],['Plan your tattoo','Find a design direction that feels considered and personal.'],['Get inked','Plan the next step when you feel ready.']].map(([t,d],i)=>`<article class="step-card reveal"><span class="step-no">0${i+1}</span><span class="step-rule"></span><h3>${t}</h3><p>${d}</p></article>`).join('')}</div></section>
  <section id="booking" class="booking-section section-space"><div class="wrap booking-layout"><div class="booking-intro"><p class="eyebrow">LET’S START WITH YOUR IDEA</p><h2>Book your free<br><em>consultation.</em></h2><p>Share a little about what you’re imagining. You don’t need all the answers yet—this is where we start figuring it out together.</p><div class="booking-aside"><span>✳</span><p>No pressure. No charge.<br>Just a thoughtful first conversation.</p></div></div><div><h3 class="form-heading">Tell me what’s on your mind</h3>${consultationForm()}</div></div></section>
  <section class="faq-section section-space"><div class="wrap faq-layout"><div>${sectionHeading('A FEW THINGS YOU MAY BE WONDERING', 'Good to know')}</div><div class="faq-list">${faqs.map(([q,a])=>`<details class="faq-item"><summary>${q}<span aria-hidden="true">+</span></summary><p>${a}</p></details>`).join('')}</div></div></section>${ctaSection()}`;
}

function about() {
  return `<section class="about-page-hero section-space"><div class="wrap about-page-layout"><div class="about-page-copy reveal"><p class="eyebrow">THE PERSON BEHIND THE PRACTICE</p><h1>About the<br><em>artist.</em></h1><p class="lead">Tattooing is more than putting ink on skin. It’s about understanding the person, their idea, and the story they want to carry with them.</p><p>That belief shapes the way I approach every project: listen first, make room for your perspective, and plan each detail together.</p>${button('Book a Free Consultation','services.html#booking')}</div><div class="about-page-image reveal"><img src="${artist.portrait}" alt="Sawon Dyola, tattoo artist" fetchpriority="high" width="1000" height="1250" onerror="this.closest('.about-page-image').classList.add('image-fallback');this.remove()"><span class="image-label">SAWON DYOLA</span></div></div></section>
  <section class="approach-section section-space"><div class="wrap approach-layout"><div>${sectionHeading('HOW I WORK','My approach')}</div><div class="approach-copy"><p>Every tattoo starts with a conversation. I want to understand your vision and what makes it yours before we begin shaping a design.</p><ul class="check-list">${['Listening first','Understanding your vision','Personalized tattoo planning','Thoughtful design choices','Professional, attentive service','Your comfort and satisfaction'].map(x=>`<li>${icon('sparkle')} ${x}</li>`).join('')}</ul></div></div></section>
  <section class="quote-section"><div class="wrap quote-inner"><span>“</span><blockquote>Every tattoo should feel like it belongs to the person wearing it.</blockquote><p>A PERSONAL PHILOSOPHY</p></div></section>
  <section class="values-section section-space"><div class="wrap">${sectionHeading('WHAT GUIDES THE WORK','What I value')}</div><div class="wrap values-grid">${[['01','Creativity','Making room for ideas to take shape.'],['02','Craftsmanship','Approaching each detail with care.'],['03','Personalization','Letting your story guide the direction.'],['04','Professionalism','A considerate, clear process throughout.'],['05','Client experience','Making sure you feel heard and at ease.']].map(([n,t,d])=>`<article class="value-card reveal"><span>${n}</span>${icon('sparkle')}<h3>${t}</h3><p>${d}</p></article>`).join('')}</div></section>${ctaSection()}`;
}

function blog() {
  return `<section class="listing-hero section-space"><div class="wrap"><p class="eyebrow">IDEAS, PREPARATION & INSPIRATION</p><h1>The tattoo<br><em>journal.</em></h1><p>Ideas, inspiration, preparation, and everything you should know before getting inked.</p></div></section><section class="section-space blog-listing"><div class="wrap"><div class="blog-grid blog-grid-large">${articles.map(blogCard).join('')}</div><p class="placeholder-note">Article dates and editorial images are placeholders. Replace them with your own content before publishing.</p></div></section>${ctaSection()}`;
}

function article() {
  const current = articles.find(x => x.slug === new URLSearchParams(location.search).get('slug')) || articles[0];
  document.title = `${current.title} | The Tattoo Journal | ${artist.name}`;
  $('meta[name="description"]')?.setAttribute('content', current.excerpt);
  $('meta[property="og:title"]')?.setAttribute('content', current.title);
  $('meta[property="og:description"]')?.setAttribute('content', current.excerpt);
  const related = articles.filter(x => x.slug !== current.slug).slice(0, 3);
  return `<section class="article-hero"><div class="wrap article-head"><a class="back-link" href="blog.html">← Back to the journal</a><p class="eyebrow">${current.category}</p><h1>${current.title}</h1><p class="article-byline">${current.date} <span>·</span> By ${artist.name}</p></div><div class="article-cover"><img src="${current.image}&w=1800" alt="Illustrative image for ${current.title}" fetchpriority="high" onerror="this.closest('.article-cover').classList.add('image-fallback');this.remove()"><span class="image-label">EDITORIAL PLACEHOLDER IMAGE</span></div></section><article class="article-content"><div class="article-prose"><p class="article-lead">${current.excerpt}</p>${articleBody.map((p,i)=>`${i===1?'<h2>Start with the story</h2>':''}${i===3?'<h2>Make space for a conversation</h2>':''}<p>${p}</p>`).join('')}<p class="placeholder-note">This is starter editorial content. Review and personalize before publishing.</p></div></article><section class="article-cta"><div class="wrap"><p class="eyebrow eyebrow-light">HAVE YOUR OWN TATTOO IDEA?</p><h2>Let’s talk about it.</h2>${button('Book a Free Consultation','services.html#booking','button-light')}</div></section><section class="related-section section-space"><div class="wrap">${sectionHeading('KEEP EXPLORING','Related reads')}<div class="blog-grid">${related.map(blogCard).join('')}</div></div></section>${ctaSection()}`;
}

function contactForm() { return `<form class="form-card contact-form" data-form="contact" novalidate><label>Name <b>*</b><input name="name" autocomplete="name" required placeholder="Your name"></label><div class="form-row"><label>Email <b>*</b><input name="email" type="email" autocomplete="email" required placeholder="you@example.com"></label><label>Phone<input name="phone" type="tel" autocomplete="tel" placeholder="Optional"></label></div><label>Subject <b>*</b><input name="subject" required placeholder="What would you like to talk about?"></label><label>Message <b>*</b><textarea name="message" required rows="5" placeholder="Write your message..."></textarea></label><p class="form-error" role="alert" aria-live="polite"></p><button class="button" type="submit">Send Message ${icon('arrow')}</button><p class="form-fineprint">* Required. Demo form only: no information is sent or stored. Connect a form service before publishing.</p><div class="form-success" role="status" tabindex="-1" hidden><span class="success-mark">✓</span><h3>Thank you!</h3><p>Your message is ready. In a live site, I’ll get back to you soon.</p><small>Preview only — your message was not sent.</small><button type="button" class="text-link reset-form">Write another message ${icon('arrow')}</button></div></form>`; }

function contact() { return `<section class="contact-hero section-space"><div class="wrap"><p class="eyebrow">START WITH A CONVERSATION</p><h1>Let’s talk about<br>your next <em>tattoo.</em></h1><p>Have a tattoo idea, a question, or something you want to discuss? Get in touch and let’s start with a conversation.</p>${button('Book a Free Consultation','services.html#booking')}</div></section><section class="contact-main section-space"><div class="wrap contact-layout"><div class="contact-details"><p class="eyebrow">CONTACT DETAILS</p><h2>Find your way<br>to say <em>hello.</em></h2><p>These details are editable placeholders. Replace them with verified artist information before publishing.</p>${[['Email',artist.email],['Phone',artist.phone],['Instagram',artist.instagram],['Studio',artist.studio]].map(([label,value])=>`<div class="contact-item"><span>${label}</span><strong>${value}</strong></div>`).join('')}<div class="placeholder-note">PLACEHOLDER CONTACT DETAILS · PLEASE REPLACE</div></div><div><h3 class="form-heading">Send a message</h3>${contactForm()}</div></div></section>${ctaSection()}`; }

$('#site-header').innerHTML = header();
$('#site-footer').innerHTML = footer();
const content = { home, services, about, blog, article, contact }[page]();
$('#main').innerHTML = content;
if (location.hash) requestAnimationFrame(() => document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView());

// Set route-aware link states and article canonical URL.
if (page === 'article') $('link[rel="canonical"]')?.setAttribute('href', `https://your-domain.com/article.html?slug=${new URLSearchParams(location.search).get('slug') || articles[0].slug}`);

// Mobile navigation behaves as a small modal: lock scroll and make background inert.
const menuButton = $('.menu-toggle');
const mobileMenu = $('#mobile-menu');
function closeMenu() {
  if (!menuButton || mobileMenu.hidden) return;
  mobileMenu.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation menu');
  $('#main').inert = false; $('#site-footer').inert = false;
  document.body.classList.remove('menu-open');
  menuButton.focus();
}
menuButton?.addEventListener('click', () => {
  const opening = mobileMenu.hidden;
  mobileMenu.hidden = !opening;
  menuButton.setAttribute('aria-expanded', String(opening));
  menuButton.setAttribute('aria-label', opening ? 'Close navigation menu' : 'Open navigation menu');
  $('#main').inert = opening; $('#site-footer').inert = opening;
  document.body.classList.toggle('menu-open', opening);
  if (opening) mobileMenu.querySelector('a')?.focus();
});
mobileMenu?.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
document.addEventListener('keydown', e => {
  if (e.key !== 'Tab' || mobileMenu?.hidden) return;
  const focusable = [...mobileMenu.querySelectorAll('a[href]')];
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});
window.matchMedia('(min-width: 761px)').addEventListener?.('change', e => { if (e.matches) closeMenu(); });
document.addEventListener('click', e => { if (!mobileMenu?.hidden && !e.target.closest('.site-header')) closeMenu(); });

// Portfolio filters.
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const active = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(x => { const selected = x === button; x.classList.toggle('active', selected); x.setAttribute('aria-pressed', String(selected)); });
  document.querySelectorAll('.work-card').forEach(card => { card.hidden = active !== 'All' && card.dataset.category !== active; });
}));

// Frontend validation and honest demo state. Configure endpoints here to enable real delivery.
const formEndpoints = { consultation: '', contact: '' }; // e.g. { consultation: 'https://formspree.io/f/…', contact: 'https://formspree.io/f/…' }
document.querySelectorAll('[data-form]').forEach(form => {
  const errorBox = $('.form-error', form);
  form.addEventListener('submit', async e => {
    e.preventDefault(); errorBox.textContent = '';
    const invalid = [...form.querySelectorAll('[required]')].find(field => !field.checkValidity() || (field.type === 'checkbox' && !field.checked));
    if (invalid) {
      errorBox.textContent = invalid.type === 'checkbox' ? 'Please provide consent before submitting.' : invalid.validity.typeMismatch ? 'Please enter a valid email address.' : 'Please complete the required fields.';
      invalid.focus(); return;
    }
    const endpoint = formEndpoints[form.dataset.form];
    if (endpoint) {
      try {
        const response = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        if (!response.ok) throw new Error('Request failed');
      } catch {
        errorBox.textContent = 'Something went wrong while sending. Please try again or use the contact details.'; return;
      }
    }
    form.querySelectorAll(':scope > label, :scope > .form-row, :scope > .button, :scope > .form-fineprint').forEach(el => { el.hidden = true; });
    const success = $('.form-success', form); success.hidden = false; success.focus();
    if (!endpoint) success.querySelector('small').textContent = 'Preview only — your information was not sent. Connect a form service to receive submissions.';
  });
  $('.reset-form', form)?.addEventListener('click', () => { form.reset(); form.querySelectorAll(':scope > label, :scope > .form-row, :scope > .button, :scope > .form-fineprint').forEach(el => { el.hidden = false; }); $('.form-success', form).hidden = true; form.querySelector('[required]')?.focus(); });
});

// Small, reduced-motion-aware reveals.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
