(ns doubleslit.core
  (:require
    [figwheel.client :as fw]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload
;; (defonce app-data (atom {}))


(println "Edits to this text shouahahah up in your eloper console.")
(def game (
      js/Phaser.Game. 400 200 js/Phaser.CANVAS 'phaser-example' {"preload" doubleslit.core.preload "create" doubleslit.core.create}))

(def preload (fn []
  (doubleslit.core.game.load.image 'base' 'images/CONIFERFORESTPACK.jpg')))

(def create (fn []
  (doubleslit.core.game.add.sprite 0 0 'base')))

(fw/watch-and-reload
 :jsload-callback (fn []
                    ;; (stop-and-start-my app)
                    ))
