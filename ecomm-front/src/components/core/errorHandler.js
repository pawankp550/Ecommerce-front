const errorHandler = (errorType, value) => {
    console.log(value)
   const errorTypeLength = errorType.length
   let validationRes = {error: false}

   const validation = (type) => {
        if (type === 'required') {
            if(value.length === 0) {
                return validationRes = {
                    error: true,
                    message: 'Search field is required'
                }
            }
        }
   }    

   for(let i = 0; i <= errorTypeLength; i++) {
        const Res = validation(errorType[i])
        if(Res) {
            validationRes = Res
            break
        }
   }

   return validationRes
}

export default errorHandler