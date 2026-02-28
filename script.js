const searchBar = document.getElementById('searchBar');

searchBar.value = ''

searchBar.addEventListener('input', () => {
    const pages = [   
        {page: 'fetch command', url: './pages/fetch-command.html'}
    ];

    const searched = searchBar.value;

    const resultBox = document.getElementById('results')

    resultBox.innerHTML = ''

    const fuse = new Fuse(pages, {
        keys: ['page'],
        threshold: 0.3
    });

    const matches = fuse.search(searched)

    if (matches.length === 0 && searched.length != 0) {
        const div = document.createElement('div')
        div.innerHTML = 'No matches'
        div.className = 'resultItem'
        resultBox.appendChild(div)
    } else if (searched.length === 0) {
        resultBox.innerHTML = ''
    } else {        
        matches.forEach(match => {
        const div = document.createElement('div')
        div.innerHTML = match.item.page
        div.className = 'resultItem'
        resultBox.appendChild(div)

        div.addEventListener('click', () => {
            window.location.href = match.item.url
        })

    })
    }
    
});
