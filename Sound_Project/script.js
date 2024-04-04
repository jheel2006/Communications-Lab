document.addEventListener("DOMContentLoaded", function() {
    const introAudio = document.getElementById("intro-audio");
    const startButton = document.getElementById("start-button");
    const muteButton = document.getElementById("mute-button");
    const cover = document.getElementById("cover");
    const soundText = document.getElementById("sound-text");
    const rewindButton = document.getElementById('rewind-button');
    const video = document.getElementById("bg-video");
    const textToType = "What's happening at NYUAD?";
    const typingText = document.getElementById("typing-text");
    const restartButton = document.getElementById("restart-button");
    const forwardButton = document.getElementById("forward-button");
    const credits = document.querySelector(".credits");
    const audioDescription = document.getElementById("audio-description");
    const newForwardButton = document.getElementById("new-forward-button");
    const hoverSound = new Audio("sound/hover-sound.mp3");
    hoverSound.volume=0.1;
    
    // Store the original, hover, play, and pause button image sources
    const playSrc = "img/play_button.png"; 
    const playHoverSrc = "img/play_button_hover.png"; 
    const pauseSrc = "img/pause_button.png"; 
    const pauseHoverSrc = "img/pause_button_hover.png"; 
    const muteSrc = "img/mute.png"; 
    const unmuteSrc = "img/unmute.png";

    startButton.addEventListener("mouseenter", function() {
        hoverSound.play();
    });

    rewindButton.addEventListener("mouseenter", function() {
        hoverSound.play();
    });

    forwardButton.addEventListener("mouseenter", function() {
        hoverSound.play();
    });

    newForwardButton.addEventListener("mouseenter", function() {
        hoverSound.play();
    });

    restartButton.addEventListener("mouseenter", function() {
        hoverSound.play();
    });



    // Function to simulate typing effect
    function typeText() {
        for (let i = 0; i < textToType.length; i++) {
            // Delay each character by 100 milliseconds
            setTimeout(function() {
                // Update the text content of the element
                typingText.textContent += textToType[i];
            }, 100 * i);
        }
    }

    // Call the function to start typing
    typeText();

    function showVideo() {
        // Hide all content before showing the video
        if (introAudio.currentTime >= 171){
            document.getElementById('flower-div').style.display = 'none';
            cover.style.display = 'none';
            document.getElementById('video-container').style.display = 'block';
            video.play();
            video.addEventListener('ended', function() {
                video.currentTime = 0;
                video.play();
            });
        }
    }
        
    introAudio.addEventListener("timeupdate", function() {
        showVideo();
    });
    

    introAudio.addEventListener("ended", function() {
        
        audioDescription.style.display = "block";
        audioDescription.classList.add("fade-in");
        restartButton.style.display = "block";
        newForwardButton.style.display = "block";
    });

    restartButton.addEventListener("click", function() {
        location.reload();
    });

    // Function to update button image based on audio state
    function updateButtonImage() {
        if (introAudio.paused) {
            startButton.src = playSrc;
            startButton.title = "Play";
        } else {    
            startButton.src = pauseSrc;
            startButton.title = "Pause";
        }
    }

    // Update button image initially
    updateButtonImage();

    // Change the image source when hovering over the start button
    startButton.addEventListener("mouseover", function() {
        if (introAudio.paused) {
            startButton.src = playHoverSrc;
        } else {
            startButton.src = pauseHoverSrc;
        }
    });

    // Change back to the original image source when mouse leaves the start button
    startButton.addEventListener("mouseout", function() {
        updateButtonImage();
    });

    // Toggle play/pause functionality on click
    startButton.addEventListener("click", function() {
        if (introAudio.paused) {
            introAudio.play();
        } else {
            introAudio.pause();
        }
        updateButtonImage();
    });

    rewindButton.addEventListener('click', function() {
        introAudio.currentTime = 0;
    });

    // Function to toggle mute/unmute state of the audio
    function toggleMute() {
        introAudio.muted = !introAudio.muted; 
        muteButton.src = introAudio.muted ? muteSrc : unmuteSrc;
        soundText.innerText = introAudio.muted ? "SOUND OFF" : "SOUND ON";
    }

    // Toggle mute/unmute when the mute button is clicked
    muteButton.addEventListener("click", function() {
        toggleMute();
        soundText.innerText = introAudio.muted ? "SOUND OFF" : "SOUND ON";
        soundText.style.display = "inline";
    });

    // function changeBackgroundImage() {
    //     if (introAudio.currentTime >= 30) { 
    //         document.getElementById('flower-div').style.display = 'none';
    //         cover.style.backgroundImage = "url('new.png')"; 
    //     }
    // }

    // introAudio.addEventListener("timeupdate", function() {
    //     changeBackgroundImage();
    // });

    forwardButton.addEventListener("click", function() {
        showCredits();
    });

    newForwardButton.addEventListener("click", function() {
        showCredits();
    });

    function showCredits() {
        introAudio.pause();
        document.getElementById('flower-div').style.display = 'none';
        cover.style.display = 'none';
        document.getElementById('video-container').style.display = 'none';
        audioDescription.style.display = 'none';
        newForwardButton.style.display = 'none';
        credits.style.display = "flex";
        restartButton.style.top= "580px";
        restartButton.style.position="absolute"
        restartButton.style.width="300px";
        restartButton.style.height="100px"
        restartButton.style.left="50%";
        restartButton.style.display = "block";
    }
});
