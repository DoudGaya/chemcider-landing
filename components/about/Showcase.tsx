import React from 'react'
import bg from '../../public/white.jpg'


const items = [
  {
    id: 1,
    title: 'Empowerment Through Knowledge',
    describe: `
              Chemcider Inc. is more than just a platform; it's a movement.
              We empower authors, researchers, and experts to share their expertise with the world.
              Through our user-friendly interface, contributors can seamlessly create, publish,
              and disseminate their knowledge, making a lasting impact on the global stage.`
  },
   {
    id: 2,
    title: 'Unrivaled Learning Experience',
    describe: `
             We understand the importance of engaging content in the learning journey. 
             That's why we curate and present information in a manner that is not only informative 
             but also captivating. Whether you're a seasoned professional or an eager learner, our 
             resources cater to diverse levels of expertise. 
            `
  },
    {
    id: 3,
    title: 'Global Recognition',
    describe: `
            At Chemcider, recognition knows no borders. We provide a stage for your expertise to 
            shine on the world stage. Authors and contributors gain global recognition for their 
            valuable contributions, connecting with a community of like-minded individuals who appreciate 
            the art and science of learning
            `
  },
    
  {
    id: 4,
    title: 'Community and Collaboration',
    describe: `
            Learning thrives in a collaborative environment. 
            Chemcider fosters a vibrant community where learners, authors, and enthusiasts can connect, 
            discuss, and exchange ideas. Our platform promotes networking, mentorship, and the formation 
            of knowledge-driven alliances.
            `
  }
]
export const Showcase = () => {
  return (
    <div style={{ backgroundImage: `url(${bg.src})`}} className=' bg-cover bg-blend-multiply bg-primary bg-center w-full '>
      <div className=" flex flex-col py-10 max-w-4xl mx-auto ">
        <div className="grid grid-cols-2 gap-y-6 py-6">
          {
            items.length > 0 && items.map((item) => {
              return (
                <div key={item.id} className=" bg-slate-600/70 py-6 border-x mx-2 space-y-6 px-4">
                  <h3 className=' font-raleway text-2xl'>{item.title} </h3>
                  <p className=' font-sans text-justify font-thin'> {item.describe} </p>
                </div>
              )
            } )
         }
        </div>
     </div>
    </div>
  )
}
