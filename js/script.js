
// calculator script 

const btn = document.getElementsByClassName('btn')
const ops = document.getElementsByClassName('right')
const input = document.getElementById('input')

let operator='',stack=[]
let s='', num1='', num2=''


for(let i=0; i<11; i++){
    
    btn[i].addEventListener('click',() => {
        if(i==10){
            if(!(s.includes('.'))){
                s+=btn[i].innerHTML
                input.innerHTML+=btn[i].innerHTML
            }
        }
        else{
        s+=btn[i].innerHTML
        input.innerHTML+=btn[i].innerHTML
        }

    })
}

for(let i=1; i<5; i++){
    ops[i].addEventListener('click',() => {

        if(!(num1 && s)){

        operator=ops[i].innerHTML
        if(s==''){
            if(i==2){
            s+=operator
            input.innerHTML+=operator
            }
        }
        else{
            if(!(s=='-')){
                input.innerHTML+=' '+operator+' '
                num1=s
                s=''
            }
            stack.push(operator)
        }
    }
    })
}

ops[0].addEventListener('click',() => {
    operator=''
    s=''
    input.innerHTML=''
})

btn[11].addEventListener('click',() => {
    if(num1){
    num2=s
    s=''
    console.log(num1,operator, num2)
    console.log(stack)

    if(num1 && num2){
        let k=''

        if(stack[0]=='+'){
            k= parseFloat(num1) + parseFloat(num2)
        }
        if(stack[0]=='-'){
            k= parseFloat(num1) - parseFloat(num2)
        }
        if(stack[0]=='*'){
            k= parseFloat(num1) * parseFloat(num2)
        }
        if(stack[0]=='/') {
            k= parseFloat(num1) / parseFloat(num2)
        }                         

        k=Math.round(k*1000)/1000
        input.innerHTML+=' = '+k+'\n'
        input.scrollTop = input.scrollHeight;
        stack = []
        num1='',num2='',s=''
    }
    
}

})


// Switch css

const toggle= document.getElementById('toggle')
let theme=document.getElementsByTagName('link')[0]

theme.setAttribute('href','css/style.css')

toggle.addEventListener('click',() =>{

    console.log(theme)
    if(theme.getAttribute('href')=='css/style.css'){
        theme.setAttribute('href','css/style2.css')
        toggle.innerHTML= 'White mode'
        
    }
    else{
        theme.setAttribute('href','css/style.css')
        toggle.innerHTML= 'Dark mode'
    }
})



