$('document').ready(function() {


    $("form[name='form']").validate({
  
      rules: {
  
          name: {
              required: true,
              minlength: 4
          },
          u_name: {
  
              required: true,
              minlength: 4
          },
          email: {
  
              required: true,
              email: true
  
          },
  
          password:{
              required: true,
          minlength: 5
          },
  
          c_password:{
              required: true,
          minlength: 5
          },
          tel: {
              
  
              required: true,
          minlength: 10,
          maxlength:10
  
          }
      },
      messeages: {
  
          name: {
              required: "PLEASE ENTER NAME",
              minlength: "it must be of more than 3 characters"
          },
          u_name: {
  
              required: "PLEASE ENTER NAME",
              minlength: "it must be of more than 3 characters"
  
          },
          email:{}
  
  
      },
  
      submitHandler: function(form) {
          form.submit();
        }
     
  
  
    })
  
  
  
   
  
  
   $('#check').click(function(){
      if(document.getElementById('check').checked) {
      $('#password').get(0).type = 'text';
    } else {
        $('#password').get(0).type = 'password';
    }
  });
  
  $('#check1').click(function(){
      if(document.getElementById('check1').checked) {
      $('#c_password').get(0).type = 'text';
    } else {
        $('#c_password').get(0).type = 'password';
    }
  });
  
  $( function() {
      $( "#city" ).selectmenu();
  
    } );
  
  
  $( function() {
      var availableSkills = [
        "Dance",
        "Singling",
        "Drawing",
        "Painting",
        "Chess",
        "Football",
        "Criket",
        "Badminton",
        "Cooking",
        "Music",
        "Travelling",
        "Treking",
        "Hustle",
        "Chill",
        
      ];
      $( "#skills" ).autocomplete({
        source: availableSkills
      });
    } );
  
    
  
  
  
  
  })

