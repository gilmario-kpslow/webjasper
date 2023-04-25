import { Component, Input } from '@angular/core';
import { JasperReport } from '../classes/jasperreport';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface ArvoreItem {
  name: string;
  icone?: string;
  children?: ArvoreItem[];
}

const TREE_DATA: ArvoreItem[] = [
  {
    name: 'Exemplo',

    children: [{ name: 'Styles', icone: 'insert_drive_file' }, {
      name: 'Parameter', children: [
        { name: "REPORT_CONTEXT" },
        { name: "REPORT_CONTEXT" }
      ]
    },
    { name: 'Fields' },
    { name: 'Sort Fields' },
    { name: 'Variables' },
    { name: 'Scriptlets' },
    { name: 'Title' },
    { name: 'Page Header' },
    { name: 'Column Header' },
    { name: 'Detail 1' },
    { name: 'Column Footer' },
    { name: 'Page Footer' },
    { name: 'Last Page Footer' },
    { name: 'Summary' },
    { name: 'No Data' },
    { name: 'Background' },
    ],
  },
];

@Component({
  selector: 'app-relatorio-inpector',
  templateUrl: './relatorio-inpector.component.html',
  styleUrls: ['./relatorio-inpector.component.css']
})
export class RelatorioInpectorComponent {

  @Input() report: JasperReport | undefined;

  treeControl = new NestedTreeControl<ArvoreItem>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ArvoreItem>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  private unpachTree() {

  }



  hasChild = (_: number, node: ArvoreItem) => !!node.children && node.children.length > 0;

}
