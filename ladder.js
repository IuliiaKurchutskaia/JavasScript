let ladder = {
    step: 0,
    up() {
      this.step++;
    },
    down() {
      this.step--;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
    }
  };


  ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

ladder.up().up().down().showStep(); // 1

let ladder = {
    step: 0,
    up() {
     return this.step++;
    },
    down() {
     return this.step--;
    },
    showStep: function() { // показывает текущую ступеньку
     return alert( this.step );
    }
  };


  ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

ladder.up().up().down().showStep(); // 1