# 安装

```
npm install --save-dev jest
```



## 预期 `expect`

当你写测试，你经常需要检查值满足一定的条件。 `expect` 让您可以访问一些“匹配器”，让您验证不同的东西。

### 1. expect(value)

每次要测试一个值时都会使用`expect`函数。 你很少会自己调用`expect`。 相反，您将使用`expect`及 `matcher` 函数来断言某个值。

很容易理解这一点的一个例子。 假设你有一个方法`bestLaCroixFlavor()`，它应该返回字符串'grapefruit'。 以下是您如何测试：

```js
test('the best flavor is grapefruit', () => {
  expect(bestLaCroixFlavor()).toBe('grapefruit');
});
```

在这种情况下，`toBe`是匹配器函数。 有很多不同的匹配器函数

`expect`的参数应该是您的代码产生的值，匹配器的任何参数应该是正确的值。 如果混合使用，测试仍然可以工作，但是失败测试的错误信息将会显得奇怪。

### 2.  expect.extend(matchers)

可以使用`expect.extend`将自己的匹配器添加到Jest。

例如，假设正在测试一个数字实用程序库，并且经常断言数字出现在其他数字的特定范围内。可以将其抽象为`toBeWithinRange`匹配器：可以将其抽象为`toBeWithinRange`匹配器：

```js
expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

test('numeric ranges', () => {
  expect(100).toBeWithinRange(90, 110);
  expect(101).not.toBeWithinRange(0, 100);
  expect({apples: 6, bananas: 3}).toEqual({
    apples: expect.toBeWithinRange(1, 10),
    bananas: expect.not.toBeWithinRange(11, 20),
  });
});
```

`expect.extend`还支持异步匹配器。异步匹配器返回一个承诺，因此您需要等待返回的值。让我们使用一个示例matcher来说明它们的用法。我们将实现一个名为`toBeDivisibleByExternalValue`的匹配器，其中可整数将从外部源中提取。

```js
expect.extend({
  async toBeDivisibleByExternalValue(received) {
    const externalValue = await getExternalValueFromRemoteSource();
    const pass = received % externalValue == 0;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be divisible by ${externalValue}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be divisible by ${externalValue}`,
        pass: false,
      };
    }
  },
});

test('is divisible by external value', async () => {
  await expect(100).toBeDivisibleByExternalValue();
  await expect(101).not.toBeDivisibleByExternalValue();
});
```

**自定义匹配器 `API`**

匹配器应该返回一个拥有两个属性的 `object` (或者一个提供 `object` 的 `Promise`) Matchers should return an object (or a Promise of an object) with two keys. pass表示是否有匹配，而`message` 提供了一个没有参数的函数，在出现故障的情况下返回错误消息。 因此，当`pass`为false时，`message`应该返回当`expect(x).yourMatcher()`失败时的错误消息。 而当`pass`为true时， `message`应该返回当`expect(x).not.yourMatcher()`失败时的错误信息。

调用匹配器时，传递给expect（x）的参数后跟传递给的参数。`yourMatcher（y，z）`：

```js
expect.extend({
  yourMatcher(x, y, z) {
    return {
      pass: true,
      message: () => '',
    };
  },
});
```

这些辅助函数和属性可以在自定义匹配器中找到：

#### this.isNot

一个布尔值，让您知道这个匹配器是用否定的。`.not`修饰符调用的，它允许您显示清晰正确的匹配器提示（参见示例代码）。

#### this.promise

允许您显示清晰正确的匹配器提示的字符串：

- `'rejects'`，如果使用`promise.rejects`修饰符调用matcher
- `'resolves'`如果使用`promise.resolves`修饰符调用匹配器，则为'resolves'
- `''`如果未使用承诺修饰符调用matcher

#### this.equals(a, b)

一个布尔值，让您知道此匹配器是通过扩展选项调用的。当使用`--expand`标志调用`Jest`时，可以使用`this.expand`确定`Jest`是否需要显示完全差异和错误。

#### this.expand

一个布尔值，让您知道此匹配器是通过扩展选项调用的。当使用`--expand`标志调用`Jest`时，可以使用`this.expand`确定`Jest`是否需要显示完全差异和错误。

### 3. 常用匹配器















