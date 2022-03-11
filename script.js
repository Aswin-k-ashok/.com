$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky')
    } else {
      $('.navbar').removeClass('sticky')
    }
  })
  // toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active')
    $('.menu-btn i').toggleClass('active')
  })

  // typing Animation
  var typed = new Typed('.typing', {
    strings: [
      'websites',
      'web apps',
      'softwares',
      'pancakes',
      'and other things.',
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  })

  // owl carousel script

  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  })
})

$('#submit-form').submit((e) => {
  e.preventDefault()
  if (mailValidate() && nameValidate() && phoneValidate()) {
    $.ajax({
      //   url: 'https://script.google.com/macros/s/AKfycbwXeVmwLhtq1AKnCptOBsgljiIrFCW3XMeCAPdbWhsMvaRy030T8QE8cPXO14Bh_jJnRA/exec',
      //   data: $('#submit-form').serialize(),

      url: 'https://script.google.com/macros/s/AKfycbyDMtwGM8AoMzwK54p2pD_-8xUyrHUu4OCmc-cc/exec',
      data: $('#submit-form').serialize(),
      method: 'post',
      success: function (response) {
        alert('Hey there,Thank you for reaching out!…')
        window.location.reload()
        //window.location.href="https://google.com"
      },
      error: function (err) {
        alert('Something Error')
      },
    })
  } else {
    nameValidate()
    mailValidate()
    phoneValidate()
  }
})

function nameValidate() {
  var username = $('#name').val()
  var pattern = /^[a-zA-Z-()]+(\s+[-a-zA-Z- ()]+)*$/
  if (username == '') {
    $('#peer').html('Enter a Name')
    return false
  } else if (username.match(pattern)) {
    $('#peer').html('')
    return true
  }
}

function mailValidate() {
  var email = $('#email').val()
  var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/
  if (email == '') {
    $('#maal').html('Enter a Valid Email')
    return false
  } else if (email.match(pattern)) {
    $('#maal').html('')
    return true
  } else {
    $('#maal').html('Enter Correct Email')
    return false
  }
}

function phoneValidate() {
  var phone = $('#phone').val()
  var pattern = /^\d{10}$/
  var paattern = /^[a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/
  if (phone == '') {
    $('#teel').html('Enter valid number')
    return false
  } else if (phone.match(pattern)) {
    $('#teel').html('')
    return true
  } else if (phone.match(paattern)) {
    $('#teel').html("Don't Enter Char")
    return false
  } else {
    $('#teel').html('Enter 10 Number only')
    return false
  }
}
