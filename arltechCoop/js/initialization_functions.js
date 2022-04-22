function add_validation_links() {
  let loc = window.location.href;
  let HTMLvalidLinkStr = 'http://validator.w3.org/check?uri=' + loc;
  let CSSvalidLinkStr = 'http://jigsaw.w3.org/css-validator/validator?uri=' +
                        loc + '?profile=css3';
  document.getElementById("vLink1").setAttribute("href", HTMLvalidLinkStr);
  document.getElementById("vLink2").setAttribute("href", CSSvalidLinkStr);
}
function add_navigation_links() {
  let navElement = document.getElementById("common_nav"); 
  let navLinks = ""
  let navLinkParts = [
    ["about.html", "About arlTechCoop"],
    ["tech.html", "Tech We Use"],
    ["signup.html", "Sign Up Form"]
  ];
  for (let i = 0; i < navLinkParts.length; i++) {
    navLinks += '<p><a class="navlinks" href="' + navLinkParts[i][0];
    navLinks += '">' + navLinkParts[i][1] + '</a></p>\n';
  }
  navElement.innerHTML = navLinks;
}
