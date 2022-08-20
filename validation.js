function passwordsMatch() {
  const password1 = document.getElementById('password1').value;
  const password2 = document.getElementById('password2').value;
  if (password1 != password2) {
    alert('Passwords did not match');
  } else {
    alert('Passwords match!');
  }
}
