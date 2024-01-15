let todolist=[
	{item : 'class' , duedate: '1/12/2024',} ,
	{item: 'library' , duedate :'1/12/2024'},
	
 
	
];

display();

function addtodo(){
	let todoelement=document.querySelector('.todo-input');

	let tododate=document.querySelector('.todo-date');

	let todoItem= todoelement.value;
	let todoDate = tododate.value;

	todolist.push({item:todoItem , duedate : todoDate});
 
	todoelement.value=' ';
	tododate.value='';
 
	display();
}


function display(){
	let displaytodo = document.querySelector('.todo-container');
	 
	let newHtml=' ';

	for(let i = 0; i< todolist.length ; i++){
		let{item , duedate} = todolist[i];
		 
		newHtml+= `
		 
	
		<span>${item}</span>
		<span>${duedate}</span>
		<button  class='btn-del' onclick="todolist.splice(${i} ,1); display();">Delete</button>
		`;
		
	}
	displaytodo.innerHTML=newHtml;
}

