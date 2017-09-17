function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 5;
  this.emptyFlag = true;

  this.isEmpty = function() {
    return this.emptyFlag;

  };

  this.canEnqueue = function() {
    if(this.queueControl.length === this.MAX_SIZE) {
      return false;
    }

    return true;

  };

  this.enqueue = function(element) {

    if(this.queueControl.length === this.MAX_SIZE) {
      return "Queue Overflow";
    }
    this.queueControl.push(element);
    this.emptyFlag = false;

    return this.queueControl.reverse();


  };

  this.dequeue = function() {
    if(this.queueControl.length === 0) {
      return "Queue Underflow";
    }
    console.log(this.queueControl);
    var retVal = this.queueControl[this.queueControl.length-1];
    console.log("reshma" + retVal);
    this.queueControl = this.queueControl.slice(0, this.queueControl.length-1 );
    console.info(this.queueControl);
    return retVal;


  };








}
