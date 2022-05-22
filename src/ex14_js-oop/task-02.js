/* eslint-disable no-unused-vars */
class ElectricalDevices {
  constructor(power, isOn, name) {
    this.power = power;
    this.isOn = isOn;
    this.name = name;
  }

  setState(bool) {
    this.isOn = bool;
  }

  about() {
    console.log(`Мощность ${this.power}`);
    console.log(`Включен: ${this.isOn ? 'да' : 'нет'}`);
  }
}

class LivingRoomDevice extends ElectricalDevices {
  constructor(power, isOn, name, isFunny) {
    super(power, isOn, name);
    this.isFunny = isFunny;
  }

  isFunny() {
    return this.isFunny;
  }
}

class KitchenDevice extends LivingRoomDevice {
  constructor(power, isOn, name, isFunny, canCook) {
    super(power, isOn, name, isFunny, canCook);
    this.canCook = canCook;
  }

  canCook() {
    if (this.canCook) {
      console.log('I can cook for you a very delicious food... or not very =)');
    } else {
      console.log('Sorry, but this device can not cooking');
    }
  }
}

class BathroomDevice extends ElectricalDevices {
  constructor(power, isOn, name, isWaterProtect) {
    super(power, isOn, name, isWaterProtect);
    this.isWaterProtect = isWaterProtect;
  }

  isWaterProtect() {
    if (this.isWaterProtect) {
      console.log('You can use me here safely');
    } else {
      console.log('DANGEROUS!!!!');
    }
  }
}

class Room {
  constructor(sockets, walls, devices) {
    this.sockets = sockets;
    this.walls = walls;
    this.devices = devices;
  }

  listOfDevices() {
    if (this.devices.length > 0) {
      this.devices.forEach((device) => console.log(device.name));
    } else console.log('empty');
  }

  powerСonsumption() {
    let allPower = 0;
    if (this.devices.length > 0) {
      this.devices.forEach((device) => {
        if (device.isOn) {
          allPower += device.power;
        }
      });
    }
    console.log('Потребляемая мощность = ', allPower);
  }
}

class Bathroom extends Room {
  isDeviceHasProtect() {
    if (this.devices.length > 0) {
      this.devices.forEach((device) => {
        if (device.isWaterProtect) {
          console.log(`This device(${this.device.name}) has protect, you can use it here`);
        } else {
          console.log(`DANGER!!! You can die if you use ${this.device.name} here`);
        }
      });
    }
  }
}
