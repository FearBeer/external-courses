/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
function VacuumCleaner(power, isOn, cleaningMode) {
  this.power = power;
  this.isOn = isOn;
  this.cleaningMode = cleaningMode;

  this.setOn = function () {
    this.isOn = true;
    return this;
  };

  this.setOf = function () {
    this.isOn = false;
    return this;
  };

  this.changeCleaningMode = function (mode = 'dry') {
    this.cleaningMode = mode;
    return this;
  };

  this.getInfo = function () {
    console.log(`Мощность: ${this.power};\nРежим уборки: ${this.cleaningMode}`);
  };
}

function RobotCleaner(map, ...args) {
  VacuumCleaner.apply(this, [...args]);
  this.map = map;

  this.scan = function () {
    this.map = true;
    return this;
  };

  const parentsGetInfo = this.getInfo;
  this.getInfo = function () {
    parentsGetInfo.call(this);
    console.log(`Карта: ${this.map}`);
  };
}

function RobotSoldier(isFire, ...args) {
  RobotCleaner.apply(this, [...args]);
  this.isFire = isFire;

  this.setFireOn = function () {
    this.isFire = true;
    return this;
  };

  this.setFireOff = function () {
    this.isFire = false;
    return this;
  };

  this.statusOfFire = function () {
    return this.isFire;
  };

  const parentsGetInfo = this.getInfo;
  this.getInfo = function () {
    parentsGetInfo.call(this);
    console.log(`Стреляет: ${this.isFire}`);
  };
}
