import { JasperReport } from "../classes/jasperreport";
import * as uuid from 'uuid';
import { QueryString } from "../classes/query-string";
import { Band } from "src/app/core/editor-components/band";
import { A4 } from "src/app/core/papeis/A4";
import { SplitType } from "../classes/split-type";



export class ReportInstanceBuilder {

    getA4(name: string): JasperReport {
        const papel = new A4();

        return new JasperReport(name, papel.largura, papel.altura, (papel.largura - papel.margem), papel.margem, papel.margem, papel.margem, papel.margem, uuid.v4(),
            new QueryString(),
            new Band(papel.largura, 50, 1, false, SplitType.STRETCH),
            new Band(papel.largura, 79, 1, false, SplitType.STRETCH),
            new Band(papel.largura, 35, 1, false, SplitType.STRETCH),
            new Band(papel.largura, 61, 1, false, SplitType.STRETCH),
            new Band(papel.largura, 125, 1, false, SplitType.STRETCH),
            new Band(papel.largura, 45, 1, false, SplitType.STRETCH),
            new Band(papel.largura, 54, 1, false, SplitType.STRETCH),
            new Band(papel.largura, 42, 1, false, SplitType.STRETCH),
        )
    }
}