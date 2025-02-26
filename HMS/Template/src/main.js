/* eslint-disable */
import { gender } from './common/gender.enum.js';
import { Doctor } from './models/doctor.js';
import { Nurse } from './models/nurse.js';
import { Patient } from './models/patient.js';
import { Staff } from './models/staff.js';
import { User } from './models/user.js';


const user = new User('John', 'Smith', gender.Male, 'john@gmail.com');
console.log(user.toString());
console.log('***\n');

const staff = new Staff('Maria', 'Gonzales', gender.Female, 'maria@gmail.com', 2, 156.50, 'Cleaning staff');
console.log(staff.toString());
console.log('***\n');

const patient = new Patient('Patric', 'Jackson', gender.Male, 'pathrik@gmail.com', false);
console.log(patient.toString());
console.log('***\n');

const nurse = new Nurse('Sara', 'Kennedy', gender.Female, 'sarra@gmail.com', 5, 280.45, 'Head of nurses', 4);
console.log(nurse.toString());
console.log('***\n');

const doctor = new Doctor('Martin', 'Luther', gender.Male, 'martin@gmail.com', 10, 1500.00, 'ER', 'Surgeon');
console.log(doctor.toString());
console.log('***\n');

console.assert(doctor.id === 5);
