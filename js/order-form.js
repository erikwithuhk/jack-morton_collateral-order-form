function OrderForm() {
  this.collateralForm = $('.collateral-form');
  this.total = 0;

  this.renderTotal = function() {
    var $totalAmountNode = $('.total-amount');
    $totalAmountNode.html('$' + this.total);
  }
  this.calculateTotal = function() {
    var $itemPrices = $('.price');
    console.log($itemPrices);
    // var totalPrice = 0;
    // $collateralItemInputs.each(function(idx, input) {
    //   totalPrice += (input.value * input.getAttribute('data-price'));
    // });
    // this.total = totalPrice.toFixed(2);
    // this.renderTotal();
  }
  this.updatePrice = function(target) {
    var unitPrice = target.getAttribute('data-price');
    var itemAmount = target.value || 0;
    var totalPrice = unitPrice * itemAmount;
    document.querySelector('.' + target.name).innerHTML = '$' + totalPrice.toFixed(2);
    this.calculateTotal();
  }
  this.setCollateralInputListener = function() {
    var $collateralItemInputs = $('.collateral__item input');
    var that = this;
    $collateralItemInputs.each(function(idx, input) {
      input.addEventListener('keyup', function(e) {
        that.updatePrice(e.target);
      });
    });
  }
  this.setSubmitListener = function() {
    var that = this;
    this.collateralForm.submit(function(e) {
      e.preventDefault();
      var orderDetails = that.collateralForm.serializeArray();
    });
  }

  this.setCollateralInputListener();
  this.setSubmitListener();
}


var orderForm = new OrderForm();
orderForm.renderTotal();
