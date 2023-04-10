import { Component, Input } from '@angular/core';
import { JasperReport } from '../classes/jasperreport';

import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Exemplo',
    children: [{name: 'Styles'}, {name: 'Parameter', children: [
      {name: "REPORT_CONTEXT"},
      {name: "REPORT_CONTEXT"}
    ]},
    {name: 'Fields'},
    {name: 'Sort Fields'},
    {name: 'Variables'},
    {name: 'Scriptlets'},
    {name: 'Title'},
    {name: 'Page Header'},
    {name: 'Column Header'},
    {name: 'Detail 1'},
    {name: 'Column Footer'},
    {name: 'Page Footer'},
    {name: 'Last Page Footer'},
    {name: 'Summary'},
    {name: 'No Data'},
    {name: 'Background'},
    ],
  },
];

@Component({
  selector: 'app-relatorio-inpector',
  templateUrl: './relatorio-inpector.component.html',
  styleUrls: ['./relatorio-inpector.component.css']
})
export class RelatorioInpectorComponent {

  @Input() report: JasperReport| undefined;

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor(){
    this.dataSource.data = TREE_DATA;
  }

  private unpachTree() {

  }

  

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}
