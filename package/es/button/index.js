import { template } from 'solid-js/web';

const _tmpl$ = /*#__PURE__*/template(`<div>button</div>`, 2);
const Button = () => {
  return _tmpl$.cloneNode(true);
};

export { Button as default };
