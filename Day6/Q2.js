window.onload = function () {
  let initialbusdetails = [];

  if (localStorage.getItem("busdetails") == null) {
      localStorage.setItem("busdetails", JSON.stringify(initialbusdetails));
  }

}

function showModal(index) {
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "block";

  copyBus(index);
}

function hideModal(event) {
  if (event.target.className == "modal") {
      let modal = document.getElementsByClassName("modal")[0];
      modal.style.display = "none";
  }
}

function display(superarray = undefined) {
  let tabledata = "";
  let busdetails;

  if (superarray == undefined) {
      busdetails = JSON.parse(localStorage.getItem("busdetails"));
  }
  else {
      busdetails = superarray;
  }


  busdetails.forEach(function (busdetail, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${busdetail.name}</td>
      <td>${busdetail.source}</td>
      <td>${busdetail.destination}</td>
      <td>${busdetail.number}</td>
      <td>${busdetail.passengercapacity}</td>
      <td>
      <button onclick='deleteBus(${index})'>Delete</button>
      <button onclick='showModal(${index})'>Update</button>
      </td>
      </tr>`;

      tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;

}

display();

function addBus(event) {
  event.preventDefault();
  let busdetail = {};

  let name = document.getElementById("name").value;
  let source = document.getElementById("source").value;
  let destination = document.getElementById("destination").value;
  let number = document.getElementById("number").value;
  let passengercapacity = document.getElementById("passengercapacity").value;

  busdetail.name = name;
  busdetail.source = source;
  busdetail.destination = destination;
  busdetail.number = Number(number);
  busdetail.passengercapacity = Number(passengercapacity);

  let busdetails = JSON.parse(localStorage.getItem("busdetails"));
  busdetails.push(busdetail);
  localStorage.setItem("busdetails", JSON.stringify(busdetails));

  display();

  document.getElementById("name").value = "";
  document.getElementById("source").value = "";
  document.getElementById("destination").value = "";
  document.getElementById("number").value = "";
  document.getElementById("passengercapacity").value = "";
}

function searchBySource() {
  let searchValue = document.getElementById("searchSource").value;
  let busdetails = JSON.parse(localStorage.getItem("busdetails"));
  let newdata = busdetails.filter(function (busdetail) {
      return (
          busdetail.source.toLowerCase().indexOf(searchValue.toLowerCase()) != -1
      );
  });

  display(newdata);
}

function searchByDestination() {
  let searchValue = document.getElementById("searchDestination").value;
  let busdetails = JSON.parse(localStorage.getItem("busdetails"));
  let newdata = busdetails.filter(function (busdetail) {
      return (
          busdetail.destination.toLowerCase().indexOf(searchValue.toLowerCase()) != -1
      );
  });

  display(newdata);
}


function deleteBus(index) {
  let busdetails = JSON.parse(localStorage.getItem("busdetails"));
  busdetails.splice(index, 1);
  localStorage.setItem("busdetails", JSON.stringify(busdetails));
  display();
}

let updateIndex;

function copyBus(index) {
  let busdetails = JSON.parse(localStorage.getItem("busdetails"));
  updateIndex = index;
  let busdetail = busdetails[index];

  document.getElementById("upname").value = busdetail.name;
  document.getElementById("upsource").value = busdetail.source;
  document.getElementById("updestination").value = busdetail.destination;
  document.getElementById("upnumber").value = busdetail.number;
  document.getElementById("uppassengercapacity").value = busdetail.passengercapacity;
}

function updateBus(event) {
  event.preventDefault();
  let busdetails = JSON.parse(localStorage.getItem("busdetails"));
  let busdetail = busdetails[updateIndex];

  let name = document.getElementById("upname").value;
  let source = document.getElementById("upsource").value;
  let destination = document.getElementById("updestination").value;
  let number = document.getElementById("upnumber").value;
  let passengercapacity = document.getElementById("uppassengercapacity").value;


  busdetail.name = name;
  busdetail.source = source;
  busdetail.destination = destination;
  busdetail.number = Number(number);
  busdetail.passengercapacity = Number(passengercapacity);

  localStorage.setItem("busdetails", JSON.stringify(busdetails));
  display(busdetails);

  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
}