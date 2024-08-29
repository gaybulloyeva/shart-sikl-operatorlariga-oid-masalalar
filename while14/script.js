function solve() {
    let a = +prompt()
    let k = 1
    let sum = 0

    while (sum <= a) {
        sum = sum + (1 / k)
        k++
    }

    console.log("1 dan " + (k - 1) + " gacha bo'lgan yig'indi: " + sum)
}

solve()