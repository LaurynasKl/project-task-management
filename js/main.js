import { Todo } from "./Todo.js"

const kanban = new Todo('#kanban',['Backlog', 'Todo', 'In progress', 'Done']);

kanban.addTask({
    columnIndex: 1,
    title: 'Pirmos uzduoties antraste',
    desc: 'Pirmos uzduoties pilnas aprasas... labai issamiai nupasakoja ka reikia daryti',
    createOn: '2023-11-08 09:06:15',
    deadline: '2023-12-24 00:00:00',
    tags: [
        {text: 'Design', color: '#333'}
    ]
});
kanban.addTask({
    columnIndex: 0,
    title: 'Antra uzduotis',
    desc: 'Antros uzduoties pilnas aprasas... labai issamiai nupasakoja ka reikia daryti',
    createOn: '2023-11-08 10:06:45',
    deadline: '2023-12-24 00:00:00',
    tags: [
        {text: 'UX', color: '#f00'},
        {text: 'UI', color: '#090'},
    ],
});
kanban.addTask({
    columnIndex: 0,
    title: 'Trecia uzduotis',
    desc: 'Trecios uzduoties pilnas aprasas...issamiai nupasakoja ka reikia daryti',
    createOn: '2023-11-08 10:15:15',
    deadline: '2023-12-20 00:00:00',
    tags: [
        {text: 'Development', color: '#00c' },
    ],
});

console.log(kanban);