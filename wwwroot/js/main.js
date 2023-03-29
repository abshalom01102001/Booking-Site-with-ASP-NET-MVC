function openSideBar() {
  document.getElementById("side-nav").style.left = "0";
  document.getElementById("openNav").style.display = "none";
  document.getElementById("closeNav").style.display = "block";
}

function closeSideBar() {
  document.getElementById("side-nav").style.left = "-75vw";
  document.getElementById("openNav").style.display = "block";
  document.getElementById("closeNav").style.display = "none";
}

$(window).on("load", function () {
  $(".preloader").fadeOut("slow");
});

$("#closeModal").click(function () {
  $(".modal").fadeOut("slow");
});

function displayModal(string) {
  document.getElementById("modal-image").src = string.src;
  document.getElementById("modal-caption").innerHTML = string.alt;
  document.getElementById("modal").style.display = "flex";
}

function bookButton() {
  document.getElementById("book").style.display = "flex";
  document.getElementById("book").scrollIntoView();
}

const adminUsername = "admin";
const adminPassword = "admin123";

const username = "user";
const password = "user123";

let currentUser = "";

document
  .getElementById("password")
  .addEventListener("keypress", function (keyName) {
    if (keyName.key === "Enter") {
      login();
    }
  });

function login() {
  if (document.getElementById("username").value != username) {
    if (document.getElementById("username").value != adminUsername) {
      alert("Wrong Username! Try Again.");
    } else {
      if (document.getElementById("password").value != adminPassword) {
        alert("Wrong Password! Try Again.");
      } else {
        $(".login-layer").fadeOut("slow");
        $(".delete-button").css("display", "block");
        currentUser = "admin";
      }
    }
  } else {
    if (document.getElementById("password").value != password) {
      alert("Wrong Password! Try Again.");
    } else {
      $(".login-layer").fadeOut("slow");
      $(".delete-button").css("display", "none");
      currentUser = "user";
    }
  }
}
function logout() {
  $(".login-layer").fadeIn("slow");
}

const firstName = [];
const lastName = [];
const email = [];
const address = [];
const sessionLocation = [];
const scheduleDate = [];
const scheduleTime = [];

function submitButton() {
  if (document.getElementById("fname").value == "") {
    alert("Please fill the First Name");
  } else {
    if (document.getElementById("lname").value == "") {
      alert("Please fill the Last Name");
    } else {
      if (document.getElementById("email").value == "") {
        alert("Please fill the Email");
      } else {
        if (document.getElementById("address").value == "") {
          alert("Please fill the Address");
        } else {
          if (document.getElementById("session-location").value == "") {
            alert("Please fill the Session Location");
          } else {
            if (document.getElementById("session-date").value == "") {
              alert("Please fill the Session Date");
            } else {
              if (document.getElementById("session-time").value == "") {
                alert("Please fill the Session Time");
              } else {
                firstName.push(document.getElementById("fname").value);
                lastName.push(document.getElementById("lname").value);
                email.push(document.getElementById("email").value);
                address.push(document.getElementById("address").value);
                sessionLocation.push(
                  document.getElementById("session-location").value
                );
                scheduleDate.push(
                  document.getElementById("session-date").value
                );
                scheduleTime.push(
                  document.getElementById("session-time").value
                );
                showBookings();
              }
            }
          }
        }
      }
    }
  }
}
function deleteBooked(indexNumber) {
  index = indexNumber;
  firstName.splice(index, 1);
  lastName.splice(index, 1);
  email.splice(index, 1);
  address.splice(index, 1);
  sessionLocation.splice(index, 1);
  scheduleDate.splice(index, 1);
  scheduleTime.splice(index, 1);
  showBookings();
}

function showBookings() {
  let output = "";
  let bookNumber = 1;
  if (currentUser == "admin") {
    for (let index = 0; index < firstName.length; index++) {
      output += `<div><div class="delete-button" onclick="deleteBooked(${index})"><i class="bi bi-x-circle"></i></div>`;
      output += `<h3>Schedule ${bookNumber}</h3><hr/>`;
      output += `<h4> Name: <span>${firstName[index]}</span> <span>${lastName[index]}</span></h4>`;
      output += `<h4> Email: <span>${email[index]}</span></h4>`;
      output += `<h4> Address: <span>${address[index]}</span></h4>`;
      output += `<h4> Session Location: <span>${sessionLocation[index]}</span></h4>`;
      output += `<h4> Session Schedule: <span>${scheduleDate[index]} ${scheduleTime[index]}</h4></div>`;
      bookNumber++;
    }
  } else {
    for (let index = 0; index < firstName.length; index++) {
      output += `<div><div style="display:none !important " class="delete-button" onclick="deleteBooked(${index})"><i class="bi bi-x-circle"></i></div>`;
      output += `<h3>Schedule ${bookNumber}</h3><hr/>`;
      output += `<h4> Name: <span>${firstName[index]}</span> <span>${lastName[index]}</span></h4>`;
      output += `<h4> Email: <span>${email[index]}</span></h4>`;
      output += `<h4> Address: <span>${address[index]}</span></h4>`;
      output += `<h4> Session Location: <span>${sessionLocation[index]}</span></h4>`;
      output += `<h4> Session Schedule: <span>${scheduleDate[index]} ${scheduleTime[index]}</h4></div>`;
      bookNumber++;
    }
  }
  document.getElementById("booked-flex").innerHTML = output;
  document.getElementById("booked-flex").scrollIntoView();
  document.getElementById("booked-flex").style.animationName = submitButton;
}
