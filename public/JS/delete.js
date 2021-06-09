const divDet = document.querySelector('.details');
divDet.addEventListener('click', async (e) => {
    const target = e.target;
    const id = target.id;
    if (target.textContent === 'Delete') {
        window.location.href = '/';
        await fetch('http://localhost:3000/details/' + id + '/delete');
    }
});