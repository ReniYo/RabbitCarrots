// javascript

// I couldn't quite understand the idea, so I decided to write the easiest
// logic possible for the carrots, the gardens and the rabbit :)

const carrotsNum = document.getElementById("carrots-num")
const calcJumps = document.getElementById("calc-jumps")
const jumpsResult = document.getElementById("jumps-result")

calcJumps.addEventListener("click", function() {
    let jumps = 0
    if(carrotsNum.value > 0) {
        jumps = Math.ceil(carrotsNum.value / 4)
        jumpsResult.textContent = `If you want to take all ${carrotsNum.value} carrots,
        you will have to make ${jumps} jumps.`
        carrotsNum.value = ''
    }else{
        jumpsResult.innerHTML = `<p class="error-msg">Let's count the carrots!</p>`
    }
    
})
