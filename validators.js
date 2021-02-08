class ERR_INVALID_ARG_TYPE extends TypeError
{
  code = 'ERR_INVALID_ARG_TYPE'
}


exports.validateBoolean = function(value, name) {
  if (typeof value !== 'boolean')
    throw new ERR_INVALID_ARG_TYPE(name, 'boolean', value);
}

exports.validateObject = function(value, name, { nullable = false } = {}) {
  if ((!nullable && value === null) ||
      Array.isArray(value) ||
      typeof value !== 'object') {
    throw new ERR_INVALID_ARG_TYPE(name, 'Object', value);
  }
};
