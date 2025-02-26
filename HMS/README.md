<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

# Hospital Management System

### 1. Description

Hospital Management System  is a simple system for managing a hospital staff and patients. It is built with classes and follows the principles of **OOP Design**.

<br />

### 2. Project information

- Language and version: **JavaScript ES2020**
- Platform and version: **Node 16.0+**
- Core Packages: **ESLint**

<br />

### 3. Goals

The **goal** is to fully implement five classes - `Doctor`, `Nurse`, `Patient`, `Staff` and `User` and validate and encapsulate their **state** - when it is initialized or changed through methods.

- Working with classes - writing classes and creating instances of those classes.
- Modeling classes using `fields` (state) and `methods` (behavior).
- Exposing state for reading and writing through getters and setters.
- Protecting the state by implementing validation of values passed to setters
- Using static members for sharing state and behavior between class instances
- Using inheritance to share logic and state between classes

<br />

### 4. Setup

#### Running the project

To get the project up and running, follow these steps:

1. Go inside the `Template` folder.
2. Run `npm install` to restore all dependencies.
3. After that, there are a few scripts you can run:

   - `npm run start` (shorthand: `npm start`) - Runs the `src/main.js` file.
   - `npm run lint` - Lints the code inside the `src` folder using **ESLint**.

<br />

### 5. Project structure

All of the code you will be working with is in the `src` folder. The entry point (the file from which the program is started) is `src/main.js`. You will also notice that there are a couple of files in the `src/models` folder. Classes that hold the state of an application are often called models. A few enums exist in the `src/common` folder.

You need to fully implement the five models. You can find the implementation requirements below.

<br />

### 6. The models

You have five models in total. They depend on each other and are listed in alphabetic order and not in the order they should be implemented, nor in the order they depend on each other.

`Users` can be of three types: `Patient`, `Doctor`, and `Nurse`.
`Doctor` and `Nurse` are `Staff` members (i.e., `Doctor` IS-A `Staff`, `Nurse` IS-A `Staff`) and all of them (i.e., `Patient`, `Doctor`, `Nurse`, and `Staff`) are of type `User`.

Make sure you have the right order and level of inheritance and utilize inheritance in its full potential.

<br />

### 7. The `Doctor` model

The `Doctor` model has many properties (state) and one method `toString()`. You need to implement the missing functionalities by going through the requirements below and applying the necessary validations.

Properties:

- `id` - readonly number assigned when the class is constructed. Ids should autoincrement for all models and the logic for autoincrementation should be in the parent-most class.
- `firstName` - readonly string with length in the range [2, 40] symbols
- `lastName` - readonly string with length in the range [2, 50] symbols
- `gender` - readonly, should be a valid value of the `gender` enum
- `email` - readonly string with length in the range [3, 120] symbols, additional validation for email - it should contain the `@` character
- `yearsOfExperience` - non-negative number, readable and writable
- `salary` - positive number, readable and writable
- `description` - readonly string with length in the range [2, 100] symbols
- `specialization` - readonly string with length in the range [1, 25] symbols

You create a new instance with

```js
const doctor = new Doctor('Martin', 'Luther', gender.Male, 'martin@gmail.com', 10, 1500.00, 'ER', 'Surgeon');
```

When calling the `toString()` method it should return a string in the following format:

```
Martin Luther
Id: 1
Email: martin@gmail.com
Years Of Experience: 10
Salary: 1500
Description ER
Specialization: Surgeon
```

<br />

### 8. The `Nurse` model

The `Nurse` model has many properties (state) and one method `toString()`. You need to implement the missing functionalities by going through the requirements below and applying the necessary validations.

Properties:

- `id` - readonly number assigned when the class is constructed. Ids should autoincrement for all models and the logic for autoincrementation should be in the parent-most class.
- `firstName` - readonly string with length in the range [2, 40] symbols
- `lastName` - readonly string with length in the range [2, 50] symbols
- `gender` - readonly, should be a valid value of the `gender` enum
- `email` - readonly string with length in the range [3, 120] symbols, additional validation for email - it should contain the `@` character
- `yearsOfExperience` - non-negative number, readable and writable
- `salary` - positive number, readable and writable
- `description` - readonly string with length in the range [2, 100] symbols
- `departmentId` - readonly non-negative number

You create a new instance with

```js
const nurse = new Nurse('Sara', 'Kennedy', gender.Female, 'sarra@gmail.com', 5, 280.45, 'Head of nurses', 4);
```

When calling the `toString()` method it should return a string in the following format:

```
Sara Kennedy
Id: 2
Email: sarra@gmail.com
Years Of Experience: 5
Salary: 280.45
Description Head of nurses
Department ID: 4
```

<br />

### 9. The `Patient` model

The `Patient` model has many properties (state) and one method `toString()`. You need to implement the missing functionalities by going through the requirements below and applying the necessary validations.

Properties:

- `id` - readonly number assigned when the class is constructed. Ids should autoincrement for all models and the logic for autoincrementation should be in the parent-most class.
- `firstName` - readonly string with length in the range [2, 40] symbols
- `lastName` - readonly string with length in the range [2, 50] symbols
- `gender` - readonly, should be a valid value of the `gender` enum
- `email` - readonly string with length in the range [3, 120] symbols, additional validation for email - it should contain the `@` character
- `isInsured` - readonly boolean

You create a new instance with

```js
const patient = new Patient('Patric', 'Jackson', gender.Male, 'pathrik@gmail.com', false);
```

When calling the `toString()` method it should return a string in the following format:

```
Patric Jackson
Id: 3
Email: pathrik@gmail.com
Has insurance: No
```

<br />

### 10. The `Staff` model

The `Staff` model has many properties (state) and one method `toString()`. You need to implement the missing functionalities by going through the requirements below and applying the necessary validations.

Properties:

- `id` - readonly number assigned when the class is constructed. Ids should autoincrement for all models and the logic for autoincrementation should be in the parent-most class.
- `firstName` - readonly string with length in the range [2, 40] symbols
- `lastName` - readonly string with length in the range [2, 50] symbols
- `gender` - readonly, should be a valid value of the `gender` enum
- `email` - readonly string with length in the range [3, 120] symbols, additional validation for email - it should contain the `@` character
- `yearsOfExperience` - non-negative number, readable and writable
- `salary` - positive number, readable and writable
- `description` - readonly string with length in the range [2, 100] symbols

You create a new instance with

```js
const staff = new Staff('Maria', 'Gonzales', gender.Female, 'maria@gmail.com', 2, 156.50, 'Cleaning staff');
```

When calling the `toString()` method it should return a string in the following format:

```
Maria Gonzales
Id: 4
Email: maria@gmail.com
Years Of Experience: 2
Salary: 156.5
Description Cleaning staff
```

<br />

### 11. The `User` model

The `User` model has many properties (state) and one method `toString()`. You need to implement the missing functionalities by going through the requirements below and applying the necessary validations.

Properties:

- `id` - readonly number assigned when the class is constructed. Ids should autoincrement for all models and the logic for autoincrementation should be in the parent-most class.
- `firstName` - readonly string with length in the range [2, 40] symbols
- `lastName` - readonly string with length in the range [2, 50] symbols
- `gender` - readonly, should be a valid value of the `gender` enum
- `email` - readonly string with length in the range [3, 120] symbols, additional validation for email - it should contain the `@` character

You create a new instance with

```js
const user = new User('John', 'Smith', gender.Male, 'john@gmail.com');
```

When calling the `toString()` method it should return a string in the following format:

```
John Smith
Id: 5
Email: john@gmail.com
```

<br />

### 12. Testing the models

You can paste the following sample code inside the `main.js` file. Running this code should produce the output shown below. Indentation and book order is irrelevant.

```js
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
```

Sample output text:

```text
John Smith
Id: 1
Email: john@gmail.com
***

Maria Gonzales
Id: 2
Email: maria@gmail.com
Years Of Experience: 2
Salary: 156.5
Description Cleaning staff
***

Patric Jackson
Id: 3
Email: pathrik@gmail.com
Has insurance: No
***

Sara Kennedy
Id: 4
Email: sarra@gmail.com
Years Of Experience: 5
Salary: 280.45
Description Head of nurses
Department ID: 4
***

Martin Luther
Id: 5
Email: martin@gmail.com
Years Of Experience: 10
Salary: 1500
Description ER
Specialization: Surgeon
***
```

### 13. Submitting your solution

You have until tomorrow, before the session starts, to submit your solution.  
Remove `node_modules` before you archive the `Template` folder. 
Finally, submit the archive **and** the URL of your repository to the appropriate activity.
*Ask your trainer for additional information!*