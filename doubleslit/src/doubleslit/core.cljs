(ns doubleslit.core
  (:require
    [figwheel.client :as fw]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload
;; (defonce app-data (atom {}))

(println "Edits to this text shouahahah up in your eloper console.")
(def game (
      js/Phaser.Game. 800 600 js/Phaser.CANVAS 'phaser-example' {"preload" preload "create" create}))

(defn preload []
  (game.load.image 'base' 'images/CONIFERFORESTPACK.jpg'))

(defn create []
  (game.add.sprite 0 0 'base'))

(fw/watch-and-reload
 :jsload-callback (fn []
                    ;; (stop-and-start-my app)
                    ))
