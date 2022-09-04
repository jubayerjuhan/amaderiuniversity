import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import './Exam.css'
const Exam = () => {
    const [cart, setCart] = useState([]);
    const [result, setResult] =useState(false)
    const [resultCount, setResultCount] = useState("");
    const itemData = localStorage.getItem('item')
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = JSON.parse(localStorage.getItem('item')).find(pd => pd._id === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    }, [itemData])
    const [question, setQuestion] = useState([]);
    const [answer, setAnswer] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4200/questions')
        .then(res => res.json())
        .then(data => {
           
            setQuestion(shuffle(data));
           
         
        })
        // const items = fakeData.slice(0, 6);

    }, []);
    // console.log(question)
    const handleChange = (ques,ans) =>{
        const findQues = question.filter(question=>question.data.question === ques)
        // console.log(findQues)
        let data = {}
        if(findQues[0].data.rightAnswer === ans){
            data.question = ques;
            data.answer = 'Right'
        }
        else if(findQues[0].data.rightAnswer !== ans){
            data.question = ques;
            data.answer = 'Wrong'  
        }
    //    console.log(sameQues)
       if(answer.find(ans=>ans.question===ques)===undefined){
        const previousAnswer = [...answer,data]
        setAnswer(previousAnswer)
       }
       else{
          let newAns =  answer.filter(ans=>ans.question!==ques)
           const previousAnswer = [...newAns,data]
           setAnswer(previousAnswer)
       }
        
      
       
      
    }

    const handleSubmit = () => {
        // console.log(answer)
        const result = answer.filter(ans=> ans.answer === 'Right')
        // alert(`Your result is ${result.length}/${question.length}`)
        // window.location.assign('/')
        setResultCount(result.length)
        setResult(true)

    }
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
    return (
        <div>
        <Header cart={cart.length}></Header>
        <div style={{marginTop:'100px',marginBottom:'100px',display: result ?  'none' :'flex'}} className="container py-5  justify-content-center">
        <div style={{}} className="text-center">
       
            {
               question.slice(0,20)?.map((question,index) =>
                <form action="#" method="post" style={{fontSize: '20px',border:'1px solid white',padding:'40px',width:'100%',borderRadius:'50px',boxShadow:'5px 5px 20px gray',marginBottom:'50px'}}>
               <fieldset >
                {/* <legend>Give your feedback</legend> */}
                <p className="font-weight-bold mb-4">Ques no : {index +1} <br /> <span className="text-primary">{question.data.question}</span></p>
                {
                    question?.data?.answer.map(answer =><>     <label className="rad-label">
                    <input onClick={()=>handleChange(question.data.question,answer)} type="radio" className="rad-input" name="rad" />
                    <div className="rad-design" />
                    <div className="rad-text">{answer}</div>
                  </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>)
                }


              </fieldset>    </form>) 
                 
            }
           
        <br />
       
  
      {/* <input type="Submit" defaultValue="Proceed" /> */}
           {
               question.length === 0 ? <div className="text-center text-primary"><h2>Loading...</h2></div>:  <button onClick={()=>handleSubmit()} className="btn btn-primary font-weight-bold">Submit</button>
           }
        </div>
        </div>
           <div style={{display: result ?  'flex' :'none',marginTop:'50px',marginBottom:'100px'}} className=" justify-content-center container py-5">
           <div style={{border:'1px solid white',padding:'50px',width:'50%',borderRadius:'50px',boxShadow:'5px 5px 20px gray'}} className="text-center">
            <p style={{fontSize:'30px'}} className="font-weight-bold text-dark">Your result is <span className="text-success">{resultCount}</span>/<span className="text-danger">{question.length < 20 ? question.length : 20}</span></p>
            <button onClick={() =>window.location.assign('/skillTest')} className="btn btn-warning font-weight-bold">Again Test Your Skill</button>
        </div>
           </div>
        <Footer></Footer>
    </div>
    );
};

export default Exam;