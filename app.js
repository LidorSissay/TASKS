//2
const getData = async url => fetch(url).then(response => response.json())
const suiteUsers = async () => {
    try {
        const users = await getData('https://jsonplaceholder.typicode.com/users')
        document.getElementById('suite-users').innerHTML = users
        .filter(({ address: { suite }}) => suite.includes('Suite') )
        .map(({ address: { city }, id, name}) => `
            <tr>
                <td>${city}</td>
                <td>${id}</td>
                <td>${name}</td>
            </tr>
        `)
        .join('')
    } catch(err) { console.log(err) }
}
suiteUsers()