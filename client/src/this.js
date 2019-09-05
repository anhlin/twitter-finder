const cameras = {
    price: 600,
    weight: 2000,
    des: () => {
        console.log(this.price);
    },
    myDes: function() {
        console.log(this.price);
    },
    setPrice(price) {
        this.price = price;
        return this;
    }
};

var salary = yearly => {
    var yearly = yearly;
    var changeBy = amount => {
        yearly += amount;
    };
    return {
        raise: () => changeBy(5000),
        lower: () => changeBy(-5000),
        current: () => yearly
    };
};

var junior = salary(70000);
console.log(junior.current());

junior.raise();
console.log(junior.current());

//Will cause error
///junior.changeBy(5000);

console.log(junior.current());

const animal = ({ sound, ls }) => {
    return {
        talk: () => console.log(sound),
        lifespan: () => console.log(ls)
    };
};

var cow = animal({ sound: 'moo', ls: '10' });
var sheep = animal({ sound: 'baa', ls: '5' });
cow.talk();
cow.lifespan();
sheep.talk();
sheep.lifespan();

const createCamera = ({ price, weight }) => ({
    price,
    weight
    /*setPrice(price) {
        this.price = price;
        return this;
    }*/
});

var camera1 = createCamera({ price: 500, weight: 20 });
console.log(camera1);

var obj = {
    id: 42,
    counter: function() {
        setTimeout(() => {
            console.log(this.id); //42
        }, 1000);
    }
};

//console.log(cameras.setPrice(500));
//console.log(cameras);
//obj.counter();

//cameras.des(); //UNDEFINED
//cameras.myDes(); //600

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    //Product.call(this, name, price);
    Product.apply(this, [name, price]);
    this.category = 'food';
}

console.log(new Food('cheese', 5).category);

function temp() {
    console.log(global + 1);
}

temp();
var global = 1;

function Car() {}

Car.prototype.drive = function() {
    console.log('vroom');
};

var honda = new Car();
honda.drive();
