import raw from "../pages/stats-matomo.json"

// Cette fonction retourne une liste ordonnée dont les éléments sont des objets à deux attributs, "period" et "value"
// --> Quel est le format des données que va intégrer le composant graphique
// --> A quoi ressemblera l'objet que renvoie process-matomo

function processMatomo() {

    // Récupère les clés de l'objet raw
    const periodKeys = Object.keys(raw)

    // Retourne une liste contenant les éléments objets à deux attributs
    return periodKeys.map(period => {

        // Variable contenant une chaîne de caractère correspondant à l'attribut visé
        const metricName = "nb_visits"

        // Si la première valeur n'est pas considérée comme nulle, on la prend, sinon on spécifie 0 pour éviter un undefined
        const visitsValues = raw[period][metricName] || 0

        // Crée un objet à deux attributs pour chaque "period"
        return {
            period: period,
            value: visitsValues
        }
    })
}

export default processMatomo
