//3
const getData = async url => fetch(url).then(response => response.json());
(async () => {
    try {
        const users = await getData('https://jsonplaceholder.typicode.com/users')
        const earthStatic = users
            .reduce((acc, { address: { geo: { lat } } }) => {
                if (+lat > 0) {
                    acc.North += 1
                } else {
                    acc.South += 1
                }
                return acc
            }, { North: 0, South: 0 })
        const { North, South } = earthStatic
        document.getElementById('sen').innerHTML = `
            In the north: ${North} users.\nIn the south: ${South} users.
        `
    } catch (error) { console.log(error) }
})()