// Cette fonction retourne une liste ordonnée dont les éléments sont des objets à deux attributs "period" et "value"

const raw = require('./pages/stats-matomo.json')


function process() {

  // Récupère les clés de l'objet raw
  const periodKeys = Object.keys(raw) 
  
  // Formatte la liste
  return periodKeys.map(period => {

    //variable qui contient la chaine de caractère qui correspond à 'attribut
    const metricName = "nb_visits"
    
    // Accès à la valeur correspondant à la clé "nb_visits" de l'objet imbriqué
    // Si 1ere valeur n'est pas considérée comme nulle, on la prend, sinon on spécifie 0 pour éviter de se retrouver avec undefined
    const visitsValues = raw[period][metricName] || 0
   
    // Crée un objet avec les deux attributs pour chaque "period"
    return {
      period: period,
      value: visitsValues
    }
  })
}

console.log(process())
