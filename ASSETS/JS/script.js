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
        button.addEventListener("click", function (event) {
            event.preventDefault();
            pendingDownloadLink = event.currentTarget.href;

            console.log("Showing overlay");
            overlay.classList.remove("overlay-hidden");
            overlay.classList.add("overlay-visible");

            // Disable clicks on the background
            document.body.classList.add("no-clicks");

            const countElement = document.querySelector(".download-count");
            let count = localStorage.getItem("download-count");
            count = count ? parseInt(count, 10) : 0;
            count++;
            localStorage.setItem("download-count", count);
            countElement.textContent = `Downloads: ${count}`;
        });
    });

    closeOverlayBtn.addEventListener("click", function () {
        console.log("Closing overlay");
        overlay.classList.remove("overlay-visible");
        overlay.classList.add("overlay-hidden");

        // Enable clicks back to the background
        document.body.classList.remove("no-clicks");

        if (pendingDownloadLink) {
            window.open(pendingDownloadLink, '_blank');
            pendingDownloadLink = null;
        }
    });

    const savedCount = localStorage.getItem("download-count");
    if (savedCount) {
        document.querySelector(".download-count").textContent = `Downloads: ${savedCount}`;
    }
});
