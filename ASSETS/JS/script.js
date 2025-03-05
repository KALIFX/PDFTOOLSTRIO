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
        title: "Split or Large PDFs",
        description: "Split large PDFs into individual pages or sections.",
        image: "ASSETS/IMAGES/2.png"
    },
	{
        title: "Remove or Replace Text",
        description: "Remove specific text from multiple PDFs or replace it with new text.",
        image: "ASSETS/IMAGES/3.png"
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

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".download-btn");

    buttons.forEach(button => {
        const tool = button.getAttribute("data-tool");
        const countElement = document.getElementById(`${tool}-count`);
        let count = localStorage.getItem(`${tool}-downloads`) || 0;

        countElement.textContent = `Downloads: ${count}`;

        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent actual download (remove this if real downloads exist)
            count++;
            localStorage.setItem(`${tool}-downloads`, count);
            countElement.textContent = `Downloads: ${count}`;
        });
    });
});

