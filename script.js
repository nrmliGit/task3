class Message{
    gettime() {
        let currentTime = new Date();
        return `${currentTime.getHours()}:${currentTime.getMinutes()}`
    }
    constructor(authorName, text){
        this.authorName = authorName;
        this.sendingDate =this.gettime();
        this.text = text;
    }
    toString(){ 
        console.log(String(this.authorName + " " + this.sendingDate + " " + this.text))
    }
    toHTML(){
        let x=`<p>${this.sendingDate} ${this.authorName}: ${this.text}</ p>`
    }
}

var arr = [];
class Messenger extends Message{
    constructor(authorName, sendingDate, text){
        super(authorName, sendingDate, text)
    }
    show_history(){ 
        arr.forEach(
            function(value){
                console.log(value.sendingDate+" "+ value.authorName+ " " +value.text) 
            }
        )
    }
    send(authorName, text){
        let newMessage = new Message(authorName,text)
      arr.push(newMessage)
    }
}


let nameInput=document.querySelector('.name');
let messageInput=document.querySelector('.txt');
let history=document.querySelector('.firstEmptyDiv')
let button1=document.querySelector('.sendButton');
let adding=document.querySelector('.secondEmptyDiv');

button1.addEventListener('click',function(event){
    event.preventDefault();
     
    let messenger2 = new Messenger();
    messenger2.send(nameInput,messageInput)
})