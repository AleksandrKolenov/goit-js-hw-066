const categories = document.querySelectorAll('h2');
console.log(`number of categories: ${categories.length}`);



const items = document.querySelectorAll('.item');
// console.log(items);

items.forEach( element => {
    const title = element.querySelector('h2').textContent;
    // console.log(title);
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title} \nElements: ${itemsLength}`);
}); 