const photoInput = document.getElementById("changePhoto");
const profilePhoto = document.getElementById("profilePhoto");


photoInput.addEventListener("change", function(){

    const file = this.files[0];

    if(file){

        profilePhoto.src = URL.createObjectURL(file);

    }

});