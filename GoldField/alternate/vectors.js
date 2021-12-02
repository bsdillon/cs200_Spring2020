      var Vector = function(x, y, dx, dy, color)
      {
         this.name = "Vector";
         this.xStart = x;
         this.yStart = y;
         this.xHat = dx;
         this.yHat = dy;
         this.color = color;
      }

      Vector.prototype = Object.create(Layer.prototype);
      Vector.prototype.constructor = Vector;

      Vector.prototype.DrawLayer = function(block)
      {
        this.ctx.strokeStyle = this.color;
        this.ctx.beginPath();
          this.ctx.arc(block*xStart, block.yStart, block/4, 0, 2 * Math.PI);
        this.ctx.fill();
        var wasWidth = this.ctx.lineWidth;
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
          this.ctx.moveTo(block*xStart, block*yStart);
          this.ctx.lineTo(block*(xStart+xHat), block*(yStart+yHat));
        this.ctx.draw();
        this.ctx.lineWidth = wasWidth;
      }
