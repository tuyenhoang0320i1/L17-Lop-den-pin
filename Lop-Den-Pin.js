class Battery {
    constructor(energy) {
        this.energy = energy;
    }

    setEnergy(energy) {
        this.energy = energy;
    }

    getEnergy() {
        return this.energy;
    }

    decreseEnergy() {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}

class FlashLamp {
    constructor(battery, status) {
        this.battery = battery;
        this.status = status;
    }

    setBattery(battery) {
        this.battery = battery;
    }

    getBatteryInfo() {
        return this.battery.getEnergy();
    }

    light = function () {
        if (this.status) {
            alert("Lighting");
        } else {
            alert("Not lighting");
        }
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }
}

let battery = new Battery();
battery.setEnergy(100);
battery.decreseEnergy();

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

document.write("Battery info: " + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.light();

document.write("Turn on <br/>");
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info: " + flashLamp.getBatteryInfo()+ "<br/>");

document.write("Turn off<br/>");
flashLamp.turnOff();
flashLamp.light();

