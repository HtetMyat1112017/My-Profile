let screenhight=$(window).height();

$(window).scroll(function(){
  
  let currentScroll=$(this).scrollTop();
  console.log(currentScroll);
  if(currentScroll >= screenhight-100){
    $(".heads").addClass("side-nav");
  }
  else{
    $(".heads").removeClass("side-nav");
    setActive("home");
  }
  
 
});
///chaneg button 
$(".navbar-toggler").click(function(){
  let result=$(".navbar-collapse").hasClass("show");
 

  if(result){
      $(".menu-icon").removeClass("feather-x").addClass("feather-menu");
  }
  else{
      $(".menu-icon").removeClass("feather-menu").addClass("feather-x");
  }    
});

function setActive(current){
  $(`.nav-link`).removeClass("current-link");
        $(`.nav-link[href='#${current}']`).addClass("current-link");
}

function nav(){
  let currentSection=$("section[id]");
  currentSection.waypoint(function(direction){
    if(direction == "down"){
     let sectionId= $(this.element).attr('id');
     setActive(sectionId);
     
    }
  },{offset:'150px'});
  currentSection.waypoint(function(direction){
    if(direction == "up"){
     let sectionId= $(this.element).attr('id');
     setActive(sectionId);
     
    }
   },{offset:'-150px'});
  
}

nav();

$(window).on("load",function(){
  $(".loader-con").fadeOut(1000,function(){
      $(this).remove();
  });
});



