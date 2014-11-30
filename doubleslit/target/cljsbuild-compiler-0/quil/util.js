// Compiled by ClojureScript 0.0-2371
goog.provide('quil.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Function that does nothing.
*/
quil.util.no_fn = (function no_fn(){return null;
});
/**
* Returns the val associated with key in mappings or key directly if it
* is one of the vals in mappings. Otherwise throws an exception.
*/
quil.util.resolve_constant_key = (function resolve_constant_key(key,mappings){if(cljs.core.truth_(cljs.core.get.call(null,mappings,key)))
{return cljs.core.get.call(null,mappings,key);
} else
{if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),cljs.core.vals.call(null,mappings))))
{return key;
} else
{throw (new Error(("Expecting a keyword, got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+". Expected one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,mappings)))))));

}
}
});
/**
* Returns the length of the longest key of map m. Assumes m's keys are strings
* and returns 0 if map is empty:
* (length-of-longest-key {"foo" 1 "barr" 2 "bazzz" 3}) ;=> 5
* (length-of-longest-key {}) ;=> 0
*/
quil.util.length_of_longest_key = (function length_of_longest_key(m){var or__3640__auto__ = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.map.call(null,(function (p1__6919_SHARP_){return p1__6919_SHARP_.length();
}),cljs.core.keys.call(null,m))));if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return (0);
}
});
/**
* Generates a padding string starting concatting s with len times pad:
* (gen-padding "" 5 "b") ;=> "bbbbb"
* May be called without starting string s in which case it defaults to the
* empty string and also without pad in which case it defaults to a single space
*/
quil.util.gen_padding = (function() {
var gen_padding = null;
var gen_padding__1 = (function (len){return gen_padding.call(null,"",len," ");
});
var gen_padding__2 = (function (len,pad){return gen_padding.call(null,"",len,pad);
});
var gen_padding__3 = (function (s,len,pad){if((len > (0)))
{return gen_padding.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad)),(len - (1)),pad);
} else
{return s;
}
});
gen_padding = function(s,len,pad){
switch(arguments.length){
case 1:
return gen_padding__1.call(this,s);
case 2:
return gen_padding__2.call(this,s,len);
case 3:
return gen_padding__3.call(this,s,len,pad);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gen_padding.cljs$core$IFn$_invoke$arity$1 = gen_padding__1;
gen_padding.cljs$core$IFn$_invoke$arity$2 = gen_padding__2;
gen_padding.cljs$core$IFn$_invoke$arity$3 = gen_padding__3;
return gen_padding;
})()
;
quil.util.print_definition_list = (function print_definition_list(definitions){var longest_key = quil.util.length_of_longest_key.call(null,definitions);return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (longest_key){
return (function (p__6922){var vec__6923 = p__6922;var k = cljs.core.nth.call(null,vec__6923,(0),null);var v = cljs.core.nth.call(null,vec__6923,(1),null);var len = k.length();var diff = (longest_key - len);var pad = quil.util.gen_padding.call(null,diff);return cljs.core.println.call(null,k,pad,"- ",v);
});})(longest_key))
,definitions));
});
quil.util.prepare_quil_name = (function prepare_quil_name(const_keyword){return clojure.string.replace.call(null,clojure.string.upper_case.call(null,cljs.core.name.call(null,const_keyword)),/-/,"_");
});
