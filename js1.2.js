
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

        // Intersection Observer for triggering animations
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumber = entry.target.querySelector('.stat-number');
                    const progressFill = entry.target.querySelector('.progress-fill');
                    const target = parseInt(statNumber.dataset.target);
                    
                    // Determine suffix and progress percentage
                    let suffix = '+';
                    let progressPercentage = 100;
                    
                    if (entry.target.querySelector('.stat-label').textContent.includes('Repeat Customers')) {
                        suffix = '%';
                        progressPercentage = target;
                    }
                    
                    // Start counter animation
                    animateCounter(statNumber, target, 2500, suffix);
                    
                    // Start progress bar animation
                    animateProgressBar(progressFill, progressPercentage);
                    
                    // Unobserve after animation starts
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all stat boxes
        document.addEventListener('DOMContentLoaded', () => {
            const statBoxes = document.querySelectorAll('.stat-box');
            statBoxes.forEach(box => {
                observer.observe(box);
            });
        });

        // Add some interactive hover effects
        document.querySelectorAll('.stat-box').forEach(box => {
            box.addEventListener('mouseenter', () => {
                const icon = box.querySelector('.stat-icon');
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.transition = 'transform 0.3s ease';
            });
            
            box.addEventListener('mouseleave', () => {
                const icon = box.querySelector('.stat-icon');
                icon.style.transform = 'scale(1) rotate(0deg)';
            });
        });