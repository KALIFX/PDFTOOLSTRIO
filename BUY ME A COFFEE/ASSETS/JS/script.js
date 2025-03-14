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
    },
	{
        title: "WORD TO PDF",
		description: "Convert Word documents to PDF with batch processing support.",
		image: "ASSETS/IMAGES/5.png"
    },
	{
        title: "EPUB TO PDF",
		description: "Convert multiple EPUB files to PDF with batch processing support.",
		image: "ASSETS/IMAGES/6.png"
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
    let converterCount = localStorage.getItem('converter-count') || 0; // Added this line

    // Update the download count displays for each tool
    document.querySelector('.merge-count').textContent = `Downloads: ${mergeCount}`;
    document.querySelector('.delete-count').textContent = `Downloads: ${deleteCount}`;
    document.querySelector('.remove-count').textContent = `Downloads: ${removeCount}`;
    document.querySelector('.converter-count').textContent = `Downloads: ${converterCount}`; // Added this line

    // Add event listeners to all download buttons
    const downloadButtons = document.querySelectorAll('.download-btn');

    downloadButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const tool = button.getAttribute('data-tool');
            
            // Increment the correct count based on the clicked button
            if (tool === 'delete') {
                deleteCount++;
                localStorage.setItem('delete-count', deleteCount);
                document.querySelector('.delete-count').textContent = `Downloads: ${deleteCount}`;
            } else if (tool === 'remove') {
                removeCount++;
                localStorage.setItem('remove-count', removeCount);
                document.querySelector('.remove-count').textContent = `Downloads: ${removeCount}`;
            } else if (tool === 'merge') {
                mergeCount++;
                localStorage.setItem('merge-count', mergeCount);
                document.querySelector('.merge-count').textContent = `Downloads: ${mergeCount}`;
            } else if (tool === 'converter') {
                converterCount++; // Corrected variable name
                localStorage.setItem('converter-count', converterCount); // Corrected saving key
                document.querySelector('.converter-count').textContent = `Downloads: ${converterCount}`; // Corrected display update
            }
        });
    });
});


