export function command(value) {
  return function(target) {
    target.command = value;
  }
}

export function alias(value) {
  return function(target) {
    target.alias = value;
  }
}

export function option(opt, description) {
  return function(target) {
    target.options = target.options || [];
    target.options.push({
      opt: opt,
      desc: description
    });
  }
}

export function args(value) {
  return function(target) {
    target.args = value;
  }
}

export function description(value) {
  return function(target) {
    target.description = value;
  }
}
