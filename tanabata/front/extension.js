if (!Array.prototype.shuffle) {
  Array.prototype.shuffle = function() {
    if (this == null) {
      throw new TypeError('Array.prototype.shuffle called on null or undefined');
    }

    // Fisher-Yates アルゴリズムによるシャッフル
    for (let i = this.length - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      const tmp = this[i];
      this[i] = this[r];
      this[r] = tmp;
    }
  };
}
