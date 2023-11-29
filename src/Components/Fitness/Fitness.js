import React,{useState} from 'react'
import './Fitness.css'
import 'react-html5video/dist/styles.css'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom';
function CalculateBmi(){
  let weight= document.querySelector("#weight").value
  let height=document.querySelector("#height").value
  let name=document.querySelector("#name").value
  
  let bmi = (weight*10000)/(height*height)
  let welcome = document.querySelector("#msg")
  let output = document.querySelector("#output")
  welcome.textContent="Hi " + name
  if(bmi<18.5)
  {
      output.textContent="You are UnderWeight!"
      let pic = document.querySelector("#pic")
      pic.src ='https://www.shutterstock.com/image-vector/vector-cartoon-underweight-woman-260nw-369937427.jpg';   
      let suggestion = document.querySelector("#suggestion")
      suggestion.textContent ="Under our Nutrition section follow our Underweight diet Plan!"
  }
  else if(bmi>=18.5 && bmi<25)
  {
    output.textContent="You are Healthy!"
    let pic = document.querySelector('#pic')
    pic.src = 'https://cdn2.vectorstock.com/i/1000x1000/14/56/healthy-woman-with-fruits-and-dumbbell-vector-13641456.jpg'
    let suggestion = document.querySelector("#suggestion")
      suggestion.textContent ="To maintain the same follow our regular diet plan!"
  }
  else if(bmi>=25 && bmi<30)
  {
    output.textContent="You are OverWeight!"
    let pic = document.querySelector('#pic')
    pic.src = 'https://img.freepik.com/premium-vector/cartoon-overweight-woman-stands-scales-weighing-with-emotion-horror_484720-25.jpg?w=2000'
    let suggestion = document.querySelector("#suggestion")
      suggestion.textContent ="Under our Nutrition section follow our ExtremeStrict diet Plan!"
  }
  else if(bmi>=30 && bmi<40)
  {
    output.textContent="You are Obese!"
    let pic = document.querySelector("#pic")
    pic.src= 'https://www.shutterstock.com/image-vector/vector-cartoon-overweight-man-260nw-369925961.jpg'
    let suggestion = document.querySelector("#suggestion")
      suggestion.textContent ="Under our Nutrition section follow our ExtremeStrict diet Plan!"
  }
  else if(bmi>=40)
  {
    output.textContent="You are Extremely Obese!"
    let pic = document.querySelector("#pic")
    pic.src= 'https://i.pinimg.com/originals/ea/bd/f7/eabdf7fb059e2b1fdf44e7203ddbfea5.jpg'
    let suggestion = document.querySelector("#suggestion")
      suggestion.textContent ="Under our Nutrition section follow our ExtremeStrict diet Plan!"
  }
 }
function Fitness() {
    //navigate hook
    let navigate=useNavigate()
    //useForm hook
    let {register,
        handleSubmit,
        formState:{errors}}=useForm()
  
    //HTTP request error state
    let [err,setErr]=useState("")
     
    return (
      <div className='add-user'>
       < h1 className='calc text-center mt-5'>Calculate BMI</h1>
        {/* HTTP ERROR MSG */}
        {err.length!==0 && <p className='display-3 fw-bold text-center text-danger'>{err}</p>}
        {/* responsive form */}
        <div className='row mt-5'>
          <div className='col-11 col-sm-8 col-md-6 mx-auto imgPar'>
            <form onSubmit={handleSubmit(CalculateBmi)}>
              {/* name */}
              <div className='mb-3'>
                <label htmlFor='name'>Name</label>
                <input type="text" className='form-control' id='name'  {...register('name',{required:true})}/>
                {/* validation errors for name */}
                {errors.name?.type==='required' && <p className='text-danger fw-bold'>*Name is required</p>}
              </div>
              {/* weight */}
              <div className='mb-3'>
                <label htmlFor='weight'>Enter your weight(kgs)</label>
                <input type="number" className='form-control' id='weight' {...register('weight',{required:true})}/>
              </div>
              {/* validation errors for weight */}
              {errors.weight?.type==='required' && <p className='text-danger fw-bold'>*Weight is required</p>}
              {/* height */}
              <div className='mb-3'>
                <label htmlFor='height'>Enter your height(cms)</label>
                <input type="number" className='form-control' id='height' {...register('height',{required:true})}/>
              </div>
              {/* validation errors for height */}
              {errors.height?.type==='required' && <p className='text-danger fw-bold'>*Height is required</p>}
              <button type="submit" className='btn add-btn btn-success mt-3' id='calc'>Calculate</button>
            </form>
            <h1 id="msg" className='lead mt-3 text-center fw-bold'></h1>
            <p id="output" className='lead text-center fw-bold'></p>
            <p id ="suggestion" className='lead text-center fw-bold'></p>
            <img id='pic' className='ps-5'></img>
             </div>
        </div>
      </div>
    )
  
}

export default Fitness