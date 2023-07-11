import { json2xml} from 'xml-js'
import { JasperReport } from './jasperreport';

export class ObjectToXml {

    constructor(){}

    convertJsonToXml(jasperRepot: JasperReport){

        console.log(jasperRepot)
        if (!jasperRepot) {
            return
        }

        //JSON to XML
        let res = this.ObjectToJson(jasperRepot);
        if (res && res.hasOwnProperty('altura')) {
            let options = {ignoreComment: true, spaces: 4};
            let convert = json2xml(JSON.stringify(res), options);
            console.log(convert);
        }

        


    }
    ObjectToJson(jasperRepot: JasperReport): null | undefined | {} {
        if (!jasperRepot) {
            return null;
        }

        let  { background,altura, name, bottomMargin, columnFooter, columnHeader } = jasperRepot;
        return { background,altura, name, bottomMargin, columnFooter, columnHeader }
    }


}