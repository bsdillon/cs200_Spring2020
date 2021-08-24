      var XAxis = function()
      {
         this.name = "X-Axis";
      }

      XAxis.prototype = Object.create(Layer.prototype);
      XAxis.prototype.constructor = XAxis;

      XAxis.prototype.DrawLayer = function(block)
      {
        var w = this.ctx.canvas.clientWidth;
        var h = this.ctx.canvas.clientHeight;
        this.ctx.strokeStyle = "#000000";
        this.ctx.beginPath();
        this.ctx.moveTo(0,h/2);
        this.ctx.lineTo(w,h/2);
        var count=0;
        this.ctx.font = "10px Georgia";
        this.ctx.fillStyle = "#FFFF00";
        for(let i=w/2;i>0;i-=block)
        {
          this.ctx.moveTo(i,h/2-Math.max(1,block/4));
          this.ctx.lineTo(i,h/2+Math.max(1,block/4));
          if(count%5==0)
          {
            this.ctx.fillText(""+count, i-4, h/2+Math.max(1,block/4)+6)
          }
          count--;
        }

        count=0;
        for(let i=w/2;i<w;i+=block)
        {
          this.ctx.moveTo(i,h/2-Math.max(1,block/4));
          this.ctx.lineTo(i,h/2+Math.max(1,block/4));
          if(count%5==0)
          {
            this.ctx.fillText(""+count, i-4, h/2+Math.max(1,block/4)+6)
          }
          count++;
        }
        this.ctx.stroke();
      }

//////////////////////////

      var YAxis = function()
      {
         this.name = "Y-Axis";
      }

      YAxis.prototype = Object.create(Layer.prototype);
      YAxis.prototype.constructor = YAxis;

      YAxis.prototype.DrawLayer = function(block)
      {
        var w = this.ctx.canvas.clientWidth;
        var h = this.ctx.canvas.clientHeight;
        this.ctx.strokeStyle = "#000000";
        this.ctx.beginPath();
        this.ctx.moveTo(w/2,0);
        this.ctx.lineTo(w/2,h);
        var count=0;
        this.ctx.font = "10px Georgia";
        this.ctx.fillStyle = "#FFFF00";
        for(let i=h/2;i>0;i-=block)
        {
          this.ctx.moveTo(w/2-Math.max(1,block/4),i);
          this.ctx.lineTo(w/2+Math.max(1,block/4),i);
          if(count%5==0)
          {
            this.ctx.fillText(""+count, w/2+Math.max(1,block/4)+2, i+2)
          }
          count++;
        }

        count=0;
        for(let i=h/2;i<h;i+=block)
        {
          this.ctx.moveTo(w/2-Math.max(1,block/4),i);
          this.ctx.lineTo(w/2+Math.max(1,block/4),i);
          if(count%5==0)
          {
            this.ctx.fillText(""+count, w/2+Math.max(1,block/4)+2, i+2)
          }
          count--;
        }
        this.ctx.stroke();
      }

//////////////////////////

      var Grid = function()
      {
         this.name = "Grid";
      }

      Grid.prototype = Object.create(Layer.prototype);
      Grid.prototype.constructor = Grid;

      Grid.prototype.DrawLayer = function(block)
      {
        var w = this.ctx.canvas.clientWidth;
        var h = this.ctx.canvas.clientHeight;
        this.ctx.strokeStyle = "#000000";
        this.ctx.beginPath();
        for(let i=(w/2)%block;i<w;i+=block)
        {
          for(let j=(h/2)%block;j<h;j+=block)
          {
            this.ctx.moveTo(i-Math.max(1,block/4),j);
            this.ctx.lineTo(i+Math.max(1,block/4),j);

            this.ctx.moveTo(i,j-Math.max(1,block/4));
            this.ctx.lineTo(i,j+Math.max(1,block/4));
          }
        }
        this.ctx.stroke();
      }