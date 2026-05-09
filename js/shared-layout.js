(function () {
    function escapeAttr(value) {
        return String(value).replace(/"/g, "&quot;");
    }

    function normalizeRoot(root) {
        if (!root) {
            return "./";
        }
        return root.endsWith("/") ? root : root + "/";
    }

    function buildLink(root, path) {
        return normalizeRoot(root) + path;
    }

    function navLink(root, path, label, activeKey, currentKey, order) {
        const href = buildLink(root, path);
        const active = activeKey === currentKey ? " active" : "";
        return `<a href="${escapeAttr(href)}" class="nav-link${active}" style="order:${order};">${label}</a>`;
    }

    function mobileLink(root, path, label, activeKey, currentKey, order) {
        const href = buildLink(root, path);
        const active = activeKey === currentKey ? ' class="active"' : "";
        return `<a href="${escapeAttr(href)}"${active} style="order:${order};">${label}</a>`;
    }

    function renderNav(target) {
        const root = target.dataset.root || "./";
        const active = target.dataset.active || "";
        const logoHref = buildLink(root, "");
        const logoSrc = buildLink(root, "images/meal.png");

        target.innerHTML = `
            <nav class="site-nav">
                <div class="shell">
                    <div class="nav-row">
                        <a href="${escapeAttr(logoHref)}">
                            <img src="${escapeAttr(logoSrc)}" alt="Mealops logo" class="h-12 w-auto object-contain" />
                        </a>
                        <div class="nav-links">
                            ${navLink(root, "", "Company", active, "company", 1)}
                            ${navLink(root, "phantom/", "Phantom", active, "phantom", 2)}
                            ${navLink(root, "coachimhungry/", "CoachImHungry", active, "coach", 3)}
                            ${navLink(root, "blog/", "Blog", active, "blog", 4)}
                            ${navLink(root, "contact/", "Contact", active, "contact", 5)}
                        </div>
                        <details class="mobile-nav">
                            <summary class="mobile-toggle" aria-label="Open navigation menu">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                                </svg>
                            </summary>
                            <div class="mobile-menu">
                                ${mobileLink(root, "", "Company", active, "company", 1)}
                                ${mobileLink(root, "phantom/", "Phantom", active, "phantom", 2)}
                                ${mobileLink(root, "coachimhungry/", "CoachImHungry", active, "coach", 3)}
                                ${mobileLink(root, "blog/", "Blog", active, "blog", 4)}
                                ${mobileLink(root, "contact/", "Contact", active, "contact", 5)}
                            </div>
                        </details>
                    </div>
                </div>
            </nav>
        `;
    }

    function renderFooter(target) {
        const root = target.dataset.root || "./";
        const logoSrc = buildLink(root, "images/logo_green.png");
        const phantomHref = buildLink(root, "phantom/");
        const coachHref = buildLink(root, "coachimhungry/");
        const privacyHref = buildLink(root, "privacy-policy/");
        const contactHref = buildLink(root, "contact/");
        const blogHref = buildLink(root, "blog/");

        target.innerHTML = `
            <footer class="footer">
                <div class="shell">
                    <div class="footer-grid">
                        <div>
                            <img src="${escapeAttr(logoSrc)}" alt="Mealops logo" class="h-12 w-auto object-contain" />
                            <p style="margin-top: 1rem; color: rgba(255,255,255,0.72); line-height: 1.7;">
                                MealOps is redefining meal ordering logistics—from CoachImHungry&apos;s team workflows to Phantom&apos;s agentic ordering infrastructure.
                            </p>
                            <div style="margin-top: 1rem;">
                                <a href="https://www.linkedin.com/company/mealops" target="_blank" rel="noopener noreferrer" aria-label="Mealops LinkedIn">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div style="padding-left: 1.5rem;">
                            <div class="footer-title">Products</div>
                            <div class="footer-list">
                                <a href="${escapeAttr(phantomHref)}">Phantom</a>
                                <a href="${escapeAttr(coachHref)}">CoachImHungry</a>
                            </div>
                        </div>
                        <div style="padding-left: 1.5rem;">
                            <div class="footer-title">Company</div>
                            <div class="footer-list">
                                <a href="${escapeAttr(privacyHref)}">Privacy Policy</a>
                                <a href="${escapeAttr(contactHref)}">Contact</a>
                                <a href="${escapeAttr(blogHref)}">Blog</a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-note">&copy; 2026 Mealops. All rights reserved.</div>
                </div>
            </footer>
        `;
    }

    document.querySelectorAll("[data-shared-nav]").forEach(renderNav);
    document.querySelectorAll("[data-shared-footer]").forEach(renderFooter);
})();
