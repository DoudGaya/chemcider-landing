import React, { useState, } from 'react'

interface FormValidator {
    firstName: boolean;
    surname: boolean;
    email: boolean;
    phone: boolean;

}


export const ContributingForm = () => {

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

    const [ validator, setValidator] = useState <FormValidator> ({
        firstName: false,
        surname: false,
        email: false,
        phone: false
    })
    
    
    const handleFormData = (event: any) => {
        const {value, name, type,} = event.target
        return setFormData((prev: any) => {
            return {...prev, [name]: value}
        })
    }
    
    console.log(formData)
    const handleProfession = (event: any) => {
        event.preventDefault()

    }

        const submitContributor = (event: any) => {

        event.preventDefault()
    }


  return (
      <div>
           <form onSubmit={submitContributor} className=" flex flex-col space-y-6">
                <div className="px-8  grid gap-y-3 md:grid-cols-2 gap-x-6 ">
                    <label htmlFor="first Name" className=" flex gap-y-4 flex-col ">
                        <p className=" hidden">First Name</p>
                       <div className=" flex flex-col ">
                        <input 
                            name="firstName"
                            type="text" 
                            onChange={handleFormData} 
                            placeholder="First Name" 
                            className=" border-slate-400  text-slate-900 dark:text-slate-400 font-logo] py-2 px-3 bg-transparent border focus:outline-none rounded-lg " />
                        {validator.firstName && <small className=" text-red-400">First name is required</small>}
                       </div>
                    </label>
                    <label htmlFor="first Name" className=" flex gap-y-4 flex-col ">
                        <p className=" hidden">Surname</p>
                        <div className=" flex flex-col">
                        <input
                            name="lastName"
                            type="text"
                            onChange={handleFormData}
                            placeholder="Surname "
                            className=" border-slate-400  text-slate-900 dark:text-slate-400 font-logo] py-2 px-3 bg-transparent border focus:outline-none rounded-lg " />
                            {validator.surname && <small className=" text-red-400">Last name is required</small>}
                        </div>
                    </label>
                            
                </div>
                <div className="px-8  grid gap-y-3 md:grid-cols-2 gap-x-6 ">
                    <label htmlFor="first Name" className=" flex gap-y-4 flex-col ">
                        <p className=" hidden">Email Address</p>
                       <div className=" flex flex-col">
                        <input 
                            name="email"
                            type="email" 
                            onChange={handleFormData} 
                            placeholder="Email Address" 
                            className=" border-slate-400  text-slate-900 dark:text-slate-400 font-logo] py-2 px-3 bg-transparent border focus:outline-none rounded-lg " />
                           { validator.email && <small className=" text-red-400">Email address is required</small>}
                       </div>
                    </label>
                    <label htmlFor="fPhone Number" className=" flex gap-y-4 flex-col ">
                        <p className=" hidden">Phone Number</p>
                        <div className=" flex flex-col">
                        <input
                            name="phone"
                            type="text"
                            onChange={handleFormData}
                            placeholder="Phone Number "
                            className=" border-slate-400  text-slate-900 dark:text-slate-400 font-logo] py-2 px-3 bg-transparent border focus:outline-none rounded-lg " />
                            { validator.phone && <small className=" text-red-400">Phone number is required</small>}
                        </div>
                    </label>
                </div>
                
                 <div className="px-8 grid gap-y-3 gap-x-6 ">
                    <label htmlFor="gender" className=" flex gap-y-4 flex-col ">
                                <p className=" hidden">Gender</p>
                                <div className=" flex flex-col">
                                    <select name="gender" onChange={handleFormData} className=" border-slate-600 text-slate-900 dark:text-slate-400 after:px-3 font-logo] py-2 before:px-10 px-3 bg-transparent border focus:outline-none rounded-lg " id="">
                                        <option selected value="BSC" className=" py-3 px-3 bg-slate-200 dark:bg-slate-700">Select Gender</option>
                                        <option value="male" className=" py-3 px-3 bg-slate-200 dark:bg-slate-700">Male</option>
                                        <option value="female" className=" py-3 px-3 bg-slate-200 dark:bg-slate-700">Female</option>
                                        <option value="other" className=" py-3 px-3 bg-slate-200 dark:bg-slate-700">Other</option>
                                        <option value="prefer not to say" className=" py-2 px-3 bg-slate-200 dark:bg-slate-700">Prefer not to say</option>
                                    </select>            
                                </div>
                            </label>
                </div>
                <div className=" px-8">
                    <fieldset className=" border w-full py-3 px-4 border-slate-400 rounded-lg ">
                        <legend className=" px-2"> <p className=" text-primary font-semibold font-primary">Profession</p></legend>
                        <div className=" grid grid-cols-1 lg:grid-cols-3 lg:gap-y-0 gap-y-4 lg:gap-x-3">
                            <label htmlFor="science" className={`flex ${formData.profession === 'science' ? 'border-primary text-primary font-bold' : 'dark:text-gray-400 text-slate-900 border-slate-400'} border rounded-lg py-2 px-3 space-x-2`}>
                                <input id="science"
                                    onChange={handleFormData}
                                    className=" hidden peer"
                                    name="profession"
                                    type="radio"
                                    value={'science'}
                                 />
                                <p>Science</p>
                            </label>

                            <label htmlFor="technology" className={`flex ${formData.profession === 'technology' ? 'border-primary text-primary font-bold' : 'dark:text-gray-400 text-slate-900 border-slate-400'} border rounded-lg py-2 px-3 space-x-2`}>
                                <input
                                    id="technology"
                                    onChange={handleFormData}
                                    className=" hidden peer"
                                    name="profession"
                                    type="radio"
                                    value={"technology"}
                                        />
                                <p>Technology</p>
                            </label>

                            <label htmlFor="engineering" className={`flex ${formData.profession === 'engineering' ? 'border-primary text-primary font-bold' : 'dark:text-gray-400 text-slate-900 border-slate-400'} border rounded-lg py-2 px-3 space-x-2`}>
                                <input
                                    id="engineering"
                                    onChange={handleFormData}
                                    className=" hidden peer"
                                    name="profession"
                                    type="radio"
                                    value={'engineering'}
                                />
                                <p>Engineering</p>
                            </label>
                        </div>
                    </fieldset>
                            
                  <fieldset className=" my-6 border w-full py-3 px-4 border-slate-400 rounded-lg ">
                        <legend className=" px-2"> <p className=" text-primary font-semibold font-primary">Education</p></legend>
                        <div className="  grid gap-y-3 md:grid-cols-1 gap-x-6 ">
                            <label htmlFor="qualification" className=" flex gap-y-4 flex-col ">
                                <p className=" hidden">Degree Type</p>
                                <div className=" flex flex-col">
                                    <select name="qualification" onChange={handleFormData} className=" border-slate-600 text-slate-900  dark:text-slate-400 after:px-3 font-logo] py-2 before:px-10 px-3 bg-transparent border focus:outline-none rounded-lg " id="">
                                        <option selected value="BSC" className=" py-3 px-3 bg-slate-200 dark:bg-slate-700">Highest Qualification</option>
                                        <option value="PHD" className=" py-3 bg-slate-200 dark:bg-slate-700">PhD</option>
                                        <option value="MSC" className=" py-3 bg-slate-200 dark:bg-slate-700">Master's Degree</option>
                                        <option value="BSC" className=" py-3 bg-slate-200 dark:bg-slate-700">Bachelor's Degree</option>
                                        <option value="undergraduate" className=" py-2 px-3 bg-slate-200 dark:bg-slate-700">Undergraduate</option>
                                    </select>            
                                </div>
                            </label>
                            <label htmlFor="field" className=" flex gap-y-4 flex-col ">
                                <p className=" hidden">Field of Study</p>
                                <div className=" flex flex-col">
                                    <input name="field" type="text" onChange={handleFormData} placeholder="Field of Study" className=" border-slate-400  text-slate-900 dark:text-slate-400 font-logo] py-2 px-3 bg-transparent border focus:outline-none rounded-lg " />
                                </div>
                            </label>
                        </div>
                </fieldset>
                    
                </div>
                <div className=" px-8">
                    <div className=" flex w-full">
                        <button className=' bg-[rgb(34,177,197)] px-10 py-2 w-full rounded-lg text-blue-100'>Submit</button>
                    </div>
                </div>
                </form>
    </div>
  )
}
