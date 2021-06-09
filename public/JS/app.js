const more = document.querySelectorAll('.cube');
more.forEach((x) => x.addEventListener('click', (e)=>{showMore(e)}));

function showMore(e) {
    const target = e.target;
    const ctx = target.textContent;
    const parent = target.parentNode;
    const p = parent.querySelector('.details')

    if (ctx === 'More') {

        p.style.display = 'block';
        target.textContent = 'Less';

    } else if (ctx === 'Less') {
        p.style.display = 'none';
        target.textContent = "More";
    }

}