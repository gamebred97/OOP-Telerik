
let input = [
'10',
'AddWish Electric Scooter 2000Z;1536.50;Stefan',
'AddWish Fortnite Skin;3000;Stefan',
'AddWish AMD Radeon;4099.99;Pesho',
'AddWish Apple AirPods;200000;Kiril',
'AddWish Socks;10000;Tosho',
'AddWish Swater;999;Stefan',
'FindWishesByChild Stefan',
'DeleteWishes Stefan',
'FindWishesByChild Stefan',
'FindWishesByPriceRange 100000;200000']

// let input = [
//     '8',
// 'AddWish Electric Scooter 2000Z;3500.05;Rayko Petrov',
// 'AddWish Fortnite Skin;3000;Rayko Petrov',
// 'AddWish AMD Radeon;16400;Hristo',
// 'AddWish Apple AirPods;21111.50;Nadya',
// 'FindWishesByChild Toshko',
// 'DeleteWishes Rayko Petrov',
// 'FindWishesByChild Rayko Petrov',
// 'FindWishesByPriceRange 5000;30000',
//]

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let print = this.print || console.log;

class SantaHelper {

    constructor(){
        this.wishes = [];
    }

    addWish(item, price, child){
        this.wishes.push({item, price, child});
        print("Wish added")
    }

    deleteWish(child){

        const initialCount = this.wishes.length;
        this.wishes = this.wishes.filter(el => el.child !== child)
        const deletedWishCount = initialCount - this.wishes.length;

        if(initialCount > 0){
            print(`${deletedWishCount} Wishes deleted`);
        } else {
            print('No Wishes found');
        }

    }

    findWishByPrice(fromPrice , toPrice){

         
        const wishes = this.wishes.filter(el => el.price >= fromPrice && el.price <= toPrice)
        .sort((a, b) => a.item.localeCompare(b.item));;

        if (wishes.length === 0){
            print('No Wishes found')
        } else {
            wishes.forEach(wish => print(`{${wish.item};${wish.child};${Number(wish.price).toFixed(2)}}`))
        }
    }

    findWishByName(name){
        const wishes = this.wishes.filter(el => el.child === name)
        .sort((a, b) => a.item.localeCompare(b.item));

        if (wishes.length === 0){
            print('No Wishes found');
            
        } else {
            wishes.forEach(wish => print(`{${wish.item};${wish.child};${Number(wish.price).toFixed(2)}}`))
        }
    }
}

// const test = new SantaHelper()
// test.addWish('test' , 324, 'testt')
// test.addWish('tEEst' , 32, 'teeeeestt')
// test.addWish('tesTT' , 322354, 'testtttt')
// //console.log(test.getWish());
// test.deleteWish('teeeeestt')
// //console.log(test.getWish());

// //test.findWishByPrice(300, 330)
// test.findWishByName('teeeeestt')

const commands = +gets();
const helper = new SantaHelper()

for (let i = 0; i < commands; i++){

    let currentCommand = gets()
    
    if(currentCommand.startsWith('AddWish')){
        let index = currentCommand.indexOf(' ');
        let data = currentCommand.slice(index).trim().split(';')
        
        helper.addWish(data[0], data[1], data[2])

    } else if (currentCommand.startsWith('DeleteWishes')){
        let index = currentCommand.indexOf(' ');
        let data = currentCommand.slice(index).trim()
        
        helper.deleteWish(data)
    
    } else if (currentCommand.startsWith('FindWishesByPriceRange')){
        let index = currentCommand.indexOf(' ');
        let data = currentCommand.slice(index).trim().split(';')
        
        helper.findWishByPrice(Number(data[0]), Number(data[1]))
   
    } else if (currentCommand.startsWith('FindWishesByChild')){
        let index = currentCommand.indexOf(' ');
        let data = currentCommand.slice(index).trim()
        
        helper.findWishByName(data)
    }
}