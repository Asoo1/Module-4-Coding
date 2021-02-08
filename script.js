
function speakAll() {
const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    speakGoodBye(names[i]);
  } else {
    speakHello(names[i]);
  }
}
};
  class Speak {
    constructor(word,name) {
      this.word = word;
      this.name = name;
    }
     speak() {
      console.log(this.word,this.name);
    }
  }


