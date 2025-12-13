const defaultConfig = {
  background_color: "#f8fafc",
  surface_color: "#ffffff",
  text_color: "#1e293b",
  primary_color: "#2563eb",
  secondary_color: "#7c3aed",
  font_family: "Inter",
  font_size: 16,
  company_name: "Global Logistics Solutions",
  tagline: "Your Trusted Partner in International Freight & Exhibition Services",
  about_intro: "With decades of experience in the logistics industry, we specialize in comprehensive freight forwarding solutions, on-site exhibition operations, and international shipping services. Our commitment to excellence and customer satisfaction has made us a leader in the global logistics sector.",
  mission_text: "To deliver exceptional logistics solutions that empower businesses to reach global markets efficiently and reliably, while maintaining the highest standards of service excellence.",
  vision_text: "To be the world's most trusted logistics partner, recognized for innovation, reliability, and our commitment to connecting businesses across continents seamlessly.",
  values_text: "Integrity, Excellence, Customer Focus, Innovation, and Teamwork guide everything we do. We build lasting partnerships through transparency and dedication.",
  president_message: "In today's interconnected world, efficient logistics is the backbone of successful business. Our team is dedicated to ensuring your cargo reaches its destination safely, on time, and with the care it deserves. We don't just move goods; we build bridges between markets and forge partnerships that last.",
  president_name: "John Anderson, President & CEO"
};

async function onConfigChange(config) {
  const baseFontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  const customFont = config.font_family || defaultConfig.font_family;
  const baseSize = config.font_size || defaultConfig.font_size;

  const primaryColor = config.primary_color || defaultConfig.primary_color;
  const secondaryColor = config.secondary_color || defaultConfig.secondary_color;
  const backgroundColor = config.background_color || defaultConfig.background_color;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;

  // Safely get elements (avoid errors if missing)
  const heroSection = document.getElementById('hero-section');
  const app = document.getElementById('app');
  const aboutSection = document.getElementById('about-section');
  const presidentSection = document.getElementById('president-section');
  const mvvSection = document.getElementById('mvv-section');
  const membershipsSection = document.getElementById('memberships-section');
  const footerSection = document.getElementById('footer-section');
  const companyNameEl = document.getElementById('company-name');
  const taglineEl = document.getElementById('tagline');
  const footerCompanyNameEl = document.getElementById('footer-company-name');

  // Update hero section with animated gradient
  if (heroSection) {
    heroSection.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 50%, ${primaryColor} 100%)`;
  }

  // Update main background
  if (app) app.style.backgroundColor = backgroundColor;
  if (aboutSection) aboutSection.style.backgroundColor = backgroundColor;
  if (presidentSection) presidentSection.style.backgroundColor = backgroundColor;

  // Update section backgrounds
  if (mvvSection) mvvSection.style.backgroundColor = surfaceColor;
  if (membershipsSection) membershipsSection.style.backgroundColor = surfaceColor;
  if (footerSection) {
    footerSection.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`;
    footerSection.style.color = surfaceColor;
  }

  // Update text colors
  const allTextElements = document.querySelectorAll('h1, h2, h3, p:not(#tagline):not(#footer-section p)');
  allTextElements.forEach(el => {
    el.style.color = textColor;
  });

  if (companyNameEl) {
    companyNameEl.style.color = surfaceColor;
  }
  if (taglineEl) {
    taglineEl.style.color = surfaceColor;
  }
  if (footerCompanyNameEl) {
    footerCompanyNameEl.style.color = surfaceColor;
  }

  // Update service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.style.backgroundColor = surfaceColor;
    card.style.border = `2px solid ${primaryColor}15`;
    card.style.boxShadow = `0 4px 15px ${primaryColor}15`;
  });

  // Update learn more badges
  const learnMoreBadges = document.querySelectorAll('.learn-more-badge');
  learnMoreBadges.forEach(badge => {
    badge.style.backgroundColor = `${primaryColor}15`;
    badge.style.color = primaryColor;
  });

  // Update MVV cards
  const mvvCards = document.querySelectorAll('.mvv-card');
  mvvCards.forEach(card => {
    card.style.backgroundColor = backgroundColor;
    card.style.borderLeft = `5px solid ${primaryColor}`;
    card.style.boxShadow = `0 4px 15px ${primaryColor}10`;
  });

  // Update timeline dots
  const timelineDots = document.querySelectorAll('.timeline-dot');
  timelineDots.forEach(dot => {
    dot.style.backgroundColor = primaryColor;
    dot.style.boxShadow = `0 0 20px ${primaryColor}80`;
  });

  // Update president card
  const presidentCard = document.querySelector('.president-card');
  if (presidentCard) {
    presidentCard.style.backgroundColor = surfaceColor;
    presidentCard.style.borderLeft = `6px solid ${primaryColor}`;
    presidentCard.style.boxShadow = `0 10px 40px ${primaryColor}20`;
  }

  const presidentAvatar = document.querySelector('.president-avatar');
  if (presidentAvatar) {
    presidentAvatar.style.backgroundColor = primaryColor;
    presidentAvatar.style.color = surfaceColor;
  }

  const presidentSignature = document.querySelector('.president-signature');
  if (presidentSignature) {
    presidentSignature.style.backgroundColor = primaryColor;
  }

  // Update membership cards
  const membershipCards = document.querySelectorAll('.membership-card');
  membershipCards.forEach(card => {
    card.style.backgroundColor = backgroundColor;
    card.style.border = `2px solid ${primaryColor}`;
  });

  // Update section dividers and decorative elements
  const dividers = document.querySelectorAll('.section-divider');
  dividers.forEach(divider => {
    divider.style.background = `linear-gradient(90deg, transparent, ${primaryColor}, transparent)`;
    // Use CSS variable for dot color (pseudo-element)
    divider.style.setProperty('--dot-color', primaryColor);
  });

  // Remove old dynamic styles
  const oldDynamicStyles = document.querySelectorAll('style[data-dynamic="true"]');
  oldDynamicStyles.forEach(style => style.remove());

  // Create dynamic CSS for pseudo-elements
  const dynamicStyle = document.createElement('style');
  dynamicStyle.setAttribute('data-dynamic', 'true');
  dynamicStyle.textContent = `
    .mvv-card::after {
      background: ${primaryColor} !important;
    }
    .membership-card::before {
      background: ${primaryColor} !important;
    }
    .decorative-line::after {
      background: linear-gradient(90deg, ${primaryColor}, ${secondaryColor}) !important;
    }
    .section-divider::after {
      background: ${primaryColor} !important;
      box-shadow: 0 0 20px ${primaryColor} !important;
    }
  `;
  document.head.appendChild(dynamicStyle);

  // Update fonts
  const allElements = document.querySelectorAll('*');
  allElements.forEach(el => {
    el.style.fontFamily = `${customFont}, ${baseFontStack}`;
  });

  // Update font sizes
  if (companyNameEl) companyNameEl.style.fontSize = `${baseSize * 3.5}px`;
  if (taglineEl) taglineEl.style.fontSize = `${baseSize * 1.5}px`;

  const h2Elements = document.querySelectorAll('h2');
  h2Elements.forEach(el => el.style.fontSize = `${baseSize * 2.5}px`);

  const h3Elements = document.querySelectorAll('h3');
  h3Elements.forEach(el => el.style.fontSize = `${baseSize * 1.5}px`);

  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(el => {
    if (!el.id || el.id === 'about-intro' || el.id === 'president-message') {
      el.style.fontSize = `${baseSize * 1.1}px`;
    } else {
      el.style.fontSize = `${baseSize}px`;
    }
  });

  // Update editable text content
  const aboutIntroEl = document.getElementById('about-intro');
  const missionTextEl = document.getElementById('mission-text');
  const visionTextEl = document.getElementById('vision-text');
  const valuesTextEl = document.getElementById('values-text');
  const presidentMessageEl = document.getElementById('president-message');
  const presidentNameEl = document.getElementById('president-name');

  if (companyNameEl) companyNameEl.textContent = config.company_name || defaultConfig.company_name;
  if (footerCompanyNameEl) footerCompanyNameEl.textContent = config.company_name || defaultConfig.company_name;
  if (taglineEl) taglineEl.textContent = config.tagline || defaultConfig.tagline;
  if (aboutIntroEl) aboutIntroEl.textContent = config.about_intro || defaultConfig.about_intro;
  if (missionTextEl) missionTextEl.textContent = config.mission_text || defaultConfig.mission_text;
  if (visionTextEl) visionTextEl.textContent = config.vision_text || defaultConfig.vision_text;
  if (valuesTextEl) valuesTextEl.textContent = config.values_text || defaultConfig.values_text;
  if (presidentMessageEl) presidentMessageEl.textContent = config.president_message || defaultConfig.president_message;
  if (presidentNameEl) presidentNameEl.textContent = config.president_name || defaultConfig.president_name;
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          window.elementSdk.setConfig({ background_color: value });
        }
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => {
          config.surface_color = value;
          window.elementSdk.setConfig({ surface_color: value });
        }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          window.elementSdk.setConfig({ text_color: value });
        }
      },
      {
        get: () => config.primary_color || defaultConfig.primary_color,
        set: (value) => {
          config.primary_color = value;
          window.elementSdk.setConfig({ primary_color: value });
        }
      },
      {
        get: () => config.secondary_color || defaultConfig.secondary_color,
        set: (value) => {
          config.secondary_color = value;
          window.elementSdk.setConfig({ secondary_color: value });
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => {
        config.font_family = value;
        window.elementSdk.setConfig({ font_family: value });
      }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => {
        config.font_size = value;
        window.elementSdk.setConfig({ font_size: value });
      }
    }
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["company_name", config.company_name || defaultConfig.company_name],
    ["tagline", config.tagline || defaultConfig.tagline],
    ["about_intro", config.about_intro || defaultConfig.about_intro],
    ["mission_text", config.mission_text || defaultConfig.mission_text],
    ["vision_text", config.vision_text || defaultConfig.vision_text],
    ["values_text", config.values_text || defaultConfig.values_text],
    ["president_message", config.president_message || defaultConfig.president_message],
    ["president_name", config.president_name || defaultConfig.president_name]
  ]);
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

// Run DOM-dependent code after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Add hover scale effect
  document.querySelectorAll('.hover-scale').forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.transform = 'scale(1.1)';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'scale(1)';
    });
  });

  // Scroll reveal animation
  const revealObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, revealObserverOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add parallax effect to particles
  let ticking = false;
  let scrollPos = 0;

  window.addEventListener('scroll', () => {
    scrollPos = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
          const speed = 0.5 + (index * 0.1);
          particle.style.transform = `translateY(${scrollPos * speed}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  });

  // Counter Animation Function
  function animateCounter(element, target, duration = 2000, suffix = '') {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      let displayValue = Math.floor(current);
      if (suffix === '%') {
        element.textContent = displayValue + '%';
      } else if (target >= 1000) {
        element.textContent = displayValue.toLocaleString() + '+';
      } else {
        element.textContent = displayValue + '+';
      }
    }, 16);
  }

  // Progress Bar Animation
  function animateProgressBar(progressBar, percentage) {
    setTimeout(() => {
      progressBar.style.width = percentage + '%';
    }, 500);
  }

  // Observer for stat-box animations
  const statObserverOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
  };

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statNumber = entry.target.querySelector('.stat-number');
        const progressFill = entry.target.querySelector('.progress-fill');
        const label = entry.target.querySelector('.stat-label');

        if (!statNumber) return;

        const target = parseInt(statNumber.dataset.target, 10);
        let suffix = '+';
        let progressPercentage = 100;

        if (label && label.textContent.includes('Repeat Customers')) {
          suffix = '%';
          progressPercentage = target;
        }

        animateCounter(statNumber, target, 2500, suffix);
        if (progressFill) {
          animateProgressBar(progressFill, progressPercentage);
        }

        statObserver.unobserve(entry.target);
      }
    });
  }, statObserverOptions);

  // Observe all stat boxes
  const statBoxes = document.querySelectorAll('.stat-box');
  statBoxes.forEach(box => {
    statObserver.observe(box);
  });

  // Hover effects on stat boxes
  document.querySelectorAll('.stat-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
      const icon = box.querySelector('.stat-icon');
      if (icon) {
        icon.style.transform = 'scale(1.2) rotate(10deg)';
        icon.style.transition = 'transform 0.3s ease';
      }
    });

    box.addEventListener('mouseleave', () => {
      const icon = box.querySelector('.stat-icon');
      if (icon) {
        icon.style.transform = 'scale(1) rotate(0deg)';
      }
    });
  });
});
