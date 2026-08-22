(function () {
  const SOCIALS = [
    {
      label: 'Email',
      href: 'mailto:aderonkeoadejare@gmail.com',
      svg: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"></rect>
          <path d="M3.5 7l8.5 5.5L20.5 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      `,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aderonkeadejare/',
      svg: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 9v10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
          <circle cx="5" cy="5" r="1.8" fill="currentColor"></circle>
          <path d="M10 12v7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
          <path d="M10 15.2c0-1.8 1-3.2 3.2-3.2 2.2 0 3.8 1.4 3.8 4.1V19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      `,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/AderonkeAdejare',
      svg: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.1-3.4-1.1-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.2 3 .9.1-.6.3-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-5a4 4 0 0 1 1.1-2.8c-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .9a10.4 10.4 0 0 1 5.5 0c2.1-1.2 3-.9 3-.9.6 1.6.2 2.8.1 3.1a4 4 0 0 1 1.1 2.8c0 3.9-2.3 4.7-4.5 5 .3.3.7.9.7 1.9v2.7c0 .3.2.6.7.5A10 10 0 0 0 12 2z" fill="currentColor"></path>
        </svg>
      `,
    },
  ];

  const styles = `
    .floating-socials {
      position: fixed;
      right: max(1rem, env(safe-area-inset-right));
      bottom: max(1rem, env(safe-area-inset-bottom));
      z-index: 1200;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      gap: 0.65rem;
      pointer-events: none;
    }

    .floating-socials.open {
      pointer-events: auto;
    }

    .floating-social-items {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      gap: 0.65rem;
      opacity: 0;
      transform: translateX(0.5rem);
      pointer-events: none;
      transition: opacity 180ms ease, transform 180ms ease;
      order: 1;
    }

    .floating-socials.open .floating-social-items {
      opacity: 1;
      transform: translateX(0);
      pointer-events: auto;
    }

    .floating-social-item {
      width: 3.25rem;
      height: 3.25rem;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      color: #345e7d;
      box-shadow: 0 12px 26px rgba(52, 94, 125, 0.22);
      border: 1px solid rgba(52, 94, 125, 0.12);
      text-decoration: none;
      transform: translateX(0.35rem) scale(0.9);
      opacity: 0;
      transition:
        transform 180ms ease,
        opacity 180ms ease,
        box-shadow 180ms ease;
    }

    .floating-socials.open .floating-social-item {
      transform: translateX(0) scale(1);
      opacity: 1;
    }

    .floating-social-item:hover {
      box-shadow: 0 16px 30px rgba(52, 94, 125, 0.28);
    }

    .floating-social-item svg {
      width: 1.35rem;
      height: 1.35rem;
      display: block;
    }

    .floating-social-main {
      width: 3.75rem;
      height: 3.75rem;
      border-radius: 999px;
      border: 1px solid rgba(52, 94, 125, 0.14);
      background: #345e7d;
      color: #f3f7fa;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 16px 32px rgba(52, 94, 125, 0.28);
      cursor: pointer;
      pointer-events: auto;
      order: 2;
    }

    .floating-social-main svg {
      width: 1.55rem;
      height: 1.55rem;
    }

    .floating-socials.open .floating-social-main {
      transform: rotate(45deg);
    }

    @media (max-width: 480px) {
      .floating-socials {
        right: 0.75rem;
        bottom: 0.75rem;
        gap: 0.5rem;
        flex-direction: column;
        align-items: flex-end;
      }

      .floating-social-items {
        flex-direction: column;
        align-items: flex-end;
        transform: translateY(0.5rem);
      }

      .floating-socials.open .floating-social-items {
        transform: translateY(0);
      }

      .floating-social-item {
        transform: translateY(0.35rem) scale(0.9);
      }

      .floating-socials.open .floating-social-item {
        transform: translateY(0) scale(1);
      }

      .floating-social-main {
        width: 3.5rem;
        height: 3.5rem;
      }

      .floating-social-item {
        width: 3rem;
        height: 3rem;
      }
    }
  `;

  function createWidget() {
    const existing = document.getElementById('floating-socials');
    if (existing) return existing;

    const widget = document.createElement('div');
    widget.id = 'floating-socials';
    widget.className = 'floating-socials';
    widget.innerHTML = `
      <div class="floating-social-items" aria-hidden="true">
        ${SOCIALS.map(
          social => `
            <a
              class="floating-social-item"
              href="${social.href}"
              target="${social.label === 'Email' ? '_self' : '_blank'}"
              ${social.label === 'Email' ? '' : 'rel="noopener noreferrer"'}
              aria-label="${social.label}"
              title="${social.label}"
            >
              ${social.svg}
            </a>
          `
        ).join('')}
      </div>
      <button class="floating-social-main" type="button" aria-label="Open social links" aria-expanded="false">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 5v14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
          <path d="M5 12h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
        </svg>
      </button>
    `;

    document.body.appendChild(widget);
    return widget;
  }

  function injectStyles() {
    if (document.getElementById('floating-socials-styles')) return;
    const style = document.createElement('style');
    style.id = 'floating-socials-styles';
    style.textContent = styles;
    document.head.appendChild(style);
  }

  function init() {
    if (!document.body || document.getElementById('floating-socials')) return;
    injectStyles();
    const widget = createWidget();
    const button = widget.querySelector('.floating-social-main');
    const items = widget.querySelector('.floating-social-items');
    const links = widget.querySelectorAll('.floating-social-item');

    const setOpen = open => {
      widget.classList.toggle('open', open);
      button.setAttribute('aria-expanded', String(open));
      items.setAttribute('aria-hidden', String(!open));
    };

    button.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      setOpen(!widget.classList.contains('open'));
    });

    links.forEach(link => {
      link.addEventListener('click', () => setOpen(false));
    });

    document.addEventListener('click', event => {
      if (!widget.contains(event.target)) {
        setOpen(false);
      }
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
