let Receipt = class Receipt {
  constructor() {
    this.text = '';
    this.numberOfA = 0;
    this.numberOfB = 0;
    this.total = 0;
  }
};

Receipt.prototype.getText = function text() {
  return this.text + "Total: " + this.total;
};

Receipt.prototype.scannedA = function scannedA() {
  this.text += 'A: 50';
  if (++this.numberOfA % 3 == 0) {
    this.text += ' - 20 (3 for 130)';
    this.total += 30;
  } else {
    this.total += 50;
  }
  this.text += '\n';
};

Receipt.prototype.scannedB = function scannedB() {
  this.text += 'B: 30';
  if (++this.numberOfB % 2 == 0) {
    this.text += ' - 15 (2 for 45)';
    this.total += 15;
  } else {
    this.total += 30;
  }
  this.text += '\n';
};

Receipt.prototype.scannedC = function scannedC() {
  this.text += 'C: 20\n';
  this.total += 20;
};

Receipt.prototype.scannedD = function scannedD() {
  this.text += 'D: 15\n';
  this.total += 15;
};

module.exports = {
  Receipt: Receipt
};