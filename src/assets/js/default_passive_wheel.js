/////
//          Author : Asfar Saqlain
//          Created On 26/10/2018
////

var f = EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener = function (type, fn, opt) {
    this.f = f;
    if (type === "wheel") {
        this.f(type, fn, {capture: true, passive: true, once: true});
    }
    else {
        this.f(type, fn, opt);
    }
};