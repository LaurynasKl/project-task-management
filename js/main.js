import { Todo } from "./Todo.js"

const kanban = new Todo('#kanban',['Backlog', 'Todo', 'In progress', 'Done']);

const addTaskBtnDOM = document.getElementById('add-task');
const asideDOM = document.getElementById('aside');
const asideBackGroundDOM = asideDOM.querySelector('.aside-bg');
const asideCloseBtnDOM = asideDOM.querySelector('.aside-header button');
asideDOM.classList.add('show');

if(addTaskBtnDOM && asideDOM){
    addTaskBtnDOM.addEventListener('click', () => {
        asideDOM.classList.add('show');
    })

    asideBackGroundDOM.addEventListener('click', () =>{
        asideDOM.classList.remove('show');
    })

    asideCloseBtnDOM.addEventListener('click', () => {
        asideDOM.classList.remove('show');
    })

    window.addEventListener('keyup', (event) => {
        if(event.key === 'Escape'){
            asideDOM.classList.remove('show');
        };
        if(event.key === '+'){
            asideDOM.classList.add('show');
        }
    });
}

const formDOM = document.getElementById('task-form');
const formTitleDOM = document.getElementById('title');
const formDescDOM = document.getElementById('desc');
const formDeadLineDOM = document.getElementById('deadline');
const formTagsDOM = document.getElementById('tags');
if(formDOM){
    formDOM.addEventListener('submit', (event) => {
        event.preventDefault();

        kanban.addTask({
            columnIndex: 0,
            title: formTitleDOM.value,
            desc: formDescDOM.value,
            createOn: '2023-11-08',
            deadline: formDeadLineDOM.value,
            tags: formTagsDOM.value
                .split(',')
                .filter(txt => txt !== '')
                .map(txt => ({text: txt.trim(), color: '#333'})),

        });
        
                formTitleDOM.value = ' ';
                formDescDOM.value = ' ';
                formDeadLineDOM.value = ' ';
                formTagsDOM.value = ' ';
        
    })
}

// kanban.addTask({
//     columnIndex: 1,
//     title: 'Pirmos uzduoties antraste',
//     desc: 'Pirmos uzduoties pilnas aprasas... 
//     labai issamiai nupasakoja ka reikia daryti',
//     createOn: '2023-11-08 09:06:15',
//     deadline: '2023-12-24 00:00:00',
//     tags: [
//         {text: 'Design', color: '#333'}
//     ]
// });
// kanban.addTask({
//     columnIndex: 0,
//     title: 'Antra uzduotis',
//     desc: 'Antros uzduoties pilnas aprasas... labai issamiai nupasakoja ka reikia daryti',
//     createOn: '2023-11-08 10:06:45',
//     deadline: '2023-12-24 00:00:00',
//     tags: [
//         {text: 'UX', color: '#f00'},
//         {text: 'UI', color: '#090'},
//     ],
// });
// kanban.addTask({
//     columnIndex: 0,
//     title: 'Trecia uzduotis',
//     desc: 'Trecios uzduoties pilnas aprasas...issamiai nupasakoja ka reikia daryti',
//     createOn: '2023-11-08 10:15:15',
//     deadline: '2023-12-20 00:00:00',
//     tags: [
//         {text: 'Development', color: '#00c' },
//     ],
// });

console.log(kanban);