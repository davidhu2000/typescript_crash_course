interface IMarvel {
  location: string;
  parentCompany: string;
  comics: string [];
  print() : string;
  boughtOut() : void;

}

class Marvel {
  location: string;
  parentCompany: string;
  comics: string [];

  constructor(location: string, parentCompany: string) {
    this.location = location;
    this.parentCompany = parentCompany;
  }

  print() : string {
    return `Marvel is located in ${this.location}, and is owned by ${this.parentCompany}`;
  }

  boughtOut(newParent : string) : void {
    this.parentCompany = newParent;
  }

  madeProfit(profit?: number) : string {
    if (profit) {
      return 'Yes';
    } else {
      return 'No';
    }
  }

  addNewComics(...comics: string []) : void{
    this.comics = this.comics.concat(comics);
  }
  
  modifySuperhero(name: string, callback: (name: string) => string) : void {
    callback(name);
  }
}