import { Component, EventEmitter, Output } from '@angular/core';
import { Patient } from 'src/app/models/patient';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent {
  @Output() selectPatientEvent = new EventEmitter<Patient>();
  patients: Patient[] = [
    { name: 'John Doe', age: 45, gender: 'Male', condition: 'Hypertension' },
    { name: 'Jane Smith', age: 32, gender: 'Female', condition: 'Diabetes' },
    // Add more patients as needed
  ];

  selectPatient(patient: Patient): void {
    // Logic to handle selecting a patient
    this.selectPatientEvent.emit(patient)
  }
}
