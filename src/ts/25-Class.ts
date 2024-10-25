/**Class
 * *Constructor 建構函數:
 * 用來定義 Property(財產) 的初始值。
 *
 * *Public & Private 公開和私有:
 * Public 公有屬性，可做存取
 * Private 私有屬性，無法存取，只能在 Class 內部使用
 *
 * *inheritance 繼承:
 * extends 延伸
 * 新類別能夠以 extends 指定原型，而原型會賦予它身上的 Property 給新類別，這就叫繼承。
 * 被繼承的 class 也被稱作子類別，而賦予 Property 的則是父類別。
 * 在 class 內，只要透過 super 就能直接請父類別執行事件。
 * 如果父類別和子類別同時需要在 Constructor 定義的 Property ，就得使用 super 傳入父類別需要的值
 *
 * *Static 靜態:
 * 透過 Static 宣告的 Method 只能用 Class 呼叫，而不是 Instance (實例)。
 *
 * *Protected 保護:
 * 和 Private 很類似，差別 Private 是私有屬性，因此除了本身的 class 外，都無法存取。
 * 使用 Protected ，子類別便能存取被保護的 Property 了，
 * 而在 Instance 中，仍然無法偷看到該 Property。
 */

class Car {
  descroption: string;

  color: string;

  // 私有屬性
  private brakes: string;

  // 建構函數，定義 Property
  constructor(color: string) {
    this.descroption = '我是車子';
    this.color = color;
    this.brakes = '商業機密';
  }

  // 公有屬性
  public getDescription(): string {
    return `${this.descroption} - ${this.color}`;
  }

  // 公有屬性
  public triggerBrakes(): string {
    if (this.brakes === '商業機密') {
      return '用了商業機密';
    }
    return '沒有機密';
  }

  // 靜態
  static getComment(): string {
    return '這是初代版車子';
  }
}

/**第二個類別，CarII 從他老爸 Car 那裡繼承所有的 Method 和 Property  */
class CarII extends Car {
  public getDescription(): string {
    return `${super.getDescription()} 第二代強化版`;
  }

  public triggerBrakes(): string {
    return `${super.triggerBrakes()} 的無敵改良版`;
  }

  // 靜態
  static getComment(): string {
    return '這是第二代車子';
  }
}

const redCar = new Car('紅色');

console.log(redCar.getDescription()); // 我是車子 - 紅色

const greenCar = new CarII('綠色');

console.log(greenCar.getDescription()); // 我是車子 - 綠色 第二代強化版
console.log(greenCar.triggerBrakes()); // 用了商業機密 的無敵改良版

console.log(Car.getComment()); // 這是初代版車子
console.log(CarII.getComment()); // 這是第二代車子

console.log(redCar.triggerBrakes()); // 用了商業機密
// 'brakes' 是私用屬性，只可從類別 'Car' 中存取，看不到裡面的值
// console.log(redCar.brakes);

// 如果父類別和子類別同時需要在 Constructor 定義的 Property ，就得使用 super 傳入父類別需要的值：
class ColorClass {
  color: string;

  constructor(color: string) {
    this.color = color;
  }
}

class VersionClass extends ColorClass {
  version: number;

  constructor(color: string, version: number) {
    // 在這裡執行的 super 等同於父類別的 constructor
    super(color);
    this.version = version;
  }
}

const newVersion = new VersionClass('紅色的', 2);

// ---------------------------------------------------------------------------

// *Protected 保護

class ParentClass {
  protected genealogy: string;

  constructor() {
    this.genealogy = 'Only family read!';
  }
}

const patentInstance = new ParentClass();

// 在 Instance 中，仍然無法看到 Property
// patentInstance.genealogy; // 會錯誤

class SonClass extends ParentClass {
  getGenealogy(): string {
    return this.genealogy; // 不會有錯，因為在子類別可以讀取到 protected 的 property
  }
}

const sonInstance = new SonClass();

sonInstance.getGenealogy(); // 正確讀取
// sonInstance.genealogy; // 仍舊會出錯

export { redCar, newVersion, patentInstance, Car, CarII };
