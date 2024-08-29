function solve() {
    let distance = 10
    let general = 10
    let day = 1

    while (general < 200) {
        distance = distance * ((100 + p) / 100)
        general = general + distance
        day++
    }

    console.log("jami kunlar " + day + "jami yugurgan masofa " + general)
}

solve()