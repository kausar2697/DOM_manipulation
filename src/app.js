//*************************Basic Selector in DOM**************************** */

// let title = document.getElementById('title')
// console.log(title)

// let paragraph = document.getElementsByClassName('lead')
// console.log(paragraph)


// let lists = document.getElementsByTagName('li')
// console.log(lists)

// let listOne = document.getElementsByName('list-item-one')
// console.log(listOne)


//***** */

// let title = document.querySelector('#title') //for id
// console.log(title)

// let paragraph = document.querySelector('.lead') //for class
// console.log(paragraph)  //show only one item

// let paragraphs = document.querySelectorAll('.lead')
// console.log(paragraphs) //show all the item

// let lists = document.querySelectorAll('li') //for tag name
// console.log(lists) 

// let names = document.querySelectorAll('[name^="list-item-one"]') //for name
// console.log(names) 


//##########################################################################################//#endregion

//************************************Traverse DOM elements */

// let list = document.getElementById('list')

// let parent = list.parentElement
// console.log(parent)

// let children = list.children
// console.log(children)

// console.log(list.previousElementSibling)
// console.log(list.nextElementSibling)

// let li = document.querySelector('li')
// console.log(li.nextElementSibling)

// console.log(list.firstElementChild)
// console.log(list.lastElementChild)

//####################################################################################//#endregion

//********************************Loop Throw HTML collection ******************************/

// let listItem = document.getElementsByTagName('li')

//let listItems = Array.from(listItem)  //convert to array type 1
//let listItems = Array.prototype.slice.apply(listItem)  //convert to array type 1
// let listItems = [...listItem]

// listItems.forEach((li,ind)=>{
//     let text = li.innerHTML
//     li.innerHTML = `(${ind+1}) ${text}`
// })

//#############################################################################################################//#endregion

//*******************************************Create DOM elements *******************************************************/

// let li =document.createElement('li')

// li.className= 'list-group-item'
// li.setAttribute= ('name','Fourth Item')
// li.innerHTML = 'four'

// let list = document.getElementById('list')
// list.appendChild(li)

//*********

//  function createElement(tagName,className,innerHTML){
//      let tag= document.createElement(tagName)
//      tag.innerHTML= innerHTML || ''
//      tag.className=className || ''
//      return tag
//  }

// function appendChild(parent,children){
//     children.forEach(child=> parent.appendChild(child))
// }


//  let li = createElement('li','list-group-item','four')

//  let div = createElement('div')

//  let p1= createElement('p','lead', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt fugit illum sunt voluptates natus maiores aliquid quasi dolorem mollitia quam. Suscipit accusantium consectetur modi deleniti perferendis expedita explicabo, nobis vitae.')

//  let p2= createElement('p','lead', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt fugit illum sunt voluptates natus maiores aliquid quasi dolorem mollitia quam. Suscipit accusantium consectetur modi deleniti perferendis expedita explicabo, nobis vitae.')


// appendChild(div,[p1,p2])


// console.log(div)

// let container = document.getElementById('cont')
// container.appendChild(div)

//###########################################################################################//#endregion

//*************************Insert Created element using adjacent element *****************/

// function createElement(tagName,className,innerHTML){
//     let tag= document.createElement(tagName)
//     tag.innerHTML= innerHTML || ''
//     tag.className=className || ''
//     return tag
// }

// function appendChild(parent,children){
//    children.forEach(child=> parent.appendChild(child))
// }


// let li = createElement('li','list-group-item','four')

// let div = createElement('div')

// let p1= createElement('p','lead', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt fugit illum sunt voluptates natus maiores aliquid quasi dolorem mollitia quam. Suscipit accusantium consectetur modi deleniti perferendis expedita explicabo, nobis vitae.')

// let p2= createElement('p','lead', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt fugit illum sunt voluptates natus maiores aliquid quasi dolorem mollitia quam. Suscipit accusantium consectetur modi deleniti perferendis expedita explicabo, nobis vitae.')


// appendChild(div,[p1,p2])

// let list = document.getElementById('list')
// list.insertAdjacentElement('beforebegin',div)     //adjacent
// list.insertAdjacentElement('afterbegin',div) 
// list.insertAdjacentElement('beforeend',div) 
// list.insertAdjacentElement('afterend',div) 
// console.log(list)


//####################################################################################//#endregion

//*****************************Update and remove DOM element***********************/

// let list = document.getElementById('list')

// let firstChild = list.firstElementChild

// setTimeout(()=>{
//     firstChild.innerHTML = firstChild.innerHTML + '  (modified)'
//     firstChild.classList.add('text-success')
// },5000)

// setTimeout(() => {
//     list.lastElementChild.remove()
//     firstChild.innerHTML= firstChild.innerHTML+ '( removed)'
//     firstChild.classList.add('text-danger')
// }, 3000)


//###########################################################################//#endregion

//************************Clone node include its child elements************** */

// let list = document.getElementById('list')
// let lastItem =  list.lastElementChild.cloneNode() // clone without child
// lastItem.innerHTML = 'five'
// list.appendChild(lastItem)

//********** 

// let list = document.getElementById('list')
// let lastItem =  list.lastElementChild.cloneNode(true) // clone with child or deeper clone

// list.appendChild(lastItem)