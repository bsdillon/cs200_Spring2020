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
        //BSD - I haven't quite worked out why there is an off-by-one error.
        //vectors think they are drawing from 7 to 9 and they are actually 
        //drawing from 6 to 8. It is incredibly consistent and I think it is
        //just an effect of the block size and zero indexing. In any case
        //i have added an intentional fudgeFactor to deal with it.
        var fudge = 1;
        var halfBlock = block/2;
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;
        this.ctx.beginPath();
          this.ctx.arc(block*(this.xStart+fudge)-halfBlock, block*(this.yStart+fudge)-halfBlock, block/4, 0, 2 * Math.PI);
        this.ctx.fill();
        var wasWidth = this.ctx.lineWidth;
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
          this.ctx.moveTo(block*(this.xStart+fudge)-halfBlock, block*(this.yStart+fudge)-halfBlock);
          this.ctx.lineTo(block*(this.xStart+fudge+this.xHat)-halfBlock, block*(this.yStart+fudge+this.yHat)-halfBlock);
        this.ctx.stroke();
        this.ctx.beginPath();
          var theta =  Math.atan2(-this.yHat, this.xHat);
          var theta2= theta+(135*Math.PI/180);
          this.ctx.moveTo(block*(this.xStart+fudge+this.xHat)-halfBlock, block*(this.yStart+fudge+this.yHat)-halfBlock);
          this.ctx.lineTo(block*(this.xStart+fudge+this.xHat+(.5*Math.cos(theta2)))-halfBlock, block*(this.yStart+fudge+this.yHat-(.5*Math.sin(theta2)))-halfBlock);
          var theta2= theta-(135*Math.PI/180);
          this.ctx.lineTo(block*(this.xStart+fudge+this.xHat+(.5*Math.cos(theta2)))-halfBlock, block*(this.yStart+fudge+this.yHat-(.5*Math.sin(theta2)))-halfBlock);
          this.ctx.closePath();
          this.ctx.fill();
          this.ctx.lineWidth = wasWidth;
      }
