
function cutRibbon() {
    document.querySelector('.ribbon').style.display = 'none';
    document.querySelector('.cloud-text').style.display = 'block';
    document.querySelector('.balloons').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.letter').style.display = 'block';
    }, 30000);
    setTimeout(() => {
        document.querySelector('.comic').style.display = 'block';
    }, 40000);
}
