const button = document.getElementById("useless-button");
const response = document.getElementById("response");
const clickCount = document.getElementById("click-count");
const popSound = document.getElementById("pop-sound");
const milestoneSound = document.getElementById("milestone");


let count = 0;

const messages = [
    "Why are you still clicking?",
    "Gurll Stawp.",
    "What in the actual skibidi is this?",
    "Bfr.",
    "Are'nt your fingers hurting?",
    "IDC..."
];

const milestoneMemes = {
    50:"meme4.jpg",
    100: "meme1.jpg",  
    500: "meme2.jpg",  
    1000: "meme3.jpg" 
}

button.addEventListener("click", () => {
    count++;
    clickCount.textContent = count; // Update the count in the DOM
    popSound.play();

    if (milestoneMemes[count]) {
        // Show meme image
        showMeme(milestoneMemes[count]);
        milestoneSound.play();

    } else {
    if (count === 1) {
        response.textContent = "First click! You’ve started something.";
    } else if (count === 5) {
        response.textContent = "Five clicks! You’re on a roll!";
    } else if (count === 10) {
        response.textContent = "Ten clicks! Are you still okay?";
    }  else if (count === 25) {
        response.textContent = "25 clicks! Time to take a break, maybe?";
    }
     else if (count === 50) {
        response.textContent = "50 clicks! You’ve truly mastered the art of uselessness.";
    }
    else if (count === 101) {
        response.textContent = "100 clicks! Now I think you might wanna do 500.";
    } else if (count === 200) {
        response.textContent = "200? You've some dedication";
    } else if (count === 300) {
        response.textContent = "300... Maybe I hid an Easter egg.";
    } else if (count === 400) {
        response.textContent = "Trust me you don't wanna stop now.";
    } else if (count === 501) {
        response.textContent = "Should I call 911?";
    } else if (count === 999) {
        response.textContent = "New World Record??";
    }
    else if (count === 1001) {
        response.textContent = "Babe just rest now...please...I'm tired";
    }
    else if (count === 1002) {
        response.textContent = "I mean it...";
    } 
    else if (count === 1003) {
        response.textContent = "You know what do whatever you want.";
    }else {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        response.textContent = randomMessage;
        }

    }
   

    if (count === 500) {
        document.body.style.backgroundColor = "#F6EEC9";
       button.style.backgroundColor="#EE4E4E";
    }
    if (count === 1000) {
        document.body.style.backgroundColor = "#EB8317";
       button.style.backgroundColor="#F3C623";
    }

    function showMeme(memeUrl) {
        // Create an image element
        const memeImage = document.createElement("img");
        memeImage.src = memeUrl;
        memeImage.alt = "Meme";
        memeImage.style.position = "absolute";
        memeImage.style.top = "50%";  // Adjust position as needed
        memeImage.style.left = "50%";  // Center horizontally
        memeImage.style.transform = "translate(-50%, -50%)";
        memeImage.style.zIndex = "1000"; // Ensure it's on top
        memeImage.style.maxWidth = "200px"; // Adjust image size
        document.body.appendChild(memeImage);

    // Remove the meme image after 3 seconds (or any duration you prefer)
    setTimeout(() => {
        memeImage.remove();
    }, 4000); // 4000ms = 4 seconds
    }    
});
