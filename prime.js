function prime(num){
    let count=0
    for(let i=0; i<=num; i++){
        if(num%i){
            return true 
        }else{
            return false
        }
    }
}