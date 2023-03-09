let fullName;
let age;
const course = ["Guidance", "Counseling", "Therapy"];
const startingDate = ["April", "May", "June"];

const Person = [
  {
    Fullname: fullName,
    Age: age,
    CourseNumber: course,
    StartingMonth: startingDate,
  },
];

enterFullName();

function enterFullName() {
  fullName = prompt("Enter your full name");
  if (!isNaN(fullName)) {
    alert("Invalid name");
    enterFullName();
  } else if (isNaN(fullName)) {
    enterAge();
  }
}
function enterAge() {
  age = parseInt(prompt("Enter your age (16 to 101)"));
  if (isNaN(age) || age < 16 || age > 101) {
    alert("Age must be between 16 and 101");
    enterAge();
  } else if (!isNaN(age) || age < 16 || age > 101) {
    alert(
      "The data you've submitted is the following: " +
        fullName +
        ", " +
        age +
        " y.o"
    );
  }
  pathway();
}
function pathway() {
  let option;
  do {
    option = prompt(
      "To choose your course, enter '1'. To start over, enter '2'. If you want to finish, enter '0'"
    );
    rewriteOption(option);
  } while (option != 0);
}

function rewriteOption(number) {
  while (number != "0") {
    switch (number) {
      case "1":
        chooseCourse();
      case "2":
        enterFullName();
      default:
        alert("The choice you've entered is invalid");
        pathway();
    }
  }
}

function chooseCourse(course) {
  course = prompt(
    `Enter the number of the course you want to attend to
                    [1] ${"Guidance"}
                    [2] ${"Counseling"}
                    [3] ${"Therapy"}
                    [0] to Exit`
  );
  switch (course) {
    case "1":
      alert("You've chosen [1] Guidance");
      break;
    case "2":
      alert("You've chosen [2] Counseling");
      break;
    case "3":
      alert("You've chosen [3] Therapy");
      break;
    case "0":
      break;
    default:
      alert("The choice you've entered is invalid");
      chooseCourse();
  }
  chooseDate();
}

// let date = prompt(`Enter date ${new Date()}`

function chooseDate(startingDate) {
  startingDate = prompt(
    `Enter the number of the course you want to attend to
                          [1] ${"April"}
                          [2] ${"May"}
                          [3] ${"June"}
                          [0] to Exit`
  );
  while (startingDate != "0") {
    switch (startingDate) {
      case "1":
        alert("You've chosen to start your course in [1] April ");
        break;
      case "2":
        alert("You've chosen to start your course in [2] May");
        break;
      case "3":
        alert("You've chosen to start your course in [3] June");
        break;
      case "0":
        break;
      default:
        alert("The choice you've entered is invalid");
        chooseDate();
    }
    startingDate = 0;
  }
  pathway();
}

//for (i = 0; i <= 25; i++) {
//   if (i + 1) {
//     alert(`${fullName} you're the attendant number ${i}`);
//     break;
//   }
// }
