export default function Promise(executor) {
    let self = this;
    self.status = 'pending';
    self.value = undefined;
    self.reason = undefined;

    function resolve(value) {
      if (self.status === 'pending') {
        self.status = 'resolve';
        self.value = value;
      }
    }

    function reject(reason) {
      if (self.status === 'pending') {
        self.status = 'reject';
        self.reason = reason;
      }
    }
    try {
      executor(resolve , reject);
    }catch(e) {
      reject(e);
      }
  }

  Promise.prototype.then = function (onFulfilled , onRejected) {
    let self = this;
    if (self.status === 'resolve') {
      onFulfilled(self.value);
    }
    if (self.status === 'reject') {
      onRejected(self.reason);
    }
  };

