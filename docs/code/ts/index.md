# {#type-challenges}

<div style='text-align: center'>
  <img src="/images/typeChallenge.svg" width="400" style="max-width: 100%; margin: 0 auto;">
  <span>类型挑战题解📖</span>
</div>

## Medium 

### `4471・Zip`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/04471-medium-zip/README.md"><img src="https://camo.githubusercontent.com/545b2070a39abd9cadc11e0120404c0bb0fe48cb0e47d2852214816256b2a9c3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d343437312545332538332542425a69702d643939303161" alt="4471・Zip" data-canonical-src="https://img.shields.io/badge/-4471%E3%83%BBZip-d9901a" style="max-width: 100%;"></a>

实现一个类型Zip＜T，U＞，T和U必须是Tuple。

`type exp = Zip<[1，2]，[true，false]> //应为[[1，true]，[2，false]]`
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBAs0OwEYIFoIC0CWAHSLn4NwCMBPCQWoZArhkFaGQQ4YIBHDAQwDsAPDCACgAEm2nAAzQEQgJQQAxAFsApgBMMAVxnSALsqwAbOWFxTDEAIrK5AZ3UYA9q31QAkqwgAVABYZzEAMJvm23VYAczkAGggATWtlCHM3aO0FCAwZHTl5VnUIZgh1Eiw5CAADTCwAHhdwgFUAPiLwl2zWJKqIGWVLCCJCopctXSLcIuH1c1w8gog5diwIAF50bDKAbQRwgCYAXXDl9QAnM3CAM39zOU2aiGBgKZm5AGN1RVzrLsLl1fD9s22IZfXjqdzpshsN7BBLgA1DByADuEFsEAA4hh1AAJZREABcEDc6nUWHMWOuo3ubgAdAArczk6x7ILAWCIMAgYD6UAQAD63J5vJ5kWiex81gUhTRcj2hT50u5EFZ+gmhVKFWq4W8tyezS8bBIy028z+FwNjWmmoUXmWGFYRwlEAASuFyU6rTahQBlfW4AD8EFaprkWr+LttlQgTvJwaFkJBUCgPuVy3DHp24ejKad3h2DtcmwuuCgOO8uEL7JAXJlfNcFiy3mYZy8Fcr8pSWDpWUVEAA3hAAKIMZT+cI9u6PCAAXwgRz21jUAHJeIrkGT-IEQuZgMorNpzLOFflCvc6xYDctcMOCo8yn2B9oygnfnqajsLk+zyP1Ff+-470tPhAtjs3xhJOQIXDsf5AQ+AIgduwI1K+UDng8H7Xt+CZrP+4QAMwPrOCCzuEs7rLOYF-H+eEkTs0FESRL6hG+F4oV+t73jsGHQThT6GvB9GIe+n43j+5QfOxuY7Jx4F-gBEA4XRYAgmAHKNryEAAGLKHs6huLabpPIS5bKZycpsqAuCXG6fiShAJCCrE1jaJuNisESuL4oSxLAKSFLUrS9KMvACDAGw5iwhKZkQNCcJ2Q5Vi2C5eIEkSJLmGSVI0nSDJMoF5j2Y5cXhQAsnShS+CuAZrjiCXuclqU+RlLJskAA)

```ts
type Zip<T, U, C extends any[] = []> = T extends [infer R, ...infer S] 
  ? U extends [infer T, ...infer V]
    ? Zip<[...S], [...V], [...C, [R, T]]>
    : C
  : C
```

---

### `5317・LastIndexOf`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/05317-medium-lastindexof/README.md"><img src="https://camo.githubusercontent.com/68df04216f8b18a8d57cec8c4ffc46d55c31178795782e76603304511e877b29/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d353331372545332538332542424c617374496e6465784f662d643939303161" alt="5317・LastIndexOf" data-canonical-src="https://img.shields.io/badge/-5317%E3%83%BBLastIndexOf-d9901a" style="max-width: 100%;"></a>

实现`Array.lastIndexOf`，`lastIndexOf<T，U>`的类型版本，获取数组T，任意U，并返回数组T中最后一个U的索引。
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBCsDMCMB2CBaCAZAhgZwC4EkA7AEwFMAPAeQDNJUUHG6AjATwgCsBLTQgc2wALXhAAUAAW68BwwgFtSuTAEoIAYgXEuAVznrMAJwOZWdOmosQAittJ4uAe0Jmo%20OQAcANqQWFcEXEFSANZ3YIA3UgNsR0IIB2oIAAMUgEEjEwA6TxwCEgoaFKSAGmSUrDwiMipqAB4AFVKAVQA%20IqglAGs7CBF043Yi%20qLS3kGUpvbeYggDRW0DQmwAoIgufPJ4xMDgnLwypMmUtbj%20kwPhlJcIADEHAwgKTA9vAC5rotxQuwBjAy53Lg6F8whAAEp2eAQAC8GFyVQKdQA2vBSgAmUqwdGleAAXXRLQgwGAEFgwO%204LsaJhcMqGxotSRAAZSiyIEz8RA0YTiah4HQitdCQA1LikADu8TiAHEuLgABLaZivCCCXC4dzYV7E3DYH6CTIcbCZe58YBwJBgEDAMC20AQAD6TudLudEAAmg4FhAAMIOMgQeVRYKu0NOiDW20g4JcbAAUQAjtpMJ4Gs1CbDRLUAMotUSqaGEiDZx7kXCkEjLeoQAD8EChKrRqgo5crYhzeYLRZLLYrxGWTVr9YgjdUddwBlsI4g1BT2FIUYpFTy1QZjQgrRp1d7baRmX362oUXBpUPx%20zuIgdDrscTydT2fTpdb-YCk4XUCgdb3%207BuKRADk3j8IEAGXnQUAqsuCI1Iy%206ZH%206Z0CqKD8mA9phqGED1HY-g%20jgPSYa6EY2lwHj3P40YQAA3hAd4pqUcbkGEPz%20AAvjOBgOHoAHiNGKD6imwF8HYwDaLgXCeNgAGLqCPwEcssJInQTEsbgtT0am0H0siqJcpi2L1py3KYi0LTFCpzGkKxGlJimtTaauyIYhAABsBkQAAHKUAAsOKlIgHkAJycrA5kQIgZkWVAqnWepmkOfCOmMmyqXGeFqFRZZam2feiV0k5jJ4P8-CGYQujMFEpQAZgAGlOVciVQYOKcg1TXhT5WUxVZNkJY5iJFRO6x8KMhCsP5EBtVVEA1XVvRjS1o2sOF0BZbitp2iAjpEW6NwLDsDzZuWmrbTtDokeh4BQIS2bCHMECsF6DzYA4njibEWqquqmrasAur6oaxqmuaCCIMAvDYOKUR0CKYqSi9b0SU4n1qhqWo6nqBpGiaBhmhaYMI%209yMwxAACy9zBD6wieMJdgqqjP0YwD2OmlaNpgEAA)

```ts
type isEqual<T, U> = (<S>() =>  S extends T ? 1 : 2) extends (<S>() =>  S extends U ? 1 : 2) 
  ? true 
  : false

type LastIndexOf<T, U> = T extends [...infer R, infer S] 
  ? isEqual<S, U> extends true
    ? [...R]['length'] 
    : LastIndexOf<[...R], U>
  : -1
```


## Hard

### `6・Simple Vue`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00006-hard-simple-vue/README.md"><img src="https://camo.githubusercontent.com/02b5863bc5c91d63f76326905a0fbad21790d6182a437efd2b624df66faf60a6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d3625453325383325424253696d706c652532305675652d646533643337" alt="6・Simple Vue" data-canonical-src="https://img.shields.io/badge/-6%E3%83%BBSimple%20Vue-de3d37" style="max-width: 100%;"></a>
实现类似Vue的简化版本的键入支持。

通过提供函数名`SimpleVue`（类似于`Vue.extend`或`defineComponent`），它应该在`computed`和方法中正确地推断出该类型。

在这个挑战中，我们假设`SimpleVue`将带有数据、计算和方法字段的`Object`作为唯一参数，

`data`是一个简单的函数，它返回一个公开上下文的对象，但您无法访问其他计算值或方法。

`computed`是一个函数的对象，它将上下文作为对象，进行一些计算并返回结果。计算结果应作为纯返回值而不是函数公开给上下文。

`methods`是一个函数的对象，也将上下文作为对象。方法可以访问由数据、计算以及其他方法公开的字段。计算的不同之处在于，方法按原样公开为函数。

`SimpleVue`返回值的类型可以是任意的。
:::


[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBBsELQQMoEsC2AHANgUwgNQFdtJ44zySAjATwgEEA7AFwAsB7B2gMQIgAoAAgENmAMwIBKCAGIWQgE4ATGa2QBnGUPRZkAYyFNkHGQDciYEtKsQAikTWGOFqAEkMOVNmYQhENWnRkHGUTbHl-YzZRH3wiOExkAGtcJmpAhgBzPwJtNnkmADpnCAAhWnR5NhNkRWRMmPEGXUcGCAYhTwgAAxR3bEJsLv5-VCCFCCY2boGC7AAPJi9FIbzuxWxROuwAYTYMDi8mLokAGghkJj92AkxlCrZ0MMxaOtEwiZZcLtU1IdTH84MfzrCC6PboAiLZQiZSeVhsRRqIokFytH6guSYHCZbBnADuuCEajUBE6rAMSACOAGEyEyR8rQA8pQAFbYZoQPEXFhrAxCLpnLpgjCQ7DLBnKLpw9iIoabbC3DRE85MADkGg4zx88gypMOJ2KCC6ij5Q3UMRGWFwjWaRjRcku8mwTAI8iBDIgbFZ7Mu5Mu83QbDU2A0rFwYOY80u3xY6gFEEokIg1DYvDxHFVl0ohN0uhD-koOAmUzYYfkoPBopCQkw9k95elCKRhu6wohULNSqZ3o5UQgNpaoYdtPpYYrkYWPg0MbjZ0UbDqWTUe3DNd0NwMdolECdLrdQ9wTpJmEKEAAKp8KyKoTuQzcmBo1NdbgncAGg2Lix9wxxFpPlWOWBCHUt57q0Jg1nWdQONgQjKH2A52s2JBGo2srnF2EDMmyvbRIhHBDhSTB0ikl4Rn+lzKjOvxTpyCqYAUEAALLOjKGj6K0Qi5vm379sgCqIhA77BsoNC8sR8ZCpWHa0QSWK0aWnzllKrFNl0jEXrgtSiG8TreNmTAEl4rbSWKnYfBSKnwuhwmfsq+HukScDqMiUCaRMaS4H2PRUv0RBdOqoGuuBkGrq02bapQFzyAo1Cud0XTfGoJARg4gIOCIeYQAAvJSfQDHwADeJBQCaxF8FIxVQNVQVuhAVU1dVmzhEw7SeAAXBAqpnp5qoGo11WYESrUdNgnWqtsmLYhkIZ9SVjUdKmzCdQAjAADP1jUAL7zVtm1QG2VadQ1NXiFibXYBV9XzTVu7BR8LnNQ4F0QAA1F1H3vT8BRDc9o03RAO01Xt81oWox0A7GV0nQtOD5Hw31nZgF0FJMAAybAEvI2xEpdEgSADQPVUTW0E1AiVdMUAB8+D8XinqtAA4hcAASBCUJ1LBMEw6Dg8AwAProLAFCySJ5BkwDQGAIDABYoAQAA+krysq8rEAAJqpuWuwgizYS4KrhtKxAMtgP8uBMdQABKzrBT1jwADxnjTuVnkJCxLBoV3ZTTrzvFbEAAPwQAHnVnhY5tYegLQOwAImc2xnExLvXaVfKdQjsbg4VpM5TT8cpaZiiddsEAAGTnln9vYHHVObWDnVMeXlfqNXcfNzDADaAAKgIQMkKbRNsAC6jfW7bbpt9sPfD1TJBbc3ydgDtYDrLoQ1Ov2BBNC0eVWgMccJ0nVN8A8g6dYy0d2ofECJ8xVMSJ1IjUHLICK0bqvniGlw48GGgf5-U2AQ8i+k8vVCAABRAAjgQGsZwIFzEeByBeohKioC6gIc2cAhY1mmiGYAkIghqFVBYXo+8iBFRIGVIQ0N5r8wgJgtQcAAw+mYfISo8h5qI2QC1C6dDgAMIfMwxBrCwgcK4VnAoM0mBWxhHsCq-DBFMJYc0Nh4iarfWoQo+ad06owygE9EaHUurVzmgNX6RixpdUmrgrwM1iH7WqotbeTBVobV2vPTah0oQQ1OjcZGo1aEDV0a0LoAASQq3DeGjQXhE76FiLpbUpsDTaIMoAN1TtVaRsiGDzlQEExqITmIGGFjFXJ8iybE0cVDSqAMaxhCYJnFyzjmCVJqvU+GiN-Eo3RpjMIv88ZtKcXDRp31slyPyfjXajjFgOAKTVVKlwkYvVyl086-0BqLNBLjcGEBO4IKQUwB20DYGYAdubBC3TRpnAcPIRcVMqbDxynsp5ypn7TM8cvAmYB5YAJVhAHg+QlJIEWLzd+fyFYm1lqAEgNNEByE3imV0fg2C1nPhALmPM+YCzUELEWYsdSS2ACINQWNYW02wPTZcaKkKc25rzdq-NBbC1FgUcWRLqWEIIuSpieRcA2KxHYkMdKsWMpxXi1l4tpayyAA)

```ts
type MyReturnType<T> = T extends () => infer R ? R : T

type Option<D, C, M> = {
  data: (this:{}) => D,
  computed: C & ThisType<D>,
  methods: M & ThisType<D & {
    [P in keyof C]: MyReturnType<C[P]>
  } & M>
}

declare function SimpleVue<D, C, M>(options: Option<D, C, M>): any
```

---

### `17・Currying 1`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00017-hard-currying-1/README.md"><img src="https://camo.githubusercontent.com/97d9b948f51d65c283a22ded6ce341a29c79fea5fb0d68503f88b1c3a3027294/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d31372545332538332542424375727279696e67253230312d646533643337" alt="17・Currying 1" data-canonical-src="https://img.shields.io/badge/-17%E3%83%BBCurrying%201-de3d37" style="max-width: 100%;"></a>

Currying是一种将一个包含多个参数的函数转换为一个包含单个参数的函数序列的技术。
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBCMDsEFoIGECuAndBPAlgOwHMZJEEzySAjLCAQTwBcALAezxoDFUIAKAAQCGjAGaoAlBADETAegAmU2egFYwJSRogBFVAFMAzgxxs1UAHwQAKlgAOugMoBjdDhsMIAFgB0ABgg59CHRdRxYAWzDdPDldBXwIZgCIRxkAG1Sogl1TCABtNExcQgBdHiYGBht9AC5gYCivAHccAGtXWJwBLxZ0AmBmtuAC7HwCCSTmXQSQpjwcAEc9CBZhZLYAN110I0IIAQhRPEcjNgSZdwYBFoMIMNRUoxsMvd7USMZA-AYWPYh9XUWUUcUxWB1QRxOeECzAE7l0AhSCSuU32+lGz1kBDeUQYXhyHB6EF0AA8BGEnrpqjkAAa0hj6EihKHuARyBQAXl4AmqEDwb0oWwANBBKDy+WEBegJOyLPsANQixlsQxnYJTTmsuQ8aDCgBMYhyTJVjgwLlitDZEE5wyKBB4moNUCN7mEOE2VuSppw5rZPH1PAAzI6ILTqTlLEwpodjsY8BAbAJ9P8FN8QzbRtTbioIDJ3XcHq4Ma93vThVgWNw8LpYgkfqFMCEGKkaAxbFMcLicgBJOOJQIpATpTK6YWTT2Yb0KaOQ5Z4Zt7RzAtyzlHFnF7FkJHCRLwQADyRxR6TOq6xJf8gUTaIIVbkwo7f1Y9wUwQYGDjHcCwX0907JAsABq3qNLOEAAOIdgAEqgoo5hUVS1MA9IpF4ABW+jdL0wBwGAIDAGooAQAA+iRpFkaREAAJoVugKAsDEECQVsUzkaxJEQHhagxI4qSyFG4Ixqc6aEAAPJYZg8MIeA8pYYgyUSxIMFEciBDw0qyuwEAAPxWBAPIADIsCwNhiWYaitnYECGcZpkepYClKdEqleC5mI1P4eDCFsEAAErqXsmkkDpPkOcpgS5PgXm0QBwouV4kXefYxQkFAOn2r0PIAf51kmTwcVuTy9j+T5uhvugeDWHYplmVAUA8iVZUVW2pkkDJBEgMRbHkVYBjuMgiY3F13WcduNg9BcbYQAA3hAACiiyDsKs3EnYxwQAAvgc6DhBAADkfAWboCADkOhAGMAqBGKk+i7WozrjmacjQB6wl2vaPKGC4hDCrB4qSsKjg8pQRkZEI-kMOgegGvdJoTrEuovaato8O9fwQ6MP1ivyQrJEDIPwngwpyHjLCg4TRIk2TwrCB96PfRABCUwT4OQ7o0PKu4sOPQGiOFKMKMs1D5mTY4A2BJyuQkMtq0MCJ82oIOIkpQkbaglzk46lytNfWMVoWDwv3Y1Keu8IDIr42DJsQ3o-5mIKUsrY2csLakSu1Srdhq168PCqjn2jP5BtYxKWyB2bwOk8zJs8MT5uR5bMq8JScdk4HNNozrgeMynUeJ9b2TmHbDsy87Cuu4dXtw3IAa+4LuhmEXyVgIRQ1kRAXDbJGtH2EpVSda3REcfhoD-hA9gyMEEDlhgfyk5dsbueUlQ1HUyFMGhGE9H0cDAEI+iNFso9AboIH6HPkKL-BK9IfoKHoZh2+wMAZ+pPPyqjwAsj0UzIGkGRnZfZeiE14bwfrhfCQA)

```java
declare function Currying<T>(fn: T): T extends () => any ? T : Loop<T>

type Loop<T> = T extends (...args: infer R) => any 
  ? R extends [infer V, ...infer S]
    ? (arg: V) => Loop<(...args: S) => ReturnType<T>>
    : ReturnType<T>
  : T
```

---


### `55・Union To Intersection`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00055-hard-union-to-intersection/README.md"><img src="https://camo.githubusercontent.com/5fe10213192b9329fb890d04c69bffc5b52b5213ab53211f2c5a848cb5deef0f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d3535254533253833254242556e696f6e253230746f253230496e74657273656374696f6e2d646533643337" alt="55・Union to Intersection" data-canonical-src="https://img.shields.io/badge/-55%E3%83%BBUnion%20to%20Intersection-de3d37" style="max-width: 100%;"></a>

实现高级util-type `UnionToIntersection<U>`
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBCs0QtBAqgOwJYHsUQC4YgJIo4CmATgM4kDGOmKkC8zLjARgJ4QBaAFiQJQBzCAAoAAgC9+goQEoIAYl4BDMgBMlAVzoAbCkrQoAZuTCNFliAEUtJCnSzmoBALYAHXSVcliufhAq6gBuKijUJJo6aLq4HO4kEAAGqPQAKhhEpJQ0jigAPEgAfEnOEABiGGQQJAAeKh5eZUktOBSMOPGJBBAAvMjoWABMWeRUtPT5AOTGGBhTEAA+EAAsQ0u4ZHZFEMDANbUJtJG4+GyJM3MLAGSr67c4WySMLaWMOwBqaCQA7hBYEAA4mgcAAJLRsABcEF4OBw7gokL2bWovAAdAArChoqpCYCwMAgYDmUAQAD6FMpVMpEAAmhgtNUAMIYdSJUHkRLU7kUiBE8ydBIDdKZYhjXKTYp9MRIA6kFDqAxhLgAfjEAGloUgFL0dsqINCUCRguQFHV5YqxGohIiIEZTNUPjqdsEMGhNGqPgaIEaTWQSSByTzqRA0vYcBAmSoqAZgyH+WgPFUI4LEgBvCAAUQAjloVLoADRZw65CAAXwgxjIGFcECm4lT8FR+a8wnswGi+imAq6EGo0fs0oA2oxMyXaPkc3ndIVBigMqMchMsNNZvMNmsNo9tkXLuvbpuHk8ikUC6PxzhJ7n87ORYvxnl8qJRM662upgpls+0NC1q-tyQcinmIL59Dse4fhAtzfr+Qz-k8QGnmAAC6AZBnGvLlIyOD8NUADKpAIuhGF8sSoDvBAeGqGQiQcAy1QUBgujRFgtqwvCiLIhQqKYtiuL4tAwBhBQPxmFAnzfH8jHMXkbFwgiSLACi6JYjiZB4rAwDSSxKDtOJEAALJVIkTKqLorZCPY0LsQpXE8apuKEsSQA)

```ts
type UnionToIntersection<U> = (U extends any ? (K: U) => any : never) extends (args: infer V) => void ? V : never
```


---

### `57・Get Required`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00057-hard-get-required/README.md"><img src="https://camo.githubusercontent.com/f7d8061636ad216b5a17c533b2fa23b0ccd7914d025fd67a3834b00466faadb1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d353725453325383325424247657425323052657175697265642d646533643337" alt="57・Get Required" data-canonical-src="https://img.shields.io/badge/-57%E3%83%BBGet%20Required-de3d37" style="max-width: 100%;"></a>

实现高级util类型`GetRequired<T>`，它保留所有必需字段
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?ssl=23&ssc=2&pln=21&pc=1#code/PQKgUABBCsDsEFoIHECmAXCAlVBHArgJYBOqAJpIgtTZQEYCeEAWgBaocB2A5hABQABAF7su3AJQQAxKwCGxMtPzpCAGwDO0wpwBmqYmEpTjEAIr5U6lQHtOhqAEkAtgAdVqJ6k6Z07CLLIAN1lOAGNyCGU1CHQGF1QIAAM0dBwCEnIAHgAVAD5EgBoIAHdWQlDWCFInWW1NWVVVGL9SdNJFHUJUVTJ1ewgAMWtiCFQAD1lXd37E2fQ+qFj4iAcIAF4UDDSidsyAbwgda2sALghOfCc6fSK6eQB+M6tibV4AX1yIYGBRsfjQ9ARdDWCDXCAHI6nc6Xa4jN6UWaJfqfABqXWKEFsKEI6AAEvg6GdWOh0C51CdvvMKgA6ABW6mpw24wDgYBAwEMoAgAH1eXz+XyIABNaz4EYAYWsZASuP0CQFCt5EHZhiWCRS2wyZBynw2e0oAG0AAoQbQQADWqAY1h0EGy-k02WNAF1foDOL1sHgdlk8i6IPcICazpxUIF9M6zk6jc6wPCwFzFQq7ZZMOLZOpLDyk-zlRzCK5hj44gkDgBRAgNIplv6oAEQN6HYjWJwQADkAjVCAqDXcPEswCiGjbqpLEFCGazGwNlBr-3QmQr+AamQ13q1+0OxxDMP0AG5QQ8nugXjwG7kihDt9CrvpzxfZ7WAYvK6pV1t17sr1D8B7UJ1QzIA87mIR5Ij-ACIg+S8tx-CDtCg3IH1jBMQGzHMlQGMVfDvABlQEyXQjC81QyhPlwuRSAga0xQgdRrFUKJbHJCBiVJclKXUGl6UZYhmTgYAQnUYp9DIiA0VQDF6MYmxOBYtiyQpYAqVYOkGSZFlYGAaSmLksSAFlhgScU5EaLxuEsIkSUUzjuPUvi2Q5IA)


```ts
type GetRequired<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P]
}
```

---

### `59・Get Optional`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00059-hard-get-optional/README.md"><img src="https://camo.githubusercontent.com/f4c85bf1868050e69f5bce157913d1aab0e5e6d3e0c2f409abd615894636be3a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d35392545332538332542424765742532304f7074696f6e616c2d646533643337" alt="59・Get Optional" data-canonical-src="https://img.shields.io/badge/-59%E3%83%BBGet%20Optional-de3d37" style="max-width: 100%;"></a>

实现高级util类型`GetOptional<T>`，它保留所有可选字段
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBCsCcEFoIHECmAXCB5ADuglgPYB2AhgDaSII21UBGAnhAFoAWqnxA5hABQABAF4cu3AJQQAxG1IAnACbSArgXIBnafmIAzVHLBUpxiAEVlqdQRKGoASQC2OcqgepimdBwikFAN1JiAGNUJVV8cgh0RhxUCAADNHRcazJyAB4AFQA+eIAaCAB3Nnwgtgg5V1JtTQpIrzjCPCI0iB18VHIFdVsIADFCOQhUAA9SJxde+On0Hqho2Ig7CABeFAwUlop0gG82wkIALghiZQd6fQL6eQB+Y6s5bV4AX2yIYGBhkdig9FCowgQC4QPbXOR3CAPJ4QZ5UabxXpvABqHUKEBIKHw6AAEsp6Mc2Oh0Dh1IcPrMygA6ABW6kpg24wDgYBAwEMoAgAH1uTzeTyIABNQjKIYAYUICji2P0cT5cu5EFZhgWcSSmxI2xyq2wDixWQKAGtUIxCDoQVQANoABQg2ggRpNZsyPk0mWtAF0vn9iN0IAAlVAAR2U+EqCiy2Q9EBuEBtx2IqD8+ndxzdVvdYFe7JAXPlfIgmUsmFFpHUllzef5SvwTkGnhicT2AFFgxQCk3vqhfjC2nJCA4IAByAQqhBlOrubiWYDhDSD5UNiBBUvltYWqgdn7odIt5TbNXNDUZPY6A7xs4XOQAbiBt3u6EePBh2QKoLvkIf0NeL43nd+O9bDID1SbYTzPCBlB9VB2gTBQbzBCFIMlGD-leV9b3BY4kOg7RUOyH8MzADlK15foRQaIYAGU-hJCsSMVNlQCoN5KNkSoIBNEVIUIchwhIUkIEJYlSXJdQqVpek5EZOBgECdRCn0ZiIBRVA0XUHi+OIAShJJMlgApNgaTpBkmVgYB1N41I5ggN4AFlBjiUVZHIFweEsAkiV00TxOMqSWTZIA)

```ts
type GetOptional<T> = Omit<T, keyof {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P]
}>
```

---

### `147・C-printf Parser`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00147-hard-c-printf-parser/README.md"><img src="https://camo.githubusercontent.com/5edd12998114c1d3eea984e35476de8ee08d9ce3605328103ddfe6238e13bd68/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d313437254533253833254242432d2d7072696e74662532305061727365722d646533643337" alt="147・C-printf Parser" data-canonical-src="https://img.shields.io/badge/-147%E3%83%BBC--printf%20Parser-de3d37" style="max-width: 100%;"></a>

分析输入字符串并提取格式占位符，如%d和%f
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBCMAsDsEC0EDCSAOAnAlgOwBcAzCABQEMsBnAUy0mSSeYYCMBPMnAcwgDFyeXgAoAAt0wAbQTQCUEAMQALSgBNFBGgFsM0zUkk5NWcpLAMFliAEUArjSoEcAezzmoAFSV0aEHFQhyCCJbPABjJ1c-PDQIaSFbcm4aAC4IAANsfGJ0gDoIL39g0IiXGNNJZwB3ANsAgmcILMIIKmctGgIlfF4qoyVg5ywtcgInIXyAGRwAa18u-xT3DPT0sIZm4mEAIi9fLAdbSQI-AIBSVVztgBoIWAAmWQBuBlX05cKAsJVJSRohfY0ACOthwBwC7GctggDSalFoMO80QwthOjlwQkCeHUNAAHgQTBFEb4iEMRiddOQwjQlM5JKo6AFDHMMhd0lj1OkzkQ8vwhhA8eQdH9bjgSF1fPgUWiCT1ThldkjwUcTkULld0rcJXDqDR1MrjvKggRbLpfOkANoAcgZYStAF08ssABI+eXakYYDA9JavVYEdgYBxhXAYAgMANBtCuAl0qgAWXIGAgAF4IABvBhQMJpK3fShW65Z1q59E9QvF1S520VqBQZy55wRWt1pS57y4ltQIi5oiVUZdpq5jDObJ0FsAXz97wYAD4IAA1HA0KoQKIAcSMztsrDSSjGGCoKWAwAIVG+uQAVlRckNuMA4PAwCBgOZQBAAPpf78-78QACaUJYNGDIQK6Byfr+UEfhAL7mJGvioDGWBxomyZppm2a5vmWBWgwR4QFaZZCHhUBVoRNYMA2hFNgQpEQG2hEdvRPaEX2zgDhsw6joQ45gFOYAIWQ8I0KQGIEHwZKjAAPB4twAKoCvi-yqAExHcBa9qphAmnzmmHhKZo2IBOkAAk6b4EQdAQAAShOZzmZZ1kLhOjl4FZwEAMoTu8UAAPzCbqYnZJJwwyWZ6beZqi6GSpARzJCJBIYQKGSAmSYQAFFq5Dl8m3MlsZpWhFoLvaWlpPJs4MBVb4gJB0E-gUDgnKg5C0AEDW-rBr44DoQwnEJ6YQAAoiCpi3MNuJBkSE7BChWiEaICFIPmvz-MkVDAKiOBpXhgmBr4YRtQ42kWgwk3TQQ0mjYkkjSRQQXiaF5LSVaVqzrcukfedU00BE11jXdD20MFhDPTJVoAIJ4Jw6m5O9n32rO31QBdf1XTdpj3SJoMSVJV1WnsEAGqq5yXAjOk2n9DrI0WqO-f9mNAzjT3469RMk-KZzqhTX10yNDMY4D2OPSFbOE0qhyGmq3Pkx9lM1kjKMC5dAO3SLIOs2FBMc1LpMQNy8Py9a7EDkr-No4zwvA6JWsvRLgJUCqXNKEbn1Wsx5s-arTMa7bYva+zktO9L5xAm7Ole-TPvWyzAf266vyNGcBHnkMkpkxH1rqYWFHU1HKvo2rWM27j4M68HztqrzXv2rV9WdTBfC2FgEpeZoh4N513VgKAc4QJ5KgQZCLetHS22uAR+4EIex6nuervXreWD3o+wCCFQVR0P3S4rmPkgT3gU8HkeJ5nheS93g+CDAG0B+REf-fxunaA-H8ALHzPp-zxfN53s+r4gA)

```ts
type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<T, U extends string[] = []> = T extends `${infer R}%${infer V}${infer S}`
  ? ParsePrintFormat<`${S}`, V extends keyof ControlsMap ? [...U, ControlsMap[V]] : U>
  : U
```

---

### `223・IsAny`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00223-hard-isany/README.md"><img src="https://camo.githubusercontent.com/73e51b59e752ffc78738ce5865741b73de3d91d543460de9cf9765d84834c4a5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d3232332545332538332542424973416e792d646533643337" alt="223・IsAny" data-canonical-src="https://img.shields.io/badge/-223%E3%83%BBIsAny-de3d37" style="max-width: 100%;"></a>

编写一个实用程序类型`IsAny<T>`，它接受输入类型`T`。如果`T`为`any`，则返回`true`，否则返回`false`。
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?ssl=19&ssc=10&pln=17&pc=1#code/PQKgUABBBM0MwQLQQJIGcCCA7AnpJihR+ARjhAAoCGAbgKYA2EA4gwK5oAWA1gPY0QAFAAEADlS5sALtwCUEAMScqAJwAmi6QEsGaMPgWGIARTZ00Urbyz6oAZV4BbOpedoIWqQHJ3HOgDM2JileCDUXOgBjKQ9-CBxeNghleggqCBoqdjoIAHdPTggAAypcIogpHFE6ADoIABVOLXdmiHNqyK0shnJORlFAplymhhzc3hVuLSwAczyCiqb1RHEVSoaq80iVLVEYx141IPMAGjymyMLI0raAD1EJmJKyjKyzFqxFnIOj0YgMCgoOoobzuLJoUIzXiHCqhbhYXi5NIkRJPUo4crDOifBJsLwqHJoNiiUQEtBoaZzLSOUQMLSdKTYciXKLcNA1WwQBxnUagvI7KQ5dLaOnrSrVYroJkAHnqAD4imdhvTClIqNxzB4sKJpBVNsV6kVgXEioaPO5nhizgSpGwVJ8ilIVGZFRBeFI+ip8mg6NaXHaHf5wXQjZy5RAAGpaOhI6wsTwACTYJAAXMkpFJRGgU8BgFI0JcagArdkTGbAWBwMAgYD6UAQAD6TebLebEAAmokVBAAMKHHIJugExut0cNiA1-TinJS3Cy8MAXiE0rscsE8gX4bsd0FWDUYNwEAA-BAAIwQNPQeR0W67-fL1friCbrk77H3+rHs8XmDyfAnp0zAgfA0yDXQ6HwMB6zHUcGnMGIewkTUYNbCda2pB41j1CUAG8IAAUQARzYLIznw+4ohiABfCB-BUJwIC8YRp0QS5umxGZzGAEU0C8Kd9WuH13CXABtfByI6KRpSIkiGGlWccGldE5TOQC6DlFTOQkyjpOIrJ5MwOc2D3AJpjoNQVNo4MNJOcSKOiXTZIMmVjPhREsEssCfRsuzJMc-SFOlLA6HoFRPOszSoG0hyZICwzFIsHZZnC8CfIAXTrEARxQpsIAAMTtD0hy5QUs2ynK0Kg8AoC3ZRh1xbsIXYSxrGzdNM2zXN80LEsajLCt4GAUo0FyId8HDKMYwgJrtFatNOAzLMczzAtOGLUsVHLStgBmlqsD0GqIAAWQmHIe2UBhRlmcx5sWzqVp6jaZmrWsgA)

```ts
type IsAny<T> = (<S>() => S extends any ? 1 : 2) extends (<S>() => S extends T ? 1 : 2) 
  ? true 
  : false
```

---

### `270・Typed Get`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00270-hard-typed-get/README.md"><img src="https://camo.githubusercontent.com/570994267f9fb29d1837673ebf9377498228a8917a83b587d91aece1a0ab6ef8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d32373025453325383325424254797065642532304765742d646533643337" alt="270・Typed Get" data-canonical-src="https://img.shields.io/badge/-270%E3%83%BBTyped%20Get-de3d37" style="max-width: 100%;"></a>

lodash中的get函数是访问JavaScript中嵌套值的非常方便的助手。然而，当我们使用TypeScript时，使用这样的函数会使您丢失类型信息。
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBBMDsAMEC0EAqBPADgUwCYQHFsAXSZJCysgI3QgEEA7YgCwHtG6AxAVwgAoAAgENmAMx4BKCAGIWwgE74ZPYgEsANgGdZxbAFtMG4XqQa1ehcI1gyM+xACKPbFvUdbUVC2wQA2gAGAOYkARASjADG7owQarEabLjCWiwAuvwsxMSYWgBcwMCJyakAdJFs+sC4bJFawAAspQCMsC0ArDIhxNJqOsIQAI48Fr4VjABu2Ixq08QQPho4CuFsK8KRka5a8UEQjK56+BPWLjrxEABSwicAypEKapjEpRAAEmwA7thTCgA0EE+Pli3wgFX0vmIbDQWGw90ezwBPB2jD2EWiag4OnMAGtISw+oDNBoIPphHiIOg2HxElp8ZDYXFGGI1mSYq8AOoWFhoW4QJrNADkOh4mHBu38qAMRhMvgAMqMrCSMDgtBksjl8oVcD9qIkglpSvo1A82Fo2GIXuDgMRYVoHk9iMBRIxqVFdkhbaqHc8kA0kM0kNQSMJgDI9IZjKZzJZrJ67dIxNgTDwFNgAZgFGxlho6F6JcFQhBg+DXBBMGadnrsK8AMKiSnUuKRgxzOLEAD8nggXDWEGwAA9hC2-t2AuPiFoyF7fAAREwDAC8EAA3mQoCy2HlV+uoMXFNu13vjxAThoXNvBZvqIpBaOT3uKjxmNuAGz3k8AXw-x-ikXPOq4NuxAKC4P4QN+u6LIkl6fGsGi4IKZCft2M4MBAy5EMQAA887EMIAKCtBbCCgAfBAhQQIKcEKAhSFQGhABCGGECQuELoRm6lDeCjlG6xBkRRwAQK+06MrWLFYex+GcWwbDcbe5GUSup6nNgl7XreAJPi+IkQWQ44BN29CbNsEqKFY6DnDorrzGmwxqGm+AXKwhKRPIGgaNMISlN25EAGqzJ8EAcIQFhvDw1DbhquQFDa9osKUABWhprEEwBwPAYAgMAtigBAAD6RXFSVxUQAAmtSKy1kkvhvNgaaFaVzUFRAOW2GhUmoACADS5HLj1-YDnojC4DoeJUmIaBkB2aB+D1aRkNug2DiNY0QAEAAkK7xEmKwAEqfqU227Q1EC3J+RnHrN+1DWt43YJN00PrNXV+PtaQArcpG7lA24HL8u7-T8DV5SATUtSVaCHBA9Z0jokOlW1uVqIYazzGhKkAKLDNYAJYwOODRBB4RZvoVGCDOSDudYXmoq4wCqJoWhIWAaGRCkZbLn4ZAE0TOE4zw1jYVJeEEVRxFkYRNF0aRpEfnz2DRNhgvC6LHFUVxPF8c+AnyyJcsK4TSsC7jGgi2xYuyfJPFS6uqnnupmtybbADcYL8W+EGG7zxvK6r5vqzJzs28IABedtiNYdI+77-Mq2bFs4VbVGuqUg59EcdsAw1PuLWzjJiyxR6rFuO7Hjxh6-Q7F4h7b1c6cQb67ihv5RABeDAaB2DIWQV5yQpEfblH2g91AxGwfBiFgChYD5YjUO8AorBnbcei5BDC-I3P4BQORtzyI1VKphA5rnjE+QLNksWFJO7nJalCjpZlzqMFo3wKGQAVBafbDn5ib9orXy1PFe+KVShpQyggYAZ8mZYi-hAAAsmsXwtYPJ0xCJfGKIC76JXAWlbKuUgA)

```ts
type Get<T, K> = K extends keyof T
  ? T[K]
  : K extends `${infer R}.${infer S}`
    ? R extends keyof T
      ? Get<T[R], S>
      : never
    : never
```

---

### `300・String To Number`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00300-hard-string-to-number/README.md"><img src="https://camo.githubusercontent.com/9c2ef80d1bda8fa241ce44b3acf1b562962b2143a34c39f1372c09c0572afa2a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d333030254533253833254242537472696e67253230746f2532304e756d6265722d646533643337" alt="300・String to Number" data-canonical-src="https://img.shields.io/badge/-300%E3%83%BBString%20to%20Number-de3d37" style="max-width: 100%;"></a>

将字符串文本转换为数字，其行为类似于`Number.parseInt`
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBDMAMsQLQQMoBcBOBLAdgcwjQHsIA5AVwFsAjAUw0iUWZceoE8IAFLAgMQCG%20CAAoAAnkQAHADZDaASggBiABYCMAExVpalWQN2IZWXRgEywjZTYgBFcrQDOaLERxWoAYXcA3emgQAhAu2MImZhaEJME4VHQYADQQAO6qWADGqhB06v5OECYA1rQQAAYUNPQAdFIaTrQAkjhoZdWeEAB8EABqWLQpEO4QAOKmABLk1ABcEKpoaFJO08DAaE5Z1QBWTtVEGHjAcLBgIMBWoBAA%20je3d7cQAJpE5BgQPpql4-Sl9383EDOVjQ7CkpQAKkRweRZLQADzg5IAVQgtAAHrocJoCqFcHgANoAXQgAF4IETumTwaiMbQsQUygASADeuAAZvQIAAlAC%20LPZnJQPLKEAA-BBIdDYXCUMl8dUFUjklzCd1ZkjgaDSo0nJUEgjKRKaZjsRAAOSwM0AHzNAEZrWaAEwO6AOgAsDoArA6AGwOgDsDoAHA6AJxmsWEDCOCCzNkWBqasEQHXoMJ4BHJPikqOOQ3U9Emgr4gVvLnJBXVUuoYmMcU6vX0OFc7qFummzCORhQetONN4uHyhUoQlZzrd2MpvuYAdD6oj5LxmQNcdQWZ8JMQoiNjAy43tnEz-DI-f0oI4dhEnMUnOpo8ZyUwmTwlCdVu0s%20d2h11Cn01M5kkXxM1n3wNBVDNQlhQgCdxSAkC6TwcDIJgqA1wlbd4ibWVyUrJVz3YVVGFmHBaH8BgwEuf4-glZxAi8AQGgKaj7kBc4sH0fZAhBZNmQgABRABHcgLGSfi0TBDJAh5CA2QwIhKHNMQeNoRAsgsUC8GcYByFcZczU3CAMkY5xr0YcTJLQOEhJEmQEUwqpdwtM1OmSWA30ScyJNoKTrOEix7J3OEzW9VyIE9DyvMsvzbMCrCnNtZ0wsSyKoAsnyrJsgLISCp1AzCx1-VSgTvN8rK7Jy%20LgttIMxH9K5GQAUhc5JSPIyLCQuEBrhYh4%20FecDBV0JYet6q42Mo8AoG6FB1AwUp2BeN4nCIGRdLcHBljmBYlhWNYNlUbZdn2Q5jmAIQnBSehGG6PoBhCVb1vcLb5kWZZVnWTYdj2A4jngYAVrW1xnpuiAAFl9lKLx1BkTTnFmV7do%20g6jp%20vBTnOIA)

```ts
type ToTuple<T, U extends string[] = []> = T extends `${infer R}${infer S}` ? ToTuple<S, [...U, R]> : U

type IsNumber<T> = T extends '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9' ? true : false

type IsString<T, F = true> = T extends [infer R, ...infer S] 
  ? IsNumber<R> extends true
    ? IsString<[...S], F>
    : IsString<[...S], false>
  : F

type ToNumber<S extends string, U extends any[] = []> = IsString<ToTuple<S>> extends true
  ? S extends `${U['length']}` 
    ? U['length'] 
    : ToNumber<S, [...U, any]>
  : never
```



---

### `399・Tuple Filter`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00399-hard-tuple-filter/README.md"><img src="https://camo.githubusercontent.com/660f4a883a715dbde97945c77e17c15ff5d3962213f07f36a20543a3c593aa18/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d3339392545332538332542425475706c6525323046696c7465722d646533643337" alt="399・Tuple Filter" data-canonical-src="https://img.shields.io/badge/-399%E3%83%BBTuple%20Filter-de3d37" style="max-width: 100%;"></a>

实现类型`FilterOut<T，F>`，该类型从元组T中过滤出给定类型`F`的项。
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?ssl=22&ssc=6&pln=20&pc=1#code/PQKgUABBDMCcsQLQQCoFcAOAbAphAYgJZYAuOATpEojbVQEYCeEASowPYQASAhgHY8AZmgDOPCAAoAAiPaCS7QgGseASggBiABY9yAE00lMuTYT6CKYKhpsQAimhwiShdnytQAkgFtsObzh8JBDiJIwYeAAGRKQUAPJoJAA8KAA0BAB8kRAkOsGCxGTkIhDsiRCEZN4lcjlaeADmhABugTnhUfjZguTs3nV4Rn4QkSiRAHQeBOzkEDgAHjy+uKlUkeskIlRhEQSFFDgGALx7seQJyQDaAIzpAEzpfGhYWOnQALqPz1gZEMDAEBu9ze7zW6ymvwAaoQcAB3Up8CAAcUqXDQ9AAXBAtCQSBgRBj-psAMZacYAKxE4xmDWAcFgYBAwCsoAgAH0OZyuZyIABNMqzADC7D0eC4B3Z3KlbIgTKsOzwMSKFxSc3mZD4ehK-EYl0+BHSAFU1RqtSE+Lr3hATnrficUCbAmbLmYLLMWOlxl7XRQIABlUFQAD8p2ViSSly94wD6Xw6UuLCtC1NJUu+CtIeNWMjXsN6UTGSoWMNVDArOlUtQTmCgp4IickorPLlhF8M2CCogAG8IABRACOaB4rz78wixOCAF8ID0+hAAORSBWIUnD3B8BpOYCJYgiefyjoQYl1hs2qi9sc4CdJAdDrBJJXxcN6x44VrkDLx94ZT-ny-X29hwffZzmfPg3wofVwPfT9AW-X8oAvcdkkA+9H1Aq55x4edX3fKCII-eMsPneDVkQ-8UMHID0JVIEIGgih0mI-CYPjW4F2w0i-2Qm8qLQkDaIY8h0nY4j0jQTUcAKcC9HSQRh3rL4XhY30AB96O+CB1Ik0VpMOWC6LEmcFJwLjyJ41DgLOQS0G8eg1I0l4tIgHSpLMQ5cMgzzZnUp4nO0yS9L0Aynjshy-KwZzXKCrjQTLEBGybGV8DQchcl9P0yHxRKm1lZlQCoX4-R0cg8A4VKIFkLAdzcAlsVxfFCWAEkyUpalyFpelgH4ERYUsKAoRheEqpqvg6pxPECSJERSQpKkaTpeBgBGlxasKiAAFkZjwQUdBeQJN3GhqpuambWvmjrGWZIA)

```ts
type FilterOut<T extends any[], F, U extends any[] = []> = T extends [infer R, ...infer S]
  ? FilterOut<[...S], F, [R] extends [F] ? U : [...U, R]>
  : U
```

---

### `651・Length Of String 2`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00651-hard-length-of-string-2/README.md"><img src="https://camo.githubusercontent.com/bab9da18fc14f2b7d1e6e7ca0e99f833416333b603fb00293ec15508c7163e12/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d3635312545332538332542424c656e6774682532306f66253230537472696e67253230322d646533643337" alt="651・Length of String 2" data-canonical-src="https://img.shields.io/badge/-651%E3%83%BBLength%20of%20String%202-de3d37" style="max-width: 100%;"></a>

实现一个计算模板字符串长度的类型`LengthOfString<S>`

该类型必须支持几百个字符长的字符串（字符串长度的通常递归计算受到TS中递归函数调用深度的限制，即，它支持最长约45个字符的字符串）。
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBBsCsCMEC0EAyBTAdgcwC4AsIB7AMwgGVcAnASxwgCZJklW3mAjATwkwFcANgIgAKAAJ8aAE3jwAlBADE%20AIZUpS3OgC2ABwEqtSATS1UVAsM0U2IART7oAzrhpFMVqAEk9AnVlwIFQhcLl10CAADDBwCAHkSSlocAB5yAD5IkNVAgGMLXMFDZ2yIv1jCUlKQnX1iiBdk7FEVJwg6CABtBgBOAA5kNCw8SrIkumwAXRF8XFxdJwAuYGBcJ1z8ADoAKydNoipsYF6%20uTlFzyjIyLXmUPCIABUABggAXiGKhPHUgCISIhEX7pCArCAAZmY10il0e%20Ai9wi2j4LgafF0ugOgUaEzaTnQADd0OZhPg%20JgpFR0BoNmoVLkzG0BO5miICBEUXwLBAqYUqE4aESIPkBIUDK53MQyOyGtQJhByiN2kyaNpTNSINxqlJ0LoCFKeeg%20QKhSRyQy3JhhRYBG0Oo9yAAabKGZXO0xojFYvFynBtdEhIhBDhEPiBAAssGFqnMDOJTJZck2lxBADUaOgAO7EK0AcVMAAk%20BxFhBZvMlis1hsdnsDkc4PAwCBgFZQBAAPpd7s97sQACaoaoEAAwkQdRAC8SIr3Z12IC2rIjPiNvr7sGkIOgAB5aCk%20prOgCqW93WCkbRUmC4nUm7y6kxBH3Ip73F6iABIAN50EjEiAAEoAL7fr%20-6pkBWTMAA-Cu8SJOuKSps6nSbGhR7OleXCPswpZHp0ADkioEARkxtiAnZzr2TzOIEI6tCUVHUYuqqYlQgTLl%20EAAKIAI5cgIzpeE4jxUI4EBARAJBUEQ2gQARYiIkgtJCMMzjAGGNC2gRS5hBE%20T4m0HydMwwmiY4KR8QJKQxKuCFNCkBEEekzrPOkLmmSJYnoJZ-EWDZwzwT8G4EfAznOvA7mOp55k%20VZ-m2UFiGhQw4WMFFMXeb51mJfga4OSl4JpeCGXeF5FnxQIAVfPZEyOfADDguGaXhqVEBmVllXVXZwX1Y1kZpbAbUdRVflVbl%20V1YVkbQGl0DDeVcVjd1SUFQ1TWwNAADsaVbQtsXZQlgV5bVqTTZtW19GlfT7Z1y0TadIXrTNl09GlPS3aNOXHZNZ3PRdfQ9M8aXwG5HllQdXUPb153bYDzxhS5ECyJ9S3fTVMP-XDQMNSDDCo4d40-Y9fUbdjCONSDJXg%201i2EytJ2Y-1AM4-1IOtTTI1o0dGPJVjr0UxtINDZzdNQ8TTNkwLWMg-NouQ-dEt88z5P8yDe3y3d6M9crUvw-zV1I-AN2a19PM62tKvS1bgMgx9pvc0TvOW3rrOu8DSMMGD0UQ1r5urVNBtuy9%20tpQwkUO-T0O6yHwcsxTYf45H4vO4HNtx6rlOe9TPu0wr2sB2dKjFyXpfF9gFeV1X1fVwA1vXDeN03zct63bftx3netzXPe933-cD4PQ9V2Xo9j%20PE%20T1P0%20j2HW1J9FZFgO2TE9hAABifDsfCw6ULqbSr32i6gMwILkDGERcEODREAImnuEsZZzAsyyrOsWy7PshzAI2wBXk4mZiSnwgOmLMN874SkwI-csL8qzv1rF-BsCBgBOFvvfKBwCACyBwIgjlUKpHAzhSwwMrG-Gsn96zNlbEAA)


```ts
type LengthOfString<S extends string, U extends any[] = []> = S extends `${infer R}${infer V}` 
  ? LengthOfString<V, [...U, any]>
  : U['length']
```

---

### `847・String Join`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00847-hard-string-join/README.md"><img src="https://camo.githubusercontent.com/290418811a4f4dbcbfd348a6bee7afd3bfbf7f1de855fd8c9c566ad07b733c53/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d383437254533253833254242537472696e672532304a6f696e2d646533643337" alt="847・String Join" data-canonical-src="https://img.shields.io/badge/-847%E3%83%BBString%20Join-de3d37" style="max-width: 100%;"></a>

创建一个类型安全的字符串连接函数
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBAcAsDsEC0EDKAXATgSwHYHMIApAez0mSSuooCMBPCAWQEN10IARFgN2wGcIACgAC6ADZIAtm3RIAJrwEBKCAGIAFi0zywFNQYgBFAK4BTfumwlceqAGFMZtmYgsI6egAczSfiwAzV0scAggAKzJcCBMrcWxPCAB3DWwAYw0INJZo2lcTfjN5CHiAa2CSAC47CAADevR+CjSbSwgNbw0zXFI8M0wIAF4IqKEAciQx5WbWjid+E3EOYY6vLp6o-vGWMYAaCDHaPYO0qYBuCGBgIYOWJFokU4p62pqAeQGWJf7cNmweMziejVKAvRoUSJ4cZqKbbY6HeGnVRXG5jFhqWhqJ6g+o1ADq62Sri8LH4ghyEDMUi8iXkgOwUgS-WE2AAdK4xlMPCQRnh9klghoSItii1cNkOOguhAQnh8OTBFKzIxtGZ9myzCC6g0mlBIbhxrC0fCjvsxkjLtdhmjaNjta8KATuhAbECXbhXEypBABBASWSivzBcLxMV8GYOLQWGlSh5pSQcPg8F8fegqcIkgkhbE3LhGHT4oy0595HT5MotWDdbyDRMjTtkVbbmNnriKAA+CAANWwZiS7ogAHEEgAJEy0SrtdhefiVK6NDKs8L8VkJ-DAODwMAgYB6UAQAD6R+PJ+PEAAmsKBvYSHSICP+q5T8+jxAd3pPD4IAAZEgkLwADwACr7AAqpSAAeaa4PIgiygQ+xdpB0GwTKWByqiYydsMQHId0qEANp4EEAwAEp4TBcHoQhECsnRxHMqgAC6EAUAA-N2FGoZyFBQBxv7-gBBF0ayzFgfstQACQAN6kQAvrU7a8RAk4CYBwl0WJECgRJMldnJMmgQZskKUpUCTl2FBgHSaTiKqEABCY4pWDYNYAZwXFUaE+DtkIBYMkymCTpwFYQABAAKnlod5BFMb5IkkpgjSTuFqiDJ2akRfsnCdnuICHi+p4QEBFgcPYpIWAVhVnu+DJeAmkreK40kQAAogAjiYXz7K1EE+GkHByQ5mAkN6YxiE1jxaOI4jdOG-DALE2DiPwLZgCirXyOGWQVU0YptLgJD2FomD8G8sReDmwz6uMkzKEI0z7RwNhmMd2jnegl3LDWt31lMYBPRAh2cPSRb9B9X03DdnL3caZqmic-3rdcpFmPgizaDthR7bM7SdN0ENXT9dawzs8OIv9gNaPwGiE990MwqTJoU49uPoEkR0nXTUOjCTcLk6zuBtOINj4Nz1283d-MHAj5rwvI8JmPCATwvg8IaEjn6uNk2M3ARFC9f16AAR1XXiABWskAEQOc9oZ0XbEZpYe2uwG31ZgDSbnVfBbTVW+6r1cw76Bmjs7Yu27Rte2bvs+P7wOg4FdOh7azuu1Ahse8bps+5b1vs7bmDJ7c9xp5HWfR7nfvW6s6zF2i9yPGXGfu57Ofm3n7SkrTwehxiWLN21rfZ97HfVyUov13cDxpAoSC+AESD4EgGvh67TF5VV1UHhAABiJhJV0AwYGYM5b9Vb67qAHZoCdrj0FeMokOIS2tJOGjTrO878Iuy6rpg65NzAByPwAUmAb49j7E-F+Lkhbv0-nOYAC4NBLhXGuDcCBgD8Gfq-IWN8mAJlcG9Gac0LDwM+l-JBP8UF-zXNuXcQA)

```ts
type Loop<T, U extends string, V extends string = ''> = T extends [infer R extends string, ...infer S] 
  ? V extends ''
    ? Loop<[...S], U, `${R}`>
    : Loop<[...S], U, `${V}${U}${R}`>
  : V
  
declare function join<D extends string>(delimiter: D): <P extends string[]>(...parts: P) => Loop<P, D> 
```


---


### `956・DeepPick`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00956-hard-deeppick/README.md"><img src="https://camo.githubusercontent.com/6276b9677fec174d899aa8ef7e229f31b393cfef2ffe880a1f6b698b9d6ac915/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d393536254533253833254242446565705069636b2d646533643337" alt="956・DeepPick" data-canonical-src="https://img.shields.io/badge/-956%E3%83%BBDeepPick-de3d37" style="max-width: 100%;"></a>

实现一个扩展实用程序类型`Pick`的类型`DeepPick`，一个类型有两个参数。
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBCcCsBsEC0EAiBTdAHACgSwGMBrSZJci0gIwE8IALPAJwHsaBDCPPALwFcinABQABRqw7d+ggJQQAxPXZMAJgpWYsYUvN0QAin3QBnAC54WAO21QAkgFssAG3T30l0xE6maWdGk18YgAaCFMlT3QAD1N3FWMIAFVzJzwfMN8TCAADIKJsgDpSAEEMvzD2IizTAHcWLyYAcz43D2MimwgAMRYmCGj2RxcALk7s8c6fcpYqACsIAF4IAG9SKEtB9GGIAHJ6Fkb0HeC1r0PtgCYABhOoKAAzJjw47dW7u423bZ37vkb2Y6nKDsc4QADMNyBEHugzwThoryh6023yo7B4gPe7xBWwgAEYoQBfU7EqDE0hTfwAFTxiwC2DyAB4ZrNQjtPkcAHx3YDAFYQDkQb77Q47CCksrUi50jAMwhEZlzNkcsUAH12j2elhUBRV3IgvP5guFByO4ogADJ+ZqXkaURq-gDxRLKRAqWCZYF5YrWbsVRB1T8nnFdZs1VAg1qdTD7HCaKG3Dt9YblgLNkLdiKzYTLVBUzbta8018Hf8xYSc1b88HC9bYfCixzUejyxWxhNSNyAGrPGoQKwQADiaQAEnwqNt6KZTFhjMNeaZjAR6AVZu1eo1gHB4GAQMBtKAIAB9E+ns+niAATRYfD6AGEWBoICP0Ex-OePyeIHvtK7EpYqRYWxLEZKluSWIQqX6GI4gSdhLDoAB+CAhGURo5zdOQFm5eC6G2Sx0AAN1fORolibUElQpoMLwSx7lfCAACUsJwhCIGQxiMwI4imF-TImPQJkqVCRJwKSaDyPiCAAG0Cjk2j6L6ABlUIFIYziyNgiAzCeSxGgAXVIDjBO9ZZpJwLhLAgKoaBYe4VkY7ZGJzdgEmyAASZZnOyfTtipQlQlkuSlP0zlSD8vjygAWRoISRIkrSdNoxpQi7BKKO00xdMaaT9LpXKxMSdKpJ2HYjIFIjX3C8TNIyjzljUvoNJgjKkr03MbLst1CQKTzGogJTCWyU5kJioTpMY-TQhUmS5IKLtQkmsL3m2Iraqkzr7KpKFjKZMyLNo6z0Fs+zlkSVaXLczzEiG3y3WkxJ9ICiAu2WrFtj4SwiEsFgamsMBXVlXBvWE8TioSNrGkKgCgJAsaQZEzkwrAQ9Pw-N0TE8O9XKyNHz2-fc8EcXpPFdVMAFEAEc+HYJxQnJqI-AITwc0eFh7F2ERKSQZdaZcPSTGAPgUmMMqAf4gB5OY6TeLx8JaKgqqgCdMuy0gCG2KgWBYFx4NIFlEXeFR5fsRXePeXFIdOe5Ne13XrHeFkLkNrFGhNs2oXobYraxLhbZ19A9feCUJRZMEXagWZ3aVu4iG9rLktOJx-ft0hiXJV0CBxhIlmk0gGaZ0xGSpmmnEZIGmSl31Ss5UJPu+37LCR24IAL9BmeL6nafLr1iEZKu2QBWv+XYaO+kJZv88Z9ui5L7uK+9AfdidQMk1CVNR4FBWGMrCB65+v7J6gNuO7nsuF77pedhX3YWQKLl17lrfTZ33NUwN-lLYT9qcwn2up8Lp3UuPc5SXyVMvcMOw75mkDHfJ2BQ8BrxHmPc0VZ+xzCLF-bK5pd7vwwfyJ2RY8Ap0DlZX+4pJ6GRRiAY8eMLxdFvOEBiSlYizloXQo8BNqGdgGkoN8EBbK3m0jrYWFhLAYSnDOOcC4lwrjXAUDcW4EDAHgsYGoMduy9mEU4URVgJHTlnPOYAi5lyrnXE0JR8BgDGBEeYPRPCoq9H8HeJQTh+aHH0VIoxJi5HmMaLufcQA)



```ts
type UnToIn<T> = (T extends any ? (args: T) => any : never) extends (args: infer R) => any ? R : never

type RePick<T, U> = U extends [...infer S, infer R extends string]
  ? RePick<{[P in keyof {R: R} as `${R}`]: T}, [...S]>
  : T

type MyPick<T, U extends string, V extends string[] = []> = U extends ''
  ? never
  : U extends `${infer R extends string & keyof T}.${infer S}`
    ? MyPick<T[R], S, [...V, R]>
    : U extends keyof T
      ? RePick<{[P in keyof {U: U} as `${U}`]: T[U]}, V>
      : unknown

type DeepPick<T, U  extends string> = UnToIn<MyPick<T, U>>
```
---


### `2059・Drop String`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/02059-hard-drop-string/README.md"><img src="https://camo.githubusercontent.com/5253e6370db9785f5f3f551d23043b281a8e6a8395a2fd527de21723c9636aab/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d3230353925453325383325424244726f70253230537472696e672d646533643337" alt="2059・Drop String" data-canonical-src="https://img.shields.io/badge/-2059%E3%83%BBDrop%20String-de3d37" style="max-width: 100%;"></a>

从字符串中删除指定的字符
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBBMAMCsBOCBaCARATgewA4QGUAXTASwDsBzSVFO+mgIwE8IBhAQ1yI4oHkAZgAUAFgCEIACgACnbr3KDRYgJQQAxCI6YAJhqIBTALa4ANh0MpTpQ5g6mNFAQcxga6jxACKAVwMBnIlJscjcoLDwIIhEDCH9cAwBjUgFSAz1ErUx-CAEcIwgOOJIKSgA6MIgAMWxMCAMADw4TUwMALkqAA26ifxoiZgSIMR8iWwFTVgBeDBxcYjIqAB4AcgFsbEZtAEIVgBoINcYVgD4IYGBDjZ2Vmm7OyrOANTSAdwgQiABxGwAJH0YbQgIjGuH8bQuvUyZQAVv4yrVKMA4EgwCBgG5QBAAPq4vH4vEQACa2B8dTY2B0sV+LliBPpuIg6LcAyGABVsGyfGYDEs2QcAKr1BqGcg6HIccjMADaAF0IDM5WcZmzhaLxRBOgASADeThcEAASgBfXX6uoEY0PKAAfggHK5PKWBAO0rK7oFB0NspONCBApZg1iHIWpT5grVBjFOUCi0oCsOpwTqsa6py0vNRsj0eKcYO7rKmYIspodpDJWWbvdxYO2p1AtNOpNnV9UH9gaG6AM6G54YgnogAFFsxrJTL5YqfcmR+nM4b8+6iyXbRhu72q2Ua-2vTP+xA7cOgRvB16fX77dhQ8tB76wKzYhF5hXKH2BcqL47Wks37uM+RnHU84QAWS6lrMeBXi+XY9rgfKctyX5sicXrIRekFLBuxYnK2EBAmymIgDiDIEvaAREOwHD+AERHEYSzKkCYtTkfeEA6kOACOPj2Acg4NAkiTkcauT5Ic0j3igmT2K0VABMAoykKY-i3HeQYQIklHUYqNC8fxRBLIOnH2Esj7oSsjCjLYuSTLsBwrKctnmWMBoTMwuzYXs2l8UkekGVxpjGXMpmOZZLk2YchyoWZFkuKFpzIZ5un6YZ-kmc+qzBc51n7Icjn2YcmWuXFHlQDp3lJX5AUQWlKwQIwEA+FEjWxHUAgQA4rDbIcDmjHlNVQFAzW5G1EAdRF8UlV5AnlUZqVxqs-W1dFLXWQtC3ZTVvUZZgsXuQlZW+TNgXVbV9WNeRg2te1ECdetEXdU521ZbtE2JQdKVHXNNV1Q1zH1BALXDaN625ZFq0XYD11jcVQ6TT5yWVU+n0nT9TX-UNV03bZRAAr1YNo5dI2Q0Ve1TW9COmcjZ1-QDGNdTluOnb94O08TL37fDs1hl9jOozThOY4cRC499-XM-zUNgCWYBYrR+LVGS0QGsQBhgjRstMhioA0GcBBZLEzCknU-jYKY8khOCwKguCkL+NCcIIpgSIoogwCSv4rwuNrEAvAY7zG6bQTm0CIJEGCELAFCIiwvCiLIggLv+2b5B9FAZwALK1LEbBaKY0mUAEwdW+HkfRw71DMkAA)



```ts
type ToTuple<T, U extends any[] = []> = T extends `${infer R}${infer S}`
  ? ToTuple<S, [...U, R]>
  : U

type ToString<T, U extends string = ''> = T extends [infer R extends string, ...infer S]
  ? ToString<[...S], `${U}${R}`>
  : U

type DeDup<T, U, E extends any[] = []> = T extends [infer R, ...infer S]
  ? DeDup<[...S], U, R extends U ? E : [...E, R]>
  : ToString<E>

type DropString<T, U> = ToTuple<U> extends [infer R, ...infer S]
  ? DropString<DeDup<ToTuple<T>, R>, ToString<[...S]>>
  : T
```

---

### `2822・Split`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/02822-hard-split/README.md"><img src="https://camo.githubusercontent.com/6c1469efb580092f76de798f29be3dd11ed2eece67a2c0690f39d9d5310404e7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d3238323225453325383325424253706c69742d646533643337" alt="2822・Split" data-canonical-src="https://img.shields.io/badge/-2822%E3%83%BBSplit-de3d37" style="max-width: 100%;"></a>

众所周知的`split()`方法通过查找分隔符将字符串拆分为子字符串数组，并返回新数组。

这个挑战的目标是通过使用分隔符（但在类型系统中）分割字符串！
:::


[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBBMAc3QgWggZQA4BsCWAXSySRxBARgJ4QCCAdgCYBOApgIZrYC2A9jUxAMJcAzrjYAKAAIArAGZNcATgDsASggBiABYsGdDSIbYaAc31Y8GnQxaV1uAK5YmBAurcQAivaYjsPF1AAKpp8AO5MmJgQANY0XKE0EAAGQua4YipJEBzymlx6qTi4QhBsBkamRrhcpYlWNhBcMhBC9qTlJiUUEJhcXNEVEDJcDKUtTOg6LNUMADS1eswODDQluCEQvKGlDNbkAHQQwXzGXCxRTRDr2CUAxtqRTCZ8N1c1hRZluIYm8932QkGZQmUxmf3suAgRiuG1w5HQfCE5BETA4AEIAhAAGIjCBMAAeLA4TgAXJikhTigQ4QiIMxWphIQBeNBpAA8AHIABLYNEQLnxHZ8chcewAfg58w5EA5AD4oMBgC08vZMHpSHwANrc3mSmUC0J6jk6JhGkXijkAXQIFKSmPlADVsExtjwIABxPBctokiCaXC4dBCEmK4r3fZSIT7EbGYBwBBgEDAMAp0AQAD6maz2azEAAmqLRoI6HwuUxmBmc1X0xAkymaS8hABRACO9nObMC8wAqvKWWI2ahZRkIEz5ag8fjcE86CVAhAxRAAIwQX3QNQE6f0EoDocjsdoSdb2cQbsL5ermBqRffbyXmTnITOMAN1lFQdHmclDrGeaoJsAAqftuLTfBUfZQs2bYdqg8w-vKm5fkMj7OFAi7-kBiEgRyHIEGhh5YSeSQACQAN5GHIowAEoAL5kRR5YQA6NF2lAbHnpqVHzPsPEYO%20Dp-oBsrWuxUC%20pqIlsb6E6ESUJHkTQlEQLRZEYXRClKcxrGiYunHcbx7ICWgQmSex4moJJ0kSamICVtW2ZHD4kL8CwT4lPZOa1smnDoCMkKvqRECtu2mDzE2%20IIrckI0UMDBcBwMoSA2SD3OcmBPMYPjABC2CYEIuEvvCfC3K5PijhAmoEOFkW4GywUweyOp8gaQoQOaEpSgAXnK8zajyzWCiabWihKlqyrKsxVRFTBRXV0GYIOjX9fyg0Vu1RoyhNFVNUaBpGiaZojVa42TVA1UzbV9ULXxeCcstLVDetUo9dtXJGtgRpohtu1GlwRqGlKMpSiwRoMEapqA2av1GvYRqjSdU01XNIWLe%20OHPVtEkI2d02zVdqO3ejMrdZjOFjRNiMXcjDXvj%20UqhNo04AG7li9P5YxT1opmAaYeQ5WL2Aw6yMag05BnZfNeTz4BQOO2hrYWLRcJgOU8MGfoBkGIbAGGmgRlGMZxvA0DACwqzhAwBCOs62xCMrqurL6-qBsGoZCOGkbRgwsbxibdsq7gfirFbEAALIjHw-APOlzzq87Wtux7Bve4myZgEAA)


```ts
type isEqual<T, U> = (<S>() => S extends T ? 1 : 2) extends (<S>() => S extends U ? 1 : 2) 
  ? true 
  : false

type Split<S extends string, SEP extends string> = isEqual<S, string> extends false
  ? SEP extends ''
    ? S extends `${infer R}${infer V}`
      ? [R, ...Split<V, SEP>]
      : []
    : S extends `${infer R}${SEP}${infer V}`
      ? [R, ...Split<V, SEP>]
      : [S]
  : S[]
```


---

### `4037・IsPalindrome`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/04037-hard-ispalindrome/README.md"><img src="https://camo.githubusercontent.com/0a58d748fee87668a27ae86784591d9c1eddb0a94b4ac66bdce4820dc3ea05a9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d34303337254533253833254242497350616c696e64726f6d652d646533643337" alt="4037・IsPalindrome" data-canonical-src="https://img.shields.io/badge/-4037%E3%83%BBIsPalindrome-de3d37" style="max-width: 100%;"></a>

实现类型 `IsPalindrome<T>` 以检查字符串或数字是否为回文。
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBAsAMDMB2CBaCBJAzgBQIYBsBLAOwBMAnAewFsBTSVFJ5hgIwE8IArQ3Ygc0wALPhAAUAAR59BI4nQAuuAJQQAxCPKl1mBeRL8wDNSYgBFAK61dhSsSNR01AA75adYgogL2z2hAADIKw8IjIqOgAeABUAPiCA70oIAGMhWhSAawgAd3SFdPIoXAhdfQEISiLiC2pWWiLCTAhnAhIKGloAOgcIADEqiFoAD1wXNwAuXoSfP0wU-WcFBhC28M7IgHJcVhTN2IhgYAgAMwJMekccNY6ogEYAJjuDo+9yKwYE3oOANUJaHKVYgQADihAUAAkLKwJhAhAoFM5MBMjgp5kIulxMF0qvxgHAkGAQMAjKAIAB9SlU6lUiAATUoFiKAGFKKR-BCGv4aTzKRBiUZZv5opRohZXLQYkNhgpaGRmmUDAAfGp1BoAGggAFVpbL5aU9AYANoAXQgAF4IKaDpaAgASADe0QAvokRnrSM17Q6SCcGhAAErOx2+-0AZVdDAA-BARWKJZEw5qjV1U1rNQGTbEGLCtYLfMLKGHDQIYpqde65Z6DeV+BaIJt9vXorqq80jaGigHW-rFQJNamup2IGGTdHY0WS-xIinU6PNd6tcGHUGAtmoLmGGAhRhrmFbpKW5Xe1OVbV6uQbRP424Ygdj9WO8Q-V2B6nh0mIMOfmOoDHuw+zQ-Awf67qE7QRIek61jOg6jrE65QBAsJnPgFw5m8HykiAFK8jSsbWF4zK4BczR4fhAqEC4VReDuDoQAAogAjhYBCagxwx+CkXjOqcEQNhIQooGkBBuAI1jABYCiEGhmz5n4qQkdY9ZGgwHFcQokTMax+CRKs+6QVsOx7LEmqoRcCHqmpnEZJp2kEHpe4QRsmysPsmp6FYlnWRpWksQ5+nOVE2y7Lg7mnOctDeVA6m2X5OmOeB6zBcZrBhaZmFRaZPlxfZumBclkqPM8HnvFlVkxTZ3HxQFTmFZEdwAJwPAAbLAAAcdyIBl5nlWAY5gGS5HUv0TIFOGspIrhw3kvyJKgAwBxhpo-jsIyRSYJQ+BSbYxDInCCJIiiwBomkmLYri+IIIgwB8JgOQNItEB-ACpRbTtdj7fCiLIqi6LnTi5B4gSN2bdt0mfU9ACyVT+MyIj4GJ-DWLC31HX9Z1YoDhgCkAA)

```ts
type ToTuple<T extends string|number, U extends string[] = []> = `${T}` extends `${infer R}${infer S}`
  ? ToTuple<S, [...U, R]>
  : U

type ToString<T, U extends string = ''> = T extends [infer R extends string, ...infer S]
  ? ToString<[...S], `${U}${R}`>
  : U
  
type IsPalindrome<T extends string|number> = ToTuple<T> extends [infer R, ...infer S, infer V]
  ? R extends V
    ? IsPalindrome<ToString<[...S]>>
    : false
  : true
```

---

### `5423・Intersection`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/05423-hard-intersection/README.md"><img src="https://camo.githubusercontent.com/43c39b07462c9ac7cec70a9c073ee19e5512e648e9c4cf6c84af664167c813c6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d35343233254533253833254242496e74657273656374696f6e2d646533643337" alt="5423・Intersection" data-canonical-src="https://img.shields.io/badge/-5423%E3%83%BBIntersection-de3d37" style="max-width: 100%;"></a>


实现`Lodash.intersection`的类型版本，略有不同。

交集获取包含多个数组或任何类型元素（包括并集类型）的数组T，并返回包含所有交集元素的新并集
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBCsAsBMBmCBaCBJAdgFwKYCcBnXAY2wEsB7TSVFeh2gIwE8IAFczXAQwAc+AG1wQAFAAFO3fkNwAGAJwBGBQEoIAYgAWPfABNNAV0xVMm3fh4swtDXYgBFQ7kIVqNqOgC2sr7hwQ2Foi2Cx8IgBuBISmEJQAZhAAMpR6PIRaAHRceESkbmYA7uRBEDwQgiXYwhB65PHxBP4kuJkYONH5pgA8ACoAfIE8ANYuZWYAgviWbL0QJNTYPFxcAOYQxFGWgmXTVoRx+ONsoeEQuMJ+AVwkgoZ1mOtBIsaxp7gANOMG+LjYhvhMAdytxChBXtR5otliZHmVBDscp0yLELrgrthCJkPBAAAb4zG0d4QABKYwAvO1csQUdRugBtelKL7wAC6X3p8C+iHZEE5LNZrP6AG4IMBgOcAB7hMi4AzYSgQJgieBEsIiMmEJQQSlYaldOmM5kQLkQHkc02IL6wXn8k3cwUisUS3DS-JywKK5UmiAAHzNarOmvgOqpyIKDKZAo5VogNo50C+ADZHaLxVKZXh5V6RNwtoGNS5kLqOnlaZhI8bLbbLdbeTynenXZmPQqlSJEAXSS5YKG9eGekaWQ6WX6zWPYKP-Q20y63bLs+2fdOu5roH3SzSI0P7WbedXG3OW4vvXmCLR8bicYMAGrkXBgyEAcRKAAlDEwAFwQLTYbB8QhP3FTESCyAArLFKHwVZgDgJAwBAYAbFACAAH10IwzCMIgABNSgAQgABhVIRFfJo0KwyjUIgRCbGJXpKAAVRMOkBlDOZXTwTA9AOekuEaI4SS+TIRP4ggIAAZVZCBaAAflJMcGOYwcRMyKTBlob8OMlLieL5VlaCgeSz3wQyIC0uj1QgABRLYWD6L5GK+AAxKVdIOJhKEoYQeDMSlsHwZxBkpRi3P8PS+MwATSWE0SovEqS5JsuyHL5VSpI5bT3IgJSWIrElBnkuZvxM6TOPC3jSogeT4h4QRiHMiBnP6TSmsss4UkoPhUqcmywu44FMDYSkTOCnL+oisTBNi7J4qORKjOSLzuvpdLeV62yCHsoSIEYwZyoGwJApEeTrLHElGuslqoG-az2pEfsywjNjKSyiq+SmmKIFUz6Fuqpauu6HbVpE9TWpM2gwBQqjKJylxsCI9IxhhrCaKQ8gfCghHiQAbxsgBHQw6q+az5wRgBfCB4nwSgvAgABycR3hQUC6uER4XGAQwKHq+n7vmJGDkpelaFJzNumswm6u6R6t0HKMTRrEc+VNNkhRZfp+g+UWyYlqXBBlzcDQrHdqwtbk63N3ceXV5czU17WoDF-I9aJg3ZeNytoz5WN4z5RMIBTW3Rq1nXxclt3Df1csvetpWzUtvctft0Ond1iPpY9mPTeVkNpwnKck8LxAHbDl2M-do3s4Vs24+TkPtYMqGQAolH0KagFnnmvAANbtu0eb2hBgknRfggFh8KOQhvO50xAJ-P8AKA4AQPAyDoNghBEGAXzCEKc8oFve8wWnu4Cnn39-0A4DCFAzIIMyKCYLg7fT9n6hCCHiAAFkoJEQidAIn8KsFw35L5LxvnfB+T8EJISAA)


```ts
type ToUnion<T> = T extends [infer R, ...infer S] 
  ? R | ToUnion<[...S]> 
  : T extends []
    ? never
    : T

type Every<T, U, F extends boolean = true> = U extends [infer R, ...infer S]
  ? Every<T, [...S], [T extends ToUnion<R> ? T : never] extends [never] ? false : F>
  : F

type Loop<T, U, E extends any = never> = T extends [infer R, ...infer S]
  ? Loop<[...S], U, Every<R, U> extends true ? E | R : E>
  : E

type Intersection<T> = T extends [infer R, ...infer S]
  ? Loop<R, [...S]>
  : never
```

---

### `6141・Binary To Decimal`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/06141-hard-binary-to-decimal/README.md"><img src="https://camo.githubusercontent.com/fa004d2a354b1c6f92cf280ebf8ebfe2fac524efe4cd6cac28c8efe10e9482ff/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d3631343125453325383325424242696e617279253230746f253230446563696d616c2d646533643337" alt="6141・Binary to Decimal" data-canonical-src="https://img.shields.io/badge/-6141%E3%83%BBBinary%20to%20Decimal-de3d37" style="max-width: 100%;"></a>

实现`BinaryToDecimal<S>`，它采用由0和1组成的精确字符串类型`S`，并在`S`被视为二进制时返回与`S`对应的精确数字类型。

您可以假设`S`的长度等于或小于8，并且`S`不为空。
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBBsCMAssIFoICECWA7AhgJwE8IAXAewgBEBTAYwwFscAbSFZdj1gIyIHdTiAZwCuggBYYIACgAC-IaIkBKCAGIx+ACZrGxMWFaqjEAIrCqg4hlJYDUAJL0ADkyr0qWYhAAGmXIQAVUmo6RiYAHgBlAD5vCF4JGjESHABrCwgcLAgqAA8cGi9LPGwAcxICJyofSLiaG0EMSzKIAAZMrG0kLO08KmJhPCxBDpz8wogsYXouKjwKqoh6vD7BJxtNFt4MPRq4hI89iCaIPtKtKm0cEZwILmx8AgA6VgBNUmElrMzBEXcSDRePTVVxYUq7UgAMyOJyoAEdhMwSORSPNXL8Ad8ABwdbTeWrHEZYAQ5ZzEZ52HzebxCVjkxYAJQsSAAvOgHoFgrQGMxwgByWCtPnRADcEGAwDGVUKl2Rd2qACY6ZVqkzBAqIGy-I8giEeRE+a1WrBYMKxRKpbRiLKyPKIABmVjU7yU6IQABqGCovAgNggAHEdgAJYRcABcEDExGITkEYYlQiSTwAVoInqjSsA4IgwCBgAZQBAAPol0tl0sQd6DCAAYVImmqQbm1XLrZLEDzYHp1UixBKYKCAWELio4QCY2tnRGxTKABoIABVCceTRE6azPAAbQAupqIDu3Wzx3lJ6ufAASADe2EhcwgDIAvleb3fIg+XVAAPwQXv90qD4dXCiedNyeMCF3nBllynCBDT5CBv3aCNYG3aJWAjBcDG7CAADlpgAkcx3nJcTxXG4sAIHc9wPPdj1yU8RgXTc+VBcExD5XdWG-Jd0Nw-DSCHQiAhAsCnggjoCFQrCVQgABBTRNCIxdDygUCwLw+gCKAgJonnUSNK00cF2ibdmNYvQOOkxYAjwLJBCUnC91gYi91aFS6IY-dRJfeZInnHz723LiIBsuzgLkhTwhw+ccN0iLFPEqDSJgpBv0ciM3LQqAMKs6ptU5PUwiiaCzxnMF3Ns4Yoj7MpDKiaI0LAQs21bEKLC8GtrgyFryw7fMGHWPAgRky8IAAUQRZh5zG3JpS8B8IEhPBSHoWCZG7ZAkmYViLGAYQrCYQQ+Vyr5BAyNlN1YGa5vCCbEQifKCF1bkioFIU4oVBrZyu2arVuyaHo5J6uVCXlDWNU04vtL6fpuu7eUe57QYNI1UdR4V50y76oGuv74cB-xgcKsGTVJ0mMYgBUAFYqZhnHfsKf77vCRGQf1flBU5413vnWAAHYsbAIKmpAYseorAAxQZgV861YzF8Wiz6kXWDdSIND6CACA+eZBFIJh9usYYIyjGM4wTQQk1TdM8EzbNYGAOzeDmVWPS9H09YNqwGhN6NY3jYBEzEFM0wzLMEAdz3DYaV2AFlUWqGsNCYHa40jP3zcDy3g+tjNc3zIA)

```ts
type StringToTuple<T extends string, U extends number[] = []> = T extends `${infer R}${infer S}`
  ? StringToTuple<S, [...U, R extends '0' ? 0 : 1]>
  : U

type NumToTuple<T, U extends any[] = []> = T extends U['length'] 
  ? U 
  : NumToTuple<T, [...U, any]>

type Add<T, U> =  [...NumToTuple<T>, ...NumToTuple<U>]['length']

type Trans<T, N = 1, U = 0> = T extends [...infer S, infer R]
  ? Trans<S, Add<N, N>, Add<U, R extends 1 ? N : 0>>
  : U

type BinaryToDecimal<S extends string> = Trans<StringToTuple<S>>
```

---


### `8804・Two Sum`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/08804-hard-two-sum/README.md"><img src="https://camo.githubusercontent.com/a67d4f614783e945bffdfbc11dd7571e4aa3fd6d2f160ce403147e6273c11f5b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d3838303425453325383325424254776f25323053756d2d646533643337" alt="8804・Two Sum" data-canonical-src="https://img.shields.io/badge/-8804%E3%83%BBTwo%20Sum-de3d37" style="max-width: 100%;"></a>

给定一个整数`nums`数组和一个整数目标，如果数组中存在两个数字相加等于目标，则返回true。
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBAc0AwBYIFoIBUDuB7CBlArgLaQrJnkkBGAnhAAoDOAlgDZYAyAhvhABQACjVlgDGTAHYBTAJQQAxAAtOAJwAm8lcs605hTgBcFJEnNMQAivkkN9TLOONQA4kwBuk8RE6fN2iFgAzCAl9SQBzSWUGCAADcSIGGIAC73VvYPFQiOVY-RUI-RiAGghlSX18ZU99ZStgoP1sCHjCSkjohnwRBQhDA16FSVpOVXV8AAdenBi85QKYgDpHCAA+CAA1JkkMf08XfQAJfEoALggFfX1xhhPgYH0GboWAKwYFrDngWEQwEGAwAGgCAAfVBYPBYIgAE0sJUIABhLCqSQQA6RFEQzGgiB-MD6ajjFFoLAAOSIAB40CUAKoQSQAD1C4lU0Xw4gA1uIsBhxABtAC6EAAvBABWsRWg6YyPCyINTeQByFgeMKGBWCkhQAD8cogmogZ2JZMIlJKvIWFupJTZnO54n5KwB+MJEAAgqNTXLxehSRS0GsGUzZbyJAFIhAAEolC0LUPh3AaqDat0e80WhOK5XiVUKdVmmNGinUlYlCP8zMqtUOvVJg1yp0ElEAeSkBBNVLlJQAYlKg9FKFgsMr0iKApwWAxJN7JYGZdEQ+Iwzkoxklxtoxa4zkEzWkzreO7VOSV+sA9LmdFafrazqW5I2+TeSuYwmaSUalY1tek2c7w+nxuCyvp2EBdissj6mcXYNi6mBYA+HZWqBvZzhAA5DpII4QGOE5TsK6AoReopbpGgEkTu+r7n+fo0mefa9LUKLfsmcH-i+-Jvgxn67rWUCGtgbHphxIFgRBtZQQCYBAlimLoNY+gIpwk7RDJEI4v8TCEOMHwKc6KIAN4QAAogAjvg44lEZ9KEiICkAL7YcoWCEBACr8HpyDdOOWYRAwwD4LYE4KjBKIiEp1j4byJBWTZ+jkqZ5ksJSAkUryADMJRpcJABsJZcVOJbRdZki2fFZnjsl8GpRlEAAEwlAgOV5R+BVFEVsVlYllX-vVEAAOwlAAjINQ0AKzCYNo15Thk4rIVUAxSVcUJRVrGpb1A0QMNY3CQAnM1jFzW1C3FaVK1JWtJq8iNdWZcJcDTeOs3zcZp3LeVF0pVdN29VlQ2PbhR3tUtnWrV9j4-XdJS1QDz3Ha9HXnd1qWQxAf1owdn4vYtZ0fcj33Q1DEAIJjrXA7jXWXRDhNo8JU3vod2NvaDn1VQTt20yUuUlDNZP8pJUkgCCqmQl2lSGPGoTXMLIvAupgskGsuBKGUEDULCOQMEOAV2OINznJc1y3PcjwKC8bwfGEXzwAgwDeAwGCRIrGxbDsWssDr9j6xcVw3HcDxPK87yfN8tvu57evOwAsh8KLwkoLA+dYZw+0b-um+bwdhL8-xgEAA)

```ts
type ToNum<T, U extends unknown[] = []> = T extends U['length'] 
    ? U 
    : ToNum<T, [...U, unknown]>

type Add<T, U> = ToNum<T> extends [infer R, ...infer S] 
    ? Add<[...S]['length'], [...ToNum<U>, R]['length']> 
    : U

type OneSum<T, U, F extends boolean = false> = T extends [infer R, infer V, ...infer S] 
    ? (Add<R, V> extends U 
        ? OneSum<[R, ...S], U, true> 
        : OneSum<[R, ...S], U, F>) 
    : F

type TwoSum<T, U, F extends boolean = false> = T extends [infer R, ...infer S] 
    ? (OneSum<T, U> extends true 
        ? TwoSum<[...S], U, true> 
        : TwoSum<[...S], U, F>) 
    : F
```


---

### `9160・Assign`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/09160-hard-assign/README.md"><img src="https://camo.githubusercontent.com/764a1608c746c9b454db8c8e4f74815d4d72ca3b054a00266a3ae695559577a0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d3931363025453325383325424241737369676e2d646533643337" alt="9160・Assign" data-canonical-src="https://img.shields.io/badge/-9160%E3%83%BBAssign-de3d37" style="max-width: 100%;"></a>

有一个目标对象和一个对象源数组。

需要将属性从源复制到目标，如果它与源具有相同的属性，则应始终保留源属性，并删除目标属性。
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgsAUABFCcCMA2ADFAtFAggZ2wSwHMA7SGNcitUqAIwE8oAvACwEMiCAPPVgewDN2UABQABAO68ATgGs5sABwBKKAGI2UgCZreNAFYBTAMYAXNaylTWdSNVX2oARQCuB7Cby8SEagE1ezlBsAG4GUKxQJhYEBma6hqbhRNoR2AFSRmEWVgwCUPHGJtgAdFD+gUQGBtomvFBGvAAODI1STQZSJgz8bQC2UGnOGWG1kdGxADRQePzTZmzYkcxh2Ky9Ya3tnQysiybLA+mZU3QBA8wBADYpl+LWizJVjUsrRxttjR1dU+zamh8vMZSGJmTafbalYQASSI2EaeCk1VoDH2YQABgB5fSFYq7fDENFYAAKUKUtmgagcBk4a0alwM5JgaOZRWoXU+UAAKuMzABeKAAb2oMFYAC4oAByVgS6gAX0ZkToHIxUkIeCI8Cg-KFFJgNHFEpoMop8p8FOAwEVHIASm5nJc+VhcIQiAAebnAyZQADaKrVGoAugA+NlKsK27D2x06mAig3S4W0A1GuXUZlo8lplnYUMcj0grWCxNiyUJ3VQTTimOxmDMPAGuvGmummCm3NhP0EdWa7XF+PwCUTRP6yUpk2ZinsjuqrtEABMhereuTc8HiaMBqMTagbcnYawsPEHUXifC-bX5aTo9XQ8vG8lW9PlaLl9jdYbeG3rdTFPTCqDUAAGp4AY4j5EQUAAOJ4CYAASzgjswJgmI02CihaRRGMwxR6CU0gEMACAoJAIDAOSoBQAA+tRNG0TRZTpFAADCvCaGEsEdGEdHcdRUCkeSU5QAAymsBgANIGHQ7pTAAqgB-KPKcsxEngRgyNJUAAKKcCYVimK6il5JyUyGbMckhmagkACIzPwElScZUByYW2lGJczhsQZklGVAAA+UCmU5Uwies9kaeZAn7kxuwGDgLrhfJL4wN6RLTBBwiBZyfkBd5ZlKAG4qpdSJgGMkiwheJkkJVAp41nV9UNXVAD8TkpQGNWvo1XVdYVUDFaVmiLDZ-B2VVjnObV3VTQ1LVFTpA0PLlXKTdNq01i1nJtSta1rb1-VlTlSlOdtO1rS1MlbZ1p07eKlShFIJ3XQ1t0GPdkC7oJOD4m6WX7YNUC2g0Wiuu4qocFMzhEDIRC8OIRBBrJiUyX180Hd66r8Me1pTMUuMY8eQkBtQLXWijJUHaD6oEL5RDOL0NAdImG2JuKX3xdF2Cxd9GnWgjPq48UhMWTA4qchOFE8dxXJuGYHNuFRku0XxZEQHgvSNNIZiCQKWkAI7OKwlxTNpnyJLKUA9Lw-QSqIU5oFhhv0hwbjAM4HiXNgxqQBa9QxfAkCCXL8D5rEi4fVFfudt2J4UiWUrGuHHJB1H84x8uo4J5FSeRzO6oAMxp-Um6Z5ZEec-AmCHsevax-G24joa273hKj4QLuPtGDFc4B2XBhziH0bUCW3rwFMc5THnRNt1nYRy3OKc9klZ5LyK8Dnj+iez13KcLjX6feuPUB5xPU+b8xXeV9gR5SIXJZLuEa+lgOP774fx9H6f5GWp3nN5zP5+-wHrfcU-sKQjm9I3T+pds6-wXsAqA3cwFVmHMmbcLYi4PmftPaBW9YG51TnvZef8KTNyMKuagz5dKuHev-OWedL7X3gcQ9O98G5jm-CQzc5CKSUKkNQ7B3tv4xSgAAFh7jAgwIigGEJLKA-ekCaE4IAZIhh1cl6yOoOAhRAiICCR-vLfk3pqAm0KK6TS+tDaujZsQV0QcB5TG9MnfBo9lHwB3lMJx-pJ58yDqoqQQYEbGM4KbEwZiLGXCsc6Gxc97E+jngvDx298FzmDIkzmc4-EBNvDAEx+lzEGwidYt0dDYmOJinnBJyiKnJNSVUzJgSKS5NCfkyxRTbExSkTyBxEpBxQGQLUuWIj6m3int7EACtFa8QAGJDFRDfISJVUITMmcrMZ1AAJCQ0GEU4QxDjuQ8F4NCQRkKoXQsATC2FcLFHwoRJAyBgDsCvozCkAFgKgT2W7TwsJxRIRQmhDC2AsI4TwsCW5KBgBpH2V8nMLyoAAFlpCzzYJcJ2MQjm-NOQCoFVz8IkRVkAA)


```ts
// 第一次解
type SameKey<T, U> = keyof Pick<T, Extract<keyof T, keyof U>>

type DiffKey<T, U> = Exclude<keyof T | keyof U, SameKey<T, U>>

type CaseAsign<T, U> = {
  [P in (keyof T | keyof U)]: P extends SameKey<T, U> 
                                ? U[P] 
                                : P extends DiffKey<T, U> 
                                  ? P extends keyof T
                                    ? T[P]
                                    : P extends keyof U
                                      ? U[P]
                                      : never
                                  : never
}

type Assign<T extends Record<string, unknown>, U> = U extends [infer R, ...infer S]
  ? R extends string|number
    ? T
    : Assign<CaseAsign<T, R>, [...S]>
  : T


// 第二次解
type AssignObj<T, U> = U extends object 
  ? {
      [P in keyof T as P extends keyof U ? never : P]: T[P]
    } & U
  : T

type Refresh<T> = {
  [P in keyof T]: T[P]
}

type Assign<T extends Record<string, unknown>, U> = U extends [infer R, ...infer S]
  ? Assign<Refresh<AssignObj<T, R>>, [...S]>
  : T
```

---

### `9384・Maximum`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/09384-hard-maximum/README.md"><img src="https://camo.githubusercontent.com/6b87c6fa19f4d577e2713931ff29d4b35468c7219d7d8bd4ba72141b9ed04a73/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d393338342545332538332542424d6178696d756d2d646533643337" alt="9384・Maximum" data-canonical-src="https://img.shields.io/badge/-9384%E3%83%BBMaximum-de3d37" style="max-width: 100%;"></a>

实现类型Maximum，获取类似于类型T的数组，并返回T中的最大值，`0<=T[number]<1000`，因此不考虑负数。

如果T是空数组`[]`，只需reutrn never。
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBCcDMAcAWCBaCBZAhgDwJYFsBXfSVFci0gIwE8IBjAC1noGsA7QgGy4gAoAAkxYduXAJQQAxI0wAnACbT5czDVKkpWiAEVCAUwDOAF1wB7dhqhapEACJH6c3AAdTF0gEl8Lrvvz67MaGEJgQxjQu%20hAABlh4RPgxADRQAOb6xqFyqnRcuKzREVGxACopoexKcpmEcuwQ%20DgQAG6YXAYQuA0x5VaxAAwQADwAvBClANqc%20FT6cgC6IxAAjAPrFYZmECAg7JhpmKYt0TNzchDsZln0Foa4CvP6CrsAdP2eAGZlMV0hYf43HQVGpYpMFhUAFaEEwQGqEYz1WLsfQnOQxfoxLHBUjxAjEYbggB8EGAwEuqPmuJw%20PwhIGqQATKkVgsSWSIIzqQkCZMVkyGZz1iyAKwDNmk8mM9akLEY6zaACCCja7Hoz1IAGFMA0aGZCF0fH4AkFwpFonFurTft1DC5cDUlLRYnjEjEAPz9EkANVw%20gA7hALBAAOK4YwACUIVAAXBBGMZjC5DDGycEmK9IYZXmY5GlgHAkGAQMAwGXQBAAPrVmu1msQACa%20oumrMjwgEaeVbrPcrO1LYGK0VKZlKhF8%20mGpVSAFUIPpsMZAgoQoR2BwzP72OCIONibuJvPF8uQjPJgByPzsNLGRjnpbuiBzuMjscTqepSavb8z1JrjdbmyZZDhArY%20PIk7Tk%20JLjKUR5LlUISTN0nzzBAABKqTfq8KFoQAygspCPnOC4ISuEDIewqEXN6WHfrhFw6IRUBQI%20YEuBBhLYQRn7YUxRKkFAcaIgYpBxp87SGPowHmhgNKJFO8EnpUNDgrOB4omiMGHqRymUdRGF0ThVH4UsRGgWY4E1FOo7jn4wzoUSqSvnZk4zkSJK6Yh4RyKJLEQI%20rq8txCypI5gkQHGQV0l%20348dBYlPhA5YgN2va1hMRhZNqUkhOldb9mABAuLmWQgQA3hAACiACOhDtKkVXYFE9BZAAvhAnxyJZEDngIQ4oEw7RXhkhjAAiuBcIY54ySU9CYLlB6TKQTUtcYwy1fVXDDNFhJsqkmnzB5yQrc1%20itRtdXtDt8m8oKzKrPtnLHada2XVtN08jF-JCgKgorGKT3SgML2EWWYAVvlGUAGJ1Le%20FLsmaVQ4VoCkCSeGyDUEB6nUEBbB07jsCm8aJsmqbAOmjCZtmub5oWiDADqhj%20lSUA%20n6gYExNdxxgmSYpmmhgZlmOZ5gWCCM9zROGOjGC5tEmqyDwgSjXzZOC5TwvU6LdPFgOQA)

```ts
type ToTuple<T, U extends unknown[] = []> = T extends U['length'] 
  ? U 
  : ToTuple<T, [...U, unknown]>

type Compare<T, U> = T extends [infer R, ...infer S]
  ? U extends [infer V, ...infer Q]
    ? Compare<[...S], [...Q]>
    : true
  : false

type Maximum<T extends any[], U = never> = T extends [infer R, ...infer S] 
  ? Compare<ToTuple<R>, ToTuple<U>> extends true
    ? Maximum<[...S], R>
    : Maximum<[...S], U>
  : U 
```
---


### `9775・Capitalize Nest Object Keys`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/09775-hard-capitalize-nest-object-keys/README.md"><img src="https://camo.githubusercontent.com/fe82ba4c6add54c4bae3dfc6d5971035d867f5614091fbae4f75087234ca2cb5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d393737352545332538332542424361706974616c697a652532304e6573742532304f626a6563742532304b6579732d646533643337" alt="9775・Capitalize Nest Object Keys" data-canonical-src="https://img.shields.io/badge/-9775%E3%83%BBCapitalize%20Nest%20Object%20Keys-de3d37" style="max-width: 100%;"></a>

将对象的键大写，如果值是数组，则遍历数组中的对象。
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBCcDssFYIFoIGECGAHAlgFwwBscAvAUwgDkyBnPCAeQCMArMgY3oGkyBPGyCmTCRgprwgBZDLwwA7ACJkAbhAAUAAWmy5AExUBKCAGIAFhgBOukwHtWHescsWZYQcY8QAigFdaeHBs5NyhMXAJicgg8UwoAaz4IGwAzaNik+04AGgh5axxUmIplIj8IHBpcuVyLF14c-DIXPAoYixsfAHNTNIo7Nk5KnGqimrqAOhCIAD4IADUcMgB3JOqAcXwACR8mAC4IUzw8LBpd4GA8GnZTcZYacZsLTuA4RDAQYDdQCAB9P-+Af8IABNDoWdA2fQQTZNCiA+F-CAfNx4XhYCgAVSw6IsmBoFAAvBAAN6CABEGDJ+zJAEEyeSmFSIGSAEL0qBk9hMslodnM3TchR8slkbkAUWFyW5ADFhZ1uWthaZuZthThuQBJYUsbkAKWFcW5XGFhG5ABlhQBbbmSYVybmUYU2bkMYVYbkABWFAEduV5hRZuQAlYU0bkAZWFeG5ABVhT5uRjhcpuXNhUtuQB1YUAD25AA1hbxucDhSRuQAtekAXxRaIoYXwRFIZAAPDHZkSYxAyDmWnpKgleCkIFicXiKAB+UfYpoTgDaMYAuhB9jG6+iIEoyFgwu2chie32yAOqrx50uiRfOxBu73+7pKvPhskmhAaTlxl+X2+gyvBNO267tgrbzl+4x-jkYFfhiOSNhELbUHQzADHgPD8K2NLTEu0yCGuR4Pk+S6CFA04YiRq63huDbYE2kRkEheAoQ46E0O2N6klA84euU1RDiO3YYJUPH3iej4QAABgAJMSP7gkG1YyXJEDhtWEkQNO0nEvBzbkK2QbTIpxKqep+weku+xAXuMbcThYC1mA3wIvCt7+OgQm0L8zkAkinw4JaWCPPQqKbsSEBit6PhEDkYo5uinAQNWEDJO0loQAA5BoIVkMg1xEIQJ6dLQwA+AEhA0OlYD+YFFj0GFsXxXg0pEPiOSUDYeARVFhCJclqUZVl9a5eYhAFXIRU0CVZUVdRyU2DYEBEpxc02PsdAWMMnRiJYpwQPOYXJPNa14Bt42JcRDnZRA0rzYtJKCDdq0QOtm2CCyO37PtFGPcdp1bVA1YXbN7AeZUV6CA1Ditl1RCto9cG0Qh5CMcxnCsa2h02NM2NZGAxGOSAXneYi0o+LVsTguGLQnETxO+QTgizOG5gWBQw5k89NiEKVgRyLthzHKc5yXNctz3I8zyvAgwDyDQSxNIz8yLCsNBczzQT80cJxnBcVw3HcDxPC88DS6r3MBBriuSI8DYjWNE37AL2vC3rYuG1tyJAA)

```ts
type UpperCase = {
  "a": "A"
  "b": "B"
  "c": "C"
  "d": "D"
  "e": "E"
  "f": "F"
  "g": "G"
  "h": "H"
  "i": "I"
  "j": "J"
  "k": "K"
  "l": "L"
  "m": "M"
  "n": "N"
  "o": "O"
  "p": "P"
  "q": "Q"
  "r": "R"
  "s": "S"
  "t": "T"
  "u": "U"
  "v": "V"
  "w": "W"
  "x": "X"
  "y": "Y"
  "z": "Z"
}

type Capitalize<T> = T extends keyof UpperCase ? UpperCase[T] : T

type DeepCap<T, U extends any[]= []> = T extends [infer A, ...infer R] 
  ? DeepCap<[...R], [...U, CapitalizeNestObjectKeys<A>]>
  : T extends []
    ? U
    : T

type CapitalizeNestObjectKeys<T> = {
  [P in keyof T as P extends `${infer R}${infer S}` 
	  ? `${Capitalize<R>}${S}` 
	  : P
  ]: DeepCap<T[P]>
}
```



---


### `13580・Replace Union`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/13580-hard-replace-union/README.md"><img src="https://camo.githubusercontent.com/b1153889c10dc13ff6905b711618aea73a599501fde3eeec1bbd2c2cb1c3c6fd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d31333538302545332538332542425265706c616365253230556e696f6e2d646533643337" alt="13580・Replace Union" data-canonical-src="https://img.shields.io/badge/-13580%E3%83%BBReplace%20Union-de3d37" style="max-width: 100%;"></a>

给定要替换的类型的并集和类型对数组，返回用类型对替换的新并集。
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?ssl=23&ssc=6&pln=15&pc=1#code/PQKgUABBCMDMCsAOADBAtBASgUwA4BsBDAY2wgFUA7ASwHtLJ01mXGAjATwgGl6BnAC6FKA6pQgAhQgCdCbYbQBuEABQABYtICuA4gAtoAJgCUEAMR6ZAEzCMz9iAEUt2QXQaMA4tUXZxwiAADLRp6CFoAMwgBDlxXQIhhKyCZWS5I6NiyXEJqaT4EgVoIaTwiUlVAgG0qwWkxAHMAGghKLQBbNmxpAF0WqoARQgFsFrb8fB6ewOMW0oEtaX9W7AB3CBD3ErKSbGTV6gE9aL0yQJi4iBy8goA6WygAPggANWo18PFvAQAJLTYAFwQPQCAS4PgA4DAAR8fS3ABWfFutGkDWAcCQyDAIGAtlAEAA+kTiSTiRAAJq0RYQADCtCsZB+3TIpNZRIgONsFzIOAIuwAPAAVFrkZ4AXgoEGwAA8RpQrHwIFUxBFulgWiq1QBlHqMAD8EEFUtlfgVWEYUANWotECBgsYQMo2F80i5WQooUovPK2CFIuNcrNVWEHBaIZ6VR64slMsDiuVlFV0nVEFuac1ya1AdNipDkd1lo97m9ApLpD9WEe-TTtx1jwdhrxIEJbNJhtcAlphD4rhbrbJnOo7VwKM73IgAG8IABRACOWkI+Ba0+lcWInYAvhAItJaO0IAByNTctD6Rf4PwNVzAHTUfB8A9gIcj6SdqcrtcCABii57LQAcrQAhzgu+AQFuO57oex5ZKelgTJe163vej5gOOxDdr2EpVIwUIQHUjToM84z4IwH7YOu-IgYu-JUMWOzlm0nRqgAPvhAj1JQzRKrUHGNGMWgTFMVatB0XTJmxJGPFWDwQHhQwjER7GcQ0ADcEBfiE65bGgzwhAyERiHsZGrhRAhUfONF0fQZa+pplDaWEbEKWQbG0Gw8Jmf0gzDKMymNH0Sr2Y5lAtPp2CGU6VjCWF8oRUZyRsQRXEQG5HlmdJTRgLqYD4v2JIaYsRzaiM4J9vlHK4qAjDPFqlilBAHBUsmfC0Pgt78ECIJghCUIwnCiLIqi6IICgwDCHwqzdDVrzvOsrXtaInXAqC4KQtCsJ6AiSIomiGJjQtHWUHwM0ALIomQNLwReXGuF1q29RtA07ai2K4kAA)

```ts
type Replace<T, U> = U extends [infer R, infer S]
  ? T extends R
    ? S
    : T
  : never

type UnionReplace<T, U extends [any, any][]> = U extends [infer R, ...infer S extends any[]]
  ? UnionReplace<Replace<T, R>, [...S]>
  : T
```


---

### `14080・FizzBuzz`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/14080-hard-fizzbuzz/README.md"><img src="https://camo.githubusercontent.com/5d6e69a07da04e94a80d283d572b919cca1b68c1ef9ace7d46e363fee2fa784b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d313430383025453325383325424246697a7a42757a7a2d646533643337" alt="14080・FizzBuzz" data-canonical-src="https://img.shields.io/badge/-14080%E3%83%BBFizzBuzz-de3d37" style="max-width: 100%;"></a>

打印整数1到N，以下情况除外：

如果整数可被3整除，则打印“Fizz”。

如果整数可被5整除，则打印“Buzz”。

如果整数可被3和5整除，则打印“FizzBuzz”。
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgsAUABFCMAsAGAHIqBaKAxAlgLzwCEBXAyGdSq9cqAIwE8oAZAU1agGEAnAewGdGUABQABTgwDmAO2IAXAJRQAxAAsAhtwAmKzd3VNlAW3VzVKnNIBmrbpFrLHUAIrFW-OTl7T70KABVVDlwCEgIoAAc+OgAbViMoHH4odSgAYxj1fn4cNKg5dzkoSRwAN1ZpRMq03i1LSSqC7lKcVgB3fgA6AKD8rIBrROScowi4gC5fGAAFbksi+dZJW2TYfN4oADkAGihWAA801gi5SYhaTFn5qAAiELwbxKsUysXl7iGoOpac2I4hADMAG4LlArtIijcwg8ni9GktbJ9vkkcH96EwAKwgvyXOYQ273aGPHDPdSvCEIj5JL5lFFooR0XhmKAAl46DGdKbYXgfA7qUZxXZWHlbKAAXigACZELszBxePIIvIoPxVAqYjo6KwzjAAAawXaS3b3XbwXbQ434PC7ADsu2QloI5tI1rgBuwVt2sABXrNHtCLq9ADYvXb-a7YABOZ0EXVcgCSlTl6Q0MTi0mW9FYMV4bV2bQ4bRwaagbTJRTkG2W0lspg4ZmpWThegMUF4zw8eIaMRwTXUMS6XKwIsy3EzpX7bmS7a2uwYCtLxZiUBrrB0lb20n4xG49Y0RTJTDkDAi7mKFVrBR0Wg2-A2rCsVlyrQhMSYwlYnUk3UYtBq3F3NI5DfKBiByDN8l6OR1GLdA0n7ZdeBOHAjCSUwvEqYUPkAnccm8BROXOPwAD4oAANVaNo20qABxXsAAliDocYoFUOQ5AifhxmAYA5H4NJVE6AArLoeUkYAEBQRBIBAYBfFAKAAH1lJU1SVKgABNBUPk4WoOHo2wODU4zlKgWTfGPU8Al4fxiDGVgAB5-F2ABVPZ9gKaQtGSQ8AG0AF1xSgALSIlfx3M87yoBc3yAHJ00kMxYsC2gAH5oqgWgWP8Gy7LiJzdl8w9dk6UqXP84iLJPDgABFWDSBy3IOSLklkIwtW4ULrNs+zGtI5qKii3zLBsD4ACUStKkbEQAZRSvx0t80rOjmuKEqS+aYBY9BYCqqz7icrqcp6-L-H6jzBuSYbrERABBXZpo+QgHpunTJs6R6oDmzKFvDByltK1b4oqRLVGS0isoCPaOGhQ6guOvLHLOiLLuCz77qqUaoGezHEU4F6sZqgnEQAUXez7vrS7GXX+5agfWsGKp+raoaIyzgh5Ew5CclGvNa4h2tsLqDuRga+agaTfth0WLvFyWYBgdLYsJF1YtoFnlatNW-BY6XzpaiX1agJXoW1hWoBY3UABIAG9-AAXzjNnqvDWHNl5qK2o63Yxo94Y5C7AKgpCoKoDqhrNn11GduZ42oF9yGVYIBzw4cyPCuHbgubT4j3rGir5JAJSTLUgJCi4LIzxL0vzIgFCIh5CsXZtqASYAR2IftdhJ-ZTyAqB7agKw+ASWLRHZuDUwS9xgHkYt+G1yB2fSSvkglXzaB7vvufbzuYgcpO8Ac2Bc+C2LYHB3PN97+qd47-sD6tWGMVPuKL92WLJVij-7m-qBYvgH-WKpsKpXz8FvW+Dld4P0Pg5aUr8jbn2-ogr+2xEG-zQX4GAADkFYP-qbTB5tNYEFwUQm0pCFaxWQBQ7BGDEEEMQbAd+6CtaEMod6Gh-8ECcOIUQVWbDsGwCDDw2A5CBH-zoXg8+kYeEML8KAthECgJQPvvvWBsBECIAQVI5hUjUEsJIeInBRi5FEMkWQnh1CjHmMoaY9huizGsMYQCERgDrFP34Yw4RRjRE8JsYImRJjPFSP8f-SU+i9EuPcYY+hwSiGSm8QYvAPDJRWJQYEpJdjsEAgcZQgEETHExKkQCNxsSimFOSUYgEYjEEAjSSEpxUisn-3gLk2hjSiHwCiYg+ApSGkBnKZQ+AiSpHwBqf0ypPSMlNLiZQ0JsUMQFMoRibpEzZGzOwRiEZFSeEYnqUQjE0yKnNNikGNp-8gxLPaYM7BQY+lEJOfMoM4yiFBn2XMjptiNn-xtOc3hPCbSrLIfcj5AzJlSJtNsyhNoXmgvBWQo5XybkSM+dg5AVz-7ICBXC9ZyKqFQuufCyhyB3losRYSk5kY-mRgxf8oxkYQXYMeai-+kZYXYMjKSlFeK7EKMgP5Quxdq6mSwDuOUHwZoFE4kK4VZk5IQFALQUiM0NC7igPOHcKpeAxDnt4LirF2KcW4rxfigkRKdDEhJJAqBgBkn4AWOwJFyKUS1TqzweqWJsQ4lxHifEBLCVEmOK1UlgB3jdRhfgSqoAAFkeQcE4FPEG7hPWGp9Sa-15qxIyXlUAA)

```ts
type ToTuple<T, U extends any[] = []> = T extends U['length'] 
  ? U 
  : ToTuple<T, [any, ...U]>

type Dec<U extends number> = ToTuple<U> extends [infer R, ...infer S] 
  ? [...S]['length'] 
  : -1

type Fizz<T> = ToTuple<T> extends [infer A, infer B, infer C, ...infer S] 
  ? Fizz<[...S]['length']> 
  : T

type Buzz<T> = ToTuple<T> extends [infer A, infer B, infer C, infer D, infer E, ...infer S] 
  ? Buzz<[...S]['length']> 
  : T

type Format<T extends number> = Fizz<T> extends 0
  ? Buzz<T> extends 0
    ? 'FizzBuzz'
    : 'Fizz'
  : Buzz<T> extends 0
    ? 'Buzz'
    : `${T}`

type FizzBuzz<N extends number, R extends string[] = []> =  Dec<N> extends -1 
  ? R 
  : FizzBuzz<Dec<N>, [Format<N>, ...R]>
```

---

### `14188・Run-length encoding`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/14188-hard-run-length-encoding/README.md"><img src="https://camo.githubusercontent.com/84cc6dc157a297bed325042dadf728310f47318312b0d6920b97b30da32768c9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d313431383825453325383325424252756e2d2d6c656e677468253230656e636f64696e672d646533643337" alt="14188・Run-length encoding" data-canonical-src="https://img.shields.io/badge/-14188%E3%83%BBRun--length%20encoding-de3d37" style="max-width: 100%;"></a>

给定一个字母串序列，例如AAABCCXXXXXXY。返回游程长度编码字符串3AB2C6XY。

还要为该字符串制作解码器
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBCMAs0A4EQLQQEoFcB2KA2AptgOYAuAFhEQMYD2AJgJYmSorsesBGAnhABJEBBejwC29AowoQAFAAEAhngBmigA4AnWgA9GYxQEoIAYnKLN9MKxO2IARUwEAzqUa1s1qAHFGANyFFCAADV01mYmCIZwIARydsagIIWhUIIMJSUgJNZwgVADoCApCAQXKAIQBhKoANeoaATWCS9AJSTE1sCE0cfCIyShoGEWjScJIQgGZSioAmKoA2WuaC1lK8Z1oIAwBrZKDJOklNfNpTikVSMYniNdYAPggANUYCAHcU7t9SfkwuABcEHIWXUzgBwGApGc1HIBQAVs4CudiMA4IgEGAQMBrKAIAB9QlE4lEiCNWidCBVEbCTTJEkMwkQbHWbCKMQudSKJIYAAyAFEIABvVikHjqZL87DUyQAZXGEQAPAAVKg6bLYeh5MIRADaAF0ngBeCCqgjqohaiC65gqHIONUaq06kgAGggBU9tvtAHV9RBWFAAPwhAAkQuVuoA5IQSBQo-7zU68tAICGo1GIEDIzGBvH9QBfcP2AvBQNZiAZrxq9Tna5iiUQKXHAgqx2W7UKt0QACq7c1nduBogJujCfdVX7zq7xBHlajxtNU7ywXD3tO6CLQvXEFlpYDUGDveX1p39hPLuI7s9BR3fvLR-PSY7GAfh5DzZGitl7t1N577roPqE4PG+UBAp+kjfr+QHuquQpVFuUoygQ8q3IqPYPKWoGHoeQLYAQASaOWQLwYh4bISMaFKphpbWKK4rJAAIgQKHUSQbbPgONwRBOF4zsOo6GnOS5cVa8E7kxW47o00nYHapzPHRuEhkxJ5kdGsaDAmym4Wmpq0OxxCKlUOF6UCLFsTOKq-jeVTuo0hokaa5YMY2yqGdZZoWtxl4Gu6fZiYOERzhmi7ecmp7yfa6D8bc15etFpyynFer6v65Yhh5RmKn+nqysBYZCj2W6bsEZngb2rBuck1KJFcaE2ceQU8ZMJphXOEUvjaSUYKl3Y3juBUHu+VIeNQDXjLlN4FXB4YleGllUdZ6BYeVzk9tW5q1po9aMRALEtpxPnTvFVL9cQgnWsJJqiSdK5rr1UmPQpZJya9SllipB3qeG2CYGIXA5Lp32HV+zy2Z69lFc9QqycETl6RWYNQfBsnhp9kMFNDTGI3hY31aQjV5dj7rKk5Ba4iABKMiSpouNcVSKDEeS03TLL6Dte2NkKTbxMo7r8joErUNcBb5NoYiVvIDYECgsLKFpLjAJgbibFG1iyxAE0s3OuqsJCGCKJ8l6oE8wySPQrXEKwQsi6Qir8vzeCKugAoFJBrZRuUsw1A0TQLu6UYzPMSwrAuDyutWhue1bpsoE8RwjHHM628LBCi47zuu+7KNeyHCzLI0geVj71R1P74cPJHYD6lTNNs0yABinQUPa8oEGCDeN8yOKgI8u7mHSEA8BSpxbHgqvuNg4LAqC4KQtCsIIkiKJovASDAIoM-vDkA+vB80S0JPbgeLPIKkGCEJQjCcKIsimiouim8T1PZ8DwAsuctXmHgSvn-Pa+S876r0fliHEQA)

```ts
namespace RLE {
  type EnCodeString<T extends string[]> = T extends [infer Q extends string, ...infer W] 
    ? `${T['length'] extends 1 ? '' : T['length']}${Q}`
    : ''

  export type Encode<T extends string, U extends string[] = [''], C extends string = ''> = T extends `${infer R}${infer S}` 
    ? U extends [infer Q extends string, ...infer W]
      ? Q extends R
        ? Encode<S, [...U, R], C>
        : Encode<S, [R], `${C}${EnCodeString<U>}`>
      : never
    : `${C}${EnCodeString<U>}`


  type DeCodeString<T extends string, C extends string[] = []> =  T extends `${infer D}${infer Y}${infer V}`
    ? D extends `${C['length']}`
      ? ToString<C>
      : DeCodeString<T, [...C, Y]>
    : T
    
  type ToString<T extends string[], U extends string = ''> = T extends [infer R extends string, ...infer S extends string[]] 
    ? ToString<[...S], `${U}${R}`>
    : U
  
  type ConcatStr<T, U extends string = ''> = T extends [infer R extends string, ...infer S] 
    ? ConcatStr<[...S], `${U}${DeCodeString<R>}`>
    : U

  export type Decode<T extends string, C extends string[] = []> =  T extends `${infer D}${infer Y}${infer V}`
    ? D extends `${number}`
      ? Decode<V, [...C, `${D}${Y}`]>
      : Decode<`${Y}${V}`, [...C, D]>
    : ConcatStr<[...C, T]>
}
```


---


### `39458・SnakeCase`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/19458-hard-snakecase/README.md"><img src="https://camo.githubusercontent.com/363655d2325206d0440173d47558190fb36b857f02f9877ba9cb74b247c7679d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d3139343538254533253833254242536e616b65436173652d646533643337" alt="19458・SnakeCase" data-canonical-src="https://img.shields.io/badge/-19458%E3%83%BBSnakeCase-de3d37" style="max-width: 100%;"></a>

创建一个`SnakeCase<T>`泛型，将`camelCase`格式的字符串转换为`snake_case`格式的字符串。
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?ssl=23&ssc=1&pln=57&pc=6#code/PQKgUABBCMCcAsBWAHBAtBAygOwIYGsBTAYVwGdDJ00baqAjATwgHFd6AnAS0IBsIAaoQ4BzPAFcAJhAAUAAREA3YWNxSAlBADEAC1wdpWgC6EAtgAdeuE2l5cTHXPy1kj3bCLBUtPiAEVxQlcuAHtsLyhiDkJrQghcCAADHAISckIAHgAVAD5EiBFCbGEuAGMIIz0jCvEObDJ4iFd3EQgAMxCOU2sTaS5sCBAQUtxTPlIKIYh+oxDG5v7Wjq6ewj6BobI8IgB9EcmQADoIiABBdsIAdwhCAA9RyyCALhPEt6MyKiNGczjosmgEAAvFhtmkKBkAEQ6Pi8EKQnIAbggwGAwJyEGhsPhXx+fyCACZgaDUhNMpDxBQOAA5UaEBHI1HozGU4Q7PBjSG434Qf4AZmJKSIZKhhSMAFFeGYikYAEKMACSkgZKLRQIxkLFOz40uwRh2TB2XGVVDeiROGIEPGuYVY9gAEuJ6E8IDojEZzGQnqiPqUdIcAFZkQ6dETAOBIZBgEDALygCA7RNJ5NJiAATRCtQgxBCkji9uEcRTxcTg1jYG+PIAMiFLsIycSAN5USGnSEuyG4LlQSGy9uY+jdzHEfuQ0pDyEAEVHJp74tH9JbADFR20JyxRyIJ-bRzoJwrR1wJwApUcBicAaVH+AnVdHvAnAFlR6YJ9TR9gJwB5Uc4nsABVHcwJz8UcAEcJwAJVHDgJ0wUcyAnLJRyMCcAFVR3ECcBFHRQJwAdVHS4JwADVHW4JzTUdGAnAAtUcAC8uQAXy8Ss4iFcFMiyAAaCA0JuW4TGwSQGgWDxiQAckkjEQSyQThNEpIABJG36NphAgSDmNU9TNMwZjzSgAB+ElhXSDJMD4yCFKKJSiEYEI2ggGs6w4BsqCgEyVMbNDmJ2VTXPrdIAG1ElU7TEgAXUMiBPK8l1wt8nTG0i+KcioF00LjEAExLFMICyIJqjJBp8oKmMwC4CxOmqdiIEbCBxTA8QnD48Vbl+UpqmY9oOBCUwIEkuR2LQP0nClDwgmAcQjC4XgyEkqqao4apGo6rqjCXJwKD46kQglFqnAgXq2n6wbhtG8beEmwoyBmuaFqWis8QgfYgmJEKqA2whuoyZrWt4SywRFSSYRukIZL4sHsRknIeO+zrfqMf6jqBzjQdZGk6ShoasfZHGcnhxHNtRwHgdJCzJLFSVdTlRVJFx6nCH1HUxj1A1GCNRmiYRqAfr+gGnAp8yIWZiUpXZ+mlUkiAAB8hppyWZXlYgrDIMhaTGRb4cVlntWVjnDWNWWFfFg26c5vZ1bIAntbhhGopyvLytLJdakqfSTE9F3XbLMBQCoDFMD0aIIEcrMyBCXhZtCeoXTdD0vR9Mg-UDYNQ3DBAUGAXB6jcoPBGtJpo9jsIvVdd1PW9YBfX9IMQ1ELPI2AKOY7m8vC8fTo4mIPQbqKO6E6r5Pa9T+uM9EaNYyAA)


```ts
type LowerCase = {
  "A": "a"
  "B": "b"
  "C": "c"
  "D": "d"
  "E": "e"
  "F": "f"
  "G": "g"
  "H": "h"
  "I": "i"
  "J": "j"
  "K": "k"
  "L": "l"
  "M": "m"
  "N": "n"
  "O": "o"
  "P": "p"
  "Q": "q"
  "R": "r"
  "S": "s"
  "T": "t"
  "U": "u"
  "V": "v"
  "W": "w"
  "X": "x"
  "Y": "y"
  "Z": "z"
}

type SnakeCase<T, U extends string = ''> = T extends `${infer R}${infer S}`
  ? SnakeCase<S, R extends keyof LowerCase 
      ? `${U}_${LowerCase[`${R}`]}` 
      : `${U}${R}`
    >
  : U
```


## Extreme

### `216・Slice`

:::info <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00216-extreme-slice/README.md"><img src="https://camo.githubusercontent.com/deb5be6177f7df208f69ac581df2ee91ca2c1a10d9ecb916cb2343ea7176f266/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d323136254533253833254242536c6963652d623131623864" alt="216・Slice" data-canonical-src="https://img.shields.io/badge/-216%E3%83%BBSlice-b11b8d" style="max-width: 100%;"></a>

在类型系统中实现JavaScript `Array.slice`函数。`Slice`采用三个参数。

输出应该是从索引`Start`到`End`的`Arr`子数组。负数的索引应从倒数开始计数。
:::

[➡️To TypeScript PlayGround](https://www.typescriptlang.org/zh/play?#code/PQKgUABBBMCMBsEC0EDKAbAlgYwKaWSSOIICMBPCAQQDsAXACwHsbKAxAVwgAoABAQ3oAzDgEoIAYlwAPOgCdcAW1yT+cuf3JgCE3RACKHXAGc6mFtqgBJRQAd0S3PQiMVAKX4A3fqmxzMtnQQAAZU6poAdMZYeMEQIjTYZiwQmDQuDCp05LYqxuSmShEhGDi4ADxhcgA0aHRqdLUAojQAJgB8cfUA1iYZWQwKKmoA5hzK9MUAKpkQTBx0tgsQxswc6K0QpMMrHKRqGpRMQiFVcUJyTIqpbTIl9XJ0XUwhLa3BxVa30n0A7piMCA0XAjfhmTwqGjjbZyYwrNYbLYqbDzei4TYXK4QBQQ2G4dDkCKWCBsJhyCAyfh2BzE4J0ujGAjZXLUdQQAC8EAA2rBatBagBmWoAFlqAFYALpMnIqABKJnWQU5pTwlXUfJF7QgwGAFOkuSS6JcL223KFEGFUqgdOCxK1ADVMLhfnN0gBxAEACT2AC4IAw6ItjD6dQzsAwIgArYwRMkjYBweBgEDAbSgCAAfSz2Zz2YgAE15uSAMJMVoqT24BSZ3O1jMQFPaZkqN24OgAGSc5SmWs5Uz1dCcrThAG8HDQRow-WkhFWILKAL4QAD884gfoADE2ZRApkwphx7BUprUAKoDodwwTkLkSjnciW93cXtpwqGKGEEVf9mSD18QVsOy7U92gIKBV3PMD113fdDwcbtai5CJkNPWpr0fAg-R-WRLxWeQ0hGKDvxfYcQgAEhHQDOxocoQIXW0oEYlcIFPKCoCw2CjwQ7lkIiVCIHQ0CmL9YFcW3Fk9wABSYYxuxIt9oSrAAfUSq1qYt7yorsqnaJ8uSmO9f1wrlVLkK1mKmTDyJHKZ6PkkIkAomc50XOIiIgAARExymLWotJovcDy42VdK1KCsPElQvNkk8IHte9eRY+9byfQK4OPLUjP-LlnPJWVal43K0HM79OPg+1Mpw7KiqoArkKKgAhczwM87z-PKJDkNQR9qnazqIia9ozyExiIvYiAtzAZsIFLOw1GPYb7zSrie3snKaFnPK6oiIruogL8YKC+CQLWor7W2oqAHVmuY2bbHm8o+t47qhoAttqI63jrt08KXDkIwrKEfh0GMfApp3aTbG7VK1sKja51QWoitlO9V36vaIvBllUAYTAhDoaGltO+GtogOHNuK5j0bvTHppVXBJLkrLSOvW9mjaez3xhPS3kMqrSJM3BcRK3crLuh6pJk8o3le9qe0qv9SPkAGmO-X7JdkmX7LlkbVdFpjxvpxnIeh9mOkitAYlwVAmf5q9WDZuoGj01AHjoPnFbhQXhYOyzDbd+ytz1v3RstsobZxvGCZ7WpovKV3ndArGVHptVyWZ+2bwlWoE8eTnFLkdlTLN-OPyrIuharJ96Yjq3GaqM3Xo1+O3Z+sB0zrWtdxMIJi34UG4U73MG1TTA7DJIJppHCAmgARw4YHmn1XAkggJdMWuAByXhmyQcNgfHEYTGABZMBBzeLaqZLEv5CBzVFCBJQt7B+76TkuQIHUtn7nACCaZekjS3nsDeOVs061A3LUWAr0eSPiGn-ABBM54L3QKAso4CJoQJgXA6oCCDRIOAag1ODcYCakQvfHBxIv5MECOYGgwMBJyBGIyKA-98FAJQWg1UKVEKUNYYgjhIDiHqFejpeB-D2HIKEWAkhG5REiPETPARUiiEyPVDAGB99xSUM-rqYEoJwQqDSOWaQeCV4EM4cImomDkDQMQjfQUIo+FKMkYQrhFQSFIHNEgOxZonG6Vwbom43gsCtDMYAlR7iMGwDkbwgJ4SLHSPQSQxKsSHzxIkeYwRqjknqJiXyNJKV4FSnbiAGsQ8swkg4I8TI5JXa4FsIPCplTGygAIFqHG80IDkCLCsJg6BT4sGDP6QMjSQzADDBGaMsYmEJgQMAQQxhfhVnaXFJ0LpjD9MGTQYZAYgzjMmVGGMcY5nwGAJsgZyQdmrIALJkhUMWBgB8nBH12aM4MoZjDhiOTMwijYgA)

```ts
type GetLen<T> = T extends {length: infer R} ? R : 0

type ToTuple<T, U extends any[] = []> = T extends number
  ? T extends GetLen<U>
    ? U 
    : ToTuple<T, [...U, any]>
  : T extends string
    ? T extends `${GetLen<U>}`
      ? U
      : ToTuple<T, [...U, any]>
    : never

type ToPos<T extends number|never, C = GetLen<Arr>> = [T] extends [never]
  ? T
  : `${T}` extends `-${infer R}` 
    ? Des<C, GetLen<ToTuple<R>>> 
    : T

type Des<T, V = 1, U = []> = ToTuple<T> extends [infer R, ...infer S]
  ? ToTuple<V> extends [infer A, ...infer B]
    ? Des<GetLen<[...S]>,GetLen<[...B]>, U>
    : T
  : 0

type Compare<T, U> = ToTuple<T> extends [infer R, ...infer S] 
  ? ToTuple<U> extends [infer V, ...infer W]
    ? Compare<GetLen<[...S]>, GetLen<[...W]>>
    : true
  : false

type Pop<T> = T extends [...infer S, infer R] ? [...S] : T

type Shift<T> = T extends [infer R, ...infer S] ? [...S] : T

type SliceP<T extends any[], End extends number> = [End] extends [never]
  ? T
  : Compare<ToPos<End>, GetLen<T>> extends true
    ? T
    : ToPos<End> extends GetLen<T>
      ? T
      : SliceP<Pop<T>, End>

type SliceS<T extends any[], Start> = [Start] extends [never]
  ? T
  : Start extends 0
    ? T
    : SliceS<Shift<T>, Des<Start>>

type Slice<Arr extends any[], Start extends number=never, End extends number=never> = SliceS<SliceP<Arr, End>, ToPos<Start>>
```