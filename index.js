let personArray = [];
let personArray2 = [];
let num = 0;
let importantNum = 0;
async function getRandomPerson() {
  function pleaseWork(i) {
    return (myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        let index2 = Math.floor(Math.random() * personArray.length);
        resolve(
          ((personSelectedContainer.textContent = `${personArray[index2]}`),
          changeColor(index2))
        );
      }, 50);
    }));
  }
  function changeColor(i) {
    // console.log(personArray2);
    // console.log(personArray.length);
    luckyNum += 1;
    if (
      personArray[i] === "Danny Blonquist" &&
      luckyNum === personArray.length
    ) {
      const textContentContainer = document.querySelector(
        `.text-content-container-0`
      );
      // console.log("color displayed");
      textContentContainer.style.backgroundColor = "red";
      importantNum = 0;
      subtractWeightToRisk(0);
    } else if (
      personArray[i] === "Hayden Burker" &&
      luckyNum === personArray.length
    ) {
      const textContentContainer = document.querySelector(
        `.text-content-container-1`
      );
      // console.log("color displayed");
      textContentContainer.style.backgroundColor = "red";
      importantNum = 1;
      subtractWeightToRisk(1);
    } else if (
      personArray[i] === "Josh Caldwell" &&
      luckyNum === personArray.length
    ) {
      const textContentContainer = document.querySelector(
        `.text-content-container-2`
      );
      // console.log("color displayed");
      textContentContainer.style.backgroundColor = "red";
      importantNum = 2;
      subtractWeightToRisk(2);
    } else if (
      personArray[i] === "Cameron Fletcher" &&
      luckyNum === personArray.length
    ) {
      const textContentContainer = document.querySelector(
        `.text-content-container-3`
      );
      // console.log("color displayed");
      textContentContainer.style.backgroundColor = "red";
      importantNum = 3;
      subtractWeightToRisk(3);
    } else if (
      personArray[i] === "Kaylyn Fletcher" &&
      luckyNum === personArray.length
    ) {
      const textContentContainer = document.querySelector(
        `.text-content-container-4`
      );
      // console.log("color displayed");
      textContentContainer.style.backgroundColor = "red";
      importantNum = 4;
      subtractWeightToRisk(4);
    } else if (
      personArray[i] === "Tyler Gilroy" &&
      luckyNum === personArray.length
    ) {
      const textContentContainer = document.querySelector(
        `.text-content-container-5`
      );
      // console.log("color displayed");
      textContentContainer.style.backgroundColor = "red";
      importantNum = 5;
      subtractWeightToRisk(5);
    } else if (
      personArray[i] === "Hunter McCurdy" &&
      luckyNum === personArray.length
    ) {
      const textContentContainer = document.querySelector(
        `.text-content-container-6`
      );
      // console.log("color displayed");
      textContentContainer.style.backgroundColor = "red";
      importantNum = 6;
      subtractWeightToRisk(6);
    } else if (
      personArray[i] === "Ian Miller" &&
      luckyNum === personArray.length
    ) {
      const textContentContainer = document.querySelector(
        `.text-content-container-7`
      );
      // console.log("color displayed");
      textContentContainer.style.backgroundColor = "red";
      importantNum = 7;
      subtractWeightToRisk(7);
    } else if (
      personArray[i] === "Tyler Moline" &&
      luckyNum === personArray.length
    ) {
      const textContentContainer = document.querySelector(
        `.text-content-container-8`
      );
      // console.log("color displayed");
      textContentContainer.style.backgroundColor = "red";
      importantNum = 8;
      subtractWeightToRisk(8);
    } else if (
      personArray[i] === "Andrew Parsons" &&
      luckyNum === personArray.length
    ) {
      const textContentContainer = document.querySelector(
        `.text-content-container-9`
      );
      // console.log("color displayed");
      textContentContainer.style.backgroundColor = "red";
      importantNum = 9;
      subtractWeightToRisk(9);
    } else if (
      personArray[i] === "Sue Roy" &&
      luckyNum === personArray.length
    ) {
      const textContentContainer = document.querySelector(
        `.text-content-container-10`
      );
      // console.log("color displayed");
      textContentContainer.style.backgroundColor = "red";
      importantNum = 10;
      subtractWeightToRisk(10);
    } else if (
      personArray[i] === "Braxton Snow" &&
      luckyNum === personArray.length
    ) {
      const textContentContainer = document.querySelector(
        `.text-content-container-11`
      );
      // console.log("color displayed");
      textContentContainer.style.backgroundColor = "red";
      importantNum = 11;
      subtractWeightToRisk(11);
    } else if (
      personArray[i] === "Christian Zurcher" &&
      luckyNum === personArray.length
    ) {
      const textContentContainer = document.querySelector(
        `.text-content-container-12`
      );
      // console.log("color displayed");
      textContentContainer.style.backgroundColor = "red";
      importantNum = 12;
      subtractWeightToRisk(12);
    }
    // console.log(luckyNum);
  }
  const personSelectedContainer = document.querySelector(
    ".person-selected-container"
  );
  let luckyNum = 0;
  const textContentContainer = document.querySelector(
    `.text-content-container-${importantNum}`
  );
  textContentContainer.style.backgroundColor = "transparent";
  for (let i = 0; i < personArray.length; i++) {
    await pleaseWork(i);
    // await changeColor(i);
  }
}

function generatePeopleInClass() {
  for (let i = 0; i < personArray.length; i++) {
    const div1 = document.createElement("div");
    div1.className = "person-container";
    const div2 = document.createElement("div");
    div2.className = "person-button-container";
    const div3 = document.createElement("div");
    div3.className = `text-content-container-${num}`;
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const button3 = document.createElement("button");
    div3.textContent = `${personArray[num]}`;
    button1.innerHTML = '<i class="fa-solid fa-plus"></i>';
    button1.className = `button1`;
    button3.textContent = 1;
    button3.id = `button3-${num}`;
    button2.innerHTML = '<i class="fa-solid fa-minus"></i>';
    button2.className = `button2`;
    button1.addEventListener("click", () => addWeightToRisk(i));
    button2.addEventListener("click", () => subtractWeightToRisk(i));
    leftBodyContainer.appendChild(div1);
    leftBodyContainer.appendChild(div2);
    div1.appendChild(div3);
    div2.appendChild(button1);
    div2.appendChild(button3);
    div2.appendChild(button2);
    num += 1;
  }
}

function addWeightToRisk(number) {
  personArray.push(personArray[number]);

  const button3 = document.getElementById(`button3-${number}`);
  button3.textContent++;
}

function subtractWeightToRisk(number) {
  for (let i = personArray.length - 1; i >= 0; i--) {
    const button3 = document.getElementById(`button3-${number}`);
    if (personArray[number] === personArray[i] && button3.textContent > 1) {
      let removeItem = personArray.splice(i, 1);

      button3.textContent--;
      break;
    } else {
      button3.textContent = 1;
      break;
    }
  }
}
const email = "";
const pass = "";
const userData = {
  email: email,
  password: pass,
};
async function fetchPeople() {
  try {
    const auth = await fetch("https://api.devpipeline.org/user/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const authObject = await auth.json();
    const authToken = authObject.auth_info.auth_token;
    const people = await fetch("https://api.devpipeline.org/users", {
      headers: { auth_token: authToken },
    });
    const data = await people.json();
    for (let i = 0; i < data.users.length; i++) {
      personArray.push(
        `${data.users[i].first_name} ${data.users[i].last_name}`
      );
      personArray2.push(
        `${data.users[i].first_name} ${data.users[i].last_name}`
      );
    }
  } catch (error) {
    console.log("Error", error);
  }
}

const pushMe = document.getElementById("pushMe");
pushMe.addEventListener("click", getRandomPerson);

const leftBodyContainer = document.querySelector(".left-body-container");
executeFunctionsInOrder();

async function executeFunctionsInOrder() {
  await fetchPeople();
  generatePeopleInClass();
}
