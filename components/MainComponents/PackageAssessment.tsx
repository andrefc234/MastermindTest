// components/PackageAssessment.js
import React from 'react'

export default function PackageAssessment() {
  return (
    <div className="flex justify-center py-5 my-5">
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center w-full max-w-xl">
        <p className="text-xl mb-4">Curious which package is best for you?</p>
        <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">
          TAKE THIS ASSESSMENT
        </button>
      </div>
    </div>
  )
}

  