
export class ListModel {
   id: string;
   name: string;
   totalTemp: number;
   
  
    constructor(
      options: {
        id?: string;
        name?: string;
        totalTemp?: number;
      } = {}
    ) {
      this.id= options.id || "";
      this.name = options.name || "";
      this.totalTemp = options.totalTemp || 0;
    }
  }