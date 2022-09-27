const giveChange = amount => [100, 50, 20, 10, 5, 1].map(a => 
  ([a, amount] = [Math.floor(amount/a), amount % a])[0]).reverse();