// const student = {
//     name:'Farhan',
//     id : 14,
//     isCute : true,
//     money :5000,
//     job :{

//         primary :'graphics',
//         second :'web'
//     },
//     rolesInExams:[10,20,3,5],

//     takeMoney : function (){
        
//     },
//     final : function(expenses){
//          this.money = this.money - expenses
//         return this.money
       
//     }
    

// }

// student.takeMoney ()
// const remaining = student.final(400)
// console.log(remaining);


// const template = `
// hey whats up  ${student.name} ${student.id} ${student.job.primary} ${student.rolesInExams[1]}  how are you !
// `
// console.log(template);

// const name = () =>{
//     const sum = 40 +49
//     console.log(sum);
//     return sum
// }
// name ()


// const sum = (num1) =>{
//     const num = num1 / 7
//     console.log(num);
//     return num
// }
// sum(70)

// const sum1 = (num1,num2) =>{
//     const kum = num1+ num2
//     const lum = kum / 2
//     console.log(lum);
//     return lum
// }
// sum1 ( 12,40)

// const sums = (num1,num2)=>{
//     const nums = num1 + num2
//     const kum = nums * 5
//     const lum = kum / 2
//     console.log(lum);
//     return lum
// }
// sums(20,50)

const array = [ 100,20,12,52,15,34]
const sum =  array.map(x => x /7)
console.log(sum);

array.forEach(element => console.log(element))
const final = array.filter (array  => array > 30 )
console.log(final);
const semiFinal = array.find(array=> array >30)
console.log(semiFinal);