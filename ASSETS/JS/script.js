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

document.addEventListener("DOMContentLoaded", function() {
    // Initialize download counts for each tool from localStorage (defaults to 0 if not found)
    let mergeCount = localStorage.getItem('merge-count') || 0;
    let deleteCount = localStorage.getItem('delete-count') || 0;
    let removeCount = localStorage.getItem('remove-count') || 0;

    // Update the download count displays for each tool
    document.querySelector('.merge-count').textContent = `Downloads: ${mergeCount}`;
    document.querySelector('.delete-count').textContent = `Downloads: ${deleteCount}`;
    document.querySelector('.remove-count').textContent = `Downloads: ${removeCount}`;

    // Add event listeners to all download buttons
    const downloadButtons = document.querySelectorAll('.download-btn');

    downloadButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const tool = button.getAttribute('data-tool');
            
            // Increment the correct count based on the clicked button
            if (tool === 'delete') {
                deleteCount++; // Increment delete count
                localStorage.setItem('delete-count', deleteCount); // Save updated count to localStorage
                document.querySelector('.delete-count').textContent = `Downloads: ${deleteCount}`; // Update display
            } else if (tool === 'remove') {
                removeCount++; // Increment remove count
                localStorage.setItem('remove-count', removeCount); // Save updated count to localStorage
                document.querySelector('.remove-count').textContent = `Downloads: ${removeCount}`; // Update display
            } else if (tool === 'merge') {
                mergeCount++; // Increment merge count
                localStorage.setItem('merge-count', mergeCount); // Save updated count to localStorage
                document.querySelector('.merge-count').textContent = `Downloads: ${mergeCount}`; // Update display
            }
        });
    });
});


