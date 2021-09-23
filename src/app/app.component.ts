import { Component } from '@angular/core';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms';

  editor:EditorType = 'name';

  get showNameEditor(){
    return this.editor === 'name';
  }

  get showProfileEditor(){
    return this.editor === 'profile';
  }

  toggleEditor(type:EditorType){
    this.editor = type;
  }
}
