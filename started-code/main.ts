import {StringManipulationService} from "./main-service"
import {NumberManipulationService} from "./main-service"

// var word: string ='Hello';
var words: string ='Morning';
// var sentence:string = 'Great';
// var str: string = 'Afternoon';
// var num:number =9;
class StringManipulations implements StringManipulationService{
     print(word:string): void{

        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(4));
        console.log(word.concat(words) );
        console.log(word.slice(0,2));
        console.log(word.length);
      }

    printWithSpace(sentence:string): void{
        for(var i=0; i<sentence.length;i++){
            console.log(sentence[i+""])
        }

    }

    findVowel(str: string) : void{
        const vowels = ["a","e","i","o","u"]
        let count =0;
        for(var letter of str.toLowerCase()){
            if (vowels.includes(letter)){
                count++
            }
        }
        console.log("Number of vowels: "+count);
        
        }


    }
 
class NumbersManipulations implements NumberManipulationService{
    findPrime(num: number) : void{
        if(num==2){
            console.log(num+ " is a Prime number");
        }
        else{
            for (var i=2; i<num; i++){
                if(num % i==0){
                console.log(num+ " is not a Prime number");}
                else{
                console.log(num+ " is a Prime number");}
            }

        }


    }
    findMagic(num: number) : void{

    if(num%9==1){
        console.log(num+ " is a Magic number");
    }
    else{
        console.log(num+ " is not a Magic number");
    }
        
    }
}

let a = new StringManipulations();
a.print("Anthony");
a.findVowel("Afternoon");
a.printWithSpace("Morning");

let b = new NumbersManipulations();
b.findPrime(17);
b.findMagic(199);
