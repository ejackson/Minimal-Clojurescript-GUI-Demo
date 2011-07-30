(comment To compile start a clojrue repl that has cljs classpathed and run this)
(require '[cljs.closure :as cljsc])
(cljsc/build "/Users/edmundjackson/Projects/scratch/clojurescript/hello/src" {:output-dir "/Users/edmundjackson/Projects/scratch/clojurescript/hello/out" :output-to  "/Users/edmundjackson/Projects/scratch/clojurescript/hello/hello.js"})
