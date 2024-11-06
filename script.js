// Array to store positions (name and image URL)
const positions = [
    {
        name: "Rider",
        image: "https://i.ibb.co/fny0c8z/The-Rider.webp"
    },
    {
        name: "Doggy Style",
        image: "https://i.ibb.co/Qby1fG7/doggystyle-sex-77.webp"
    },
    {
        name: "Cowgirl",
        image: "https://i.ibb.co/Dt3hqnR/cowgirl-position-3.gif"
    },
    {
        name: "SKamasutra Lotus",
        image: "https://i.ibb.co/7bgJYph/Kamasutra-Lotus.webp"
    },
    {
        name: "Reverse Cowgirl",
        image: "https://i.ibb.co/Vqj9k2V/Em-Cowgirl.webp"
    },
    {
        name: "Leg Lock",
        image: "https://i.ibb.co/g3chJbp/leglock.webp"
    },
    {
        name: "Pretzel",
        image: "https://i.ibb.co/TtR46Pp/pretzel.gif"
    },
    {
        name: "Hot Seat",
        image: "https://i.ibb.co/6tTfbkV/deep-penetration-sex-99.gif"
    },
    {
        name: "The Eagle",
        image: "https://i.ibb.co/9vW4Gyh/missionary-sex-position-04.webp"
    },
    {
        name: "Face Down, Ass Up",
        image: "https://i.ibb.co/6H0vL1m/Face-Down-Ass-Up.webp"
    },
    {
        name: "Prone Bone",
        image: "https://i.ibb.co/RzBb400/Prone-Bone.webp"
    },
    {
        name: "Missionary With A Pillow",
        image: "https://i.ibb.co/gvtGRN3/missionary-with-pillow.webp"
    },
    {
        name: "Lap Dance",
        image: "https://i.ibb.co/VVrHG4w/lap-dance.webp"
    },
    {
        name: "Eagle Position",
        image: "https://i.ibb.co/XYY9B43/eagle-position.webp"
    },
    {
        name: "Double Decker",
        image: "https://i.ibb.co/WkSWHk2/Double-Decker.webp"
    },
    {
        name: "Legs Up",
        image: "https://i.ibb.co/dp6VYjq/legsup.webp"
    }
];

// Function to get a random position
function getRandomPosition() {
    const randomIndex = Math.floor(Math.random() * positions.length);
    return positions[randomIndex];
}

// Display the random position
function displayRandomPosition() {
    const position = getRandomPosition();
    const positionName = document.getElementById('positionName');
    const positionImage = document.getElementById('positionImage');
    const positionDisplay = document.getElementById('positionDisplay');
    const surpriseText = document.getElementById('surpriseText'); // Get the "Surprise Yourself!" text

    // Hide "Surprise Yourself!" text when button is clicked
    surpriseText.style.display = 'none'; // This hides the text

    // Set the position details
    positionName.textContent = position.name;
    positionImage.src = position.image;
    positionDisplay.style.display = 'block'; // Make the position display visible
}

// Reset to initial state (hide position details)
function resetPosition() {
    const positionName = document.getElementById('positionName');
    const positionImage = document.getElementById('positionImage');
    const positionDisplay = document.getElementById('positionDisplay');
    const surpriseText = document.getElementById('surpriseText'); // Get the "Surprise Yourself!" text

    // Show "Surprise Yourself!" again when refreshed
    surpriseText.style.display = 'block'; // This shows the text again

    positionName.textContent = "Click 'Select for the Moment' to get a position";
    positionImage.src = "";
    positionDisplay.style.display = 'none'; // Hide the position display
}

// Button functionality
document.getElementById('randomPositionBtn').addEventListener('click', displayRandomPosition);
document.getElementById('refreshBtn').addEventListener('click', resetPosition);
