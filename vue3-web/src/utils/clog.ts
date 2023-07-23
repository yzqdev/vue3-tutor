const colorLog = {};
export const clog = {
  getType(str: any) {
    let typeStr = Object.prototype.toString.call(str);
    return typeStr.slice(8, -1).toLowerCase();
  },
  log(...str: any) {
    console.log(...str);
  },
  warn(...str: any) {
    console.warn(...str);
  },
  print(...str: any) {
    console.log(`%c${this.getType(str)}`, "color:red");
    switch (this.getType(str)) {
      case "string":
        console.log(str);
        break;
      case "object":
        console.log(str);
        break;
    }
    console.log(`%c${str}`, `color:red;font-size:18px`);
  },
  red(...str: any) {
    console.log(this.getType(str) + "styy" + str);
    console.log(str);
    this.print(...str);
    console.log(`%c${str}`, `color:red;font-size:18px`);
  },
  cyan(...str: any) {
    console.log(`%c${str}`, `color:cyan;font-size:18px`);
  },
  yellow(...str: any) {
    console.log(`%c${str}`, `color:cyan;font-size:18px`);
  },
};
