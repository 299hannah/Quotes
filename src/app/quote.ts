export class Quote {
  
  public showDescription: boolean;
    constructor(public id: number, public author: string, public name: string,public description: string, public publishedDate: Date){
       this.showDescription=false;
    }
  }