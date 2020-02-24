const deleteProduct = (btn) =>{
    const prodId= btn.parentNode.querySelector('[name=productId]').value;
    const csrf= btn.parentNode.querySelector('[name=_csrf]').value;

    const productElement = btn.closest('article'); // this is the article you want to remove
    fetch('/admin/product/'+prodId,{ // used by the browser to sending http requests, here send a request and return a promise
        method:'DELETE',
        headers:{
            'csrf-token' : csrf
        }
    }).then(result=>{
        return result.json(); // this is a function that will return a promise so you can add a new then block
    })
    .then(data =>{
      console.log(data);  
      productElement.parentNode.removeChild(productElement);
    })
    .catch(err=>{
        console.log(err);
    });

};