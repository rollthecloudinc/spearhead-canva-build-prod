(self.webpackChunkspear=self.webpackChunkspear||[]).push([[9684],{4707:(W,M,n)=>{n.d(M,{t:()=>h});var E=n(15671),O=n(43144),D=n(73237),m=n(61120),k=n(60136),c=n(18486),_=n(77579),f=n(26063),h=function(w){(0,k.Z)(R,w);var i=(0,c.Z)(R);function R(){var C,A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1/0,y=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.l;return(0,E.Z)(this,R),(C=i.call(this))._bufferSize=A,C._windowTime=y,C._timestampProvider=d,C._buffer=[],C._infiniteTimeWindow=!0,C._infiniteTimeWindow=y===1/0,C._bufferSize=Math.max(1,A),C._windowTime=Math.max(1,y),C}return(0,O.Z)(R,[{key:"next",value:function(A){var d=this._buffer,S=this._infiniteTimeWindow,I=this._timestampProvider,g=this._windowTime;this.isStopped||(d.push(A),!S&&d.push(I.now()+g)),this._trimBuffer(),(0,D.Z)((0,m.Z)(R.prototype),"next",this).call(this,A)}},{key:"_subscribe",value:function(A){this._throwIfClosed(),this._trimBuffer();for(var y=this._innerSubscribe(A),d=this._infiniteTimeWindow,I=this._buffer.slice(),g=0;g<I.length&&!A.closed;g+=d?1:2)A.next(I[g]);return this._checkFinalizedStatuses(A),y}},{key:"_trimBuffer",value:function(){var A=this._bufferSize,y=this._timestampProvider,d=this._buffer,S=this._infiniteTimeWindow,I=(S?1:2)*A;if(A<1/0&&I<d.length&&d.splice(0,d.length-I),!S){for(var g=y.now(),V=0,x=1;x<d.length&&d[x]<=g;x+=2)V=x;V&&d.splice(0,V+1)}}}]),R}(_.x)},97272:(W,M,n)=>{n.d(M,{z:()=>k});var E=n(8189),D=n(63269),m=n(50457);function k(){for(var c=arguments.length,_=new Array(c),f=0;f<c;f++)_[f]=arguments[f];return function O(){return(0,E.J)(1)}()((0,m.D)(_,(0,D.yG)(_)))}},54968:(W,M,n)=>{n.d(M,{R:()=>i});var E=n(97685),O=n(38421),D=n(69751),m=n(95577),k=n(81144),c=n(30576),_=n(83268),f=["addListener","removeListener"],h=["addEventListener","removeEventListener"],w=["on","off"];function i(d,S,I,g){if((0,c.m)(I)&&(g=I,I=void 0),g)return i(d,S,I).pipe((0,_.Z)(g));var V=function y(d){return(0,c.m)(d.addEventListener)&&(0,c.m)(d.removeEventListener)}(d)?h.map(function(T){return function(K){return d[T](S,K,I)}}):function C(d){return(0,c.m)(d.addListener)&&(0,c.m)(d.removeListener)}(d)?f.map(R(d,S)):function A(d){return(0,c.m)(d.on)&&(0,c.m)(d.off)}(d)?w.map(R(d,S)):[],x=(0,E.Z)(V,2),z=x[0],L=x[1];if(!z&&(0,k.z)(d))return(0,m.z)(function(T){return i(T,S,I)})((0,O.Xf)(d));if(!z)throw new TypeError("Invalid event target");return new D.y(function(T){var K=function(){for(var B=arguments.length,Z=new Array(B),j=0;j<B;j++)Z[j]=arguments[j];return T.next(1<Z.length?Z:Z[0])};return z(K),function(){return L(K)}})}function R(d,S){return function(I){return function(g){return d[I](S,g)}}}},23601:(W,M,n)=>{n.d(M,{e:()=>_});var E=n(34986),O=n(54482),D=n(38421),m=n(25403),c=n(82805);function _(f){var h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.z;return function k(f){return(0,O.e)(function(h,w){var i=!1,R=null,C=null,A=!1,y=function(){if(C?.unsubscribe(),C=null,i){i=!1;var I=R;R=null,w.next(I)}A&&w.complete()},d=function(){C=null,A&&w.complete()};h.subscribe((0,m.x)(w,function(S){i=!0,R=S,C||(0,D.Xf)(f(S)).subscribe(C=(0,m.x)(w,y,d))},function(){A=!0,(!i||!C||C.closed)&&w.complete()}))})}(function(){return(0,c.H)(f,h)})}},71884:(W,M,n)=>{n.d(M,{x:()=>m});var E=n(44671),O=n(54482),D=n(25403);function m(c){var _=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.y;return c=c??k,(0,O.e)(function(f,h){var w,i=!0;f.subscribe((0,D.x)(h,function(R){var C=_(R);(i||!c(w,C))&&(i=!1,w=C,h.next(R))}))})}function k(c,_){return c===_}},39300:(W,M,n)=>{n.d(M,{h:()=>D});var E=n(54482),O=n(25403);function D(m,k){return(0,E.e)(function(c,_){var f=0;c.subscribe((0,O.x)(_,function(h){return m.call(k,h,f++)&&_.next(h)}))})}},8189:(W,M,n)=>{n.d(M,{J:()=>D});var E=n(95577),O=n(44671);function D(){return(0,E.z)(O.y,arguments.length>0&&void 0!==arguments[0]?arguments[0]:1/0)}},34782:(W,M,n)=>{n.d(M,{d:()=>D});var E=n(4707),O=n(13099);function D(m,k,c){var _,f=!1;if(m&&"object"==typeof m){var h=m.bufferSize;_=void 0===h?1/0:h;var w=m.windowTime;k=void 0===w?1/0:w;var i=m.refCount;f=void 0!==i&&i,c=m.scheduler}else _=m??1/0;return(0,O.B)({connector:function(){return new E.t(_,k,c)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:f})}},68675:(W,M,n)=>{n.d(M,{O:()=>m});var E=n(97272),O=n(63269),D=n(54482);function m(){for(var k=arguments.length,c=new Array(k),_=0;_<k;_++)c[_]=arguments[_];var f=(0,O.yG)(c);return(0,D.e)(function(h,w){(f?(0,E.z)(c,h,f):(0,E.z)(c,h)).subscribe(w)})}},63900:(W,M,n)=>{n.d(M,{w:()=>m});var E=n(38421),O=n(54482),D=n(25403);function m(k,c){return(0,O.e)(function(_,f){var h=null,w=0,i=!1,R=function(){return i&&!h&&f.complete()};_.subscribe((0,D.x)(f,function(C){h?.unsubscribe();var A=0,y=w++;(0,E.Xf)(k(C,y)).subscribe(h=(0,D.x)(f,function(d){return f.next(c?c(C,d,y,A++):d)},function(){h=null,R()}))},function(){i=!0,R()}))})}},82722:(W,M,n)=>{n.d(M,{R:()=>k});var E=n(54482),O=n(25403),D=n(38421),m=n(25032);function k(c){return(0,E.e)(function(_,f){(0,D.Xf)(c).subscribe((0,O.x)(f,function(){return f.complete()},m.Z)),!f.closed&&_.subscribe(f)})}},66406:(W,M,n)=>{n.d(M,{Z:()=>C});var E=n(15671),O=n(43144),D=n(73237),m=n(61120),k=n(60136),c=n(18486),_=n(84408),f=n(50727),h={schedule:function(d){var S=requestAnimationFrame,I=cancelAnimationFrame,g=h.delegate;g&&(S=g.requestAnimationFrame,I=g.cancelAnimationFrame);var V=S(function(x){I=void 0,d(x)});return new f.w0(function(){return I?.(V)})},requestAnimationFrame:function(y){function d(){return y.apply(this,arguments)}return d.toString=function(){return y.toString()},d}(function(){var y=h.delegate;return(y?.requestAnimationFrame||requestAnimationFrame).apply(void 0,arguments)}),cancelAnimationFrame:function(y){function d(){return y.apply(this,arguments)}return d.toString=function(){return y.toString()},d}(function(){var y=h.delegate;return(y?.cancelAnimationFrame||cancelAnimationFrame).apply(void 0,arguments)}),delegate:void 0},w=function(y){(0,k.Z)(S,y);var d=(0,c.Z)(S);function S(I,g){var V;return(0,E.Z)(this,S),(V=d.call(this,I,g)).scheduler=I,V.work=g,V}return(0,O.Z)(S,[{key:"requestAsyncId",value:function(g,V){var x=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return null!==x&&x>0?(0,D.Z)((0,m.Z)(S.prototype),"requestAsyncId",this).call(this,g,V,x):(g.actions.push(this),g._scheduled||(g._scheduled=h.requestAnimationFrame(function(){return g.flush(void 0)})))}},{key:"recycleAsyncId",value:function(g,V){var z,x=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(null!=x?x>0:this.delay>0)return(0,D.Z)((0,m.Z)(S.prototype),"recycleAsyncId",this).call(this,g,V,x);var L=g.actions;null!=V&&(null===(z=L[L.length-1])||void 0===z?void 0:z.id)!==V&&(h.cancelAnimationFrame(V),g._scheduled=void 0)}}]),S}(_.o),C=new(function(y){(0,k.Z)(S,y);var d=(0,c.Z)(S);function S(){return(0,E.Z)(this,S),d.apply(this,arguments)}return(0,O.Z)(S,[{key:"flush",value:function(g){this._active=!0;var V=this._scheduled;this._scheduled=void 0;var z,x=this.actions;g=g||x.shift();do{if(z=g.execute(g.state,g.delay))break}while((g=x[0])&&g.id===V&&x.shift());if(this._active=!1,z){for(;(g=x[0])&&g.id===V&&x.shift();)g.unsubscribe();throw z}}}]),S}(n(97565).v))(w)},53101:(W,M,n)=>{n.d(M,{E:()=>V});var h,E=n(15671),O=n(43144),D=n(73237),m=n(61120),k=n(60136),c=n(18486),_=n(84408),f=1,w={};function i(z){return z in w&&(delete w[z],!0)}var A=function(L){var T=f++;return w[T]=!0,h||(h=Promise.resolve()),h.then(function(){return i(T)&&L()}),T},y=function(L){i(L)},d={setImmediate:function(){var L=d.delegate;return(L?.setImmediate||A).apply(void 0,arguments)},clearImmediate:function(L){var T=d.delegate;return(T?.clearImmediate||y)(L)},delegate:void 0},S=function(z){(0,k.Z)(T,z);var L=(0,c.Z)(T);function T(K,b){var B;return(0,E.Z)(this,T),(B=L.call(this,K,b)).scheduler=K,B.work=b,B}return(0,O.Z)(T,[{key:"requestAsyncId",value:function(b,B){var Z=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return null!==Z&&Z>0?(0,D.Z)((0,m.Z)(T.prototype),"requestAsyncId",this).call(this,b,B,Z):(b.actions.push(this),b._scheduled||(b._scheduled=d.setImmediate(b.flush.bind(b,void 0))))}},{key:"recycleAsyncId",value:function(b,B){var j,Z=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(null!=Z?Z>0:this.delay>0)return(0,D.Z)((0,m.Z)(T.prototype),"recycleAsyncId",this).call(this,b,B,Z);var N=b.actions;null!=B&&(null===(j=N[N.length-1])||void 0===j?void 0:j.id)!==B&&(d.clearImmediate(B),b._scheduled=void 0)}}]),T}(_.o),V=new(function(z){(0,k.Z)(T,z);var L=(0,c.Z)(T);function T(){return(0,E.Z)(this,T),L.apply(this,arguments)}return(0,O.Z)(T,[{key:"flush",value:function(b){this._active=!0;var B=this._scheduled;this._scheduled=void 0;var j,Z=this.actions;b=b||Z.shift();do{if(j=b.execute(b.state,b.delay))break}while((b=Z[0])&&b.id===B&&Z.shift());if(this._active=!1,j){for(;(b=Z[0])&&b.id===B&&Z.shift();)b.unsubscribe();throw j}}}]),T}(n(97565).v))(S)},45191:(W,M,n)=>{n.d(M,{b:()=>D});var E=n(69751),O=n(30576);function D(m){return!!m&&(m instanceof E.y||(0,O.m)(m.lift)&&(0,O.m)(m.subscribe))}},83268:(W,M,n)=>{n.d(M,{Z:()=>k});var E=n(74902),O=n(54004),D=Array.isArray;function k(c){return(0,O.U)(function(_){return function m(c,_){return D(_)?c.apply(void 0,(0,E.Z)(_)):c(_)}(c,_)})}},69684:(W,M,n)=>{n.r(M),n.d(M,{CdkFixedSizeVirtualScroll:()=>ce,CdkScrollable:()=>q,CdkScrollableModule:()=>ee,CdkVirtualForOf:()=>ve,CdkVirtualScrollViewport:()=>le,CdkVirtualScrollable:()=>Q,CdkVirtualScrollableElement:()=>me,CdkVirtualScrollableWindow:()=>ge,DEFAULT_RESIZE_TIME:()=>ae,DEFAULT_SCROLL_TIME:()=>ie,FixedSizeVirtualScrollStrategy:()=>ne,ScrollDispatcher:()=>G,ScrollingModule:()=>_e,VIRTUAL_SCROLLABLE:()=>X,VIRTUAL_SCROLL_STRATEGY:()=>$,ViewportRuler:()=>oe,_fixedSizeVirtualScrollStrategyFactory:()=>re});var E=n(97685),O=n(37762),D=n(97326),m=n(73237),k=n(61120),c=n(60136),_=n(18486),f=n(15671),h=n(43144),w=n(35333),i=n(56718),R=n(77579),C=n(39646),A=n(69751),y=n(54968),d=n(66406),S=n(53101),I=n(50727),g=n(45191),V=n(71884),x=n(23601),z=n(39300),L=n(82722),T=n(68675),K=n(54482),b=n(25403),Z=n(63900),j=n(34782),N=n(23675),te=n(94055),H=n(43068),Y=n(81382),ue=["contentWrapper"],de=["*"],$=new i.InjectionToken("VIRTUAL_SCROLL_STRATEGY"),ne=function(){function l(s,a,e){(0,f.Z)(this,l),this._scrolledIndexChange=new R.x,this.scrolledIndexChange=this._scrolledIndexChange.pipe((0,V.x)()),this._viewport=null,this._itemSize=s,this._minBufferPx=a,this._maxBufferPx=e}return(0,h.Z)(l,[{key:"attach",value:function(a){this._viewport=a,this._updateTotalContentSize(),this._updateRenderedRange()}},{key:"detach",value:function(){this._scrolledIndexChange.complete(),this._viewport=null}},{key:"updateItemAndBufferSize",value:function(a,e,r){this._itemSize=a,this._minBufferPx=e,this._maxBufferPx=r,this._updateTotalContentSize(),this._updateRenderedRange()}},{key:"onContentScrolled",value:function(){this._updateRenderedRange()}},{key:"onDataLengthChanged",value:function(){this._updateTotalContentSize(),this._updateRenderedRange()}},{key:"onContentRendered",value:function(){}},{key:"onRenderedOffsetChanged",value:function(){}},{key:"scrollToIndex",value:function(a,e){this._viewport&&this._viewport.scrollToOffset(a*this._itemSize,e)}},{key:"_updateTotalContentSize",value:function(){this._viewport&&this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}},{key:"_updateRenderedRange",value:function(){if(this._viewport){var a=this._viewport.getRenderedRange(),e={start:a.start,end:a.end},r=this._viewport.getViewportSize(),t=this._viewport.getDataLength(),o=this._viewport.measureScrollOffset(),u=this._itemSize>0?o/this._itemSize:0;if(e.end>t){var p=Math.ceil(r/this._itemSize),P=Math.max(0,Math.min(u,t-p));u!=P&&(u=P,o=P*this._itemSize,e.start=Math.floor(u)),e.end=Math.max(0,Math.min(t,e.start+p))}var F=o-e.start*this._itemSize;if(F<this._minBufferPx&&0!=e.start){var U=Math.ceil((this._maxBufferPx-F)/this._itemSize);e.start=Math.max(0,e.start-U),e.end=Math.min(t,Math.ceil(u+(r+this._minBufferPx)/this._itemSize))}else{var v=e.end*this._itemSize-(o+r);if(v<this._minBufferPx&&e.end!=t){var J=Math.ceil((this._maxBufferPx-v)/this._itemSize);J>0&&(e.end=Math.min(t,e.end+J),e.start=Math.max(0,Math.floor(u-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(this._itemSize*e.start),this._scrolledIndexChange.next(Math.floor(u))}}}]),l}();function re(l){return l._scrollStrategy}var ce=function(){var l=function(){function s(){(0,f.Z)(this,s),this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new ne(this.itemSize,this.minBufferPx,this.maxBufferPx)}return(0,h.Z)(s,[{key:"itemSize",get:function(){return this._itemSize},set:function(e){this._itemSize=(0,w.coerceNumberProperty)(e)}},{key:"minBufferPx",get:function(){return this._minBufferPx},set:function(e){this._minBufferPx=(0,w.coerceNumberProperty)(e)}},{key:"maxBufferPx",get:function(){return this._maxBufferPx},set:function(e){this._maxBufferPx=(0,w.coerceNumberProperty)(e)}},{key:"ngOnChanges",value:function(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}}]),s}();return l.\u0275fac=function(a){return new(a||l)},l.\u0275dir=i.\u0275\u0275defineDirective({type:l,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:$,useFactory:re,deps:[(0,i.forwardRef)(function(){return l})]}]),i.\u0275\u0275NgOnChangesFeature]}),l}(),ie=20,G=function(){var l=function(){function s(a,e,r){(0,f.Z)(this,s),this._ngZone=a,this._platform=e,this._scrolled=new R.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}return(0,h.Z)(s,[{key:"register",value:function(e){var r=this;this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(function(){return r._scrolled.next(e)}))}},{key:"deregister",value:function(e){var r=this.scrollContainers.get(e);r&&(r.unsubscribe(),this.scrollContainers.delete(e))}},{key:"scrolled",value:function(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie;return this._platform.isBrowser?new A.y(function(t){e._globalSubscription||e._addGlobalListener();var o=r>0?e._scrolled.pipe((0,x.e)(r)).subscribe(t):e._scrolled.subscribe(t);return e._scrolledCount++,function(){o.unsubscribe(),e._scrolledCount--,e._scrolledCount||e._removeGlobalListener()}}):(0,C.of)()}},{key:"ngOnDestroy",value:function(){var e=this;this._removeGlobalListener(),this.scrollContainers.forEach(function(r,t){return e.deregister(t)}),this._scrolled.complete()}},{key:"ancestorScrolled",value:function(e,r){var t=this.getAncestorScrollContainers(e);return this.scrolled(r).pipe((0,z.h)(function(o){return!o||t.indexOf(o)>-1}))}},{key:"getAncestorScrollContainers",value:function(e){var r=this,t=[];return this.scrollContainers.forEach(function(o,u){r._scrollableContainsElement(u,e)&&t.push(u)}),t}},{key:"_getWindow",value:function(){return this._document.defaultView||window}},{key:"_scrollableContainsElement",value:function(e,r){var t=(0,w.coerceElement)(r),o=e.getElementRef().nativeElement;do{if(t==o)return!0}while(t=t.parentElement);return!1}},{key:"_addGlobalListener",value:function(){var e=this;this._globalSubscription=this._ngZone.runOutsideAngular(function(){var r=e._getWindow();return(0,y.R)(r.document,"scroll").subscribe(function(){return e._scrolled.next()})})}},{key:"_removeGlobalListener",value:function(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}]),s}();return l.\u0275fac=function(a){return new(a||l)(i.\u0275\u0275inject(i.NgZone),i.\u0275\u0275inject(N.Platform),i.\u0275\u0275inject(te.DOCUMENT,8))},l.\u0275prov=i.\u0275\u0275defineInjectable({token:l,factory:l.\u0275fac,providedIn:"root"}),l}(),q=function(){var l=function(){function s(a,e,r,t){var o=this;(0,f.Z)(this,s),this.elementRef=a,this.scrollDispatcher=e,this.ngZone=r,this.dir=t,this._destroyed=new R.x,this._elementScrolled=new A.y(function(u){return o.ngZone.runOutsideAngular(function(){return(0,y.R)(o.elementRef.nativeElement,"scroll").pipe((0,L.R)(o._destroyed)).subscribe(u)})})}return(0,h.Z)(s,[{key:"ngOnInit",value:function(){this.scrollDispatcher.register(this)}},{key:"ngOnDestroy",value:function(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}},{key:"elementScrolled",value:function(){return this._elementScrolled}},{key:"getElementRef",value:function(){return this.elementRef}},{key:"scrollTo",value:function(e){var r=this.elementRef.nativeElement,t=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=t?e.end:e.start),null==e.right&&(e.right=t?e.start:e.end),null!=e.bottom&&(e.top=r.scrollHeight-r.clientHeight-e.bottom),t&&0!=(0,N.getRtlScrollAxisType)()?(null!=e.left&&(e.right=r.scrollWidth-r.clientWidth-e.left),2==(0,N.getRtlScrollAxisType)()?e.left=e.right:1==(0,N.getRtlScrollAxisType)()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=r.scrollWidth-r.clientWidth-e.right),this._applyScrollToOptions(e)}},{key:"_applyScrollToOptions",value:function(e){var r=this.elementRef.nativeElement;(0,N.supportsScrollBehavior)()?r.scrollTo(e):(null!=e.top&&(r.scrollTop=e.top),null!=e.left&&(r.scrollLeft=e.left))}},{key:"measureScrollOffset",value:function(e){var r="left",t="right",o=this.elementRef.nativeElement;if("top"==e)return o.scrollTop;if("bottom"==e)return o.scrollHeight-o.clientHeight-o.scrollTop;var u=this.dir&&"rtl"==this.dir.value;return"start"==e?e=u?t:r:"end"==e&&(e=u?r:t),u&&2==(0,N.getRtlScrollAxisType)()?e==r?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:u&&1==(0,N.getRtlScrollAxisType)()?e==r?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==r?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}}]),s}();return l.\u0275fac=function(a){return new(a||l)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(G),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(H.Directionality,8))},l.\u0275dir=i.\u0275\u0275defineDirective({type:l,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0}),l}(),ae=20,oe=function(){var l=function(){function s(a,e,r){var t=this;(0,f.Z)(this,s),this._platform=a,this._change=new R.x,this._changeListener=function(o){t._change.next(o)},this._document=r,e.runOutsideAngular(function(){if(a.isBrowser){var o=t._getWindow();o.addEventListener("resize",t._changeListener),o.addEventListener("orientationchange",t._changeListener)}t.change().subscribe(function(){return t._viewportSize=null})})}return(0,h.Z)(s,[{key:"ngOnDestroy",value:function(){if(this._platform.isBrowser){var e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}},{key:"getViewportSize",value:function(){this._viewportSize||this._updateViewportSize();var e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}},{key:"getViewportRect",value:function(){var e=this.getViewportScrollPosition(),r=this.getViewportSize(),t=r.width,o=r.height;return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t}}},{key:"getViewportScrollPosition",value:function(){if(!this._platform.isBrowser)return{top:0,left:0};var e=this._document,r=this._getWindow(),t=e.documentElement,o=t.getBoundingClientRect();return{top:-o.top||e.body.scrollTop||r.scrollY||t.scrollTop||0,left:-o.left||e.body.scrollLeft||r.scrollX||t.scrollLeft||0}}},{key:"change",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae;return e>0?this._change.pipe((0,x.e)(e)):this._change}},{key:"_getWindow",value:function(){return this._document.defaultView||window}},{key:"_updateViewportSize",value:function(){var e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}]),s}();return l.\u0275fac=function(a){return new(a||l)(i.\u0275\u0275inject(N.Platform),i.\u0275\u0275inject(i.NgZone),i.\u0275\u0275inject(te.DOCUMENT,8))},l.\u0275prov=i.\u0275\u0275defineInjectable({token:l,factory:l.\u0275fac,providedIn:"root"}),l}(),X=new i.InjectionToken("VIRTUAL_SCROLLABLE"),Q=function(){var l=function(s){(0,c.Z)(e,s);var a=(0,_.Z)(e);function e(r,t,o,u){return(0,f.Z)(this,e),a.call(this,r,t,o,u)}return(0,h.Z)(e,[{key:"measureViewportSize",value:function(t){var o=this.elementRef.nativeElement;return"horizontal"===t?o.clientWidth:o.clientHeight}}]),e}(q);return l.\u0275fac=function(a){return new(a||l)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(G),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(H.Directionality,8))},l.\u0275dir=i.\u0275\u0275defineDirective({type:l,features:[i.\u0275\u0275InheritDefinitionFeature]}),l}(),he=typeof requestAnimationFrame<"u"?d.Z:S.E,le=function(){var l=function(s){(0,c.Z)(e,s);var a=(0,_.Z)(e);function e(r,t,o,u,p,P,F,U){var v;return(0,f.Z)(this,e),(v=a.call(this,r,P,o,p)).elementRef=r,v._changeDetectorRef=t,v._scrollStrategy=u,v.scrollable=U,v._platform=(0,i.inject)(N.Platform),v._detachedSubject=new R.x,v._renderedRangeSubject=new R.x,v._orientation="vertical",v._appendOnly=!1,v.scrolledIndexChange=new A.y(function(J){return v._scrollStrategy.scrolledIndexChange.subscribe(function(pe){return Promise.resolve().then(function(){return v.ngZone.run(function(){return J.next(pe)})})})}),v.renderedRangeStream=v._renderedRangeSubject,v._totalContentSize=0,v._totalContentWidth="",v._totalContentHeight="",v._renderedRange={start:0,end:0},v._dataLength=0,v._viewportSize=0,v._renderedContentOffset=0,v._renderedContentOffsetNeedsRewrite=!1,v._isChangeDetectionPending=!1,v._runAfterChangeDetection=[],v._viewportChanges=I.w0.EMPTY,v._viewportChanges=F.change().subscribe(function(){v.checkViewportSize()}),v.scrollable||(v.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),v.scrollable=(0,D.Z)(v)),v}return(0,h.Z)(e,[{key:"orientation",get:function(){return this._orientation},set:function(t){this._orientation!==t&&(this._orientation=t,this._calculateSpacerSize())}},{key:"appendOnly",get:function(){return this._appendOnly},set:function(t){this._appendOnly=(0,w.coerceBooleanProperty)(t)}},{key:"ngOnInit",value:function(){var t=this;this._platform.isBrowser&&(this.scrollable===this&&(0,m.Z)((0,k.Z)(e.prototype),"ngOnInit",this).call(this),this.ngZone.runOutsideAngular(function(){return Promise.resolve().then(function(){t._measureViewportSize(),t._scrollStrategy.attach(t),t.scrollable.elementScrolled().pipe((0,T.O)(null),(0,x.e)(0,he)).subscribe(function(){return t._scrollStrategy.onContentScrolled()}),t._markChangeDetectionNeeded()})}))}},{key:"ngOnDestroy",value:function(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),(0,m.Z)((0,k.Z)(e.prototype),"ngOnDestroy",this).call(this)}},{key:"attach",value:function(t){var o=this;this.ngZone.runOutsideAngular(function(){o._forOf=t,o._forOf.dataStream.pipe((0,L.R)(o._detachedSubject)).subscribe(function(u){var p=u.length;p!==o._dataLength&&(o._dataLength=p,o._scrollStrategy.onDataLengthChanged()),o._doChangeDetection()})})}},{key:"detach",value:function(){this._forOf=null,this._detachedSubject.next()}},{key:"getDataLength",value:function(){return this._dataLength}},{key:"getViewportSize",value:function(){return this._viewportSize}},{key:"getRenderedRange",value:function(){return this._renderedRange}},{key:"measureBoundingClientRectWithScrollOffset",value:function(t){return this.getElementRef().nativeElement.getBoundingClientRect()[t]}},{key:"setTotalContentSize",value:function(t){this._totalContentSize!==t&&(this._totalContentSize=t,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}},{key:"setRenderedRange",value:function(t){var o=this;(function fe(l,s){return l.start==s.start&&l.end==s.end})(this._renderedRange,t)||(this.appendOnly&&(t={start:0,end:Math.max(this._renderedRange.end,t.end)}),this._renderedRangeSubject.next(this._renderedRange=t),this._markChangeDetectionNeeded(function(){return o._scrollStrategy.onContentRendered()}))}},{key:"getOffsetToRenderedContentStart",value:function(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}},{key:"setRenderedContentOffset",value:function(t){var o=this,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"to-start";t=this.appendOnly&&"to-start"===u?0:t;var P="horizontal"==this.orientation,F=P?"X":"Y",U=P&&this.dir&&"rtl"==this.dir.value?-1:1,v="translate".concat(F,"(").concat(Number(U*t),"px)");this._renderedContentOffset=t,"to-end"===u&&(v+=" translate".concat(F,"(-100%)"),this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=v&&(this._renderedContentTransform=v,this._markChangeDetectionNeeded(function(){o._renderedContentOffsetNeedsRewrite?(o._renderedContentOffset-=o.measureRenderedContentSize(),o._renderedContentOffsetNeedsRewrite=!1,o.setRenderedContentOffset(o._renderedContentOffset)):o._scrollStrategy.onRenderedOffsetChanged()}))}},{key:"scrollToOffset",value:function(t){var u={behavior:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"auto"};"horizontal"===this.orientation?u.start=t:u.top=t,this.scrollable.scrollTo(u)}},{key:"scrollToIndex",value:function(t){this._scrollStrategy.scrollToIndex(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"auto")}},{key:"measureScrollOffset",value:function(t){var o=this;return Math.max(0,(this.scrollable==this?function(P){return(0,m.Z)((0,k.Z)(e.prototype),"measureScrollOffset",o).call(o,P)}:function(P){return o.scrollable.measureScrollOffset(P)})(t??("horizontal"===this.orientation?"start":"top"))-this.measureViewportOffset())}},{key:"measureViewportOffset",value:function(t){var o,u,p="left",P="right",F="rtl"==(null===(o=this.dir)||void 0===o?void 0:o.value),U=this.scrollable.measureBoundingClientRectWithScrollOffset(u="start"==t?F?P:p:"end"==t?F?p:P:t||("horizontal"===this.orientation?"left":"top"));return this.elementRef.nativeElement.getBoundingClientRect()[u]-U}},{key:"measureRenderedContentSize",value:function(){var t=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?t.offsetWidth:t.offsetHeight}},{key:"measureRangeSize",value:function(t){return this._forOf?this._forOf.measureRangeSize(t,this.orientation):0}},{key:"checkViewportSize",value:function(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}},{key:"_measureViewportSize",value:function(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}},{key:"_markChangeDetectionNeeded",value:function(t){var o=this;t&&this._runAfterChangeDetection.push(t),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(function(){return Promise.resolve().then(function(){o._doChangeDetection()})}))}},{key:"_doChangeDetection",value:function(){var t=this;this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(function(){return t._changeDetectorRef.markForCheck()});var o=this._runAfterChangeDetection;this._runAfterChangeDetection=[];var p,u=(0,O.Z)(o);try{for(u.s();!(p=u.n()).done;)(0,p.value)()}catch(F){u.e(F)}finally{u.f()}}},{key:"_calculateSpacerSize",value:function(){this._totalContentHeight="horizontal"===this.orientation?"":"".concat(this._totalContentSize,"px"),this._totalContentWidth="horizontal"===this.orientation?"".concat(this._totalContentSize,"px"):""}}]),e}(Q);return l.\u0275fac=function(a){return new(a||l)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(i.ChangeDetectorRef),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject($,8),i.\u0275\u0275directiveInject(H.Directionality,8),i.\u0275\u0275directiveInject(G),i.\u0275\u0275directiveInject(oe),i.\u0275\u0275directiveInject(X,8))},l.\u0275cmp=i.\u0275\u0275defineComponent({type:l,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(a,e){var r;1&a&&i.\u0275\u0275viewQuery(ue,7),2&a&&i.\u0275\u0275queryRefresh(r=i.\u0275\u0275loadQuery())&&(e._contentWrapper=r.first)},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(a,e){2&a&&i.\u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal","horizontal"===e.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==e.orientation)},inputs:{orientation:"orientation",appendOnly:"appendOnly"},outputs:{scrolledIndexChange:"scrolledIndexChange"},standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:q,useFactory:function(a,e){return a||e},deps:[[new i.Optional,new i.Inject(X)],l]}]),i.\u0275\u0275InheritDefinitionFeature,i.\u0275\u0275StandaloneFeature],ngContentSelectors:de,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(a,e){1&a&&(i.\u0275\u0275projectionDef(),i.\u0275\u0275elementStart(0,"div",0,1),i.\u0275\u0275projection(2),i.\u0275\u0275elementEnd(),i.\u0275\u0275element(3,"div",2)),2&a&&(i.\u0275\u0275advance(3),i.\u0275\u0275styleProp("width",e._totalContentWidth)("height",e._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],encapsulation:2,changeDetection:0}),l}();function se(l,s,a){if(!a.getBoundingClientRect)return 0;var r=a.getBoundingClientRect();return"horizontal"===l?"start"===s?r.left:r.right:"start"===s?r.top:r.bottom}var ve=function(){var l=function(){function s(a,e,r,t,o,u){var p=this;(0,f.Z)(this,s),this._viewContainerRef=a,this._template=e,this._differs=r,this._viewRepeater=t,this._viewport=o,this.viewChange=new R.x,this._dataSourceChanges=new R.x,this.dataStream=this._dataSourceChanges.pipe((0,T.O)(null),function B(){return(0,K.e)(function(l,s){var a,e=!1;l.subscribe((0,b.x)(s,function(r){var t=a;a=r,e&&s.next([t,r]),e=!0}))})}(),(0,Z.w)(function(P){var F=(0,E.Z)(P,2);return p._changeDataSource(F[0],F[1])}),(0,j.d)(1)),this._differ=null,this._needsUpdate=!1,this._destroyed=new R.x,this.dataStream.subscribe(function(P){p._data=P,p._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe((0,L.R)(this._destroyed)).subscribe(function(P){p._renderedRange=P,p.viewChange.observers.length&&u.run(function(){return p.viewChange.next(p._renderedRange)}),p._onRenderedDataChange()}),this._viewport.attach(this)}return(0,h.Z)(s,[{key:"cdkVirtualForOf",get:function(){return this._cdkVirtualForOf},set:function(e){this._cdkVirtualForOf=e,(0,Y.isDataSource)(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new Y.ArrayDataSource((0,g.b)(e)?e:Array.from(e||[])))}},{key:"cdkVirtualForTrackBy",get:function(){return this._cdkVirtualForTrackBy},set:function(e){var r=this;this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?function(t,o){return e(t+(r._renderedRange?r._renderedRange.start:0),o)}:void 0}},{key:"cdkVirtualForTemplate",set:function(e){e&&(this._needsUpdate=!0,this._template=e)}},{key:"cdkVirtualForTemplateCacheSize",get:function(){return this._viewRepeater.viewCacheSize},set:function(e){this._viewRepeater.viewCacheSize=(0,w.coerceNumberProperty)(e)}},{key:"measureRangeSize",value:function(e,r){if(e.start>=e.end)return 0;for(var u,p,t=e.start-this._renderedRange.start,o=e.end-e.start,P=0;P<o;P++){var F=this._viewContainerRef.get(P+t);if(F&&F.rootNodes.length){u=p=F.rootNodes[0];break}}for(var U=o-1;U>-1;U--){var v=this._viewContainerRef.get(U+t);if(v&&v.rootNodes.length){p=v.rootNodes[v.rootNodes.length-1];break}}return u&&p?se(r,"end",p)-se(r,"start",u):0}},{key:"ngDoCheck",value:function(){if(this._differ&&this._needsUpdate){var e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}},{key:"ngOnDestroy",value:function(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}},{key:"_onRenderedDataChange",value:function(){var e=this;this._renderedRange&&(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create(function(r,t){return e.cdkVirtualForTrackBy?e.cdkVirtualForTrackBy(r,t):t})),this._needsUpdate=!0)}},{key:"_changeDataSource",value:function(e,r){return e&&e.disconnect(this),this._needsUpdate=!0,r?r.connect(this):(0,C.of)()}},{key:"_updateContext",value:function(){for(var e=this._data.length,r=this._viewContainerRef.length;r--;){var t=this._viewContainerRef.get(r);t.context.index=this._renderedRange.start+r,t.context.count=e,this._updateComputedContextProperties(t.context),t.detectChanges()}}},{key:"_applyChanges",value:function(e){var r=this;this._viewRepeater.applyChanges(e,this._viewContainerRef,function(p,P,F){return r._getEmbeddedViewArgs(p,F)},function(p){return p.item}),e.forEachIdentityChange(function(p){r._viewContainerRef.get(p.currentIndex).context.$implicit=p.item});for(var t=this._data.length,o=this._viewContainerRef.length;o--;){var u=this._viewContainerRef.get(o);u.context.index=this._renderedRange.start+o,u.context.count=t,this._updateComputedContextProperties(u.context)}}},{key:"_updateComputedContextProperties",value:function(e){e.first=0===e.index,e.last=e.index===e.count-1,e.even=e.index%2==0,e.odd=!e.even}},{key:"_getEmbeddedViewArgs",value:function(e,r){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:r}}}]),s}();return l.\u0275fac=function(a){return new(a||l)(i.\u0275\u0275directiveInject(i.ViewContainerRef),i.\u0275\u0275directiveInject(i.TemplateRef),i.\u0275\u0275directiveInject(i.IterableDiffers),i.\u0275\u0275directiveInject(Y._VIEW_REPEATER_STRATEGY),i.\u0275\u0275directiveInject(le,4),i.\u0275\u0275directiveInject(i.NgZone))},l.\u0275dir=i.\u0275\u0275defineDirective({type:l,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:Y._VIEW_REPEATER_STRATEGY,useClass:Y._RecycleViewRepeaterStrategy}])]}),l}(),me=function(){var l=function(s){(0,c.Z)(e,s);var a=(0,_.Z)(e);function e(r,t,o,u){return(0,f.Z)(this,e),a.call(this,r,t,o,u)}return(0,h.Z)(e,[{key:"measureBoundingClientRectWithScrollOffset",value:function(t){return this.getElementRef().nativeElement.getBoundingClientRect()[t]-this.measureScrollOffset(t)}}]),e}(Q);return l.\u0275fac=function(a){return new(a||l)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(G),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(H.Directionality,8))},l.\u0275dir=i.\u0275\u0275defineDirective({type:l,selectors:[["","cdkVirtualScrollingElement",""]],hostAttrs:[1,"cdk-virtual-scrollable"],standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:X,useExisting:l}]),i.\u0275\u0275InheritDefinitionFeature]}),l}(),ge=function(){var l=function(s){(0,c.Z)(e,s);var a=(0,_.Z)(e);function e(r,t,o){var u;return(0,f.Z)(this,e),(u=a.call(this,new i.ElementRef(document.documentElement),r,t,o))._elementScrolled=new A.y(function(p){return u.ngZone.runOutsideAngular(function(){return(0,y.R)(document,"scroll").pipe((0,L.R)(u._destroyed)).subscribe(p)})}),u}return(0,h.Z)(e,[{key:"measureBoundingClientRectWithScrollOffset",value:function(t){return this.getElementRef().nativeElement.getBoundingClientRect()[t]}}]),e}(Q);return l.\u0275fac=function(a){return new(a||l)(i.\u0275\u0275directiveInject(G),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(H.Directionality,8))},l.\u0275dir=i.\u0275\u0275defineDirective({type:l,selectors:[["cdk-virtual-scroll-viewport","scrollWindow",""]],standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:X,useExisting:l}]),i.\u0275\u0275InheritDefinitionFeature]}),l}(),ee=function(){var l=(0,h.Z)(function s(){(0,f.Z)(this,s)});return l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=i.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=i.\u0275\u0275defineInjector({}),l}(),_e=function(){var l=(0,h.Z)(function s(){(0,f.Z)(this,s)});return l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=i.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=i.\u0275\u0275defineInjector({imports:[H.BidiModule,ee,H.BidiModule,ee]}),l}()}}]);