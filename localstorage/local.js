function login() {
    var username = uname.value
    localStorage.setItem("username" ,username)
    window.location = 'dash.html'
}

// result.innerHTML = "Welcome" +username