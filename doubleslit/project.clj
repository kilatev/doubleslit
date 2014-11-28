(defproject hello-quil "0.1.0-SNAPSHOT"
  :description "Doubleslit game"
  :url "http://doubleslit.local"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [quil "2.2.4"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [figwheel "0.1.5-SNAPSHOT"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-figwheel "0.1.5-SNAPSHOT"]]
  :hooks [leiningen.cljsbuild]

  :cljsbuild
  {:builds [{:source-paths ["src"]
             :compiler
             {:output-to "web/js/main.js"
              :preamble ["processing.js"]
              :optimizations :simple
              :pretty-print true}}]})
