const volume_number = document.getElementById("volume-number");
const volume_slider = document.getElementById("volume-slider");

const audio_source = document.getElementById("horn-sound");
const volume_image = document.getElementById("volume-image");
const form_button = document.getElementById("honk-btn");

const sound_options = document.getElementById("audio-selection");
const air_horn = document.getElementById("radio-air-horn");
const car_horn = document.getElementById("radio-car-horn");
const party_horn = document.getElementById("radio-party-horn");

const audio_icon = document.getElementById("sound-image");
const input_form = document.getElementById("party-horn-form");

// when number input changes
volume_number.addEventListener("input", update_slider);
function update_slider() {
    volume_slider.value = volume_number.value;
    update_volume(volume_number.value);
}

// when slider input changes
volume_slider.addEventListener("input", update_number);
function update_number() {
    volume_number.value = volume_slider.value;
    update_volume(volume_slider.value);
}

// when either number or slider input changes

function update_volume(volume) {
    audio_source.volume = volume / 100;
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

function update_volume_icon(icon_path) {
    volume_image.src = icon_path;
}

function update_button(value) {
    form_button.disabled = value;
}

// when radio switch is changed
sound_options.addEventListener("input", update_horn);
function update_horn() {
    if (air_horn.checked) {
        update_audio("./assets/media/images/air-horn.svg", "./assets/media/audio/air-horn.mp3");
    } else if (car_horn.checked) {
        update_audio("./assets/media/images/car.svg", "./assets/media/audio/car-horn.mp3");
    } else if (party_horn.checked) {
        update_audio("./assets/media/images/party-horn.svg", "./assets/media/audio/party-horn.mp3");
    }
}

function update_audio(icon, source) {
    audio_icon.src = icon;
    audio_source.src = source;

}

// when button is pressed
input_form.addEventListener("submit", update_form)
function update_form(event) {
    event.preventDefault();
    audio_file.play();
}