//time complexity
// worst case 0(n) average o(1)
const getHashCode = (str, tablesize) => {
    let hashcode = 17
    for(let i= 0 ; i < str.length; i++) {
        hashcode = (13 * hashcode * str.charCodeAt(i)) % tablesize;
        console.log(13 * hashcode * str.charCodeAt(i))
        console.log(str.charCodeAt(i))
    }
//    console.log(hashcode)
    return hashcode
}

class HashTable{
    constructor() {
    this.table = [],
    this.tablesize = 3,
    this.size = 0
    }

    add = (key,value) => {
        let index = getHashCode(key,this.tablesize);
  //     console.log(index)
        if(this.table[index] === undefined) 
        { 
            this.table[index] = [[key ,value]]; 
            this.size++
            return
        }
        let inserted = false;

        for(let i = 0 ; i < this.table[index].length ; i++) {

            if(this.table[index][i][0] === key)  {
                this.table[index][i][1] === value
                inserted = true;
            }
        }

        if(!inserted) { this.table[index].push([key, value]);  this.size++; }
    }

    getSize = () => { return this.size; }
    get = key => {
        let index = getHashCode(key, this.tablesize);

        if(this.table[index] !== undefined) {
     
            this.table[index].forEach(el => {
            if(el[0] === key) return el[1];
        })

    }
        return this.table;
    }
}

    let mytable = new HashTable();

       //console.log(mytable.get("1"))
//console.log(mytable.getSize())
       mytable.add("fname","kb")
       mytable.add("lname","leul")

       console.log(mytable.get("fname"))
  //     console.log(mytable.getSize())
//console.log(4%3)