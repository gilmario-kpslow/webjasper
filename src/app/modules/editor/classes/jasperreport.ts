import { Band } from "./band";
import { Dimensao } from "./dimensao";
import { QueryString } from "./query-string";
import { TipoRelatorio } from "./tipo-relatorio.enum";

export class JasperReport {
    
    constructor(
        public name: string,
        public pageWidth: number, 
        public pageHeight: number,
        public columnWidth: number,
        public leftMargin: number,
        public rightMargin: number,
        public topMargin: number,
        public bottomMargin: number,
        public uuid: string,
        public queryString: QueryString,
        public background: Band,
        public title: Band,
        public pageHeader: Band,
        public columnHeader: Band,
        public detail: Band,
        public columnFooter: Band,
        public pageFooter: Band,
        public summary: Band,
        ){

    }
}