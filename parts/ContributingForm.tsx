import React, { useState, } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';

interface FormInputs {
    firstName: string
    lastName: string
    email: string
    phone: string
    profession: string
    qualification: string
    gender: string
    field: string
}


export const ContributingForm = () => {


    const { register,  formState: { errors }, handleSubmit } = useForm<FormInputs>()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        profession: '',
        qualification: '',
        gender: '',
        field: '',
    })

        

    const [contributorFeedback, setContributorFeedback] = useState(false)

    const feedBack = () => {
        setContributorFeedback(true)
    }

    
    
    const handleFormData = (event: any) => {
        const {value, name, type,} = event.target
        return setFormData((prev: any) => {
            return {...prev, [name]: value}
        })
    }


    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        try {
        await fetch('/api/createApplicant', {
        method: 'POST',
        body: JSON.stringify(data)
        }).then(() => {
            console.log(data)
        }).catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    feedBack()
    }


  return (
      <div >
        {
            !contributorFeedback ?
              
        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col">
              
              <div className=" px-8">
                <fieldset className="border w-full py-3 space-y-3 px-4 border-slate-400 rounded-lg ">
                <legend className=" px-2"><p className=" font-raleway text-primary text-2xl font-semibold font-primary">Personal Data</p></legend>
              <div className=" grid gap-y-3 md:grid-cols-2 gap-x-6 ">                  
                    <label htmlFor="first Name" className=" flex gap-y-4 flex-col ">
                        <p className=" hidden">First Name</p>
                       <div className=" flex flex-col ">
                          <input
                            //   name='firstName'  
                            {...register('firstName', {required: true})}  
                            type="text" 
                          
                            placeholder="First Name" 
                            required
                            className="border-slate-400 dark:active:bg-slate-900 text-slate-900 dark:text-slate-400 font-logo] py-2 px-3 bg-transparent border focus:outline-none rounded-lg " />
                            {errors.firstName && <small className=" text-red-400">First name is required</small>}
                       </div>
                    </label>
                    <label htmlFor="last Name" className=" flex gap-y-4 flex-col ">
                        <p className=" hidden">Surname</p>
                        <div className=" flex flex-col">
                          <input
                            type="text"
                            {...register('lastName', {required: true} )}  
                           
                              placeholder="Last Name"
                              required
                            className=" border-slate-400  dark:active:bg-slate-900 text-slate-900 dark:text-slate-400 font-logo] py-2 px-3 bg-transparent border focus:outline-none rounded-lg " />
                            {errors.lastName && <small className=" text-red-400">Last name is required</small>}
                        </div>
                    </label>
                            
                </div>
                <div className="  grid gap-y-3 md:grid-cols-2 gap-x-6 ">
                    <label htmlFor="Email Address" className=" flex gap-y-4 flex-col ">
                        <p className=" hidden">Email Address</p>
                       <div className=" flex flex-col">
                          <input 
                                type="email" 
                               {...register('email', {required: true} )}  
                               
                              placeholder="Email Address" 
                              required
                                className=" border-slate-400  dark:active:bg-slate-900 text-slate-900 dark:text-slate-400 font-logo] py-2 px-3 bg-transparent border focus:outline-none rounded-lg " />
                                { errors.email && <small className=" text-red-400">Email address is required</small>}
                       </div>
                    </label>
                    <label htmlFor="Phone Number" className=" flex gap-y-4 flex-col ">
                        <p className=" hidden">Phone Number</p>
                        <div className=" flex flex-col">
                          <input
                              type="text"
                             {...register('phone', {required: true} )}  
                            
                              placeholder="Phone Number"
                              required
                            className="border-slate-400 dark:active:bg-slate-900 text-slate-900 dark:text-slate-400 font-logo] py-2 px-3 bg-transparent border focus:outline-none rounded-lg " />
                            { errors.phone && <small className=" text-red-400">Phone number is required</small>}
                        </div>
                    </label>
                </div>
                
                 <div className=" grid gap-y-3 gap-x-6 ">
                    <label htmlFor="gender" className=" flex gap-y-4 flex-col ">
                                <p className=" hidden">Gender</p>
                                <div className=" flex flex-col">
                          <select
                            {...register('gender', {required: true})}
                           
                            className=" border-slate-600 text-slate-900 dark:text-slate-400 after:px-3 font-logo] py-2 before:px-10 px-3 bg-transparent border focus:outline-none rounded-lg "
                            id=""
                          >
                                <option selected value="Select Gender" className=" py-3 px-3 bg-slate-200 dark:bg-slate-700">Select Gender</option>
                                <option value="male" className=" py-3 px-3 bg-slate-200 dark:bg-slate-700">Male</option>
                                <option value="female" className=" py-3 px-3 bg-slate-200 dark:bg-slate-700">Female</option>
                                <option value="other" className=" py-3 px-3 bg-slate-200 dark:bg-slate-700">Other</option>
                                <option value="prefer not to say" className=" py-2 px-3 bg-slate-200 dark:bg-slate-700">Prefer not to say</option>
                          </select>       
                                </div>
                        </label>
                </div>
                </fieldset>

                </div>
              

                <div className="px-8">
                    <fieldset className=" border w-full py-3 px-4 border-slate-400 my-6 rounded-lg ">
                        <legend className=" px-2"><p className=" text-primary font-raleway text-2xl font-semibold font-primary">Highest Qualification</p></legend>
                      <div className=" grid grid-cols-1  lg:gap-y-0 gap-y-4 lg:gap-x-3">
                           <label htmlFor="qualification" className=" flex gap-y-4 flex-col ">
                                <p className=" hidden">Degree Type</p>
                                <div className=" flex flex-col">
                                  <select
                                        {...register('qualification', { required: true })}  
                                        onChange={handleFormData} className=" border-slate-600 text-slate-900  dark:text-slate-400 after:px-3 font-logo] py-2 before:px-10 px-3 bg-transparent border focus:outline-none rounded-lg " id="">
                                        <option  value="BSC" selected disabled className="py-3 px-3 bg-slate-200 dark:bg-slate-700">Select Your Qualification</option>
                                        <option value="PHD" className="py-3 bg-slate-200 dark:bg-slate-700">PhD</option>
                                        <option value="MSC" className="py-3 bg-slate-200 dark:bg-slate-700">Master's Degree</option>
                                        <option value="BSC" className="py-3 bg-slate-200 dark:bg-slate-700">Bachelor's Degree</option>
                                        <option value="HND" className="py-3 bg-slate-200 dark:bg-slate-700">HND</option>
                                        <option value="undergraduate" className=" py-2 px-3 bg-slate-200 dark:bg-slate-700">Undergraduate</option>
                                        <option value="other" className=" py-2 px-3 bg-slate-200 dark:bg-slate-700">Other</option>
                                  </select>  
                                  
                                </div>
                            </label>
                          {
                            /* 
                                <label htmlFor="science" className={`flex ${formData.profession === 'science' ? 'border-primary text-primary font-bold' : 'dark:text-gray-400 text-slate-900 border-slate-400'} border rounded-lg py-2 px-3 space-x-2`}>
                                <input id="science"
                                    {...register('profession', { required: true })}  
                                        onChange={handleFormData}
                                        className=" hidden peer"
                                        type="radio"
                                        value={'science'}
                                />
                                
                                    <p>Science</p>
                                </label>
                                <label htmlFor="technology" className={`flex ${formData.profession === 'technology' ? 'border-primary text-primary font-bold' : 'dark:text-gray-400 text-slate-900 border-slate-400'} border rounded-lg py-2 px-3 space-x-2`}>
                                <input
                                    {...register('profession', { required: true })}  
                                        id="technology"
                                        onChange={handleFormData}
                                        className=" hidden peer"
                                        type="radio"
                                        value={"technology"}
                                            />
                                    <p>Technology</p>
                                </label>
                                <label htmlFor="engineering" className={`flex ${formData.profession === 'engineering' ? 'border-primary text-primary font-bold' : 'dark:text-gray-400 text-slate-900 border-slate-400'} border rounded-lg py-2 px-3 space-x-2`}>
                                <input
                                        {...register('profession', { required: true })}  
                                        id="engineering"
                                        onChange={handleFormData}
                                        className=" hidden peer"
                                        type="radio"
                                        value={'engineering'}
                                />
                                    <p>Enxgineering</p>
                                </label> 
                            */
                          }
                      </div>
                      { errors.profession && <small className=" text-red-400">Phone number is required</small>}
                    </fieldset>
                            
                  <fieldset className=" my-6 border w-full py-3 px-4 border-slate-400 rounded-lg ">
                        <legend className=" px-2"> <p className=" text-primary text-2xl font-raleway font-semibold font-primary">Education</p></legend>
                        <div className="  grid gap-y-3 md:grid-cols-1 gap-x-6 ">
                            <label htmlFor="field" className=" flex gap-y-4 flex-col ">
                                <p className=" hidden">Degree Type</p>
                                <div className=" flex flex-col">
                                  <select
                                         {...register('field', { required: true })}  
                                        onChange={handleFormData} className=" border-slate-600 text-slate-900  dark:text-slate-400 after:px-3 font-logo] py-2 before:px-10 px-3 bg-transparent border focus:outline-none rounded-lg " id="">
                                        <option  selected disabled className=" py-3 px-3 bg-slate-200 dark:bg-slate-700">Field of Study</option>
                                        <option value="Physical Science" className=" py-3 bg-slate-200 dark:bg-slate-700">Physical Science</option>
                                        <option value="Health Science" className=" py-3 bg-slate-200 dark:bg-slate-700">Health Science</option>
                                        <option value="Technology" className=" py-3 bg-slate-200 dark:bg-slate-700">Technology</option>
                                        <option value="Engineering" className=" py-2 px-3 bg-slate-200 dark:bg-slate-700">Engineering</option>
                                  </select>  
                                  
                                </div>
                            </label>
                            <label htmlFor="profession" className=" flex gap-y-4 flex-col ">
                                <p className=" hidden">Field of Study</p>
                                <div className=" flex flex-col">
                                  <input
                                       {...register('profession', {required: true})}  
                                        // name='field'
                                        type="text"
                                        onChange={handleFormData}
                                        placeholder="Your profession: e.g. Physics"
                                        className=" border-slate-400 focus:dark:bg-slate-900 active:dark:bg-slate-900 text-slate-900 dark:text-slate-400 font-logo] py-2 px-3 bg-transparent border focus:outline-none rounded-lg "
                                  />
                                  {/* { errors.field && <small className=" text-red-400">Phone number is required</small>} */}
                                </div>
                            </label>
                        </div>
                </fieldset>
                    
                </div>
                <div className=" px-8">
                    <div className=" flex w-full">
                        <button type='submit' className=' bg-[rgb(34,177,197)] px-10 py-2 w-full rounded-lg text-blue-100'>Submit</button>
                    </div>
                </div>
          </form>
          
          :
            ( 
            <div className=" w-full px-8">
                <div className=" px-10 py rounded-xl flex-col space-y-2 py-10 text-center flex border-secondary border-2 items-center justify-center">
                <small className=' text-lg font-raleway '>Thanks</small>
                <h3 className=" text-2xl text-secondary ">Your Application have been submitted</h3>
                <p className=" text-xl font-raleway">
                    check this <Link className=" text-primary underline" href={'/contribution'}>link</Link> to learn more about our contributing guidelines
                </p> 
            </div>
          </div>
          )
        }
    </div>
  )
}
