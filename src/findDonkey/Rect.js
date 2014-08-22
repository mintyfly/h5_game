(function (module) {
    function Rect(n, img) {
        this.img     = img;
        this.n       = n;
        this.width   = 100/n+'%';
        this.setRect(this.img);
    }

    Rect.prototype.setRectId  = function(id) {
        this.rect.setAttribute('id', id);
    };
    Rect.prototype.getRect = function() {
        return this.rect;
    };
    Rect.prototype.setRect = function(imgsrc) {
        var img = document.createElement('img');
        img.setAttribute('width', this.width);
        img.setAttribute('src', imgsrc)
        this.rect = img;
    }
module.Rect = Rect;
})(window);