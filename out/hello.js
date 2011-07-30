goog.provide('hello');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.events.Event');
goog.require('goog.events.EventType');
goog.require('goog.ui.ColorButton');
goog.require('goog.ui.Tab');
goog.require('goog.ui.TabBar');
hello.database_connected_QMARK_ = cljs.core.atom.call(null,false);
hello.messaging_connected_QMARK_ = cljs.core.atom.call(null,false);
hello.database_button = (function (){var G__3014__3015 = (new goog.ui.ColorButton("Database"));

G__3014__3015.setTooltip("Database Connection Status");
G__3014__3015.setValue("red");
return G__3014__3015;
})();
hello.messaging_button = (function (){var G__3016__3017 = (new goog.ui.ColorButton("Messaging"));

G__3016__3017.setTooltip("Messaging Connection Status");
G__3016__3017.setValue("red");
return G__3016__3017;
})();
hello.tabbar = (new goog.ui.TabBar());
hello.events = goog.object.getValues(goog.ui.Component.EventType);
hello.handle_tab_select = (function handle_tab_select(tabbar,e){
var tab__3018 = e.target;
var content__3019 = goog.dom.getElement(cljs.core.str.call(null,tabbar.getId(),"_content"));

return goog.dom.setTextContent(content__3019,tab__3018.getCaption());
});
/**
* Associate a colour with the states
*/
hello.button_color = (function button_color(x){
if(cljs.core.truth_(x))
{return "green";
} else
{return "red";
}
});
/**
* Simulate trivial connect/disconnect functionality for the buttions
*/
hello.toggle_state = (function toggle_state(x){
return cljs.core.swap_BANG_.call(null,x,cljs.core.not);
});
hello.handle_button_push = (function handle_button_push(s,e){
return e.target.setValue(hello.button_color.call(null,hello.toggle_state.call(null,s)));
});
hello.main = (function main(){
hello.tabbar.decorate(goog.dom.getElement("top"));
hello.database_button.render(goog.dom.getElement("buttons"));
hello.messaging_button.render(goog.dom.getElement("buttons"));
goog.events.listen(hello.tabbar,goog.ui.Component.EventType.SELECT,cljs.core.partial.call(null,hello.handle_tab_select,hello.tabbar));
goog.events.listen(hello.database_button,goog.ui.Component.EventType.ACTION,cljs.core.partial.call(null,hello.handle_button_push,hello.database_connected_QMARK_));
return goog.events.listen(hello.messaging_button,goog.ui.Component.EventType.ACTION,cljs.core.partial.call(null,hello.handle_button_push,hello.messaging_connected_QMARK_));
});
goog.exportSymbol('hello.main', hello.main);
