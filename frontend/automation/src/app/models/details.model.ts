
export class DetailModel {
    name: number;
    temperature: number;
    humidity: number;
    date: Date;
   
     constructor(
       options: {
        name?: number;
        temperature?: number;
        humidity?: number;
        date?: Date;
       } = {}
     ) {
       this.name = options.name || null;
       this.temperature = options.temperature || null;
       this.humidity = options.humidity || null;
       this.date = options.date || null;
     }
   }