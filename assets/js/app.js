const cl = console.log;

//Find largest Number

let nums = [10,355,56,34,89,999,1000,45]

//by using loop
const findlargenum = (arr) => {
    //1st we start from 0 index so we assign the value of zero index and it considered as our large no.
    let maxnum = arr[0] 

    for(let i = 0; i < arr.length; i++){
        // we want check all the no. from given array hence we apply the condition
        if(arr[i] > maxnum){ 
            maxnum = arr[i]
        }
    }
    return maxnum
}

cl(findlargenum(nums))

//by using Default method

const findnum = (arr)=>{
    return Math.max(...arr)
}
cl(findnum(nums))




//Two sum Zero 
//addition of two numbers is zero.

//by using binary search

let numbers = [-6,-5,-4,-3,-2,-1,3,4,7,8]

//In binary serach we searching from both side i.e left and right
const twosumzero = (arr, target)=>{
    let startIndex = 0;
    let LastIndex = arr.length - 1;
    let add;
    // let length = 2
    let result = [];
    // startindex is always greater than of lastindex , if startindex is higher than lastindex then it means their is no any pair exist
    while(startIndex < LastIndex){ 
        add = arr[startIndex] + arr[LastIndex];

        //If addition of startindex and lastindex is target i.e zero it return the pair
        if(add === target){
            result.push([arr[startIndex],arr[LastIndex]])
            startIndex = 0; // if we require all pair 
            LastIndex--
            
        }else if(add > 0){
            LastIndex--
        }else if(add < 0){
            startIndex++
        }
    }
    // cl(result)
    
    return result.length > 0 ? result:`No pair found!!!`
}

cl(twosumzero(numbers,0))


//by using for loop

const Twosumzero = (arr) => {
   let result = [] //Give a empty array
    for(let i = 0; i <= arr.length; i++){ //it is considered from 0 index
        for(let j = i+1; j <= arr.length; j++){ //from index 1
            if(arr[i]+arr[j] === 0){   //addition of numbers will be zero
                result.push([arr[i], arr[j]]) //which addition is zero then it is pushed in empty array
            }
        }
    }
    return result;
}

cl(Twosumzero(numbers));



const twosumzeronew = (arr, target)=>{
    arr.sort((a,b) => a-b)
    let startIndex = 0;
    let LastIndex = arr.length - 1;
    let add;
    let result = [];
    // startindex is always greater than of lastindex , if startindex is higher than lastindex then it means their is no any pair exist
    while(startIndex < LastIndex){ 
        add = arr[startIndex] + arr[LastIndex];

        //If addition of startindex and lastindex is target i.e zero it return the pair
        if(add === target){
            result.push([arr[startIndex],arr[LastIndex]])
            startIndex++ //or startindex = 0; // if we require all pair 
            LastIndex--
        }else if(add > 0){
            LastIndex--
        }else if(add < 0){
            startIndex++
        }
    }

    return result.length > 0 ? result:`No pair found!!!`
}

cl(twosumzeronew(numbers,0))



//Recursive function

//factorial number
// base condition is need to check the no. is zero and 1
//then return array
const findfact = (n) => {
    if(n === 0 || n === 1){ 
        return 1
    }

    return n * findfact(n-1) // recursive function call himself
}

cl(findfact(10))


//chunked array

let newArr = [10,20,30,40,60,80,100,110,89,78,67] //given array

let result = []; //we need a empty array to push the newarr

const chunkArr = (arr, Tlength) => { //Tlength is varied means how many nums in chunkArr i.e nested
 for(let i=0; i < arr.length; i=i+Tlength){ //i + Tlength => after that length we icremented the i
    let chunk = arr.slice(i, i+Tlength) //by using slice method we extract the array
    result.push(chunk) // push in empty array
 }
 return result
}

cl(chunkArr(newArr,3));