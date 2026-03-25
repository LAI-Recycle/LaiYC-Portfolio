/* ========================================
   John Lai Portfolio — main.js v3
   Single-page scrolling · Fixed navbar
   ======================================== */

(function () {
    'use strict';

    /* ── 工具：將 **text** 轉為 <strong>text</strong> ── */
    function bold(str) {
        return str.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    }

    /* ============================================================
       RENDER — 將 data.js 資料渲染至頁面
       ============================================================ */

    function renderNav() {
        var el = document.querySelector('.nav-brand');
        if (el) el.textContent = PORTFOLIO.nav.brand;
    }

    function renderHero() {
        var d = PORTFOLIO.hero;

        var leftEl = document.getElementById('hero-left');
        if (leftEl) {
            var metrics = d.metrics.map(function (m) {
                var nStr;
                if (m.from)      nStr = m.from + '<i>→</i>' + m.to;
                else if (m.unit) nStr = m.n + '<sup>' + m.unit + '</sup>';
                else             nStr = m.n;
                return (
                    '<div class="hm">' +
                        '<span class="hm-n">' + nStr + '</span>' +
                        '<span class="hm-r"></span>' +
                        '<span class="hm-l">' + m.label + '</span>' +
                    '</div>'
                );
            }).join('');

            var ctas = d.ctas.map(function (c) {
                return '<a href="' + c.href + '" class="btn-' + c.type + '">' + c.text + '</a>';
            }).join('');

            leftEl.innerHTML =
                '<p class="hero-kicker">' +
                    d.kicker.join('<span class="dot">·</span>') +
                '</p>' +
                '<h1 class="hero-name">' +
                    '<span class="n-first">' + d.nameFirst + '</span>' +
                    '<span class="n-last">' + d.nameLast + '</span>' +
                    '<span class="n-paren">' + d.nameNick + '</span>' +
                '</h1>' +
                '<p class="hero-zh">' + d.nameZh + '</p>' +
                '<hr class="hero-rule">' +
                '<p class="hero-tagline">' + d.tagline.join('<br>') + '</p>' +
                '<div class="hero-metrics">' + metrics + '</div>' +
                '<div class="hero-ctas">' + ctas + '</div>';
        }

        var rightEl = document.getElementById('hero-right');
        if (rightEl) {
            rightEl.innerHTML = '<img src="' + d.photo + '" alt="' + d.photoAlt + '">';
        }
    }

    function renderAbout() {
        var d = PORTFOLIO.about;

        var mainEl = document.getElementById('about-main');
        if (mainEl) {
            var bioHtml = d.bio.map(function (p) { return '<p>' + p + '</p>'; }).join('');
            mainEl.innerHTML =
                '<p class="pos-label">' + d.posLabel + '</p>' +
                '<blockquote class="pull-quote">' + d.quote + '</blockquote>' +
                bioHtml;
        }

        var valuesEl = document.getElementById('about-values');
        if (valuesEl) {
            valuesEl.innerHTML = d.values.map(function (v) {
                return (
                    '<div class="vl-item">' +
                        '<span class="vl-dash">—</span>' +
                        '<div>' +
                            '<h4>' + v.title + '</h4>' +
                            '<p>' + bold(v.desc) + '</p>' +
                        '</div>' +
                    '</div>'
                );
            }).join('');
        }

        var eduEl = document.getElementById('about-edu');
        if (eduEl) {
            eduEl.innerHTML = d.education.map(function (e) {
                var logo = e.logo
                    ? '<img class="edu-logo" src="' + e.logo + '" alt="school logo" loading="lazy">'
                    : '';
                return (
                    '<div class="edu-item">' +
                        logo +
                        '<span class="edu-yr">' + e.period + '</span>' +
                        '<span class="edu-text">' + e.text + ' <strong>' + e.degree + '</strong></span>' +
                    '</div>'
                );
            }).join('');
        }
    }

    function renderProjects() {
        var el = document.getElementById('proj-grid');
        if (!el) return;
        el.innerHTML = PORTFOLIO.projects.map(function (p) {
            var tags = p.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('');
            var cover = p.img
                ? '<div class="proj-cover"><img src="' + p.img + '" alt="' + p.title + '" loading="lazy"></div>'
                : '';
            var link = p.url
                ? '<a class="proj-link" href="' + p.url + '" target="_blank" rel="noopener">↗</a>'
                : '';
            return (
                '<article class="proj-card">' +
                    cover +
                    '<span class="proj-n">' + p.n + '</span>' +
                    link +
                    '<h3 class="proj-title">' + p.title + '</h3>' +
                    '<p class="proj-desc">' + p.desc + '</p>' +
                    '<div class="proj-tags">' + tags + '</div>' +
                    '<div class="proj-impact">' +
                        '<span class="pi-n">' + p.impact.value + '</span>' +
                        '<span class="pi-l">' + p.impact.desc + '</span>' +
                    '</div>' +
                '</article>'
            );
        }).join('');
    }

    function renderExperience() {
        var el = document.getElementById('exp-list');
        if (!el) return;
        el.innerHTML = PORTFOLIO.experience.map(function (e) {
            var badge   = e.badge
                ? '<span class="exp-badge ' + e.badge.type + '">' + e.badge.text + '</span>'
                : '';
            var bullets = e.bullets.map(function (b) {
                return '<li>' + bold(b) + '</li>';
            }).join('');
            var cover   = e.img
                ? '<div class="exp-cover"><img src="' + e.img + '" alt="' + e.company + '" loading="lazy"></div>'
                : '';
            return (
                '<div class="exp-item' + (e.img ? ' has-cover' : '') + '">' +
                    '<div class="exp-meta">' +
                        '<span class="exp-period">' + e.period + '</span>' +
                        badge +
                    '</div>' +
                    '<div class="exp-body">' +
                        '<p class="exp-co">' + e.company + ' <em>' + e.companyEn + '</em></p>' +
                        '<p class="exp-role">' + e.role + '</p>' +
                        '<p class="exp-mission">' + e.mission + '</p>' +
                        '<ul>' + bullets + '</ul>' +
                    '</div>' +
                    cover +
                '</div>'
            );
        }).join('');
    }

    function renderCerts() {
        var c = PORTFOLIO.certs;

        var cloudLabelEl = document.getElementById('cert-cloud-label');
        if (cloudLabelEl) cloudLabelEl.textContent = c.cloudLabel;

        var dataLabelEl = document.getElementById('cert-data-label');
        if (dataLabelEl) dataLabelEl.textContent = c.dataLabel;

        ['cloud', 'data'].forEach(function (group) {
            var el = document.getElementById('cert-' + group);
            if (!el) return;
            el.innerHTML = c[group].map(function (item) {
                var tag   = item.url ? 'a' : 'div';
                var attrs = item.url
                    ? ' href="' + item.url + '" target="_blank" rel="noopener"'
                    : '';
                return (
                    '<' + tag + ' class="cert-item"' + attrs + '>' +
                        '<span class="cprovider">' + item.provider + '</span>' +
                        '<span class="cname">' + item.name + '</span>' +
                        '<span class="cyr">' + item.year + '</span>' +
                    '</' + tag + '>'
                );
            }).join('');
        });
    }

    function renderSkills() {
        var s = PORTFOLIO.skills;

        var labelEl = document.getElementById('skills-tech-label');
        if (labelEl) labelEl.textContent = s.label;

        var el = document.getElementById('skill-table');
        if (!el) return;
        el.innerHTML = s.items.map(function (row) {
            return (
                '<div class="skill-row">' +
                    '<span class="sk-cat">' + row.cat + '</span>' +
                    '<span class="sk-items">' + row.items + '</span>' +
                '</div>'
            );
        }).join('');
    }

    function renderContact() {
        var d = PORTFOLIO.contact;
        var gridEl = document.getElementById('contact-grid');
        if (!gridEl) return;

        var rows = d.items.map(function (item) {
            var val = item.url
                ? '<a href="' + item.url + '" class="ci-val link">' + item.value + '</a>'
                : '<span class="ci-val">' + item.value + '</span>';
            return (
                '<div class="ci-row">' +
                    '<span class="ci-label">' + item.label + '</span>' +
                    val +
                '</div>'
            );
        }).join('');

        gridEl.innerHTML =
            '<div class="contact-main">' +
                '<p class="contact-intro">' + d.intro + '</p>' +
                '<div class="contact-info">' + rows + '</div>' +
            '</div>' +
            '<div class="contact-links">' +
                '<p class="cl-label">' + d.linksLabel + '</p>' +
                '<div class="online-list" id="online-list"></div>' +
            '</div>';
    }

    function renderLinks() {
        var el = document.getElementById('online-list');
        if (!el) return;
        el.innerHTML = PORTFOLIO.links.map(function (l) {
            return (
                '<a href="' + l.url + '" target="_blank" rel="noopener" class="ol-item">' +
                    '<span>' + l.label + '</span>' +
                    '<span class="ol-sub">' + l.sub + '</span>' +
                    '<span class="ol-arrow">↗</span>' +
                '</a>'
            );
        }).join('');
    }

    function renderFooter() {
        var d = PORTFOLIO.footer;
        var el = document.getElementById('footer-inner');
        if (!el) return;
        el.innerHTML =
            '<span>' + d.copy + '</span>' +
            '<span class="fsep">·</span>' +
            '<span>' + d.location + '</span>';
    }

    /* 執行所有 render（順序重要：contact 必須在 links 之前） */
    renderNav();
    renderHero();
    renderAbout();
    renderProjects();
    renderExperience();
    renderCerts();
    renderSkills();
    renderContact();
    renderLinks();
    renderFooter();

    /* ============================================================
       NAVBAR
       ============================================================ */
    var NAV_H  = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64;
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    /* ── Mobile menu ── */
    var navToggle = document.querySelector('.nav-toggle');
    var navMobile = document.getElementById('nav-mobile');

    function openMenu() {
        navMobile.style.display = 'block';
        navMobile.offsetHeight; /* force reflow so transition fires */
        navMobile.classList.add('open');
        navToggle.setAttribute('aria-expanded', 'true');
        navbar.classList.add('menu-open');
    }

    function closeMenu() {
        navMobile.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navbar.classList.remove('menu-open');
        navMobile.addEventListener('transitionend', function hide() {
            navMobile.style.display = 'none';
            navMobile.removeEventListener('transitionend', hide);
        });
    }

    if (navToggle && navMobile) {
        navToggle.addEventListener('click', function () {
            navMobile.classList.contains('open') ? closeMenu() : openMenu();
        });
    }

    document.querySelectorAll('.nav-mobile a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    /* ── Smooth scroll with nav offset ── */
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var id = this.getAttribute('href').replace('#', '');
            if (!id) return;
            var target = document.getElementById(id);
            if (!target) return;
            e.preventDefault();
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.scrollY - NAV_H - 16,
                behavior: 'smooth'
            });
        });
    });

    /* ── Active nav link via IntersectionObserver ── */
    var sections = document.querySelectorAll('main section[id]');
    var navLinks = document.querySelectorAll('.nav-links a');

    function setActiveLink(id) {
        navLinks.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href').replace('#', '') === id);
        });
    }

    if ('IntersectionObserver' in window && sections.length) {
        var sectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) setActiveLink(entry.target.id);
            });
        }, { rootMargin: '-' + (NAV_H + 16) + 'px 0px -70% 0px' });

        sections.forEach(function (sec) { sectionObserver.observe(sec); });
    }

    /* ── Scroll reveal ── */
    var revealEls = document.querySelectorAll('.proj-card, .exp-item, .vl-item');

    if ('IntersectionObserver' in window && revealEls.length) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

        revealEls.forEach(function (el, i) {
            el.style.transitionDelay = (i % 3) * 0.08 + 's';
            revealObserver.observe(el);
        });
    } else {
        revealEls.forEach(function (el) { el.classList.add('revealed'); });
    }

})();
