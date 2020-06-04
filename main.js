let calculator = {
    
  read() {
    this.x = +prompt('Write First Number?', '');
    this.y = +prompt('Write Second Number?', '');
      document.write( '<br/>' );
      document.write('First Number:'+''+ this.x );
      document.write( '<br/>' );
      document.write( 'Second Number:'+''+this.y );
  },
  sum() {
    return this.x + this.y;
  },

  multiply() {
    return this.x * this.y;
  }

  };
calculator.read();
document.write( '<br/>' );
document.write('Sum Method='+''+ calculator.sum() );
document.write( '<br/>' );
document.write('Multiply Method='+''+ calculator.multiply() );






