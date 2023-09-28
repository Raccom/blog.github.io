# 笔记 {#note}


## 优先级

```java
// 因为在 Java 中 + 操作符的优先级大于 ==，所以输出部分表达式等于 “s1 == s2 is:runoob” == “runoob”，该表达式计算结果为 false。
```


## int 与 int 计算无法保留小数后几位 需要转成一个float
```java
public float division(int a, int b) {
    // write your code here
    float floatA = (float)a;
    return floatA / b;
}
```

## Math.pow 返回的是double类型

## 判断一个数是否由两个不同的2的幂次方数组成
```java
Integer.bitCount(n)==2; // 判断二进制的值是否有两个1   2的幂次方数二进制只有一个1 两个不同的相加只有两个1

dec & (dec - 1);  // 判断dec是否是2的幂次方数 

pow2 - 1 // ：将pow2的二进制表示中的最高位1变为0，并将其后的所有位都设置为1。
   // 例如，对于8（二进制表示为1000），8 - 1将得到7（二进制表示为0111）。

pow2 & (pow2 - 1) // ：执行位运算AND操作，将pow2的二进制表示与(pow2 - 1)的二进制表示进行按位与操作。
    // 由于(pow2 - 1)中最高位的1在二进制表示中的位置低于pow2中的最高位1，按位与操作将会将最高位的1以及其后的所有位都变为0。
```

## String.format //格式字符串,%s字符串%c字符%d整型%.2f 浮点型案例，将一个人的信息格式化输出

## Integer.MIN_VALUE 最小值

## 异或运算 ^   
```java
a^b
```

## biginteger
```java
BigInteger num1 = new BigInteger("1234567890");
BigInteger num2 = BigInteger.valueOf(9876543210L);
num1.xor(num2); //做异或运算
```


## 任意类型的高精度计算
```java
public class Solution {
	// write your code here
	public<T> double numberSummation(T o1, T o2){
		BigDecimal num = new BigDecimal(o1.toString()).add(new BigDecimal(o2.toString()));
		return num.doubleValue();
	}
}
```


## Π
```java
double PI = Math.acos(-1);
```

## 数学
```java
Math.sqrt() //开平方根

// 四舍五入

import java.text.DecimalFormat;
import java.math.RoundingMode;

double number = 3.145;


DecimalFormat df = new DecimalFormat("#.##");
String roundedNumber = df.format(number);  // 3.15

// 不四舍五入
DecimalFormat df = new DecimalFormat("#.##");
df.setRoundingMode(RoundingMode.DOWN);
String roundedNumber = df.format(number);
```

## 随机数种子
```java
Random ran=new Random(seedValue);

// Random类中还提供各种类型随机数的方法：
nextInt() // ：返回一个随机整数(int)
nextInt(int n) // ：返回大于等于0、小于n的随机整数(int)
nextLong() // ：返回一个随机长整型值(long)
nextBoolean() // ：返回一个随机布尔型值(boolean)
nextFloat() // ：返回一个随机浮点型值(float)
nextDouble() // ：返回一个随机双精度型值(double)
nextGaussian() // ：概率密度为高斯分布的双精度值(double)
```

## 日期格式化去除0
```java
Date date = new Date();
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy年M月d日");
return sdf2.format(sdf.parse(str));
```

## 无参构造器 public Student(){}

## equal
```java
// 在条件判断中，使用了b.equals(0)来判断b是否等于零。然而，b是一个基本数据类型int，而不是一个对象，因此不能使用equals()方法。应该使用b == 0来进行判断。
```

## private 私有 
```java
// protected 保护的 子类也能用
```

## 自定义注解
```java
//注释加入到文档
@Documented
//注解保留到什么阶段
@Retention(RetentionPolicy.RUNTIME)
//指定注解用在哪些目标上
@Target({ ElementType.FIELD})

public @interface MyAnnotation {
    // 定义注解的元素

    // String value(); // 定义一个名为"value"的注解元素
    String name();
    int age();
}

-------使用

@MyAnnotation(name = "Mair",age = 30)
private static Person person3;
class Person {
    int age;
    String name;
}
```

## 遍历枚举值
```java
for(PropertyEnum p: PropertyEnum.values()){
            
}
```

## final
```java
//final 修饰的变量为编译期常量，所以只需要在变量 b 前面新增 final 关键字，这会使得在编译阶段 c 也变成了编译期常量，所以保证了 a 与 c相等，但 d 无法在编译期被确定，所以 b 与 e 的内存地址是不相同的。

public class Solution {
    String a = "hello2";
    final String b = "hello";
    String d = "hello";
    // Do not modify the code below
    String c = b + "2";
    String e = d + "2";
}
```

## 调用内部类
```java
public class Solution {

	public void methodBody() {
		System.out.println("Methods for external classes");
		// write your code here
		new Solution.Heart().beat();
	}

	public class Heart {
		public void beat() {
			System.out.println("Heartbeat");
		}
	}
}
```


## final常量加载类体
```java
// 因为如果是有final的情况下，str就是常量，则编译期间，会放入常量池。通过Solution.str访问变量名的时候，不会加载该类的类体，就不会触发该类中相关的代码（如static代码块），以节省内存空间。
// 而去掉final后，访问Solution.str，则会导致这个变量的类体被加载，static代码块也会被执行

public class Solution {

    public static  String str = "B";
    
    static{
        System.out.print("A");
    }
 
}

// 访问B时会加载静态代码块
```

## list 排序
```java
public List<String> sortName(List<String> list) {
    list.sort(new Comparator<String>(){
        public int compare(String s1, String s2){
            return s1.compareToIgnoreCase(s2);
        }
    });
    return list;
}
```

## 判断map是否有某个key
```java
map.containsKey(key);
```

## sort
```java
Arrays.sort(arr1); // 会影响原数组
Arrays.equals(arr1, arr2);  // 判断数组元素是否全等
```



## Map按key排序
```java
public static Map<String, Integer> sortMap(Map<String, Integer> map) {
    // write your code here
    TreeMap tree = new TreeMap(map);
    return tree;
}
```

## 去除有3或3的倍数
```java
public List<Integer> removeNumber(List<Integer> list) {
        Iterator<Integer> i = list.iterator();
        while(i.hasNext()){
            Integer o = i.next();
            if(o % 3 == 0 || o.toString().contains("3")){
                i.remove();
            }
        }
        return list;
    }
// 删除时不能用for循环 删 并发导致迭代器异常  需要使用迭代器删除

list.removeIf(num -> (num % 3 == 0) || (num.toString().contains("3")));
```

## list可以直接输出
```java
System.out.println(blist);
```


## 泛型上下限
```java
public class Info<T> {

    private T t;

    public void set(T t){
        this.t = t;
    }

    public T get(){
        return t;
    }
}

public class Solution {
    public Number upperLimit (Info<? extends Number> i ){
        return i.get();
    }
    public Object lowerLimit (Info<? super String> i){
        return i.get();
    }
}
```

## 反转linkedList
```java
Collections.reverse(res);
```

## 遍历map
```java
public static void printMap(Map<String, String> map) {
    // write your code here
    String res = "{";
    int index = map.size();
    for(Map.Entry<String, String> entry : map.entrySet()){
        res += entry.getKey() + " : " + entry.getValue();
        index--;
        if(index!=0){
            res += ", ";
        }else{
            res += "}";
        }
    }
    System.out.println(res);
}
```

## 根据包装类.calss 创建数组
```java
this.arr = (T[])Array.newInstance(Integer.class, size);
```

## 线程安全List
```java
 // 三种线程安全的容器

// 使用Vector
Vector<Integer> vector = new Vector<>();

// 使用Collections的静态方法synchronizedList(List< T> list)
List<Integer> list = new ArrayList<>();
List<Integer> syncList = Collections.synchronizedList(list);

// 使用CopyOnWriteArrayList容器
CopyOnWriteArrayList<Integer> copyOnWriteArrayList = new CopyOnWriteArrayList<>();
// return vector;
// return syncList; // 写入性能最好
// return copyOnWriteArrayList; // 写入性能最差，读取性能最好
```

## list 复制
```java
// 正确方式1：
List<Object> target = new ArrayList<>(Arrays.asList(new Object[source.size()]));
Collections.copy(target,source);

// 正确方式2：
List<String> target = new ArrayList<>(source);

// 正确方式3：
List<String> target = new ArrayList<>();
target.addAll(source);
```

## map排序
```java
// map是无序的 如果需要排序则需要使用treemap， 传入重写compare类， 然后调用put方法时按照compare方法自动排序

Map<Student, Integer> res = new TreeMap<>(new Comparator<Student>() {
    @Override
    public int compare (Student s1, Student s2) {
        return s1.age - s2.age;
    }
});
```

