// const immCEO = <img src="img/wayne-barnett-founder-console.jpg" alt="immUno">;
// const immEditor = <img src="img/angela-caroll-chief-editor.jpg" alt="immUno"></img>;
// const immOM = <img src="img/walter-gordon-office-LockManager.jpg" alt="immUno"></img>;
// const immSMM = <img src="img/angela-lopez-social-media-LockManager.jpg" alt="immUno"></img>;
// const immDev = <img src="img/scott-estrada-developer.jpg" alt="immUno"></img>;
// const immDesigner = <img src="img/barbara-ramos-graphic-designer.jpg" alt="immUno"></img>;
const myDiv = document.querySelector(".div");
const arrTeam = [
  personOne = {
    name: "Wayne Barnett",
    role: "Founder and CEO",
    img: "img/wayne-barnett-founder-ceo.jpg",
  },
  personTwo = {
    name: "Angela Carroll",
    role: "Chief Editor",
    img: "img/angela-caroll-chief-editor.jpg",
  },
  personThree = {
    name: "Walter Gordon",
    role: "Office Manager",
    img: "img/walter-gordon-office-manager.jpg",
  },
  personFour = {
    name: "Angela Lopez",
    role: "Social Media Manager",
    img: "img/angela-lopez-social-media-manager.jpg",
  },
  personFive = {
    name: "Scott Estrada",
    role: "Developer",
    img: "img/scott-estrada-developer.jpg",
  },
  personSix = {
    name: "Barbara Ramos",
    role: "Grahic Design",
    img: "img/barbara-ramos-graphic-designer.jpg",
  }];

for (let i = 0; i < arrTeam.length; i++) {
  console.log(arrTeam[i]);
}

for (let i = 0; i < arrTeam.length; i++) {
    myDiv.innerHTML += `
    <div>${arrTeam[i].name}</div>
    <div>${arrTeam[i].role}</div>
    <img src=${arrTeam[i].img} alt="ImamgineCrew">
    `;
  }
  
