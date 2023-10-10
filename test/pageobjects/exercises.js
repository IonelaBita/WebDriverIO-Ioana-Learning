import Generic from '../pageobjects/generic.js';
class Exercises {
  sliceStringExercises() {
    let initialString = 'Ioana';
    let resultOana = initialString.slice(1);
    let resultOan = resultOana.slice(0, 3);
    let resultAfinal = initialString.slice(-1);
    let resultNa = resultOana.slice(-2);
    let resultI = initialString.slice(0, 1);
    console.log(`Should result oana >>> ${resultOana}`);
    console.log(`Should result oan >>> ${resultOan}`);
    console.log(`Should result a >>> ${resultAfinal}`);
    console.log(`Should result na >>> ${resultNa}`);
    console.log(`Should result I >>> ${resultI}`);
    console.log();
  }

  subStringExercises() {
    let vehicle = 'Cars, Airplanes, Boats, Bikes';
    let cars = vehicle.substring(0, 4);
    let carsTest = vehicle.slice(0, 4);
    let carsComma = vehicle.substring(0, 5);
    let commaAirplanes = vehicle.substring(4, 15);
    let boatsCommaBik = vehicle.substring(17, 27);
    let es = vehicle.substring(27, 29);
    console.log(
      `VehicleResult >>> R1 = ${cars}, Rtest = ${carsTest}, R2 = ${carsComma}, R3 = ${commaAirplanes}, R4 = ${boatsCommaBik}, R5 = ${es} `
    );
    console.log();
  }

  simpleIfExercise() {
    // in if nu se intra, deoarece conditia este negata
    if (!(3 == 3)) {
      console.log('Am intrat in if');
    }
  }

  /**
   * This functions receives two parameters and depending on what they are, displays a console.log
   * @param {string} ziua a string, indicating a day, e.g. 'Luni', 'Miercuri' etc.
   * @param {string} vreme a string indicating the wheather, e.g. 'Insorita', 'Innorata'
   */
  secondIfExercise(ziua, vreme) {
    console.log(`Ziua este ${ziua}, vremea este ${vreme}`);

    if (ziua === 'Marti' || vreme === 'Insorita') {
      console.log('Am intrat in if');
    }
  }

  carBrand(car) {
    let carFormatted = car.toLowerCase().replace(/[_,;'/\[|\]//.()*& -]/g, '');
    if (carFormatted === 'honda') {
      console.log(`>>>>>>> This is the Honda if`);
    } else if (carFormatted === 'mercedes') {
      console.log(`>>>>>>> This is the Mercedes If`);
    } else if (carFormatted === 'bmw') {
      console.log(`>>>>>>> This is the BMW If`);
    } else {
      console.log(
        `>>>>>>> Car model not recognized, please use “Ho,nda”, “merC_eDes” or “bmw-  ”`
      );
    }
  }

  arrayExercises() {
    let numberArray = [83, 123, 321, 231, 23, 54, 2, -6, 99];
    let stringArray = ['Bogdan', 'Daniel', 'Teodora', 'Raul', 'Ioana'];

    //Sort A to Z
    console.log(`>>>>> Sort elements A > Z: ${stringArray.sort()}`);
    // Sort Z to A
    console.log(
      `>>>>> Sort in desc: ${stringArray.sort((a, b) => {
        return b.localeCompare(a);
      })}`
    );
    //Sort numbers asc order
    console.log(
      `>>>>> Sort numbers in asc: ${numberArray.sort(function (a, b) {
        return a - b;
      })}`
    );
    // Sort numbers in desc order
    console.log(
      `>>>>> Sort numbers in desc: ${numberArray.sort(function (a, b) {
        return b - a;
      })}`
    );
    // Reverse
    console.log(`>>>>> reverse method: ${stringArray.reverse()}`);

    console.log(stringArray);
    console.log(numberArray);

    //Concat
    let combineThem = numberArray.concat(stringArray);
    console.log(`>>>>> Concat Function: ${combineThem}`);
    //At
    let findIndex = numberArray.at(1);
    console.log(`>>>>> Find elements: ${findIndex}`);
    // Push
    console.log(
      `Add value to string >>>> ${stringArray.push('Alex')}, ${stringArray}`
    );
    console.log(
      `Add value to number >>>> ${numberArray.push(10)}, ${numberArray}`
    );
    // Splice
    // console.log(`Extract an element ${stringArray.splice(0, 1)}`);
    // Slice
    console.log(`Extract an element ${stringArray.slice(0, 1)}`);
    // Length
    console.log(
      `NumberLength >>>> ${numberArray.length}, stringLength >>>>> ${stringArray.length}`
    );
  }

  declareArraysVariables() {
    let names = ['Ioana', 'Alex', 'Maria', 'Johnny', 'Tony'];
    let numbers = [5, 10, 23, 100, 201];
    return { names, numbers };
  }

  sortExercise() {
    let { names, numbers } = this.declareArraysVariables();
    console.log(`>>>>> Sort in asc: ${names.sort()}`);
    console.log(
      `>>>>> Sort in desc: ${names.sort((a, b) => {
        return b.localeCompare(a);
      })}`
    );
    console.log(
      `>>>>> Sort numbers in asc: ${numbers.sort(function (a, b) {
        return a - b;
      })}`
    );
    console.log(
      `>>>>> Sort numbers in desc: ${numbers.sort(function (a, b) {
        return b - a;
      })}`
    );
  }

  callReturn() {
    // let b = this.returnExercise();
    console.log(this.returnExercise());
  }

  returnExercise() {
    return 2;
  }

  numberType() {
    let number = Generic.randomNumber();
    console.log(
      `>>> This is the value I receive from the randomNumberFunction ${number}`
    );
    if (isNaN(number)) {
      console.log(
        `>>>>>>> Ivalid data type: recived '${typeof number}', but expected 'number'`
      );
    } else if (number < 0 || number > 10) {
      console.log(`>>>>>>> Please provide a number between 0 and 10`);
    } else if (number % 2 === 0) {
      console.log(`>>>>>>> The number is even`);
    } else {
      console.log(`>>>> The number is odd`);
    }
  }

  forExercise() {
    let list = [];
    console.log(`Before entering for: ${list}`);
    for (let i = 0; i <= 9; i++) {
      console.log(`Iteratia ${i}`);
      list.push(i);
    }
    console.log(`After exiting for: ${list}`);
  }

  whileExercise() {
    {
    }
  }
}
export default new Exercises();
