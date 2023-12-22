const lightSwitch = document.querySelector(".inner--switch");
const roomShadow = document.querySelector(".shadow");

const bulbTop = document.querySelector(".bulb--neck");
const bulbBerry = document.querySelector(".bulb--berry");

toggleOnAndOff();
let lightsOn = false;

function toggleOnAndOff() {
  lightSwitch.addEventListener("click", () => {
    lightsOn = !lightsOn;
    bulbOff();
    if (lightsOn === false) {
      console.log(lightsOn);
    } else if (lightsOn === true) {
      bulbOn();
    }
  });
}

function bulbOn() {
  lightSwitch.classList.add("switch--on");
  lightSwitch.classList.remove("switch--off");
  bulbTop.classList.add("lights--on");
  bulbBerry.classList.add("lights--on");
  roomShadow.classList.remove("hidden");
}

function bulbOff() {
  lightSwitch.classList.add("switch--off");
  lightSwitch.classList.remove("switch--on");
  bulbTop.classList.remove("lights--on");
  bulbBerry.classList.remove("lights--on");
  roomShadow.classList.add("hidden");
}
