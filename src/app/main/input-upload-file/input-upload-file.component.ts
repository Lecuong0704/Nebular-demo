import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, ElementRef } from "@angular/core";
import { $ } from "protractor";
export interface iconFile {
  name: string;
  icon: string;
}

@Component({
  selector: "app-input-upload-file",
  templateUrl: "./input-upload-file.component.html",
  styleUrls: ["./input-upload-file.component.less"]
})
export class InputUploadFileComponent implements OnInit {
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() disabled: boolean = false;
  @Input() require: boolean = false;
  @Input() class: string = "col-12";
  @Input() cssClassInput: string = "";
  @Input() cssClassLabel: string = "";
  @Input() fieldSize: string = "medium"; // small / large
  @Input() model: any = "";
  @Input() type: any = "";
  @ViewChild('input',{static: true}) input: ElementRef;

  public listIcon = [
    "ai",
    "avi",
    "doc",
    "eml",
    "exe",
    "gif",
    "img",
    "iso",
    "jpg",
    "mov",
    "mp3",
    "otf",
    "pdf",
    "png",
    "psd",
    "rar",
    "txt",
    "xls",
    "xlsx",
    "zip",
    "no-icon"
  ];
  public extensionValidate = ["png", "jpg"];
  public value = [];

  public listImg = ["jpeg"];
  public listImageShow: iconFile[] = [];
  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {}

  checkSupportIcon(extension): boolean {
    let check = this.listIcon.find(x => x == extension);
    if (check == null || check == undefined || check == "") {
      return false;
    } else {
      return true;
    }
  }

  getIconView(files) {
    // this.listImageShow = [];
    for (let i = 0; i < files.length; i++) {
      let extension = files[i].name.split(".").reverse()[0];
      var item: iconFile;
      if (!this.checkSupportIcon(extension)) {
        item = {
          name: files[i].name,
          icon: "no-icon"
        };
        this.addIconListView(item);
        continue;
      }
      item = {
        name: files[i].name,
        icon: extension
      };
      this.addIconListView(item);
      continue;
    }
  }

  addIconListView(file) {
    let check = this.value.find(x => x.name == file.name);
    if (check != null || check != undefined || check == "") {
      return;
    }
    this.listImageShow.push(file);
  }

  setValue(file) {
    let check = this.value.find(x => x.name == file.name);
    if (check != null || check != undefined || check == "") {
      return;
    }
    this.value.push(file);
  }


  handleFileInput(e) {
    let files = e.target.files;
    this.getIconView(files);
    for (let i = 0; i < files.length; i++) {
      this.setValue(files[i]);
    }
    console.log("att", e.target);
    e.target.files = undefined;     
  }

  deleteFile(name) {
    console.log(
      'input',
      this.input
    );
    this.listImageShow = this.listImageShow.filter(x => x.name != name);
    this.value = this.value.filter(x => x.name != name);
  }

  targetInput() {
    document.getElementById("file").click();
  }
}
