class VacuumCleaner {
    power = 500;

    constructor(power, isOn, cleaningMode) {
      this.power = power;
      this.isOn = isOn;
      this.cleaningMode = cleaningMode;
    }

    setOn() {
      this.isOn = true;
      return this;
    }

    setOf() {
      this.isOn = false;
      return this;
    }

    changeCleaningMode(mode = 'dry') {
      this.cleaningMode = mode;
      return this;
    }

    getInfo() {
      console.log(`Мощность: ${this.power};\nРежим уборки: ${this.cleaningMode}`);
    }
}

class RobotCleaner extends VacuumCleaner {
    map = false;

    constructor(map, power, isOn, cleaningMode) {
      super(power, isOn, cleaningMode);
      this.map = map;
    }

    scan() {
      this.map = true;
      return this;
    }

    getInfo() {
      super.getInfo();
      console.log(`Карта: ${this.map}`);
    }
}

class RobotSoldier extends RobotCleaner {
  constructor(isFire, map, power, isOn, cleaningMode) {
    super(map, power, isOn, cleaningMode);
    this.isFire = isFire;
  }

  setFireOn() {
    this.isFire = true;
    return this;
  }

  setFireOff() {
    this.isFire = false;
    return this;
  }

  statusOfFire() {
    return this.isFire;
  }

  getInfo() {
    super.getInfo();
    console.log(`Стреляет: ${this.isFire}`);
  }
}

const a = new VacuumCleaner(800, false, 'water');
a.setOf();
console.log(a);
a.setOn();
console.log(a);
a.getInfo();

const b = new RobotCleaner('map', 1500, true, 'dry');
console.log(b);

b.getInfo();

const c = new RobotSoldier(false, false, 2000, false, 'water');

console.log(c);

c.getInfo();
c.statusOfFire();
