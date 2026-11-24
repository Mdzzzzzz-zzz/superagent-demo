const out = document.getElementById('out')
let count = 0
document.getElementById('ping').addEventListener('click', () => {
  count += 1
  out.textContent = \`pong \${count}\`
})
