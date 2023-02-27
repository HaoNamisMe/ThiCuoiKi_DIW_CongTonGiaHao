const next = document.querySelector('.next')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
const prev = document.querySelector('.prev')
var translateY = 0
var count = commentItem.length

//click
next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})
