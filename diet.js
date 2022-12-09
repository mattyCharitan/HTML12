class Weight {
    constructor(date, weight) {
        this.date = date;
        this.weight = weight;
    }
}

class Person {
    static CODE = 1;
    constructor(id, name) {
        this.code = Person.CODE++;
        this.id = id;
        this.name = name;
    }
}
class PersonOnDiet extends Person {
    static personArray = new Array;
    constructor(id, name, onDiet, currentWeight) {
        super(id, name);
        this.onDiet = onDiet;
        this.currentWeight = new Weight(new Date().toJSON().slice(0, 10), currentWeight);
    }
    static CalcAverageWeight(allWeights) {
        var averageWeight = 0;
        for (let i = 0; i < allWeights.length; i++) {
            averageWeight += parseInt(allWeights[i].currentWeight.weight);
        }
        return averageWeight / allWeights.length;

    }
}
const DETAILS = ["id", "name", "onDiet", "currentWeight"];
const PERSON = PersonOnDiet.personArray;

var btnSave = document.getElementById("btnSave");

btnSave.onclick = () => {
    let personId = document.getElementById("id").value;
    let personName = document.getElementById("name").value;
    let persononDiet = document.getElementById("onDiet").checked;
    let personcurrentWeight = document.getElementById("currentWeight").value;
    var newPerson = new PersonOnDiet(personId, personName, persononDiet, personcurrentWeight)
    PERSON.push(newPerson);
};

const FindPersonDetailes = (() => {
    var nameToFinde = document.getElementById("nameToFinde");
    nameToFinde.setAttribute("placeholder", "Enter a name to finde:");
    var btnFind = document.getElementById("btnFind");
    btnFind.onclick = () => {
        document.getElementById("p1").innerHTML = ""
        var foundPerson = PERSON.find(person => person.name === nameToFinde.value)
        for (let prop in foundPerson) {
            if(prop==="currentWeight"){
                document.getElementById("p1").innerHTML += `Date: ${foundPerson[prop].date}  , weight: ${foundPerson[prop].weight}`
            }
            else document.getElementById("p1").innerHTML += `${prop}: ${foundPerson[prop]},  `
        }

    };
})();

const OnDietNow = (() => {

    var btnCalcWeight = document.getElementById("btnCalcWeight");
    btnCalcWeight.onclick = () => {
        document.getElementById("p").innerHTML = ""
        var chackOnDiet = new Array;
        for (let i = 0; i < PERSON.length; i++) {
            console.log(PERSON[i].onDiet)
            if (PERSON[i].onDiet === true) {
                chackOnDiet.push(PERSON[i])
            }
        }

        document.getElementById("p").innerHTML = `The avarage weight: ${PersonOnDiet.CalcAverageWeight(chackOnDiet)}`;
    };
})();
document.getElementById("btnCanvas").onclick = () => {
    let jsonData =[];
    let avg = 0;
    for(let i = 0; i < PERSON.length;i++){
        jsonData.push({label: `${PERSON[i].name}` , y: parseInt(PERSON[i].currentWeight.weight)});
        avg+=parseInt(PERSON[i].currentWeight.weight);
    }
    jsonData.push({label:"avg weight of all people " , y : avg/PERSON.length})
    
    console.log(jsonData);

	var chart = new CanvasJS.Chart("showDiagram", {
		title:{
			text: "Weight of people in diet:"              
		},
		data: [              
		{
			type: "column",
            
			dataPoints:jsonData
		}
		]
	});
	chart.render();

};
