function checkLoginState() {

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);

  });
}


function statusChangeCallback(response) {

  console.log('Facebook login status changed.');
  console.log(response);
  
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);

  }
}


function changeUser(response){
  
  //hide the facebook login button
  $("p.facebookLogin").hide();

  // replace the name with facebook username
  $("#name").text(response.name);
  
  // replace the photo with facebook profile photo
  $("#photo").attr("src", response.picture.data.url);
  
}