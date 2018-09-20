---
order: 0
title:
  zh-CN: Text
  en-US: Text
subtitle:
  zh-CN: 副标题可以使用markdown语法，例如`size`, `type`, `disabled`。
  en-US: Markdown grammar can be use here. Such as `size`, `type`, `disabled`.
---

```js
function onChange(event) {
  console.log(`current value is: ${event.target.value}`);
}

ReactDOM.render(
  <input type="text" onChange={onChange} />,
  mountNode
);
```