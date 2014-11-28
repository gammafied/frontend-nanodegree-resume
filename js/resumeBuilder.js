  $("#main").append(["Warren Piece"]);
  var firstName = "marlina";
  var awesomeThoughts = "I am Freddy and I am AWESOME!";
  var firstRole = "Web Guru";
  
  var funThoughts = awesomeThoughts.replace("AWESOME", firstName);
  $("#main").append("<br />", funThoughts);
  
  var formattedName = HTMLheaderName.replace("%data%", firstName);  
  $("#header").prepend(formattedName);
  
  var formattedRole = HTMLheaderRole.replace("%data%", firstRole);
  $("#header").append(formattedRole);
      
      