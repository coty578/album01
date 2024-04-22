document.getElementById('file-upload').addEventListener('change', function() {
    var file = this.files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            var image = new Image();
            image.src = e.target.result;
            image.onload = function() {
                var width = this.width;
                var height = this.height;
                console.log('Largeur de l\'image:', width, 'pixels');
                console.log('Hauteur de l\'image:', height, 'pixels');

                // Créer un élément image HTML pour afficher l'image sur la page
                var imgElement = document.createElement('img');
                imgElement.src = this.src;
                imgElement.style.width = '20%'; // Ajuster la largeur de l'image à 50%
                imgElement.style.height = '10%';
                imgElement.style.display = 'block'; // Afficher l'image en tant que bloc pour la mise en page horizontale

                // Ajouter l'élément image à un conteneur sur la page
                var container = document.getElementById('image-container');
                container.innerHTML = ''; // Effacer le contenu précédent du conteneur
                container.appendChild(imgElement);
                console.log('Image importée avec succès');

                 // Afficher le bouton de téléchargement
                 var downloadBtn = document.getElementById('download-btn');
                 downloadBtn.style.display = 'block';
                 downloadBtn.onclick = function() {
                     // Créer un lien de téléchargement
                     var a = document.createElement('a');
                     a.href = image.src;
                     a.download = 'image'; // Nom du fichier à télécharger
                     document.body.appendChild(a);
                     a.click();
                     document.body.removeChild(a);
                 }
            }
        }
    }
});
