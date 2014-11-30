// Compiled by ClojureScript 0.0-2371
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.events.EventType');
goog.require('goog.events.EventType');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('quil.middlewares.deprecated_options');
goog.require('quil.util');
goog.require('quil.util');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function current_applet(){return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),((((window["Processing"])["prototype"])["PConstants"])["JAVA2D"]),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),((((window["Processing"])["prototype"])["PConstants"])["P2D"]),new cljs.core.Keyword(null,"p3d","p3d",-850380194),((((window["Processing"])["prototype"])["PConstants"])["P3D"]),new cljs.core.Keyword(null,"opengl","opengl",-614998103),((((window["Processing"])["prototype"])["PConstants"])["OPENGL"])], null);
quil.sketch.resolve_renderer = (function resolve_renderer(mode){return quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function() {
var size = null;
var size__2 = (function (width,height){return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)));
});
var size__3 = (function (width,height,mode){return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)),quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes));
});
size = function(width,height,mode){
switch(arguments.length){
case 2:
return size__2.call(this,width,height);
case 3:
return size__3.call(this,width,height,mode);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
size.cljs$core$IFn$_invoke$arity$2 = size__2;
size.cljs$core$IFn$_invoke$arity$3 = size__3;
return size;
})()
;
quil.sketch.supported_features = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-start","no-start",1381488856),null], null), null);
quil.sketch.bind_handlers = (function bind_handlers(prc,opts){var seq__6946 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));var chunk__6947 = null;var count__6948 = (0);var i__6949 = (0);while(true){
if((i__6949 < count__6948))
{var vec__6950 = cljs.core._nth.call(null,chunk__6947,i__6949);var processing_name = cljs.core.nth.call(null,vec__6950,(0),null);var quil_name = cljs.core.nth.call(null,vec__6950,(1),null);var temp__4126__auto___6954 = opts.call(null,quil_name);if(cljs.core.truth_(temp__4126__auto___6954))
{var handler_6955 = temp__4126__auto___6954;(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__6946,chunk__6947,count__6948,i__6949,handler_6955,temp__4126__auto___6954,vec__6950,processing_name,quil_name){
return (function (){var _STAR_applet_STAR_6951 = quil.sketch._STAR_applet_STAR_;try{quil.sketch._STAR_applet_STAR_ = prc;
return handler_6955.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_6951;
}});})(seq__6946,chunk__6947,count__6948,i__6949,handler_6955,temp__4126__auto___6954,vec__6950,processing_name,quil_name))
);
} else
{}
{
var G__6956 = seq__6946;
var G__6957 = chunk__6947;
var G__6958 = count__6948;
var G__6959 = (i__6949 + (1));
seq__6946 = G__6956;
chunk__6947 = G__6957;
count__6948 = G__6958;
i__6949 = G__6959;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6946);if(temp__4126__auto__)
{var seq__6946__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6946__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__6946__$1);{
var G__6960 = cljs.core.chunk_rest.call(null,seq__6946__$1);
var G__6961 = c__4410__auto__;
var G__6962 = cljs.core.count.call(null,c__4410__auto__);
var G__6963 = (0);
seq__6946 = G__6960;
chunk__6947 = G__6961;
count__6948 = G__6962;
i__6949 = G__6963;
continue;
}
} else
{var vec__6952 = cljs.core.first.call(null,seq__6946__$1);var processing_name = cljs.core.nth.call(null,vec__6952,(0),null);var quil_name = cljs.core.nth.call(null,vec__6952,(1),null);var temp__4126__auto___6964__$1 = opts.call(null,quil_name);if(cljs.core.truth_(temp__4126__auto___6964__$1))
{var handler_6965 = temp__4126__auto___6964__$1;(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__6946,chunk__6947,count__6948,i__6949,handler_6965,temp__4126__auto___6964__$1,vec__6952,processing_name,quil_name,seq__6946__$1,temp__4126__auto__){
return (function (){var _STAR_applet_STAR_6953 = quil.sketch._STAR_applet_STAR_;try{quil.sketch._STAR_applet_STAR_ = prc;
return handler_6965.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_6953;
}});})(seq__6946,chunk__6947,count__6948,i__6949,handler_6965,temp__4126__auto___6964__$1,vec__6952,processing_name,quil_name,seq__6946__$1,temp__4126__auto__))
);
} else
{}
{
var G__6966 = cljs.core.next.call(null,seq__6946__$1);
var G__6967 = null;
var G__6968 = (0);
var G__6969 = (0);
seq__6946 = G__6966;
chunk__6947 = G__6967;
count__6948 = G__6968;
i__6949 = G__6969;
continue;
}
}
} else
{return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function make_sketch(options){var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__6970_SHARP_){return p1__6970_SHARP_.call(null,options);
}).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.cons.call(null,quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)))));var sketch_size = (function (){var or__3640__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);var opts__$1 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1987730512)], null),((function (opts,sketch_size,renderer){
return (function (p1__6971_SHARP_){return ((function (opts,sketch_size,renderer){
return (function (){cljs.core.apply.call(null,quil.sketch.size,cljs.core.concat.call(null,sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));
if(cljs.core.truth_(p1__6971_SHARP_))
{return p1__6971_SHARP_.call(null);
} else
{return null;
}
});
;})(opts,sketch_size,renderer))
});})(opts,sketch_size,renderer))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439)], null),((function (opts,sketch_size,renderer){
return (function (p1__6972_SHARP_){if(cljs.core.truth_(p1__6972_SHARP_))
{return ((function (opts,sketch_size,renderer){
return (function (){return p1__6972_SHARP_.call(null,((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll));
});
;})(opts,sketch_size,renderer))
} else
{return null;
}
});})(opts,sketch_size,renderer))
);return ((function (opts,sketch_size,renderer,opts__$1){
return (function (prc){quil.sketch.bind_handlers.call(null,prc,opts__$1);
prc.quil = cljs.core.atom.call(null,null);
return prc.target_frame_rate = cljs.core.atom.call(null,(60));
});
;})(opts,sketch_size,renderer,opts__$1))
});
/**
* @param {...*} var_args
*/
quil.sketch.sketch = (function() { 
var sketch__delegate = function (opts){var opts_map = cljs.core.apply.call(null,cljs.core.hash_map,opts);var host_elem = goog.dom.getElement(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map));var renderer = (function (){var or__3640__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return new cljs.core.Keyword(null,"p2d","p2d",-2106175755);
}
})();if(cljs.core.truth_(host_elem))
{if(cljs.core.truth_(host_elem.processing_context))
{if(cljs.core._EQ_.call(null,renderer,host_elem.processing_context))
{} else
{console.warn("WARNING: Using different context on one canvas!");
}
} else
{host_elem.processing_context = renderer;
}
return (new Processing(host_elem,quil.sketch.make_sketch.call(null,opts_map)));
} else
{return console.warn("WARNING: Cannot create sketch. :host is not specified.");
}
};
var sketch = function (var_args){
var opts = null;if (arguments.length > 0) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sketch__delegate.call(this,opts);};
sketch.cljs$lang$maxFixedArity = 0;
sketch.cljs$lang$applyTo = (function (arglist__6973){
var opts = cljs.core.seq(arglist__6973);
return sketch__delegate(opts);
});
sketch.cljs$core$IFn$_invoke$arity$variadic = sketch__delegate;
return sketch;
})()
;
quil.sketch.sketch_init_list = cljs.core.atom.call(null,cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function empty_body_QMARK_(){var child = document.body.childNodes;return (child.length <= (1));
});
quil.sketch.add_canvas = (function add_canvas(canvas_id){var canvas = document.createElement("canvas");canvas.setAttribute("id",canvas_id);
return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function init_sketches(){var add_elem_QMARK_ = quil.sketch.empty_body_QMARK_.call(null);var seq__6978 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));var chunk__6979 = null;var count__6980 = (0);var i__6981 = (0);while(true){
if((i__6981 < count__6980))
{var sk = cljs.core._nth.call(null,chunk__6979,i__6981);if(add_elem_QMARK_)
{quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk));
} else
{}
new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk).call(null);
{
var G__6982 = seq__6978;
var G__6983 = chunk__6979;
var G__6984 = count__6980;
var G__6985 = (i__6981 + (1));
seq__6978 = G__6982;
chunk__6979 = G__6983;
count__6980 = G__6984;
i__6981 = G__6985;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6978);if(temp__4126__auto__)
{var seq__6978__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6978__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__6978__$1);{
var G__6986 = cljs.core.chunk_rest.call(null,seq__6978__$1);
var G__6987 = c__4410__auto__;
var G__6988 = cljs.core.count.call(null,c__4410__auto__);
var G__6989 = (0);
seq__6978 = G__6986;
chunk__6979 = G__6987;
count__6980 = G__6988;
i__6981 = G__6989;
continue;
}
} else
{var sk = cljs.core.first.call(null,seq__6978__$1);if(add_elem_QMARK_)
{quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk));
} else
{}
new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk).call(null);
{
var G__6990 = cljs.core.next.call(null,seq__6978__$1);
var G__6991 = null;
var G__6992 = (0);
var G__6993 = (0);
seq__6978 = G__6990;
chunk__6979 = G__6991;
count__6980 = G__6992;
i__6981 = G__6993;
continue;
}
}
} else
{return null;
}
}
break;
}
});
quil.sketch.add_sketch_to_init_list = (function add_sketch_to_init_list(sk){return cljs.core.swap_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.conj,sk);
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
