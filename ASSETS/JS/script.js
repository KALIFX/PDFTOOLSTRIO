const features = [
    {
        title: "Merge PDFs Easily",
        description: "Combine multiple PDFs into one file efficiently.",
        image: "ASSETS/IMAGES/1.png"
    },
    {
        title: "Split Large PDFs",
        description: "Split large PDFs into individual pages or sections.",
        image: "ASSETS/IMAGES/2.png"
    },
    {
        title: "Delete or Add Pages",
        description: "Remove or insert pages into your PDFs with batch support.",
        image: "ASSETS/IMAGES/4.png"
    },
    {
        title: "Insert Header and Footer",
        description: "Add custom headers and footers to your PDF documents.",
        image: "ASSETS/IMAGES/7.png"
    },
    {
        title: "Remove or Replace Text",
        description: "Remove specific text from multiple PDFs or replace it with new text.",
        image: "ASSETS/IMAGES/3.png"
    },
    {
        title: "Word to PDF",
        description: "Convert Word documents to PDF with batch processing support.",
        image: "ASSETS/IMAGES/5.png"
    },
    {
        title: "EPUB to PDF",
        description: "Convert multiple EPUB files to PDF with batch processing support.",
        image: "ASSETS/IMAGES/6.png"
    },
    {
        title: "Lock PDF",
        description: "Protect your PDFs with a password for secure access.",
        image: "ASSETS/IMAGES/8.png"
    },
    {
        title: "Insert/delete Blank Page",
        description: "Insert blank pages into your PDFs at specific locations.",
        image: "ASSETS/IMAGES/9.png"
    }
];


let currentFeature = 0;
const titleElement = document.getElementById("feature-title");
const descriptionElement = document.getElementById("feature-description");
const imgElement = document.getElementById("feature-img");

function updateFeature() {
    imgElement.style.opacity = "0";
    imgElement.style.transform = "translateX(-100%)"; // Move left out

    setTimeout(() => {
        currentFeature = (currentFeature + 1) % features.length;
        titleElement.textContent = features[currentFeature].title;
        descriptionElement.textContent = features[currentFeature].description;
        imgElement.src = features[currentFeature].image;

        imgElement.style.transform = "translateX(0)"; // Move to center
        imgElement.style.opacity = "1";
    }, 1500);
}

// Run every 5 seconds
setInterval(updateFeature, 10000);

document.addEventListener("DOMContentLoaded", function() {
    // Select all download buttons
    const buttons = document.querySelectorAll(".download-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();  // Prevent navigation to Google Drive link immediately

            // Get the associated tool name (normalize it to lowercase for consistency)
            const tool = button.getAttribute("data-tool").toLowerCase();
            if (!tool) return;

            // Select the correct count display based on the tool name
            const countElement = document.querySelector(`.${tool}-count`);
            if (!countElement) return;

            // Get the current count from localStorage
            let count = localStorage.getItem(`${tool}-count`);
            count = count ? parseInt(count, 10) : 0;

            // Increment the count
            count++;
            localStorage.setItem(`${tool}-count`, count);

            // Update the UI
            countElement.textContent = `Downloads: ${count}`;

            // Allow navigation after a short delay (so user sees the change)
            setTimeout(() => {
                window.open(button.href, '_blank');  // Open in a new tab as intended
            }, 500);  // Delay navigation for 500ms
        });

        // Load stored counts on page load
        const tool = button.getAttribute("data-tool");
        if (tool) {
            const countElement = document.querySelector(`.${tool}-count`);
            if (countElement) {
                const savedCount = localStorage.getItem(`${tool}-count`);
                countElement.textContent = `Downloads: ${savedCount ? savedCount : 0}`;
            }
        }
    });
});
