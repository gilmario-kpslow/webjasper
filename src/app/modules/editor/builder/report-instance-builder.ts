import { JasperReport } from "../classes/jasperreport";
import * as uuid from 'uuid';
import { QueryString } from "../classes/query-string";
import { Band } from "../classes/band";

export class ReportInstanceBuilder {

    getA4(name: string): JasperReport {
        return new JasperReport(name, 595, 842, 555, 20,20,20,20 , uuid.v4(), 
            new QueryString(), 
            new Band(0),
            new Band(79),
            new Band(35),
            new Band(61),
            new Band(125),
            new Band(45),
            new Band(54),
            new Band(42));
    }
}