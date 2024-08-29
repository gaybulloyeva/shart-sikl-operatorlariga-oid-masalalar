function solve() {
    let a = +prompt()
    let b = +prompt()
    let count = 0

    while (a >= b) {
        a = a - b
        count++
    }

    console.log(count + " ta joylashtirish mumkin")
}

solve()