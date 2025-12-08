
        const galleryData = [
            {
                id: 1,
                category: 'warehouse',
                title: 'Modern Warehouse Facility',
                description: 'Our state-of-the-art 30,000 sq ft warehouse with advanced inventory management systems',
                image: './img/w1.jpg'
            },
            {
                id: 2,
                category: 'Exhibition',
                title: 'Heavy Duty Transport Trucks',
                description: 'Our fleet of modern trucks ensuring timely delivery across the country',
                image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23fff3e0" width="800" height="600"/%3E%3Cpath fill="%23ff6f00" d="M100 300h400v150H100z"/%3E%3Cpath fill="%23e65100" d="M500 320h150v130H500z"/%3E%3Ccircle fill="%23424242" cx="200" cy="480" r="40"/%3E%3Ccircle fill="%23424242" cx="580" cy="480" r="40"/%3E%3Cpath fill="%23d32f2f" d="M520 340h100v60H520z"/%3E%3Ctext x="400" y="550" text-anchor="middle" font-size="24" fill="%23333"%3EBIG Logistics Fleet%3C/text%3E%3C/svg%3E'
            },
            {
                id: 3,
                category: 'operations',
                title: 'Cargo Loading Operations',
                description: 'Efficient loading operations with trained personnel and modern equipment',
                image: './img/o1.jpg'
            },
            {
                id: 4,
                category: 'team',
                title: 'Our Dedicated Team',
                description: 'Experienced professionals committed to excellence in logistics',
                image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23f3e5f5" width="800" height="600"/%3E%3Ccircle fill="%239c27b0" cx="250" cy="250" r="60"/%3E%3Cpath fill="%239c27b0" d="M250 330c-50 0-90 40-90 90v50h180v-50c0-50-40-90-90-90z"/%3E%3Ccircle fill="%237b1fa2" cx="400" cy="250" r="60"/%3E%3Cpath fill="%237b1fa2" d="M400 330c-50 0-90 40-90 90v50h180v-50c0-50-40-90-90-90z"/%3E%3Ccircle fill="%234a148c" cx="550" cy="250" r="60"/%3E%3Cpath fill="%234a148c" d="M550 330c-50 0-90 40-90 90v50h180v-50c0-50-40-90-90-90z"/%3E%3Ctext x="400" y="550" text-anchor="middle" font-size="24" fill="%23333"%3ETeam Excellence%3C/text%3E%3C/svg%3E'
            },
            {
                id: 5,
                category: 'port',
                title: 'Port Container Handling',
                description: 'Seamless port operations for import and export cargo',
                image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23e1f5fe" width="800" height="600"/%3E%3Crect fill="%2301579b" y="400" width="800" height="200"/%3E%3Crect fill="%23d32f2f" x="100" y="280" width="120" height="120"/%3E%3Crect fill="%23388e3c" x="240" y="280" width="120" height="120"/%3E%3Crect fill="%23f57c00" x="380" y="280" width="120" height="120"/%3E%3Crect fill="%231976d2" x="520" y="280" width="120" height="120"/%3E%3Cpath fill="%23616161" d="M200 150h50v250h-50z"/%3E%3Cpath fill="%23757575" d="M100 150h250v30H100z"/%3E%3Ctext x="400" y="550" text-anchor="middle" font-size="24" fill="%23fff"%3EPort Operations%3C/text%3E%3C/svg%3E'
            },
            {
                id: 6,
                category: 'warehouse',
                title: 'Automated Storage Systems',
                description: 'High-density automated storage and retrieval systems for efficiency',
                image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23fce4ec" width="800" height="600"/%3E%3Crect fill="%23c2185b" x="100" y="150" width="600" height="350"/%3E%3Crect fill="%23880e4f" x="100" y="150" width="200" height="350"/%3E%3Crect fill="%23fff" x="120" y="200" width="40" height="60"/%3E%3Crect fill="%23fff" x="180" y="200" width="40" height="60"/%3E%3Crect fill="%23fff" x="120" y="280" width="40" height="60"/%3E%3Crect fill="%23fff" x="180" y="280" width="40" height="60"/%3E%3Crect fill="%23fff" x="120" y="360" width="40" height="60"/%3E%3Crect fill="%23fff" x="180" y="360" width="40" height="60"/%3E%3Ctext x="400" y="550" text-anchor="middle" font-size="24" fill="%23333"%3EAutomated Storage%3C/text%3E%3C/svg%3E'
            },
            {
                id: 7,
                category: 'Exhibition',
                title: 'Refrigerated Transport',
                description: 'Temperature-controlled vehicles for perishable goods transportation',
                image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23e0f2f1" width="800" height="600"/%3E%3Cpath fill="%2300897b" d="M100 280h450v180H100z"/%3E%3Cpath fill="%23004d40" d="M550 300h100v160H550z"/%3E%3Ccircle fill="%23424242" cx="200" cy="490" r="40"/%3E%3Ccircle fill="%23424242" cx="600" cy="490" r="40"/%3E%3Cpath fill="%2300bcd4" d="M150 300h350v140H150z"/%3E%3Ctext x="325" y="380" text-anchor="middle" font-size="40" fill="%23fff"%3E❄️%3C/text%3E%3Ctext x="400" y="560" text-anchor="middle" font-size="24" fill="%23333"%3ECold Chain Transport%3C/text%3E%3C/svg%3E'
            },
            {
                id: 8,
                category: 'operations',
                title: 'Heavy Machinery Handling',
                description: 'Lifting heavy machine using 5T forklift at GTE Ahmedabad',
                image: './img/Onsite_G.jpeg'
            },
            {
                id: 9,
                category: 'team',
                title: 'Training & Development',
                description: 'Continuous training programs to maintain highest service standards',
                image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23e8eaf6" width="800" height="600"/%3E%3Crect fill="%233f51b5" x="150" y="200" width="500" height="300"/%3E%3Crect fill="%23fff" x="200" y="250" width="180" height="120"/%3E%3Crect fill="%23fff" x="420" y="250" width="180" height="120"/%3E%3Cpath fill="%23ff9800" d="M350 400l50 50 50-50z"/%3E%3Ccircle fill="%23ffc107" cx="290" cy="300" r="30"/%3E%3Ccircle fill="%23ffc107" cx="510" cy="300" r="30"/%3E%3Ctext x="400" y="540" text-anchor="middle" font-size="24" fill="%23333"%3ETraining Excellence%3C/text%3E%3C/svg%3E'
            },
            {
                id: 10,
                category: 'port',
                title: 'Container Ship Operations',
                description: 'International shipping operations connecting global markets',
                image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23bbdefb" width="800" height="600"/%3E%3Crect fill="%2301579b" y="350" width="800" height="250"/%3E%3Cpath fill="%23546e7a" d="M200 280l200 70v100H200z"/%3E%3Crect fill="%23d32f2f" x="220" y="220" width="60" height="60"/%3E%3Crect fill="%23388e3c" x="290" y="220" width="60" height="60"/%3E%3Crect fill="%23f57c00" x="220" y="290" width="60" height="60"/%3E%3Crect fill="%231976d2" x="290" y="290" width="60" height="60"/%3E%3Cpath fill="%23fff" d="M420 200l30 150h100l-30-150z"/%3E%3Ctext x="400" y="560" text-anchor="middle" font-size="24" fill="%23fff"%3EShipping Operations%3C/text%3E%3C/svg%3E'
            },
            {
                id: 11,
                category: 'warehouse',
                title: 'Inventory Management Center',
                description: 'Real-time inventory tracking with advanced barcode systems',
                image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23f1f8e9" width="800" height="600"/%3E%3Crect fill="%23689f38" x="150" y="150" width="500" height="350"/%3E%3Crect fill="%23fff" x="200" y="200" width="150" height="250"/%3E%3Crect fill="%23000" x="210" y="220" width="10" height="200"/%3E%3Crect fill="%23000" x="230" y="220" width="5" height="200"/%3E%3Crect fill="%23000" x="245" y="220" width="15" height="200"/%3E%3Crect fill="%23000" x="270" y="220" width="8" height="200"/%3E%3Crect fill="%23000" x="288" y="220" width="12" height="200"/%3E%3Ctext x="400" y="540" text-anchor="middle" font-size="24" fill="%23333"%3EInventory Control%3C/text%3E%3C/svg%3E'
            },
            {
                id: 12,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 13,
                category: 'operations',
                title: 'Machine Placing',
                description: 'Placing ponderous machine in exhibition stand at CPHI/PMEC Noida',
                image: './img/Onsite_Pmec.jpg'
            },
            {
                id: 14,
                category: 'operations',
                title: 'Air Cargo Operations',
                description: 'Express air freight services for time-sensitive shipments',
                image: './img/onsite_gte.gif'
            },
            {
                id: 15,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 16,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 17,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 18,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 19,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 20,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 21,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 22,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 23,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 24,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 25,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 26,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 27,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 28,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 29,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 30,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 31,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 32,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 33,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 34,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 35,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 36,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 37,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 38,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 39,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 40,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 41,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 42,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 43,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 44,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 45,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 46,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 47,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 48,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 49,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 50,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },
            {
                id: 51,
                category: 'operations',
                title: 'Machine shifting',
                description: 'Shifting machine from truck to exhibition stand at GTE Ahmedabad',
                image: './img/F1.jpeg'
            },

        ];

        let currentFilter = 'all';
        let currentImageIndex = 0;
        let filteredGallery = [...galleryData];

        // DOM Elements
        const galleryGrid = document.getElementById('gallery-grid');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const lightboxModal = document.getElementById('lightbox-modal');
        const modalImage = document.getElementById('modal-image');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const modalCounter = document.getElementById('modal-counter');
        const closeModalBtn = document.getElementById('close-modal');
        const prevImageBtn = document.getElementById('prev-image');
        const nextImageBtn = document.getElementById('next-image');
        const noResults = document.getElementById('no-results');

        // Initialize gallery
        function initGallery() {
            renderGallery(galleryData);
        }

        // Render gallery items
        function renderGallery(items) {
            galleryGrid.innerHTML = '';
            
            if (items.length === 0) {
                noResults.classList.remove('hidden');
                return;
            }
            
            noResults.classList.add('hidden');
            
            items.forEach((item, index) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = `gallery-item bg-white shadow-lg h-80 fade-in-up stagger-${(index % 12) + 1}`;
                galleryItem.dataset.category = item.category;
                galleryItem.dataset.index = index;
                
                galleryItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                    <div class="gallery-overlay">
                        <h3 class="text-white font-bold text-xl mb-2">${item.title}</h3>
                        <p class="text-gray-200 text-sm">${item.description}</p>
                        <span class="category-badge">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                    </div>
                `;
                
                galleryItem.addEventListener('click', () => openLightbox(index));
                galleryGrid.appendChild(galleryItem);
            });
        }

        // Filter functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                currentFilter = filter;
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter gallery
                if (filter === 'all') {
                    filteredGallery = [...galleryData];
                } else {
                    filteredGallery = galleryData.filter(item => item.category === filter);
                }
                
                renderGallery(filteredGallery);
            });
        });

        // Open lightbox
        function openLightbox(index) {
            currentImageIndex = index;
            updateLightboxContent();
            lightboxModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close lightbox
        function closeLightbox() {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Update lightbox content
        function updateLightboxContent() {
            const item = filteredGallery[currentImageIndex];
            modalImage.src = item.image;
            modalTitle.textContent = item.title;
            modalDescription.textContent = item.description;
            modalCounter.textContent = `${currentImageIndex + 1} / ${filteredGallery.length}`;
        }

        // Navigate to previous image
        function previousImage() {
            currentImageIndex = (currentImageIndex - 1 + filteredGallery.length) % filteredGallery.length;
            updateLightboxContent();
        }

        // Navigate to next image
        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % filteredGallery.length;
            updateLightboxContent();
        }

        // Event listeners
        closeModalBtn.addEventListener('click', closeLightbox);
        prevImageBtn.addEventListener('click', previousImage);
        nextImageBtn.addEventListener('click', nextImage);

        // Close modal when clicking outside
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                closeLightbox();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!lightboxModal.classList.contains('active')) return;
            
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                previousImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            }
        });

        // Initialize
        initGallery();

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // Animate menu button
            const icon = mobileMenuBtn.querySelector('svg');
            if (mobileMenu.classList.contains('hidden')) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
            }
        });

        // Close mobile menu when clicking a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('svg');
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
            });
        });

        // Active navigation link highlighting
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                navLinks.forEach(l => l.classList.remove('bg-blue-600', 'text-white'));
                this.classList.add('bg-blue-600', 'text-white');
            });
        });