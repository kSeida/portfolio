Promise.withResolvers??=function(){
    const result={}
    result.promise=new this((resolve,reject)=>{
        result.resolve=resolve
        result.reject=reject
    })
    return result
}