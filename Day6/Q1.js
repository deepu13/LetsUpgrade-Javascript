let employeedata = [
  {
      name: "Billgates",
      age: 25,
      city: "Bangalore",
      salary: 786526,
  },
  {
      name: "Mark Zuckerburg",
      age: 35,
      city: "Mumbai",
      salary: 234597,
  },
  {
      name: "Jeff Bezoz",
      age: 30,
      city: "Pune",
      salary: 784364,
  },
  {
      name: "Satya Nadella",
      age: 27,
      city: "Hyderabad",
      salary: 123546,
  }, 
  {
      name: "Sundar Pichai",
      age: 22,
      city: "Chennai",
      salary: 454644,
  },
];

function showModal(index) {
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "block";

  copyEmployee(index);
}

function hideModal(event) {
  if (event.target.className == "modal") {
      let modal = document.getElementsByClassName("modal")[0];
      modal.style.display = "none";
  }
}

function display(superarray) {
  let tabledata = "";

  superarray.forEach(function (employee, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${employee.name}</td>
      <td>${employee.age}</td>
      <td>${employee.city}</td>
      <td>${employee.salary}</td>
      <td>
      <button onclick='deleteEmployee(${index})'>Delete</button>
      <button onclick='showModal(${index})'>Update</button>
      </td>
      </tr>`;

      tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}

display(employeedata);

function addEmployee(event) {
  event.preventDefault();
  let employee = {};

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let city = document.getElementById("city").value;
  let salary = document.getElementById("salary").value;

  employee.name = name;
  employee.age = Number(age);
  employee.city = city;
  employee.salary = salary;

  employeedata.push(employee);
  display(employeedata);

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("city").value = "";
  document.getElementById("salary").value = "";
}

function searchByName() {
  let searchValue = document.getElementById("searchName").value;

  let newdata = employeedata.filter(function (employee) {
      return (
          employee.name.toLowerCase().indexOf(searchValue.toLowerCase()) != -1
      );
  });

  display(newdata);
}

function searchByCity() {
  let searchValue = document.getElementById("searchCity").value;

  let newdata = employeedata.filter(function (employee) {
      return (
          employee.city.toLowerCase().indexOf(searchValue.toLowerCase()) != -1
      );
  });

  display(newdata);
}

function deleteEmployee(index) {
  employeedata.splice(index, 1);
  display(employeedata);
}

let updateIndex;

function copyEmployee(index) {
  updateIndex = index;
  let employee = employeedata[index];

  document.getElementById("upname").value = employee.name;
  document.getElementById("upage").value = employee.age;
  document.getElementById("upcity").value = employee.city;
  document.getElementById("upsalary").value = employee.salary;
}

function updateEmployee(event) {

  event.preventDefault();
  let employee = employeedata[updateIndex];
  let name = document.getElementById("upname").value;
  let age = document.getElementById("upage").value;
  let city = document.getElementById("upcity").value;
  let salary = document.getElementById("upsalary").value;

  employee.name = name;
  employee.age = Number(age);
  employee.city = city;
  employee.salary = salary;
  display(employeedata);

  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
}