    function toggleMenu() {
      const navMenu = document.getElementById('navMenu');
      navMenu.classList.toggle('active');
    }

    function scrollToSection(section) {
      // Close mobile menu if open
      const navMenu = document.getElementById('navMenu');
      navMenu.classList.remove('active');
      
      // Update active state
      document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
      
      // For demo purposes - in a real application, this would scroll to the section
      console.log('Navigating to:', section);
    }

    const defaultConfig = {
      company_name: "BIG Logistics India Pvt. Ltd.",
      page_title: "Our Locations Across India",
      head_office_label: "Head Office",
      branch_label: "Branch",
      background_color: "#3d2817",
      card_color: "#ffffff",
      primary_accent: "#f59e0b",
      head_office_accent: "#dc2626",
      text_color: "#1f2937",
      font_family: "Inter"
    };

    async function onConfigChange(config) {
      const companyName = config.company_name || defaultConfig.company_name;
      const pageTitle = config.page_title || defaultConfig.page_title;
      const headOfficeLabel = config.head_office_label || defaultConfig.head_office_label;
      const branchLabel = config.branch_label || defaultConfig.branch_label;
      const backgroundColor = config.background_color || defaultConfig.background_color;
      const cardColor = config.card_color || defaultConfig.card_color;
      const primaryAccent = config.primary_accent || defaultConfig.primary_accent;
      const headOfficeAccent = config.head_office_accent || defaultConfig.head_office_accent;
      const textColor = config.text_color || defaultConfig.text_color;
      const fontFamily = config.font_family || defaultConfig.font_family;
      const fontSize = config.font_size || defaultConfig.font_size || 16;

      document.getElementById('companyName').textContent = companyName;
      document.getElementById('pageTitle').textContent = pageTitle;
      document.getElementById('headOfficeLabel').textContent = headOfficeLabel;
      document.getElementById('branchLabel1').textContent = branchLabel;
      document.getElementById('branchLabel2').textContent = branchLabel;
      document.getElementById('branchLabel3').textContent = branchLabel;

      document.body.style.background = `linear-gradient(135deg, #3d2817 0%, #f59e0b 100%)`;
      
      document.querySelectorAll('.location-card').forEach(card => {
        card.style.background = cardColor;
        card.style.color = textColor;
      });

      document.querySelectorAll('.location-type').forEach(label => {
        label.style.color = primaryAccent;
      });

      document.querySelector('.head-office .location-type').style.color = headOfficeAccent;

      document.querySelectorAll('.location-card').forEach(card => {
        if (!card.classList.contains('head-office')) {
          card.style.borderLeftColor = primaryAccent;
        } else {
          card.style.borderLeftColor = headOfficeAccent;
        }
      });

      const fontStack = `${fontFamily}, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`;
      document.body.style.fontFamily = fontStack;

      document.querySelector('.company-name').style.fontSize = `${fontSize * 2.25}px`;
      document.querySelector('.page-title').style.fontSize = `${fontSize * 1.25}px`;
      document.querySelectorAll('.location-name').forEach(el => el.style.fontSize = `${fontSize * 1.125}px`);
      document.querySelectorAll('.location-address').forEach(el => el.style.fontSize = `${fontSize * 0.875}px`);
      document.querySelectorAll('.location-type').forEach(el => el.style.fontSize = `${fontSize * 0.875}px`);
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
              get: () => config.card_color || defaultConfig.card_color,
              set: (value) => {
                config.card_color = value;
                window.elementSdk.setConfig({ card_color: value });
              }
            },
            {
              get: () => config.primary_accent || defaultConfig.primary_accent,
              set: (value) => {
                config.primary_accent = value;
                window.elementSdk.setConfig({ primary_accent: value });
              }
            },
            {
              get: () => config.head_office_accent || defaultConfig.head_office_accent,
              set: (value) => {
                config.head_office_accent = value;
                window.elementSdk.setConfig({ head_office_accent: value });
              }
            },
            {
              get: () => config.text_color || defaultConfig.text_color,
              set: (value) => {
                config.text_color = value;
                window.elementSdk.setConfig({ text_color: value });
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
            get: () => config.font_size || defaultConfig.font_size || 16,
            set: (value) => {
              config.font_size = value;
              window.elementSdk.setConfig({ font_size: value });
            }
          }
        }),
        mapToEditPanelValues: (config) => new Map([
          ["company_name", config.company_name || defaultConfig.company_name],
          ["page_title", config.page_title || defaultConfig.page_title],
          ["head_office_label", config.head_office_label || defaultConfig.head_office_label],
          ["branch_label", config.branch_label || defaultConfig.branch_label]
        ])
      });
    }
