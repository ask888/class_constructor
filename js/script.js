
class Hero {
    constructor(name, life, strength, velocity)
    {
        this.name = name;
        this.life = life;
        this.strength = strength;
        this.velocity = velocity;
        this.image = "";
    }

    generateCard(){
        var heroCard = document.createElement("div");
        heroCard.classList.add("hero-card");
        var heroClass = document.createElement("h2");
        heroClass.classList.add("hero-class");
        heroClass.innerHTML = this.constructor.name;
        heroCard.appendChild(heroClass);
        var heroImg = document.createElement("img");
        heroImg.classList.add("hero-img");
        heroImg.setAttribute("src", this.image);
        heroCard.appendChild(heroImg);

        for(var key in this){
            if(  key != "image"){
                var quality = document.createElement("div");
                quality.innerHTML = "<strong>" +key+ ": </strong>" + this[key];
                heroCard.appendChild(quality);

            }
        }

        document.body.appendChild(heroCard);
    }

}
class Human extends Hero{
    constructor(name, life, strength, velocity)
    {
        super(name, life, strength, velocity);
    }
}

class Magician extends Hero{
    constructor(name, life, strength, velocity, mana)
    {
        super(name, life, strength, velocity);
        this.mana = mana;
    }
}

class Elf extends Magician{
    constructor (name, life, strength, velocity, mana, beauty)
    {
        super(name, life, strength, velocity, mana);
        this.beauty = beauty;
    }
}

class Dwarf extends Elf{
    constructor (name, life, strength, velocity, mana, beauty)
    {
        super(name, life, strength, velocity, mana, beauty);
    }
}
var Pendalf = new Magician("Pendalf", 90, 70, 100, 100);
Pendalf.image = "img/gandalf.png";
Pendalf.generateCard();

var Aragorn = new Human("Aragorn", 80, 90, 60);
Aragorn.image = "img/human.png";
Aragorn.generateCard();

var Legolas = new Elf("Legolas", 100, 70, 100, 100, 100);
Legolas.image = "img/elf.png";
Legolas.generateCard();

var Gimli = new Dwarf("Gimli", 70, 70, 40, 60, 20);
Gimli.image = "img/dwarf.png";
Gimli.generateCard();



