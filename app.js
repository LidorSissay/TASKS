//1
const getData = async url => fetch(url).then(response => response.json());
(async () => {
    try {
        const users = await getData('https://jsonplaceholder.typicode.com/posts')
        const showTitles = users
            .filter(({ userId }) => userId === 1)
        console.log(showTitles)
        document.getElementById('titles').innerHTML = showTitles
            .map(({ id, title }) => `
                <li>${id}: ${title}</li>
            `)
            .join('')
    } catch (error) { console.log(error) }
})()