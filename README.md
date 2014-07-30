Rafraîchir la pseudo-classe ':target'
=============

Voir informations détaillées sur

http://interfacteur.blogspot.fr/2014/07/target-update-pushstate.html

http://interfacteur.blogspot.fr/2014/07/target-css3-et-js.html

*:target : pseudo-classe rafraîchie avec avec pushState() et autres méthodes de l'API "history :*

    (scroll facultatif, paramétrable, entre éléments ou retour en début de page)
    
* target-pushstate-1-st.html : pour navigateurs standards, méthode du double pushState
* target-pushstate-2-ie.html : pour Internet Explorer, méthode du focus
* target-avec-pushstate.html : pour navigateurs standards, méthode du double go

*:target : pseudo-classe à concilier avec pushState(), et IE 8 :*

* avec un scroll paramétrable de retour en haut de page - via l'API history et la fonction animate() de jQuery : target-retour-anime-1.html
* idem cas complets : target-retour-anime-2.html
* idem cas simples : target-retour-anime-3.html
* avec scroll paramétrable entre tous les éléments via animate() : target-scroll-anime-avt.html
* sur IE 8 : target-alternative.html

*Les pages suivantes, comme cas d'intérêt limité :*

* sans aucun sroll : target-scroll-aucun.html
* avec scroll paramétrable entre tous les éléments (via animate()) en précédant le formatage de :target - mais ne permet pas l'utilisation du clavier ni des boutons "précédent"-"suivant" du navigateur : target-scroll-anime-apr.html
* avec scroll paramétrable entre tous les éléments (via animate()) en accompagnant le formatage de :target - mais ne permet pas l'utilisation du clavier ni des boutons "précédent"-"suivant" du navigateur : target-scroll-anime-mil.html

