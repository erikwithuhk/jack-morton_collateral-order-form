function OrderForm() {
  this.collateralForm = $('.collateral-form');
  this.total = 0;

  this.renderTotal = function() {
    var $totalAmountNode = $('.total-amount');
    $totalAmountNode.html('$' + this.total.toFixed(2) + ' + shipping*');
    var $totalInputNode = $('.total-amount-input');
    $totalInputNode.val(this.total);
  }
  this.calculateTotal = function() {
    var $itemPriceNodes = $('.price');
    var subtotals = [];
    $itemPriceNodes.each(function(index, node) {
      var priceString = node.innerHTML;
      var priceNumber = parseFloat(priceString.slice(1));
      subtotals.push(priceNumber);
    });
    var total = subtotals.reduce(function(prev, next) {
      return prev + next;
    });
    this.total = total;
    this.renderTotal();
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
}


var orderForm = new OrderForm();
orderForm.calculateTotal();
