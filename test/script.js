const link = document.querySelector('.link')

for (let att of link.attributes) {
    console.log( `${att.name} = "${att.value}"` );
}

console.log(link.attributes)
console.log(link.dataset)