function talk()
{
    var know = {
        "Hi" : "Hello, I'm a ChatBot.",
        "How are you" : "I am good, thanks..!!",
        "Can you help me" : "What can I do for you..!!",
        "Like, share and save this post" : "Yes I will..!!",
        "Bye" : "Okay! We will meet soon. TC..!!"
    };

    var user = document.getElementById('userBox').value;
        document.getElementById('chatLog').innerHTML = user + "<br>";
    if(user in know)
    {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }

    else
    {
        document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand <br>";
    }
}