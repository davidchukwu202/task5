class AnimmalKingdom {
    constructor(name){
        this.name= name;
        
    }

}

class Arthropoda extends AnimmalKingdom {
    constructor(name,without_bone,cold_blooded){
        super(name);
        this.cold_blooded =cold_blooded;
        this.without_bone= without_bone;

    }

}
const ButterFly = new Arthropoda("butterfly","yes","yes");

class Fish extends AnimmalKingdom {
    constructor(name,with_bone,cold_blooded){
        super(name);
        this.cold_blooded= cold_blooded;
        this.with_bone=with_bone;
    }
}
const Shark= new Fish("shark","yes","yes");

class  Amphibia extends AnimmalKingdom {
    constructor(name,with_bone,cold_blooded){
        super(name);
        this.cold_blooded=cold_blooded;
        this.with_bone=with_bone;
    }
}
const frog= new Amphibia("frog","yes","yes");

class Reptiles extends AnimmalKingdom{
    constructor(name, with_bone,cold_blooded){
        super(name);
        this.with_bone=with_bone;
        this.cold_blooded=cold_blooded;

    }
}
const tortoise= new Reptiles("tortoise","yes","yes")

class Aves extends AnimmalKingdom{
    constructor(name, with_bone,warm_blooded){
        super(name);
        this.with_bone=with_bone;
        this.warm_blooded=warm_blooded;

    }
}
const birds= new Aves ("birds","yes","yes")

class mammals extends AnimmalKingdom{
    constructor(name, warm_blooded,with_bone){
        super(name);
        this.with_bone=with_bone;
        this.warm_blooded=warm_blooded;

    }
}
const cat= new mammals("cat","yes","yes")


console.log(ButterFly);
console.log(Shark);
console.log(tortoise);
console.log(birds);
console.log(cat);