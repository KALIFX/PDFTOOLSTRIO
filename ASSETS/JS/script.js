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
    imgElement.style.transform = "translateX(-100%)";

    setTimeout(() => {
        currentFeature = (currentFeature + 1) % features.length;
        titleElement.textContent = features[currentFeature].title;
        descriptionElement.textContent = features[currentFeature].description;
        imgElement.src = features[currentFeature].image;

        imgElement.style.transform = "translateX(0)";
        imgElement.style.opacity = "1";
    }, 1500);
}

if (titleElement && descriptionElement && imgElement) {
    setInterval(updateFeature, 10000);
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".download-btn");
    const overlay = document.getElementById("coffee-overlay");
    const closeOverlayBtn = document.getElementById("close-overlay");

    let pendingDownloadLink = null;

    buttons.forEach(button => {
        // Get the count element for the specific button (using the sibling p element)
        const countElement = button.closest('.button-download-wrapper').querySelector(".download-count");

        // Initialize the download count for each button based on localStorage
        const buttonId = button.href;  // Use the href to uniquely identify each button
        let savedCount = localStorage.getItem(buttonId);
        savedCount = savedCount ? parseInt(savedCount, 10) : 0;
        countElement.textContent = `Downloads: ${savedCount}`;

        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default action (e.g., navigation)
            pendingDownloadLink = event.currentTarget.href; // Store the download link

            console.log("Showing overlay");
            overlay.classList.remove("overlay-hidden");
            overlay.classList.add("overlay-visible");

            // Disable clicks on the background (overlay active)
            document.body.classList.add("no-clicks");

            // Get the current count for this specific download link from localStorage
            let count = localStorage.getItem(buttonId);
            count = count ? parseInt(count, 10) : 0;
            count++;

            // Update the count in localStorage and the display for the specific button
            localStorage.setItem(buttonId, count);
            countElement.textContent = `Downloads: ${count}`;
        });
    });

    closeOverlayBtn.addEventListener("click", function () {
        console.log("Closing overlay");
        overlay.classList.remove("overlay-visible");
        overlay.classList.add("overlay-hidden");

        // Enable clicks back to the background when overlay is hidden
        document.body.classList.remove("no-clicks");

        // Open the pending download link in a new tab if it's set
        if (pendingDownloadLink) {
            window.open(pendingDownloadLink, '_blank');
            pendingDownloadLink = null; // Reset after opening the link
        }
    });
});

