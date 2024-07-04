const backgroundImage = new Image();
backgroundImage.src = 'https://i.postimg.cc/Y0td7cKd/ordo.png'; // Assurez-vous de mettre le bon chemin de l'image
            backgroundImage.crossOrigin = "anonymous";
          
backgroundImage.onload = function() {
    drawOnCanvas();
};

document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
    downloadImage();
});

function drawOnCanvas() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dessiner l'image de fond
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    const field1 = document.getElementById('field1').value;
    const field2 = document.getElementById('field2').value;
    const field3 = document.getElementById('field3').value;
    const field4 = document.getElementById('field4').value;
	   const field5 = document.getElementById('field5').value;
	   
    const startDate = new Date(field2);
 
    // Calculer l'intervalle d'années entre la date saisie et aujourd'hui
    const today = new Date();
    const yearsDiff = today.getFullYear() - startDate.getFullYear();
	  
	 
	   
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const checkboxValues = Array.from(checkboxes).map(cb => cb.value);

    // Obtenir la valeur du bouton radio sélectionné
    const selectedChoice = document.querySelector('input[name="choices"]:checked').value;

    // Dessiner les champs de texte
    ctx.font = '14px Arial';
    ctx.fillText(field1, 110, 150);
    ctx.fillText(`${field2}, ${yearsDiff} ans`, 143, 175);
    ctx.fillText(field3, 60, 200);
   ctx.fillText(field4, 448, 165);
      ctx.fillText(`${field5}`, 442, 198);
    // Dessiner la valeur du choix sélectionné
    ctx.fillText(selectedChoice, 332, 125);

    // Dessiner les valeurs des checkbox
    checkboxValues.forEach((value, index) => {
        ctx.fillText(value, 10, 245 + (index * 30));
    });
}


function downloadImage() {
    const canvas = document.getElementById('myCanvas');
    const link = document.createElement('a');
    link.download = 'texte.png';
    link.href = canvas.toDataURL();
    link.click();
}
    // Effacer le visuel après téléchargement
 //   const ctx = canvas.getContext('2d');
   // ctx.clearRect(0, 0, canvas.width, canvas.height);
   // ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
