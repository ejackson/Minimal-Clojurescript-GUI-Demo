goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3576__auto____12181 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____12181))
{return or__3576__auto____12181;
} else
{var or__3576__auto____12182 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____12182))
{return or__3576__auto____12182;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3574__auto____12183 = coll;

if(cljs.core.truth_(and__3574__auto____12183))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____12183;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____12184 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____12184))
{return or__3576__auto____12184;
} else
{return (_count["_"]);
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____12185 = coll;

if(cljs.core.truth_(and__3574__auto____12185))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____12185;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____12186 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____12186))
{return or__3576__auto____12186;
} else
{return (_empty["_"]);
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____12187 = coll;

if(cljs.core.truth_(and__3574__auto____12187))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____12187;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____12188 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____12188))
{return or__3576__auto____12188;
} else
{return (_conj["_"]);
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__12193 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____12189 = coll;

if(cljs.core.truth_(and__3574__auto____12189))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____12189;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____12190 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____12190))
{return or__3576__auto____12190;
} else
{return (_nth["_"]);
}
})().call(null,coll,n);
}
});
var _nth__12194 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____12191 = coll;

if(cljs.core.truth_(and__3574__auto____12191))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____12191;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____12192 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____12192))
{return or__3576__auto____12192;
} else
{return (_nth["_"]);
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__12193.call(this,coll,n);
case  3 :
return _nth__12194.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____12196 = coll;

if(cljs.core.truth_(and__3574__auto____12196))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____12196;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____12197 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____12197))
{return or__3576__auto____12197;
} else
{return (_first["_"]);
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____12198 = coll;

if(cljs.core.truth_(and__3574__auto____12198))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____12198;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____12199 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____12199))
{return or__3576__auto____12199;
} else
{return (_rest["_"]);
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__12204 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____12200 = o;

if(cljs.core.truth_(and__3574__auto____12200))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____12200;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____12201 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____12201))
{return or__3576__auto____12201;
} else
{return (_lookup["_"]);
}
})().call(null,o,k);
}
});
var _lookup__12205 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____12202 = o;

if(cljs.core.truth_(and__3574__auto____12202))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____12202;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____12203 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____12203))
{return or__3576__auto____12203;
} else
{return (_lookup["_"]);
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__12204.call(this,o,k);
case  3 :
return _lookup__12205.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____12207 = coll;

if(cljs.core.truth_(and__3574__auto____12207))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____12207;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____12208 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____12208))
{return or__3576__auto____12208;
} else
{return (_contains_key_QMARK_["_"]);
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____12209 = coll;

if(cljs.core.truth_(and__3574__auto____12209))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____12209;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____12210 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____12210))
{return or__3576__auto____12210;
} else
{return (_assoc["_"]);
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____12211 = coll;

if(cljs.core.truth_(and__3574__auto____12211))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____12211;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____12212 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____12212))
{return or__3576__auto____12212;
} else
{return (_dissoc["_"]);
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____12213 = coll;

if(cljs.core.truth_(and__3574__auto____12213))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____12213;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____12214 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____12214))
{return or__3576__auto____12214;
} else
{return (_disjoin["_"]);
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____12215 = coll;

if(cljs.core.truth_(and__3574__auto____12215))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____12215;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____12216 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____12216))
{return or__3576__auto____12216;
} else
{return (_peek["_"]);
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____12217 = coll;

if(cljs.core.truth_(and__3574__auto____12217))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____12217;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____12218 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____12218))
{return or__3576__auto____12218;
} else
{return (_pop["_"]);
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____12219 = coll;

if(cljs.core.truth_(and__3574__auto____12219))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____12219;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____12220 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____12220))
{return or__3576__auto____12220;
} else
{return (_assoc_n["_"]);
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____12221 = o;

if(cljs.core.truth_(and__3574__auto____12221))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____12221;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____12222 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____12222))
{return or__3576__auto____12222;
} else
{return (_deref["_"]);
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____12223 = o;

if(cljs.core.truth_(and__3574__auto____12223))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____12223;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____12224 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____12224))
{return or__3576__auto____12224;
} else
{return (_deref_with_timeout["_"]);
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____12225 = o;

if(cljs.core.truth_(and__3574__auto____12225))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____12225;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____12226 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____12226))
{return or__3576__auto____12226;
} else
{return (_meta["_"]);
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____12227 = o;

if(cljs.core.truth_(and__3574__auto____12227))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____12227;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____12228 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____12228))
{return or__3576__auto____12228;
} else
{return (_with_meta["_"]);
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__12233 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____12229 = coll;

if(cljs.core.truth_(and__3574__auto____12229))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____12229;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____12230 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____12230))
{return or__3576__auto____12230;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f);
}
});
var _reduce__12234 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____12231 = coll;

if(cljs.core.truth_(and__3574__auto____12231))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____12231;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____12232 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____12232))
{return or__3576__auto____12232;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__12233.call(this,coll,f);
case  3 :
return _reduce__12234.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____12236 = o;

if(cljs.core.truth_(and__3574__auto____12236))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____12236;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____12237 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____12237))
{return or__3576__auto____12237;
} else
{return (_equiv["_"]);
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____12238 = o;

if(cljs.core.truth_(and__3574__auto____12238))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____12238;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____12239 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____12239))
{return or__3576__auto____12239;
} else
{return (_hash["_"]);
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____12240 = o;

if(cljs.core.truth_(and__3574__auto____12240))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____12240;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____12241 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____12241))
{return or__3576__auto____12241;
} else
{return (_seq["_"]);
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3574__auto____12242 = o;

if(cljs.core.truth_(and__3574__auto____12242))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____12242;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____12243 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____12243))
{return or__3576__auto____12243;
} else
{return (_pr_seq["_"]);
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____12244 = d;

if(cljs.core.truth_(and__3574__auto____12244))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____12244;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____12245 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____12245))
{return or__3576__auto____12245;
} else
{return (_realized_QMARK_["_"]);
}
})().call(null,d);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__12246 = null;
var G__12246__12247 = (function (_,n){
return null;
});
var G__12246__12248 = (function (_,n,not_found){
return not_found;
});
G__12246 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__12246__12247.call(this,_,n);
case  3 :
return G__12246__12248.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12246;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__12250 = null;
var G__12250__12251 = (function (_,f){
return f.call(null);
});
var G__12250__12252 = (function (_,f,start){
return start;
});
G__12250 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__12250__12251.call(this,_,f);
case  3 :
return G__12250__12252.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12250;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__12254 = null;
var G__12254__12255 = (function (o,k){
return null;
});
var G__12254__12256 = (function (o,k,not_found){
return not_found;
});
G__12254 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__12254__12255.call(this,o,k);
case  3 :
return G__12254__12256.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12254;
})()
);
goog.global['Date'].prototype.cljs$core$IEquiv$ = true;
goog.global['Date'].prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString,other.toString);
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
cljs.core.lt_ = (function lt_(x,y){
return (x < y);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__12264 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__12258 = cljs.core._nth.call(null,cicoll,0);
var n__12259 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__12259,cljs.core._count.call(null,cicoll))))
{{
var G__12268 = f.call(null,val__12258,cljs.core._nth.call(null,cicoll,n__12259));
var G__12269 = cljs.core.inc.call(null,n__12259);
val__12258 = G__12268;
n__12259 = G__12269;
continue;
}
} else
{return val__12258;
}
break;
}
}
});
var ci_reduce__12265 = (function (cicoll,f,val){
var val__12260 = val;
var n__12261 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__12261,cljs.core._count.call(null,cicoll))))
{{
var G__12270 = f.call(null,val__12260,cljs.core._nth.call(null,cicoll,n__12261));
var G__12271 = cljs.core.inc.call(null,n__12261);
val__12260 = G__12270;
n__12261 = G__12271;
continue;
}
} else
{return val__12260;
}
break;
}
});
var ci_reduce__12266 = (function (cicoll,f,val,idx){
var val__12262 = val;
var n__12263 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__12263,cljs.core._count.call(null,cicoll))))
{{
var G__12272 = f.call(null,val__12262,cljs.core._nth.call(null,cicoll,n__12263));
var G__12273 = cljs.core.inc.call(null,n__12263);
val__12262 = G__12272;
n__12263 = G__12273;
continue;
}
} else
{return val__12262;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__12264.call(this,cicoll,f);
case  3 :
return ci_reduce__12265.call(this,cicoll,f,val);
case  4 :
return ci_reduce__12266.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12280 = null;
var G__12280__12281 = (function (_,f){
var this__12274 = this;
return cljs.core.ci_reduce.call(null,this__12274.a,f,(this__12274.a[this__12274.i]),cljs.core.inc.call(null,this__12274.i));
});
var G__12280__12282 = (function (_,f,start){
var this__12275 = this;
return cljs.core.ci_reduce.call(null,this__12275.a,f,start,this__12275.i);
});
G__12280 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__12280__12281.call(this,_,f);
case  3 :
return G__12280__12282.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12280;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12276 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__12277 = this;
return (this__12277.a[this__12277.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__12278 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__12278.i),cljs.core._count.call(null,this__12278.a))))
{return (new cljs.core.IndexedSeq(this__12278.a,cljs.core.inc.call(null,this__12278.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__12279 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,prim))))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__12284 = null;
var G__12284__12285 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__12284__12286 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__12284 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__12284__12285.call(this,array,f);
case  3 :
return G__12284__12286.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12284;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__12288 = null;
var G__12288__12289 = (function (array,k){
return (array[k]);
});
var G__12288__12290 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__12288 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__12288__12289.call(this,array,k);
case  3 :
return G__12288__12290.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12288;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__12292 = null;
var G__12292__12293 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__12292__12294 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__12292 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__12292__12293.call(this,array,n);
case  3 :
return G__12292__12294.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12292;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3726__auto____12296 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12296))
{var s__12297 = temp__3726__auto____12296;

return cljs.core._first.call(null,s__12297);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__12298 = cljs.core.next.call(null,s);
s = G__12298;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__12299 = cljs.core.seq.call(null,x);
var n__12300 = 0;

while(true){
if(cljs.core.truth_(s__12299))
{{
var G__12301 = cljs.core.next.call(null,s__12299);
var G__12302 = cljs.core.inc.call(null,n__12300);
s__12299 = G__12301;
n__12300 = G__12302;
continue;
}
} else
{return n__12300;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__12303 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__12304 = (function (coll,x,var_args){
var xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(xs))
{{
var G__12306 = conj.call(null,coll,x);
var G__12307 = cljs.core.first.call(null,xs);
var G__12308 = cljs.core.next.call(null,xs);
coll = G__12306;
x = G__12307;
xs = G__12308;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
});
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__12303.call(this,coll,x);
default:
return conj__12304.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = (function (arglist__12309){
var coll = cljs.core.first(arglist__12309);
var x = cljs.core.first(cljs.core.next(arglist__12309));
var xs = cljs.core.rest(cljs.core.next(arglist__12309));
return conj__12304.call(null, coll, x, xs);
});
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__12310 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__12311 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__12310.call(this,coll,n);
case  3 :
return nth__12311.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__12313 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__12314 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__12313.call(this,o,k);
case  3 :
return get__12314.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__12317 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__12318 = (function (coll,k,v,var_args){
var kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
while(true){
var ret__12316 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__12320 = ret__12316;
var G__12321 = cljs.core.first.call(null,kvs);
var G__12322 = cljs.core.second.call(null,kvs);
var G__12323 = cljs.core.nnext.call(null,kvs);
coll = G__12320;
k = G__12321;
v = G__12322;
kvs = G__12323;
continue;
}
} else
{return ret__12316;
}
break;
}
});
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__12317.call(this,coll,k,v);
default:
return assoc__12318.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = (function (arglist__12324){
var coll = cljs.core.first(arglist__12324);
var k = cljs.core.first(cljs.core.next(arglist__12324));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12324)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12324)));
return assoc__12318.call(null, coll, k, v, kvs);
});
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__12326 = (function (coll){
return coll;
});
var dissoc__12327 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__12328 = (function (coll,k,var_args){
var ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
var ret__12325 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__12330 = ret__12325;
var G__12331 = cljs.core.first.call(null,ks);
var G__12332 = cljs.core.next.call(null,ks);
coll = G__12330;
k = G__12331;
ks = G__12332;
continue;
}
} else
{return ret__12325;
}
break;
}
});
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__12326.call(this,coll);
case  2 :
return dissoc__12327.call(this,coll,k);
default:
return dissoc__12328.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = (function (arglist__12333){
var coll = cljs.core.first(arglist__12333);
var k = cljs.core.first(cljs.core.next(arglist__12333));
var ks = cljs.core.rest(cljs.core.next(arglist__12333));
return dissoc__12328.call(null, coll, k, ks);
});
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
return cljs.core._meta.call(null,o);
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__12335 = (function (coll){
return coll;
});
var disj__12336 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__12337 = (function (coll,k,var_args){
var ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
var ret__12334 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__12339 = ret__12334;
var G__12340 = cljs.core.first.call(null,ks);
var G__12341 = cljs.core.next.call(null,ks);
coll = G__12339;
k = G__12340;
ks = G__12341;
continue;
}
} else
{return ret__12334;
}
break;
}
});
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__12335.call(this,coll);
case  2 :
return disj__12336.call(this,coll,k);
default:
return disj__12337.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = (function (arglist__12342){
var coll = cljs.core.first(arglist__12342);
var k = cljs.core.first(cljs.core.next(arglist__12342));
var ks = cljs.core.rest(cljs.core.next(arglist__12342));
return disj__12337.call(null, coll, k, ks);
});
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__107__auto____12343 = x;

if(cljs.core.truth_((function (){var and__3574__auto____12344 = x__107__auto____12343;

if(cljs.core.truth_(and__3574__auto____12344))
{return x__107__auto____12343.cljs$core$ICollection$;
} else
{return and__3574__auto____12344;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__107__auto____12343);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__107__auto____12345 = x;

if(cljs.core.truth_((function (){var and__3574__auto____12346 = x__107__auto____12345;

if(cljs.core.truth_(and__3574__auto____12346))
{return x__107__auto____12345.cljs$core$ISet$;
} else
{return and__3574__auto____12346;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__107__auto____12345);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__107__auto____12347 = x;

if(cljs.core.truth_((function (){var and__3574__auto____12348 = x__107__auto____12347;

if(cljs.core.truth_(and__3574__auto____12348))
{return x__107__auto____12347.cljs$core$IAssociative$;
} else
{return and__3574__auto____12348;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__107__auto____12347);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__107__auto____12349 = x;

if(cljs.core.truth_((function (){var and__3574__auto____12350 = x__107__auto____12349;

if(cljs.core.truth_(and__3574__auto____12350))
{return x__107__auto____12349.cljs$core$ISequential$;
} else
{return and__3574__auto____12350;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__107__auto____12349);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__107__auto____12351 = x;

if(cljs.core.truth_((function (){var and__3574__auto____12352 = x__107__auto____12351;

if(cljs.core.truth_(and__3574__auto____12352))
{return x__107__auto____12351.cljs$core$ICounted$;
} else
{return and__3574__auto____12352;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__107__auto____12351);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__107__auto____12353 = x;

if(cljs.core.truth_((function (){var and__3574__auto____12354 = x__107__auto____12353;

if(cljs.core.truth_(and__3574__auto____12354))
{return x__107__auto____12353.cljs$core$IMap$;
} else
{return and__3574__auto____12354;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__107__auto____12353);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__107__auto____12355 = x;

if(cljs.core.truth_((function (){var and__3574__auto____12356 = x__107__auto____12355;

if(cljs.core.truth_(and__3574__auto____12356))
{return x__107__auto____12355.cljs$core$IVector$;
} else
{return and__3574__auto____12356;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__107__auto____12355);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__12357 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__12357.push(key);
}));
return keys__12357;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__107__auto____12358 = s;

if(cljs.core.truth_((function (){var and__3574__auto____12359 = x__107__auto____12358;

if(cljs.core.truth_(and__3574__auto____12359))
{return x__107__auto____12358.cljs$core$ISeq$;
} else
{return and__3574__auto____12359;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__107__auto____12358);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3574__auto____12360 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____12360))
{return cljs.core.not.call(null,(function (){var or__3576__auto____12361 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____12361))
{return or__3576__auto____12361;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____12360;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____12362 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____12362))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____12362;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____12363 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____12363))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____12363;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3574__auto____12364 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____12364))
{return (n == n.toFixed());
} else
{return and__3574__auto____12364;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____12365 = coll;

if(cljs.core.truth_(and__3574__auto____12365))
{var and__3574__auto____12366 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____12366))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____12366;
}
} else
{return and__3574__auto____12365;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___12371 = (function (x){
return true;
});
var distinct_QMARK___12372 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___12373 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__12367 = cljs.core.set([y,x]);
var xs__12368 = more;

while(true){
var x__12369 = cljs.core.first.call(null,xs__12368);
var etc__12370 = cljs.core.next.call(null,xs__12368);

if(cljs.core.truth_(xs__12368))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__12367,x__12369)))
{return false;
} else
{{
var G__12375 = cljs.core.conj.call(null,s__12367,x__12369);
var G__12376 = etc__12370;
s__12367 = G__12375;
xs__12368 = G__12376;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
});
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___12371.call(this,x);
case  2 :
return distinct_QMARK___12372.call(this,x,y);
default:
return distinct_QMARK___12373.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = (function (arglist__12377){
var x = cljs.core.first(arglist__12377);
var y = cljs.core.first(cljs.core.next(arglist__12377));
var more = cljs.core.rest(cljs.core.next(arglist__12377));
return distinct_QMARK___12373.call(null, x, y, more);
});
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__12378 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__12378)))
{return r__12378;
} else
{if(cljs.core.truth_(r__12378))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__12380 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__12381 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__12379 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__12379,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__12379);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__12380.call(this,comp);
case  2 :
return sort__12381.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__12383 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__12384 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__12383.call(this,keyfn,comp);
case  3 :
return sort_by__12384.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__12386 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__12387 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__12386.call(this,f,val);
case  3 :
return reduce__12387.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__12393 = (function (f,coll){
var temp__3723__auto____12389 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____12389))
{var s__12390 = temp__3723__auto____12389;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__12390),cljs.core.next.call(null,s__12390));
} else
{return f.call(null);
}
});
var seq_reduce__12394 = (function (f,val,coll){
var val__12391 = val;
var coll__12392 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__12392))
{{
var G__12396 = f.call(null,val__12391,cljs.core.first.call(null,coll__12392));
var G__12397 = cljs.core.next.call(null,coll__12392);
val__12391 = G__12396;
coll__12392 = G__12397;
continue;
}
} else
{return val__12391;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__12393.call(this,f,val);
case  3 :
return seq_reduce__12394.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__12398 = null;
var G__12398__12399 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__12398__12400 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__12398 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12398__12399.call(this,coll,f);
case  3 :
return G__12398__12400.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12398;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___12402 = (function (){
return 0;
});
var _PLUS___12403 = (function (x){
return x;
});
var _PLUS___12404 = (function (x,y){
return (x + y);
});
var _PLUS___12405 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
});
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___12402.call(this);
case  1 :
return _PLUS___12403.call(this,x);
case  2 :
return _PLUS___12404.call(this,x,y);
default:
return _PLUS___12405.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = (function (arglist__12407){
var x = cljs.core.first(arglist__12407);
var y = cljs.core.first(cljs.core.next(arglist__12407));
var more = cljs.core.rest(cljs.core.next(arglist__12407));
return _PLUS___12405.call(null, x, y, more);
});
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___12408 = (function (x){
return (- x);
});
var ___12409 = (function (x,y){
return (x - y);
});
var ___12410 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
});
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___12408.call(this,x);
case  2 :
return ___12409.call(this,x,y);
default:
return ___12410.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = (function (arglist__12412){
var x = cljs.core.first(arglist__12412);
var y = cljs.core.first(cljs.core.next(arglist__12412));
var more = cljs.core.rest(cljs.core.next(arglist__12412));
return ___12410.call(null, x, y, more);
});
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___12413 = (function (){
return 1;
});
var _STAR___12414 = (function (x){
return x;
});
var _STAR___12415 = (function (x,y){
return (x * y);
});
var _STAR___12416 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
});
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___12413.call(this);
case  1 :
return _STAR___12414.call(this,x);
case  2 :
return _STAR___12415.call(this,x,y);
default:
return _STAR___12416.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = (function (arglist__12418){
var x = cljs.core.first(arglist__12418);
var y = cljs.core.first(cljs.core.next(arglist__12418));
var more = cljs.core.rest(cljs.core.next(arglist__12418));
return _STAR___12416.call(null, x, y, more);
});
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___12419 = (function (x){
return (1 / x);
});
var _SLASH___12420 = (function (x,y){
return (x / y);
});
var _SLASH___12421 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
});
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___12419.call(this,x);
case  2 :
return _SLASH___12420.call(this,x,y);
default:
return _SLASH___12421.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = (function (arglist__12423){
var x = cljs.core.first(arglist__12423);
var y = cljs.core.first(cljs.core.next(arglist__12423));
var more = cljs.core.rest(cljs.core.next(arglist__12423));
return _SLASH___12421.call(null, x, y, more);
});
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___12424 = (function (x){
return true;
});
var _LT___12425 = (function (x,y){
return (x < y);
});
var _LT___12426 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__12428 = y;
var G__12429 = cljs.core.first.call(null,more);
var G__12430 = cljs.core.next.call(null,more);
x = G__12428;
y = G__12429;
more = G__12430;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___12424.call(this,x);
case  2 :
return _LT___12425.call(this,x,y);
default:
return _LT___12426.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = (function (arglist__12431){
var x = cljs.core.first(arglist__12431);
var y = cljs.core.first(cljs.core.next(arglist__12431));
var more = cljs.core.rest(cljs.core.next(arglist__12431));
return _LT___12426.call(null, x, y, more);
});
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___12432 = (function (x){
return true;
});
var _LT__EQ___12433 = (function (x,y){
return (x <= y);
});
var _LT__EQ___12434 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__12436 = y;
var G__12437 = cljs.core.first.call(null,more);
var G__12438 = cljs.core.next.call(null,more);
x = G__12436;
y = G__12437;
more = G__12438;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___12432.call(this,x);
case  2 :
return _LT__EQ___12433.call(this,x,y);
default:
return _LT__EQ___12434.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = (function (arglist__12439){
var x = cljs.core.first(arglist__12439);
var y = cljs.core.first(cljs.core.next(arglist__12439));
var more = cljs.core.rest(cljs.core.next(arglist__12439));
return _LT__EQ___12434.call(null, x, y, more);
});
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___12440 = (function (x){
return true;
});
var _GT___12441 = (function (x,y){
return (x > y);
});
var _GT___12442 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__12444 = y;
var G__12445 = cljs.core.first.call(null,more);
var G__12446 = cljs.core.next.call(null,more);
x = G__12444;
y = G__12445;
more = G__12446;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___12440.call(this,x);
case  2 :
return _GT___12441.call(this,x,y);
default:
return _GT___12442.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = (function (arglist__12447){
var x = cljs.core.first(arglist__12447);
var y = cljs.core.first(cljs.core.next(arglist__12447));
var more = cljs.core.rest(cljs.core.next(arglist__12447));
return _GT___12442.call(null, x, y, more);
});
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___12448 = (function (x){
return true;
});
var _GT__EQ___12449 = (function (x,y){
return (x >= y);
});
var _GT__EQ___12450 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__12452 = y;
var G__12453 = cljs.core.first.call(null,more);
var G__12454 = cljs.core.next.call(null,more);
x = G__12452;
y = G__12453;
more = G__12454;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___12448.call(this,x);
case  2 :
return _GT__EQ___12449.call(this,x,y);
default:
return _GT__EQ___12450.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = (function (arglist__12455){
var x = cljs.core.first(arglist__12455);
var y = cljs.core.first(cljs.core.next(arglist__12455));
var more = cljs.core.rest(cljs.core.next(arglist__12455));
return _GT__EQ___12450.call(null, x, y, more);
});
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return cljs.core._.call(null,x,1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__12456 = (function (x){
return x;
});
var max__12457 = (function (x,y){
return ((x > y) ? x : y);
});
var max__12458 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
});
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__12456.call(this,x);
case  2 :
return max__12457.call(this,x,y);
default:
return max__12458.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = (function (arglist__12460){
var x = cljs.core.first(arglist__12460);
var y = cljs.core.first(cljs.core.next(arglist__12460));
var more = cljs.core.rest(cljs.core.next(arglist__12460));
return max__12458.call(null, x, y, more);
});
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__12461 = (function (x){
return x;
});
var min__12462 = (function (x,y){
return ((x < y) ? x : y);
});
var min__12463 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
});
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__12461.call(this,x);
case  2 :
return min__12462.call(this,x,y);
default:
return min__12463.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = (function (arglist__12465){
var x = cljs.core.first(arglist__12465);
var y = cljs.core.first(cljs.core.next(arglist__12465));
var more = cljs.core.rest(cljs.core.next(arglist__12465));
return min__12463.call(null, x, y, more);
});
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_(cljs.core._GT__EQ_.call(null,q,0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__12466 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__12466) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__12467 = cljs.core.quot.call(null,n,d);

return (n - (d * q__12467));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__12468 = (function (){
return Math.random.call(null);
});
var rand__12469 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__12468.call(this);
case  1 :
return rand__12469.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___12471 = (function (x){
return true;
});
var _EQ__EQ___12472 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___12473 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__12475 = y;
var G__12476 = cljs.core.first.call(null,more);
var G__12477 = cljs.core.next.call(null,more);
x = G__12475;
y = G__12476;
more = G__12477;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___12471.call(this,x);
case  2 :
return _EQ__EQ___12472.call(this,x,y);
default:
return _EQ__EQ___12473.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = (function (arglist__12478){
var x = cljs.core.first(arglist__12478);
var y = cljs.core.first(cljs.core.next(arglist__12478));
var more = cljs.core.rest(cljs.core.next(arglist__12478));
return _EQ__EQ___12473.call(null, x, y, more);
});
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return cljs.core._LT_.call(null,0,n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return cljs.core._EQ__EQ_.call(null,0,n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__12479 = n;
var xs__12480 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____12481 = xs__12480;

if(cljs.core.truth_(and__3574__auto____12481))
{return cljs.core.pos_QMARK_.call(null,n__12479);
} else
{return and__3574__auto____12481;
}
})()))
{{
var G__12482 = cljs.core.dec.call(null,n__12479);
var G__12483 = cljs.core.next.call(null,xs__12480);
n__12479 = G__12482;
xs__12480 = G__12483;
continue;
}
} else
{return xs__12480;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__12488 = null;
var G__12488__12489 = (function (coll,n){
var temp__3723__auto____12484 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____12484))
{var xs__12485 = temp__3723__auto____12484;

return cljs.core.first.call(null,xs__12485);
} else
{throw "Index out of bounds";
}
});
var G__12488__12490 = (function (coll,n,not_found){
var temp__3723__auto____12486 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____12486))
{var xs__12487 = temp__3723__auto____12486;

return cljs.core.first.call(null,xs__12487);
} else
{return not_found;
}
});
G__12488 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12488__12489.call(this,coll,n);
case  3 :
return G__12488__12490.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12488;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__12492 = (function (){
return "";
});
var str__12493 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__12494 = (function (x,var_args){
var ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__12496 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__12497 = cljs.core.next.call(null,more);
sb = G__12496;
more = G__12497;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
});
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__12492.call(this);
case  1 :
return str__12493.call(this,x);
default:
return str__12494.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = (function (arglist__12498){
var x = cljs.core.first(arglist__12498);
var ys = cljs.core.rest(arglist__12498);
return str__12494.call(null, x, ys);
});
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__12499 = (function (s,start){
return s.substring(start);
});
var subs__12500 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__12499.call(this,s,start);
case  3 :
return subs__12500.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__12502 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__12503 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__12502.call(this,ns);
case  2 :
return symbol__12503.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__12505 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__12506 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__12505.call(this,ns);
case  2 :
return keyword__12506.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__12508 = cljs.core.seq.call(null,x);
var ys__12509 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__12508)))
{return cljs.core.nil_QMARK_.call(null,ys__12509);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__12509)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__12508),cljs.core.first.call(null,ys__12509))))
{{
var G__12510 = cljs.core.next.call(null,xs__12508);
var G__12511 = cljs.core.next.call(null,ys__12509);
xs__12508 = G__12510;
ys__12509 = G__12511;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return cljs.core.bit_xor.call(null,seed,cljs.core._PLUS_.call(null,hash,2654435769,cljs.core.bit_shift_left.call(null,seed,6),cljs.core.bit_shift_right.call(null,seed,2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__12512_SHARP_,p2__12513_SHARP_){
return cljs.core.hash_combine.call(null,p1__12512_SHARP_,cljs.core.hash.call(null,p2__12513_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12514 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12515 = this;
return (new cljs.core.List(this__12515.meta,o,coll,cljs.core.inc.call(null,this__12515.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12516 = this;
return this__12516.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12517 = this;
return this__12517.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12518 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12519 = this;
return this__12519.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12520 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12521 = this;
return (new cljs.core.List(meta,this__12521.first,this__12521.rest,this__12521.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12522 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12523 = this;
return this__12523.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12524 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12525 = this;
return this__12525.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12526 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12527 = this;
return (new cljs.core.List(this__12527.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12528 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12529 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12530 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12531 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12532 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12533 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12534 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12535 = this;
return this__12535.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12536 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12537 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function list(var_args){
var items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
});

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12538 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12539 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12540 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12541 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12541.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12542 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12543 = this;
return this__12543.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12544 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12544.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__12544.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12545 = this;
return this__12545.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12546 = this;
return (new cljs.core.Cons(meta,this__12546.first,this__12546.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__12547 = null;
var G__12547__12548 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__12547__12549 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__12547 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__12547__12548.call(this,string,f);
case  3 :
return G__12547__12549.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12547;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__12551 = null;
var G__12551__12552 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__12551__12553 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__12551 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__12551__12552.call(this,string,k);
case  3 :
return G__12551__12553.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12551;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__12555 = null;
var G__12555__12556 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__12555__12557 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__12555 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__12555__12556.call(this,string,n);
case  3 :
return G__12555__12557.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12555;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
goog.global['String']['prototype']['call'] = (function() {
var G__12559 = null;
var G__12559__12560 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__12559__12561 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__12559 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__12559__12560.call(this,_,coll);
case  3 :
return G__12559__12561.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12559;
})()
;
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__12563 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__12563;
} else
{lazy_seq.x = x__12563.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12564 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12565 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12566 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12567 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12567.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12568 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12569 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12570 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12571 = this;
return this__12571.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12572 = this;
return (new cljs.core.LazySeq(meta,this__12572.realized,this__12572.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__12573 = cljs.core.array.call(null);

var s__12574 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__12574)))
{ary__12573.push(cljs.core.first.call(null,s__12574));
{
var G__12575 = cljs.core.next.call(null,s__12574);
s__12574 = G__12575;
continue;
}
} else
{return ary__12573;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__12576 = s;
var i__12577 = n;
var sum__12578 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____12579 = cljs.core.pos_QMARK_.call(null,i__12577);

if(cljs.core.truth_(and__3574__auto____12579))
{return cljs.core.seq.call(null,s__12576);
} else
{return and__3574__auto____12579;
}
})()))
{{
var G__12580 = cljs.core.next.call(null,s__12576);
var G__12581 = cljs.core.dec.call(null,i__12577);
var G__12582 = cljs.core.inc.call(null,sum__12578);
s__12576 = G__12580;
i__12577 = G__12581;
sum__12578 = G__12582;
continue;
}
} else
{return sum__12578;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__12586 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__12587 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__12588 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12583 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__12583))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__12583),concat.call(null,cljs.core.rest.call(null,s__12583),y));
} else
{return y;
}
})));
});
var concat__12589 = (function (x,y,var_args){
var zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
var cat__12585 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__12584 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__12584))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__12584),cat.call(null,cljs.core.rest.call(null,xys__12584),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__12585.call(null,concat.call(null,x,y),zs);
});
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__12586.call(this);
case  1 :
return concat__12587.call(this,x);
case  2 :
return concat__12588.call(this,x,y);
default:
return concat__12589.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = (function (arglist__12591){
var x = cljs.core.first(arglist__12591);
var y = cljs.core.first(cljs.core.next(arglist__12591));
var zs = cljs.core.rest(cljs.core.next(arglist__12591));
return concat__12589.call(null, x, y, zs);
});
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___12592 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___12593 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___12594 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___12595 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___12596 = (function (a,b,c,d,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
});
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___12592.call(this,a);
case  2 :
return list_STAR___12593.call(this,a,b);
case  3 :
return list_STAR___12594.call(this,a,b,c);
case  4 :
return list_STAR___12595.call(this,a,b,c,d);
default:
return list_STAR___12596.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = (function (arglist__12598){
var a = cljs.core.first(arglist__12598);
var b = cljs.core.first(cljs.core.next(arglist__12598));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12598)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12598))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12598))));
return list_STAR___12596.call(null, a, b, c, d, more);
});
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__12608 = (function (f,args){
var fixed_arity__12599 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,fixed_arity__12599),fixed_arity__12599)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__12609 = (function (f,x,args){
var arglist__12600 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__12601 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__12600,fixed_arity__12601),fixed_arity__12601)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__12600));
} else
{return f.cljs$lang$applyTo(arglist__12600);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12600));
}
});
var apply__12610 = (function (f,x,y,args){
var arglist__12602 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__12603 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__12602,fixed_arity__12603),fixed_arity__12603)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__12602));
} else
{return f.cljs$lang$applyTo(arglist__12602);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12602));
}
});
var apply__12611 = (function (f,x,y,z,args){
var arglist__12604 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__12605 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__12604,fixed_arity__12605),fixed_arity__12605)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__12604));
} else
{return f.cljs$lang$applyTo(arglist__12604);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12604));
}
});
var apply__12612 = (function (f,a,b,c,d,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
var arglist__12606 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__12607 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__12606,fixed_arity__12607),fixed_arity__12607)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__12606));
} else
{return f.cljs$lang$applyTo(arglist__12606);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12606));
}
});
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__12608.call(this,f,a);
case  3 :
return apply__12609.call(this,f,a,b);
case  4 :
return apply__12610.call(this,f,a,b,c);
case  5 :
return apply__12611.call(this,f,a,b,c,d);
default:
return apply__12612.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = (function (arglist__12614){
var f = cljs.core.first(arglist__12614);
var a = cljs.core.first(cljs.core.next(arglist__12614));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12614)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12614))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12614)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12614)))));
return apply__12612.call(null, f, a, b, c, d, args);
});
return apply;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___12615 = (function (x){
return false;
});
var not_EQ___12616 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___12617 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
});
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___12615.call(this,x);
case  2 :
return not_EQ___12616.call(this,x,y);
default:
return not_EQ___12617.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = (function (arglist__12619){
var x = cljs.core.first(arglist__12619);
var y = cljs.core.first(cljs.core.next(arglist__12619));
var more = cljs.core.rest(cljs.core.next(arglist__12619));
return not_EQ___12617.call(null, x, y, more);
});
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__12620 = pred;
var G__12621 = cljs.core.next.call(null,coll);
pred = G__12620;
coll = G__12621;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3576__auto____12622 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____12622))
{return or__3576__auto____12622;
} else
{{
var G__12623 = pred;
var G__12624 = cljs.core.next.call(null,coll);
pred = G__12623;
coll = G__12624;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return cljs.core.zero_QMARK_.call(null,cljs.core.bit_and.call(null,n,1));
} else
{throw cljs.core.str.call(null,"Argument must be an integer: ",n);
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__12625 = null;
var G__12625__12626 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__12625__12627 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__12625__12628 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__12625__12629 = (function (x,y,var_args){
var zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
});
G__12625 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__12625__12626.call(this);
case  1 :
return G__12625__12627.call(this,x);
case  2 :
return G__12625__12628.call(this,x,y);
default:
return G__12625__12629.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12625.cljs$lang$maxFixedArity = 2;
G__12625.cljs$lang$applyTo = (function (arglist__12631){
var x = cljs.core.first(arglist__12631);
var y = cljs.core.first(cljs.core.next(arglist__12631));
var zs = cljs.core.rest(cljs.core.next(arglist__12631));
return G__12625__12629.call(null, x, y, zs);
});
return G__12625;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return x;
});
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__12635 = (function (){
return cljs.core.identity;
});
var comp__12636 = (function (f){
return f;
});
var comp__12637 = (function (f,g){
return (function() {
var G__12641 = null;
var G__12641__12642 = (function (){
return f.call(null,g.call(null));
});
var G__12641__12643 = (function (x){
return f.call(null,g.call(null,x));
});
var G__12641__12644 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__12641__12645 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__12641__12646 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
});
G__12641 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12641__12642.call(this);
case  1 :
return G__12641__12643.call(this,x);
case  2 :
return G__12641__12644.call(this,x,y);
case  3 :
return G__12641__12645.call(this,x,y,z);
default:
return G__12641__12646.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12641.cljs$lang$maxFixedArity = 3;
G__12641.cljs$lang$applyTo = (function (arglist__12648){
var x = cljs.core.first(arglist__12648);
var y = cljs.core.first(cljs.core.next(arglist__12648));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12648)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12648)));
return G__12641__12646.call(null, x, y, z, args);
});
return G__12641;
})()
});
var comp__12638 = (function (f,g,h){
return (function() {
var G__12649 = null;
var G__12649__12650 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__12649__12651 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__12649__12652 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__12649__12653 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__12649__12654 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
});
G__12649 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12649__12650.call(this);
case  1 :
return G__12649__12651.call(this,x);
case  2 :
return G__12649__12652.call(this,x,y);
case  3 :
return G__12649__12653.call(this,x,y,z);
default:
return G__12649__12654.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12649.cljs$lang$maxFixedArity = 3;
G__12649.cljs$lang$applyTo = (function (arglist__12656){
var x = cljs.core.first(arglist__12656);
var y = cljs.core.first(cljs.core.next(arglist__12656));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12656)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12656)));
return G__12649__12654.call(null, x, y, z, args);
});
return G__12649;
})()
});
var comp__12639 = (function (f1,f2,f3,var_args){
var fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var fs__12632 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
var ret__12633 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__12632),args);
var fs__12634 = cljs.core.next.call(null,fs__12632);

while(true){
if(cljs.core.truth_(fs__12634))
{{
var G__12657 = cljs.core.first.call(null,fs__12634).call(null,ret__12633);
var G__12658 = cljs.core.next.call(null,fs__12634);
ret__12633 = G__12657;
fs__12634 = G__12658;
continue;
}
} else
{return ret__12633;
}
break;
}
});
});
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__12635.call(this);
case  1 :
return comp__12636.call(this,f1);
case  2 :
return comp__12637.call(this,f1,f2);
case  3 :
return comp__12638.call(this,f1,f2,f3);
default:
return comp__12639.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = (function (arglist__12659){
var f1 = cljs.core.first(arglist__12659);
var f2 = cljs.core.first(cljs.core.next(arglist__12659));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12659)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12659)));
return comp__12639.call(null, f1, f2, f3, fs);
});
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__12660 = (function (f,arg1){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,args);
});
});
var partial__12661 = (function (f,arg1,arg2){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,arg2,args);
});
});
var partial__12662 = (function (f,arg1,arg2,arg3){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
});
});
var partial__12663 = (function (f,arg1,arg2,arg3,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
});
});
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__12660.call(this,f,arg1);
case  3 :
return partial__12661.call(this,f,arg1,arg2);
case  4 :
return partial__12662.call(this,f,arg1,arg2,arg3);
default:
return partial__12663.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = (function (arglist__12665){
var f = cljs.core.first(arglist__12665);
var arg1 = cljs.core.first(cljs.core.next(arglist__12665));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12665)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12665))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12665))));
return partial__12663.call(null, f, arg1, arg2, arg3, more);
});
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__12672 = (function (f,x){
return (function() {
var G__12676 = null;
var G__12676__12677 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__12676__12678 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__12676__12679 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__12676__12680 = (function (a,b,c,var_args){
var ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
});
G__12676 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__12676__12677.call(this,a);
case  2 :
return G__12676__12678.call(this,a,b);
case  3 :
return G__12676__12679.call(this,a,b,c);
default:
return G__12676__12680.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12676.cljs$lang$maxFixedArity = 3;
G__12676.cljs$lang$applyTo = (function (arglist__12682){
var a = cljs.core.first(arglist__12682);
var b = cljs.core.first(cljs.core.next(arglist__12682));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12682)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12682)));
return G__12676__12680.call(null, a, b, c, ds);
});
return G__12676;
})()
});
var fnil__12673 = (function (f,x,y){
return (function() {
var G__12683 = null;
var G__12683__12684 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__12683__12685 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__12683__12686 = (function (a,b,c,var_args){
var ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
});
G__12683 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__12683__12684.call(this,a,b);
case  3 :
return G__12683__12685.call(this,a,b,c);
default:
return G__12683__12686.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12683.cljs$lang$maxFixedArity = 3;
G__12683.cljs$lang$applyTo = (function (arglist__12688){
var a = cljs.core.first(arglist__12688);
var b = cljs.core.first(cljs.core.next(arglist__12688));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12688)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12688)));
return G__12683__12686.call(null, a, b, c, ds);
});
return G__12683;
})()
});
var fnil__12674 = (function (f,x,y,z){
return (function() {
var G__12689 = null;
var G__12689__12690 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__12689__12691 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__12689__12692 = (function (a,b,c,var_args){
var ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
});
G__12689 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__12689__12690.call(this,a,b);
case  3 :
return G__12689__12691.call(this,a,b,c);
default:
return G__12689__12692.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12689.cljs$lang$maxFixedArity = 3;
G__12689.cljs$lang$applyTo = (function (arglist__12694){
var a = cljs.core.first(arglist__12694);
var b = cljs.core.first(cljs.core.next(arglist__12694));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12694)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12694)));
return G__12689__12692.call(null, a, b, c, ds);
});
return G__12689;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__12672.call(this,f,x);
case  3 :
return fnil__12673.call(this,f,x,y);
case  4 :
return fnil__12674.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__12739 = (function (p){
return (function() {
var ep1 = null;
var ep1__12744 = (function (){
return true;
});
var ep1__12745 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__12746 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12701 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____12701))
{return p.call(null,y);
} else
{return and__3574__auto____12701;
}
})());
});
var ep1__12747 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12702 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____12702))
{var and__3574__auto____12703 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____12703))
{return p.call(null,z);
} else
{return and__3574__auto____12703;
}
} else
{return and__3574__auto____12702;
}
})());
});
var ep1__12748 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12704 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____12704))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____12704;
}
})());
});
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__12744.call(this);
case  1 :
return ep1__12745.call(this,x);
case  2 :
return ep1__12746.call(this,x,y);
case  3 :
return ep1__12747.call(this,x,y,z);
default:
return ep1__12748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = (function (arglist__12750){
var x = cljs.core.first(arglist__12750);
var y = cljs.core.first(cljs.core.next(arglist__12750));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12750)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12750)));
return ep1__12748.call(null, x, y, z, args);
});
return ep1;
})()
});
var every_pred__12740 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__12751 = (function (){
return true;
});
var ep2__12752 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12705 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____12705))
{return p2.call(null,x);
} else
{return and__3574__auto____12705;
}
})());
});
var ep2__12753 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12706 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____12706))
{var and__3574__auto____12707 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____12707))
{var and__3574__auto____12708 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____12708))
{return p2.call(null,y);
} else
{return and__3574__auto____12708;
}
} else
{return and__3574__auto____12707;
}
} else
{return and__3574__auto____12706;
}
})());
});
var ep2__12754 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12709 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____12709))
{var and__3574__auto____12710 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____12710))
{var and__3574__auto____12711 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____12711))
{var and__3574__auto____12712 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____12712))
{var and__3574__auto____12713 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____12713))
{return p2.call(null,z);
} else
{return and__3574__auto____12713;
}
} else
{return and__3574__auto____12712;
}
} else
{return and__3574__auto____12711;
}
} else
{return and__3574__auto____12710;
}
} else
{return and__3574__auto____12709;
}
})());
});
var ep2__12755 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12714 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____12714))
{return cljs.core.every_QMARK_.call(null,(function (p1__12666_SHARP_){
var and__3574__auto____12715 = p1.call(null,p1__12666_SHARP_);

if(cljs.core.truth_(and__3574__auto____12715))
{return p2.call(null,p1__12666_SHARP_);
} else
{return and__3574__auto____12715;
}
}),args);
} else
{return and__3574__auto____12714;
}
})());
});
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__12751.call(this);
case  1 :
return ep2__12752.call(this,x);
case  2 :
return ep2__12753.call(this,x,y);
case  3 :
return ep2__12754.call(this,x,y,z);
default:
return ep2__12755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = (function (arglist__12757){
var x = cljs.core.first(arglist__12757);
var y = cljs.core.first(cljs.core.next(arglist__12757));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12757)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12757)));
return ep2__12755.call(null, x, y, z, args);
});
return ep2;
})()
});
var every_pred__12741 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__12758 = (function (){
return true;
});
var ep3__12759 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12716 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____12716))
{var and__3574__auto____12717 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____12717))
{return p3.call(null,x);
} else
{return and__3574__auto____12717;
}
} else
{return and__3574__auto____12716;
}
})());
});
var ep3__12760 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12718 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____12718))
{var and__3574__auto____12719 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____12719))
{var and__3574__auto____12720 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____12720))
{var and__3574__auto____12721 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____12721))
{var and__3574__auto____12722 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____12722))
{return p3.call(null,y);
} else
{return and__3574__auto____12722;
}
} else
{return and__3574__auto____12721;
}
} else
{return and__3574__auto____12720;
}
} else
{return and__3574__auto____12719;
}
} else
{return and__3574__auto____12718;
}
})());
});
var ep3__12761 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12723 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____12723))
{var and__3574__auto____12724 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____12724))
{var and__3574__auto____12725 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____12725))
{var and__3574__auto____12726 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____12726))
{var and__3574__auto____12727 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____12727))
{var and__3574__auto____12728 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____12728))
{var and__3574__auto____12729 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____12729))
{var and__3574__auto____12730 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____12730))
{return p3.call(null,z);
} else
{return and__3574__auto____12730;
}
} else
{return and__3574__auto____12729;
}
} else
{return and__3574__auto____12728;
}
} else
{return and__3574__auto____12727;
}
} else
{return and__3574__auto____12726;
}
} else
{return and__3574__auto____12725;
}
} else
{return and__3574__auto____12724;
}
} else
{return and__3574__auto____12723;
}
})());
});
var ep3__12762 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12731 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____12731))
{return cljs.core.every_QMARK_.call(null,(function (p1__12667_SHARP_){
var and__3574__auto____12732 = p1.call(null,p1__12667_SHARP_);

if(cljs.core.truth_(and__3574__auto____12732))
{var and__3574__auto____12733 = p2.call(null,p1__12667_SHARP_);

if(cljs.core.truth_(and__3574__auto____12733))
{return p3.call(null,p1__12667_SHARP_);
} else
{return and__3574__auto____12733;
}
} else
{return and__3574__auto____12732;
}
}),args);
} else
{return and__3574__auto____12731;
}
})());
});
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__12758.call(this);
case  1 :
return ep3__12759.call(this,x);
case  2 :
return ep3__12760.call(this,x,y);
case  3 :
return ep3__12761.call(this,x,y,z);
default:
return ep3__12762.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = (function (arglist__12764){
var x = cljs.core.first(arglist__12764);
var y = cljs.core.first(cljs.core.next(arglist__12764));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12764)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12764)));
return ep3__12762.call(null, x, y, z, args);
});
return ep3;
})()
});
var every_pred__12742 = (function (p1,p2,p3,var_args){
var ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var ps__12734 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__12765 = (function (){
return true;
});
var epn__12766 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__12668_SHARP_){
return p1__12668_SHARP_.call(null,x);
}),ps__12734);
});
var epn__12767 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__12669_SHARP_){
var and__3574__auto____12735 = p1__12669_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____12735))
{return p1__12669_SHARP_.call(null,y);
} else
{return and__3574__auto____12735;
}
}),ps__12734);
});
var epn__12768 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__12670_SHARP_){
var and__3574__auto____12736 = p1__12670_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____12736))
{var and__3574__auto____12737 = p1__12670_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____12737))
{return p1__12670_SHARP_.call(null,z);
} else
{return and__3574__auto____12737;
}
} else
{return and__3574__auto____12736;
}
}),ps__12734);
});
var epn__12769 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12738 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____12738))
{return cljs.core.every_QMARK_.call(null,(function (p1__12671_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__12671_SHARP_,args);
}),ps__12734);
} else
{return and__3574__auto____12738;
}
})());
});
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__12765.call(this);
case  1 :
return epn__12766.call(this,x);
case  2 :
return epn__12767.call(this,x,y);
case  3 :
return epn__12768.call(this,x,y,z);
default:
return epn__12769.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = (function (arglist__12771){
var x = cljs.core.first(arglist__12771);
var y = cljs.core.first(cljs.core.next(arglist__12771));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12771)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12771)));
return epn__12769.call(null, x, y, z, args);
});
return epn;
})()
});
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__12739.call(this,p1);
case  2 :
return every_pred__12740.call(this,p1,p2);
case  3 :
return every_pred__12741.call(this,p1,p2,p3);
default:
return every_pred__12742.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = (function (arglist__12772){
var p1 = cljs.core.first(arglist__12772);
var p2 = cljs.core.first(cljs.core.next(arglist__12772));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12772)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12772)));
return every_pred__12742.call(null, p1, p2, p3, ps);
});
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__12812 = (function (p){
return (function() {
var sp1 = null;
var sp1__12817 = (function (){
return null;
});
var sp1__12818 = (function (x){
return p.call(null,x);
});
var sp1__12819 = (function (x,y){
var or__3576__auto____12774 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____12774))
{return or__3576__auto____12774;
} else
{return p.call(null,y);
}
});
var sp1__12820 = (function (x,y,z){
var or__3576__auto____12775 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____12775))
{return or__3576__auto____12775;
} else
{var or__3576__auto____12776 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____12776))
{return or__3576__auto____12776;
} else
{return p.call(null,z);
}
}
});
var sp1__12821 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____12777 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____12777))
{return or__3576__auto____12777;
} else
{return cljs.core.some.call(null,p,args);
}
});
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__12817.call(this);
case  1 :
return sp1__12818.call(this,x);
case  2 :
return sp1__12819.call(this,x,y);
case  3 :
return sp1__12820.call(this,x,y,z);
default:
return sp1__12821.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = (function (arglist__12823){
var x = cljs.core.first(arglist__12823);
var y = cljs.core.first(cljs.core.next(arglist__12823));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12823)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12823)));
return sp1__12821.call(null, x, y, z, args);
});
return sp1;
})()
});
var some_fn__12813 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__12824 = (function (){
return null;
});
var sp2__12825 = (function (x){
var or__3576__auto____12778 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____12778))
{return or__3576__auto____12778;
} else
{return p2.call(null,x);
}
});
var sp2__12826 = (function (x,y){
var or__3576__auto____12779 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____12779))
{return or__3576__auto____12779;
} else
{var or__3576__auto____12780 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____12780))
{return or__3576__auto____12780;
} else
{var or__3576__auto____12781 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____12781))
{return or__3576__auto____12781;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__12827 = (function (x,y,z){
var or__3576__auto____12782 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____12782))
{return or__3576__auto____12782;
} else
{var or__3576__auto____12783 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____12783))
{return or__3576__auto____12783;
} else
{var or__3576__auto____12784 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____12784))
{return or__3576__auto____12784;
} else
{var or__3576__auto____12785 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____12785))
{return or__3576__auto____12785;
} else
{var or__3576__auto____12786 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____12786))
{return or__3576__auto____12786;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__12828 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____12787 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____12787))
{return or__3576__auto____12787;
} else
{return cljs.core.some.call(null,(function (p1__12695_SHARP_){
var or__3576__auto____12788 = p1.call(null,p1__12695_SHARP_);

if(cljs.core.truth_(or__3576__auto____12788))
{return or__3576__auto____12788;
} else
{return p2.call(null,p1__12695_SHARP_);
}
}),args);
}
});
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__12824.call(this);
case  1 :
return sp2__12825.call(this,x);
case  2 :
return sp2__12826.call(this,x,y);
case  3 :
return sp2__12827.call(this,x,y,z);
default:
return sp2__12828.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = (function (arglist__12830){
var x = cljs.core.first(arglist__12830);
var y = cljs.core.first(cljs.core.next(arglist__12830));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12830)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12830)));
return sp2__12828.call(null, x, y, z, args);
});
return sp2;
})()
});
var some_fn__12814 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__12831 = (function (){
return null;
});
var sp3__12832 = (function (x){
var or__3576__auto____12789 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____12789))
{return or__3576__auto____12789;
} else
{var or__3576__auto____12790 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____12790))
{return or__3576__auto____12790;
} else
{return p3.call(null,x);
}
}
});
var sp3__12833 = (function (x,y){
var or__3576__auto____12791 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____12791))
{return or__3576__auto____12791;
} else
{var or__3576__auto____12792 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____12792))
{return or__3576__auto____12792;
} else
{var or__3576__auto____12793 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____12793))
{return or__3576__auto____12793;
} else
{var or__3576__auto____12794 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____12794))
{return or__3576__auto____12794;
} else
{var or__3576__auto____12795 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____12795))
{return or__3576__auto____12795;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__12834 = (function (x,y,z){
var or__3576__auto____12796 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____12796))
{return or__3576__auto____12796;
} else
{var or__3576__auto____12797 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____12797))
{return or__3576__auto____12797;
} else
{var or__3576__auto____12798 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____12798))
{return or__3576__auto____12798;
} else
{var or__3576__auto____12799 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____12799))
{return or__3576__auto____12799;
} else
{var or__3576__auto____12800 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____12800))
{return or__3576__auto____12800;
} else
{var or__3576__auto____12801 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____12801))
{return or__3576__auto____12801;
} else
{var or__3576__auto____12802 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____12802))
{return or__3576__auto____12802;
} else
{var or__3576__auto____12803 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____12803))
{return or__3576__auto____12803;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__12835 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____12804 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____12804))
{return or__3576__auto____12804;
} else
{return cljs.core.some.call(null,(function (p1__12696_SHARP_){
var or__3576__auto____12805 = p1.call(null,p1__12696_SHARP_);

if(cljs.core.truth_(or__3576__auto____12805))
{return or__3576__auto____12805;
} else
{var or__3576__auto____12806 = p2.call(null,p1__12696_SHARP_);

if(cljs.core.truth_(or__3576__auto____12806))
{return or__3576__auto____12806;
} else
{return p3.call(null,p1__12696_SHARP_);
}
}
}),args);
}
});
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__12831.call(this);
case  1 :
return sp3__12832.call(this,x);
case  2 :
return sp3__12833.call(this,x,y);
case  3 :
return sp3__12834.call(this,x,y,z);
default:
return sp3__12835.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = (function (arglist__12837){
var x = cljs.core.first(arglist__12837);
var y = cljs.core.first(cljs.core.next(arglist__12837));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12837)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12837)));
return sp3__12835.call(null, x, y, z, args);
});
return sp3;
})()
});
var some_fn__12815 = (function (p1,p2,p3,var_args){
var ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var ps__12807 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__12838 = (function (){
return null;
});
var spn__12839 = (function (x){
return cljs.core.some.call(null,(function (p1__12697_SHARP_){
return p1__12697_SHARP_.call(null,x);
}),ps__12807);
});
var spn__12840 = (function (x,y){
return cljs.core.some.call(null,(function (p1__12698_SHARP_){
var or__3576__auto____12808 = p1__12698_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____12808))
{return or__3576__auto____12808;
} else
{return p1__12698_SHARP_.call(null,y);
}
}),ps__12807);
});
var spn__12841 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__12699_SHARP_){
var or__3576__auto____12809 = p1__12699_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____12809))
{return or__3576__auto____12809;
} else
{var or__3576__auto____12810 = p1__12699_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____12810))
{return or__3576__auto____12810;
} else
{return p1__12699_SHARP_.call(null,z);
}
}
}),ps__12807);
});
var spn__12842 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____12811 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____12811))
{return or__3576__auto____12811;
} else
{return cljs.core.some.call(null,(function (p1__12700_SHARP_){
return cljs.core.some.call(null,p1__12700_SHARP_,args);
}),ps__12807);
}
});
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__12838.call(this);
case  1 :
return spn__12839.call(this,x);
case  2 :
return spn__12840.call(this,x,y);
case  3 :
return spn__12841.call(this,x,y,z);
default:
return spn__12842.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = (function (arglist__12844){
var x = cljs.core.first(arglist__12844);
var y = cljs.core.first(cljs.core.next(arglist__12844));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12844)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12844)));
return spn__12842.call(null, x, y, z, args);
});
return spn;
})()
});
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__12812.call(this,p1);
case  2 :
return some_fn__12813.call(this,p1,p2);
case  3 :
return some_fn__12814.call(this,p1,p2,p3);
default:
return some_fn__12815.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = (function (arglist__12845){
var p1 = cljs.core.first(arglist__12845);
var p2 = cljs.core.first(cljs.core.next(arglist__12845));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12845)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12845)));
return some_fn__12815.call(null, p1, p2, p3, ps);
});
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__12858 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____12846 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12846))
{var s__12847 = temp__3726__auto____12846;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__12847)),map.call(null,f,cljs.core.rest.call(null,s__12847)));
} else
{return null;
}
})));
});
var map__12859 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12848 = cljs.core.seq.call(null,c1);
var s2__12849 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____12850 = s1__12848;

if(cljs.core.truth_(and__3574__auto____12850))
{return s2__12849;
} else
{return and__3574__auto____12850;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12848),cljs.core.first.call(null,s2__12849)),map.call(null,f,cljs.core.rest.call(null,s1__12848),cljs.core.rest.call(null,s2__12849)));
} else
{return null;
}
})));
});
var map__12860 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12851 = cljs.core.seq.call(null,c1);
var s2__12852 = cljs.core.seq.call(null,c2);
var s3__12853 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____12854 = s1__12851;

if(cljs.core.truth_(and__3574__auto____12854))
{var and__3574__auto____12855 = s2__12852;

if(cljs.core.truth_(and__3574__auto____12855))
{return s3__12853;
} else
{return and__3574__auto____12855;
}
} else
{return and__3574__auto____12854;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12851),cljs.core.first.call(null,s2__12852),cljs.core.first.call(null,s3__12853)),map.call(null,f,cljs.core.rest.call(null,s1__12851),cljs.core.rest.call(null,s2__12852),cljs.core.rest.call(null,s3__12853)));
} else
{return null;
}
})));
});
var map__12861 = (function (f,c1,c2,c3,var_args){
var colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
var step__12857 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12856 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12856)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__12856),step.call(null,map.call(null,cljs.core.rest,ss__12856)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__12773_SHARP_){
return cljs.core.apply.call(null,f,p1__12773_SHARP_);
}),step__12857.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
});
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__12858.call(this,f,c1);
case  3 :
return map__12859.call(this,f,c1,c2);
case  4 :
return map__12860.call(this,f,c1,c2,c3);
default:
return map__12861.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = (function (arglist__12863){
var f = cljs.core.first(arglist__12863);
var c1 = cljs.core.first(cljs.core.next(arglist__12863));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12863)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12863))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12863))));
return map__12861.call(null, f, c1, c2, c3, colls);
});
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,n)))
{var temp__3726__auto____12864 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12864))
{var s__12865 = temp__3726__auto____12864;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12865),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__12865)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__12868 = (function (n,coll){
while(true){
var s__12866 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____12867 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____12867))
{return s__12866;
} else
{return and__3574__auto____12867;
}
})()))
{{
var G__12869 = cljs.core.dec.call(null,n);
var G__12870 = cljs.core.rest.call(null,s__12866);
n = G__12869;
coll = G__12870;
continue;
}
} else
{return s__12866;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12868.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12871 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12872 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12871.call(this,n);
case  2 :
return drop_last__12872.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__12874 = cljs.core.seq.call(null,coll);
var lead__12875 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12875))
{{
var G__12876 = cljs.core.next.call(null,s__12874);
var G__12877 = cljs.core.next.call(null,lead__12875);
s__12874 = G__12876;
lead__12875 = G__12877;
continue;
}
} else
{return s__12874;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12880 = (function (pred,coll){
while(true){
var s__12878 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____12879 = s__12878;

if(cljs.core.truth_(and__3574__auto____12879))
{return pred.call(null,cljs.core.first.call(null,s__12878));
} else
{return and__3574__auto____12879;
}
})()))
{{
var G__12881 = pred;
var G__12882 = cljs.core.rest.call(null,s__12878);
pred = G__12881;
coll = G__12882;
continue;
}
} else
{return s__12878;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12880.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____12883 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12883))
{var s__12884 = temp__3726__auto____12883;

return cljs.core.concat.call(null,s__12884,cycle.call(null,s__12884));
} else
{return null;
}
})));
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__12885 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12886 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12885.call(this,n);
case  2 :
return repeat__12886.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__12888 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12889 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12888.call(this,n);
case  2 :
return repeatedly__12889.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__12895 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12891 = cljs.core.seq.call(null,c1);
var s2__12892 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____12893 = s1__12891;

if(cljs.core.truth_(and__3574__auto____12893))
{return s2__12892;
} else
{return and__3574__auto____12893;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12891),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12892),interleave.call(null,cljs.core.rest.call(null,s1__12891),cljs.core.rest.call(null,s2__12892))));
} else
{return null;
}
})));
});
var interleave__12896 = (function (c1,c2,var_args){
var colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12894 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12894)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12894),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12894)));
} else
{return null;
}
})));
});
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12895.call(this,c1,c2);
default:
return interleave__12896.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = (function (arglist__12898){
var c1 = cljs.core.first(arglist__12898);
var c2 = cljs.core.first(cljs.core.next(arglist__12898));
var colls = cljs.core.rest(cljs.core.next(arglist__12898));
return interleave__12896.call(null, c1, c2, colls);
});
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__12901 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____12899 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____12899))
{var coll__12900 = temp__3723__auto____12899;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12900),cat.call(null,cljs.core.rest.call(null,coll__12900),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12901.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12902 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12903 = (function (f,coll,var_args){
var colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
});
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12902.call(this,f,coll);
default:
return mapcat__12903.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = (function (arglist__12905){
var f = cljs.core.first(arglist__12905);
var coll = cljs.core.first(cljs.core.next(arglist__12905));
var colls = cljs.core.rest(cljs.core.next(arglist__12905));
return mapcat__12903.call(null, f, coll, colls);
});
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____12906 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12906))
{var s__12907 = temp__3726__auto____12906;

var f__12908 = cljs.core.first.call(null,s__12907);
var r__12909 = cljs.core.rest.call(null,s__12907);

if(cljs.core.truth_(pred.call(null,f__12908)))
{return cljs.core.cons.call(null,f__12908,filter.call(null,pred,r__12909));
} else
{return filter.call(null,pred,r__12909);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__12911 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12911.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12910_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12910_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__12918 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12919 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____12912 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12912))
{var s__12913 = temp__3726__auto____12912;

var p__12914 = cljs.core.take.call(null,n,s__12913);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12914))))
{return cljs.core.cons.call(null,p__12914,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12913)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12920 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____12915 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12915))
{var s__12916 = temp__3726__auto____12915;

var p__12917 = cljs.core.take.call(null,n,s__12916);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12917))))
{return cljs.core.cons.call(null,p__12917,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12916)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12917,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12918.call(this,n,step);
case  3 :
return partition__12919.call(this,n,step,pad);
case  4 :
return partition__12920.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__12926 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12927 = (function (m,ks,not_found){
var sentinel__12922 = cljs.core.lookup_sentinel;
var m__12923 = m;
var ks__12924 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12924))
{var m__12925 = cljs.core.get.call(null,m__12923,cljs.core.first.call(null,ks__12924),sentinel__12922);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__12922,m__12925)))
{return not_found;
} else
{{
var G__12929 = sentinel__12922;
var G__12930 = m__12925;
var G__12931 = cljs.core.next.call(null,ks__12924);
sentinel__12922 = G__12929;
m__12923 = G__12930;
ks__12924 = G__12931;
continue;
}
}
} else
{return m__12923;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12926.call(this,m,ks);
case  3 :
return get_in__12927.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__12932,v){
var vec__12933__12934 = p__12932;
var k__12935 = cljs.core.nth.call(null,vec__12933__12934,0,null);
var ks__12936 = cljs.core.nthnext.call(null,vec__12933__12934,1);

if(cljs.core.truth_(ks__12936))
{return cljs.core.assoc.call(null,m,k__12935,assoc_in.call(null,cljs.core.get.call(null,m,k__12935),ks__12936,v));
} else
{return cljs.core.assoc.call(null,m,k__12935,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function update_in(m,p__12937,f,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var vec__12938__12939 = p__12937;
var k__12940 = cljs.core.nth.call(null,vec__12938__12939,0,null);
var ks__12941 = cljs.core.nthnext.call(null,vec__12938__12939,1);

if(cljs.core.truth_(ks__12941))
{return cljs.core.assoc.call(null,m,k__12940,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12940),ks__12941,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12940,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12940),args));
}
});

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12942 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12943 = this;
var new_array__12944 = cljs.core.aclone.call(null,this__12943.array);

new_array__12944.push(o);
return (new cljs.core.Vector(this__12943.meta,new_array__12944));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12945 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__12945.array.length,0)))
{var vector_seq__12946 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__12945.array.length)))
{return cljs.core.cons.call(null,(this__12945.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__12946.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12947 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12948 = this;
var count__12949 = this__12948.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__12949,0)))
{return (this__12948.array[cljs.core.dec.call(null,count__12949)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12950 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__12950.array.length,0)))
{var new_array__12951 = cljs.core.aclone.call(null,this__12950.array);

new_array__12951.pop();
return (new cljs.core.Vector(this__12950.meta,new_array__12951));
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12952 = this;
return (new cljs.core.Vector(meta,this__12952.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12953 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12953.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12967 = null;
var G__12967__12968 = (function (coll,n){
var this__12954 = this;
if(cljs.core.truth_((function (){var and__3574__auto____12955 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____12955))
{return cljs.core._LT_.call(null,n,this__12954.array.length);
} else
{return and__3574__auto____12955;
}
})()))
{return (this__12954.array[n]);
} else
{return null;
}
});
var G__12967__12969 = (function (coll,n,not_found){
var this__12956 = this;
if(cljs.core.truth_((function (){var and__3574__auto____12957 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____12957))
{return cljs.core._LT_.call(null,n,this__12956.array.length);
} else
{return and__3574__auto____12957;
}
})()))
{return (this__12956.array[n]);
} else
{return not_found;
}
});
G__12967 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12967__12968.call(this,coll,n);
case  3 :
return G__12967__12969.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12967;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12958 = this;
return this__12958.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12971 = null;
var G__12971__12972 = (function (v,f){
var this__12959 = this;
return cljs.core.ci_reduce.call(null,this__12959.array,f);
});
var G__12971__12973 = (function (v,f,start){
var this__12960 = this;
return cljs.core.ci_reduce.call(null,this__12960.array,f,start);
});
G__12971 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12971__12972.call(this,v,f);
case  3 :
return G__12971__12973.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12971;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12961 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12962 = this;
return this__12962.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12963 = this;
var new_array__12964 = cljs.core.aclone.call(null,this__12963.array);

(new_array__12964[k] = v);
return (new cljs.core.Vector(this__12963.meta,new_array__12964));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12975 = null;
var G__12975__12976 = (function (coll,k){
var this__12965 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12975__12977 = (function (coll,k,not_found){
var this__12966 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12975 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12975__12976.call(this,coll,k);
case  3 :
return G__12975__12977.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12975;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__12979 = null;
var G__12979__12980 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__12979__12981 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__12979 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__12979__12980.call(this,_,k);
case  3 :
return G__12979__12981.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12979;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function vector(var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.vec.call(null,args);
});

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__12983 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__12984 = array.length;

var i__12985 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__12985,len__12984)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12985]))))
{return i__12985;
} else
{{
var G__12986 = cljs.core._PLUS_.call(null,i__12985,incr);
i__12985 = G__12986;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___12988 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12989 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____12987 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____12987))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____12987;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___12988.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12989.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12992 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12993 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12994 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__12994.keys.length)))
{return cljs.core.map.call(null,(function (p1__12991_SHARP_){
return cljs.core.vector.call(null,p1__12991_SHARP_,(this__12994.strobj[p1__12991_SHARP_]));
}),this__12994.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12995 = this;
return (new cljs.core.ObjMap(meta,this__12995.keys,this__12995.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12996 = this;
if(cljs.core.truth_((function (){var and__3574__auto____12997 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____12997))
{return this__12996.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____12997;
}
})()))
{var new_keys__12998 = cljs.core.aclone.call(null,this__12996.keys);
var new_strobj__12999 = goog.object.clone.call(null,this__12996.strobj);

new_keys__12998.splice(cljs.core.scan_array.call(null,1,k,new_keys__12998),1);
cljs.core.js_delete.call(null,new_strobj__12999,k);
return (new cljs.core.ObjMap(this__12996.meta,new_keys__12998,new_strobj__12999));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13000 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13000.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13001 = this;
return this__13001.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__13002 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13003 = this;
return this__13003.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13004 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13005 = goog.object.clone.call(null,this__13004.strobj);
var overwrite_QMARK___13006 = new_strobj__13005.hasOwnProperty(k);

(new_strobj__13005[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13006))
{return (new cljs.core.ObjMap(this__13004.meta,this__13004.keys,new_strobj__13005));
} else
{var new_keys__13007 = cljs.core.aclone.call(null,this__13004.keys);

new_keys__13007.push(k);
return (new cljs.core.ObjMap(this__13004.meta,new_keys__13007,new_strobj__13005));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13004.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13008 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13008.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13011 = null;
var G__13011__13012 = (function (coll,k){
var this__13009 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13011__13013 = (function (coll,k,not_found){
var this__13010 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13010.strobj,(this__13010.strobj[k]),not_found);
});
G__13011 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13011__13012.call(this,coll,k);
case  3 :
return G__13011__13013.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13011;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__13016 = null;
var G__13016__13017 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__13016__13018 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__13016 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__13016__13017.call(this,_,k);
case  3 :
return G__13016__13018.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13016;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13020 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13021 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13022 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__13022.count)))
{var hashes__13023 = cljs.core.js_keys.call(null,this__13022.hashobj);

return cljs.core.mapcat.call(null,(function (p1__13015_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13022.hashobj[p1__13015_SHARP_])));
}),hashes__13023);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13024 = this;
return (new cljs.core.HashMap(meta,this__13024.count,this__13024.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13025 = this;
var h__13026 = cljs.core.hash.call(null,k);
var bucket__13027 = (this__13025.hashobj[h__13026]);
var i__13028 = (cljs.core.truth_(bucket__13027)?cljs.core.scan_array.call(null,2,k,bucket__13027):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13028)))
{return coll;
} else
{var new_hashobj__13029 = goog.object.clone.call(null,this__13025.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__13027.length)))
{cljs.core.js_delete.call(null,new_hashobj__13029,h__13026);
} else
{var new_bucket__13030 = cljs.core.aclone.call(null,bucket__13027);

new_bucket__13030.splice(i__13028,2);
(new_hashobj__13029[h__13026] = new_bucket__13030);
}
return (new cljs.core.HashMap(this__13025.meta,cljs.core.dec.call(null,this__13025.count),new_hashobj__13029));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13031 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13031.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13032 = this;
return this__13032.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__13033 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13034 = this;
return this__13034.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13035 = this;
var h__13036 = cljs.core.hash.call(null,k);
var bucket__13037 = (this__13035.hashobj[h__13036]);

if(cljs.core.truth_(bucket__13037))
{var new_bucket__13038 = cljs.core.aclone.call(null,bucket__13037);
var new_hashobj__13039 = goog.object.clone.call(null,this__13035.hashobj);

(new_hashobj__13039[h__13036] = new_bucket__13038);
var temp__3723__auto____13040 = cljs.core.scan_array.call(null,2,k,new_bucket__13038);

if(cljs.core.truth_(temp__3723__auto____13040))
{var i__13041 = temp__3723__auto____13040;

(new_bucket__13038[cljs.core.inc.call(null,i__13041)] = v);
return (new cljs.core.HashMap(this__13035.meta,this__13035.count,new_hashobj__13039));
} else
{new_bucket__13038.push(k,v);
return (new cljs.core.HashMap(this__13035.meta,cljs.core.inc.call(null,this__13035.count),new_hashobj__13039));
}
} else
{var new_hashobj__13042 = goog.object.clone.call(null,this__13035.hashobj);

(new_hashobj__13042[h__13036] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13035.meta,cljs.core.inc.call(null,this__13035.count),new_hashobj__13042));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13043 = this;
var bucket__13044 = (this__13043.hashobj[cljs.core.hash.call(null,k)]);
var i__13045 = (cljs.core.truth_(bucket__13044)?cljs.core.scan_array.call(null,2,k,bucket__13044):null);

if(cljs.core.truth_(i__13045))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13050 = null;
var G__13050__13051 = (function (coll,k){
var this__13046 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13050__13052 = (function (coll,k,not_found){
var this__13047 = this;
var bucket__13048 = (this__13047.hashobj[cljs.core.hash.call(null,k)]);
var i__13049 = (cljs.core.truth_(bucket__13048)?cljs.core.scan_array.call(null,2,k,bucket__13048):null);

if(cljs.core.truth_(i__13049))
{return (bucket__13048[cljs.core.inc.call(null,i__13049)]);
} else
{return not_found;
}
});
G__13050 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13050__13051.call(this,coll,k);
case  3 :
return G__13050__13052.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13050;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13054 = ks.length;

var i__13055 = 0;
var out__13056 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__13055,len__13054)))
{{
var G__13057 = cljs.core.inc.call(null,i__13055);
var G__13058 = cljs.core.assoc.call(null,out__13056,(ks[i__13055]),(vs[i__13055]));
i__13055 = G__13057;
out__13056 = G__13058;
continue;
}
} else
{return out__13056;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__13059 = null;
var G__13059__13060 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__13059__13061 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__13059 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__13059__13060.call(this,_,k);
case  3 :
return G__13059__13061.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13059;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function hash_map(var_args){
var keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
var in$__13063 = cljs.core.seq.call(null,keyvals);
var out__13064 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13063))
{{
var G__13065 = cljs.core.nnext.call(null,in$__13063);
var G__13066 = cljs.core.assoc.call(null,out__13064,cljs.core.first.call(null,in$__13063),cljs.core.second.call(null,in$__13063));
in$__13063 = G__13065;
out__13064 = G__13066;
continue;
}
} else
{return out__13064;
}
break;
}
});
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function merge(var_args){
var maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__13067_SHARP_,p2__13068_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____13069 = p1__13067_SHARP_;

if(cljs.core.truth_(or__3576__auto____13069))
{return or__3576__auto____13069;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13068_SHARP_);
}),maps);
} else
{return null;
}
});
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13071 = cljs.core.ObjMap.fromObject([],{});
var keys__13072 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13072))
{var key__13073 = cljs.core.first.call(null,keys__13072);
var entry__13074 = cljs.core.get.call(null,map,key__13073);

{
var G__13075 = (cljs.core.truth_(entry__13074)?cljs.core.assoc.call(null,ret__13071,key__13073,entry__13074):ret__13071);
var G__13076 = cljs.core.next.call(null,keys__13072);
ret__13071 = G__13075;
keys__13072 = G__13076;
continue;
}
} else
{return ret__13071;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13077 = this;
return (new cljs.core.Set(this__13077.meta,cljs.core.dissoc.call(null,this__13077.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13078 = this;
var and__3574__auto____13079 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____13079))
{var and__3574__auto____13080 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____13080))
{return cljs.core.every_QMARK_.call(null,(function (p1__13070_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13070_SHARP_);
}),other);
} else
{return and__3574__auto____13080;
}
} else
{return and__3574__auto____13079;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13081 = this;
return (new cljs.core.Set(this__13081.meta,cljs.core.assoc.call(null,this__13081.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13082 = this;
return cljs.core.keys.call(null,this__13082.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13083 = this;
return (new cljs.core.Set(meta,this__13083.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13084 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13084.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13085 = this;
return this__13085.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__13086 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13087 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13090 = null;
var G__13090__13091 = (function (coll,v){
var this__13088 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13090__13092 = (function (coll,v,not_found){
var this__13089 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13089.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13090 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13090__13091.call(this,coll,v);
case  3 :
return G__13090__13092.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13090;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__13094 = null;
var G__13094__13095 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__13094__13096 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__13094 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__13094__13095.call(this,_,k);
case  3 :
return G__13094__13096.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13094;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13098 = cljs.core.seq.call(null,coll);
var out__13099 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13098))))
{{
var G__13100 = cljs.core.rest.call(null,in$__13098);
var G__13101 = cljs.core.conj.call(null,out__13099,cljs.core.first.call(null,in$__13098));
in$__13098 = G__13100;
out__13099 = G__13101;
continue;
}
} else
{return out__13099;
}
break;
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13109 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13102,seen){
while(true){
var vec__13103__13104 = p__13102;
var f__13105 = cljs.core.nth.call(null,vec__13103__13104,0,null);
var xs__13106 = vec__13103__13104;

var temp__3726__auto____13107 = cljs.core.seq.call(null,xs__13106);

if(cljs.core.truth_(temp__3726__auto____13107))
{var s__13108 = temp__3726__auto____13107;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13105)))
{{
var G__13110 = cljs.core.rest.call(null,s__13108);
var G__13111 = seen;
p__13102 = G__13110;
seen = G__13111;
continue;
}
} else
{return cljs.core.cons.call(null,f__13105,step.call(null,cljs.core.rest.call(null,s__13108),cljs.core.conj.call(null,seen,f__13105)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13109.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13112 = cljs.core.Vector.fromArray([]);
var s__13113 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13113)))
{{
var G__13114 = cljs.core.conj.call(null,ret__13112,cljs.core.first.call(null,s__13113));
var G__13115 = cljs.core.next.call(null,s__13113);
ret__13112 = G__13114;
s__13113 = G__13115;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13112);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3576__auto____13116 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____13116))
{return or__3576__auto____13116;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13117 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__13117,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__13117));
}
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3576__auto____13118 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____13118))
{return or__3576__auto____13118;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13119 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__13119,-1)))
{return cljs.core.subs.call(null,x,2,i__13119);
} else
{return null;
}
} else
{return "﷐'else";
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__13122 = cljs.core.ObjMap.fromObject([],{});
var ks__13123 = cljs.core.seq.call(null,keys);
var vs__13124 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____13125 = ks__13123;

if(cljs.core.truth_(and__3574__auto____13125))
{return vs__13124;
} else
{return and__3574__auto____13125;
}
})()))
{{
var G__13126 = cljs.core.assoc.call(null,map__13122,cljs.core.first.call(null,ks__13123),cljs.core.first.call(null,vs__13124));
var G__13127 = cljs.core.next.call(null,ks__13123);
var G__13128 = cljs.core.next.call(null,vs__13124);
map__13122 = G__13126;
ks__13123 = G__13127;
vs__13124 = G__13128;
continue;
}
} else
{return map__13122;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__13131 = (function (k,x){
return x;
});
var max_key__13132 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13133 = (function (k,x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.reduce.call(null,(function (p1__13120_SHARP_,p2__13121_SHARP_){
return max_key.call(null,k,p1__13120_SHARP_,p2__13121_SHARP_);
}),max_key.call(null,k,x,y),more);
});
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13131.call(this,k,x);
case  3 :
return max_key__13132.call(this,k,x,y);
default:
return max_key__13133.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = (function (arglist__13135){
var k = cljs.core.first(arglist__13135);
var x = cljs.core.first(cljs.core.next(arglist__13135));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13135)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13135)));
return max_key__13133.call(null, k, x, y, more);
});
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13136 = (function (k,x){
return x;
});
var min_key__13137 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13138 = (function (k,x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.reduce.call(null,(function (p1__13129_SHARP_,p2__13130_SHARP_){
return min_key.call(null,k,p1__13129_SHARP_,p2__13130_SHARP_);
}),min_key.call(null,k,x,y),more);
});
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13136.call(this,k,x);
case  3 :
return min_key__13137.call(this,k,x,y);
default:
return min_key__13138.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = (function (arglist__13140){
var k = cljs.core.first(arglist__13140);
var x = cljs.core.first(cljs.core.next(arglist__13140));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13140)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13140)));
return min_key__13138.call(null, k, x, y, more);
});
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13143 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13144 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____13141 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____13141))
{var s__13142 = temp__3726__auto____13141;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13142),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13142)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13143.call(this,n,step);
case  3 :
return partition_all__13144.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____13146 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____13146))
{var s__13147 = temp__3726__auto____13146;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13147))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13147),take_while.call(null,pred,cljs.core.rest.call(null,s__13147)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____13149 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____13149))
{var s__13150 = temp__3726__auto____13149;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13150),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13150)));
} else
{return null;
}
})));
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____13151 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____13151))
{var s__13152 = temp__3726__auto____13151;

var fst__13153 = cljs.core.first.call(null,s__13152);
var fv__13154 = f.call(null,fst__13153);
var run__13155 = cljs.core.cons.call(null,fst__13153,cljs.core.take_while.call(null,(function (p1__13148_SHARP_){
return cljs.core._EQ_.call(null,fv__13154,f.call(null,p1__13148_SHARP_));
}),cljs.core.next.call(null,s__13152)));

return cljs.core.cons.call(null,run__13155,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13155),s__13152))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,cljs.core.inc.call(null,cljs.core.get.call(null,counts,x,0)));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__13170 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____13166 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____13166))
{var s__13167 = temp__3723__auto____13166;

return reductions.call(null,f,cljs.core.first.call(null,s__13167),cljs.core.rest.call(null,s__13167));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13171 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____13168 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____13168))
{var s__13169 = temp__3726__auto____13168;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13169)),cljs.core.rest.call(null,s__13169));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13170.call(this,f,init);
case  3 :
return reductions__13171.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__13174 = (function (f){
return (function() {
var G__13179 = null;
var G__13179__13180 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13179__13181 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13179__13182 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13179__13183 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13179__13184 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
});
G__13179 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13179__13180.call(this);
case  1 :
return G__13179__13181.call(this,x);
case  2 :
return G__13179__13182.call(this,x,y);
case  3 :
return G__13179__13183.call(this,x,y,z);
default:
return G__13179__13184.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13179.cljs$lang$maxFixedArity = 3;
G__13179.cljs$lang$applyTo = (function (arglist__13186){
var x = cljs.core.first(arglist__13186);
var y = cljs.core.first(cljs.core.next(arglist__13186));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13186)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13186)));
return G__13179__13184.call(null, x, y, z, args);
});
return G__13179;
})()
});
var juxt__13175 = (function (f,g){
return (function() {
var G__13187 = null;
var G__13187__13188 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13187__13189 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13187__13190 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13187__13191 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13187__13192 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
});
G__13187 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13187__13188.call(this);
case  1 :
return G__13187__13189.call(this,x);
case  2 :
return G__13187__13190.call(this,x,y);
case  3 :
return G__13187__13191.call(this,x,y,z);
default:
return G__13187__13192.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13187.cljs$lang$maxFixedArity = 3;
G__13187.cljs$lang$applyTo = (function (arglist__13194){
var x = cljs.core.first(arglist__13194);
var y = cljs.core.first(cljs.core.next(arglist__13194));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13194)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13194)));
return G__13187__13192.call(null, x, y, z, args);
});
return G__13187;
})()
});
var juxt__13176 = (function (f,g,h){
return (function() {
var G__13195 = null;
var G__13195__13196 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13195__13197 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13195__13198 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13195__13199 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13195__13200 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
});
G__13195 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13195__13196.call(this);
case  1 :
return G__13195__13197.call(this,x);
case  2 :
return G__13195__13198.call(this,x,y);
case  3 :
return G__13195__13199.call(this,x,y,z);
default:
return G__13195__13200.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13195.cljs$lang$maxFixedArity = 3;
G__13195.cljs$lang$applyTo = (function (arglist__13202){
var x = cljs.core.first(arglist__13202);
var y = cljs.core.first(cljs.core.next(arglist__13202));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13202)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13202)));
return G__13195__13200.call(null, x, y, z, args);
});
return G__13195;
})()
});
var juxt__13177 = (function (f,g,h,var_args){
var fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var fs__13173 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13203 = null;
var G__13203__13204 = (function (){
return cljs.core.reduce.call(null,(function (p1__13156_SHARP_,p2__13157_SHARP_){
return cljs.core.conj.call(null,p1__13156_SHARP_,p2__13157_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13173);
});
var G__13203__13205 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13158_SHARP_,p2__13159_SHARP_){
return cljs.core.conj.call(null,p1__13158_SHARP_,p2__13159_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13173);
});
var G__13203__13206 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13160_SHARP_,p2__13161_SHARP_){
return cljs.core.conj.call(null,p1__13160_SHARP_,p2__13161_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13173);
});
var G__13203__13207 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13162_SHARP_,p2__13163_SHARP_){
return cljs.core.conj.call(null,p1__13162_SHARP_,p2__13163_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13173);
});
var G__13203__13208 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.reduce.call(null,(function (p1__13164_SHARP_,p2__13165_SHARP_){
return cljs.core.conj.call(null,p1__13164_SHARP_,cljs.core.apply.call(null,p2__13165_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13173);
});
G__13203 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13203__13204.call(this);
case  1 :
return G__13203__13205.call(this,x);
case  2 :
return G__13203__13206.call(this,x,y);
case  3 :
return G__13203__13207.call(this,x,y,z);
default:
return G__13203__13208.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13203.cljs$lang$maxFixedArity = 3;
G__13203.cljs$lang$applyTo = (function (arglist__13210){
var x = cljs.core.first(arglist__13210);
var y = cljs.core.first(cljs.core.next(arglist__13210));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13210)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13210)));
return G__13203__13208.call(null, x, y, z, args);
});
return G__13203;
})()
});
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13174.call(this,f);
case  2 :
return juxt__13175.call(this,f,g);
case  3 :
return juxt__13176.call(this,f,g,h);
default:
return juxt__13177.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = (function (arglist__13211){
var f = cljs.core.first(arglist__13211);
var g = cljs.core.first(cljs.core.next(arglist__13211));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13211)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13211)));
return juxt__13177.call(null, f, g, h, fs);
});
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__13213 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13216 = cljs.core.next.call(null,coll);
coll = G__13216;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__13214 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____13212 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____13212))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3574__auto____13212;
}
})()))
{{
var G__13217 = cljs.core.dec.call(null,n);
var G__13218 = cljs.core.next.call(null,coll);
n = G__13217;
coll = G__13218;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__13213.call(this,n);
case  2 :
return dorun__13214.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__13219 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__13220 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__13219.call(this,n);
case  2 :
return doall__13220.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__13222 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13222),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13222),1)))
{return cljs.core.first.call(null,matches__13222);
} else
{return cljs.core.vec.call(null,matches__13222);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__13223 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__13223)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13223),1)))
{return cljs.core.first.call(null,matches__13223);
} else
{return cljs.core.vec.call(null,matches__13223);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13224 = cljs.core.re_find.call(null,re,s);
var match_idx__13225 = s.search(re);
var match_str__13226 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__13224))?cljs.core.first.call(null,match_data__13224):match_data__13224);
var post_match__13227 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__13225,cljs.core.count.call(null,match_str__13226)));

if(cljs.core.truth_(match_data__13224))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13224,re_seq.call(null,re,post_match__13227));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new goog.global['RegExp'](s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__13228_SHARP_){
return print_one.call(null,p1__13228_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
goog.global['print'].call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____13229 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____13229))
{var and__3574__auto____13232 = (function (){var x__107__auto____13230 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____13231 = x__107__auto____13230;

if(cljs.core.truth_(and__3574__auto____13231))
{return x__107__auto____13230.cljs$core$IMeta$;
} else
{return and__3574__auto____13231;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__107__auto____13230);
}
})();

if(cljs.core.truth_(and__3574__auto____13232))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____13232;
}
} else
{return and__3574__auto____13229;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__107__auto____13233 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____13234 = x__107__auto____13233;

if(cljs.core.truth_(and__3574__auto____13234))
{return x__107__auto____13233.cljs$core$IPrintable$;
} else
{return and__3574__auto____13234;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__107__auto____13233);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__13235 = cljs.core.first.call(null,objs);
var sb__13236 = (new goog.string.StringBuffer());

var G__13237__13238 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__13237__13238))
{var obj__13239 = cljs.core.first.call(null,G__13237__13238);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__13239,first_obj__13235)))
{} else
{sb__13236.append(" ");
}
var G__13240__13241 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13239,opts));

while(true){
if(cljs.core.truth_(G__13240__13241))
{var string__13242 = cljs.core.first.call(null,G__13240__13241);

sb__13236.append(string__13242);
{
var G__13243 = cljs.core.next.call(null,G__13240__13241);
G__13240__13241 = G__13243;
continue;
}
} else
{}
break;
}
{
var G__13244 = cljs.core.next.call(null,G__13237__13238);
G__13237__13238 = G__13244;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__13236);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__13245 = cljs.core.first.call(null,objs);

var G__13246__13247 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__13246__13247))
{var obj__13248 = cljs.core.first.call(null,G__13246__13247);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__13248,first_obj__13245)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__13249__13250 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13248,opts));

while(true){
if(cljs.core.truth_(G__13249__13250))
{var string__13251 = cljs.core.first.call(null,G__13249__13250);

cljs.core.string_print.call(null,string__13251);
{
var G__13252 = cljs.core.next.call(null,G__13249__13250);
G__13249__13250 = G__13252;
continue;
}
} else
{}
break;
}
{
var G__13253 = cljs.core.next.call(null,G__13246__13247);
G__13246__13247 = G__13253;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function pr_str(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
});
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function pr(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
});
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function cljs_core_print(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
});
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function println(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
});
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function prn(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
});
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__13254 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__13254,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____13255 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____13255))
{var nspc__13256 = temp__3726__auto____13255;

return cljs.core.str.call(null,nspc__13256,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____13257 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____13257))
{var nspc__13258 = temp__3726__auto____13257;

return cljs.core.str.call(null,nspc__13258,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__13259 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__13259,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator){
this.state = state;
this.meta = meta;
this.validator = validator;
})
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__13260 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__13260.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__13261 = this;
return this__13261.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__13262 = this;
return this__13262.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__13263 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an exception.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__13270 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__13271 = (function (x,var_args){
var p__13264 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
var map__13265__13266 = p__13264;
var map__13265__13267 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13265__13266))?cljs.core.apply.call(null,cljs.core.hash_map,map__13265__13266):map__13265__13266);
var validator__13268 = cljs.core.get.call(null,map__13265__13267,"﷐'validator");
var meta__13269 = cljs.core.get.call(null,map__13265__13267,"﷐'meta");

return (new cljs.core.Atom(x,meta__13269,validator__13268));
});
atom = function(x,var_args){
var p__13264 = var_args;
switch(arguments.length){
case  1 :
return atom__13270.call(this,x);
default:
return atom__13271.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = (function (arglist__13273){
var x = cljs.core.first(arglist__13273);
var p__13264 = cljs.core.rest(arglist__13273);
return atom__13271.call(null, x, p__13264);
});
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3726__auto____13274 = a.validator;

if(cljs.core.truth_(temp__3726__auto____13274))
{var v__13275 = temp__3726__auto____13274;

if(cljs.core.truth_(v__13275.call(null,newval)))
{} else
{throw "Validator rejected reference state";
}
} else
{}
return a.state = newval;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___13276 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___13277 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___13278 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___13279 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___13280 = (function (a,f,x,y,z,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
});
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___13276.call(this,a,f);
case  3 :
return swap_BANG___13277.call(this,a,f,x);
case  4 :
return swap_BANG___13278.call(this,a,f,x,y);
case  5 :
return swap_BANG___13279.call(this,a,f,x,y,z);
default:
return swap_BANG___13280.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = (function (arglist__13282){
var a = cljs.core.first(arglist__13282);
var f = cljs.core.first(cljs.core.next(arglist__13282));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13282)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13282))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13282)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13282)))));
return swap_BANG___13280.call(null, a, f, x, y, z, more);
});
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for a var/ref/agent/atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an exception. If the current state (root
* value if var) is not acceptable to the new validator, an exception
* will be thrown and the validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function alter_meta_BANG_(iref,f,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
});
/**
* Atomically resets the metadata for a namespace/var/ref/agent/atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__13283 = (function (){
return gensym.call(null,"G__");
});
var gensym__13284 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__13283.call(this);
case  1 :
return gensym__13284.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__13286 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__13286.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__13287 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__13287.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__13287.state,this__13287.f);
}
return cljs.core.deref.call(null,this__13287.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function delay(var_args){
var body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
});
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function js__GT_clj(x,var_args){
var options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
var map__13288__13289 = options;
var map__13288__13290 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13288__13289))?cljs.core.apply.call(null,cljs.core.hash_map,map__13288__13289):map__13288__13289);
var keywordize_keys__13291 = cljs.core.get.call(null,map__13288__13290,"﷐'keywordize-keys");
var keyfn__13292 = (cljs.core.truth_(keywordize_keys__13291)?cljs.core.keyword:cljs.core.str);
var f__13298 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__161__auto____13297 = (function iter__13293(s__13294){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13294__13295 = s__13294;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13294__13295)))
{var k__13296 = cljs.core.first.call(null,s__13294__13295);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__13292.call(null,k__13296),thisfn.call(null,(x[k__13296]))]),iter__13293.call(null,cljs.core.rest.call(null,s__13294__13295)));
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____13297.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__13298.call(null,x);
});
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__13299 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
var temp__3723__auto____13300 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__13299),args);

if(cljs.core.truth_(temp__3723__auto____13300))
{var v__13301 = temp__3723__auto____13300;

return v__13301;
} else
{var ret__13302 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__13299,cljs.core.assoc,args,ret__13302);
return ret__13302;
}
});
});
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__13303 = (function (){
return rand.call(null,1);
});
var rand__13304 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__13303.call(this);
case  1 :
return rand__13304.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__13308 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__13308,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__13308,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
cljs.core.test_stuff = (function test_stuff(){
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([4,3,2,1,0]),(function (){var i__13309 = 0;
var j__13310 = cljs.core.List.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__13309,5)))
{{
var G__13444 = cljs.core.inc.call(null,i__13309);
var G__13445 = cljs.core.conj.call(null,j__13310,((function (i__13309,j__13310){
return (function (){
return i__13309;
});})(i__13309,j__13310))
);
i__13309 = G__13444;
j__13310 = G__13445;
continue;
}
} else
{return cljs.core.map.call(null,((function (i__13309,j__13310){
return (function (p1__13306_SHARP_){
return p1__13306_SHARP_.call(null);
});})(i__13309,j__13310))
,j__13310);
}
break;
}
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [4,3,2,1,0])),cljs.core.list("﷑'loop",(new cljs.core.Vector(null, ["﷑'i",0,"﷑'j",cljs.core.List.EMPTY])),cljs.core.list("﷑'if",cljs.core.list("﷑'<","﷑'i",5),cljs.core.list("﷑'recur",cljs.core.list("﷑'inc","﷑'i"),cljs.core.list("﷑'conj","﷑'j",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, [])),"﷑'i"))),cljs.core.list("﷑'map",cljs.core.list("﷑'fn*",(new cljs.core.Vector(null, ["﷑'p1__13306#"])),cljs.core.list("﷑'p1__13306#")),"﷑'j"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,1]),cljs.core.Vector.fromArray([1,2]),cljs.core.Vector.fromArray([1,3]),cljs.core.Vector.fromArray([2,1]),cljs.core.Vector.fromArray([2,2]),cljs.core.Vector.fromArray([2,3])]),cljs.core.map.call(null,(function (p1__13307_SHARP_){
return p1__13307_SHARP_.call(null);
}),(function (){var iter__161__auto____13321 = (function iter__13311(s__13312){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13312__13315 = s__13312;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13312__13315)))
{var i__13316 = cljs.core.first.call(null,s__13312__13315);

var iterys__159__auto____13319 = ((function (s__13312__13315){
return (function iter__13313(s__13314){
return (new cljs.core.LazySeq(null,false,((function (s__13312__13315){
return (function (){
var s__13314__13317 = s__13314;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13314__13317)))
{var j__13318 = cljs.core.first.call(null,s__13314__13317);

return cljs.core.cons.call(null,((function (s__13312__13315){
return (function (){
return cljs.core.Vector.fromArray([i__13316,j__13318]);
});})(s__13312__13315))
,iter__13313.call(null,cljs.core.rest.call(null,s__13314__13317)));
} else
{return null;
}
break;
}
});})(s__13312__13315))
));
});})(s__13312__13315))
;
var fs__160__auto____13320 = cljs.core.seq.call(null,iterys__159__auto____13319.call(null,cljs.core.Vector.fromArray([1,2,3])));

if(cljs.core.truth_(fs__160__auto____13320))
{return cljs.core.concat.call(null,fs__160__auto____13320,iter__13311.call(null,cljs.core.rest.call(null,s__13312__13315)));
} else
{{
var G__13446 = cljs.core.rest.call(null,s__13312__13315);
s__13312__13315 = G__13446;
continue;
}
}
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____13321.call(null,cljs.core.Vector.fromArray([1,2]));
})()))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,1])),(new cljs.core.Vector(null, [1,2])),(new cljs.core.Vector(null, [1,3])),(new cljs.core.Vector(null, [2,1])),(new cljs.core.Vector(null, [2,2])),(new cljs.core.Vector(null, [2,3]))])),cljs.core.list("﷑'map",cljs.core.list("﷑'fn*",(new cljs.core.Vector(null, ["﷑'p1__13307#"])),cljs.core.list("﷑'p1__13307#")),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'i",(new cljs.core.Vector(null, [1,2])),"﷑'j",(new cljs.core.Vector(null, [1,2,3]))])),cljs.core.list("﷑'fn",(new cljs.core.Vector(null, [])),(new cljs.core.Vector(null, ["﷑'i","﷑'j"]))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,"﷐'b".call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷐'b",cljs.core.hash_map("﷐'a",1,"﷐'b",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,"﷑'b".call(null,cljs.core.hash_map("﷐'a",1,"﷑'b",2)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.list("﷑'quote","﷑'b"),cljs.core.list("﷑'quote",cljs.core.hash_map("﷐'a",1,"﷑'b",2))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}).call(null,"﷐'b"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'b"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.HashMap.fromArrays([1,2],[1,2]).call(null,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.hash_map(1,1,2,2),2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.set([1,2,3]).call(null,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.set([1,2,3]),2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"baz",cljs.core.name.call(null,"﷑'foo/bar/baz"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","baz",cljs.core.list("﷑'name",cljs.core.list("﷑'quote","﷑'foo/bar/baz")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"foo/bar",cljs.core.namespace.call(null,"﷑'foo/bar/baz"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","foo/bar",cljs.core.list("﷑'namespace",cljs.core.list("﷑'quote","﷑'foo/bar/baz")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"baz",cljs.core.name.call(null,"﷐'foo/bar/baz"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","baz",cljs.core.list("﷑'name","﷐'foo/bar/baz"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":"﷐'b"}),cljs.core.get.call(null,cljs.core.HashMap.fromArrays([cljs.core.Vector.fromArray([1,2,3]),4],[cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":"﷐'b"}),5]),cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a","﷐'b"),cljs.core.list("﷑'get",cljs.core.hash_map((new cljs.core.Vector(null, [1,2,3])),cljs.core.hash_map("﷐'a","﷐'b"),4,5),(new cljs.core.Vector(null, [1,2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'a",cljs.core.nth.call(null,cljs.core.Vector.fromArray(["﷐'a","﷐'b","﷐'c","﷐'d"]),0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷐'a",cljs.core.list("﷑'nth",(new cljs.core.Vector(null, ["﷐'a","﷐'b","﷐'c","﷐'d"])),0))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'c"],{"﷐'a":"﷐'b","﷐'c":null}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'d"],{"﷐'a":"﷐'b","﷐'d":null})))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a","﷐'b","﷐'c",null),cljs.core.hash_map("﷐'a","﷐'b","﷐'d",null)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.list.call(null,3,2,1),cljs.core.Vector.fromArray([3,2,1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'list",3,2,1),(new cljs.core.Vector(null, [3,2,1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3,2,1]),cljs.core.seq.call(null,cljs.core.array.call(null,3,2,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3,2,1])),cljs.core.list("﷑'seq",cljs.core.list("﷑'array",3,2,1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,cljs.core.rest.call(null,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.List.EMPTY,cljs.core.list("﷑'rest",null))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,cljs.core.rest.call(null,cljs.core.Vector.fromArray([1])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.List.EMPTY,cljs.core.list("﷑'rest",(new cljs.core.Vector(null, [1]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,cljs.core.rest.call(null,cljs.core.array.call(null,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.List.EMPTY,cljs.core.list("﷑'rest",cljs.core.list("﷑'array",1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["x"],{"x":"y"}),cljs.core.meta.call(null,cljs.core.with_meta(cljs.core.Vector.fromArray([]),cljs.core.ObjMap.fromObject(["x"],{"x":"y"}))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("x","y"),cljs.core.list("﷑'meta",cljs.core.with_meta((new cljs.core.Vector(null, [])),cljs.core.hash_map("x","y"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":"﷐'b"}),cljs.core.dissoc.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'c"],{"﷐'a":"﷐'b","﷐'c":"﷐'d"}),"﷐'c"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a","﷐'b"),cljs.core.list("﷑'dissoc",cljs.core.hash_map("﷐'a","﷐'b","﷐'c","﷐'d"),"﷐'c"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.hash_map.call(null,"﷐'foo",5),cljs.core.assoc.call(null,(new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null))),"﷐'foo",5))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'hash-map","﷐'foo",5),cljs.core.list("﷑'assoc",cljs.core.list("﷑'cljs.core.ObjMap.",null,cljs.core.list("﷑'array"),cljs.core.list("﷑'js-obj")),"﷐'foo",5))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"[1 true {:a 2, :b 42} #<Array [3, 4]>]",cljs.core.pr_str.call(null,cljs.core.Vector.fromArray([1,true,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":2,"﷐'b":42}),cljs.core.array.call(null,3,4)])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","[1 true {:a 2, :b 42} #<Array [3, 4]>]",cljs.core.list("﷑'pr-str",(new cljs.core.Vector(null, [1,true,cljs.core.hash_map("﷐'a",2,"﷐'b",42),cljs.core.list("﷑'array",3,4)]))))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,"one","two"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'=","one","two"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core._count.call(null,"abc"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'-count","abc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core._count.call(null,cljs.core.array.call(null,1,2,3,4)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'-count",cljs.core.list("﷑'array",1,2,3,4)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"c",cljs.core._nth.call(null,"abc",2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","c",cljs.core.list("﷑'-nth","abc",2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"quux",cljs.core._nth.call(null,"abc",3,"quux"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","quux",cljs.core.list("﷑'-nth","abc",3,"quux"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core._nth.call(null,cljs.core.array.call(null,1,2,3,4),0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'-nth",cljs.core.list("﷑'array",1,2,3,4),0))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"val",cljs.core._nth.call(null,cljs.core.array.call(null,1,2,3,4),4,"val"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","val",cljs.core.list("﷑'-nth",cljs.core.list("﷑'array",1,2,3,4),4,"val"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"b",cljs.core._lookup.call(null,"abc",1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","b",cljs.core.list("﷑'-lookup","abc",1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"harriet",cljs.core._lookup.call(null,"abcd",4,"harriet"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","harriet",cljs.core.list("﷑'-lookup","abcd",4,"harriet"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core._lookup.call(null,cljs.core.array.call(null,1,2,3,4),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'-lookup",cljs.core.list("﷑'array",1,2,3,4),3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"zot",cljs.core._lookup.call(null,cljs.core.array.call(null,1,2,3,4),4,"zot"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","zot",cljs.core.list("﷑'-lookup",cljs.core.list("﷑'array",1,2,3,4),4,"zot"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,10,cljs.core._reduce.call(null,cljs.core.array.call(null,1,2,3,4),cljs.core._PLUS_))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",10,cljs.core.list("﷑'-reduce",cljs.core.list("﷑'array",1,2,3,4),"﷑'+"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,20,cljs.core._reduce.call(null,cljs.core.array.call(null,1,2,3,4),cljs.core._PLUS_,10))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",20,cljs.core.list("﷑'-reduce",cljs.core.list("﷑'array",1,2,3,4),"﷑'+",10))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"cabd",(function (){var jumble__13322 = (function (a,b){
return cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,cljs.core.str.call(null,a))),b);
});

return cljs.core._reduce.call(null,"abcd",jumble__13322);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","cabd",cljs.core.list("﷑'let",(new cljs.core.Vector(null, ["﷑'jumble",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'str",cljs.core.list("﷑'apply","﷑'str",cljs.core.list("﷑'reverse",cljs.core.list("﷑'str","﷑'a"))),"﷑'b"))])),cljs.core.list("﷑'-reduce","abcd","﷑'jumble")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"cafrogbd",(function (){var jumble__13323 = (function (a,b){
return cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,cljs.core.str.call(null,a))),b);
});

return cljs.core._reduce.call(null,"abcd",jumble__13323,"frog");
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","cafrogbd",cljs.core.list("﷑'let",(new cljs.core.Vector(null, ["﷑'jumble",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'str",cljs.core.list("﷑'apply","﷑'str",cljs.core.list("﷑'reverse",cljs.core.list("﷑'str","﷑'a"))),"﷑'b"))])),cljs.core.list("﷑'-reduce","abcd","﷑'jumble","frog")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,0,1,0,1]),cljs.core.Vector.fromArray([cljs.core.bit_and.call(null,1,0),cljs.core.bit_and.call(null,0,0),cljs.core.bit_and.call(null,1,1),cljs.core.bit_and.call(null,42,1),cljs.core.bit_and.call(null,41,1)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,0,1,0,1])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-and",1,0),cljs.core.list("﷑'bit-and",0,0),cljs.core.list("﷑'bit-and",1,1),cljs.core.list("﷑'bit-and",42,1),cljs.core.list("﷑'bit-and",41,1)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,0,1,43,41]),cljs.core.Vector.fromArray([cljs.core.bit_or.call(null,1,0),cljs.core.bit_or.call(null,0,0),cljs.core.bit_or.call(null,1,1),cljs.core.bit_or.call(null,42,1),cljs.core.bit_or.call(null,41,1)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,0,1,43,41])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-or",1,0),cljs.core.list("﷑'bit-or",0,0),cljs.core.list("﷑'bit-or",1,1),cljs.core.list("﷑'bit-or",42,1),cljs.core.list("﷑'bit-or",41,1)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,0,0,42,40]),cljs.core.Vector.fromArray([cljs.core.bit_and_not.call(null,1,0),cljs.core.bit_and_not.call(null,0,0),cljs.core.bit_and_not.call(null,1,1),cljs.core.bit_and_not.call(null,42,1),cljs.core.bit_and_not.call(null,41,1)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,0,0,42,40])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-and-not",1,0),cljs.core.list("﷑'bit-and-not",0,0),cljs.core.list("﷑'bit-and-not",1,1),cljs.core.list("﷑'bit-and-not",42,1),cljs.core.list("﷑'bit-and-not",41,1)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,2,968,16649,0]),cljs.core.Vector.fromArray([cljs.core.bit_clear.call(null,1,0),cljs.core.bit_clear.call(null,2,0),cljs.core.bit_clear.call(null,1000,5),cljs.core.bit_clear.call(null,16713,6),cljs.core.bit_clear.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,2,968,16649,0])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-clear",1,0),cljs.core.list("﷑'bit-clear",2,0),cljs.core.list("﷑'bit-clear",1000,5),cljs.core.list("﷑'bit-clear",16713,6),cljs.core.list("﷑'bit-clear",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,0,992,18761,0]),cljs.core.Vector.fromArray([cljs.core.bit_flip.call(null,1,0),cljs.core.bit_flip.call(null,2,1),cljs.core.bit_flip.call(null,1000,3),cljs.core.bit_flip.call(null,16713,11),cljs.core.bit_flip.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,0,992,18761,0])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-flip",1,0),cljs.core.list("﷑'bit-flip",2,1),cljs.core.list("﷑'bit-flip",1000,3),cljs.core.list("﷑'bit-flip",16713,11),cljs.core.list("﷑'bit-flip",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([-2,-3,999,-16714,-1025]),cljs.core.Vector.fromArray([cljs.core.bit_not.call(null,1),cljs.core.bit_not.call(null,2),cljs.core.bit_not.call(null,-1000),cljs.core.bit_not.call(null,16713),cljs.core.bit_not.call(null,1024)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [-2,-3,999,-16714,-1025])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-not",1),cljs.core.list("﷑'bit-not",2),cljs.core.list("﷑'bit-not",-1000),cljs.core.list("﷑'bit-not",16713),cljs.core.list("﷑'bit-not",1024)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,1000,18761,1024]),cljs.core.Vector.fromArray([cljs.core.bit_set.call(null,1,0),cljs.core.bit_set.call(null,2,1),cljs.core.bit_set.call(null,1000,3),cljs.core.bit_set.call(null,16713,11),cljs.core.bit_set.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,1000,18761,1024])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-set",1,0),cljs.core.list("﷑'bit-set",2,1),cljs.core.list("﷑'bit-set",1000,3),cljs.core.list("﷑'bit-set",16713,11),cljs.core.list("﷑'bit-set",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,true,true,false,true]),cljs.core.Vector.fromArray([cljs.core.bit_test.call(null,1,0),cljs.core.bit_test.call(null,2,1),cljs.core.bit_test.call(null,1000,3),cljs.core.bit_test.call(null,16713,11),cljs.core.bit_test.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,true,true,false,true])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-test",1,0),cljs.core.list("﷑'bit-test",2,1),cljs.core.list("﷑'bit-test",1000,3),cljs.core.list("﷑'bit-test",16713,11),cljs.core.list("﷑'bit-test",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,false,false]),cljs.core.Vector.fromArray([cljs.core.true_QMARK_.call(null,true),cljs.core.true_QMARK_.call(null,false),cljs.core.false_QMARK_.call(null,false),cljs.core.false_QMARK_.call(null,true),cljs.core.true_QMARK_.call(null,goog.global['undefined']),cljs.core.false_QMARK_.call(null,goog.global['undefined'])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,false,false])),(new cljs.core.Vector(null, [cljs.core.list("﷑'true?",true),cljs.core.list("﷑'true?",false),cljs.core.list("﷑'false?",false),cljs.core.list("﷑'false?",true),cljs.core.list("﷑'true?","﷑'js/undefined"),cljs.core.list("﷑'false?","﷑'js/undefined")])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.apply.call(null,cljs.core._PLUS_,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'apply","﷑'+",null))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.list.call(null)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'apply","﷑'+",cljs.core.list("﷑'list")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.list.call(null,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'apply","﷑'+",cljs.core.list("﷑'list",1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.apply.call(null,cljs.core._PLUS_,1,cljs.core.list.call(null,2)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'apply","﷑'+",1,cljs.core.list("﷑'list",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,7,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,cljs.core.list.call(null,4)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",7,cljs.core.list("﷑'apply","﷑'+",1,2,cljs.core.list("﷑'list",4)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,15,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,cljs.core.list.call(null,8)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",15,cljs.core.list("﷑'apply","﷑'+",1,2,4,cljs.core.list("﷑'list",8)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,31,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,8,cljs.core.list.call(null,16)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",31,cljs.core.list("﷑'apply","﷑'+",1,2,4,8,cljs.core.list("﷑'list",16)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,63,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,8,16,cljs.core.list.call(null,32)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",63,cljs.core.list("﷑'apply","﷑'+",1,2,4,8,16,cljs.core.list("﷑'list",32)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,127,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,8,16,cljs.core.list.call(null,32,64)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",127,cljs.core.list("﷑'apply","﷑'+",1,2,4,8,16,cljs.core.list("﷑'list",32,64)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4950,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.take.call(null,100,cljs.core.iterate.call(null,cljs.core.inc,0))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4950,cljs.core.list("﷑'apply","﷑'+",cljs.core.list("﷑'take",100,cljs.core.list("﷑'iterate","﷑'inc",0))))));
}
var a__13324 = cljs.core.atom.call(null,0);

if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,a__13324))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'deref","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.swap_BANG_.call(null,a__13324,cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'swap!","﷑'a","﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,cljs.core.compare_and_set_BANG_.call(null,a__13324,0,42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",false,cljs.core.list("﷑'compare-and-set!","﷑'a",0,42))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,cljs.core.compare_and_set_BANG_.call(null,a__13324,1,7))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",true,cljs.core.list("﷑'compare-and-set!","﷑'a",1,7))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.meta.call(null,a__13324))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'meta","﷑'a"))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.get_validator.call(null,a__13324))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'get-validator","﷑'a"))));
}
var a__13325 = cljs.core.atom.call(null,0);

if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.swap_BANG_.call(null,a__13325,cljs.core._PLUS_,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.swap_BANG_.call(null,a__13325,cljs.core._PLUS_,1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1,2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,10,cljs.core.swap_BANG_.call(null,a__13325,cljs.core._PLUS_,1,2,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",10,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1,2,3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,20,cljs.core.swap_BANG_.call(null,a__13325,cljs.core._PLUS_,1,2,3,4))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",20,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1,2,3,4))));
}
var a__13326 = cljs.core.atom.call(null,cljs.core.Vector.fromArray([1]),"﷐'validator",cljs.core.coll_QMARK_,"﷐'meta",cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.coll_QMARK_,cljs.core.get_validator.call(null,a__13326))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷑'coll?",cljs.core.list("﷑'get-validator","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),cljs.core.meta.call(null,a__13326))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1),cljs.core.list("﷑'meta","﷑'a"))));
}
cljs.core.alter_meta_BANG_.call(null,a__13326,cljs.core.assoc,"﷐'b",2);
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.meta.call(null,a__13326))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.list("﷑'meta","﷑'a"))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.empty.call(null,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'empty",null))));
}
var e_lazy_seq__13327 = cljs.core.empty.call(null,cljs.core.with_meta.call(null,(new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,"﷐'a",null);
}))),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_lazy_seq__13327)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-lazy-seq")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_lazy_seq__13327)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-lazy-seq")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_lazy_seq__13327))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-lazy-seq"))));
}
var e_list__13328 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.list(1,2,3),cljs.core.hash_map("﷐'b","﷐'c")));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_list__13328)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-list")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_list__13328)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-list")));
}
var e_elist__13329 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.List.EMPTY,cljs.core.hash_map("﷐'b","﷐'c")));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_elist__13329)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-elist")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_elist__13329)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-elist")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'c",cljs.core.get.call(null,cljs.core.meta.call(null,e_elist__13329),"﷐'b"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷐'c",cljs.core.list("﷑'get",cljs.core.list("﷑'meta","﷑'e-elist"),"﷐'b"))));
}
var e_cons__13330 = cljs.core.empty.call(null,cljs.core.with_meta.call(null,cljs.core.cons.call(null,"﷐'a",null),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_cons__13330)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-cons")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_cons__13330)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-cons")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_cons__13330))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-cons"))));
}
var e_vec__13331 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.Vector.fromArray(["﷐'a","﷐'d","﷐'g"]),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,e_vec__13331)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'vector?","﷑'e-vec")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_vec__13331)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-vec")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_vec__13331))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-vec"))));
}
var e_omap__13332 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.ObjMap.fromObject(["﷐'a","﷐'g"],{"﷐'a":"﷐'d","﷐'g":"﷐'h"}),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,e_omap__13332)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'map?","﷑'e-omap")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_omap__13332)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-omap")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_omap__13332))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-omap"))));
}
var e_hmap__13333 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.HashMap.fromArrays([cljs.core.Vector.fromArray([1,2]),"﷐'g"],["﷐'d","﷐'h"]),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,e_hmap__13333)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'map?","﷑'e-hmap")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_hmap__13333)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-hmap")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_hmap__13333))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-hmap"))));
}
var a__13334 = cljs.core.atom.call(null,null);

if(cljs.core.truth_(cljs.core._EQ_.call(null,1,1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'try",1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,(function (){try{throw (new goog.global['Error']());
}catch (e13336){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,goog.global['Error'],e13336)))
{var e__13337 = e13336;

return 2;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e13336;
} else
{return null;
}
}
}})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'try",1,cljs.core.list("﷑'throw",cljs.core.list("﷑'js/Error.")),cljs.core.list("﷑'catch","﷑'js/Error","﷑'e",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,(function (){try{throw (new goog.global['Error']());
}catch (e13338){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,goog.global['Error'],e13338)))
{var e__13339 = e13338;

return 2;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e13338;
} else
{return null;
}
}
}})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'try",1,cljs.core.list("﷑'throw",cljs.core.list("﷑'js/Error.")),cljs.core.list("﷑'catch","﷑'js/Error","﷑'e",1,2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,(function (){try{return 1;
}finally {cljs.core.reset_BANG_.call(null,a__13334,42);
}})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'try",1,cljs.core.list("﷑'finally",cljs.core.list("﷑'reset!","﷑'a",42))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,42,cljs.core.deref.call(null,a__13334))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",42,cljs.core.list("﷑'deref","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3]),cljs.core.nthnext.call(null,cljs.core.Vector.fromArray([1,2,3]),2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3])),cljs.core.list("﷑'nthnext",(new cljs.core.Vector(null, [1,2,3])),2))));
}
var v__13341 = cljs.core.Vector.fromArray([1,2,3]);

if(cljs.core.truth_(cljs.core._EQ_.call(null,v__13341,(function (){var iter__161__auto____13346 = (function iter__13342(s__13343){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13343__13344 = s__13343;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13343__13344)))
{var e__13345 = cljs.core.first.call(null,s__13343__13344);

return cljs.core.cons.call(null,e__13345,iter__13342.call(null,cljs.core.rest.call(null,s__13343__13344)));
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____13346.call(null,v__13341);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷑'v",cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v"])),"﷑'e"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,1]),cljs.core.Vector.fromArray([2,4]),cljs.core.Vector.fromArray([3,9])]),(function (){var iter__161__auto____13352 = (function iter__13347(s__13348){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13348__13349 = s__13348;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13348__13349)))
{var e__13350 = cljs.core.first.call(null,s__13348__13349);

var m__13351 = cljs.core._STAR_.call(null,e__13350,e__13350);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([e__13350,m__13351]),iter__13347.call(null,cljs.core.rest.call(null,s__13348__13349)));
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____13352.call(null,v__13341);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,1])),(new cljs.core.Vector(null, [2,4])),(new cljs.core.Vector(null, [3,9]))])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'let",(new cljs.core.Vector(null, ["﷑'m",cljs.core.list("﷑'*","﷑'e","﷑'e")]))])),(new cljs.core.Vector(null, ["﷑'e","﷑'m"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2]),(function (){var iter__161__auto____13357 = (function iter__13353(s__13354){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13354__13355 = s__13354;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13354__13355)))
{var e__13356 = cljs.core.first.call(null,s__13354__13355);

if(cljs.core.truth_(cljs.core._LT_.call(null,e__13356,3)))
{return cljs.core.cons.call(null,e__13356,iter__13353.call(null,cljs.core.rest.call(null,s__13354__13355)));
} else
{return null;
}
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____13357.call(null,v__13341);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'while",cljs.core.list("﷑'<","﷑'e",3)])),"﷑'e"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3]),(function (){var iter__161__auto____13362 = (function iter__13358(s__13359){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13359__13360 = s__13359;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13359__13360)))
{var e__13361 = cljs.core.first.call(null,s__13359__13360);

if(cljs.core.truth_(cljs.core._GT_.call(null,e__13361,2)))
{return cljs.core.cons.call(null,e__13361,iter__13358.call(null,cljs.core.rest.call(null,s__13359__13360)));
} else
{{
var G__13447 = cljs.core.rest.call(null,s__13359__13360);
s__13359__13360 = G__13447;
continue;
}
}
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____13362.call(null,v__13341);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'when",cljs.core.list("﷑'>","﷑'e",2)])),"﷑'e"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,1]),cljs.core.Vector.fromArray([2,4])]),(function (){var iter__161__auto____13368 = (function iter__13363(s__13364){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13364__13365 = s__13364;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13364__13365)))
{var e__13366 = cljs.core.first.call(null,s__13364__13365);

if(cljs.core.truth_(cljs.core._LT_.call(null,e__13366,3)))
{var m__13367 = cljs.core._STAR_.call(null,e__13366,e__13366);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([e__13366,m__13367]),iter__13363.call(null,cljs.core.rest.call(null,s__13364__13365)));
} else
{return null;
}
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____13368.call(null,v__13341);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,1])),(new cljs.core.Vector(null, [2,4]))])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'while",cljs.core.list("﷑'<","﷑'e",3),"﷐'let",(new cljs.core.Vector(null, ["﷑'m",cljs.core.list("﷑'*","﷑'e","﷑'e")]))])),(new cljs.core.Vector(null, ["﷑'e","﷑'m"]))))));
}
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,1,2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=",1,2)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.not_EQ_.call(null,1,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'not=",1,1))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.not_empty.call(null,cljs.core.Vector.fromArray([])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'not-empty",(new cljs.core.Vector(null, []))))));
}
if(cljs.core.truth_(cljs.core.boolean$.call(null,cljs.core.not_empty.call(null,cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'boolean",cljs.core.list("﷑'not-empty",(new cljs.core.Vector(null, [1,2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"joel",cljs.core.min_key.call(null,cljs.core.count,"joel","tom servo","crooooooooow"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","joel",cljs.core.list("﷑'min-key","﷑'count","joel","tom servo","crooooooooow"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"crooooooooow",cljs.core.max_key.call(null,cljs.core.count,"joel","tom servo","crooooooooow"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","crooooooooow",cljs.core.list("﷑'max-key","﷑'count","joel","tom servo","crooooooooow"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.partition_all.call(null,4,cljs.core.Vector.fromArray([1,2,3,4,5,6,7,8,9])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2,3,4]),cljs.core.Vector.fromArray([5,6,7,8]),cljs.core.Vector.fromArray([9])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'partition-all",4,(new cljs.core.Vector(null, [1,2,3,4,5,6,7,8,9]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2,3,4])),(new cljs.core.Vector(null, [5,6,7,8])),(new cljs.core.Vector(null, [9]))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.partition_all.call(null,4,2,cljs.core.Vector.fromArray([1,2,3,4,5,6,7,8,9])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2,3,4]),cljs.core.Vector.fromArray([3,4,5,6]),cljs.core.Vector.fromArray([5,6,7,8]),cljs.core.Vector.fromArray([7,8,9]),cljs.core.Vector.fromArray([9])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'partition-all",4,2,(new cljs.core.Vector(null, [1,2,3,4,5,6,7,8,9]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2,3,4])),(new cljs.core.Vector(null, [3,4,5,6])),(new cljs.core.Vector(null, [5,6,7,8])),(new cljs.core.Vector(null, [7,8,9])),(new cljs.core.Vector(null, [9]))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,true]),cljs.core.take_while.call(null,cljs.core.true_QMARK_,cljs.core.Vector.fromArray([true,true,2,3,4])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,true])),cljs.core.list("﷑'take-while","﷑'true?",(new cljs.core.Vector(null, [true,true,2,3,4]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([true,true]),cljs.core.Vector.fromArray([false,false,false]),cljs.core.Vector.fromArray([true,true])]),cljs.core.partition_by.call(null,cljs.core.true_QMARK_,cljs.core.Vector.fromArray([true,true,false,false,false,true,true])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [true,true])),(new cljs.core.Vector(null, [false,false,false])),(new cljs.core.Vector(null, [true,true]))])),cljs.core.list("﷑'partition-by","﷑'true?",(new cljs.core.Vector(null, [true,true,false,false,false,true,true]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,2,4,6,8,10]),cljs.core.take_nth.call(null,2,cljs.core.Vector.fromArray([0,1,2,3,4,5,6,7,8,9,10])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,2,4,6,8,10])),cljs.core.list("﷑'take-nth",2,(new cljs.core.Vector(null, [0,1,2,3,4,5,6,7,8,9,10]))))));
}
var a10__13369 = cljs.core.partial.call(null,cljs.core._PLUS_,10);
var a20__13370 = cljs.core.partial.call(null,cljs.core._PLUS_,10,10);
var a21__13371 = cljs.core.partial.call(null,cljs.core._PLUS_,10,10,1);
var a22__13372 = cljs.core.partial.call(null,cljs.core._PLUS_,10,5,4,3);
var a23__13373 = cljs.core.partial.call(null,cljs.core._PLUS_,10,5,4,3,1);

if(cljs.core.truth_(cljs.core._EQ_.call(null,110,a10__13369.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",110,cljs.core.list("﷑'a10",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,120,a20__13370.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",120,cljs.core.list("﷑'a20",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,121,a21__13371.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",121,cljs.core.list("﷑'a21",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,122,a22__13372.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",122,cljs.core.list("﷑'a22",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,123,a23__13373.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",123,cljs.core.list("﷑'a23",100))));
}
var n2__13374 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest);
var n3__13375 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest);
var n4__13376 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest,cljs.core.rest);
var n5__13377 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest,cljs.core.rest,cljs.core.rest);
var n6__13378 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest,cljs.core.rest,cljs.core.rest,cljs.core.rest);

if(cljs.core.truth_(cljs.core._EQ_.call(null,2,n2__13374.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'n2",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,n3__13375.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'n3",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,n4__13376.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'n4",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,5,n5__13377.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",5,cljs.core.list("﷑'n5",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,6,n6__13378.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",6,cljs.core.list("﷑'n6",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
var sf__13379 = cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.keyword_QMARK_,cljs.core.symbol_QMARK_);

if(cljs.core.truth_(sf__13379.call(null,"﷐'foo",1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'sf","﷐'foo",1)));
}
if(cljs.core.truth_(sf__13379.call(null,"﷐'foo")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'sf","﷐'foo")));
}
if(cljs.core.truth_(sf__13379.call(null,"﷑'bar",1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'sf",cljs.core.list("﷑'quote","﷑'bar"),1)));
}
if(cljs.core.truth_(cljs.core.not.call(null,sf__13379.call(null,cljs.core.Vector.fromArray([]),cljs.core.List.EMPTY))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'sf",(new cljs.core.Vector(null, [])),cljs.core.List.EMPTY))));
}
var ep__13380 = cljs.core.every_pred.call(null,cljs.core.number_QMARK_,cljs.core.zero_QMARK_);

if(cljs.core.truth_(ep__13380.call(null,0,0,0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'ep",0,0,0)));
}
if(cljs.core.truth_(cljs.core.not.call(null,ep__13380.call(null,1,2,3,0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'ep",1,2,3,0))));
}
if(cljs.core.truth_(cljs.core.complement.call(null,cljs.core.number_QMARK_).call(null,"﷐'foo")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list(cljs.core.list("﷑'complement","﷑'number?"),"﷐'foo")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,cljs.core.Vector.fromArray([2,3]),cljs.core.Vector.fromArray([1,2,3])]),cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest,cljs.core.seq).call(null,cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,(new cljs.core.Vector(null, [2,3])),(new cljs.core.Vector(null, [1,2,3]))])),cljs.core.list(cljs.core.list("﷑'juxt","﷑'first","﷑'rest","﷑'seq"),(new cljs.core.Vector(null, [1,2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,5,cljs.core.max.call(null,1,2,3,4,5))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",5,cljs.core.list("﷑'max",1,2,3,4,5))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,5.5,cljs.core.max.call(null,1,2,3,4,5,5.5))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",5.5,cljs.core.list("﷑'max",1,2,3,4,5,5.5))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.min.call(null,5,4,3,2,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'min",5,4,3,2,1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,0.5,cljs.core.min.call(null,5,4,3,0.5,2,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0.5,cljs.core.list("﷑'min",5,4,3,0.5,2,1))));
}
var x__13381 = cljs.core.array.call(null,1,2,3);

x__13381.foo = "﷐'hello";
if(cljs.core.truth_(cljs.core._EQ_.call(null,x__13381.foo,"﷐'hello")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'.foo","﷑'x"),"﷐'hello")));
}
if(cljs.core.truth_(cljs.core.set.call(null,cljs.core.Vector.fromArray([]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'set",(new cljs.core.Vector(null, [])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([]),cljs.core.set.call(null,cljs.core.Vector.fromArray([])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([]),cljs.core.list("﷑'set",(new cljs.core.Vector(null, []))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set(["foo"]),cljs.core.set.call(null,cljs.core.Vector.fromArray(["foo"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set(["foo"]),cljs.core.list("﷑'set",(new cljs.core.Vector(null, ["foo"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2,3]),cljs.core.set([1,2,3]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2,3]),cljs.core.set([1,2,3]))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([cljs.core.Vector.fromArray([4,5,6]),cljs.core.set([1,2,3]),9,10,cljs.core.HashMap.fromArrays([7],[8])]),cljs.core.set([cljs.core.Vector.fromArray([4,5,6]),cljs.core.set([1,2,3]),9,10,cljs.core.HashMap.fromArrays([7],[8])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([(new cljs.core.Vector(null, [4,5,6])),cljs.core.set([1,2,3]),9,10,cljs.core.hash_map(7,8)]),cljs.core.set([(new cljs.core.Vector(null, [4,5,6])),cljs.core.set([1,2,3]),9,10,cljs.core.hash_map(7,8)]))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,cljs.core.set([null,cljs.core.ObjMap.fromObject([],{}),0,cljs.core.set([]),cljs.core.Vector.fromArray([])]),cljs.core.set([])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'=",cljs.core.set([null,cljs.core.hash_map(),0,cljs.core.set([]),(new cljs.core.Vector(null, []))]),cljs.core.set([])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.set([null,cljs.core.ObjMap.fromObject([],{}),0,cljs.core.set([]),cljs.core.Vector.fromArray([])])),5)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'count",cljs.core.set([null,cljs.core.hash_map(),0,cljs.core.set([]),(new cljs.core.Vector(null, []))])),5)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.conj.call(null,cljs.core.set([1]),1),cljs.core.set([1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'conj",cljs.core.set([1]),1),cljs.core.set([1]))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.conj.call(null,cljs.core.set([1]),2),cljs.core.set([1,2]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'conj",cljs.core.set([1]),2),cljs.core.set([1,2]))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([]),cljs.core._empty.call(null,cljs.core.set([1,2,3,4])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([]),cljs.core.list("﷑'-empty",cljs.core.set([1,2,3,4])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.set([1,2,3,4,5])),15)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'reduce","﷑'+",cljs.core.set([1,2,3,4,5])),15)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.get.call(null,cljs.core.set([1,2,3,4]),4))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'get",cljs.core.set([1,2,3,4]),4))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set([1,2,3,4]),4)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.set([1,2,3,4]),4)));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set([null,0,cljs.core.ObjMap.fromObject([],{}),cljs.core.set([]),cljs.core.Vector.fromArray([])]),cljs.core.ObjMap.fromObject([],{}))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.set([null,0,cljs.core.hash_map(),cljs.core.set([]),(new cljs.core.Vector(null, []))]),cljs.core.hash_map())));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set([cljs.core.Vector.fromArray([1,2,3])]),cljs.core.Vector.fromArray([1,2,3]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.set([(new cljs.core.Vector(null, [1,2,3]))]),(new cljs.core.Vector(null, [1,2,3])))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core._disjoin.call(null,cljs.core.set([1,2,3]),3),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",cljs.core.list("﷑'-disjoin",cljs.core.set([1,2,3]),3),3))));
}
if(cljs.core.truth_(cljs.core.neg_QMARK_.call(null,-1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'neg?",-1)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.neg_QMARK_.call(null,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'neg?",1))));
}
if(cljs.core.truth_(cljs.core.neg_QMARK_.call(null,-1.765)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'neg?",-1.765)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.neg_QMARK_.call(null,0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'neg?",0))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,true,false,true,false]),cljs.core.map.call(null,cljs.core.integer_QMARK_,cljs.core.Vector.fromArray([1,1.00001,2023,cljs.core.Vector.fromArray([]),cljs.core._.call(null,88,1001991881),"﷐'foo",0,"0"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,true,false,true,false])),cljs.core.list("﷑'map","﷑'integer?",(new cljs.core.Vector(null, [1,1.00001,2023,(new cljs.core.Vector(null, [])),cljs.core.list("﷑'-",88,1001991881),"﷐'foo",0,"0"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,true,false]),cljs.core.map.call(null,cljs.core.odd_QMARK_,cljs.core.Vector.fromArray([1,2,3,4,-1,0])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,true,false])),cljs.core.list("﷑'map","﷑'odd?",(new cljs.core.Vector(null, [1,2,3,4,-1,0]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,true,true]),cljs.core.map.call(null,cljs.core.even_QMARK_,cljs.core.Vector.fromArray([2,3,4,5,-2,0])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,true,true])),cljs.core.list("﷑'map","﷑'even?",(new cljs.core.Vector(null, [2,3,4,5,-2,0]))))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'a")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'a")));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'z"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'z"))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.Vector.fromArray([5,6,7]),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",(new cljs.core.Vector(null, [5,6,7])),1)));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.Vector.fromArray([5,6,7]),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",(new cljs.core.Vector(null, [5,6,7])),2)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core.Vector.fromArray([5,6,7]),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",(new cljs.core.Vector(null, [5,6,7])),3))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([5,6,7])),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [5,6,7]))),1)));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([5,6,7])),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [5,6,7]))),2)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([5,6,7])),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [5,6,7]))),3))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,null,42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",null,42))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,"f",0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?","f",0)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,"f",55))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?","f",55))));
}
if(cljs.core.truth_(cljs.core.distinct_QMARK_.call(null,1,2,3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'distinct?",1,2,3)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.distinct_QMARK_.call(null,1,2,3,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'distinct?",1,2,3,1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.List.EMPTY),cljs.core.List.EMPTY)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",cljs.core.List.EMPTY),cljs.core.List.EMPTY)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.list(1)),cljs.core.list(1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",cljs.core.list("﷑'quote",cljs.core.list(1))),cljs.core.list("﷑'quote",cljs.core.list(1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.list(1,2,3,1,1,1)),cljs.core.list(1,2,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",cljs.core.list("﷑'quote",cljs.core.list(1,2,3,1,1,1))),cljs.core.list("﷑'quote",cljs.core.list(1,2,3)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([1,1,1,2])),cljs.core.list(1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [1,1,1,2]))),cljs.core.list("﷑'quote",cljs.core.list(1,2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([1,2,1,2])),cljs.core.list(1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [1,2,1,2]))),cljs.core.list("﷑'quote",cljs.core.list(1,2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,"a"),cljs.core.Vector.fromArray(["a"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct","a"),(new cljs.core.Vector(null, ["a"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,"abcabab"),cljs.core.Vector.fromArray(["a","b","c"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct","abcabab"),(new cljs.core.Vector(null, ["a","b","c"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray(["abc","abc"])),cljs.core.Vector.fromArray(["abc"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, ["abc","abc"]))),(new cljs.core.Vector(null, ["abc"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([null,null])),cljs.core.Vector.fromArray([null]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [null,null]))),(new cljs.core.Vector(null, [null])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([0.0,0.0])),cljs.core.Vector.fromArray([0.0]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [0.0,0.0]))),(new cljs.core.Vector(null, [0.0])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray(["﷑'sym","﷑'sym"])),(new cljs.core.Vector(null, ["﷑'sym"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.list("﷑'quote","﷑'sym"),cljs.core.list("﷑'quote","﷑'sym")]))),cljs.core.list("﷑'quote",(new cljs.core.Vector(null, ["﷑'sym"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray(["﷐'kw","﷐'kw"])),cljs.core.Vector.fromArray(["﷐'kw"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, ["﷐'kw","﷐'kw"]))),(new cljs.core.Vector(null, ["﷐'kw"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([42,42])),cljs.core.Vector.fromArray([42]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [42,42]))),(new cljs.core.Vector(null, [42])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([]),cljs.core.Vector.fromArray([])])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [])),(new cljs.core.Vector(null, []))]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, []))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.list(1,2),cljs.core.list(1,2)])),(new cljs.core.Vector(null, [cljs.core.list(1,2)])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.list("﷑'quote",cljs.core.list(1,2)),cljs.core.list("﷑'quote",cljs.core.list(1,2))]))),cljs.core.list("﷑'quote",(new cljs.core.Vector(null, [cljs.core.list(1,2)]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.List.EMPTY,cljs.core.List.EMPTY])),cljs.core.Vector.fromArray([cljs.core.List.EMPTY]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.List.EMPTY,cljs.core.List.EMPTY]))),(new cljs.core.Vector(null, [cljs.core.List.EMPTY])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2]),cljs.core.Vector.fromArray([1,2])])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2])),(new cljs.core.Vector(null, [1,2]))]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2]))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])),cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))),(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject([],{}),cljs.core.ObjMap.fromObject([],{})])),cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject([],{})]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.hash_map(),cljs.core.hash_map()]))),(new cljs.core.Vector(null, [cljs.core.hash_map()])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.set([1,2]),cljs.core.set([1,2])])),cljs.core.Vector.fromArray([cljs.core.set([1,2])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.set([1,2]),cljs.core.set([1,2])]))),(new cljs.core.Vector(null, [cljs.core.set([1,2])])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.set([]),cljs.core.set([])])),cljs.core.Vector.fromArray([cljs.core.set([])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.set([]),cljs.core.set([])]))),(new cljs.core.Vector(null, [cljs.core.set([])])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),(function (){var vec__13382__13383 = cljs.core.Vector.fromArray([1,2]);
var a__13384 = cljs.core.nth.call(null,vec__13382__13383,0,null);
var b__13385 = cljs.core.nth.call(null,vec__13382__13383,1,null);

return cljs.core.Vector.fromArray([b__13385,a__13384]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),(new cljs.core.Vector(null, [1,2]))])),(new cljs.core.Vector(null, ["﷑'b","﷑'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2]),(function (){var vec__13386__13387 = cljs.core.Vector.fromArray([1,2]);
var a__13388 = cljs.core.nth.call(null,vec__13386__13387,0,null);
var b__13389 = cljs.core.nth.call(null,vec__13386__13387,1,null);

return cljs.core.set([a__13388,b__13389]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2]),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),(new cljs.core.Vector(null, [1,2]))])),cljs.core.set(["﷑'a","﷑'b"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2]),(function (){var map__13390__13391 = cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2});
var map__13390__13392 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13390__13391))?cljs.core.apply.call(null,cljs.core.hash_map,map__13390__13391):map__13390__13391);
var a__13393 = cljs.core.get.call(null,map__13390__13392,"﷐'a");
var b__13394 = cljs.core.get.call(null,map__13390__13392,"﷐'b");

return cljs.core.Vector.fromArray([a__13393,b__13394]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷑'a","﷐'a","﷑'b","﷐'b"),cljs.core.hash_map("﷐'a",1,"﷐'b",2)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2]),(function (){var map__13395__13396 = cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2});
var map__13395__13397 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13395__13396))?cljs.core.apply.call(null,cljs.core.hash_map,map__13395__13396):map__13395__13396);
var b__13398 = cljs.core.get.call(null,map__13395__13397,"﷐'b");
var a__13399 = cljs.core.get.call(null,map__13395__13397,"﷐'a");

return cljs.core.Vector.fromArray([a__13399,b__13398]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'keys",(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))),cljs.core.hash_map("﷐'a",1,"﷐'b",2)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,cljs.core.Vector.fromArray([1,2])]),(function (){var vec__13400__13401 = cljs.core.Vector.fromArray([1,2]);
var a__13402 = cljs.core.nth.call(null,vec__13400__13401,0,null);
var b__13403 = cljs.core.nth.call(null,vec__13400__13401,1,null);
var v__13404 = vec__13400__13401;

return cljs.core.Vector.fromArray([a__13402,b__13403,v__13404]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,(new cljs.core.Vector(null, [1,2]))])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b","﷐'as","﷑'v"])),(new cljs.core.Vector(null, [1,2]))])),(new cljs.core.Vector(null, ["﷑'a","﷑'b","﷑'v"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,42]),(function (){var map__13405__13406 = cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1});
var map__13405__13407 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13405__13406))?cljs.core.apply.call(null,cljs.core.hash_map,map__13405__13406):map__13405__13406);
var b__13408 = cljs.core.get.call(null,map__13405__13407,"﷐'b",42);
var a__13409 = cljs.core.get.call(null,map__13405__13407,"﷐'a");

return cljs.core.Vector.fromArray([a__13409,b__13408]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,42])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'keys",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),"﷐'or",cljs.core.hash_map("﷑'b",42)),cljs.core.hash_map("﷐'a",1)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,null]),(function (){var map__13410__13411 = cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1});
var map__13410__13412 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13410__13411))?cljs.core.apply.call(null,cljs.core.hash_map,map__13410__13411):map__13410__13411);
var b__13413 = cljs.core.get.call(null,map__13410__13412,"﷐'b");
var a__13414 = cljs.core.get.call(null,map__13410__13412,"﷐'a");

return cljs.core.Vector.fromArray([a__13414,b__13413]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,null])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'keys",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),"﷐'or",cljs.core.hash_map("﷑'c",42)),cljs.core.hash_map("﷐'a",1)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),(function (){var vec__13415__13416 = cljs.core.list(1,2);
var a__13417 = cljs.core.nth.call(null,vec__13415__13416,0,null);
var b__13418 = cljs.core.nth.call(null,vec__13415__13416,1,null);

return cljs.core.Vector.fromArray([b__13418,a__13417]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'quote",cljs.core.list(1,2))])),(new cljs.core.Vector(null, ["﷑'b","﷑'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1],[2]),(function (){var vec__13419__13420 = cljs.core.Vector.fromArray([1,2]);
var a__13421 = cljs.core.nth.call(null,vec__13419__13420,0,null);
var b__13422 = cljs.core.nth.call(null,vec__13419__13420,1,null);

return cljs.core.HashMap.fromArrays([a__13421],[b__13422]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),(new cljs.core.Vector(null, [1,2]))])),cljs.core.hash_map("﷑'a","﷑'b")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),(function (){var vec__13423__13424 = cljs.core.seq.call(null,cljs.core.Vector.fromArray([1,2]));
var a__13425 = cljs.core.nth.call(null,vec__13423__13424,0,null);
var b__13426 = cljs.core.nth.call(null,vec__13423__13424,1,null);

return cljs.core.Vector.fromArray([b__13426,a__13425]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'seq",(new cljs.core.Vector(null, [1,2])))])),(new cljs.core.Vector(null, ["﷑'b","﷑'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":1})})}),cljs.core.update_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":0})})}),cljs.core.Vector.fromArray(["﷐'foo","﷐'bar","﷐'baz"]),cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",1))),cljs.core.list("﷑'update-in",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",0))),(new cljs.core.Vector(null, ["﷐'foo","﷐'bar","﷐'baz"])),"﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":10}),cljs.core.update_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":3}),cljs.core.Vector.fromArray(["﷐'baz"]),cljs.core._PLUS_,7))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",10),cljs.core.list("﷑'update-in",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",3),(new cljs.core.Vector(null, ["﷐'baz"])),"﷑'+",7))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":3})]),cljs.core.update_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2})]),cljs.core.Vector.fromArray([1,"﷐'bar"]),cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",3)])),cljs.core.list("﷑'update-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",2)])),(new cljs.core.Vector(null, [1,"﷐'bar"])),"﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":3})})]),cljs.core.update_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})})]),cljs.core.Vector.fromArray([1,"﷐'foo","﷐'bar"]),cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2)),cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",3))])),cljs.core.list("﷑'update-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2)),cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2))])),(new cljs.core.Vector(null, [1,"﷐'foo","﷐'bar"])),"﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":100})})}),cljs.core.assoc_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":0})})}),cljs.core.Vector.fromArray(["﷐'foo","﷐'bar","﷐'baz"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",100))),cljs.core.list("﷑'assoc-in",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",0))),(new cljs.core.Vector(null, ["﷐'foo","﷐'bar","﷐'baz"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":100}),cljs.core.assoc_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":3}),cljs.core.Vector.fromArray(["﷐'baz"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",100),cljs.core.list("﷑'assoc-in",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",3),(new cljs.core.Vector(null, ["﷐'baz"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3})])}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":100})])})]),cljs.core.assoc_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3})])}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3})])})]),cljs.core.Vector.fromArray([1,"﷐'foo",1,"﷐'baz"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",3)]))),cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",100)])))])),cljs.core.list("﷑'assoc-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",3)]))),cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",3)])))])),(new cljs.core.Vector(null, [1,"﷐'foo",1,"﷐'baz"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":100})]),cljs.core.assoc_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2})]),cljs.core.Vector.fromArray([1,"﷐'bar"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",100)])),cljs.core.list("﷑'assoc-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",2)])),(new cljs.core.Vector(null, [1,"﷐'bar"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.get_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.Vector.fromArray(["﷐'foo"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'get-in",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),(new cljs.core.Vector(null, ["﷐'foo"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.get_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})}),cljs.core.Vector.fromArray(["﷐'foo","﷐'bar"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'get-in",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2)),(new cljs.core.Vector(null, ["﷐'foo","﷐'bar"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.get_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":1}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":2})]),cljs.core.Vector.fromArray([0,"﷐'foo"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'get-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1),cljs.core.hash_map("﷐'foo",2)])),(new cljs.core.Vector(null, [0,"﷐'foo"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.get_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":1}),cljs.core.ObjMap.fromObject(["﷐'buzz"],{"﷐'buzz":2})])}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":3,"﷐'bar":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3}),cljs.core.ObjMap.fromObject(["﷐'buzz"],{"﷐'buzz":4})])})]),cljs.core.Vector.fromArray([1,"﷐'bar",1,"﷐'buzz"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'get-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'baz",1),cljs.core.hash_map("﷐'buzz",2)]))),cljs.core.hash_map("﷐'foo",3,"﷐'bar",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'baz",3),cljs.core.hash_map("﷐'buzz",4)])))])),(new cljs.core.Vector(null, [1,"﷐'bar",1,"﷐'buzz"]))))));
}
var a__13427 = cljs.core.to_array.call(null,cljs.core.Vector.fromArray([1,2,3]));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([10,20,30]),cljs.core.seq.call(null,(function (){var a__194__auto____13428 = a__13427;
var ret__13429 = cljs.core.aclone.call(null,a__194__auto____13428);

var i__13430 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__13430,cljs.core.alength.call(null,a__194__auto____13428))))
{(ret__13429[i__13430] = cljs.core._STAR_.call(null,10,(a__13427[i__13430])));
{
var G__13448 = cljs.core.inc.call(null,i__13430);
i__13430 = G__13448;
continue;
}
} else
{return ret__13429;
}
break;
}
})()))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [10,20,30])),cljs.core.list("﷑'seq",cljs.core.list("﷑'amap","﷑'a","﷑'i","﷑'ret",cljs.core.list("﷑'*",10,cljs.core.list("﷑'aget","﷑'a","﷑'i")))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,6,(function (){var a__200__auto____13431 = a__13427;

var i__13432 = 0;
var ret__13433 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__13432,cljs.core.alength.call(null,a__200__auto____13431))))
{{
var G__13449 = cljs.core.inc.call(null,i__13432);
var G__13450 = cljs.core._PLUS_.call(null,ret__13433,(a__13427[i__13432]));
i__13432 = G__13449;
ret__13433 = G__13450;
continue;
}
} else
{return ret__13433;
}
break;
}
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",6,cljs.core.list("﷑'areduce","﷑'a","﷑'i","﷑'ret",0,cljs.core.list("﷑'+","﷑'ret",cljs.core.list("﷑'aget","﷑'a","﷑'i"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.seq.call(null,a__13427),cljs.core.seq.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([1,2,3]))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'seq","﷑'a"),cljs.core.list("﷑'seq",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [1,2,3])))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,42,(a__13427[0] = 42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",42,cljs.core.list("﷑'aset","﷑'a",0,42))));
}
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,cljs.core.seq.call(null,a__13427),cljs.core.seq.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([1,2,3]))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=",cljs.core.list("﷑'seq","﷑'a"),cljs.core.list("﷑'seq",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [1,2,3])))))));
}
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,a__13427,cljs.core.aclone.call(null,a__13427))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'a",cljs.core.list("﷑'aclone","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,3,4,5]),cljs.core.sort.call(null,cljs.core.Vector.fromArray([5,3,1,4,2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,3,4,5])),cljs.core.list("﷑'sort",(new cljs.core.Vector(null, [5,3,1,4,2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,3,4,5]),cljs.core.sort.call(null,cljs.core._LT_,cljs.core.Vector.fromArray([5,3,1,4,2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,3,4,5])),cljs.core.list("﷑'sort","﷑'<",(new cljs.core.Vector(null, [5,3,1,4,2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([5,4,3,2,1]),cljs.core.sort.call(null,cljs.core._GT_,cljs.core.Vector.fromArray([5,3,1,4,2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [5,4,3,2,1])),cljs.core.list("﷑'sort","﷑'>",(new cljs.core.Vector(null, [5,3,1,4,2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray(["a",cljs.core.Vector.fromArray([1,2]),"foo"]),cljs.core.sort_by.call(null,cljs.core.count,cljs.core.Vector.fromArray(["foo","a",cljs.core.Vector.fromArray([1,2])])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, ["a",(new cljs.core.Vector(null, [1,2])),"foo"])),cljs.core.list("﷑'sort-by","﷑'count",(new cljs.core.Vector(null, ["foo","a",(new cljs.core.Vector(null, [1,2]))]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray(["foo",cljs.core.Vector.fromArray([1,2]),"a"]),cljs.core.sort_by.call(null,cljs.core.count,cljs.core._GT_,cljs.core.Vector.fromArray(["foo","a",cljs.core.Vector.fromArray([1,2])])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, ["foo",(new cljs.core.Vector(null, [1,2])),"a"])),cljs.core.list("﷑'sort-by","﷑'count","﷑'>",(new cljs.core.Vector(null, ["foo","a",(new cljs.core.Vector(null, [1,2]))]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["a","b"],{"a":1,"b":2}),cljs.core.js__GT_clj.call(null,{"a":1,"b":2}))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("a",1,"b",2),cljs.core.list("﷑'js->clj",cljs.core.list("﷑'js*","{\"a\":1,\"b\":2}")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.js__GT_clj.call(null,{"a":1,"b":2},"﷐'keywordize-keys",true))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.list("﷑'js->clj",cljs.core.list("﷑'js*","{\"a\":1,\"b\":2}"),"﷐'keywordize-keys",true))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])]),cljs.core.js__GT_clj.call(null,[[{"a":1,"b":2}, {"a":1,"b":2}]],"﷐'keywordize-keys",true))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))])),cljs.core.list("﷑'js->clj",cljs.core.list("﷑'js*","[[{\"a\":1,\"b\":2}, {\"a\":1,\"b\":2}]]"),"﷐'keywordize-keys",true))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])]),cljs.core.js__GT_clj.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))])),cljs.core.list("﷑'js->clj",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,null,cljs.core.last.call(null,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",null,cljs.core.list("﷑'last",null))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.last.call(null,cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'last",(new cljs.core.Vector(null, [1,2,3]))))));
}
var s__13434 = cljs.core.atom.call(null,cljs.core.Vector.fromArray([]));

var n__206__auto____13435 = 5;

var n__13436 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,n__13436,n__206__auto____13435)))
{cljs.core.swap_BANG_.call(null,s__13434,cljs.core.conj,n__13436);
{
var G__13451 = cljs.core.inc.call(null,n__13436);
n__13436 = G__13451;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,1,2,3,4]),cljs.core.deref.call(null,s__13434))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,1,2,3,4])),cljs.core.list("﷑'clojure.core/deref","﷑'s"))));
}
var v__13437 = cljs.core.Vector.fromArray([1,2,3,4,5]);
var s__13438 = cljs.core.atom.call(null,cljs.core.List.EMPTY);

var G__13439__13440 = cljs.core.seq.call(null,v__13437);

while(true){
if(cljs.core.truth_(G__13439__13440))
{var n__13441 = cljs.core.first.call(null,G__13439__13440);

cljs.core.swap_BANG_.call(null,s__13438,cljs.core.conj,n__13441);
{
var G__13452 = cljs.core.next.call(null,G__13439__13440);
G__13439__13440 = G__13452;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,s__13438),cljs.core.reverse.call(null,v__13437))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'clojure.core/deref","﷑'s"),cljs.core.list("﷑'reverse","﷑'v"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),cljs.core.assoc.call(null,cljs.core.ObjMap.fromObject([],{}),1,2,3,4))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2,3,4),cljs.core.list("﷑'assoc",cljs.core.hash_map(),1,2,3,4))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.assoc.call(null,cljs.core.ObjMap.fromObject([],{}),1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2),cljs.core.list("﷑'assoc",cljs.core.hash_map(),1,2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([42,2]),cljs.core.assoc.call(null,cljs.core.Vector.fromArray([1,2]),0,42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [42,2])),cljs.core.list("﷑'assoc",(new cljs.core.Vector(null, [1,2])),0,42))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.dissoc.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),1,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(),cljs.core.list("﷑'dissoc",cljs.core.hash_map(1,2,3,4),1,3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.dissoc.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2),cljs.core.list("﷑'dissoc",cljs.core.hash_map(1,2,3,4),3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2,3]),cljs.core.disj.call(null,cljs.core.set([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2,3]),cljs.core.list("﷑'disj",cljs.core.set([1,2,3])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2]),cljs.core.disj.call(null,cljs.core.set([1,2,3]),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2]),cljs.core.list("﷑'disj",cljs.core.set([1,2,3]),3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1]),cljs.core.disj.call(null,cljs.core.set([1,2,3]),2,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1]),cljs.core.list("﷑'disj",cljs.core.set([1,2,3]),2,3))));
}
var f__13442 = cljs.core.memoize.call(null,(function (){
return cljs.core.rand.call(null);
}));

f__13442.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,f__13442.call(null),f__13442.call(null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'f"),cljs.core.list("﷑'f"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'a"),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map(),"﷐'a"),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),"﷐'a"),cljs.core.Vector.fromArray(["﷐'a",1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1),"﷐'a"),(new cljs.core.Vector(null, ["﷐'a",1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),"﷐'b"),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1),"﷐'b"),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'a"),cljs.core.Vector.fromArray(["﷐'a",1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'a"),(new cljs.core.Vector(null, ["﷐'a",1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'b"),cljs.core.Vector.fromArray(["﷐'b",2]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'b"),(new cljs.core.Vector(null, ["﷐'b",2])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'c"),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'c"),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject([],{}),null),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map(),null),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),null),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1),null),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),null),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),null),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.Vector.fromArray([1,2,3]),0),cljs.core.Vector.fromArray([0,1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",(new cljs.core.Vector(null, [1,2,3])),0),(new cljs.core.Vector(null, [0,1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,4,2),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",4,2),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,3,2),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",3,2),1)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,6,4),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",6,4),1)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,0,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",0,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,42,5),8)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",42,5),8)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,42,-5),-8)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",42,-5),-8)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,-42,-5),8)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",-42,-5),8)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,9,3),3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",9,3),3)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,9,-3),-3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",9,-3),-3)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,-9,3),-3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",-9,3),-3)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,2,-5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",2,-5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,-2,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",-2,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,0,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",0,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,0,-3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",0,-3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,4,2),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",4,2),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,3,2),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",3,2),1)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,6,4),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",6,4),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,0,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",0,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,4.5,2.0),0.5)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",4.5,2.0),0.5)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,42,5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",42,5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,9,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",9,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,9,-3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",9,-3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,-9,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",-9,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,-9,-3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",-9,-3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,0,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",0,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,3216478362187432,432143214),120355456)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",3216478362187432,432143214),120355456)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,4,2),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",4,2),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,0,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",0,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,4.5,2.0),0.5)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",4.5,2.0),0.5)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,42,5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",42,5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,2,5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",2,5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,2,-5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",2,-5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,0,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",0,3),0)));
}
var d__13443 = cljs.core.group_by.call(null,cljs.core.second,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b","﷐'c","﷐'d","﷐'e","﷐'f"],{"﷐'a":1,"﷐'b":2,"﷐'c":1,"﷐'d":4,"﷐'e":1,"﷐'f":2}));

if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,cljs.core.get.call(null,d__13443,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'count",cljs.core.list("﷑'get","﷑'d",1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,cljs.core.get.call(null,d__13443,2)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'count",cljs.core.list("﷑'get","﷑'d",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,cljs.core.get.call(null,d__13443,4)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'get","﷑'d",4)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1,3,5],[2,4,6]),cljs.core.merge.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.HashMap.fromArrays([3],[4]),cljs.core.HashMap.fromArrays([5],[6])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2,3,4,5,6),cljs.core.list("﷑'merge",cljs.core.hash_map(1,2),cljs.core.hash_map(3,4),cljs.core.hash_map(5,6)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),cljs.core.merge.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.HashMap.fromArrays([3],[4]),null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2,3,4),cljs.core.list("﷑'merge",cljs.core.hash_map(1,2),cljs.core.hash_map(3,4),null))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":3,"﷐'b":2}),cljs.core.frequencies.call(null,cljs.core.Vector.fromArray(["﷐'a","﷐'b","﷐'a","﷐'b","﷐'a"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",3,"﷐'b",2),cljs.core.list("﷑'frequencies",(new cljs.core.Vector(null, ["﷐'a","﷐'b","﷐'a","﷐'b","﷐'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,3,6,10,15]),cljs.core.reductions.call(null,cljs.core._PLUS_,cljs.core.Vector.fromArray([1,2,3,4,5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,3,6,10,15])),cljs.core.list("﷑'reductions","﷑'+",(new cljs.core.Vector(null, [1,2,3,4,5]))))));
}
return "﷐'ok";
});
