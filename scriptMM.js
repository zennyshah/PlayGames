window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");

    //store color codes in the array to make bubbles of the same color
    const colors = [
        "#00b953",
        "#ffa6a6",
        "#d400ff",
        "#979500",
        "#7482ff",
        "#60c2d3"
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            //set current time to 0 to play sounds multiple times rather than wait it to complete and play it again
            sounds[index].currentTime = 0;
            //play the music
            sounds[index].play();
            //craete bubble function called
            createBubble(index);
        });
    });


    //create a func that makes bubbles

    const createBubble = index => {


        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
        });

    };
});