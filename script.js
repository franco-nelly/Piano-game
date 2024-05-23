const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider input");

const keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [];

let audio = new Audio("a.wav");// by default audio source is "a"  tune

const playTune = (key)  =>{
    audio.src = `${key}.wav`//passing audio src based on key pressed
    audio.play();//playing audio


    const clickedKey = document.querySelector(`[data-key=${key}]`)//getting clicked key element
    clickedKey.classList.add("active");

    setTimeout(() =>{//removing active class after 150ms from the clicked element
        clickedKey.classList.remove("active");
    }, 150);

}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);//adding data key value to all keys array
    // calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () =>playTune(key.dataset.key));
});


const handleVolume = (e) =>{
    audio.volume = e.target.value;//passing the range slider as an audio volume 
}


const pressedKey = (e) =>{
    //if the pressed key is in the all keys array, only call the playtune function
    if(allKeys.includes(e.key)) playTune(e.key);
}


const showHidekeys = () =>{
    // toggling hide class from each key on the check box click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}


keysCheckbox.addEventListener("click", showHidekeys)
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);