
// Завдання 1
function myUUIDTask() {
    const uuid = require('uuid').v4;
    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Щоб отримати UUID, введіть 1: ', (val) => {
        if (Number(val) === 1) {
            console.log('Згенерований UUID:', uuid());
        } else {
            console.log('Некоректне значення!');
        }
        rl.close();
    });
}
//myUUIDTask();


// Завдання 2
function myColorNotifyTask() {
    const clr = require('colors');
    const notify = require('node-notifier');
    const rainbowMsg = 'Цей текст буде кольоровим, як веселка!';
    console.log(rainbowMsg.rainbow);
    notify.notify({
        title: 'Тестове повідомлення',
        message: 'Це повідомлення з аудіо супроводом',
        sound: true
    });
}
//myColorNotifyTask();


// Завдання 3
function myFileInfoTask(fileArg) {
    const pathMod = require('path');
    const osMod = require('os');
    if (!fileArg) {
        console.log('Вкажіть абсолютний шлях до файлу!');
        process.exit(1);
    }
    if (!pathMod.isAbsolute(fileArg)) {
        console.log('Шлях має бути абсолютним!');
        process.exit(1);
    }
    const absPath = pathMod.resolve(fileArg);
    const fname = pathMod.basename(fileArg);
    const ext = pathMod.extname(fileArg);
    let osName = 'Невідомо';
    switch (osMod.type()) {
        case 'Windows_NT': osName = 'Windows'; break;
        case 'Linux': osName = 'Linux'; break;
        case 'Darwin': osName = 'macOS'; break;
    }
    console.log('Абсолютний шлях:', absPath);
    console.log('Імʼя файлу:', fname);
    console.log('Розширення:', ext);
    console.log('ОС:', osName);
}
//myFileInfoTask("C:/Users/misha/Desktop/file.txt");


// Завдання 4
function myCoinGame() {
    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const flip = Math.random() < 0.5 ? 1 : 2;
    rl.question('Виберіть: 1 — Орел, 2 — Решка: ', (userInput) => {
        const userPick = Number(userInput);
        if (![1,2].includes(userPick)) {
            console.log('Введіть 1 або 2!');
        } else if (userPick === flip) {
            console.log('Вітаю, ви вгадали!');
        } else {
            console.log('Не пощастило, випало:', flip === 1 ? 'Орел' : 'Решка');
        }
        rl.close();
    });
}
//myCoinGame();
