import React from 'react'
import ProjectCard from './cardproyectos'

function Proyectos() {
  return (
    <div>
        <div>
          <h1 className="text-4xl font-bold">Proyectos</h1>
          <p className="mt-4 text-lg">
            Estos son algunos de mis proyectos destacados.
          </p>
        </div>
        <div className='flex flex-row row-2 justify-center'>
          <ProjectCard
            title= "Ecommerce"
            image= "src/assets/Ecommerce.png"
            codeLink= "https://github.com/LucasBonzano/Ecommerce"
          />
          
        </div>
    </div>
  )
}

export default Proyectos