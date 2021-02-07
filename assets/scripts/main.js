let volume_number = document.getElementById("volume-number");
let volume_slider = document.getElementById("volume-slider");

// when number input changes
volume_number.addEventListener("input", update_slider());
function update_slider() {
    volume_slider.value = volume_number.value;
    update_volume(volume_number.value);
}

// when slider input changes
volume_slider.addEventListener("input", update_number());
function update_number() {
    volume_number.value = volume_slider.value;
    update_volume(volume_slider.value);
}

// when either number or slider input changes
let volume_icon = document.getElementById("volume-number");
function update_volume(volume) {
    volume_icon.volume = volume;
    if (66 < volume) {
        update_volume_icon("./assets/media/icons/volume-level-3.svg");
        update_button(false);
    } else if (33 < volume) {
        update_volume_icon("./assets/media/icons/volume-level-2.svg");
        update_button(false);
    } else if (0 < volume) {
        update_volume_icon("./assets/media/icons/volume-level-1.svg");
        update_button(false);
    } else {
        update_volume_icon("./assets/media/icons/volume-level-0.svg");
        update_button(true);
    }
}

let volume_image = document.getElementById("volume-image");
function update_volume_icon(icon_path) {
    volume_image.src = icon_path;
}

let form_button = document.getElementById("honk-btn");
function update_button(value) {
    form_button.disabled = value;
}

// when radio switch is changed
let sound_options = document.getElementById("audio-selection");
let air_horn = document.getElementById("radio-air-horn");
let car_horn = document.getElementById("radio-car-horn");
let party_horn = document.getElementById("radio-party-horn");

sound_options.addEventListener("input", update_horn());
function update_horn() {
    if (air_horn.checked) {
        update_audio("./assets/media/images/air-horn.svg", "./assets/media/audio/air-horn.mp3");
    } else if (car_horn.checked) {
        update_audio("./assets/media/images/car.svg", "./assets/media/audio/car-horn.mp3");
    } else if (party_horn.checked) {
        update_audio("./assets/media/images/party-horn.svg", "./assets/media/audio/party-horn.mp3");
    }
}

let audio_icon = document.getElementById("sound-image");
let audio_source = document.getElementById("horn-sound");
function update_audio(icon, source) {
    audio_icon.src = icon;
    audio_source.src = source;

}

// when button is pressed
let input_form = document.getElementById("party-horn-form");
input_form.addEventListener("submit", update_form())
function update_form(event) {
    event.preventDefault();
    audio_file.play();
}