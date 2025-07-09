import { Component } from '@angular/core';
import { Employee } from '../../model/Employee';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule,CommonModule, DatePipe ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  employees: Employee[] = [];

  // Formulaire lié à l'objet
  newEmployee: Employee = new Employee();

  selectedIndex: number | null = null;

  addRecord(): void {
    if (this.selectedIndex !== null) {
      // Modifier
      this.employees[this.selectedIndex] = { ...this.newEmployee };
      this.selectedIndex = null;
    } else {
      // Ajouter
      this.employees.push({ ...this.newEmployee });
    }

    this.resetForm();
  }

  editRecord(index: number): void {
    this.selectedIndex = index;
    this.newEmployee = { ...this.employees[index] };
  }

  deleteRecord(index: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employees.splice(index, 1);
      this.resetForm();
    }
  }

  resetForm(): void {
    this.newEmployee = new Employee();
    this.selectedIndex = null;
  }
}
