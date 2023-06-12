function checkForm1 (el)
{
	var per = document.getElementById('11').value;
	if (per < 15)
	{
		console.log ("Числовая переменная < 15 ");
	}
	else if (per == 15)
	{
		console.log ("Числовая переменная = 15 ");
	}
	else
	{
		console.log ("Числовая переменная > 15 ");
	}
	return false;
}
function checkForm2 (el)
{
	var zodiac = document.getElementById('22').value;
	switch (zodiac)
	{
		case "Овен":
		alert ('Ваш знак зодиака: овен');
		break;
		case "Телец":
		alert ('Ваш знак зодиака: телец');
		break;
		case "Близнецы":
		alert ('Ваш знак зодиака: близнецы');
		break;
		case "Рак":
		alert ('Ваш знак зодиака: рак');
		break;
		case "Лев":
		alert ('Ваш знак зодиака: лев');
		break;
		case "Дева":
		alert ('Ваш знак зодиака: дева');
		break;
		case "Весы":
		alert ('Ваш знак зодиака: весы');
		break;
		case "Скорпион":
		alert ('Ваш знак зодиака: скорпион');
		break;
		case "Стрелец":
		alert ('Ваш знак зодиака: стрелец');
		break;
		case "Козерог":
		alert ('Ваш знак зодиака: козерог');
		break;
		case "Водолей":
		alert ('Ваш знак зодиака: водолей');
		break;
		case "Рыбы":
		alert ('Ваш знак зодиака: рыбы');
		break;
		default: alert ("Значение введено неверно!");
	}
	return false;
}
function num_1 ()
{
	for (var i = 0; i <= 40; i++)
	{
		console.log ("Вывод циклом FOR: " + [i]);
	}
	return false;
}
function num_2 ()
{
	var i = 0;
	while (i <= 39)
	{
		i++;
		console.log ("Вывод циклом WHILE: " + [i])
	}
	return false;
}
function num_3 ()
{
	var i = 0;
	do
	{
		i++;
		console.log ("Вывод циклом DO WHILE: " + [i])
	}
	while (i <= 39)
	return false;
}
function fun_1 ()
{
	for (var i = 25; i > 10 ; i++)
	{
		alert ("ERROR");
	}
	return false;
}
function fun_2 (el)
{
	var num_1 = document.getElementById('55').value;
	if (num_1 > 5)
	{
		alert ("Поздравляю!");
	}
	else if (confirm ("Ответ неверный - число меньше или равно пяти. Но мы всё равно можем Вас поздравить!"))
	{
		alert ("Всё равно поздравляю!");
	}
	else
	{
		alert ("Вы нажали на отмену.");
	}
	return false;
}
function fun_3 ()
{
	for (var i = 8; i <= 20 ; i++)
	{
		if (i %2 == 0)
		{
		console.log ([i]);
		}
	}
	return false;
}
function fun_4 ()
{
	for (var i = 1; i <= 7 ; i++)
	{
		if (i %2 > 0 && i != 5)
		{
		console.log ([i]);
		}
	}
	return false;
}
function fun_5 ()
{
	var arr = [0,1,2,3,4,5,6,7,8,9];
	console.log (arr);
	return false;
}
function fun_6 ()
{
	var arr = new Array();
	var arr= [0,1,2,3,4,5];
	console.log (arr);
	return false;
}
function fun_7 ()
{
	var arr = new Array (0,1,2,3);
	console.log (arr);
	return false;
}
function fun_8 ()
{
	var arr = [0,1,2,3,4,5,6,7,8,9];
	console.log ("Изначальное значение: " + arr[5]);
	arr[5] = arr[5] + 15;
	console.log ("После корректировки: " + arr[5]);
	return false;
}
function fun_9 ()
{
	var arr = [0,1,2,3,4,5,6,7,8,9];
	console.log ("Массив: " + arr);
	console.log ("Длина массива: " + arr.length);
	return false;
}
function fun_10 ()
{
	var arr = [0,1,2,3,4,5,6,7,8,9];
	for (var i = 0; i <= 9; i++)
	{
		console.log (arr[i]);
	}
	return false;
}
function fun_11 ()
{
	var arr_1 = [0,1,2,3,4,5,6,7,8,9];
	var arr_2 = [10,11,12,13,14,15,16,17,18,19];
	const res = [...arr_1, ...arr_2];
	console.log ("Результат сложения массивов: " + res);
	return false;
}
function fun_12 ()
{
	var arr = [0,1,2,3,4,5,6,7,8,9];
	console.log ("Первоначальный массив: " + arr);
	arr.splice (9,1);
	console.log ("После корретировки: " + arr);
	return false;
}
function fun_13 ()
{
	var arr = [0,1,2,3,4,5,6,7,8,9];
	console.log ("Первоначальный массив: " + arr);
	arr.splice (0,1, "50");
	console.log ("После корретировки: " + arr);
	return false;
}
function fun_14 ()
{
	var now = new Date();
	console.log ("Текущая дата: " + now);
	return false;
}
function fun_15 ()
{
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
	console.log ("Текущая дата: " + today);
	return false;
}
function fun_16 ()
{
	var rand_1 = Math.floor(Math.random() * 49) + 0;
	var rand_2 = Math.floor(Math.random() * 49) + 0;
	console.log ("Первое случайное число:" + rand_1);
	console.log ("Второе случайное число:" + rand_2);
	var res = rand_1 + rand_2;
	console.log ("Сумма:" + res);
	return false;
}
 function checkAnswer() 
 {
      var result = prompt('Как вас зовут?', 'Имя');
      if (result === null) {
        document.querySelector('#answer').textContent = "Вы отказались назвать свое имя";
      } else if (result.length > 0){
            document.querySelector('#answer').textContent = 'Привет, ' + result;
      } else {
                document.querySelector('#answer').textContent = 'Какое необычное имя... И такое короткое!';
      }
 }