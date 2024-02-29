setTimeout(function() {
    
        let b_Image = document.getElementById("b_Image");
        let headphone_Image = document.getElementById("headphone_Image");
        let  se_Image = document.getElementById("se_Image");
       let o_Image= document.getElementById("o_Image")
        // console.log(headphone_Image,b_Image,se_Image);
        b_Image.classList.remove("b-img-initial");
        headphone_Image.classList.remove("headphone-img-initial");
        se_Image.classList.remove("se-img-initial");
        o_Image.classList.remove("o-img-initial");
        b_Image.classList.add("b-image-final");
        headphone_Image.classList.add("headphone-image-final");
        se_Image.classList.add("se-image-final");
        o_Image.classList.add("o-img-final")
}, 1000);
