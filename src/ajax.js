ajaxSend()

function ajaxSend () {
  document.getElementsByClassName('img')[0].src = document.getElementById('image').value
  const xhr = new XMLHttpRequest()
  xhr.open('get', '/api/create?' + new URLSearchParams(Array.from(new FormData(document.forms[0]))).toString())
  xhr.onreadystatechange = () => {
    if(xhr.readyState !== 4) return
    if(xhr.status === 200) {
      history.replaceState(null, document.getElementsByTagName("title")[0].innerHTML, '/edit/' + JSON.parse(xhr.responseText).id)
      render(JSON.parse(xhr.responseText).id)
    }
  }
  xhr.send()
}
