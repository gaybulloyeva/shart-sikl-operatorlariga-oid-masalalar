function solve() {
    let S = prompt("boshlang'ich summani kiriting")
    let p = prompt("foizni kiriting")
    let k = 0

    if (p > 0 && p < 25) {
        while (S < S * 2) {
            S = S + (S * p / 100)
            k++
        }

        console.log(k)
    }

    else {
        console.log("0<p<25")
    }
}

solve()