// Compiled by ClojureScript 0.0-2371
goog.provide('doubleslit.core');
goog.require('cljs.core');
goog.require('quil.middleware');
goog.require('quil.middleware');
goog.require('quil.core');
goog.require('quil.core');
doubleslit.core.setup = (function setup(){quil.core.frame_rate.call(null,(30));
quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
doubleslit.core.update = (function update(state){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(225)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
doubleslit.core.draw = (function draw(state){quil.core.background.call(null,(240));
quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));
var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);var x = ((100) * quil.core.cos.call(null,angle));var y = ((150) * quil.core.sin.call(null,angle));var tr__4939__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);quil.core.push_matrix.call(null);
quil.core.translate.call(null,tr__4939__auto__);
quil.core.ellipse.call(null,x,y,(100),(100));
return quil.core.pop_matrix.call(null);
});
doubleslit.core.doubleslit = (function doubleslit__$1(){return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674),doubleslit.core.draw,new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"setup","setup",1987730512),doubleslit.core.setup,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"update","update",1045576396),doubleslit.core.update,new cljs.core.Keyword(null,"host","host",-1558485167),"doubleslit");
});
goog.exportSymbol('doubleslit.core.doubleslit', doubleslit.core.doubleslit);
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__4577__4578__auto__){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__4577__4578__auto__);
}),null)))
{} else
{quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),doubleslit.core.doubleslit,new cljs.core.Keyword(null,"host-id","host-id",742376279),"doubleslit"], null));
}
