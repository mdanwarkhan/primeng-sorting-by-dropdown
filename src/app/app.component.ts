import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  AfterViewInit
} from "@angular/core";
import { Table } from "primeng/table";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild("sortTable", { static: false }) sortTable: Table;

  public event;
  name = "Angular 6";
  cols: any[];
  cars: any[];
  cities: any[];
  selectedAmendmentCode: number;
  colName: string;
  @Output() sortFunction: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    // this.sortTable.sortFunction = this.sortFunction;
    this.cars = [
      { brand: "VW", year: 2012, color: "Orange", vin: "dsad231ff" },
      { brand: "Audi", year: 2011, color: "Black", vin: "gwregre345" },
      { brand: "Renault", year: 2005, color: "Gray", vin: "h354htr" },
      { brand: "BMW", year: 2003, color: "Blue", vin: "j6w54qgh" },
      { brand: "Mercedes", year: 1995, color: "Orange", vin: "hrtwy34" },
      { brand: "Volvo", year: 2005, color: "Black", vin: "jejtyj" },
      { brand: "Honda", year: 2012, color: "Yellow", vin: "g43gr" },
      { brand: "Jaguar", year: 2013, color: "Orange", vin: "greg34" },
      { brand: "Ford", year: 2000, color: "Black", vin: "h54hw5" },
      { brand: "Fiat", year: 2013, color: "Red", vin: "245t2s" }
    ];
    this.cols = [
      { field: "vin", header: "Vin" },
      { field: "year", header: "Year" },
      { field: "brand", header: "Brand" },
      { field: "color", header: "Color" }
    ];
  }

  ngAfterViewInit() {
    this.sortTable.sortFunction = this.sortFunction;
  }

  customSort(event: any) {
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === "string" && typeof value2 === "string") {
        if (event.field === "quarter") {
          console.log("sort..." + event.field);
          let o1 = value1.split("-");
          let o2 = value2.split("-");
          let value1Q = o1.length == 2 ? o1[0] : "";
          let value1Y = o1.length == 2 ? o1[1] : o1[0];
          let value2Q = o2.length == 2 ? o2[0] : "";
          let value2Y = o2.length == 2 ? o2[1] : o2[0];
          if (value1Y.localeCompare(value2Y) === 0) {
            result = value1Q.localeCompare(value2Q);
          } else {
            result = value1Y.localeCompare(value2Y);
          }
        } else {
          result = value1.localeCompare(value2);
        }
      } else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return event.order * result;
    });
  }

  mySort() {
    console.log(this.sortTable);
    console.log(this.sortTable._value);
    const colNm = this.colName;
    this.sortTable._value.sort((a, b) => {
      if (a[colNm] < b[colNm]) return -1;
      else if (a[colNm] > b[colNm]) return 1;
      else return 0;
    });
  }

  columnselection(ev) {
    console.log(ev);
    this.colName = ev;
    this.mySort();
  }
}
