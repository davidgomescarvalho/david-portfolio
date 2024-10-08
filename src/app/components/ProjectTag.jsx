import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected ? "text-white border-green-500" : "text-[#ADB7BE]-600 hover:border-white"
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer m-2`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  )
}

export default ProjectTag
