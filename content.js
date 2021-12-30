
//Change this interval to your choice
INTERVAL = 8;


function start()
{
    url = location.href;
  // alert("URl : "+location.href);
    
    if(url.includes("teams.microsoft.com"))
        {
            teams();
        }
    else if(url.includes("discord.com"))
        {
            meet();
        }
    
}


function teams()
{
   setTimeout(function(){
       try{
           document.getElementById("microphone-button").click();
       document.getElementById("video-button").click();
       }
       
       catch(err)
           {
               console.log(err);
           }
       teams();
       
    },INTERVAL*1000) 
}


function meet()
{
  setTimeout(function(){
      try
      {
        items = document.getElementsByTagName("button");
        for(i=0;i<items.length;i++)
        {
          if(items[i].hasAttribute("aria-label"))
          { 
	    // mute & unmute microphone
            if(items[i].getAttribute("aria-label").includes("Вкл. на звука") || items[i].getAttribute("aria-label").includes("Изкл. на звука"))
            {
              document.getElementsByTagName("body")[0].click();
              console.log(items[i].innerHTML);
              items[i].click();
            }

            // on & off camera
            if(items[i].getAttribute("aria-label").includes("Включи камерата") || items[i].getAttribute("aria-label").includes("Изключи камерата"))
            {
              document.getElementsByTagName("body")[0].click();
              console.log(items[i].innerHTML);
              items[i].click();
            }
          }
        }

      }

      catch(err)
      {
        console.log(err)
      }

      meet();
      
       
    },INTERVAL*1000) 
}

start()
