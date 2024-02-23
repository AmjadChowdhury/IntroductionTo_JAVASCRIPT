class vehicle{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('Gari chole na chole na chole na re');
    }
}

class bus extends vehicle{
    constructor(name,price,seat,ticketPrice){
        super(name,price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

class truck extends vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load = load;
    }

}

const truckObj = new truck('S alam',25000000,'5000kg');
console.log(truckObj);
// truck { name: 'S alam', price: 25000000, load: '5000kg' }