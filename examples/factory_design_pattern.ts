// Goal is to categorize people, given their date of birth, into infants, children, and adults.
// Indicate with true/false if they can legally sign a contract

// | Category | Age         | Can Sign contract |
// |----------|-------------|-------------------|
// | Infant   | <= 2        | no                |
// | Child    | > 2 & <= 18 | no                |
// | Adult    | > 18        | yes               |


// ====================
// Base Class
// ====================

// Hold code that is common across the different specialist classes.

enum PersonCategory {
  Infant,
  Child,
  Adult
}

interface IPerson {
  Category: PersonCategory;
  canSignContracts() : boolean;
  printDetails() : void;
}

abstract class Person implements IPerson {
  Category: PersonCategory;
  private DateOfBirth: Date;

  constructor(dateOfBirth: Date) {
    this.DateOfBirth = dateOfBirth;
  }

  abstract canSignContracts(): boolean;

  printDetails() : void {
    console.log(`Person: `);
    console.log(`Date of Birth: ${this.DateOfBirth.toDateString()}`);
    console.log(`Category: ${this.Category}`);
    console.log(`Can sign contract: ${this.canSignContracts()}`);
  }
}

// ====================
// Specialist Classes
// ====================

// Classes that extends the Person class. 

class Infant extends Person {
  constructor(dateOfBirth: Date) {
    super(dateOfBirth);
    this.Category = PersonCategory.Infant;
  }

  canSignContracts() : boolean {
    return false;
  }
}

class Child extends Person {
  constructor(dateOfBirth: Date) {
    super(dateOfBirth);
    this.Category = PersonCategory.Child;
  }

  canSignContracts() : boolean {
    return false;
  }
}

class Adult extends Person {
  constructor(dateOfBirth: Date) {
    super(dateOfBirth);
    this.Category = PersonCategory.Adult;
  }

  canSignContracts() : boolean {
    return true;
  }
}

// ====================
// Factory Class
// ====================

// Determine a person's category and return an instance of Infant or Child or Adult based on date of birth.

class PersonFactory {
  getPerson(dateOfBirth: Date): IPerson {
    let dateNow = new Date();
    let currentMonth: number = dateNow.getMonth() + 1;
    let currentDate: number = dateNow.getDate();
    let currentYear: number = dateNow.getFullYear();

    let dateTwoYearsAgo = new Date(currentYear - 2, currentMonth, currentDate);
    let date18YearsAgo = new Date(currentYear - 18, currentMonth, currentDate);

    if (dateOfBirth >= dateTwoYearsAgo) {
      return new Infant(dateOfBirth);
    } else if (dateOfBirth >= date18YearsAgo) {
      return new Child(dateOfBirth);
    } else {
      return new Adult(dateOfBirth);
    }
  }
}

// ====================
// Usage
// ====================

let factory = new PersonFactory();
let p1 = factory.getPerson(new Date(2016, 1, 1));
let p2 = factory.getPerson(new Date(2010, 1, 1));
let p3 = factory.getPerson(new Date(1990, 1, 1));