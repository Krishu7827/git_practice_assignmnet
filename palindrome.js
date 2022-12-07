function pal(a){
    for(let i=a.length; i>=0; i--){
        bag+=a[i]
    }if(bag===a){
        console.log("Yes")
    }else{
        console.log("No")
    }
}
pal("rahul")