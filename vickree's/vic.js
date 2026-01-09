function download() {
    alert('backend needed😁')
}
const tap = document.getElementById('tap');
const menu = document.getElementById('menu')
tap.addEventListener('click', () => {
    menu.classList.toggle('show')
})
document.getElementById('learn-more').addEventListener('click', async () => {
    const container = document.getElementById('container');
    try {
        const resp = await fetch('learn-more.html')
        if (!resp.ok) throw new Error('page not found');

        const html = await resp.text();
        container.innerHTML = html;
        
    } catch (err) {
        container.innerHTML = `<p>Error Loading Page: ${err.message}</p>`
    }
})
 
document.getElementById('order').addEventListener('click', async () => {
    const container = document.getElementById('container');
    try {
        const resp = await fetch('learn-more.html')
        if (!resp.ok) throw new Error('page not found');

        const html = await resp.text();
        container.innerHTML = html;
        
    } catch (err) {
        container.innerHTML = `<p>Error Loading Page: ${err.message}</p>`
    }
})
 
document.getElementById('aboutus').addEventListener('click', async () => {
    const container = document.getElementById('container');
    try {
        const resp = await fetch('aboutus.html')
        if (!resp.ok) throw new Error('page not found');

        const html = await resp.text();
        container.innerHTML = html;
        
    } catch (err) {
        container.innerHTML = `<p>Error Loading Page: ${err.message}</p>`
    }
})
 
