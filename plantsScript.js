const monsteraButton = document.getElementById("MonsteraButton");
const cactusButton = document.getElementById("CactusButton");
const calatheaButton = document.getElementById("CalatheaButton");

let monsteraWateredTimes = 0;
let cactusWateredTimes = 0;
let calatheaWateredTimes = 0;
let postiveButtonColor = "#a9d36b";
let negativeButtonColor = "Crimson";

let monsteraWaterStatus = ["Needs More!","Almost there!", "Perfect!", "TOO MUCH!!!"];
let monsteraButtonColor = [postiveButtonColor, postiveButtonColor, postiveButtonColor, negativeButtonColor];

let cactusWaterStatus = ["Perfect!", "TOO MUCH!!!"];
let cactusButtonColor = [postiveButtonColor, negativeButtonColor];

let calatheaWaterStatus = ["Needs More!", "Perfect!", "TOO MUCH!!!"];
let calatheaButtonColor = [postiveButtonColor, postiveButtonColor, negativeButtonColor];

let waterPlant = (plantButton,buttonName,plantWaterStatus,plantButtonColor,numberOfTimesWatered) => 
{
    document.getElementById(buttonName).innerHTML = plantWaterStatus[numberOfTimesWatered];
    plantButton.style.backgroundColor = plantButtonColor[numberOfTimesWatered];
    return Math.min(numberOfTimesWatered+1, plantWaterStatus.length-1)
}


monsteraButton.onclick = () => {
   monsteraWateredTimes = waterPlant (monsteraButton,"MonsteraButton",monsteraWaterStatus,monsteraButtonColor,monsteraWateredTimes);
    

   /* document.getElementById("MonsteraButton").innerHTML = monsteraWaterStatus[monsteraWateredTimes];
    monsteraButton.style.backgroundColor = monsteraButtonColor[monsteraWateredTimes];
    monsteraWateredTimes = Math.min(monsteraWateredTimes+1, monsteraWaterStatus.length-1)
    console.log(monsteraWateredTimes);*/

    

    
    /*if (monsteraWateredTimes < 2) 
    { 
        document.getElementById("MonsteraButton").innerHTML = 'Needs More!';
    }
    else if (monsteraWateredTimes === 2) 
    {
        document.getElementById("MonsteraButton").innerHTML = 'Almost there!'; 
    } 
    else if (monsteraWateredTimes === 3) 
    {
        document.getElementById("MonsteraButton").innerHTML = "Perfect!";
    }  
    else
    {
        document.getElementById("MonsteraButton").innerHTML = 'TOO MUCH!!!';
        monsteraButton.style.backgroundColor = "Crimson";
    }*/
};

cactusButton.onclick = () => {
    cactusWateredTimes = waterPlant (cactusButton,"CactusButton",cactusWaterStatus,cactusButtonColor,cactusWateredTimes);
};

    /*
    if (cactusWateredTimes < 1) 
    {
        cactusWateredTimes++;
        if (cactusWateredTimes < 1) 
        {
        document.getElementById("CactusButton").innerHTML = 'Needs More!';
        } else if (cactusWateredTimes === 1) {
            document.getElementById("CactusButton").innerHTML = "Perfect!";
        }
    } else {
        document.getElementById("CactusButton").innerHTML = 'TOO MUCH!!!'
        cactusButton.style.backgroundColor = "Crimson";
    }
};*/

calatheaButton.onclick = () => {
    calatheaWateredTimes = waterPlant (calatheaButton,"CalatheaButton",calatheaWaterStatus,calatheaButtonColor,calatheaWateredTimes);
};

    /*
    if (calatheasWateredTimes < 2) {
        calatheasWateredTimes++;
        if (calatheasWateredTimes < 2) {
        document.getElementById("CalatheasButton").innerHTML = 'Needs More!';
        } else if (calatheasWateredTimes === 2) {
            document.getElementById("CalatheasButton").innerHTML = "Perfect!";
        }
    } else {
        document.getElementById("CalatheasButton").innerHTML = 'TOO MUCH!!!'
        calatheaButton.style.backgroundColor = "Crimson";
    }
}; */