var context = require('mediator').context;

module.exports = function(node, scope) {
  var fn = context.visit(node.callee, scope);
  return fn.call(node);
}
