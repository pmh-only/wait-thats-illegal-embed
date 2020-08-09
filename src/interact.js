const pickr = Pickr.create({
  el: '.color-picker',
  theme: 'nano',
  default: document.getElementById('color').value,
  components: {
      preview: true,
      opacity: false,
      hue: true,
      interaction: {
        hex: true,
        input: true,
        save: true
      }
  }
})

pickr.on('save', (color) => {
  document.getElementById('color').value = color.toHEXA()
  ajaxSend()
})
document.forms[0].addEventListener('input', ajaxSend)
