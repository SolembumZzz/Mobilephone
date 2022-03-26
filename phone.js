class Mobilephone {
    constructor(brand) {
        this.brand = brand
        this.isOn = true;
        this.battery = 90;
        this.isCharged = false;
        this.inbox = [];
    }

    switchPower() {
        if (this.isOn) {
            this.isOn = false;
        } else {
            this.isOn = true;
        }
    }

    checkPowerStatus() {
        if (this.isOn) {
            console.log(`Your ${this.brand} is on.`)
        } else {
            console.log(`Your ${this.brand} is off.`)
        }
    }

    getBattery() {
        return this.battery;
    }

    drainBattery() {
        if (this.battery <= 0) {
            console.log('Shutting down');
            this.isOn = false;
        } else {
            this.battery -= 1;
        }
    }

    chargeBattery() {
        this.isCharged = true;
        let chargeInterval = setInterval(function (that) {
            that.battery += 1;
            console.log(that.getBattery());
            if (that.battery >= 100) {
                console.log(`Your ${that.brand} is fully charged.`);
                clearInterval(chargeInterval);
            }
        }, 500, this);
    }

    composeMessage(message, receiver) {
        this.drainBattery();
        receiver.receiveMessage(message);
    }

    receiveMessage(message) {
        this.inbox.push(message);
    }

}

let nokia = new Mobilephone('Nokia');
let iphone9 = new Mobilephone('Iphone');

nokia.chargeBattery();
console.log(nokia);


