document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    const subMenu = item.querySelector('.sub-menu');
    if (!subMenu) return;

    let timeout;

    item.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      subMenu.classList.remove('opacity-0', 'invisible');
      subMenu.classList.add('opacity-100', 'visible');
      subMenu.setAttribute('aria-hidden', 'false');
      item.querySelector('.nav-link') ? item.querySelector('.nav-link').setAttribute('aria-expanded', 'true') : null;
    });

    item.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        subMenu.classList.remove('opacity-100', 'visible');
        subMenu.classList.add('opacity-0', 'invisible');
        subMenu.setAttribute('aria-hidden', 'true');
        item.querySelector('.nav-link') ? item.querySelector('.nav-link').setAttribute('aria-expanded', 'false') : null;
      }, 200); // 200ms delay
    });
    
    // Accessibility: Handle focus
    item.addEventListener('focusin', () => {
      clearTimeout(timeout);
      subMenu.classList.remove('opacity-0', 'invisible');
      subMenu.classList.add('opacity-100', 'visible');
      subMenu.setAttribute('aria-hidden', 'false');
      item.querySelector('.nav-link') ? item.querySelector('.nav-link').setAttribute('aria-expanded', 'true') : null;
    });

    item.addEventListener('focusout', (e) => {
      if (!item.contains(e.relatedTarget)) {
        subMenu.classList.remove('opacity-100', 'visible');
        subMenu.classList.add('opacity-0', 'invisible');
        subMenu.setAttribute('aria-hidden', 'true');
        item.querySelector('.nav-link') ? item.querySelector('.nav-link').setAttribute('aria-expanded', 'false') : null;
      }
    });

  });
  const navs = document.querySelectorAll('.nav');
  navs.forEach(nav => {
    const alwaysShow = nav.getAttribute('data-always-show') === 'true';
    if (alwaysShow) return;

    const onScroll = () => {
      if (window.scrollY > 50) {
        nav.classList.add('bg-[#00052f]/50');
      } else {
        nav.classList.remove('bg-[#00052f]/50');
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Initial check
  });
});