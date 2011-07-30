(ns hello
  (:require
   [goog.dom :as dom]
   [goog.object :as goog-object]
   [goog.events.Event :as goog-event]
   [goog.events.EventType :as goog-event-type]
   [goog.ui.ColorButton :as color-button]
   [goog.ui.Tab :as gtab]
   [goog.ui.TabBar :as gtabb]))      

;; -------------------------= State =-----------------------
(def database-connected? (atom false))
(def messaging-connected? (atom false))

;; --------------------------= Widgets =-----------------------------
(def database-button (doto (goog.ui.ColorButton. "Database")
                 (.setTooltip "Database Connection Status")
                 (.setValue "red")))

(def messaging-button (doto (goog.ui.ColorButton. "Messaging")
                        (.setTooltip "Messaging Connection Status")
                        (.setValue "red")))

(def tabbar (goog.ui.TabBar.))

;; -----------------------= Control =---------------------
;; Event handling for the UI
(def events (.getValues goog.object goog.ui.Component/EventType))

(defn handle-tab-select [tabbar e]
  (let [tab (.target e)
        content (.getElement goog.dom (str (. tabbar (getId)) "_content"))]
    (.setTextContent goog.dom content (. tab (getCaption)))))

(defn button-color
  "Associate a colour with the states"
  [x]
  (if x "green" "red"))

(defn toggle-state!
  "Simulate trivial connect/disconnect functionality for the buttions"
  [x]
  (swap! x not))

(defn handle-button-push [s e]
  (.setValue (.target e)
             (button-color (toggle-state! s))))

;; ---------------------= MAIN =------------------------
;; Main entry function
(defn ^:export main []
  ;; Populate a DOM via decoration.
  (.decorate tabbar (.getElement goog.dom "top"))

  ;; Populate a DOM via rendering.
  (.render database-button (.getElement goog.dom "buttons"))
  (.render messaging-button (.getElement goog.dom "buttons"))

  ;; Wire up the events
  ;;  The tabbar event
  (.listen goog.events
           tabbar
           goog.ui.Component.EventType/SELECT
           (partial handle-tab-select tabbar))

  ;;  The database button
  (.listen goog.events
           database-button
           goog.ui.Component.EventType/ACTION
           (partial handle-button-push
                    database-connected?))

  ;; The messaging button
  (.listen goog.events
           messaging-button
           goog.ui.Component.EventType/ACTION
           (partial handle-button-push
                    messaging-connected?)))      

