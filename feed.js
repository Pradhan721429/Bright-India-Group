

    const testimonials = [
      {
        name: "Sarah Johnson",
        role: "Marketing Director",
        feedback: "This product has completely transformed how we work. The team is more productive and our clients are happier than ever!",
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
      },
      {
        name: "Michael hen",
        role: "CEO, TechStart",
        feedback: "Outstanding service and support. The ROI we've seen in just 3 months has exceeded all our expectations. Highly recommended!",
        image: 'https://cdn.dribbble.com/userupload/41573963/file/original-ac839f228c8ebe7139e7a9cfcae7d3fa.png?resize=400x0'
      },
      {
        name: "Emily Rodriguez",
        role: "Product Manager",
        feedback: "The attention to detail and user experience is phenomenal. Our team adopted it immediately without any training needed.",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23f59e0b'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='white' font-size='40' font-family='Arial'%3EER%3C/text%3E%3C/svg%3E"
      },
      {
        name: "David Thompson",
        role: "Operations Lead",
        feedback: "We've tried many solutions, but this one stands out. The integration was seamless and the results speak for themselves.",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23ef4444'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='white' font-size='40' font-family='Arial'%3EDT%3C/text%3E%3C/svg%3E"
      },
      {
        name: "Lisa Anderson",
        role: "Creative Director",
        feedback: "Beautiful design meets powerful functionality. It's rare to find a product that excels in both areas so effortlessly.",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%238b5cf6'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='white' font-size='40' font-family='Arial'%3ELA%3C/text%3E%3C/svg%3E"
      },
      {
        name: "James Wilson",
        role: "Sales Manager",
        feedback: "Our sales have increased by 40% since implementing this solution. The analytics and insights are game-changing.",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%2306b6d4'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='white' font-size='40' font-family='Arial'%3EJW%3C/text%3E%3C/svg%3E"
      },
      {
        name: "Rachel Kim",
        role: "UX Designer",
        feedback: "As a designer, I appreciate the thoughtful interface and smooth interactions. It's a joy to use every single day.",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23ec4899'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='white' font-size='40' font-family='Arial'%3ERK%3C/text%3E%3C/svg%3E"
      },
      {
        name: "Tom Martinez",
        role: "Founder, StartupHub",
        feedback: "This is exactly what we needed to scale our business. The support team is incredibly responsive and helpful.",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%2314b8a6'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='white' font-size='40' font-family='Arial'%3ETM%3C/text%3E%3C/svg%3E"
      }
    ];

    let currentIndex = 0;
    let cardsPerView = 4;

    function updateCardsPerView() {
      const width = window.innerWidth;
      if (width <= 480) {
        cardsPerView = 1;
      } else if (width <= 768) {
        cardsPerView = 2;
      } else if (width <= 1200) {
        cardsPerView = 3;
      } else {
        cardsPerView = 4;
      }
    }

    function renderTestimonials() {
      const track = document.getElementById('carouselTrack');
      track.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
          <img src="${testimonial.image}" alt="${testimonial.name}" class="customer-avatar">
          <div class="rating">
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
          </div>
          <h3 class="customer-name">${testimonial.name}</h3>
          <p class="customer-role">${testimonial.role}</p>
          <p class="customer-feedback">${testimonial.feedback}</p>
        </div>
      `).join('');
    }

    function renderDots() {
      const dotsContainer = document.getElementById('carouselDots');
      const totalPages = Math.ceil(testimonials.length / cardsPerView);
      dotsContainer.innerHTML = Array.from({ length: totalPages }, (_, i) => 
        `<button class="dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to page ${i + 1}"></button>`
      ).join('');

      dotsContainer.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', () => {
          const index = parseInt(dot.dataset.index);
          goToSlide(index);
        });
      });
    }

    function updateCarousel() {
      const track = document.getElementById('carouselTrack');
      const cardWidth = track.querySelector('.testimonial-card').offsetWidth;
      const gap = 24;
      const offset = currentIndex * (cardWidth + gap);
      track.style.transform = `translateX(-${offset}px)`;

      updateButtons();
      updateDots();
    }

    function updateButtons() {
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      const maxIndex = testimonials.length - cardsPerView;

      prevBtn.classList.toggle('disabled', currentIndex === 0);
      nextBtn.classList.toggle('disabled', currentIndex >= maxIndex);
    }

    function updateDots() {
      const dots = document.querySelectorAll('.dot');
      const currentPage = Math.floor(currentIndex / cardsPerView);
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentPage);
      });
    }

    function goToSlide(pageIndex) {
      currentIndex = pageIndex * cardsPerView;
      const maxIndex = testimonials.length - cardsPerView;
      currentIndex = Math.min(currentIndex, maxIndex);
      updateCarousel();
    }

    document.getElementById('prevBtn').addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
      const maxIndex = testimonials.length - cardsPerView;
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
      }
    });

    window.addEventListener('resize', () => {
      const oldCardsPerView = cardsPerView;
      updateCardsPerView();
      if (oldCardsPerView !== cardsPerView) {
        currentIndex = 0;
        renderDots();
        updateCarousel();
      }
    });

    async function onConfigChange(config) {
      const titleElement = document.getElementById('section-title');
      const subtitleElement = document.getElementById('section-subtitle');
      
      titleElement.textContent = config.section_title || defaultConfig.section_title;
      subtitleElement.textContent = config.section_subtitle || defaultConfig.section_subtitle;

      const backgroundColor = config.background_color || defaultConfig.background_color;
      const titleColor = config.title_color || defaultConfig.title_color;
      const cardBackground = config.card_background || defaultConfig.card_background;
      const textColor = config.text_color || defaultConfig.text_color;
      const primaryActionColor = config.primary_action_color || defaultConfig.primary_action_color;
      const customFont = config.font_family || defaultConfig.font_family;
      const baseSize = config.font_size || defaultConfig.font_size;

      document.body.style.background = backgroundColor;
      document.body.style.fontFamily = `${customFont}, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`;

      titleElement.style.fontSize = `${baseSize * 3}px`;
      titleElement.style.color = titleColor;
      subtitleElement.style.fontSize = `${baseSize * 1.25}px`;

      document.querySelectorAll('.testimonial-card').forEach(card => {
        card.style.background = `${cardBackground}`;
      });

      document.querySelectorAll('.customer-name').forEach(name => {
        name.style.color = textColor;
        name.style.fontSize = `${baseSize * 1.25}px`;
      });

      document.querySelectorAll('.customer-feedback').forEach(feedback => {
        feedback.style.fontSize = `${baseSize * 0.9375}px`;
      });

      document.querySelectorAll('.customer-avatar').forEach(avatar => {
        avatar.style.borderColor = primaryActionColor;
      });

      document.querySelectorAll('.testimonial-card').forEach(card => {
        card.style.borderLeftColor = primaryActionColor;
        card.style.borderBottomColor = primaryActionColor;
      });

      document.querySelectorAll('.carousel-button svg').forEach(svg => {
        svg.style.fill = primaryActionColor;
      });

      document.querySelectorAll('.customer-feedback::before').forEach(quote => {
        quote.style.color = primaryActionColor;
      });
    }

    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities: (config) => ({
          recolorables: [
            {
              get: () => config.background_color || defaultConfig.background_color,
              set: (value) => {
                config.background_color = value;
                window.elementSdk.setConfig({ background_color: value });
              }
            },
            {
              get: () => config.title_color || defaultConfig.title_color,
              set: (value) => {
                config.title_color = value;
                window.elementSdk.setConfig({ title_color: value });
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
              get: () => config.primary_action_color || defaultConfig.primary_action_color,
              set: (value) => {
                config.primary_action_color = value;
                window.elementSdk.setConfig({ primary_action_color: value });
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
        }),
        mapToEditPanelValues: (config) => new Map([
          ["section_title", config.section_title || defaultConfig.section_title],
          ["section_subtitle", config.section_subtitle || defaultConfig.section_subtitle]
        ])
      });
    }

    updateCardsPerView();
    renderTestimonials();
    renderDots();
    updateCarousel();
    onConfigChange(defaultConfig);