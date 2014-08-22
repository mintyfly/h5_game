(function(module){
    var img       = 'duck.jpg';
    var diffImg   = 'ducky.jpg';
    var column    = 2;

    function App(){
        this.$gameView = $('#gameView');
        this.hasBind = false;
    }

    App.prototype.fireGame = function() {
        var self = this;
        this.$gameView.appendChild(this.renderRect(column));
        if (!self.hasBind) {
            self.hasBind = true;
            this.$gameView.addEventListener('click',
                function (event) {
                    if (event.target.id !== 'bingo') {
                        return;
                    }
                    if (column < 7) {
                        ++column;
                    }
                    self.clearAll(self.$gameView);
                    self.fireGame();
            });
        }
    }

    App.prototype.clearAll = function($gameView) {
        $gameView.innerHTML = '';
    }

    App.prototype.reload = function () {
        column = 2;
        this.clearAll(this.$gameView);
        this.fireGame();
    }
    App.prototype.renderRect = function(n) {
        var x = parseInt(Math.random() * n);
        var y = parseInt(Math.random() * n);
        var render = document.createDocumentFragment();
        for (var indexX = 0; indexX < n; indexX++) {
            for(var indexY = 0; indexY < n; indexY++){
                var r = new Rect(n, img);
                if (indexX === x && indexY === y) {
                    r.setRect(diffImg);
                    r.setRectId('bingo');
                }
                render.appendChild(r.getRect());
            }
        }
        return render;
    }
    module.App = App;
})(window);
