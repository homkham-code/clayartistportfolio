// UI 
// Start Header 
// Start Navbar 
document.querySelector('.navbuttons').addEventListener('click',()=>document.querySelector('.navbuttons').classList.toggle('changes'));

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    let getscrolly = window.scrollY;
    // console.log(getscrolly);

    if(getscrolly >= 300){
        navbar.classList.add('navmenus');
    }else{
        navbar.classList.remove('navmenus');
    }
});
// End Navbar

// Start Banner
const ibtn = document.querySelector('.banners i');

ibtn.addEventListener('click',()=>{
    location.href = '#about';
});
// End Banner
// End Header



// Start About 
const counters = document.querySelectorAll('.counters');

window.addEventListener('scroll',()=>{
    let getscrolly = window.scrollY;
    // console.log(getscrolly);

    if(getscrolly >= 700){
        counters.forEach(counter=>{
            counter.innerText = '0';
        
            const updatecounter = ()=>{
                const target = +counter.getAttribute('data-target');
                const ctr = +counter.innerText;
                const increment = target / 100;
                if(ctr < target){
                    counter.innerText = Math.ceil(ctr + increment);
        
                    setTimeout(updatecounter,150);
                }
            };
            
            updatecounter(); 
            
        });

    }

});
// End About



// Start Portfolio Section 
const gallerylists = document.querySelectorAll('.gallerylists'); 
const filterchibis = document.querySelectorAll('.filters.chibi'),
    filteraccessories = document.querySelectorAll('.filters.accessories'),
    filterfoodies = document.querySelectorAll('.filters.foodies'),
    filtercups = document.querySelectorAll('.filters.cup');

gallerylists.forEach((gallerylist)=>{
    // console.log(gallerylist);

    
    gallerylist.addEventListener('click',(e)=>{
        let datafilter = gallerylist.getAttribute('data-filter');
        // console.log(datafilter);

        removeactiveitem();
        e.target.classList.add('activeitems');

        if(datafilter === "all"){
            filterchibis.forEach(filterchibi=>{
                filterchibi.style.display = "inline-block";
            });
            
            filteraccessories.forEach(filteraccessorie=>{
                filteraccessorie.style.display = "inline-block";
            });

            filterfoodies.forEach(filterfoodie=>{
                filterfoodie.style.display = "inline-block";
            });

            filtercups.forEach(filtercup=>{
                filtercup.style.display = "inline-block";
            });

        }else if(datafilter === "chibi"){
            filterchibis.forEach(filterchibi=>{
                filterchibi.style.display = "inline-block";
            });

            filteraccessories.forEach(filteraccessorie=>{
                filteraccessorie.style.display = "none";
            });

            filterfoodies.forEach(filterfoodie=>{
                filterfoodie.style.display = "none";
            });

            filtercups.forEach(filtercup=>{
                filtercup.style.display = "none";
            });

        }else if(datafilter === "accessories"){
            filterchibis.forEach(filterchibi=>{
                filterchibi.style.display = "none";
            });
            
            filteraccessories.forEach(filteraccessorie=>{
                filteraccessorie.style.display = "inline-block";
            });

            filterfoodies.forEach(filterfoodie=>{
                filterfoodie.style.display = "none";
            });

            filtercups.forEach(filtercup=>{
                filtercup.style.display = "none";
            });

        }else if(datafilter === "foodies"){
            filterchibis.forEach(filterchibi=>{
                filterchibi.style.display = "none";
            });
            
            filteraccessories.forEach(filteraccessorie=>{
                filteraccessorie.style.display = "none";
            });

            filterfoodies.forEach(filterfoodie=>{
                filterfoodie.style.display = "inline-block";
            });

            filtercups.forEach(filtercup=>{
                filtercup.style.display = "none";
            });

        }else{
            filterchibis.forEach(filterchibi=>{
                filterchibi.style.display = "none";
            });
            
            filteraccessories.forEach(filteraccessorie=>{
                filteraccessorie.style.display = "none";
            });

            filterfoodies.forEach(filterfoodie=>{
                filterfoodie.style.display = "none";
            });

            filtercups.forEach(filtercup=>{
                filtercup.style.display = "inline-block";
            });
            
        }

    });

});

// remove current active item 
function removeactiveitem(){
    gallerylists.forEach(gallerylist=>{
        gallerylist.classList.remove('activeitems');
    });
}
// End Portfolio Section 



// Start Floating Button Section 
const buttons = document.getElementById('buttons');

window.addEventListener('scroll',()=>{
    let getscrolly = window.scrollY;
    // console.log(getscrolly);

    if(getscrolly >= 600){
        buttons.classList.add('active');
    }else{
        buttons.classList.remove('active');
    }
});

buttons.addEventListener('click',()=>{
    location.href = '#home';
});
// End Floadting Button Section 