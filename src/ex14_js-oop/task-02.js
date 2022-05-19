class ElectricalDevices {
    power = 500;

    isOn = false;

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

const pc = new LivingRoomDevice(900, false, 'MyPC', true);
const tv = new LivingRoomDevice(600, true, 'TV', true);
const electricLamp = new LivingRoomDevice(100, true, 'Lamp 1', true);

console.log(pc);
console.log(tv);
console.log(electricLamp);

const myRoom = new Room(5, 4, [pc, tv, electricLamp]);

console.log(myRoom);

myRoom.listOfDevices();

myRoom.powerСonsumption();
