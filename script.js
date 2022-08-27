const cookieBox = document.querySelector(".wrapper");
const acceptBtn = cookieBox.querySelector(".buttons button");

acceptBtn.onclick = () => {
  document.cookie = "CookieBy=SHuke; max-age =" + 60 * 60 * 24 * 30;
  if (document.cookie) {
    cookieBox.classList.add("hide");
  } else {
    alert("Cookie can't be set!");
  }
};
// hiding the cookie box if cookies is set and not expired
let checkCookie = document.cookie.indexOf("CookieBy=SHuke");
checkCookie != -1
  ? cookieBox.classList.add("hide")
  : cookieBox.classList.remove("hide");
