import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EmplpoyeeListComponent } from './component/emplpoyee-list/emplpoyee-list.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddEmployeeComponent, EmplpoyeeListComponent, DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first_Angular';
}
