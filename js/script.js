document.addEventListener("DOMContentLoaded", function () {
    const filterTabs = document.querySelectorAll(".filter-tab");
    const eventCards = document.querySelectorAll(".event-card");
    const filterBg = document.createElement("div");
    filterBg.classList.add("filter-bg");
    document.querySelector(".filter-tabs").appendChild(filterBg);

    // Default: Show all cards with animation
    eventCards.forEach(card => {
        card.classList.add("show");
        applyTextAnimation(card); // Apply text animation initially
    });

    filterTabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");

            // Remove active class from all tabs & add to the clicked tab
            filterTabs.forEach((t) => t.classList.remove("active"));
            this.classList.add("active");

            // Move the background highlight
            filterBg.style.transform = `translateX(${index * 100}%)`;

            // Show or hide event cards based on filter
            eventCards.forEach((card) => {
                card.classList.remove("show"); // Hide all cards first
                if (filter === "all" || card.classList.contains(filter)) {
                    card.classList.add("show"); // Show filtered ones
                    applyTextAnimation(card); // Reapply animation
                }
            });
        });
    });

    // Function to apply text animation
    function applyTextAnimation(card) {
        const title = card.querySelector(".event-card-front h4");
        if (title) {
            title.style.animation = "none"; // Reset animation
            void title.offsetWidth; // Force reflow (trick to restart animation)
            title.style.animation = "fadeIn 0.8s ease-in-out"; // Apply animation again
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let currentIndex = 0;
    let isAnimating = false;

    function goToSlide(index) {
        if (isAnimating || index < 0 || index >= totalSlides) return;

        isAnimating = true;
        document.querySelector(".slides").style.transform = `translateX(-${index * 100}vw)`;

        setTimeout(() => {
            isAnimating = false;
        }, 600); // Adjust this timing to match CSS transition
    }

    document.addEventListener("wheel", (event) => {
        if (event.deltaY > 0) {
            goToSlide(currentIndex + 1);
        } else if (event.deltaY < 0) {
            goToSlide(currentIndex - 1);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            goToSlide(currentIndex + 1);
        } else if (event.key === "ArrowLeft") {
            goToSlide(currentIndex - 1);
        }
    });

    goToSlide(0); // Start at first slide
});

