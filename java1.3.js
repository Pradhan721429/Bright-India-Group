 // CONFIGURATION - Change this when you add more images
        const TOTAL_IMAGES = 15; // Update this number when adding more images
        
        // Dynamic scroll animation based on image count and screen size
        function updateScrollAnimation() {
            const existingStyle = document.getElementById('dynamic-scroll-styles');
            if (existingStyle) {
                existingStyle.remove();
            }
            
            const style = document.createElement('style');
            style.id = 'dynamic-scroll-styles';
            
            let animationCSS = '';
            
            // Desktop animation (always 50% for seamless loop)
            animationCSS += `
                @keyframes scrollDesktop {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .scroll-track {
                    animation: scrollDesktop 25s linear infinite;
                }
            `;
            
            // Mobile animations with dynamic calculations
            const mobileWidth = 180 + 12; // image width + margin
            const smallMobileWidth = 140 + 10; // image width + margin
            const totalMobileDistance = mobileWidth * TOTAL_IMAGES;
            const totalSmallMobileDistance = smallMobileWidth * TOTAL_IMAGES;
            
            animationCSS += `
                @media (max-width: 768px) {
                    .scroll-track {
                        width: ${mobileWidth * TOTAL_IMAGES * 2}px;
                        animation: scrollMobile 20s linear infinite;
                    }
                    @keyframes scrollMobile {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-${totalMobileDistance}px); }
                    }
                }
                
                @media (max-width: 480px) {
                    .scroll-track {
                        width: ${smallMobileWidth * TOTAL_IMAGES * 2}px;
                        animation: scrollSmallMobile 18s linear infinite;
                    }
                    @keyframes scrollSmallMobile {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-${totalSmallMobileDistance}px); }
                    }
                }
            `;
            
            style.textContent = animationCSS;
            document.head.appendChild(style);
        }
        
        // Initialize animations
        updateScrollAnimation();
        
        // Update animations on window resize
        window.addEventListener('resize', updateScrollAnimation);
        
        // Helper function to add new images dynamically (for future use)
        function addNewImage(imageUrl, altText) {
            const scrollTrack = document.querySelector('.scroll-track');
            const imageCount = scrollTrack.children.length / 2; // Divide by 2 because we have duplicates
            
            // Create new image element
            const newImageItem = document.createElement('div');
            newImageItem.className = 'image-item';
            newImageItem.innerHTML = `<img src="${imageUrl}" alt="${altText}" onerror="this.src=''; this.alt='Image failed to load'; this.style.display='none';">`;
            
            // Add to both sets (original and duplicate)
            const middleIndex = imageCount;
            scrollTrack.insertBefore(newImageItem.cloneNode(true), scrollTrack.children[middleIndex]);
            scrollTrack.appendChild(newImageItem);
            
            // Update the total images count and refresh animations
            // Note: You'll need to manually update TOTAL_IMAGES variable above
            console.log('New image added! Remember to update TOTAL_IMAGES constant.');
        }
