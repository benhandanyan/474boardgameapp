$(document).ready(function(){
  var games_list = [];
  $.ajax({
    
    url: 'api/games',
    
    type: "GET",
    
    data: {"key":"value"},
    
    success: function(data){
      games_list = data;
      
      for (var i = 0; i < data.length; i++) {
          //$('.games').append("<li class=\"game\" data-index="+i+">"+data[i].game+ " :: "+data[i].playingtime +" minutes</li>");
          $('#jq-games').append("<li class=\"game\" title=\""+data[i].description+
          "\" data-index="+i+
          "><span class=\"thumb_wrapper\"><img class=\"thumb\" src=\"http:"
          +data[i].thumbnail+"\"/></span><span class=\"txt\">"+data[i].game+ " :: "+data[i].playingtime 
          +" minutes</span></li>");
      }
      
      $("#jq-games .game").click(function(ev){
        var j = parseInt($(ev.currentTarget).attr('data-index'));
        var game_json = games_list[j];
        alert(game_json.game + " :: "+game_json.playingtime + " minutes");
      });
    
    }, 
    
    error: function(){
      $('body').html("Error happened");
    }
  });
  
  $("#toptenbutton").click(function(){
    $('.games').empty();
    document.getElementById("title").textContent="TOP TEN GAMES";

    var games_list = [];
    $.ajax({
    
      url: 'api/games?topten',
    
      type: "GET",
    
      data: {"key":"value"},
    
      success: function(data){
        games_list = data;
      
        for (var i = 0; i < data.length; i++) {
          //$('.games').append("<li class=\"game\" data-index="+i+">"+data[i].game+ " :: "+data[i].rank +" rank</li>");
          $('#jq-games').append("<li class=\"game\" title=\""+data[i].description+
          "\" data-index="+i+
          "><span class=\"thumb_wrapper\"><img class=\"thumb\" src=\"http:"
          +data[i].thumbnail+"\"/></span><span class=\"txt\">"+data[i].game+ " :: "+data[i].rank 
          +" rank</span></li>");
        }
      
        $("#jq-games .game").click(function(ev){
          var j = parseInt($(ev.currentTarget).attr('data-index'));
          var game_json = games_list[j];
          alert(game_json.game + " :: "+game_json.rank + " rank");
        });
    
      }, 
    
      error: function(){
        $('body').html("Error happened");
      }
    });
  });
  
  $("#randombutton").click(function(){
    $('.games').empty();
    document.getElementById("title").textContent="PLAY NOW!";

    var games_list = [];
    $.ajax({
    
      url: 'api/games',
    
      type: "GET",
    
      data: {"key":"value"},
    
      success: function(data){
        games_list = data;
      
        for (var i = 0; i < data.length; i++) {
          //$('.games').append("<li class=\"game\" data-index="+i+">"+data[i].game+ " :: "+data[i].playingtime +" minutes</li>");
          $('#jq-games').append("<li class=\"game\" title=\""+data[i].description+
          "\" data-index="+i+
          "><span class=\"thumb_wrapper\"><img class=\"thumb\" src=\"http:"
          +data[i].thumbnail+"\"/></span><span class=\"txt\">"+data[i].game+ " :: "+data[i].playingtime 
          +" minutes</span></li>");
        }
      
        $("#jq-games .game").click(function(ev){
          var j = parseInt($(ev.currentTarget).attr('data-index'));
          var game_json = games_list[j];
          alert(game_json.game + " :: "+game_json.playingtime + " minutes");
        });
    
      }, 
    
      error: function(){
        $('body').html("Error happened");
      }
    });
  });
  
  $("#maxplayers").blur(function() {
    var maxplayers = parseInt($('#maxplayers').val());
    if(maxplayers > 0) {
      $('.games').empty();
      document.getElementById("title").textContent="Games with " + maxplayers.toString() + " Max Players";
      var games_list = [];
      $.ajax({
      
        url: 'api/games?maxplayers=' + maxplayers,
      
        type: "GET",
      
        data: {"key":"value"},
      
        success: function(data){
          games_list = data;
        
          for (var i = 0; i < data.length; i++) {
            //$('.games').append("<li class=\"game\" data-index="+i+">"+data[i].game+ " :: "+data[i].maxplayers +" maximum players</li>");
            $('#jq-games').append("<li class=\"game\" title=\""+data[i].description+
            "\" data-index="+i+
            "><span class=\"thumb_wrapper\"><img class=\"thumb\" src=\"http:"
            +data[i].thumbnail+"\"/></span><span class=\"txt\">"+data[i].game+ " :: "+data[i].maxplayers 
            +" maximum players</span></li>");
            
          }
        
          $("#jq-games .game").click(function(ev){
            var j = parseInt($(ev.currentTarget).attr('data-index'));
            var game_json = games_list[j];
            alert(game_json.game + " :: "+game_json.maxplayers + " maximum players");
          });
      
        }, 
      
        error: function(){
          $('body').html("Error happened");
        }
      });
  }

  });
  
  $("#minplayers").blur(function() {
    var minplayers = parseInt($('#minplayers').val());
    if(minplayers > 0) {
      $('.games').empty();
      document.getElementById("title").textContent="Games with " + minplayers.toString() + " Min Players";
      var games_list = [];
      $.ajax({
      
        url: 'api/games?minplayers=' + minplayers,
      
        type: "GET",
      
        data: {"key":"value"},
      
        success: function(data){
          games_list = data;
        
          for (var i = 0; i < data.length; i++) {
            //$('.games').append("<li class=\"game\" data-index="+i+">"+data[i].game+ " :: "+data[i].maxplayers +" maximum players</li>");
            $('#jq-games').append("<li class=\"game\" title=\""+data[i].description+
            "\" data-index="+i+
            "><span class=\"thumb_wrapper\"><img class=\"thumb\" src=\"http:"
            +data[i].thumbnail+"\"/></span><span class=\"txt\">"+data[i].game+ " :: "+data[i].minplayers 
            +" minimum players</span></li>");
            
          }
        
          $("#jq-games .game").click(function(ev){
            var j = parseInt($(ev.currentTarget).attr('data-index'));
            var game_json = games_list[j];
            alert(game_json.game + " :: "+game_json.minplayers + " minimum players");
          });
      
        }, 
      
        error: function(){
          $('body').html("Error happened");
        }
      });
  }

  });
  
  $("#numplayers").blur(function() {
    var numplayers = parseInt($('#numplayers').val());
    if(numplayers > 0) {
      $('.games').empty();
      document.getElementById("title").textContent="Games you can play with " + numplayers.toString() + " players";
      var games_list = [];
      $.ajax({
      
        url: 'api/games?numplayers=' + numplayers,
      
        type: "GET",
      
        data: {"key":"value"},
      
        success: function(data){
          games_list = data;
        
          for (var i = 0; i < data.length; i++) {
            //$('.games').append("<li class=\"game\" data-index="+i+">"+data[i].game+ " :: "+data[i].maxplayers +" maximum players</li>");
            $('#jq-games').append("<li class=\"game\" title=\""+data[i].description+
            "\" data-index="+i+
            "><span class=\"thumb_wrapper\"><img class=\"thumb\" src=\"http:"
            +data[i].thumbnail+"\"/></span><span class=\"txt\">"+data[i].game+ " :: "+data[i].minplayers 
            +" minimum players & " + data[i].maxplayers + "maximum players </span></li>");
            
          }
        
          $("#jq-games .game").click(function(ev){
            var j = parseInt($(ev.currentTarget).attr('data-index'));
            var game_json = games_list[j];
            alert(game_json.game + " :: "+game_json.minplayers + " minimum players and " 
              +game_json.maxplayers + " maximum players");
          });
      
        }, 
      
        error: function(){
          $('body').html("Error happened");
        }
      });
  }

  });
  
    $("#rating").blur(function() {
    var rating = parseInt($('#rating').val());
    if(rating > 0) {
      $('.games').empty();
      document.getElementById("title").textContent="Games with average rating between "
        + rating.toString() + " and " + (rating+1).toString();
      var games_list = [];
      $.ajax({
      
        url: 'api/games?rating=' + rating,
      
        type: "GET",
      
        data: {"key":"value"},
      
        success: function(data){
          games_list = data;
        
          for (var i = 0; i < data.length; i++) {
            //$('.games').append("<li class=\"game\" data-index="+i+">"+data[i].game+ " :: "+data[i].maxplayers +" maximum players</li>");
            $('#jq-games').append("<li class=\"game\" title=\""+data[i].description+
            "\" data-index="+i+
            "><span class=\"thumb_wrapper\"><img class=\"thumb\" src=\"http:"
            +data[i].thumbnail+"\"/></span><span class=\"txt\">"+data[i].game+ " :: "+data[i].average 
            +" rating</span></li>");
            
          }
        
          $("#jq-games .game").click(function(ev){
            var j = parseInt($(ev.currentTarget).attr('data-index'));
            var game_json = games_list[j];
            alert(game_json.game + " :: "+game_json.average + " rating");
          });
      
        }, 
      
        error: function(){
          $('body').html("Error happened");
        }
      });
  }

  });
  
  $("#weight").blur(function() {
    var weight = parseInt($('#weight').val());
    if(weight > 0) {
      $('.games').empty();
      document.getElementById("title").textContent="Games with average weight between "
        + weight.toString() + " and " + (weight+1).toString();
      var games_list = [];
      $.ajax({
      
        url: 'api/games?weight=' + weight,
      
        type: "GET",
      
        data: {"key":"value"},
      
        success: function(data){
          games_list = data;
        
          for (var i = 0; i < data.length; i++) {
            //$('.games').append("<li class=\"game\" data-index="+i+">"+data[i].game+ " :: "+data[i].maxplayers +" maximum players</li>");
            $('#jq-games').append("<li class=\"game\" title=\""+data[i].description+
            "\" data-index="+i+
            "><span class=\"thumb_wrapper\"><img class=\"thumb\" src=\"http:"
            +data[i].thumbnail+"\"/></span><span class=\"txt\">"+data[i].game+ " :: "+data[i].avgweight 
            +" weight</span></li>");
            
          }
        
          $("#jq-games .game").click(function(ev){
            var j = parseInt($(ev.currentTarget).attr('data-index'));
            var game_json = games_list[j];
            alert(game_json.game + " :: "+game_json.avgweight + " weight");
          });
      
        }, 
      
        error: function(){
          $('body').html("Error happened");
        }
      });
  }

  });
  
  $("#gridmode").click(function(){
    $(".txt").hide();
    $(".game").removeClass("line");
  });
  
  $("#listmode").click(function(){
      $(".txt").show();
      $(".game").addClass("line");
  });
});

  
  
  