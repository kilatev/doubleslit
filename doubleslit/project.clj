(defproject doubleslit "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2202"]
                 [com.facebook/react "0.11.1"]
                 [figwheel "0.1.4-SNAPSHOT"]
                 [org.clojure/core.async "0.1.278.0-76b25b-alpha"]
                 [sablono "0.2.21"]
                 [om "0.7.1"]]
  
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-figwheel "0.1.4-SNAPSHOT"]]

  :source-paths ["src"]
  
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {:output-to "resources/public/js/compiled/doubleslit.js"
                         :externs ["js/phaser.js"]
                         :output-dir "resources/public/js/compiled/out"
                         :optimizations :none
                         :source-map true}}
             {:id "min"
              :source-paths ["src"]
              :compiler {:output-to "www/doubleslit.min.js"
                         :optimizations :simple
                         :pretty-print false
                         :preamble ["react/react.min.js"]
                         :externs ["react/externs/react.js"]}}]}
  :figwheel {
             :http-server-root "public" ;; default and assumes "resources" 
             :server-port 3449 ;; default
             :css-dirs ["public/resources/css"] ;; watch and update CSS
             ;; :ring-handler doubleslit.server/handler
             })
