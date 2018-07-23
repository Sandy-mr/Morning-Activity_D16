

function getImageNamesFromObject(object) {
   var imageList = [];
   for (key in object) {
      if (key.includes("img")) {
          imageList.push(object[key]);
      }
   }
   return imageList;
}


var jennyObj = {
   name: "jenny",
   img_40x40: "selfy-ig-profile.png",
   job: 'seamstress',
   age:  28,
   profileActive: false,
   img_40x40: "thumnail-me.jpg",
   img_100x100: "jenny-profile.jpg",
   img_244x244: "frend-kitkat.jpg",
   img_200x200: "penguin-hat.png",
}

var rufusDolanObj = {
   name: "rufus",
   img_50x50: "srs-photo.png",
   job: 'cook',
   age:  48,
   hasFace: false,
   img_100x100: "glamour-shot.png",
   img_300x200: "at-the-game.png",
}

var userImageList1 = getImageNamesFromObject(jennyObj)
var userImageList2 = getImageNamesFromObject(rufusDolanObj)

console.log("Should rerturn srs-photo.png and returns "+userImageList2[0]);
console.assert(userImageList2[0] === "srs-photo.png");

console.log("Should rerturn glamour-shot.png and returns  "+userImageList2[1]);
console.assert(userImageList2[1] === "glamour-shot.png");

console.log("Should rerturn at-the-game.png and returns "+userImageList2[2])
console.assert(userImageList2[2] === "at-the-game.png");

console.log(userImageList1);
console.log(userImageList2);
//=> ["srs-photo.png", "glamour-shot.png", "at-the-game.png"]