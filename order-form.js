function OrderForm() {
  this.collateralForm = $('.collateral-form');
  this.total = 0;

  this.renderTotal = function() {
    var $totalAmountNode = $('.total-amount');
    $totalAmountNode.html('$' + this.total);
  }
  this.setSubmitListener = function() {
    var that = this;
    this.collateralForm.submit(function(e) {
      e.preventDefault();
      var orderDetails = that.collateralForm.serializeArray();
      console.log(orderDetails);
    });
  }

  this.setSubmitListener();
}


var orderForm = new OrderForm();
orderForm.renderTotal();
