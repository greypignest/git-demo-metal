//Write the code here
window.onload = () => {
    const flashes = document.querySelectorAll('.flash');
    setInterval(( => {
        for (let flash of flashes) {
            // if (flash.classList.contains('red'))
            flash.classList.toggle('red');
        }
    }))
}