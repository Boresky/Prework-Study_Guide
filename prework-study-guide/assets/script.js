var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function ListTopics(){
    for(var x = 0; x < topics.length; x++){
    console.log(topics[x]);
    }
}

function SelectTopic(){
    if(randomTopic === 'HTML'){
        console.log("Let's Study HTML!");
    }else if(randomTopic === 'CSS'){
        console.log("Let's study CSS!");
    }else if(randomTopic === 'Git'){
        console.log("Let's Study Git!");
    }else if(randomTopic === 'JavaScript'){
        console.log("Let's study JavaScript!");
    }else{
        console.log('Please Try Again!');
        }
}        

console.log('Here are the topics we studied in the Prework:');
ListTopics();
console.log('Which Topic Should We Study First?');
SelectTopic();