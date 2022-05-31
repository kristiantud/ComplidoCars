

// use this to add the testimonies to the html

var testimonies = [];

var t1 = {
    firstname: 'Jay',
    firstInitial: 'J',
    secondInitial: '',
    message: 'I have got to say this was one of the best sales experiences of my life. Professional, attentive and respectful of how I wanted the sales experience to go. From Isaiah in Sales, then Kelly in Finance, it was a pleasure to deal with the team at SMP. Great service, price and selection. Will back to purchase here again, no doubt!'
};

var t2 = {
    firstname : 'Amy',
    firstInitial: 'A',
    secondInitial: 'Z',
    message : 'I have recently purchased an SUV through SMP and Isaiah was the Sales Consultant who assisted me from start to finish. He was extremely knowledgeable, friendly and professional throughout the entire process. It took about a month for me to actually find a vehicle. During this time I did visit other dealerships to see what they could offer, and at the end of the day I went with SMP not only because they had the vehicle I wanted but the level of customer service Isaiah provided was top notch - and WAY better than the other dealerships I did visit during my \'shopping around phase\'. He genuinely cares about his clients by cultivating a solid relationship to better understand their needs so he can put them in a vehicle that checks all their boxes. I am extremely happy with my purchase, and I would recommend anyone taking the time to meet Isaiah if they are in the market for a new vehicle.'
}

var t3 = {
    firstname : 'Ashley', 
    firstInitial: 'A',
    secondInitial: 'Z',
    message : 'Our experience with Isaiah has been great! He\'s worked very hard to get us our vehicle quickly and we appreciate it very much! Thanks Isaiah and staff!'
}

testimonies.push(t1,t2,t3);
// console.log(testimonies);

// go through every testimony and add it to the html
for (var i = 0; i < testimonies.length; i ++){
    // creating the doc objects
    var testi_item = document.createElement("div");
    var testi_content = document.createElement("div");
    var in_quotes = document.createElement("image");
    var testi_message = document.createElement("div");
    var testi_msg_span = document.createElement("span");
    var out_quotes = document.createElement("image");
    var testi_sender = document.createElement("div");
    var testi_sender_name = document.createElement("span");
    var testi_firstinitial = document.createElement("span");
    var testi_secondinitial = document.createElement("span");

    // setting attributes
    testi_item.setAttribute('class','testi_item');
    testi_content.setAttribute('class', 'testi_content');
    in_quotes.setAttribute('id','in_quotes');
    in_quotes.setAttribute('src','./images/quotes1.png');
    testi_message.setAttribute('div','testi_message');
    testi_msg_span.setAttribute('id','testi_message_span');
    testi_msg_span.textContent = testimonies[i].message;
    out_quotes.setAttribute('id','out_quotes');
    out_quotes.setAttribute('src','./images/quotes2.png');
    testi_sender.setAttribute('class','testi_sender');
    testi_sender_name.setAttribute('id', 'testi_sender_name');
    testi_firstinitial.setAttribute('id','testi_initial');
    testi_firstinitial.textContent = testimonies[i].firstInitial;
    testi_secondinitial.setAttribute('id','testi_initial');
    testi_secondinitial.textContent = testimonies[i].secondInitial;

    // creating the DOM structure
    testi_message.appendChild(testi_msg_span);

    testi_content.appendChild(in_quotes);
    testi_content.appendChild(testi_message);
    testi_content.appendChild(out_quotes);

    var firstNameSubstring = testimonies[i].firstname.substring(1);


    testi_sender_name.appendChild(testi_firstinitial);
    // testi_sender_name.textContent = firstNameSubstring + " ";
    testi_sender_name.appendChild(testi_secondinitial);
    // testi_sender_name.textContent = ".";

    testi_sender.appendChild(testi_sender_name);

    testi_item.appendChild(testi_content);
    testi_item.appendChild(testi_sender);

    // testi_item
      // testi_content 
        // in_quotes
        // testi_message
        // out_quotes
      // testi_sender
        // testi_sender_name
          // testi_initial -- for both first and last names
    const testi_flexbox = document.getElementById('testi_flexbox');
    testi_flexbox.appendChild(testi_item);
}


// loading up the proper .css file
var head = document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
if (window.innerWidth <= 500){
  link.href= './smallscreen.css';
} else {
  link.href= './widescreen.css';
}
link.media = 'all';
head.appendChild(link);


// current bugs: 
// not properly styling the div in the testi_message
// not properly styling the quotes
// the name is busted too