function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 5;
  this.emptyFlag = true;


  this.canPush = function() {

  }

  this.push = function(element) {
    if(this.stackControl.length === this.MAX_SIZE){
      return "Stack Overflow";
    }
    this.stackControl.push(element);
    this.emptyFlag = false;
    return this.stackControl;
  }

  this.pop = function() {
    if(this.stackControl.length === 0) {
      return "Stack Underflow"
    }
  //  return this.stackControl[this.stackControl.length - 1];
      return this.stackControl.pop();
  }

  this.isEmpty = function() {
    return this.emptyFlag;
  }

  this.canPush = function() {
    if(this.stackControl.length === this.MAX_SIZE){
      return false;
    }
    return true;
  }


}
