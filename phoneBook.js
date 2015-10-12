'use strict';

var phoneBook=[]; // Здесь вы храните записи как хотите
//функция создания записи
var note=function(name,phone,email)
{
	this.name=name.replace;
	this.phone=phone.replace(/[\+\-\s+\(\)]/g, '');
	this.email = CorrectEmail(email) ? email : null;
	this.compare = function(query)
	{
        return query === undefined || this.name.indexOf(query) >= 0 || this.phone.indexOf(query.replace(/[\+\-\s+\(\)]/g, '')) >= 0 || this.email.indexOf(query) >= 0;
    }
    this.toString = function() 
	{
        return this.name + ", " + this.phone + ", " + this.email;
    }
}
function CorrectEmail(email) { 
var iter = 0; 
for (var k in email)
    { 
    if (email[k] === "@") 
    { 
        iter ++; 
        if (iter === 2) 
		    { 
            return false; 
        } 
    } 
} 
var norm = /.+@.+\..+/i; 
var address = email.match(norm); 
if (address === null) 
    { 
    return false; 
    } 
    else 
    {
    return true;
    } 
}
/*
   Функция добавления записи в телефонную книгу.
*/
module.exports.add = function add(name, phone, email) {
var correctName = /^[ _\-a-zа-я0-9]+$/i;
var correctPhone = /^\+?\d{0,2} *(\d{3}|\(\d{3}\)) *\d{3}(-| *)?\d(-| *)?\d{3}$/;
var correctaddress = /^[_\-a-zа-я0-9]+@[_\-a-zа-я0-9]+(\.[a-zа-я0-9]+)+$/i;
    if(correctName.test(name)&& correctPhone.test(phone)&& correctaddress.test(email)) 
	{
        phoneBook.push(new note(name, phone, email));
    }
};

/*
   Функция поиска записи в телефонную книгу.
*/
module.exports.find = function find(query) {
	var iteration=0;
    for (var count=0; count<phoneBook.length; count++) 
	{
        if (phoneBook[count].compare(query)) 
		{
            console.log(phoneBook[count].toString());
            iteration++;
        }
    }
    console.log("Найдено " + iteration + "записей");
};

/*
   Функция удаления записи в телефонной книге.
*/
module.exports.remove = function remove(query) {
	var iteration= 0;
    for (var count=0; count<phoneBook.length; count++) 
	{
        if (phoneBook[count].compare(query)) {
            console.log(phoneBook[count].toString());
            phoneBook.splice(count--, 1);
            iteration++;
        }
    }
    /* Выводим кол-во удаленных записей */
    console.log(" Удалено " + iteration + " записей");

};

