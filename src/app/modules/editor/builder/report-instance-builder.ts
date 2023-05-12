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
            new Band(papel.largura, papel.altura, 1, false, SplitType.STRETCH, 'BACKGROUD'),
            new Band(papel.largura, 80, 1, false, SplitType.STRETCH, 'TITULO'),
            new Band(papel.largura, 30, 1, false, SplitType.STRETCH, 'CABEÇALHO DA PÁGINA'),
            new Band(papel.largura, 30, 1, false, SplitType.STRETCH, 'CABEÇALHO DAS COLUNAS'),
            new Band(papel.largura, 125, 1, false, SplitType.STRETCH, 'DETALHES'),
            new Band(papel.largura, 30, 1, false, SplitType.STRETCH, 'RODAPE DAS COLUNAS'),
            new Band(papel.largura, 20, 1, false, SplitType.STRETCH, 'RODAPÉ DA PÁGINA'),
            new Band(papel.largura, 30, 1, false, SplitType.STRETCH, 'SUMÁRIO'),
        )
    }
}