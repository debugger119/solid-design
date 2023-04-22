'use strict';

const web = require('solid-js/web');

const _tmpl$ = /*#__PURE__*/web.template(`<div>button</div>`, 2);
const Button = () => {
  return _tmpl$.cloneNode(true);
};

module.exports = Button;
