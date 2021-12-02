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
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;
        this.ctx.beginPath();
          this.ctx.arc(block*this.xStart, block*this.yStart, block/4, 0, 2 * Math.PI);
        this.ctx.fill();
        var wasWidth = this.ctx.lineWidth;
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
          this.ctx.moveTo(block*this.xStart, block*this.yStart);
          this.ctx.lineTo(block*(this.xStart+this.xHat), block*(this.yStart+this.yHat));
          var theta =  Math.atan2(this.yStart+this.yHat, this.xStart+this.xHat)+(135*Math.PI/180);
          this.ctx.moveTo(block*(this.xStart+this.xHat), block*(this.yStart+this.yHat));
          this.ctx.moveTo(block*(this.xStart+Math.cos(theta)), block*(this.yStart-Math.sin(theta)));          
        this.ctx.stroke();
        this.ctx.lineWidth = wasWidth;
      }
