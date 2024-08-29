function solve() {
    let n = +prompt()
    let k = 1
    let sum = 0

    while (sum < n) {
        sum = sum + k
        k++
    }

    console.log("1 dan " + (k - 1) + " gacha bo'lgan yig'indi: " + sum)
}

solve()