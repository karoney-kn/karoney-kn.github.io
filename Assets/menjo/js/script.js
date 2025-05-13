    // Theme toggle logic
    const lightBtn = document.getElementById('light-btn');
    const darkBtn = document.getElementById('dark-btn');
    const body = document.body;

    function setTheme(theme) {
      if (theme === 'dark') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        darkBtn.classList.add('active');
        lightBtn.classList.remove('active');
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        lightBtn.classList.add('active');
        darkBtn.classList.remove('active');
        localStorage.setItem('theme', 'light');
      }
    }
    
    lightBtn.addEventListener('click', () => setTheme('light'));
    darkBtn.addEventListener('click', () => setTheme('dark'));
    
    // Load saved theme or prefer color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }

    // Sidebar & mobile nav active link highlight + smooth scroll
    function handleNavLinks(selector) {
      document.querySelectorAll(selector).forEach(link => {
        link.addEventListener('click', function(e) {
          // For anchor links
          if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            // Highlight active
            document.querySelectorAll(selector).forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            // Smooth scroll
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
            // Collapse mobile nav
            if (selector === '#mobileNav .nav-link') {
              const navbar = document.getElementById('mobileNavbar');
              if (navbar.classList.contains('show')) {
                new bootstrap.Collapse(navbar).hide();
              }
            }
          }
        });
      });
    }
    handleNavLinks('#sidebarMenu .nav-link');
    handleNavLinks('#mobileNav .nav-link');