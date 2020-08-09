function render (id) {
  document.getElementsByClassName('r-header')[0].innerText = document.getElementById('header').value
  document.getElementsByClassName('r-title')[0].innerText = document.getElementById('title').value
  document.getElementsByClassName('r-description')[0].innerText = document.getElementById('description').value
  document.getElementsByClassName('r-color')[0].style.backgroundColor = document.getElementById('color').value
  if (document.forms[0].bigimg.value === 'true') {document.getElementsByClassName('r-image')[1].src = '';document.getElementsByClassName('r-image')[0].src = document.getElementById('image').value}
  if (document.forms[0].bigimg.value === 'false') {document.getElementsByClassName('r-image')[0].src = '';document.getElementsByClassName('r-image')[1].src = document.getElementById('image').value}
  document.getElementsByClassName('r-url')[0].href = '/' + id
  document.getElementsByClassName('r-url')[1].href = '/' + id
  document.getElementsByClassName('r-url')[2].href = '/' + id
  document.getElementsByClassName('r-url')[0].innerText = 'https://e.pmh.codes/' + id
  document.getElementsByClassName('r-url')[2].innerText = 'https://e.pmh.codes/' + id
  document.getElementsByClassName('r-code')[0].innerText = `<meta name="og:site_name" content="${document.getElementById('header').value}">
<meta property="og:title" content="${document.getElementById('title').value}">
<meta property="og:description" content="${document.getElementById('description').value}">
<meta name="theme-color" content="${document.getElementById('color').value}">
<meta property="og:image" content="${document.getElementById('image').value}">
<meta name="twitter:card" content="${document.forms[0].bigimg.value === 'true'?'summary_large_image':'summary'}">
  `
}