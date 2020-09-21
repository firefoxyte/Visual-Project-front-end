export class Task{
    constructor(public id:number,public parent_id:number,public project_id:number,public description:string,
        public duration:string, public creator_id:number,public start:Date,public end:Date,public band:number,
        public created:Date,public creator:number,public ended:boolean,public color:string,public tags:Array<string>,public logo:string){}
}