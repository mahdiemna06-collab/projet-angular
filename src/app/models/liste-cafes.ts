import { Localisation } from "./localisation";
export interface ListeCafes {
    id:string;
    nom:string;
    localisation:Localisation;
    photo : string ;
    dateCreaction:Date;
    specialite:String;
  budget: number;
  likes:number;
    comments?: { nom: string; prenom: string; text: string }[];


}
