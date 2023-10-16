'use client'
import Content from './components/content'
import React, { useState } from 'react'
import { useEffect } from 'react'


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const change = () => {
    // Armazena a nova posição do botão em uma variável local
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;
    document.querySelector('.no-btn').style.position = 'absolute'

    // Atualiza o estado do componente apenas quando o usuário soltar o botão
    setTimeout(() => {
      setX(newX);
      setY(newY);
    }, 0);
  };

  return (
    <div className='main w-100 h-screen'>
      <h2 className='text-center text-4xl font-extralight my-28'> Bom Dia, Grazi </h2>
      <section className='flex flex-col items-center justify-center gap-4'>
        <h2 className='font-extralight'>Voce me Daria um Beijin????</h2>

        <button onClick={toggle} className='px-10 py-3 bg-[#1ebd48] text-black rounded-lg'> Sim </button>
        <button
          onClick={change} className='no-btn px-10 py-3 bg-[#cf2424] text-white rounded-lg'
          style={{
            top: y,
            left: x,
          }}
        >
          Nao
        </button>

        {isOpen &&
          <div onClick={toggle} className='bg-[#0007] fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'>
            <article className='relative mx-auto max-w-md rounded-lg bg-[#331247b9] p-4 py-16 mt-40'>
              <h2 className='text-center w-full'>Voce me deve um beijo agora 💋💋💋</h2>
            </article>
          </div>
        }
      </section>
    </div>
  )
}
