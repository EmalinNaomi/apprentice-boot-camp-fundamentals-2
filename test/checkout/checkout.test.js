const { Checkout } = require('../../main/checkout/checkout.js');

describe('Checkout', function () {
  const prices = { priceOfA : 50};
  test('scans one A', function () {
    let checkout = new Checkout(prices);
    checkout.scan('A');
    expect(checkout.getTotal()).toBe(50);
  });

  test('scans two As', function () {
    let checkout = new Checkout(prices);
    checkout.scan('A');
    checkout.scan('A');
    expect(checkout.getTotal()).toBe(100);
  });

  
  test('scans five As', function () {
    let checkout = new Checkout(prices);
    checkout.scan('A');
    checkout.scan('A');
    checkout.scan('A');
    checkout.scan('A');
    checkout.scan('A');
    expect(checkout.getTotal()).toBe(220)
  });
  
    test('scans six As', function () {
    let checkout = new Checkout(prices);
    checkout.scan('A');
    checkout.scan('A');
    checkout.scan('A');
    checkout.scan('A');
    checkout.scan('A');
    checkout.scan('A');
    expect(checkout.getTotal()).toBe(270);
  });

  test('scans one B', function () {
    let checkout = new Checkout(prices);
    checkout.scan('B');
    expect(checkout.getTotal()).toBe(30);
  });

  test('scans two Bs', function () {
    let checkout = new Checkout(prices);
    checkout.scan('B');
    checkout.scan('B');
    expect(checkout.getTotal()).toBe(45);
  });


  test('scans four Bs', function () {
    let checkout = new Checkout(prices);
    checkout.scan('B');
    checkout.scan('B');
    checkout.scan('B');
    checkout.scan('B');
    expect(checkout.getTotal()).toBe(90);
  });

  test('simple, scans A, B, C, and D', function () {
    let checkout = new Checkout(prices);
    checkout.scan('A');
    expect(checkout.getTotal()).toBe(50);

    checkout.scan('B');
    expect(checkout.getTotal()).toBe(80);

    checkout.scan('C');
    expect(checkout.getTotal()).toBe(100);

    checkout.scan('D');
    expect(checkout.getTotal()).toBe(115);
  });

  test('incremental, scans A, B, A, A, B C, B, C, D, D, D, and C', function () {
    let checkout = new Checkout(prices);
    checkout.scan('A');
    expect(checkout.getTotal()).toBe(50);

    checkout.scan('B');
    expect(checkout.getTotal()).toBe(80);

    checkout.scan('A');
    expect(checkout.getTotal()).toBe(130);

    checkout.scan('A');
    expect(checkout.getTotal()).toBe(180);

    checkout.scan('B');
    expect(checkout.getTotal()).toBe(195);

    checkout.scan('C');
    expect(checkout.getTotal()).toBe(215);

    checkout.scan('B');
    expect(checkout.getTotal()).toBe(245);

    checkout.scan('C');
    expect(checkout.getTotal()).toBe(265);

    checkout.scan('D');
    expect(checkout.getTotal()).toBe(280);

    checkout.scan('D');
    expect(checkout.getTotal()).toBe(295);

    checkout.scan('D');
    expect(checkout.getTotal()).toBe(310);

    checkout.scan('C');
    expect(checkout.getTotal()).toBe(330);
  });
});