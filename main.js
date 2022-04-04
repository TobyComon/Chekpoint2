let steamPoints = 5
let pps = 0
let mineAmount = 0
let upgrades = []

let clickUpgrades = {
    MountainDew: {
        name: "MOUNTAIN DEW : " ,
        price: 100,
        quantity: 0,
        multiplier: 10
    },

    Doritos: {
        name: "DORITOS : ",
        price: 5,
        quantity: 0,
        multiplier: 5
    }
}

let autoUpgrades = {
    summerSale: {
        name: "SUMMER SALE : ",
        price: 1000,
        quantity: 0,
        multiplier: 100
    },
    steamDeck: {
        name: "STEAM DECK : ",
        price: 500,
        quantity: 0,
        multiplier:50
    }
};



function inflation(key){

if (clickUpgrades[key].quantity >= 1) {
    clickUpgrades[key].price + 100
    drawUpgrades(key)
    }
    if (autoUpgrades[key].quantity >= 1) {
        autoUpgrades[key].price + 500
        drawUpgrades(key)
    }
}


function buyUpgrade(key){
    if (steamPoints >= clickUpgrades[key].price) {
        clickUpgrades[key].quantity ++;
      mineAmount =  mineAmount + clickUpgrades[key].multiplier;
      steamPoints -= clickUpgrades[key].price
      clickUpgrades[key].price += 50
        upgrades.push(key)
       
        drawPoints()
        drawUpgrades(key)
    }

    drawMineAmount()
}

function buyAutoUpgrade(key) {
    if (steamPoints >= autoUpgrades[key].price) {
        autoUpgrades[key].quantity ++;
        steamPoints -= autoUpgrades[key].price
        autoUpgrades[key].price += 500
        pps = pps + autoUpgrades[key].multiplier
        upgrades.push(key)
        drawPoints()
        drawUpgrades(key)
        
    }
}

function autoUpgrade1() {
    if (autoUpgrades.steamDeck.quantity >= 1){
        steamPoints = steamPoints + autoUpgrades.steamDeck.multiplier
        drawPoints()
    }
}

// function buyMountainDew(){
//     if (steamPoints >=1 )  {

//         mountainDew++

//         steamPoints -= 1
        
//         drawUpgrades()
//         drawPoints()
//     }
    // else{
    //     const Toast = Swal.mixin({
    //         toast: true,
    //         position: 'top-end',
    //         showConfirmButton: false,
    //         timer: 3000,
    //         timerProgressBar: true,
    //         didOpen: (toast) => {
    //           toast.addEventListener('mouseenter', Swal.stopTimer)
    //           toast.addEventListener('mouseleave', Swal.resumeTimer)
    //         }
    //       })
          
    //       Toast.fire({
    //         icon: 'success',
    //         title: 'Signed in successfully'
    //       })

    // }
// }

function drawPoints() {
document.getElementById("points").innerText = "STEAM POINTS: " + steamPoints

}


function drawUpgrades() {
    // let template = ''
    // //    let upgradeName = clickUpgrades[key].name
    // //     let upgradeCount = clickUpgrades[key].quantity
    //     template += /*html*/ `
    
    // <div class="text-danger">
    //     <h3>${upgrades}</h3>
        
    // </div>
    
    
    // `

    document.getElementById("dor").innerHTML = `${clickUpgrades.Doritos.name}  ${clickUpgrades.Doritos.price} STEAM POINTS`
    document.getElementById("mtd").innerHTML = `${clickUpgrades.MountainDew.name}  ${clickUpgrades.MountainDew.price} STEAM POINTS`
    document.getElementById("doritos").innerHTML = `${clickUpgrades.Doritos.name} ${clickUpgrades.Doritos.quantity}`
    document.getElementById("md").innerHTML = `${clickUpgrades.MountainDew.name} ${clickUpgrades.MountainDew.quantity}`
    document.getElementById("sumsale").innerHTML = `${autoUpgrades.summerSale.name}  ${autoUpgrades.summerSale.price} STEAM POINTS`
    document.getElementById("sdeck").innerHTML = `${autoUpgrades.steamDeck.name}  ${autoUpgrades.steamDeck.price} STEAM POINTS`
    document.getElementById("summerSale").innerHTML = `${autoUpgrades.summerSale.name} ${autoUpgrades.summerSale.quantity}`
    document.getElementById("steamDeck").innerHTML = `${autoUpgrades.steamDeck.name} ${autoUpgrades.steamDeck.quantity}`
    drawMineAmount()
}


function drawMineAmount() {

document.getElementById("mine").innerHTML =  "STEAM POINTS PER CLICK : " + mineAmount
document.getElementById("pps").innerHTML = "STEAM POINTS PER 3 SECONDS : " + pps
}

function mine() {
    
  steamPoints = steamPoints + mineAmount
    
    drawPoints()

}





drawMineAmount()

setInterval(autoUpgrade1, 3000)

