//Дразнилки

// var bodyParts = ['голова', 'нога', 'жопа', 'хуй',];
// var adjectives = ['тупее', 'кривее', 'вонючей', 'короче',];
// var bodyPartsAnimal = ['хобот', 'копыто', 'шерсть', 'пятак',]
// var animals = ['слон', 'жираф', 'хомяк', 'кобыла',];

// var randomBodyPart = bodyParts[ Math.floor (Math.random() * bodyParts.length)];
// var randomAdjective = adjectives[ Math.floor (Math.random() * adjectives.length)];
// var randomBodyPartAnimal = bodyPartsAnimal[ Math.floor (Math.random() * bodyPartsAnimal.length)];
// var randomAnimal = animals[ Math.floor (Math.random() * animals.length)];

// var durtyWords = [ 'У тебя', randomBodyPart, 'еще более', randomAdjective, 'чем', randomBodyPartAnimal,  'у', randomAnimal]
// console.log (durtyWords.join(' '))
// console.log (durtyWords.join(' '))
// console.log (durtyWords.join(' '))
// console.log (durtyWords.join(' '))
// console.log (durtyWords.join(' '))

// var name = "Николай";
// console.log("Привет, " + name);
// if (name.length > 6) {
//    console.log("Ну и длиннющее же у вас имя!");
// }

//  Цикл for
// for (a = 3; a<10000; a = a*3) {
//   console.log (a)
// }

// Цикл while
// var a = 3
// while (a<1000) {
//   console.log (a);
//   a = a*3;
// } 

// var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
// for (a = 0; a<animals.length; a++) {
//   animals[a] = animals[a] + ' - прекрасное животное'  
// }
// console.log (animals)



// var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// var randomString = "";

// while  (randomString.length < 6) {
//   randomString += alphabet [Math.floor (Math.random() * alphabet.length)]
// }
// console.log (randomString)


// var input = "javascript is awesome";
// var output = "";

// for (i = 0; i < input.length; i++) {

//   (input [i] == 'a') ? output += '4':
//   (input [i] == 'e') ? output += '3':
//   (input [i] == 'o') ? output += '0':
//   (input [i] == 'i') ? output += '1':
//   output += input [i]


// //   if (input [i] == 'a') {
// //     output += '4'
// //   } else if (input [i] == 'e') {
// //     output += '3'
// //   } else if (input [i] == 'o') {
// //     output += '0'
// //   } else if (input [i] == 'i') {
// //     output += '1'
// //   }  else {
// //     output += input [i]
// //   }

// }
// console.log (output)

// //Игра Висилица 

// var words = [
//     "программа",
//     "макака",
//     "прекрасный",
//     "оладушек"
// ];

// // Выбираем случайное слово
// var word = words[Math.floor(Math.random() * words.length)];

// // Создаем итоговый массив
// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }
// var remainingLetters = word.length;
// var steps = word.length + 5; // количество шагов, которое я хочу задать

// // Игровой цикл
// while (remainingLetters > 0 && steps > 0) {
//     // Показываем состояние игры
//     alert(answerArray.join(" "));
//     alert( 'Осталось ходов: ' + steps)
    
//     // Запрашиваем вариант ответа
//     var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.").toLowerCase();
//     if (guess === null) {
//         // Выходим из игрового цикла
//         break;
//     } else if (guess.length !== 1) {
//         alert("Пожалуйста, введите одиночную букву.");
//     } else {
//         // Обновляем состояние игры
//         for (var j = 0; j < word.length; j++) {
//                 if (word[j] === guess && answerArray[j] == '_') {
//                  answerArray[j] = guess;
//                  remainingLetters--;
//                 }
//             }
//         steps--;
//     }
//     // Конец игрового цикла
// }

// if (remainingLetters == 0) {
//     alert(answerArray.join(" "));
//     alert("Отлично! Было загадано слово " + word);
// } else {
//     alert ('Вы проиграли')
//     alert("Было загадано слово " + word);
// }
// // Отображаем ответ и поздравляем игрока

// // Конец игры Висилица

// var areArraysSame = function (a, b) {
//     if (a.length !== b.length) {
//         return console.log (false)
//     }
//     for (i = 0; i < a.length; i++){
//         if  (a[i] !== b[i]) {
//            return console.log (false)
//         } else {
//             return console.log (true)
//         }
//     }
// }

// areArraysSame([1, 2, 3], [4, 2, 6]);
// areArraysSame([1, 2, 3], [1, 2, 3]);
// areArraysSame([1, 2, 3], [1, 2, 3, 4]);



//Игра Висилица 

// var words = [
//     "программа",
//     "макака",
//     "прекрасный",
//     "оладушек"
// ];

// // Выбираем случайное слово
// let pickWord = function (array) {
//    return array [Math.floor(Math.random() * array.length)]
// }
// var word = pickWord (words)

// // Создаем итоговый массив

// var setupAnswerArray = function (word) {
//     var answerArray = []
//     for (var i = 0; i < word.length; i++) {
//        answerArray[i] = "_";
//     }
//     return answerArray
// }
// var answerArray = setupAnswerArray(word);

// var remainingLetters = word.length;
// var steps = word.length + 5; // количество шагов, которое я хочу задать


// // Игровой цикл
// while (remainingLetters > 0 && steps > 0) {
//     // Показываем состояние игры

//     var showPlayerProgress = function (answerArray) {
//         alert(answerArray.join(" "))
//         alert( 'Осталось ходов: ' + steps)
//     };
//     showPlayerProgress(answerArray);
  
//     // Запрашиваем вариант ответа

//     var getGuess = function () {
//         var letter = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.").toLowerCase();
//         return letter;
//     }
//     var guess = getGuess();

//     var updateGameState = function (guess, word, answerArray) {
//         let allGuess = 0;
//         for (var j = 0; j < word.length; j++) {
//             if (word[j] === guess && answerArray[j] == '_') {
//              answerArray[j] = guess;
//              allGuess ++
//             }
//         }
//         return allGuess
//         // Обновляет answerArray согласно ответу игрока (guess)
//         // возвращает число, обозначающее, сколько раз буква guess
//         // встречается в слове, чтобы можно было обновить значение
//         // remainingLetters
//     };

//     if (guess === null) {
//         // Выходим из игрового цикла
//         break;
//     } else if (guess.length !== 1) {
//         alert("Пожалуйста, введите одиночную букву.");
//     } else {
//         // Обновляем состояние игры
//         var correctGuesses = updateGameState(guess, word, answerArray);
//         remainingLetters -= correctGuesses;
//         steps--;
//     }
//     // Конец игрового цикла
// }

// var showAnswerAndCongratulatePlayer = function (answerArray) {
//     if (remainingLetters == 0) {
//         alert(answerArray.join(" "));
//         alert("Отлично! Было загадано слово " + word);
//     } else {
//         alert ('Вы проиграли')
//         alert( 'Было загадано слово ' + word);
//     }
//     // С помощью alert показывает игроку отгаданное слово 
//     // и поздравляет его с победой
// };
// showAnswerAndCongratulatePlayer(answerArray);


// Для задержки анимации можно воспользоваться методом delay. 
// С помощью delay, fadeOut и fadeIn заставьте какой-нибудь 
// элемент плавно исчезнуть, а затем, через пять секунд, снова 
// проявиться.



// var counter = 1;
// var printMessage = function () { 
//  console.log("Ты смотришь в консоль уже " + counter + " сек");
//  counter++;
//  if (counter == 10) {
//     clearInterval(intervalId)
//  }
// };
// var intervalId = setInterval(printMessage, 1000);


//Анимация 

// var leftOffset = 0;
// var moveHeading = function () {
//     $("#firstId").offset({ left: leftOffset });
//     leftOffset++;
//     if (leftOffset > 200) {
//     leftOffset = 0;
//     } 
// };
// setInterval(moveHeading, 30);


// Движение за мышкой

// $("html").click(function (event) {
//     $("#firstId").offset({
//         left: event.pageX,
//         top: event.pageY
//     });
// });


// Используйте setInterval для анимации заголовка h1, двигая его по квадрату, вдоль краев страницы. 
// Пусть он переместитсяна 200 пикселей вправо, на 200 пикселей вниз, 200 пикселей 
// влево, 200 пикселей вверх, а затем начнет с начала. Подсказка: 
// нужно запоминать текущее направление (вправо, вниз, влево 
// или вверх), чтобы знать, увеличивать или уменьшать для заголовка отступы слева (left) и сверху (top). 
// Кроме того, при достижении угла квадрата нужно будет менять направление.

// var leftOffset = 0;
// var topOffset = 0;

// var moveHeading = function () {
//     $("#firstId").offset({ left: leftOffset, top: topOffset });
//     // движение в право
//     if ( topOffset == 0 ) {
//         leftOffset ++;
//     }
//     // движение вниз
//     if ( leftOffset >= 200 ) {
//         leftOffset = 200
//         topOffset ++
//     } 
//     // движение влево
//     if ( topOffset >= 200 ) {
//         topOffset = 200;   
//         leftOffset --     
//     }
//     // движенние вверх
//     if (leftOffset <= 0 ) {
//         leftOffset = 0;
//         topOffset --;
//     }
// };

// var b = 2
// var square = setInterval(moveHeading, b);

// var stop =  function () {
//     if (b > 0) {
//         clearInterval (square)
//         $("#firstId").text("у тебя осталось: " + b + "кликов, сука")
//         b --
//         square = setInterval(moveHeading, b);
//     }
//     else {
//         clearInterval (square) 
//         $("#firstId").text('ты заебал клацать сюда!!')
//     }
// }

// $("#firstId").click(stop)




// Игра Найти клад 

// Получить случайное число от 0 до size-1
// var getRandomNumber = function (size) {
//     return Math.floor(Math.random() * size);
// };

// var width = 800;
// var height = 800;
// var clicks = 0;

// // Случайная позиция клада
// var target = {
//     x: getRandomNumber(width),
//     y: getRandomNumber(height)
// };
// // Вычислить расстояние от клика (event) до клада (target)
//  var getDistance = function (event, target) {
//     var diffX = event.offsetX - target.x;
//     var diffY = event.offsetY - target.y;
//     return Math.sqrt((diffX * diffX) + (diffY * diffY));
// };

// // Получить для расстояния строку подсказки
// var getDistanceHint = function (distance) {
//     if (distance < 10) {
//     return "Обожжешься!";
//     } else if (distance < 20) {
//     return "Очень горячо";
//     } else if (distance < 40) {
//     return "Горячо";
//     } else if (distance < 80) {
//     return "Тепло";
//     } else if (distance < 160) {
//     return "Холодно";
//     } else if (distance < 320) {
//     return "Очень холодно";
//     } else if (distance < 500) {
//     return "Очень очень холодно";
//     } else {
//     return "Замерзнешь!";
//     }
// }
// $("#map").click(function (event) {
//     clicks++;
//     // Получаем расстояние от места клика до клада
//     var distance = getDistance(event, target);
//     // Преобразуем расстояние в подсказку
//     var distanceHint = getDistanceHint(distance);
//     // Записываем в элемент #distance новую подсказку
//     $("#distance").text(distanceHint);
//     $('#steps').text('Осталось: ' + (10 - clicks) + (' шагов'))
//     if (distance < 8) {
//         alert("Клад найден! Сделано кликов: " + clicks);
//     }
//     if (clicks == 10) {
//         alert ("Конец игры!")
//     }
// });



// Игра гонки

var Car = function (x, y) {
    this.x = x;
    this.y = y;
    this.draw();
    this.speed = 5
};

Car.prototype.draw = function () {
    var carHtml = '<img src="img/car.png">';
   
    this.carElement = $(carHtml);

    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    });

    $("body").append(this.carElement);
};

Car.prototype.moveRight = function (speed) {
    this.x += speed;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};
Car.prototype.moveLeft = function (speed) {
    this.x += speed;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};
Car.prototype.moveUp = function () {
    this.y += this.speed;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};
Car.prototype.moveDown = function () {
    this.y += this.speed;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

var tesla = new Car(20, 20);
var nissan = new Car(100, 200);


setInterval (tesla.moveRight.bind(tesla)(10), 30)
setInterval (nissan.moveRight(10), 30)
